import type { Metadata } from "next";
import Link from "next/link";
import Reveals from "@/components/Reveals";
import Faq from "@/components/Faq";
import PriceExplorer from "@/components/PriceExplorer";
import { site, packages, unitSizes, aed } from "@/lib/site";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Fixed-price furnishing packs for Dubai property — Essential, Premium and Holiday Home, from AED 15,000, by unit size. Plus a fully bespoke service: fixed design fee, furniture at cost, 5–10% management. Studio to 4 BHK.",
  alternates: { canonical: "/packages" },
};

const bespoke = packages.find((p) => p.slug === "bespoke");

export default function PackagesPage() {
  return (
    <main>
      <header className="phead">
        <div className="wrap">
          <span className="crumb">Packages &amp; pricing</span>
          <h1>
            A finished home,<br /><em>four ways.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "58ch" }}>
            Three fixed-price packs for when you just need it done well — and a fully bespoke service
            for owners who&apos;ll live in the home. Every option is designer-led and managed end to end,
            from sourcing to a photography-ready handover.
          </p>
        </div>
      </header>

      {/* cards */}
      <section className="section">
        <div className="wrap">
          <div className="pkg-grid">
            {packages.map((p) => (
              <article className={`pkg${p.featured ? " feature" : ""}`} key={p.slug} id={p.slug} data-reveal>
                {p.featured && <span className="pkg-flag">Most booked</span>}
                <span className="pkg-for">{p.for}</span>
                <h2 className="pkg-name">{p.name}</h2>
                <div className="pkg-price">
                  {p.start}
                  <small>{p.priceNote}</small>
                </div>
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

      {/* explorer */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Fixed by unit size</span>
            <h2 className="kicker">Pick a size.<br /><em>See the price.</em></h2>
          </div>
          <div data-reveal>
            <PriceExplorer />
          </div>
        </div>
      </section>

      {/* bespoke breakdown */}
      {bespoke && (
        <section className="section dark">
          <div className="wrap">
            <div className="split">
              <div data-reveal>
                <span className="eyebrow">The bespoke service</span>
                <h2 className="kicker" style={{ marginTop: 20 }}>
                  For the home you&apos;ll <em>live in.</em>
                </h2>
                <p className="lede" style={{ maxWidth: "46ch" }}>
                  Most furnishing companies only sell packs. For owner-occupiers who want something
                  personal, the Bespoke service is a custom scheme designed around you — with completely
                  transparent pricing.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
                  <li className="pkg-li" style={{ color: "var(--muted-2)" }}>A fixed design fee, set by unit size</li>
                  <li className="pkg-li" style={{ color: "var(--muted-2)" }}>Furniture billed at cost — you see every figure</li>
                  <li className="pkg-li" style={{ color: "var(--muted-2)" }}>A 5–10% management fee on the furnishing value</li>
                </ul>
                <Link href="/contact" className="btn btn-gold" style={{ marginTop: 32 }}>
                  Start a bespoke project <span className="arr">→</span>
                </Link>
              </div>

              <div data-reveal>
                <div style={{ border: "1px solid var(--line-d)", borderRadius: 3 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 24px", borderBottom: "1px solid var(--line-d)", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold-2)" }}>
                    <span>Unit size</span>
                    <span>Design fee</span>
                  </div>
                  {unitSizes.map((s, i) => (
                    <div key={s} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "20px 24px", borderBottom: i < unitSizes.length - 1 ? "1px solid var(--line-d)" : "none" }}>
                      <span style={{ color: "var(--paper)" }}>{s}</span>
                      <span style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(20px,2.4vw,28px)", color: "var(--gold-2)", fontVariantNumeric: "tabular-nums" }}>
                        {aed(bespoke.designFee![i])}
                      </span>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: 16, fontSize: 12.5, color: "var(--muted-2)", lineHeight: 1.6 }}>
                  Furniture is additional, billed at cost, plus a 5–10% management fee. Quoted in writing
                  before anything is ordered.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

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
