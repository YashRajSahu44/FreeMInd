# FreeMind — AI-Based Predictive Personnel Stress & Welfare Monitoring System

A competition-ready web prototype built for **Smart India Hackathon Problem Statement 26186**: an AI-based predictive personnel stress and welfare monitoring system for uniformed forces.

FreeMind gives an officer one calm, trusted dashboard that turns duty patterns, sleep, leave and voluntary wellness check-ins into a single **early-warning indicator** — supportive and non-medical, never a diagnosis.

> ⚠️ **All data in this prototype is synthetic demonstration data.** Every screen is clearly labelled as such; no real personnel records are used or stored.

## Features

| Page | What it shows |
|------|---------------|
| **Personnel Overview** (`/`) | Wellbeing score gauge (e.g. 78/100 · Stable), six metric cards (stress risk, workload, sleep, recovery, leave balance, duty hours), 7-day wellbeing trends chart, recent duty pattern, wellness check-in timeline, privacy note |
| **My Analytics** (`/analytics`) | Nine chart-led sections — AI wellbeing overview, stress trend, workload analysis, sleep & recovery, duty & deployment, leave & recovery, voluntary check-ins, AI insights with supportive recommendations, and a privacy section — with 7-day / 30-day / 3-month range selection |
| **Wellness** (`/wellness`) | Voluntary 1–5 self-report check-in (mood, energy, workload manageability) |
| **Alerts** (`/alerts`) | Non-medical early-warning notifications (e.g. "duty intensity above baseline") |
| **Profile** (`/profile`) | Officer service details |

Additional touches: light **and** dark theme (persisted, respects system preference), responsive laptop + tablet layouts, hover tooltips on every chart.

## Design principles

- **Officer first** — the officer is pre-authenticated; there is intentionally no login/signup screen.
- **Early warning, not diagnosis** — all language is deliberately non-medical ("wellbeing score", "stress trend", "early warning indicator").
- **Privacy by design** — voluntary inputs, anonymized indicators, minimized identifiers, role-based access messaging.
- **Government-grade minimal aesthetic** — white background, soft mint/green accents, charcoal text, amber reserved for warnings; rounded cards, subtle borders, generous whitespace.

## Tech stack

- [React 19](https://react.dev) + TypeScript
- [TanStack Start](https://tanstack.com/start) — file-based routing, SSR
- [Tailwind CSS v4](https://tailwindcss.com) — semantic design tokens (see `src/styles.css`)
- [Recharts](https://recharts.org) — charts with tooltips
- [Lucide React](https://lucide.dev) — icons

No backend, no external APIs, no persistent personal data — the prototype runs entirely in the browser on local synthetic data.

## Getting started

```sh
npm install
npm run dev        # local dev server
npm run build      # production build
```

Requires Node.js 18+.

## Project structure

```
src/
├── assets/                       # FreeMind logo (asset pointer)
├── components/
│   ├── freemind-shell.tsx        # App shell, nav, theme toggle, gauge, headings
│   └── analytics-elements.tsx    # MetricCard, Stat, chart colors & tooltip styles
├── routes/
│   ├── index.tsx                 # Personnel Overview (dashboard)
│   ├── analytics.tsx             # Detailed Personnel Analytics
│   ├── wellness.tsx              # Voluntary wellness check-in
│   ├── alerts.tsx                # Early-warning alerts
│   └── profile.tsx               # Officer profile
└── styles.css                    # Design tokens, light/dark themes
```

## Notes

- Theme preference is stored in `localStorage` under `freemind-theme`.
- All demo values (duty hours, sleep, scores, trends) are hard-coded synthetic data defined alongside each page.
- Built with [Lovable](https://lovable.dev) — the code is fully self-contained and runs locally.
