import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveals from "@/components/Reveals";
import { site, differentiators } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Melissa Fernandes",
  description:
    "Curated Living is led by Melissa Fernandes, a senior FF&E and interior designer with 10+ years in Dubai luxury residential. A designer-led furnishing service — not a furniture-pack company.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <header className="phead">
        <div className="wrap">
          <span className="crumb">About</span>
          <h1>
            A designer behind<br /><em>every home.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            Curated Living is the turnkey-furnishing arm of designer Melissa Fernandes — built for
            owners and investors who want the eye of a senior FF&amp;E designer without the months of
            a full design project.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <figure className="split-media" data-reveal>
              <Image src="/projects/villa.jpg" alt="A Curated Living interior" fill sizes="(max-width:860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              <figcaption>{site.founder} · {site.location}</figcaption>
            </figure>
            <div className="split-text" data-reveal>
              <span className="eyebrow">The founder</span>
              <h2 className="statement" style={{ marginTop: 20 }}>
                Ten years of luxury residential, <em>distilled into a service.</em>
              </h2>
              <p className="lede" style={{ marginTop: 22 }}>
                Melissa Fernandes has spent a decade furnishing and styling high-end homes across
                Dubai — selecting furniture, lighting, materials and the finishing touches that make
                a space feel considered rather than catalogue.
              </p>
              <p className="lede" style={{ marginTop: 16 }}>
                Curated Living takes that expertise and packages it for the rental market: fast,
                repeatable, and judged by someone who understands proportion, durability and where a
                budget should go. Not a salesperson with a furniture catalogue — a designer with a
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">How we think</span>
            <h2 className="kicker">The standards behind<br /><em>every handover.</em></h2>
          </div>
          <div className="frow">
            {differentiators.map((d) => (
              <div className="fcard" key={d.n} data-reveal>
                <span className="fn">{d.n}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-n" style={{ textAlign: "center" }}>
          <span className="eyebrow center" data-reveal>One designer, two studios</span>
          <p className="statement" data-reveal style={{ margin: "24px auto 0", maxWidth: "30ch", textAlign: "center" }}>
            Curated Living is furnishing &amp; styling. For full bespoke interior design and
            renovation, that&apos;s <em>Atelier Madonna</em>.
          </p>
          <p className="lede" data-reveal style={{ margin: "20px auto 0", textAlign: "center" }}>
            Two sides of the same expertise. If your project needs design from the ground up rather
            than a fast, finished furnishing, we&apos;ll point you to the right one.
          </p>
        </div>
      </section>

      <section className="section dark" style={{ textAlign: "center" }}>
        <div className="wrap-n">
          <h2 className="kicker center" data-reveal>Let&apos;s furnish your unit.</h2>
          <div data-reveal className="on-dark" style={{ marginTop: 30, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn">Get a quote <span className="arr">→</span></Link>
            <Link href="/work" className="btn-ghost">See the work</Link>
          </div>
        </div>
      </section>

      <Reveals />
    </main>
  );
}
