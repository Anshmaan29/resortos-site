type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  wordmarkClassName?: string;
};

/**
 * Temporary ResortOS brand mark — a minimal geometric palm inside a
 * rounded brand-green badge. Deliberately abstract, not travel-agency.
 */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      role="img"
      aria-label="ResortOS logo"
      className="shrink-0"
    >
      <rect width="44" height="44" rx="11" fill="#0f5c4d" />
      {/* fronds */}
      <g
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M22 20 C17 16.5, 13 16, 9.5 19" />
        <path d="M22 20 C19 15, 16 12.5, 11.5 12.5" />
        <path d="M22 20 C25 15, 28 12.5, 32.5 12.5" />
        <path d="M22 20 C27 16.5, 31 16, 34.5 19" />
        {/* trunk */}
        <path d="M22 34 C22 29, 21.8 25, 22 20" />
        {/* ground */}
        <path d="M13 35.5 H31" />
      </g>
      {/* coconuts */}
      <circle cx="19.6" cy="21.2" r="1.6" fill="#ffffff" />
      <circle cx="24.4" cy="21.2" r="1.6" fill="#ffffff" />
    </svg>
  );
}

export function Logo({
  size = 32,
  withWordmark = true,
  wordmarkClassName = "text-ink",
}: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={size} />
      {withWordmark && (
        <span
          className={`text-[19px] font-bold tracking-tight ${wordmarkClassName}`}
        >
          Resort<span className="font-semibold">OS</span>
        </span>
      )}
    </span>
  );
}
