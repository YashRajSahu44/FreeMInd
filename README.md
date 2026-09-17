# Force Wellness Insight

Build a professional, competition-ready web prototype called “FreeMind” for the SIH Problem Statement:

“AI-Based Predictive Personnel Stress and Welfare Monitoring System for Uniformed Forces”

Problem Statement ID: 26186

The prototype is designed for a police/CAPF personnel officer who is ALREADY LOGGED IN. Do NOT create a login/signup page.

The UI should be inspired by the attached reference design: clean healthcare/wellness dashboard, rounded cards, soft green/white visual language, minimal layout, clear analytics, charts, and modern responsive UI. However, adapt the design specifically for police personnel welfare and stress monitoring rather than fitness tracking.

TECH STACK:

- React.js

- Tailwind CSS

- Recharts for graphs/charts

- Use realistic dummy/synthetic data

- Fully responsive

- No backend required for this prototype

- All buttons/navigation should work using frontend state/routes

- Do not use external APIs

- Clearly treat all displayed data as DEMO/SYNTHETIC data

==================================================

PAGE 1 — PERSONNEL OVERVIEW / HOME

==================================================

When the already-logged-in police officer opens FreeMind, show a personalized dashboard.

Top navigation:

- FreeMind logo

- Dashboard

- My Analytics

- Wellness

- Alerts

- Profile

- Notification icon

- Officer profile/avatar

Main welcome section:

“Good Morning, Officer”

“Here’s an overview of your recent wellbeing and workload.”

Show a prominent overall wellbeing card:

“Personnel Wellbeing Status”

Status: “Stable”

A circular/ring progress indicator around 78%

Small text:

“Based on recent workload, duty patterns, sleep, leave and voluntary wellness inputs.”

Important:

Do NOT present this as a medical diagnosis.

Use wording such as:

“Risk indicator”, “Wellbeing score”, “Stress trend”, or “Early warning indicator.”

Below it, create key metric cards:

1. Stress Risk

   - 32%

   - Low / Moderate / High indicator

   - “↓ 8% from last week”

2. Workload

   - 74%

   - “Moderately High”

   - Based on recent duty hours

3. Sleep

   - 6h 42m average

   - “Below personal baseline”

4. Recovery / Rest

   - 68%

   - “Improving”

5. Leave Balance

   - 12 days

   - “2 days used this month”

6. Duty Hours

   - 46 hrs/week

   - Show weekly comparison

Create a section:

“Your Wellbeing Trends”

Show a line chart for the last 7 days:

- Stress indicator

- Workload

- Recovery

Use a clean chart with legends and tooltips.

Create another card:

“Recent Duty Pattern”

Show:

- Average duty hours

- Night shifts

- Consecutive duty days

- Deployment frequency

Example synthetic data:

Average Duty Hours: 9.2 hrs/day

Night Shifts: 4

Consecutive Duty Days: 6

Deployment Frequency: Moderate

Create a section:

“Recent Wellness Check-ins”

Show a timeline/card list:

- Today — Mood: Good — Energy: Moderate

- Yesterday — Mood: Neutral — Energy: Low

- 2 days ago — Mood: Good — Energy: Good

- 3 days ago — Mood: Stressed — Energy: Low

Include a short privacy note:

“Your wellness information is voluntary and protected. FreeMind uses anonymized and secure indicators to identify early signs of stress and workload imbalance.”

MOST IMPORTANT CTA:

Create a large button/card:

“Show Detailed Analytics →”

Subtext:

“View your personalized stress, workload, sleep, duty and wellbeing trends.”

When clicked, navigate to PAGE 2.

==================================================

PAGE 2 — DETAILED PERSONNEL ANALYTICS

==================================================

This is the main analytics page.

Header:

“Personnel Analytics”

Subheading:

“Your personalized wellbeing and workload insights”

At the top show a date selector:

- Last 7 Days

- Last 30 Days

- Last 3 Months

And a “Last updated” timestamp.

--------------------------------------------------

SECTION 1 — AI WELLBEING OVERVIEW

--------------------------------------------------

Create a large analytics card:

“Overall Wellbeing Risk Indicator”

Show a large circular gauge:

78 / 100

Status:

“Stable”

Below it:

“Current indicators suggest relatively stable wellbeing with some workload-related pressure.”

Show contributing factors as horizontal bars:

Workload — 72%

Sleep — 61%

Duty Intensity — 68%

Leave/Recovery — 76%

Self-reported Wellness — 82%

Add a small label:

“AI-generated early warning indicator — not a medical diagnosis.”

--------------------------------------------------

SECTION 2 — STRESS TREND

--------------------------------------------------

Large line chart:

“Stress Indicator — Last 30 Days”

X-axis:

Dates

Y-axis:

Stress Indicator %

Show realistic synthetic fluctuations.

Highlight:

- Current: 32%

- Previous week: 40%

- Change: -8%

Add an insight card:

“Your stress indicator has decreased over the past week, while workload remains moderately high.”

Do not make definitive medical claims.

--------------------------------------------------

SECTION 3 — WORKLOAD ANALYTICS

--------------------------------------------------

Create a large card:

“Workload Analysis”

Show bar chart for the last 7 days:

Monday — 8h

Tuesday — 10h

Wednesday — 9h

Thursday — 11h

Friday — 8h

Saturday — 10h

Sunday — 6h

Below the chart show:

Average Daily Duty: 8.9 hrs

Weekly Duty Hours: 62 hrs

Night Duties: 3

Consecutive Duty Days: 5

Add:

“Workload pattern indicates increased duty intensity during the middle of the week.”

--------------------------------------------------

