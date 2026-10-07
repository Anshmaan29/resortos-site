"use client";

import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  BedDouble,
  Building2,
  CalendarClock,
  CalendarDays,
  Check,
  DoorOpen,
  LayoutDashboard,
  Plus,
  ReceiptText,
  ScrollText,
  Settings,
  UserPlus,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { LogoMark } from "./Logo";
import {
  ARRIVALS,
  DEPARTURES,
  HERO_ROOMS,
  STATUS_META,
  initials,
  type Room,
} from "./mock-data";

/* ---------------- Count-up hook for stat cards ---------------- */

function useCountUp(target: number, duration = 900) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { ref, value };
}

function StatCard({
  label,
  value,
  suffix,
  icon: Icon,
}: {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
}) {
  const { ref, value: display } = useCountUp(value);
  return (
    <div className="card !shadow-none p-4">
      <div className="flex items-center justify-between">
        <p className="text-[12.5px] font-medium text-ink-soft">{label}</p>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-[8px] bg-brand-soft text-brand">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-1.5 text-[26px] font-bold tracking-tight text-ink">
        <span ref={ref}>{display}</span>
        {suffix && (
          <span className="ml-1 text-[14px] font-medium text-ink-muted">
            {suffix}
          </span>
        )}
      </p>
    </div>
  );
}

/* ---------------- Sidebar ---------------- */

const NAV_ITEMS: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Reservations", icon: CalendarDays },
  { label: "Front Desk", icon: BedDouble },
  { label: "Guests", icon: Users },
  { label: "Billing", icon: ReceiptText },
  { label: "Accounts", icon: Building2 },
  { label: "Reports", icon: BarChart3 },
  { label: "Audit Log", icon: ScrollText },
  { label: "Settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside
      aria-label="Product navigation preview"
      className="hidden w-52 shrink-0 flex-col border-r border-line bg-surface py-4 md:flex"
    >
      <div className="flex items-center gap-2.5 px-4 pb-4">
        <LogoMark size={28} />
        <span className="text-[15px] font-bold tracking-tight text-ink">
          ResortOS
        </span>
      </div>
      <nav className="flex flex-col gap-0.5 px-2.5">
        {NAV_ITEMS.map((item) => (
          <span
            key={item.label}
            className={`flex items-center gap-2.5 rounded-[8px] px-3 py-2 text-[13px] font-medium ${
              item.active
                ? "bg-brand-soft text-brand-dark"
                : "text-ink-soft"
            }`}
            aria-current={item.active ? "page" : undefined}
          >
            <item.icon className="h-4 w-4" aria-hidden="true" />
            {item.label}
          </span>
        ))}
      </nav>
      <div className="mt-auto px-4 pt-4">
        <div className="rounded-[10px] border border-line bg-paper p-3">
          <p className="text-[11px] font-semibold text-ink">Business date</p>
          <p className="mt-0.5 text-[12px] text-ink-soft">08 Oct 2026</p>
        </div>
      </div>
    </aside>
  );
}

/* ---------------- Room tile ---------------- */

