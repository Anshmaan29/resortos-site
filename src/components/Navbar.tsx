"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "For Resorts", href: "#who-for" },
  { label: "About", href: "#about" },
];

export const LIVE_PRODUCT_URL = "https://pms.voittoventures.com/";
export const DEMO_MAILTO =
  "mailto:info@anshmaansingh.in?subject=ResortOS%20demo%20request";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/90 shadow-card backdrop-blur-md"
          : "border-b border-transparent bg-paper/60 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[68px] w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" aria-label="ResortOS home" className="shrink-0">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-btn px-4 py-2 text-[14.5px] font-medium text-ink-soft transition-colors hover:bg-cream-100 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={LIVE_PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !px-4 !py-2.5 text-sm"
          >
            View Live Product
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={DEMO_MAILTO} className="btn-primary !px-4 !py-2.5 text-sm">
            Request Demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line bg-surface text-ink lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-btn px-3 py-3 text-[15px] font-medium text-ink-soft hover:bg-cream-100 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5">
            <a
              href={LIVE_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              View Live Product
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={DEMO_MAILTO} className="btn-primary w-full">
              Request Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
