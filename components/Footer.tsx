import Link from "next/link";
import { site, nav } from "@/lib/site";
import Monogram from "./Monogram";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <Monogram className="foot-mono" />
          <div className="foot-brand">{site.name}</div>
          <p className="foot-tag serif">{site.tagline}.</p>
        </div>
        <div className="foot-col">
          <span className="foot-h">Contact</span>
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.location}</span>
        </div>
        <div className="foot-col">
          <span className="foot-h">Explore</span>
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </div>
        <div className="foot-col">
          <span className="foot-h">Get a quote</span>
          <p style={{ color: "var(--muted-2)", maxWidth: "26ch" }}>
            Hand over the keys to an empty unit — get back a rent-ready home in 2–4 weeks.
          </p>
          <Link href="/contact" className="btn foot-cta" style={{ marginTop: 6 }}>
            Start a project <span className="arr">→</span>
          </Link>
        </div>
      </div>
      <div className="wrap foot-base">
        <span>
          © {new Date().getFullYear()} {site.legalName} · {site.founderLine}.
        </span>
        <span>Turnkey furnishing &amp; styling · Dubai, UAE</span>
      </div>
    </footer>
  );
}
