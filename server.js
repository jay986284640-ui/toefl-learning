import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sentencesData = JSON.parse(readFileSync(join(__dirname, 'sentences.json'), 'utf-8')).sentences;

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(join(__dirname, 'public')));

function getSentencesForDay(day) {
  const startId = (day - 1) * 5 + 1;
  return [startId, startId + 1, startId + 2, startId + 3, startId + 4];
}

function getSentenceById(id) {
  return sentencesData.find(s => s.id === id);
}

app.get('/api/sentences', (req, res) => {
  res.json(sentencesData);
});

app.get('/api/sentences/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sentence = getSentenceById(id);
  if (sentence) {
    res.json(sentence);
  } else {
    res.status(404).json({ error: 'Sentence not found' });
  }
});

const PROGRESS_FILE = join(__dirname, 'progress.json');

function loadProgress() {
  try {
    if (existsSync(PROGRESS_FILE)) {
      return JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return {
    startedAt: null,
    currentDay: 1,
    completedDays: []
  };
}

function saveProgress() {
  try {
    writeFileSync(PROGRESS_FILE, JSON.stringify(globalProgress, null, 2));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

let globalProgress = loadProgress();

app.get('/api/learning/start', (req, res) => {
  if (!globalProgress.startedAt) {
    globalProgress.startedAt = new Date().toISOString().split('T')[0];
    saveProgress();
  }
  res.json({ success: true, progress: globalProgress });
});

app.get('/api/learning/progress', (req, res) => {
  const today = new Date().toISOString().split('T')[0];

  // Ebbinghaus curve review intervals: 1, 2, 4, 7, 15 days after learning
  const ebbinghausIntervals = [1, 2, 4, 7, 15];

  // Today's learning sentences (only for days 1-20)
  const todayLearning = globalProgress.currentDay <= 20 ? {
    day: globalProgress.currentDay,
    sentenceIds: getSentencesForDay(globalProgress.currentDay),
    isCompleted: globalProgress.completedDays.includes(globalProgress.currentDay)
  } : null;

  // Count reviews due today — by the Ebbinghaus interval between the learning
  // day and the current day. `currentDay` is treated as the user's position
  // along the 1-35 timeline; `setday` is a fast-forward that only moves the
  // cursor, it does NOT mark the skipped days as completed.
  let reviewsCount = 0;
  for (const day of globalProgress.completedDays) {
    if (day < globalProgress.currentDay) {
      const daysSinceLearning = globalProgress.currentDay - day;
      if (ebbinghausIntervals.includes(daysSinceLearning)) {
        reviewsCount += 5;
      }
    }
  }

  // Only the 20 learning days introduce new sentences (5 per day = 100 total).
  // Day 21+ is the review-only phase, so it must not bump the learned count.
  const learningDaysDone = globalProgress.completedDays.filter(d => d >= 1 && d <= 20).length;
  const sentencesLearned = learningDaysDone * 5;

  res.json({
    started: !!globalProgress.startedAt,
    currentDay: globalProgress.currentDay,
    completedDays: globalProgress.completedDays.length,
    sentencesLearned,
    todayReviewsCount: reviewsCount,
    todayLearning,
    totalDays: 35
  });
});

app.get('/api/learning/today', (req, res) => {
  if (!globalProgress.startedAt) {
    res.json(null);
    return;
  }

  // After day 20, no more learning content — only reviews
  if (globalProgress.currentDay > 20) {
    res.json(null);
    return;
  }

  const sentenceIds = getSentencesForDay(globalProgress.currentDay);

  res.json({
    day: globalProgress.currentDay,
    sentenceIds,
    isCompleted: globalProgress.completedDays.includes(globalProgress.currentDay)
  });
});

app.post('/api/learning/complete/:day', (req, res) => {
  const day = parseInt(req.params.day);

  if (!globalProgress.completedDays.includes(day)) {
    globalProgress.completedDays.push(day);
    globalProgress.completedDays.sort((a, b) => a - b);
  }

  // Move to next day if not at end
  if (day < 20 && globalProgress.currentDay <= day) {
    globalProgress.currentDay = day + 1;
  } else if (day === 20) {
    // All 20 days of learning complete — move to review-only phase (days 21-35)
    globalProgress.currentDay = 21;
  }

  saveProgress();
  res.json({ success: true });
});

app.get('/api/learning/reviews', (req, res) => {
  const today = new Date().toISOString().split('T')[0];

  // Ebbinghaus curve review intervals: 1, 2, 4, 7, 15 days after learning
  const ebbinghausIntervals = [1, 2, 4, 7, 15];

  const reviewItems = [];

  // Reviews follow the Ebbinghaus interval between the learning day and the
  // current day. setday only moves the cursor, it does NOT mark skipped days
  // as completed — so only the days the user actually completed show up here.
  for (const day of globalProgress.completedDays) {
    if (day < globalProgress.currentDay) {
      const daysSinceLearning = globalProgress.currentDay - day;
      if (ebbinghausIntervals.includes(daysSinceLearning)) {
        const sentenceIds = getSentencesForDay(day);
        for (const sentenceId of sentenceIds) {
          reviewItems.push({
            sentenceId: sentenceId,
            reviewDate: today,
            reviewDay: day,
            daysSinceLearning: daysSinceLearning
          });
        }
      }
    }
  }

  reviewItems.sort((a, b) => a.sentenceId - b.sentenceId);

  res.json({
    date: today,
    items: reviewItems
  });
});

app.get('/api/learning/stats', (req, res) => {
  // Ebbinghaus curve review intervals: 1, 2, 4, 7, 15 days after learning
  const ebbinghausIntervals = [1, 2, 4, 7, 15];

  let reviewsCount = 0;
  for (const day of globalProgress.completedDays) {
    if (day < globalProgress.currentDay) {
      const daysSinceLearning = globalProgress.currentDay - day;
      if (ebbinghausIntervals.includes(daysSinceLearning)) {
        reviewsCount += 5;
      }
    }
  }

  // Only the 20 learning days introduce new sentences (5 per day = 100 total).
  // Day 21+ is the review-only phase, so it must not bump the learned count.
  const learningDaysDone = globalProgress.completedDays.filter(d => d >= 1 && d <= 20).length;
  const sentencesLearned = learningDaysDone * 5;

  res.json({
    started: !!globalProgress.startedAt,
    currentDay: globalProgress.currentDay,
    completedDays: globalProgress.completedDays.length,
    totalDays: 35,
    sentencesLearned,
    todayReviewsCount: reviewsCount
  });
});

app.post('/api/learning/reset', (req, res) => {
  globalProgress = {
    startedAt: null,
    currentDay: 1,
    completedDays: []
  };
  saveProgress();
  res.json({ success: true });
});

app.post('/api/learning/setday', (req, res) => {
  const day = parseInt(req.body.day);
  if (day >= 1 && day <= 35) {
    // setday is a fast-forward on the timeline cursor. It must NOT mark the
    // skipped days as completed — otherwise the review count explodes with
    // phantom +1/+2/+4/+7/+15 hits that the user never actually learned.
    globalProgress.currentDay = day;
    saveProgress();
    res.json({ success: true, currentDay: day });
  } else {
    res.status(400).json({ error: 'Day must be between 1 and 35' });
  }
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`TOEFL Learning Server running on http://localhost:${PORT}`);
});
