import { Building2, Layers, TreePalm, type LucideIcon } from "lucide-react";
import { Container, Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

const AUDIENCES: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: TreePalm,
    title: "Independent Resorts",
    text: "Properties that run on personality and personal service — and need software that keeps up without a full IT team.",
  },
  {
    icon: Building2,
    title: "Boutique Hotels",
    text: "Small, design-led stays where the front desk does everything and the owner still reads every review.",
  },
  {
    icon: Layers,
    title: "Small Hospitality Groups",
    text: "Two to ten properties that want consistent operations, comparable reporting and one system to learn.",
  },
];

export function WhoFor() {
  return (
    <Section id="who-for">
      <Container>
        <SectionHeading
          eyebrow="Who it's for"
          title="Designed for independent hospitality."
          sub="Serious operations software, without enterprise complexity — for properties that have outgrown registers, spreadsheets and chat threads."
        />
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((audience, i) => (
            <Reveal as="li" key={audience.title} delay={i * 80}>
              <article className="card h-full p-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lift sm:p-8">
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-soft text-brand">
                  <audience.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[18px] font-bold tracking-tight text-ink">
                  {audience.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                  {audience.text}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
