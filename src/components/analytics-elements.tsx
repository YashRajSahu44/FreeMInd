import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

export function MetricCard({ icon, label, value, status, change, tone = "neutral" }: { icon: ReactNode; label: string; value: string; status: string; change?: string; tone?: "neutral" | "good" | "warning" }) {
  const Icon = change?.startsWith("↓") ? ArrowDownRight : change?.startsWith("↑") ? ArrowUpRight : Minus;
  return <Card className="border-border/80 p-5 shadow-soft"><div className="flex items-start justify-between"><div className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary">{icon}</div><span className={tone === "good" ? "status-good" : tone === "warning" ? "status-warning" : "status-neutral"}>{status}</span></div><p className="mt-5 text-sm font-semibold text-muted-foreground">{label}</p><p className="mt-1 font-display text-2xl font-bold">{value}</p>{change && <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-success"><Icon className="size-3.5" />{change}</p>}</Card>;
}

export function Stat({ label, value, note }: { label: string; value: string; note?: string }) { return <div className="rounded-lg border border-border bg-muted/40 p-4"><p className="text-xs font-semibold text-muted-foreground">{label}</p><p className="mt-1.5 font-display text-xl font-bold">{value}</p>{note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}</div>; }

export const chartColors = { stress: "var(--chart-stress)", workload: "var(--chart-workload)", recovery: "var(--chart-recovery)", sleep: "var(--chart-sleep)", grid: "var(--border)", text: "var(--muted-foreground)" };

export const tooltipStyle = { borderRadius: "8px", border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)", fontSize: "12px" };