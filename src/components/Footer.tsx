import { Logo } from "./Logo";
import { LIVE_PRODUCT_URL } from "./Navbar";

const COLUMNS: {
  heading: string;
  links: { label: string; href: string; external?: boolean }[];
}[] = [
  {
    heading: "Product",
    links: [
      { label: "Overview", href: "#product" },
      { label: "Features", href: "#features" },
      { label: "Live product", href: LIVE_PRODUCT_URL, external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Security", href: "#security" },
      { label: "For resorts", href: "#who-for" },
      { label: "About", href: "#about" },
      { label: "GitHub", href: "https://github.com/Anshmaan29/resortos", external: true },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Founder", href: "https://anshmaansingh.in", external: true },
      { label: "Contact", href: "mailto:info@anshmaansingh.in" },
      { label: "Request demo", href: "mailto:info@anshmaansingh.in?subject=ResortOS%20demo%20request" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" aria-label="ResortOS home">
              <Logo />
            </a>
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-ink-soft">
              Modern resort operations, built for India.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[12.5px] font-semibold text-ink-soft">
              <span
                className="inline-block h-2 w-2 rounded-full bg-brand-accent"
                aria-hidden="true"
              />
              Built in India
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3 className="text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink-muted">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-[14.5px] text-ink-soft transition-colors hover:text-brand-dark"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-muted">
            © 2026 ResortOS. All rights reserved.
          </p>
          <p className="text-[13px] text-ink-muted">
            The production PMS remains separate at{" "}
            <a
              href={LIVE_PRODUCT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink-soft underline decoration-line underline-offset-2 hover:text-brand-dark"
            >
              pms.voittoventures.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
