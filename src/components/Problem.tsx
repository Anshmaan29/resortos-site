import {
  BarChart3,
  Brain,
  CalendarX2,
  MessageCircle,
  Receipt,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container, Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const PAINS: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: CalendarX2,
    title: "Reservations in one place",
    text: "Bookings scattered across a register, OTA extranets and phone calls.",
  },
  {
    icon: Users,
    title: "Guest details somewhere else",
    text: "ID proofs, stay history and preferences live in no single record.",
  },
  {
    icon: Receipt,
    title: "Billing in another system",
    text: "Invoices raised separately, GST handled as an afterthought.",
  },
  {
    icon: MessageCircle,
    title: "Room status on WhatsApp",
    text: "Which rooms are ready is decided in a group chat, not a system.",
  },
  {
    icon: BarChart3,
    title: "Owner reporting in spreadsheets",
    text: "The owner finds out what happened days later, if at all.",
  },
  {
    icon: Brain,
    title: "Actions dependent on memory",
    text: "Follow-ups, receivables and shift handovers rely on someone remembering.",
  },
];

export function Problem() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Hospitality operations should not live across five different tools."
          sub="Most independent resorts run on a patchwork of registers, chats and memory. It works — until the day it doesn't."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((pain, i) => (
            <Reveal as="li" key={pain.title} delay={Math.min(i * 60, 300)}>
              <div className="card h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-cream-100 text-ink-soft">
                  <pain.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-[16px] font-bold text-ink">
                  {pain.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">
                  {pain.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-10 text-center">
          <p className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            ResortOS brings the operation together.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
