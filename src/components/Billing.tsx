import { Check } from "lucide-react";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";
import { formatINR } from "./mock-data";

const CAPABILITIES = [
  "GST-aware billing flows",
  "Tax invoices",
  "Bills of supply",
  "Credit notes",
  "Debit notes",
  "Company accounts",
  "OTA receivables",
  "Indian currency formatting",
];

const LINE_ITEMS = [
  { label: "Room charges · 3 nights", amount: 18000 },
  { label: "Food & beverage", amount: 4250 },
  { label: "Extra bed", amount: 1500 },
];

export function Billing() {
  return (
    <Section id="billing">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={120} className="order-2 lg:order-1">
            <div
              className="overflow-hidden rounded-panel border border-line bg-surface shadow-mock"
              role="img"
              aria-label="Illustrative preview of a GST tax invoice in ResortOS with fictional sample data"
            >
              <div className="border-b border-line px-6 py-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
                      Tax invoice
                    </p>
                    <p className="mt-1 text-[15px] font-bold text-ink">
                      INV-2026-0847
                    </p>
                  </div>
                  <span className="rounded-full bg-brand-soft px-3 py-1.5 text-[12px] font-bold text-brand-dark">
                    Paid · UPI
                  </span>
                </div>
                <p className="mt-3 text-[12.5px] leading-relaxed text-ink-muted">
                  Billed to <span className="font-semibold text-ink">Meera Joshi</span>
                  {" · "}Room 203{" · "}GSTIN 06XXXXX0000X1Z5
                </p>
              </div>

              <div className="px-6 py-5">
                <ul className="space-y-2.5">
                  {LINE_ITEMS.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between text-[13.5px]"
                    >
                      <span className="text-ink-soft">{item.label}</span>
                      <span className="font-semibold text-ink">
                        {formatINR(item.amount)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="my-4 border-t border-dashed border-line" />
                <ul className="space-y-2.5">
                  <li className="flex items-center justify-between text-[13.5px]">
                    <span className="text-ink-muted">CGST · 6%</span>
                    <span className="font-medium text-ink">
                      {formatINR(1425)}
                    </span>
                  </li>
                  <li className="flex items-center justify-between text-[13.5px]">
                    <span className="text-ink-muted">SGST · 6%</span>
                    <span className="font-medium text-ink">
                      {formatINR(1425)}
                    </span>
                  </li>
                  <li className="flex items-center justify-between pt-1 text-[15px]">
                    <span className="font-bold text-ink">Total</span>
                    <span className="font-bold text-ink">
                      {formatINR(26600)}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-line bg-paper/60 px-6 py-4">
                {["Credit note", "Debit note", "Bill of supply"].map((doc) => (
                  <span
                    key={doc}
                    className="rounded-full border border-line bg-surface px-3 py-1 text-[11.5px] font-semibold text-ink-soft"
                  >
                    {doc}
                  </span>
                ))}
              </div>

              <p className="demo-note border-t border-line px-6 py-3">
                Illustrative demo content — fictional invoice shown for
                demonstration.
              </p>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <span className="eyebrow mb-5">Billing</span>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Built with Indian resort operations in mind.
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed text-ink-soft">
              Billing follows the documents Indian properties actually issue —
              not a generic invoice template with tax bolted on. Corrections
              go through proper credit and debit notes, and company stays
              bill to company accounts with OTA dues tracked as receivables.
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {CAPABILITIES.map((cap) => (
                <li
                  key={cap}
                  className="inline-flex items-center gap-2.5 text-[14.5px] font-medium text-ink"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-soft">
                    <Check
                      className="h-3 w-3 text-brand-dark"
                      aria-hidden="true"
                    />
                  </span>
                  {cap}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[12.5px] leading-relaxed text-ink-muted">
              Tax configuration should be verified with the property&apos;s
              accountant before production use.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
