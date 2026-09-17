import { Link } from "@tanstack/react-router";
import { Activity, Bell, BrainCircuit, HeartPulse, LayoutDashboard, Menu, Moon, ShieldAlert, Sun, UserRound } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "My Analytics", to: "/analytics", icon: Activity },
  { label: "Wellness", to: "/wellness", icon: HeartPulse },
  { label: "Alerts", to: "/alerts", icon: ShieldAlert },
  { label: "Profile", to: "/profile", icon: UserRound },
] as const;

export function FreeMindShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("freemind-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    document.documentElement.classList.toggle("dark", nextMode);
    window.localStorage.setItem("freemind-theme", nextMode ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-[1480px] items-center gap-5 px-5 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="FreeMind dashboard">
            <img src="/favicon.png" alt="FreeMind" className="h-11 w-11 rounded-lg object-cover object-top" />
            <div className="leading-none"><span className="font-display text-xl font-bold">Free<span className="text-primary">Mind</span></span><span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Personnel welfare</span></div>
          </Link>
          <nav className="ml-6 hidden flex-1 items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navigation.map(({ label, to, icon: Icon }) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} activeProps={{ className: "bg-accent text-primary" }} inactiveProps={{ className: "text-muted-foreground hover:bg-muted hover:text-foreground" }} className="flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors"><Icon className="size-4" />{label}</Link>)}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden rounded-full bg-demo px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-demo-foreground sm:inline">Synthetic demo</span>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"} title={darkMode ? "Light theme" : "Dark theme"}>{darkMode ? <Sun /> : <Moon />}</Button>
            <Button variant="ghost" size="icon" aria-label="Notifications" asChild><Link to="/alerts"><Bell /><span className="absolute mt-[-20px] ml-[18px] size-2 rounded-full bg-warning" /></Link></Button>
            <Link to="/profile" className="hidden items-center gap-2.5 sm:flex"><div className="flex size-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">AS</div><div className="hidden xl:block"><p className="text-sm font-bold">Officer A. Sharma</p><p className="text-xs text-muted-foreground">Inspector · Delhi</p></div></Link>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Open menu"><Menu /></Button>
          </div>
        </div>
        {open && <nav className="grid grid-cols-2 gap-2 border-t border-border bg-background p-4 lg:hidden">{navigation.map(({ label, to, icon: Icon }) => <Link key={to} to={to} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg bg-muted px-3 py-3 text-sm font-semibold"><Icon className="size-4 text-primary" />{label}</Link>)}</nav>}
      </header>
      <main className="mx-auto max-w-[1480px] px-5 py-7 lg:px-8 lg:py-10">{children}</main>
      <footer className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">FreeMind · SIH Problem Statement 26186 · All information shown is synthetic demonstration data.</footer>
    </div>
  );
}

export function PageHeading({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description: string; actions?: ReactNode }) {
  return <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div>{eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>}<h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">{title}</h1><p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{description}</p></div>{actions}</div>;
}

export function SectionTitle({ title, description }: { title: string; description?: string }) { return <div className="mb-4"><h2 className="font-display text-xl font-bold">{title}</h2>{description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}</div>; }

export function Gauge({ value, label = "Stable" }: { value: number; label?: string }) {
  const r = 44; const c = 2 * Math.PI * r;
  return <div className="relative size-44 shrink-0"><svg viewBox="0 0 100 100" className="-rotate-90"><circle cx="50" cy="50" r={r} fill="none" stroke="var(--muted)" strokeWidth="7" /><circle cx="50" cy="50" r={r} fill="none" stroke="var(--primary)" strokeWidth="7" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)} /></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="font-display text-3xl font-bold">{value}<span className="text-base text-muted-foreground">/100</span></span><span className="mt-1 rounded-full bg-success-soft px-3 py-1 text-xs font-bold text-success">{label}</span></div></div>;
}

export function DemoBadge() { return <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-primary"><BrainCircuit className="size-3.5" />Demo / synthetic data</span>; }