/**
 * Infinite marquee of the promise. The track is duplicated so the CSS
 * translateX(-50%) loop is seamless. Pauses on hover.
 */
export default function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
