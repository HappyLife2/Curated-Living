"use client";

import { useEffect, useRef } from "react";

/** Custom dot + trailing ring cursor. Grows over interactive elements. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2,
      rx = mx,
      ry = my,
      raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current)
        dot.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current)
        ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    // Delegated hover: per-element listeners go stale on client navigation
    // (and never fire mouseleave when the hovered element is unmounted,
    // leaving the ring stuck grown). One window listener can't go stale.
    const INTERACTIVE = "a, button, [data-cursor], input, textarea, summary";
    const over = (e: PointerEvent) => {
      const el = e.target instanceof Element ? e.target.closest(INTERACTIVE) : null;
      ring.current?.classList.toggle("grow", !!el);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("pointerover", over);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("pointerover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cur-dot" aria-hidden />
      <div ref={ring} className="cur-ring" aria-hidden />
    </>
  );
}
