import { createFileRoute, Link } from "@tanstack/react-router";
import { Area, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowRight, BatteryCharging, BedDouble, BriefcaseBusiness, CalendarDays, Clock3, HeartPulse, LockKeyhole, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DemoBadge, Gauge, PageHeading, SectionTitle } from "@/components/freemind-shell";
import { chartColors, MetricCard, Stat, tooltipStyle } from "@/components/analytics-elements";

export const Route = createFileRoute("/")({ head: () => ({ meta: [{ title: "Personnel Overview | FreeMind" }, { name: "description", content: "Synthetic personnel wellbeing, workload, sleep and recovery overview." }, { property: "og:title", content: "Personnel Overview | FreeMind" }, { property: "og:description", content: "A predictive personnel wellness dashboard demonstration." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: Dashboard });

const trends = [
  { day: "Mon", stress: 42, workload: 68, recovery: 58 }, { day: "Tue", stress: 45, workload: 76, recovery: 55 }, { day: "Wed", stress: 40, workload: 71, recovery: 61 },
  { day: "Thu", stress: 47, workload: 84, recovery: 56 }, { day: "Fri", stress: 38, workload: 73, recovery: 64 }, { day: "Sat", stress: 35, workload: 66, recovery: 67 }, { day: "Sun", stress: 32, workload: 62, recovery: 72 },
];
const checkins = [{ day: "Today", mood: "Good", energy: "Moderate" }, { day: "Yesterday", mood: "Neutral", energy: "Low" }, { day: "2 days ago", mood: "Good", energy: "Good" }, { day: "3 days ago", mood: "Stressed", energy: "Low" }];

function Dashboard() {
  return <>
    <PageHeading eyebrow="Thursday · 17 September" title="Good Morning, Officer" description="Here’s an overview of your recent wellbeing and workload." actions={<DemoBadge />} />
    <section className="grid gap-5 xl:grid-cols-[1.35fr_1fr]">
      <Card className="overflow-hidden border-primary/20 bg-card p-6 shadow-soft md:p-8"><div className="flex flex-col items-center gap-7 md:flex-row"><Gauge value={78} /><div className="flex-1"><p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Personnel Wellbeing Status</p><h2 className="mt-2 font-display text-3xl font-bold">Stable</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Based on recent workload, duty patterns, sleep, leave and voluntary wellness inputs.</p><div className="mt-5 flex items-start gap-2 rounded-lg bg-muted p-3 text-xs leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />This wellbeing score is an early warning indicator and not a medical diagnosis.</div></div></div></Card>
      <Card className="border-border p-6 shadow-soft"><SectionTitle title="Recent Duty Pattern" description="Current 7-day operational snapshot" /><div className="grid grid-cols-2 gap-3"><Stat label="Average Duty Hours" value="9.2 hrs/day" /><Stat label="Night Shifts" value="4" /><Stat label="Consecutive Days" value="6" /><Stat label="Deployment Frequency" value="Moderate" /></div></Card>
    </section>
    <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
      <MetricCard icon={<HeartPulse />} label="Stress Risk" value="32%" status="Low" change="↓ 8% from last week" tone="good" />
      <MetricCard icon={<BriefcaseBusiness />} label="Workload" value="74%" status="Moderately High" tone="warning" />
      <MetricCard icon={<BedDouble />} label="Sleep" value="6h 42m" status="Below baseline" tone="warning" />
      <MetricCard icon={<BatteryCharging />} label="Recovery / Rest" value="68%" status="Improving" tone="good" />
      <MetricCard icon={<CalendarDays />} label="Leave Balance" value="12 days" status="2 used this month" />
      <MetricCard icon={<Clock3 />} label="Duty Hours" value="46 hrs/week" status="4h below last week" tone="good" />
    </section>
    <section className="mt-8 grid gap-5 xl:grid-cols-[1.65fr_1fr]">
      <Card className="border-border p-5 shadow-soft md:p-6"><SectionTitle title="Your Wellbeing Trends" description="Stress, workload and recovery indicators · Last 7 days" /><div className="h-80"><ResponsiveContainer width="100%" height="100%"><ComposedChart data={trends} margin={{ top: 12, right: 8, left: -24, bottom: 0 }}><CartesianGrid strokeDasharray="4 4" stroke={chartColors.grid} vertical={false} /><XAxis dataKey="day" tick={{ fill: chartColors.text, fontSize: 12 }} axisLine={false} tickLine={false} /><YAxis domain={[0,100]} tick={{ fill: chartColors.text, fontSize: 12 }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Area type="monotone" dataKey="recovery" stroke={chartColors.recovery} fill={chartColors.recovery} fillOpacity={0.08} strokeWidth={2.5} /><Line type="monotone" dataKey="stress" stroke={chartColors.stress} strokeWidth={2.5} dot={{ r: 3 }} /><Line type="monotone" dataKey="workload" stroke={chartColors.workload} strokeWidth={2.5} dot={{ r: 3 }} /></ComposedChart></ResponsiveContainer></div><div className="mt-2 flex flex-wrap justify-center gap-5 text-xs font-semibold"><span className="text-warning">● Stress indicator</span><span className="text-demo-foreground">● Workload</span><span className="text-success">● Recovery</span></div></Card>
      <Card className="border-border p-6 shadow-soft"><SectionTitle title="Recent Wellness Check-ins" description="Voluntary self-reported inputs" /><div className="space-y-1">{checkins.map((item, i) => <div key={item.day} className="relative flex gap-3 pb-5"><div className="relative z-10 mt-1.5 size-3 rounded-full border-2 border-primary bg-card" />{i < checkins.length - 1 && <div className="absolute left-[5px] top-4 h-full w-px bg-border" />}<div className="flex flex-1 items-start justify-between gap-3"><div><p className="text-sm font-bold">{item.day}</p><p className="mt-1 text-xs text-muted-foreground">Mood: <span className="font-semibold text-foreground">{item.mood}</span></p></div><span className="status-neutral">Energy: {item.energy}</span></div></div>)}</div></Card>
    </section>
    <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.6fr]">
      <Card className="flex items-start gap-4 border-primary/20 bg-accent p-5"><LockKeyhole className="mt-1 size-5 shrink-0 text-primary" /><div><h2 className="font-display font-bold">Your information is protected</h2><p className="mt-1 text-xs leading-5 text-muted-foreground">Your wellness information is voluntary and protected. FreeMind uses anonymized and secure indicators to identify early signs of stress and workload imbalance.</p></div></Card>
      <Link to="/analytics" className="group flex items-center justify-between gap-5 rounded-xl bg-primary p-6 text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"><div><h2 className="font-display text-xl font-bold">Show Detailed Analytics</h2><p className="mt-1 text-sm opacity-85">View your personalized stress, workload, sleep, duty and wellbeing trends.</p></div><span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15"><ArrowRight className="size-5 transition-transform group-hover:translate-x-1" /></span></Link>
    </section>
  </>;
}