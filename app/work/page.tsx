import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveals from "@/components/Reveals";
import { site, works } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work — Furnished Homes Across Dubai",
  description:
    "A selection of Dubai apartments taken from empty handover to furnished, styled and rent-ready by Curated Living — across Marina, Dubai Hills, Creek Harbour, Downtown, Palm Jumeirah and Emaar Beachfront.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main>
      <header className="phead">
        <div className="wrap">
          <span className="crumb">Selected work</span>
          <h1>
            Empty to <em>rent-ready.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "54ch" }}>
            Real units, finished and handed back across Dubai. Photography here is representative
            while we build the gallery of completed homes.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="grid-gal">
            {works.map((w) => (
              <figure className={w.span} key={w.slug} data-reveal>
                <Image
                  src={w.image}
                  alt={`${w.name} — ${w.type}, ${w.location}`}
                  fill
                  sizes="(max-width:860px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <figcaption>{w.name} · {w.location}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="wrap-n">
          <h2 className="kicker center" data-reveal>Your unit could be next.</h2>
          <div data-reveal style={{ marginTop: 30, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn">Get a quote <span className="arr">→</span></Link>
            <Link href="/packages" className="btn-ghost">See the packages</Link>
          </div>
        </div>
      </section>

      <Reveals />
    </main>
  );
}
