#!/usr/bin/env python3
"""Extract 100 sentences from TOEFL PDF - Version 5."""

import fitz
import re
import json

# Chinese quotes
LEFT_Q = chr(0x201C)   # U+201C, left double quotation mark
RIGHT_Q = chr(0x201D)  # U+201D, right double quotation mark


def parse_vocab_and_topic(lines, start_idx, end_idx=None):
    """Parse vocabulary and topic sections."""
    vocab = []
    topic = {}
    current_vocab = None
    current_topic_category = None
    i = start_idx

    if end_idx is None:
        end_idx = len(lines)

    # Build category pattern with proper Chinese quotes
    cat_pattern = r'^与[' + LEFT_Q + RIGHT_Q + r'"]([^' + LEFT_Q + RIGHT_Q + r'"]+)[' + LEFT_Q + RIGHT_Q + r'"]相关的词：?$'

    while i < len(lines) and i < end_idx:
        line = lines[i].strip()

        if not line:
            i += 1
            continue

        # Check for topic category header
        cat_match = re.match(cat_pattern, line)
        if cat_match:
            current_topic_category = cat_match.group(1)
            current_vocab = None  # Reset when entering a new category
            topic[current_topic_category] = []
            i += 1
            continue

        # Check for vocabulary word line
        vocab_match = re.match(r'^([a-zA-Z][a-zA-Z\-]*)\s+(/.+?/)\s+([a-z]+)\.\s*(.*)$', line)
        if vocab_match:
            word_entry = {
                'word': vocab_match.group(1),
                'pronunciation': vocab_match.group(2),
                'meaning': vocab_match.group(4).strip()
            }
            if current_topic_category:
                # Topic word - add to category
                topic[current_topic_category].append(word_entry)
            else:
                # Regular vocabulary word
                current_vocab = word_entry
                vocab.append(current_vocab)
            i += 1
            continue

        # Handle modifiers - attach to most recent word (vocab or topic)
        target = None
        if current_topic_category and topic[current_topic_category]:
            target = topic[current_topic_category][-1]
        elif current_vocab:
            target = current_vocab

        if target:
            if line.startswith('记忆 '):
                target['memory'] = line[3:].strip()
            elif line.startswith('同义 '):
                target['synonym'] = line[3:].strip()
            elif line.startswith('同根 '):
                target['root'] = line[3:].strip()
            elif line.startswith('搭配 '):
                target['collocation'] = line[3:].strip()
            elif line.startswith('参考 '):
                target['reference'] = line[3:].strip()

        i += 1

    return vocab, topic


def has_chinese(text):
    """Check if text contains Chinese characters."""
    chinese_chars = re.findall(r'[一-鿿]', text)
    return len(chinese_chars) > 0


def extract_sentence(num, start_page, next_start_page, doc):
    """Extract a single sentence."""
    end_page = next_start_page - 1 if next_start_page else len(doc) - 1

    # Collect all text
    full_text = []
    for i in range(start_page, end_page + 1):
        full_text.append(doc[i].get_text())

    block_text = '\n'.join(full_text)
    lines = [l.strip() for l in block_text.split('\n')]

    english_parts = []
    chinese_parts = []
    grammar_parts = []

    # State flags
    in_grammar = False
    in_vocab = False
    in_topic = False

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        if not line:
            i += 1
            continue

        # Skip sentence header
        if re.match(r'^Sentence\s+\d+$', line):
            i += 1
            continue

        # Check for section markers
        if line == '语法笔记':
            in_grammar = True
            in_vocab = False
            in_topic = False
            i += 1
            continue
        elif line == '核心词表':
            in_grammar = False
            in_vocab = True
            in_topic = False
            i += 1
            continue
        elif line == '主题归纳':
            in_grammar = False
            in_vocab = False
            in_topic = True
            i += 1
            continue

        if in_grammar:
            grammar_parts.append(line)
        elif in_vocab or in_topic:
            # Skip - handled separately
            pass
        else:
            # Sentence content
            if has_chinese(line):
                chinese_parts.append(line)
            else:
                english_parts.append(line)

        i += 1

    # Find section boundaries
    vocab_start = None
    topic_start = None

    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped == '核心词表':
            vocab_start = i
        elif stripped == '主题归纳':
            topic_start = i

    # Parse vocabulary and topic
    vocab = []
    topic = {}

    if vocab_start is not None:
        vocab_start_idx = vocab_start + 1
        if topic_start is not None:
            vocab_end_idx = topic_start
        else:
            vocab_end_idx = len(lines)

        vocab, topic = parse_vocab_and_topic(lines, vocab_start_idx, vocab_end_idx)

    if topic_start is not None:
        topic_start_idx = topic_start + 1
        topic_vocab, topic = parse_vocab_and_topic(lines, topic_start_idx, len(lines))

    # Combine parts
    english = ' '.join(english_parts)
    chinese = ' '.join(chinese_parts)
    grammar = ' '.join(grammar_parts)

    return {
        'id': num,
        'english': english,
        'chinese': chinese,
        'grammar': grammar,
        'vocabulary': vocab,
        'topic': topic
    }


def main():
    doc = fitz.open('/opt/TOEFL/100个句子记完7000个托福单词.pdf')

    # Find all sentence start pages (0-indexed)
    sentence_pages = {}
    for i in range(len(doc)):
        text = doc[i].get_text()
        first_line = text.split('\n')[0].strip() if text else ''
        match = re.match(r'^Sentence\s+(\d+)$', first_line)
        if match:
            sentence_pages[int(match.group(1))] = i

    print(f"Found {len(sentence_pages)} sentences")

    nums = sorted(sentence_pages.keys())
    results = []

    for idx, num in enumerate(nums):
        start_page = sentence_pages[num]
        next_start = sentence_pages[nums[idx + 1]] if idx + 1 < len(nums) else None

        result = extract_sentence(num, start_page, next_start, doc)
        results.append(result)

        if num <= 5:
            print(f"\n=== Sentence {num} ===")
            print(f"English: {result['english'][:100]}...")
            print(f"Chinese: {result['chinese'][:80]}...")
            print(f"Grammar: {result['grammar'][:80] if result['grammar'] else 'N/A'}...")
            print(f"Vocab ({len(result['vocabulary'])}): first 3 = {[(v['word'], v.get('memory','')[:20] if v.get('memory') else '') for v in result['vocabulary'][:3]]}")
            print(f"Topic categories: {list(result['topic'].keys())}")
            if result['topic']:
                for cat, words in result['topic'].items():
                    print(f"  {cat}: {len(words)} words, first = {words[0] if words else 'none'}")

    # Save
    output = {'sentences': results}
    with open('/tmp/sentences_extracted.json', 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)

    print(f"\nSaved {len(results)} sentences to /tmp/sentences_extracted.json")


if __name__ == '__main__':
    main()