"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Monogram from "./Monogram";

/**
 * Centered top navigation that condenses into a glassmorphic pill on scroll.
 * Light text over the homepage hero; ink text on inner pages. Full-screen menu on mobile.
 */
export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = isHome && !scrolled;
  const cls = ["nav", scrolled ? "scrolled" : "", overHero ? "" : "nav-solid", open ? "nav-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={cls} aria-label="Primary">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          <Monogram className="nav-mono" />
          <span>{site.name}</span>
        </Link>

        <div className="nav-links">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Get a quote
          </Link>
        </div>

        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`nav-sheet${open ? " open" : ""}`} aria-hidden={!open} inert={!open}>
        <div className="nav-sheet-inner">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn nav-sheet-cta" onClick={() => setOpen(false)}>
            Get a quote
          </Link>
          <div className="nav-sheet-meta">
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
