"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { site } from "@/lib/site";

/**
 * Cinematic intro loader — the brand letters rise on a dark canvas with a
 * counter, then the whole panel curtain-wipes up to reveal the hero.
 * Renders server-side so there is no flash before hydration.
 */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;
    const el = root.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.style.overflow = "hidden";

    if (reduce) {
      document.body.style.overflow = "";
      const doneTimer = window.setTimeout(() => setDone(true), 0);
      return () => {
        window.clearTimeout(doneTimer);
        document.body.style.overflow = "";
      };
    }

    const ctx = gsap.context(() => {
      const counter = { v: 0 };
      gsap.to(counter, {
        v: 100,
        duration: 1.1,
        ease: "power2.inOut",
        onUpdate: () => setPct(Math.round(counter.v)),
      });

      gsap
        .timeline()
        .from(
          ".pl-letter",
          { yPercent: 120, duration: 0.9, stagger: 0.03, ease: "power3.out" },
          0.15
        )
        .to(".pl-sub", { opacity: 1, duration: 0.6 }, "-=0.4")
        .to(el, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
          delay: 0.45,
          onComplete: () => {
            document.body.style.overflow = "";
            setDone(true);
          },
        });
    }, el);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [pathname]);

  if (done || pathname !== "/") return null;

  const letters = site.name.toUpperCase().split("");

  return (
    <div ref={root} className="preloader" aria-hidden>
      <div className="pl-name">
        {letters.map((c, i) => (
          <span
            key={i}
            className="pl-letter"
            style={c === " " ? { width: "0.4em" } : undefined}
          >
            {c === " " ? " " : c}
          </span>
        ))}
      </div>
      <div className="pl-sub">Turnkey Furnishing · Dubai</div>
      <div className="pl-pct">{pct}%</div>
    </div>
  );
}
