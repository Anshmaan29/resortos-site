import {
  BedDouble,
  CalendarCheck2,
  Hotel,
  ReceiptText,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container, Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const FEATURES: {
  icon: LucideIcon;
  title: string;
  text: string;
  points: string[];
}[] = [
  {
    icon: Hotel,
    title: "Front Desk",
    text: "Live arrivals, departures, room status, walk-ins and daily actions.",
    points: ["Arrivals & departures board", "Walk-in bookings", "Express check-in"],
  },
  {
    icon: CalendarCheck2,
    title: "Reservations",
    text: "Create, update and manage bookings with clear room allocation and stay history.",
    points: ["Room assignment", "Stay & source tracking", "Check-in / checkout flow"],
  },
  {
    icon: BedDouble,
    title: "Rooms",
    text: "See ready, occupied, dirty, cleaning, arriving, due-out and maintenance status at a glance.",
    points: ["Live room board", "Status workflows", "Maintenance holds"],
  },
  {
    icon: ReceiptText,
    title: "GST Billing",
    text: "Handle invoices, bills of supply, credit notes and debit notes through India-aware billing workflows.",
    points: ["Tax invoices", "Credit / debit notes", "Bills of supply"],
  },
  {
    icon: Users,
    title: "Guests",
    text: "Maintain guest records, stay history and operational documentation.",
    points: ["Guest profiles", "Stay history", "ID & Form C records"],
  },
  {
    icon: ShieldCheck,
    title: "Owner Control",
    text: "Review accounts, shifts, receivables, operational events and audit records.",
    points: ["Shift tracking", "OTA receivables", "Append-only audit log"],
  },
];

export function Features() {
  return (
    <Section id="product" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Product overview"
          title="Everything the front desk needs. Everything the owner needs to know."
          sub="One system for the whole daily operation — from the first enquiry to the final invoice, and everything the owner should be able to review."
        />
        <div id="features" className="scroll-mt-24">
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <Reveal as="li" key={feature.title} delay={Math.min(i * 60, 300)}>
                <article className="card group h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift sm:p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] bg-brand-soft text-brand transition-colors duration-200 group-hover:bg-brand group-hover:text-white">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[17px] font-bold tracking-tight text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    {feature.text}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                    {feature.points.map((point) => (
                      <li
                        key={point}
                        className="text-[13px] font-medium text-ink-muted"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
