# TOEFL 100 Sentences — Ebbinghaus Learning System

A web app that helps you memorize the 100 must-know TOEFL sentences by
scheduling reviews along the **Ebbinghaus forgetting curve**.

The 100 sentences are split across **20 learning days** (5 per day). Each
day you learn, the system automatically schedules the reviews for that
day at **+1, +2, +4, +7, and +15 days** later. The whole timeline runs
35 days: 20 days of new content + 15 days of pure review.

## Features

- **Ebbinghaus review schedule** — +1, +2, +4, +7, +15 days after learning
- **Persistent progress** — your completed days, review count, and current
  position are saved to disk
- **Today's Reviews counter** — shows the exact sentences due today based
  on the day-number delta
- **Adjustable timeline cursor** — `setday` lets you fast-forward (without
  polluting completed days) so you can preview the schedule
- **Two equivalent run modes** — plain Node (`server.js`) or Docker
- **Self-contained** — no external database, no telemetry

## Tech stack

- **Backend:** Node.js + Express
- **Frontend:** vanilla HTML / CSS / JS (no build step)
- **Data:** `sentences.json` (100 entries) + `progress.json` (per-user state)
- **Container:** `node:20-alpine`

## Quick start

### Option A — Run with Docker

```bash
docker build -t toefl-learning .
docker run -d --name toefl-learning -p 8081:8081 toefl-learning
```

Open http://localhost:8081

To persist `progress.json` across container restarts, mount it:

```bash
docker run -d --name toefl-learning \
  -p 8081:8081 \
  -v $(pwd)/progress.json:/app/progress.json \
  toefl-learning
```

### Option B — Run with Node directly

```bash
npm install
node server.js
```

Open http://localhost:8081

## Project structure

```
toefl-learning/
├── server.js                 # Main server (Node + Express)
├── src/
│   ├── server.ts             # TypeScript source of server.js
│   ├── data/sentences.ts     # 100 sentences + review-date logic
│   └── types/index.ts        # Shared types
├── public/
│   └── index.html            # Frontend (vanilla JS)
├── sentences.json            # 100 sentences (used by server.js)
├── Dockerfile
├── package.json
├── tsconfig.json
└── .gitignore
```

## How the review schedule works

For a learning day `D`, the system schedules reviews at:

| Interval | When it fires |
|---:|---|
| +1  | 1 day after learning  |
| +2  | 2 days after learning |
| +4  | 4 days after learning |
| +7  | 7 days after learning |
| +15 | 15 days after learning |

A day `D` is **due for review today** if `currentDay - D` is in `{1, 2, 4, 7, 15}`.

The frontend's "Today's Reviews" counter multiplies that by 5 (sentences
per day) and the review list expands each due day into its 5 sentences.

## API

| Method | Path | Description |
|---|---|---|
| `GET`  | `/api/sentences` | All 100 sentences |
| `GET`  | `/api/sentences/:id` | One sentence by id |
| `GET`  | `/api/learning/start` | Mark the start date |
| `GET`  | `/api/learning/progress` | Current day, completed-days count, sentences learned, **today's reviews count** |
| `GET`  | `/api/learning/today` | Today's 5 learning sentences (null after day 20) |
| `POST` | `/api/learning/complete/:day` | Mark a day as completed |
| `GET`  | `/api/learning/reviews` | The list of sentences due for review today |
| `GET`  | `/api/learning/stats` | Lightweight stats snapshot |
| `POST` | `/api/learning/setday` | Move the timeline cursor (does **not** mark skipped days as completed) |
| `POST` | `/api/learning/reset` | Wipe progress |

## Data model

`progress.json`:

```json
{
  "startedAt": "2026-06-04",
  "currentDay": 21,
  "completedDays": [1, 2, 3, ..., 20]
}
```

- `startedAt` — ISO date the user clicked "Start"
- `currentDay` — cursor on the 1–35 timeline
- `completedDays` — only days the user actually completed; capped at 1–20
  for the sentences-learned count

## Notes on the counting logic

- **Sentences Learned** is `min(completedDays ∩ [1..20] × 5, 100)`.
  Day 21+ is the review-only phase and does not contribute new sentences.
- **Today's Reviews** uses `currentDay - day ∈ {1, 2, 4, 7, 15}`, with
  `setday` only moving the cursor (it does **not** auto-complete the
  skipped days).

## License

Personal project — all rights reserved by the author.
