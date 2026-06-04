export interface Vocabulary {
  word: string;
  pronunciation: string;
  meaning: string;
  memory?: string;
  synonym?: string;
  root?: string;
  collocation?: string;
  reference?: string;
  association?: string;
  antonym?: string;
}

export interface TopicWord {
  word: string;
  pronunciation?: string;
  meaning?: string;
}

export interface Sentence {
  id: number;
  english: string;
  chinese: string;
  grammar: string;
  vocabulary: Vocabulary[];
  topic: Record<string, TopicWord[]>;
}

export interface LearningProgress {
  startedAt: string;
  currentDay: number;
  completedDays: number[];
  reviewDates: Record<number, string[]>;
  lastReviewDate: string | null;
}

export interface ReviewItem {
  sentenceId: number;
  sentence: Sentence;
  reviewDate: string;
  reviewDay: number;
}
