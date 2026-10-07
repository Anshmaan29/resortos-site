import { ArrowRight, BellRing, History } from "lucide-react";
import { Container, Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { formatINR } from "./mock-data";

const KPIS = [
  { label: "Occupancy today", value: "62%" },
  { label: "In-house guests", value: "26" },
  { label: "OTA receivables pending", value: formatINR(184300) },
  { label: "Open review items", value: "4" },
];

const REVIEW_ITEMS = [
  {
    title: "Night shift closed with a cash variance",
    detail: "Shift #482 · Front desk · variance of ₹1,240",
  },
  {
    title: "OTA receivable pending 12 days",
    detail: `${formatINR(46800)} · follow-up drafted for your approval`,
  },
  {
    title: "Extended maintenance hold requested",
    detail: "Rooms 106, 204 · plumbing work continuing",
  },
  {
    title: "Weekend rate change proposed",
    detail: "Deluxe rooms +8% · Fri–Sun · by Manager",
  },
];

const ACTIVITY = [
  { time: "09:42", text: "Priya S. closed shift #482", tag: "Front desk" },
  { time: "09:15", text: "Express check-in · Room 105", tag: "Front desk" },
  { time: "08:50", text: "Weekend rate plan updated", tag: "Manager" },
  { time: "08:12", text: "Credit note CN-2026-0118 issued", tag: "Accounts" },
];

export function OwnerView() {
  return (
    <Section id="owner" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Owner visibility"
          title="Your resort should not become a black box when you leave the property."
          sub="Owners see current operations, occupancy, shifts, accounts, receivables and the audit trail — without calling the front desk for every answer."
        />

        <Reveal className="mt-12">
          <div
            className="overflow-hidden rounded-panel border border-line bg-ink text-white shadow-mock"
            role="img"
            aria-label="Illustrative preview of the ResortOS owner overview with fictional sample data"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/50">
                  Owner overview
                </p>
                <p className="mt-0.5 text-[16px] font-bold">
                  Palm Meadows Resort
                </p>
              </div>
              <span className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-semibold text-white/70">
                Today · 8 Oct 2026
              </span>
            </div>

            {/* KPIs */}
            <dl className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
              {KPIS.map((kpi) => (
                <div key={kpi.label} className="bg-ink px-5 py-5 sm:px-7">
                  <dt className="text-[12px] font-medium text-white/55">
                    {kpi.label}
                  </dt>
                  <dd className="mt-1 text-[24px] font-bold tracking-tight">
                    {kpi.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="grid gap-px bg-white/10 lg:grid-cols-2">
              {/* Review queue */}
              <div className="bg-ink p-5 sm:p-7">
                <div className="mb-4 flex items-center gap-2">
                  <BellRing
                    className="h-4 w-4 text-brand-accent"
                    aria-hidden="true"
                  />
                  <h3 className="text-[14px] font-bold">Needs your review</h3>
                </div>
                <ul className="space-y-2.5">
                  {REVIEW_ITEMS.map((item) => (
                    <li
                      key={item.title}
                      className="group flex items-center justify-between gap-3 rounded-[10px] border border-white/10 bg-white/[0.04] px-4 py-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-[13.5px] font-semibold">
                          {item.title}
                        </p>
                        <p className="mt-0.5 truncate text-[12px] text-white/50">
                          {item.detail}
                        </p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-[11.5px] font-bold text-white">
                        Review
                        <ArrowRight
                          className="h-3 w-3"
                          aria-hidden="true"
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activity */}
              <div className="bg-ink p-5 sm:p-7">
                <div className="mb-4 flex items-center gap-2">
                  <History
                    className="h-4 w-4 text-brand-accent"
                    aria-hidden="true"
                  />
                  <h3 className="text-[14px] font-bold">
                    Latest operational activity
                  </h3>
                </div>
                <ol className="space-y-0">
                  {ACTIVITY.map((a, i) => (
                    <li key={a.time} className="relative flex gap-4 pb-5 last:pb-0">
                      {i < ACTIVITY.length - 1 && (
                        <span
                          className="absolute left-[34px] top-8 h-[calc(100%-24px)] w-px bg-white/10"
                          aria-hidden="true"
                        />
                      )}
                      <span className="w-[68px] shrink-0 pt-0.5 text-right text-[11.5px] font-semibold text-white/45">
                        {a.time}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[13.5px] font-medium leading-snug">
                          {a.text}
                        </p>
                        <p className="mt-0.5 text-[11.5px] text-white/45">
                          {a.tag} · recorded in audit log
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <p className="border-t border-white/10 px-5 py-3 text-[11.5px] text-white/40 sm:px-7">
              Illustrative demo content — fictional property data shown for
              demonstration.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
