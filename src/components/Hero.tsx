"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "./Section";
import { Reveal } from "./Reveal";
import { DashboardPreview } from "./DashboardPreview";
import { DEMO_MAILTO, LIVE_PRODUCT_URL } from "./Navbar";

const TRUST_CHIPS = [
  "Built for Indian hospitality",
  "GST-aware workflows",
  "Secure operational records",
  "Owner-first visibility",
];

/** Subtle scroll parallax for the dashboard mock (disabled with reduced motion). */
function useParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setShift(Math.min(y * 0.05, 36));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, shift };
}

export function Hero() {
  const { ref, shift } = useParallax();

  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      {/* soft radial wash — warm, restrained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(720px 340px at 50% -60px, rgba(15,92,77,0.10), transparent 70%)",
        }}
      />
      <Container className="relative pt-14 sm:pt-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-6">
            Resort management software · India
          </span>
          <h1 className="text-balance text-[40px] font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl">
            The operating system for modern resorts.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-ink-soft sm:text-lg">
            Run reservations, front desk, rooms, guests, GST billing and daily
            operations from one secure system built for independent Indian
            resorts.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={DEMO_MAILTO} className="btn-primary w-full sm:w-auto">
              Request a Demo
            </a>
            <a
              href={LIVE_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto"
            >
              View Live Product
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <ul
            aria-label="Highlights"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
          >
            {TRUST_CHIPS.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-soft"
              >
                <Check
                  className="h-4 w-4 text-brand-accent"
                  aria-hidden="true"
                />
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="mt-12 sm:mt-16">
          <div ref={ref} style={{ transform: `translateY(${-shift}px)` }}>
            <DashboardPreview />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
