"use client";

import Image from "next/image";
import { useState } from "react";
import EmptyRoom from "./EmptyRoom";

/**
 * Empty → furnished reveal. The AFTER (furnished photo) sits beneath; the BEFORE
 * (a clean empty-unit graphic) is clipped by a draggable handle, so sliding reveals
 * the furnished home. Works with mouse, touch and keyboard.
 */
export default function Transform({ after, alt }: { after: string; alt: string }) {
  const [p, setP] = useState(50);
  return (
    <div className="tf" style={{ ["--p" as string]: `${p}%` } as React.CSSProperties}>
      <Image src={after} alt={`${alt} — furnished & styled`} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
      <div className="tf-raw">
        <EmptyRoom />
      </div>
      <div className="tf-div" aria-hidden>
        <span className="tf-knob" />
      </div>
      <span className="tf-label tf-l">Empty unit</span>
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
