import {
  CalendarClock,
  Database,
  Fingerprint,
  KeyRound,
  ScrollText,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";

const CONTROLS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ShieldCheck,
    title: "Protected from casual deletion",
    text: "Important operational records — reservations, folios, bills — cannot be deleted on a whim. Removal follows explicit, permissioned workflows.",
  },
  {
    icon: Workflow,
    title: "Controlled state changes",
    text: "Reservation and room status transitions move through defined workflows, so a room can't silently jump from occupied to ready.",
  },
  {
    icon: ScrollText,
    title: "Append-only audit history",
    text: "Every significant action is written to an audit log that only grows. History is never edited in place.",
  },
  {
    icon: Fingerprint,
    title: "Tamper-evident records",
    text: "The audit trail is structured so that tampering with past entries can be detected, not quietly absorbed.",
  },
  {
    icon: KeyRound,
    title: "Least-privilege database access",
    text: "The application connects with the minimum database permissions it needs — no blanket access, no shared superuser.",
  },
  {
    icon: CalendarClock,
    title: "Business dates only move forward",
    text: "The property's business date can't be rewound to rewrite history. Corrections happen as new, traceable entries.",
  },
  {
    icon: Database,
    title: "No overlapping allocations",
    text: "The database itself refuses to assign the same room to two stays on overlapping dates. Not a UI check — a hard rule.",
  },
];

export function Security() {
  return (
    <Section id="security">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-panel bg-brand-dark shadow-mock">
            <div className="px-6 py-12 sm:px-10 sm:py-14 lg:px-14">
              <span className="eyebrow border-white/20 bg-white/5 text-brand-soft">
                Data safety
              </span>
              <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Operational data designed to be hard to accidentally destroy.
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/70">
                Resorts run on trust — in the numbers, in the records, in who
                did what. ResortOS treats your operational data as something
                to protect, not just store.
              </p>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {CONTROLS.map((control, i) => (
                  <Reveal as="li" key={control.title} delay={Math.min(i * 50, 300)}>
                    <div className="flex h-full gap-4 rounded-card border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.07]">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-white/15 bg-white/5 text-brand-soft">
                        <control.icon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold text-white">
                          {control.title}
                        </h3>
                        <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/65">
                          {control.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <p className="mt-8 text-[13px] leading-relaxed text-white/50">
                Plain-English summary of real controls in the product. We
                won&apos;t dress them up as &ldquo;military-grade&rdquo;
                anything — they&apos;re careful engineering choices, and
                they&apos;re documented.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
