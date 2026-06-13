"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Empty → furnished reveal. Two perfectly-aligned copies of the same photo; the
 * top "raw" copy is filtered cold/empty and clipped by a draggable handle, so
 * sliding reveals the styled home beneath. Works with mouse, touch and keyboard.
 */
export default function Transform({ src, alt }: { src: string; alt: string }) {
  const [p, setP] = useState(52);
  return (
    <div className="tf" style={{ ["--p" as string]: `${p}%` } as React.CSSProperties}>
      <Image src={src} alt={`${alt} — furnished & styled`} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
      <div className="tf-raw">
        <Image src={src} alt={`${alt} — empty handover`} fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="tf-div" aria-hidden>
        <span className="tf-knob" />
      </div>
      <span className="tf-label tf-l">Empty handover</span>
      <span className="tf-label tf-r">Curated &amp; styled</span>
      <input
        className="tf-range"
        type="range"
        min={0}
        max={100}
        value={p}
        onChange={(e) => setP(Number(e.target.value))}
        aria-label="Drag to reveal the furnished home"
      />
    </div>
  );
}
