"use client";

import { useState } from "react";

// Deterministic thousands formatting (no locale → no hydration mismatch).
function fmt(n: number) {
  const r = Math.round(n);
  return r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Tiered design & styling fee — mirrors the foundation pricing model.
function designFee(budget: number) {
  if (budget < 50_000) return 5_000;
  if (budget < 100_000) return 7_500;
  if (budget < 200_000) return 10_000;
  return 12_000;
}

const MIN = 25_000;
const MAX = 250_000;
const STEP = 5_000;

/**
 * Interactive investor calculator. Slide a furnishing budget; see the two ways
 * Curated Living charges — fixed fee + 10% procurement, or a single turnkey price.
 * Illustrative, not a quote (made explicit in the note).
 */
export default function ReturnsCalculator() {
  const [budget, setBudget] = useState(60_000);

  const fee = designFee(budget);
  const procurement = Math.round(budget * 0.1);
  const total = fee + procurement;
  const turnkey = budget + total;
  const pct = ((budget - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="calc">
      <div className="calc-panel">
        <div className="calc-label">
          <span>Furnishing budget</span>
          <span>1BR · illustrative</span>
        </div>
        <div className="calc-budget">
          <small>AED</small>
          {fmt(budget)}
        </div>
        <input
          className="range"
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          aria-label="Furnishing budget in AED"
          style={{
            background: `linear-gradient(to right, var(--sage) ${pct}%, var(--line-d) ${pct}%)`,
          }}
        />
        <div className="range-scale">
          <span>AED {fmt(MIN)}</span>
          <span>AED {fmt(MAX)}</span>
        </div>
      </div>

      <div className="calc-out">
        <div className="calc-row">
          <span className="k">Design &amp; styling fee</span>
          <span className="v">AED {fmt(fee)}</span>
        </div>
        <div className="calc-row">
          <span className="k">Procurement management · 10%</span>
          <span className="v">AED {fmt(procurement)}</span>
        </div>
        <div className="calc-hero">
          <span className="k">Your Curated Living fee</span>
          <span className="v">AED {fmt(total)}</span>
        </div>
        <p className="calc-note">
          Or a single <strong>turnkey price of ≈ AED {fmt(turnkey)}</strong> — budget and fee in one
          number, everything handled. Figures are illustrative; every unit is quoted to its brief.
        </p>
      </div>
    </div>
  );
}
