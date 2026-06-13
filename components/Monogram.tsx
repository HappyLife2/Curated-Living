/**
 * Curated Living maker's mark — a quiet hairline diamond (a "cut stone").
 * Restraint over ornament; pairs beside the Bodoni wordmark in the lockup.
 */
export default function Monogram({ className }: { className?: string }) {
  return (
    <span className={`mono-mark${className ? " " + className : ""}`} aria-hidden>
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" style={{ display: "block" }}>
        <rect
          x="5.05"
          y="5.05"
          width="13.9"
          height="13.9"
          transform="rotate(45 12 12)"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <rect
          x="8.45"
          y="8.45"
          width="7.1"
          height="7.1"
          transform="rotate(45 12 12)"
          fill="currentColor"
          opacity="0.92"
        />
      </svg>
    </span>
  );
}
