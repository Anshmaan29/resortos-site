import { Bot, FlaskConical, User } from "lucide-react";
import { Container, Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Copilot() {
  return (
    <Section id="copilot" className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="In development"
          title="Building an intelligent operations layer for hospitality."
          sub="ResortOS is being developed with an AI operations copilot designed to help resort teams understand operational data, summarize daily activity, draft guest communication and surface important actions — without replacing the underlying system of record."
        />

        <Reveal className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-panel border border-line bg-paper shadow-mock">
            <div className="flex items-center justify-between border-b border-line bg-surface px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand text-white">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[14.5px] font-bold text-ink">
                    ResortOS Copilot
                  </p>
                  <p className="text-[11.5px] text-ink-muted">
                    Ask about today&apos;s operation
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-[11.5px] font-bold text-ink-soft">
                <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
                Concept / In development
              </span>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              {/* User query */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-card rounded-br-[6px] bg-brand px-4 py-3">
                  <div className="mb-1 flex items-center justify-end gap-1.5 text-[11px] font-semibold text-white/70">
                    You
                    <User className="h-3 w-3" aria-hidden="true" />
                  </div>
                  <p className="text-[14px] leading-relaxed text-white">
                    Summarize today&apos;s arrivals, departures and anything
                    the owner should review.
                  </p>
                </div>
              </div>

              {/* AI answer */}
              <div className="flex justify-start">
                <div className="max-w-[92%] rounded-card rounded-bl-[6px] border border-line bg-surface px-4 py-3 shadow-card">
                  <div className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold text-brand-dark">
                    <Bot className="h-3 w-3" aria-hidden="true" />
                    Copilot
                  </div>
                  <p className="text-[14px] leading-relaxed text-ink">
                    <strong className="font-semibold">8 arrivals</strong> are
                    expected today, including{" "}
                    <strong className="font-semibold">
                      2 rooms not yet assigned
                    </strong>
                    . <strong className="font-semibold">5 departures</strong>{" "}
                    are due. Room 204 is still marked maintenance, and{" "}
                    <strong className="font-semibold">
                      one OTA receivable remains pending
                    </strong>
                    .
                  </p>
                </div>
              </div>

              <p className="pt-1 text-center text-[12.5px] text-ink-muted">
                Designed to use Claude as the reasoning layer for operational
                assistance.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
