import { Check } from "lucide-react";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";
import { formatINR } from "./mock-data";

const POINTS = [
  "Direct bookings",
  "Walk-ins",
  "Room assignment",
  "Stay dates",
  "Guest details",
  "Source tracking",
  "Payment visibility",
  "Check-in / checkout flow",
];

const TIMELINE = [
  { label: "Enquiry", state: "done" },
  { label: "Confirmed", state: "done" },
  { label: "Checked in", state: "current" },
  { label: "Checked out", state: "todo" },
] as const;

export function Reservations() {
  return (
    <Section id="reservations" className="bg-surface">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow mb-5">Reservations</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              From enquiry to checkout, without losing context.
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
              Every booking carries its full story — who is coming, which room
              they are in, what has been paid, and where the booking came
              from. Nothing lives in someone&apos;s head or a chat thread.
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2.5 text-[14.5px] font-medium text-ink"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft">
                    <Check
                      className="h-3 w-3 text-brand-dark"
                      aria-hidden="true"
                    />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[13.5px] leading-relaxed text-ink-muted">
              ResortOS works with the way you already take bookings — direct,
              walk-in, company and OTA. It does not force a channel manager on
              you, and it does not claim integrations that aren&apos;t there.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="overflow-hidden rounded-panel border border-line bg-paper shadow-mock"
              role="img"
              aria-label="Illustrative preview of a reservation record in ResortOS with fictional sample data"
            >
              <div className="flex items-center justify-between border-b border-line bg-surface px-5 py-4">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-wider text-ink-muted">
                    Reservation
                  </p>
                  <p className="text-[16px] font-bold text-ink">RES-2026-1042</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 text-[12px] font-bold text-brand-dark">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-brand-accent"
                    aria-hidden="true"
                  />
                  Checked in
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-[13px] font-bold text-white"
                    aria-hidden="true"
                  >
                    AS
                  </span>
                  <div>
                    <p className="text-[15px] font-bold text-ink">
                      Aarav Sharma
                    </p>
                    <p className="text-[12.5px] text-ink-muted">
                      +91 98•••• •210 · ID verified
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-2 gap-3">
                  {[
                    { dt: "Check-in", dd: "8 Oct 2026" },
                    { dt: "Check-out", dd: "11 Oct 2026" },
                    { dt: "Room", dd: "104 · Deluxe Garden" },
                    { dt: "Source", dd: "Direct" },
                  ].map((row) => (
                    <div
                      key={row.dt}
                      className="rounded-[10px] border border-line bg-surface p-3"
                    >
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                        {row.dt}
                      </dt>
                      <dd className="mt-1 text-[13.5px] font-semibold text-ink">
                        {row.dd}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="rounded-[10px] border border-line bg-surface p-4">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-ink-muted">Total stay value</span>
                    <span className="font-bold text-ink">
                      {formatINR(24600)}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-[13px]">
                    <span className="text-ink-muted">Advance received</span>
                    <span className="font-semibold text-success">
                      {formatINR(8000)}
                    </span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-cream-200">
                    <div
                      className="h-full w-1/3 rounded-full bg-brand-accent"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <ol
                  aria-label="Stay progress"
                  className="flex items-center justify-between px-1 pt-1"
                >
                  {TIMELINE.map((step, i) => (
                    <li key={step.label} className="flex flex-1 items-center last:flex-none">
                      <div className="flex flex-col items-center gap-1.5">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                            step.state === "done"
                              ? "bg-brand text-white"
                              : step.state === "current"
                                ? "bg-brand-soft text-brand-dark ring-2 ring-brand-accent/40"
                                : "bg-cream-200 text-ink-muted"
                          }`}
                          aria-hidden="true"
                        >
                          {step.state === "done" ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            i + 1
                          )}
                        </span>
                        <span
                          className={`text-[10.5px] font-semibold ${
                            step.state === "todo"
                              ? "text-ink-muted"
                              : "text-ink"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      {i < TIMELINE.length - 1 && (
                        <span
                          className={`mx-1 mb-5 h-px flex-1 ${
                            step.state === "done" ? "bg-brand" : "bg-line"
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <p className="demo-note border-t border-line bg-surface px-5 py-3">
                Illustrative demo content — fictional reservation shown for
                demonstration.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