SECTION 4 — SLEEP & RECOVERY

--------------------------------------------------

Create a “Sleep & Recovery” analytics section.

Show a sleep bar/line chart for 7 days.

Example:

Mon — 6h 20m

Tue — 5h 50m

Wed — 7h 10m

Thu — 6h 05m

Fri — 6h 40m

Sat — 7h 20m

Sun — 7h

Show:

Average Sleep: 6h 38m

Recovery Score: 68%

Sleep Consistency: 74%

Add a simple insight:

“Sleep duration has improved over the last 3 days.”

--------------------------------------------------

SECTION 5 — DUTY & DEPLOYMENT ANALYTICS

--------------------------------------------------

Create cards and charts for:

- Deployment history

- Duty frequency

- Night shifts

- Transfer frequency

- Consecutive duty periods

- Training commitments

Use a combination of:

- Bar charts

- Donut charts

- Small metric cards

Example:

Current Deployment:

“Field Operations”

Deployment Duration:

“18 days”

Night Duties:

“4 this month”

Training:

“2 completed / 1 upcoming”

--------------------------------------------------

SECTION 6 — LEAVE & RECOVERY PATTERN

--------------------------------------------------

Show:

“Leave & Recovery Pattern”

Use a calendar-style visualization and small statistics.

Statistics:

Leave Used: 4 days

Leave Remaining: 12 days

Average Break Between Duties: 1.6 days

Recovery Trend: Improving

Show a monthly leave/recovery graph.

--------------------------------------------------

SECTION 7 — WELLNESS CHECK-IN ANALYTICS

--------------------------------------------------

Create:

“Voluntary Wellness Check-ins”

Show trend charts for:

Mood

Energy

Fatigue

Workload perception

Use simple 1–5 scales.

Example:

Mood: 4.1 / 5

Energy: 3.4 / 5

Fatigue: 2.8 / 5

Workload Perception: 3.9 / 5

Include:

“Based on voluntary self-reported wellness inputs.”

--------------------------------------------------

SECTION 8 — AI INSIGHTS / EARLY WARNING

--------------------------------------------------

Create a visually distinct card:

“AI-Generated Insights”

Show 3–4 insight cards:

1.

“Workload has increased by 14% compared with your recent baseline.”

2.

“Night duty frequency has increased during the current period.”

3.

“Sleep duration is slightly below your recent personal average.”

4.

“Recent wellness check-ins indicate improving mood.”

Use neutral language.

Add a button:

“View Recommendations”

Recommendations should be non-medical and supportive, for example:

- Consider scheduling adequate recovery time after consecutive duties.

- Review workload distribution with the appropriate supervisor if required.

- Maintain regular voluntary wellness check-ins.

- Access available organizational wellness resources.

--------------------------------------------------

SECTION 9 — PRIVACY & DATA PROTECTION

--------------------------------------------------

At the bottom create a privacy card:

“Your Privacy Matters”

Include:

✓ Wellness inputs are voluntary

✓ Data is encrypted

✓ Personal identifiers are minimized

✓ Role-based access control

✓ Analytics are designed for early intervention, not diagnosis

✓ Officers can access their own personal analytics

Use a shield/lock icon.

==================================================

DESIGN SYSTEM

==================================================

Overall style:

- Modern

- Professional

- Minimal

- Government/defence technology feel

- Healthcare/wellness dashboard inspiration

- Clean white background

- Soft mint/green accent

- Dark charcoal text

- Yellow/orange only for warnings or highlighted actions

- Rounded cards

- Subtle borders and shadows

- Lots of whitespace

- Professional typography

- Avoid excessive gradients

- Avoid flashy animations

- Avoid gaming-style UI

Use the attached UI reference as inspiration for:

- Card shapes

- Rounded corners

- Dashboard composition

- Circular progress indicators

- Charts

- Soft green color palette

- Minimal visual hierarchy

But DO NOT copy the fitness/wearable content from the reference. Replace it with police personnel wellbeing, stress, workload, duty, deployment, sleep, leave and wellness information.

==================================================

NAVIGATION

==================================================

Dashboard → Page 1

“My Analytics” → Page 2

“Show Detailed Analytics” button → Page 2

“Wellness” → wellness check-in screen

“Alerts” → early warning/notification screen

“Profile” → officer profile

The prototype should feel like a real working application even though all data is synthetic.

==================================================

IMPORTANT SIH PROTOTYPE REQUIREMENTS

==================================================

1. Assume the officer is already authenticated.

2. Do NOT create login/signup screens.

3. Use realistic synthetic police personnel data.

4. Clearly label data as synthetic/demo where appropriate.

5. The system should demonstrate predictive/early-warning analytics rather than medical diagnosis.

6. Make the analytics visually impressive because this will be demonstrated during an SIH presentation.

7. Prioritize charts and visualizations over large blocks of text.

8. Every major metric should have a clear label and understandable value.

9. Add tooltips when hovering over charts.

10. Make the UI responsive for laptop and tablet screens.

11. Use reusable React components for cards, charts, navigation and analytics sections.

12. Maintain consistent spacing, typography, icons and card design throughout the application.

13. Do not add unnecessary features that are not relevant to the SIH problem statement.

14. The final prototype should look like a polished government-grade personnel wellness dashboard, not a generic fitness application.

Create the complete React frontend with these two primary pages first:

1. Personnel Overview Dashboard

2. Detailed Personnel Analytics

Use frontend routing/state so clicking “Show Detailed Analytics” actually opens the analytics page.     attached freeMind logo

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b94bafe0-7196-471e-b0ba-eb4aac6f3680).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
