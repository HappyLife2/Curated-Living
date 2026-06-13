"use client";

import { useState } from "react";
import { unitSizes, packages } from "@/lib/site";

// Deterministic thousands formatting (no locale → no hydration mismatch).
const num = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const valueFor = (p: (typeof packages)[number], i: number) =>
  p.model === "fixed" ? p.prices?.[i] : p.designFee?.[i];

/**
 * Pick a unit size; every pack's fixed price (and the bespoke design fee)
 * updates live. Packs not offered at a size (e.g. Bespoke has no studio)
 * are dropped entirely and the grid reflows.
 */
export default function PriceExplorer() {
  const [i, setI] = useState(0);
  const visible = packages.filter((p) => valueFor(p, i) != null);

  return (
    <div className="px">
      <div className="px-sizes" role="group" aria-label="Unit size">
        {unitSizes.map((s, idx) => (
          <button
            key={s}
            type="button"
            className={`px-size${i === idx ? " active" : ""}`}
            aria-pressed={i === idx}
            onClick={() => setI(idx)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="px-grid" style={{ ["--cols" as string]: String(visible.length) } as React.CSSProperties}>
        {visible.map((p) => (
          <div className={`px-card${p.featured ? " feature" : ""}`} key={p.slug}>
            <span className="px-pn">{p.name}</span>
            <span className="px-pp">
              <span className="cur">AED</span>
              {num(valueFor(p, i) as number)}
            </span>
            <span className="px-sub">
              {p.model === "fixed" ? "fully furnished, all-in" : "design fee · furniture at cost + flat 10%"}
            </span>
          </div>
        ))}
      </div>

      <p className="px-note">
        Essential, Premium &amp; Holiday Home are fixed, all-in prices — furniture included, no budget
        guesswork. Bespoke (1 BHK and up) is a fixed design fee by unit size, furniture billed at cost,
        plus a flat 10% management fee. Every unit is confirmed with a written quote.
      </p>
    </div>
  );
}