function RoomTile({ room }: { room: Room }) {
  const meta = STATUS_META[room.status];
  const Icon = meta.icon;
  return (
    <div className="min-w-[132px] flex-1 rounded-[10px] border border-line bg-surface p-3">
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-bold text-ink">{room.number}</span>
        <span
          className={`inline-flex h-2 w-2 rounded-full ${meta.dot}`}
          aria-hidden="true"
        />
      </div>
      <span
        className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-semibold ${meta.pill}`}
      >
        <Icon className="h-3 w-3" aria-hidden="true" />
        {meta.label}
      </span>
      {room.guest && (
        <p className="mt-1.5 truncate text-[11.5px] text-ink-muted">
          {room.guest}
        </p>
      )}
    </div>
  );
}

/* ---------------- Main preview ---------------- */

export function DashboardPreview() {
  return (
    <div
      className="overflow-hidden rounded-panel border border-line bg-surface shadow-mock"
      role="img"
      aria-label="Illustrative preview of the ResortOS front desk dashboard showing arrivals, departures and room status with fictional sample data"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-line bg-cream-100/70 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8d3c8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8d3c8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8d3c8]" />
        </div>
        <div className="mx-auto flex w-full max-w-md items-center justify-center rounded-[8px] border border-line bg-surface px-3 py-1.5">
          <span className="truncate text-[12px] text-ink-muted">
            pms.voittoventures.com/dashboard
          </span>
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>

      <div className="flex">
        <Sidebar />

        <div className="min-w-0 flex-1">
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-4 md:px-6">
            <div>
              <p className="text-[17px] font-bold tracking-tight text-ink">
                Good morning, Anshmaan
              </p>
              <p className="mt-0.5 text-[12.5px] text-ink-muted">
                Thursday, 8 October 2026
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-btn bg-brand px-3.5 py-2 text-[12.5px] font-semibold text-white">
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                New Booking
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-btn border border-line bg-surface px-3.5 py-2 text-[12.5px] font-semibold text-ink">
                <UserPlus className="h-3.5 w-3.5" aria-hidden="true" />
                Walk-in
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-btn border border-line bg-surface px-3.5 py-2 text-[12.5px] font-semibold text-ink">
                <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                Express Check-in
              </span>
            </div>
          </div>

          <div className="space-y-4 bg-paper/70 p-4 md:space-y-5 md:p-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              <StatCard
                label="Arrivals today"
                value={8}
                icon={CalendarClock}
              />
              <StatCard label="Departures today" value={5} icon={DoorOpen} />
              <StatCard label="Rooms in house" value={24} icon={BedDouble} />
              <StatCard
                label="Ready to sell"
                value={11}
                suffix="of 42"
                icon={Check}
              />
            </div>

            {/* Arrivals / departures */}
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="card !shadow-none p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[13.5px] font-bold text-ink">
                    Arrivals today
                  </h3>
                  <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-[11.5px] font-bold text-brand-dark">
                    8
                  </span>
                </div>
                <ul className="mock-scroll max-h-[264px] space-y-1 overflow-y-auto pr-1">
                  {ARRIVALS.map((a) => (
                    <li
                      key={a.name}
                      className="flex items-center gap-3 rounded-[8px] px-2 py-2 hover:bg-paper"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-200 text-[11px] font-bold text-ink-soft"
                        aria-hidden="true"
                      >
                        {initials(a.name)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-ink">
                          {a.name}
                        </p>
                        <p className="text-[11.5px] text-ink-muted">
                          {a.time} · {a.source}
                        </p>
                      </div>
                      {a.room ? (
                        <span className="rounded-[6px] border border-line bg-paper px-2 py-0.5 text-[11.5px] font-bold text-ink">
                          {a.room}
                        </span>
                      ) : (
                        <span className="rounded-[6px] bg-[#faf0dd] px-2 py-0.5 text-[11.5px] font-bold text-warn">
                          Unassigned
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card !shadow-none p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[13.5px] font-bold text-ink">
                    Departures today
                  </h3>
                  <span className="rounded-full bg-cream-200 px-2.5 py-0.5 text-[11.5px] font-bold text-ink-soft">
                    5
                  </span>
                </div>
                <ul className="space-y-1">
                  {DEPARTURES.map((d) => (
                    <li
                      key={d.name}
                      className="flex items-center gap-3 rounded-[8px] px-2 py-2 hover:bg-paper"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-200 text-[11px] font-bold text-ink-soft"
                        aria-hidden="true"
                      >
                        {initials(d.name)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-ink">
                          {d.name}
                        </p>
                        <p className="text-[11.5px] text-ink-muted">
                          {d.time} · Folio {d.folio.toLowerCase()}
                        </p>
                      </div>
                      <span className="rounded-[6px] border border-line bg-paper px-2 py-0.5 text-[11.5px] font-bold text-ink">
                        {d.room}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Room board strip */}
            <div className="card !shadow-none p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-[13.5px] font-bold text-ink">Room board</h3>
                <span className="text-[11.5px] font-medium text-ink-muted">
                  Live status
                </span>
              </div>
              <div className="mock-scroll flex gap-2.5 overflow-x-auto pb-1">
                {HERO_ROOMS.map((room) => (
                  <RoomTile key={room.number} room={room} />
                ))}
              </div>
            </div>

            <p className="demo-note">
              Illustrative preview — fictional sample data shown for
              demonstration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
