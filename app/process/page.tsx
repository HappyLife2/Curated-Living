import type { Metadata } from "next";
import Link from "next/link";
import Reveals from "@/components/Reveals";
import ProcessTimeline from "@/components/ProcessTimeline";
import ReturnsCalculator from "@/components/ReturnsCalculator";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Process — Keys to Rent-Ready in 2–4 Weeks",
  description:
    "How Curated Living turns an empty Dubai apartment into a furnished, styled, rent-ready home in two to four weeks: keys & brief, furnishing concept, procurement, delivery & install, styling & handover.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <main>
      <header className="phead">
        <div className="wrap">
          <span className="crumb">The process</span>
          <h1>
            Keys to rent-ready,<br /><em>in weeks.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            No drawings, no contractors, no renovation to slow things down. Just furnishing,
            procurement and styling — run end to end by one designer, on a timeline you can plan
            around.
          </p>
        </div>
      </header>

      <section className="section dark">
        <div className="wrap">
          <ProcessTimeline />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head row">
            <div data-reveal>
              <span className="eyebrow">What it costs</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>Priced before<br />you commit.</h2>
            </div>
            <p className="lede" style={{ maxWidth: "40ch" }} data-reveal>
              Slide the furnishing budget to see both ways we charge. Every unit is then quoted
              precisely to its brief.
            </p>
          </div>
          <div data-reveal>
            <ReturnsCalculator />
          </div>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: "center" }}>
        <div className="wrap-n">
          <h2 className="kicker center" data-reveal>Start the clock.</h2>
          <p className="lede" data-reveal style={{ margin: "20px auto 0", textAlign: "center" }}>
            Send us the unit and a timeline. We&apos;ll tell you exactly what rent-ready looks like — and when.
          </p>
          <div data-reveal className="on-dark" style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn">Get a quote <span className="arr">→</span></Link>
            <a href={`https://wa.me/${site.whatsapp}`} className="btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </div>
      </section>

      <Reveals />
    </main>
  );
}
