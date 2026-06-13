"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scans the DOM for motion data-attributes and wires GSAP ScrollTrigger:
 *  data-reveal           fade/slide up on enter
 *  data-par              gentle image parallax (apply to <img>/media)
 *  data-count            count-up number (reads data-count, optional data-suffix)
 *  data-words            word-by-word mask reveal of text content
 *  data-hscroll          pinned horizontal scroll section (inner [data-hscroll-track])
 * Mount once per page (after the content).
 */
export default function Reveals() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: skip animation but resolve count-ups to their final value
    // so numbers never read "0". Word/hero reveals sit in their natural state.
    if (reduce) {
      document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        el.textContent = (el.dataset.count || "0") + (el.dataset.suffix || "");
      });
    }

    const ctx = gsap.context(() => {
      if (reduce) return;

      // hero mask reveals — delayed to land as the preloader curtain lifts
      if (document.querySelector(".hl")) {
        gsap.from(".hl", {
          yPercent: 118,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
          delay: 1.95,
        });
      }

      // generic reveals
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 46,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });

      // word reveals
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
        const words = (el.textContent || "").trim().split(/\s+/);
        el.innerHTML = words
          .map(
            (w) =>
              `<span class="rw"><span>${
                el.dataset.em && el.dataset.em === w ? `<em>${w}</em>` : w
              }</span></span>`
          )
          .join(" ");
        gsap.from(el.querySelectorAll(".rw > span"), {
          yPercent: 115,
          opacity: 0,
          duration: 0.8,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });

      // image parallax
      gsap.utils.toArray<HTMLElement>("[data-par]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // count-up
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count || "0");
        const suf = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent = Math.round(obj.v) + suf;
          },
        });
      });

      // pinned horizontal gallery
      gsap.utils.toArray<HTMLElement>("[data-hscroll]").forEach((section) => {
        const track = section.querySelector<HTMLElement>("[data-hscroll-track]");
        if (!track) return;
        const dist = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + dist(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    });

    // settle after fonts/images
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return null;
}
