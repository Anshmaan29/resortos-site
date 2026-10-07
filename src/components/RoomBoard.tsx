"use client";

import { useState } from "react";
import { Container, Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { ROOM_BOARD, STATUS_META, type RoomStatus } from "./mock-data";

type Filter = "all" | "ready" | "occupied" | "attention";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All rooms" },
  { id: "ready", label: "Ready" },
  { id: "occupied", label: "Occupied" },
  { id: "attention", label: "Needs attention" },
];

function matches(room: { status: RoomStatus }, filter: Filter) {
  if (filter === "all") return true;
  if (filter === "attention")
    return ["dirty", "cleaning", "maintenance"].includes(room.status);
  return room.status === filter;
}

const ROOM_FOOTER: Partial<Record<RoomStatus, string>> = {
  ready: "Available for assignment",
  occupied: "In-house guest",
  "due-out": "Checkout · 11:00 AM",
  arriving: "ETA · 2:00 PM",
  cleaning: "Housekeeping assigned",
  maintenance: "Plumbing · since Tue",
  dirty: "Awaiting housekeeping",
};

export function RoomBoard() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = ROOM_BOARD.filter((room) => matches(room, filter));

  return (
    <Section id="room-board">
      <Container>
        <SectionHeading
          eyebrow="Front desk"
          title="Know exactly what is happening at the property."
          sub="Arrivals, departures, room readiness and in-house stays are visible from one operational dashboard."
        />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-panel border border-line bg-surface shadow-mock">
            {/* Panel header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <h3 className="text-[16px] font-bold tracking-tight text-ink">
                  Room board
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-[11.5px] font-bold text-brand-dark">
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-accent"
                    aria-hidden="true"
                  />
                  Live
                </span>
              </div>
              <p className="text-[12.5px] text-ink-muted">
                Thursday, 8 October 2026
              </p>
            </div>

            {/* Filters */}
            <div
              className="flex gap-2 overflow-x-auto border-b border-line px-5 py-3 sm:px-6"
              role="group"
              aria-label="Filter rooms by status"
            >
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={filter === f.id}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-[13px] font-semibold transition-colors ${
                    filter === f.id
                      ? "bg-brand text-white"
                      : "border border-line bg-paper text-ink-soft hover:border-brand/40 hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Board grid */}
            <ul className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 sm:p-6 lg:grid-cols-3">
              {visible.map((room) => {
                const meta = STATUS_META[room.status];
                const Icon = meta.icon;
                return (
                  <li
                    key={room.number}
                    className="rounded-card border border-line bg-paper p-4 transition-shadow hover:shadow-card sm:p-5"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                          Room
                        </p>
                        <p className="text-[26px] font-bold tracking-tight text-ink">
                          {room.number}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11.5px] font-bold ${meta.pill}`}
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {meta.label}
                      </span>
                    </div>
                    {room.guest && (
                      <p className="mt-3 truncate text-[13.5px] font-medium text-ink-soft">
                        {room.guest}
                      </p>
                    )}
                    <p className="mt-0.5 text-[12px] text-ink-muted">
                      {ROOM_FOOTER[room.status] ?? "—"}
                    </p>
                  </li>
                );
              })}
            </ul>

            {/* Legend */}
            <div className="border-t border-line bg-paper/60 px-5 py-4 sm:px-6">
              <ul
                aria-label="Room status legend"
                className="flex flex-wrap gap-x-5 gap-y-2"
              >
                {(Object.keys(STATUS_META) as RoomStatus[]).map((key) => {
                  const meta = STATUS_META[key];
                  const Icon = meta.icon;
                  return (
                    <li
                      key={key}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-soft"
                    >
                      <span
                        className={`inline-flex h-2 w-2 rounded-full ${meta.dot}`}
                        aria-hidden="true"
                      />
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {meta.label}
                    </li>
                  );
                })}
              </ul>
              <p className="demo-note mt-3">
                Illustrative demo content — fictional rooms and guests shown
                for demonstration.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
