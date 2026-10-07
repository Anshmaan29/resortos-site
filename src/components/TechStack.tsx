import { Check } from "lucide-react";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";

const STACK = [
  "Next.js",
  "React",
  "NestJS",
  "PostgreSQL",
  "TypeScript",
  "Automated testing",
];

const PRACTICES = [
  "Database-level business rules",
  "API validation",
  "End-to-end testing",
  "Responsive staff interface",
];

export function TechStack() {
  return (
    <Section id="stack">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-5">Under the hood</span>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built as real operational software, not a prototype.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            The product is a working system with enforced business rules —
            not slides. The stack is boring on purpose: proven tools, tested
            behaviour, and a database that refuses to hold contradictory
            state.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul
            aria-label="Technology stack"
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
          >
            {STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] font-semibold text-ink shadow-card"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-2.5 sm:grid-cols-2">
            {PRACTICES.map((practice) => (
              <li
                key={practice}
                className="inline-flex items-center gap-2.5 rounded-card border border-line bg-surface px-4 py-3 text-[14px] font-medium text-ink"
              >
                <Check
                  className="h-4 w-4 shrink-0 text-brand-accent"
                  aria-hidden="true"
                />
                {practice}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
