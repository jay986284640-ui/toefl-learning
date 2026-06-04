import express, { Request, Response } from 'express';
import cors from 'cors';
import { join } from 'path';
import { sentences, getSentenceById, getSentencesForDay, calculateReviewDates } from '../data/sentences';

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(join(__dirname, '../../public')));

// In-memory store for progress (in production, use a database)
interface ProgressStore {
  [key: string]: {
    startedAt: string;
    currentDay: number;
    completedDays: number[];
    reviewDates: Record<number, string[]>;
    lastReviewDate: string | null;
  };
}

const progressStore: ProgressStore = {};

// Helper to get client IP for session
function getClientId(req: Request): string {
  return req.ip || 'default';
}

// API Routes
app.get('/api/sentences', (req: Request, res: Response) => {
  res.json(sentences);
});

app.get('/api/sentences/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const sentence = getSentenceById(id);
  if (sentence) {
    res.json(sentence);
  } else {
    res.status(404).json({ error: 'Sentence not found' });
  }
});

app.get('/api/learning/start', (req: Request, res: Response) => {
  const clientId = getClientId(req);
  let progress = progressStore[clientId];

  if (!progress) {
    progress = {
      startedAt: new Date().toISOString().split('T')[0],
      currentDay: 1,
      completedDays: [],
      reviewDates: {},
      lastReviewDate: null
    };
    progressStore[clientId] = progress;
  }

  res.json({ success: true, progress });
});

app.get('/api/learning/progress', (req: Request, res: Response) => {
  const clientId = getClientId(req);
  const progress = progressStore[clientId];

  if (progress) {
    // Calculate today's reviews
    const today = new Date().toISOString().split('T')[0];
    const todayReviews: number[] = [];

    for (const sentenceId of Object.keys(progress.reviewDates)) {
      const reviewDates = progress.reviewDates[parseInt(sentenceId)];
      if (reviewDates && reviewDates.includes(today)) {
        todayReviews.push(parseInt(sentenceId));
      }
    }

    const todayLearning = progress.currentDay <= 20 ? {
      day: progress.currentDay,
      sentenceIds: getSentencesForDay(progress.currentDay),
      isCompleted: progress.completedDays.includes(progress.currentDay)
    } : null;

    res.json({
      started: !!progress.startedAt,
      currentDay: progress.currentDay,
      completedDays: progress.completedDays.length,
      sentencesLearned: progress.completedDays.length * 5,
      todayReviewsCount: todayReviews.length,
      todayLearning,
      totalDays: 35
    });
  } else {
    res.json({
      started: false,
      currentDay: 0,
      completedDays: 0,
      sentencesLearned: 0,
      todayReviewsCount: 0,
      todayLearning: null,
      totalDays: 35
    });
  }
});

app.get('/api/learning/today', (req: Request, res: Response) => {
  const clientId = getClientId(req);
  const progress = progressStore[clientId];

  if (!progress || !progress.startedAt) {
    res.json(null);
    return;
  }

  if (progress.currentDay > 20) {
    res.json(null);
    return;
  }

  const sentenceIds = getSentencesForDay(progress.currentDay);

  res.json({
    day: progress.currentDay,
    sentenceIds,
    isCompleted: progress.completedDays.includes(progress.currentDay)
  });
});

app.post('/api/learning/complete/:day', (req: Request, res: Response) => {
  const clientId = getClientId(req);
  const day = parseInt(req.params.day);
  let progress = progressStore[clientId];

  if (!progress) {
    progress = {
      startedAt: new Date().toISOString().split('T')[0],
      currentDay: 1,
      completedDays: [],
      reviewDates: {},
      lastReviewDate: null
    };
  }

  if (!progress.completedDays.includes(day)) {
    progress.completedDays.push(day);

    // Calculate and store review dates for this day (Ebbinghaus: day 1, 2, 4, 7, 15)
    const learningDate = new Date(progress.startedAt);
    const reviewDates = calculateReviewDates(learningDate, day);
    const dayStartId = (day - 1) * 5 + 1;

    for (let i = 0; i < 5; i++) {
      const sentenceId = dayStartId + i;
      progress.reviewDates[sentenceId] = reviewDates;
    }

    // Move to next day if not completed
    if (day < 20) {
      progress.currentDay = day + 1;
    } else if (day === 20) {
      // All 20 days of learning complete — move to review-only phase (days 21-34)
      progress.currentDay = 21;
    }
  }

  progressStore[clientId] = progress;
  res.json({ success: true });
});

app.get('/api/learning/reviews', (req: Request, res: Response) => {
  const clientId = getClientId(req);
  const progress = progressStore[clientId];
  const today = new Date().toISOString().split('T')[0];

  if (!progress) {
    res.json({ date: today, items: [] });
    return;
  }

  const reviewItems: Array<{
    sentenceId: number;
    reviewDate: string;
    reviewDay: number;
  }> = [];

  for (const sentenceId of Object.keys(progress.reviewDates)) {
    const reviewDates = progress.reviewDates[parseInt(sentenceId)];
    if (reviewDates && reviewDates.includes(today)) {
      reviewItems.push({
        sentenceId: parseInt(sentenceId),
        reviewDate: today,
        reviewDay: Math.ceil(parseInt(sentenceId) / 5)
      });
    }
  }

  // Sort by sentence ID
  reviewItems.sort((a, b) => a.sentenceId - b.sentenceId);

  res.json({ date: today, items: reviewItems });
});

app.get('/api/learning/stats', (req: Request, res: Response) => {
  const clientId = getClientId(req);
  const progress = progressStore[clientId];
  const today = new Date().toISOString().split('T')[0];

  if (!progress) {
    res.json({
      started: false,
      currentDay: 0,
      completedDays: 0,
      totalDays: 35,
      sentencesLearned: 0,
      todayReviewsCount: 0
    });
    return;
  }

  // Calculate today's reviews count
  let todayReviewsCount = 0;
  for (const sentenceId of Object.keys(progress.reviewDates)) {
    const reviewDates = progress.reviewDates[parseInt(sentenceId)];
    if (reviewDates && reviewDates.includes(today)) {
      todayReviewsCount++;
    }
  }

  res.json({
    started: !!progress.startedAt,
    currentDay: progress.currentDay,
    completedDays: progress.completedDays.length,
    totalDays: 35,
    sentencesLearned: progress.completedDays.length * 5,
    todayReviewsCount
  });
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`TOEFL Learning Server running on http://localhost:${PORT}`);
});
