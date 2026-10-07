import { ArrowUpRight, Github, Globe, Mail } from "lucide-react";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";

const LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Anshmaan29",
    icon: Github,
  },
  {
    label: "anshmaansingh.in",
    href: "https://anshmaansingh.in",
    icon: Globe,
  },
  {
    label: "info@anshmaansingh.in",
    href: "mailto:info@anshmaansingh.in",
    icon: Mail,
  },
];

export function Founder() {
  return (
    <Section id="about" className="bg-surface">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-[20px] font-bold text-white"
            aria-hidden="true"
          >
            AS
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Built by Anshmaan Singh
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
            Computer Science student and developer building practical
            software for real operational problems.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
            ResortOS began as an effort to create a safer, clearer and more
            modern operating system for independent resorts.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="btn-secondary !px-4 !py-2.5 text-sm"
                >
                  <link.icon className="h-4 w-4" aria-hidden="true" />
                  {link.label}
                  {!link.href.startsWith("mailto:") && (
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
