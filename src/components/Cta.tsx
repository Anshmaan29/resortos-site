import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "./Section";
import { Reveal } from "./Reveal";
import { DEMO_MAILTO, LIVE_PRODUCT_URL } from "./Navbar";

export function Cta() {
  return (
    <Section id="demo">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-panel bg-brand-dark px-6 py-14 text-center shadow-mock sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(560px 280px at 50% 0%, rgba(31,138,112,0.35), transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white sm:text-[40px] sm:leading-[1.15]">
                Run your resort with less operational chaos.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-[16.5px] leading-relaxed text-white/70">
                See how ResortOS can bring reservations, rooms, billing and
                daily operations into one system.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href={DEMO_MAILTO} className="btn-light w-full sm:w-auto">
                  Request a Demo
                </a>
                <a
                  href={LIVE_PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-light w-full sm:w-auto"
                >
                  View Live Product
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 text-[13px] text-white/50">
                Demos are walkthroughs with the founder — no sales team, no
                pressure.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
