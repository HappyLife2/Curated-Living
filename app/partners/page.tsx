import type { Metadata } from "next";
import Link from "next/link";
import Reveals from "@/components/Reveals";
import { site, partnerPerks, partnerTypes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner Programme — For Brokers, Agents & Operators",
  description:
    "Refer completing buyers to Curated Living and earn a referral fee on every furnished home. For Dubai real-estate brokers, property managers, short-let operators, holiday-home companies and developer sales teams.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <main>
      <header className="phead">
        <div className="wrap">
          <span className="crumb">Partner programme</span>
          <h1>
            Send us your buyers.<br /><em>Keep the credit.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            The fastest way to grow this business is through people who already advise property
            owners. You introduce a completing investor; we furnish the unit and pay you a referral
            fee on handover. Your client is looked after — and you do none of the running.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Why partner</span>
            <h2 className="kicker">A clean win for<br />both sides.</h2>
          </div>
          <div className="frow" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            {partnerPerks.map((p, i) => (
              <div className="fcard" key={p.title} data-reveal style={{ borderColor: "var(--line-l)" }}>
                <span className="fn" style={{ color: "var(--moss)" }}>{String(i + 1).padStart(2, "0")}</span>
                <h3 style={{ color: "var(--ink)" }}>{p.title}</h3>
                <p style={{ color: "var(--ink-soft)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="split">
            <div data-reveal>
              <span className="eyebrow">Who we work with</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>Built around your<br /><em>pipeline.</em></h2>
              <p className="lede" style={{ maxWidth: "44ch" }}>
                If you meet buyers at completion, you have exactly the moment Curated Living solves.
                One reliable referral relationship can be worth more than months of marketing — to
                both of us.
              </p>
            </div>
            <ul data-reveal style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
              {partnerTypes.map((t) => (
                <li key={t} style={{ padding: "20px 0", borderBottom: "1px solid var(--line-d)", fontFamily: "var(--font-bodoni),serif", fontSize: "clamp(18px,2vw,26px)" }}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="band" data-reveal>
            <div>
              <span className="eyebrow" style={{ color: "var(--sage)" }}>Let&apos;s talk</span>
              <h2 style={{ marginTop: 18 }}>Become a <em>referral partner.</em></h2>
              <p>
                Tell us a little about your business and the buyers you work with. We&apos;ll set up a
                simple referral agreement and a frictionless hand-off.
              </p>
            </div>
            <div className="on-dark" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <Link href="/contact" className="btn" style={{ background: "var(--sage)", color: "var(--evergreen-dk)" }}>
                Apply to partner <span className="arr">→</span>
              </Link>
              <a href={`https://wa.me/${site.whatsapp}`} className="link-u" style={{ color: "var(--sage)" }} target="_blank" rel="noopener noreferrer">
                Or message us on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Reveals />
    </main>
  );
}
