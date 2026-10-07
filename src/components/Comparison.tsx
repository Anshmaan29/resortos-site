import { Check, Minus, X } from "lucide-react";
import { Container, Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

type Mark = "yes" | "partial" | "no";

const ROWS: { label: string; marks: [Mark, Mark, Mark] }[] = [
  { label: "Indian GST workflows", marks: ["no", "partial", "yes"] },
  { label: "Owner visibility", marks: ["no", "partial", "yes"] },
  { label: "Auditability", marks: ["no", "partial", "yes"] },
  { label: "Room operations", marks: ["partial", "yes", "yes"] },
  { label: "Front-desk usability", marks: ["partial", "partial", "yes"] },
  { label: "Data-safety controls", marks: ["no", "partial", "yes"] },
  { label: "Modern responsive interface", marks: ["no", "partial", "yes"] },
  { label: "India-specific operational details", marks: ["no", "partial", "yes"] },
];

const COLUMNS = ["Traditional workflow", "Generic hotel software", "ResortOS"];

function MarkCell({ mark }: { mark: Mark }) {
  if (mark === "yes") {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft">
          <Check className="h-4 w-4 text-brand-dark" aria-hidden="true" />
        </span>
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (mark === "partial") {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cream-200">
          <Minus className="h-4 w-4 text-ink-muted" aria-hidden="true" />
        </span>
        <span className="sr-only">Partial</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f7e3e3]">
        <X className="h-4 w-4 text-[#9c2b2b]" aria-hidden="true" />
      </span>
      <span className="sr-only">No</span>
    </span>
  );
}

export function Comparison() {
  return (
    <Section id="compare" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Why ResortOS"
          title="Built for the way Indian resorts actually operate."
          sub="A fair look at where the usual options fall short for independent properties."
        />
        <Reveal className="mt-12">
          <div className="mock-scroll relative overflow-x-auto rounded-panel border border-line shadow-card">
            <div className="min-w-[640px]">
              <table className="w-full border-collapse bg-surface text-left">
                <caption className="sr-only">
                  Comparison of traditional workflows, generic hotel software and
                  ResortOS across operational capabilities
                </caption>
              <thead>
                <tr className="border-b border-line">
                  <th
                    scope="col"
                    className="w-[34%] px-6 py-4 text-[13px] font-semibold uppercase tracking-wider text-ink-muted"
                  >
                    Capability
                  </th>
                  {COLUMNS.map((col, i) => (
                    <th
                      key={col}
                      scope="col"
                      className={`px-4 py-4 text-center text-[14px] font-bold ${
                        i === 2
                          ? "bg-brand-soft/60 text-brand-dark"
                          : "text-ink-soft"
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, ri) => (
                  <tr
                    key={row.label}
                    className={ri % 2 === 1 ? "bg-paper/60" : undefined}
                  >
                    <th
                      scope="row"
                      className="px-6 py-3.5 text-[14px] font-semibold text-ink"
                    >
                      {row.label}
                    </th>
                    {row.marks.map((mark, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-3.5 text-center ${
                          ci === 2 ? "bg-brand-soft/40" : ""
                        }`}
                      >
                        <MarkCell mark={mark} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              </table>
            </div>
          </div>
          <ul
            aria-label="Table legend"
            className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] text-ink-muted"
          >
            <li className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-brand-dark" aria-hidden="true" />
              Included / strong
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Minus className="h-3.5 w-3.5" aria-hidden="true" />
              Partial
            </li>
            <li className="inline-flex items-center gap-1.5">
              <X className="h-3.5 w-3.5 text-[#9c2b2b]" aria-hidden="true" />
              Missing / weak
            </li>
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
