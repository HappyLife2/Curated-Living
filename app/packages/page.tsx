import type { Metadata } from "next";
import Link from "next/link";
import Reveals from "@/components/Reveals";
import Faq from "@/components/Faq";
import { site, packages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Three turnkey furnishing packages for Dubai property — Investor Essential, Premium Living and Holiday Home. Fixed fee plus procurement, or a single turnkey price. Designer-led, rent-ready in 2–4 weeks.",
  alternates: { canonical: "/packages" },
};

const pricingModels = [
  {
    name: "Fixed fee + procurement",
    detail:
      "A fixed design & styling fee, plus a procurement management fee of around 10% of the furnishing budget. Clear, itemised, and easy to approve — you're paying for real work, not a hidden markup.",
  },
  {
    name: "Single turnkey price",
    detail:
      "One number for everything — budget, sourcing, delivery, styling and handover. You approve a price and a date; we hand back a finished home. Preferred by hands-off and overseas investors.",
  },
];

export default function PackagesPage() {
  return (
    <main>
      <header className="phead">
        <div className="wrap">
          <span className="crumb">Packages</span>
          <h1>
            A finished home,<br /><em>three ways.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            Every package is designer-led and managed end to end — sourcing, procurement, delivery,
            installation, styling and a photography-ready handover. Choose by the unit and the
            outcome you need.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="pkg-grid">
            {packages.map((p) => (
              <article className={`pkg${p.featured ? " feature" : ""}`} key={p.slug} id={p.slug} data-reveal>
                {p.featured && <span className="pkg-flag">Most booked</span>}
                <span className="pkg-for">{p.for}</span>
                <h2 className="pkg-name">{p.name}</h2>
                <div className="pkg-price">
                  {p.price}
                  <small>{p.priceNote}</small>
                </div>
                <p style={{ marginTop: 16, fontSize: 14.5, color: p.featured ? "rgba(242,241,235,.84)" : "var(--ink-soft)" }}>{p.blurb}</p>
                <div className="pkg-rule" />
                <div className="pkg-list">
                  {p.points.map((pt) => (
                    <span className="pkg-li" key={pt}>{pt}</span>
                  ))}
                </div>
                <Link href="/contact" className={p.featured ? "btn" : "btn-ghost"}>
                  Enquire <span className="arr">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">How pricing works</span>
            <h2 className="kicker">Two structures.<br /><em>No surprises.</em></h2>
            <p className="lede" style={{ maxWidth: "54ch" }}>
              The furnishing budget itself is separate and stays yours. For a one-bedroom, the fee
              typically starts around AED 5,000 — scaling with the size and the brief.
            </p>
          </div>
          <div className="frow">
            {pricingModels.map((m, i) => (
              <div className="fcard" key={m.name} data-reveal style={{ gridColumn: i === 0 ? "span 1" : "span 1" }}>
                <span className="fn">{String(i + 1).padStart(2, "0")}</span>
                <h3>{m.name}</h3>
                <p>{m.detail}</p>
              </div>
            ))}
            <div className="fcard" data-reveal>
              <span className="fn">↳</span>
              <h3>Not sure which?</h3>
              <p>
                Tell us the unit and whether it&apos;s for long-let, short-let or your own use. We&apos;ll
                recommend the package and the structure that fits — and put it in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <section className="section dark" style={{ textAlign: "center" }}>
        <div className="wrap-n">
          <h2 className="kicker center" data-reveal>Ready when you are.</h2>
          <div data-reveal className="on-dark" style={{ marginTop: 30, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn">Get a quote <span className="arr">→</span></Link>
            <a href={`https://wa.me/${site.whatsapp}`} className="btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </div>
      </section>

      <Reveals />
    </main>
  );
}
