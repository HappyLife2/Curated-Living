"use client";

import Image from "next/image";
import { useState } from "react";
import { styles } from "@/lib/site";

/**
 * The three signature styles, shared across every pack. Pick a look; the preview
 * (image + palette + who it suits) updates. The aesthetic is then executed at the
 * chosen pack's tier.
 */
export default function StyleSelector() {
  const [i, setI] = useState(0);
  const s = styles[i];

  return (
    <div className="sty">
      <div className="sty-tabs" role="group" aria-label="Signature style">
        {styles.map((st, idx) => (
          <button
            key={st.slug}
            type="button"
            className={`sty-tab${i === idx ? " active" : ""}`}
            aria-pressed={i === idx}
            onClick={() => setI(idx)}
          >
            {st.name}
          </button>
        ))}
      </div>

      <div className="sty-body">
        <figure className="sty-media" key={s.slug}>
          <Image src={s.image} alt={`${s.name} — example interior`} fill sizes="(max-width:860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </figure>
        <div className="sty-info">
          <span className="eyebrow">{s.tagline}</span>
          <h3 className="sty-name">{s.name}</h3>
          <p className="lede" style={{ marginTop: 14 }}>{s.desc}</p>
          <div className="sty-palette" aria-hidden>
            {s.palette.map((c) => (
              <span className="sty-sw" key={c} style={{ background: c }} />
            ))}
          </div>
          <p className="sty-best">Best for — {s.bestFor}</p>
        </div>
      </div>
    </div>
  );
}
