"use client";

import { useState } from "react";
import { unitSizes, packages } from "@/lib/site";

// Deterministic thousands formatting (no locale → no hydration mismatch).
const num = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/**
 * Pick a unit size; every pack's fixed price (and the bespoke design fee)
 * updates live. Accurate to the fixed-price model — no budget guesswork.
 */
export default function PriceExplorer() {
  const [i, setI] = useState(0);

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

      <div className="px-grid">
        {packages.map((p) => {
          const value = p.model === "fixed" ? p.prices?.[i] : p.designFee?.[i];
          return (
            <div className={`px-card${p.featured ? " feature" : ""}`} key={p.slug}>
              <span className="px-pn">{p.name}</span>
              <span className="px-pp">
                <span className="cur">AED</span>
                {num(value ?? 0)}
              </span>
              <span className="px-sub">
                {p.model === "fixed" ? "fully furnished, all-in" : "design fee · furniture at cost + 5–10%"}
              </span>
            </div>
          );
        })}
      </div>

      <p className="px-note">
        Essential, Premium &amp; Holiday Home are fixed, all-in prices — furniture included, no budget
        guesswork. Bespoke is a fixed design fee by unit size, furniture billed transparently at cost,
        plus a 5–10% management fee. Every unit is confirmed with a written quote.
      </p>
    </div>
  );
}
