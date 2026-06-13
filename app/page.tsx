import Image from "next/image";
import Link from "next/link";
import Reveals from "@/components/Reveals";
import Faq from "@/components/Faq";
import Marquee from "@/components/Marquee";
import ProcessTimeline from "@/components/ProcessTimeline";
import PriceExplorer from "@/components/PriceExplorer";
import StyleSelector from "@/components/StyleSelector";
import {
  site,
  stats,
  marquee,
  packages,
  differentiators,
  communities,
  works,
  testimonials,
} from "@/lib/site";

export default function Home() {
  const feature = testimonials[0];

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-media">
          <Image src="/projects/hero.jpg" alt="A furnished, styled Dubai apartment by Curated Living" fill sizes="100vw" priority style={{ objectFit: "cover" }} />
        </div>
        <div className="hero-grain" />
        <div className="hero-meta">
          <span>Turnkey furnishing</span>
          <span>Fixed-price &amp; bespoke</span>
          <span>Dubai</span>
        </div>
        <div className="hero-inner wrap">
          <span className="eyebrow" style={{ color: "var(--gold-2)" }}>Curated Living — {site.founderLine}</span>
          <h1 style={{ marginTop: 20 }}>
            <span className="ov"><span className="hl">Hand over the keys.</span></span>
            <span className="ov"><span className="hl"><em>We hand back a home.</em></span></span>
          </h1>
          <p className="hero-sub">
            Designer-led turnkey furnishing for Dubai homes — fixed-price packs or a fully bespoke
            scheme. Give us an empty apartment; in two to four weeks it&apos;s furnished, styled and ready.
          </p>
          <div className="hero-cta on-dark">
            <Link href="/contact" className="btn">Get a quote <span className="arr">→</span></Link>
            <Link href="/packages" className="btn-ghost">View packages</Link>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><i /></div>
      </section>

      <Marquee items={marquee} />

      {/* ============ INTRO + STATS ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: "flex-start" }}>
            <div data-reveal>
              <span className="eyebrow">The idea</span>
              <p className="statement" style={{ marginTop: 24 }}>
                A finished home, without the suppliers, the deliveries, or the <em>months.</em>
              </p>
            </div>
            <div data-reveal style={{ paddingTop: 6 }}>
              <p className="lede">
                Curated Living sits between the generic furniture-pack companies and the slow, expensive
                design studios — the taste of a senior FF&amp;E designer, delivered as a fast, fixed-price
                service. And for owners who want something personal, a fully bespoke option most companies
                simply don&apos;t offer.
              </p>
              <p className="lede" style={{ marginTop: 18 }}>
                You hand over the keys. We handle sourcing, procurement, delivery, installation and styling
                — and give you back somewhere a tenant, a guest, or you, will want to live.
              </p>
            </div>
          </div>

          <div className="stats" style={{ marginTop: "clamp(56px,7vw,96px)" }}>
            {stats.map((s) => (
              <div className="stat" key={s.label} data-reveal>
                <div className="n" data-count={s.value} data-suffix={s.suffix}>0</div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PACKAGES ============ */}
      <section className="section" id="packages">
        <div className="wrap">
          <div className="sec-head row">
            <div data-reveal>
              <span className="eyebrow">What you can book</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>Four ways to a<br />finished home.</h2>
            </div>
            <Link href="/packages" className="link-u" data-reveal>Full pricing →</Link>
          </div>
          <div className="pkg-grid">
            {packages.map((p) => (
              <article className={`pkg${p.featured ? " feature" : ""}`} key={p.slug} data-reveal>
                {p.featured && <span className="pkg-flag">Most booked</span>}
                <span className="pkg-for">{p.for}</span>
                <h3 className="pkg-name">{p.name}</h3>
                <div className="pkg-price">
                  {p.start}
                  <small>{p.priceNote}</small>
                </div>
                <div className="pkg-rule" />
                <div className="pkg-list">
                  {p.points.slice(0, 4).map((pt) => (
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

      {/* ============ PRICE EXPLORER ============ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Transparent pricing</span>
            <h2 className="kicker">Pick a size.<br /><em>See the price.</em></h2>
          </div>
          <div data-reveal>
            <PriceExplorer />
          </div>
        </div>
      </section>

      {/* ============ SIGNATURE STYLES ============ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Signature styles</span>
            <h2 className="kicker">Every pack, in <em>three styles.</em></h2>
            <p className="lede" style={{ maxWidth: "52ch" }}>
              Choose the look; we tailor it to your pack and unit — the same considered aesthetic, at
              every tier.
            </p>
          </div>
          <div data-reveal>
            <StyleSelector />
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="section dark">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="kicker">Rent-ready in <em>two to four weeks.</em></h2>
            <p className="lede" style={{ maxWidth: "52ch" }}>
              No drawings, no contractors, no renovation. One designer, one point of contact, one finished
              home — on a timeline you can plan around.
            </p>
          </div>
          <ProcessTimeline />
          <div data-reveal style={{ marginTop: 48 }} className="on-dark">
            <Link href="/process" className="btn-ghost">See the full process</Link>
          </div>
        </div>
      </section>

      {/* ============ WORK ============ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head row">
            <div data-reveal>
              <span className="eyebrow">Selected work</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>Finished homes,<br />across Dubai.</h2>
            </div>
            <Link href="/work" className="link-u" data-reveal>View all work →</Link>
          </div>
          <div className="grid-gal">
            {works.slice(0, 4).map((w, idx) => (
              <figure className={idx < 2 ? "g-half" : idx === 2 ? "g-wide" : "g-tall"} key={w.slug} data-reveal>
                <Image src={w.image} alt={`${w.name} — ${w.location}`} fill sizes="(max-width:860px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <figcaption>{w.name} · {w.location}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="section dark">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">Why Curated Living</span>
            <h2 className="kicker">Designer-led, not a<br /><em>furniture pack.</em></h2>
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

      {/* ============ TESTIMONIAL ============ */}
      <section className="section">
        <div className="wrap-n" style={{ textAlign: "center" }}>
          <span className="eyebrow center" data-reveal>In their words</span>
          <p className="quote" style={{ margin: "26px auto 0", maxWidth: "26ch" }} data-reveal>
            &ldquo;{feature.quote}&rdquo;
          </p>
          <p className="quote-attr" data-reveal>
            <b>{feature.who}</b> · {feature.context}
          </p>
        </div>
      </section>

      {/* ============ COMMUNITIES ============ */}
      <section className="section dark">
        <div className="wrap">
          <div className="sec-head row">
            <div data-reveal>
              <span className="eyebrow">Where we work</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>Dubai&apos;s prime<br />communities.</h2>
            </div>
            <p className="lede" style={{ maxWidth: "36ch" }} data-reveal>
              Concentrated where the demand and new handovers are. Elsewhere in the city? Just ask.
            </p>
          </div>
          <div className="comm" data-reveal>
            {communities.map((c) => (
              <Link href="/contact" key={c.name}>
                <span className="ci" aria-hidden>→</span>
                <span className="cn">{c.name}</span>
                <span className="cs">{c.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PARTNERS BAND ============ */}
      <section className="section tight">
        <div className="wrap">
          <div className="band" data-reveal>
            <div>
              <span className="eyebrow" style={{ color: "var(--gold-2)" }}>For brokers &amp; agents</span>
              <h2 style={{ marginTop: 18 }}>
                Send us your buyers.<br /><em>Keep the relationship.</em>
              </h2>
              <p>
                You introduce a completing investor; we furnish the unit and pay you a referral fee on
                handover. Your client is looked after, and you do none of the running.
              </p>
            </div>
            <div className="on-dark" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <Link href="/partners" className="btn btn-gold">The partner programme <span className="arr">→</span></Link>
              <Link href="/contact" className="link-u" style={{ color: "var(--gold-2)" }}>Become a partner →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <Faq />

      {/* ============ FINAL CTA ============ */}
      <section className="section dark" style={{ textAlign: "center" }}>
        <div className="wrap-n">
          <h2 className="kicker center" data-reveal style={{ fontSize: "clamp(34px,6vw,80px)" }}>
            Hand over the keys.
          </h2>
          <p className="lede" data-reveal style={{ margin: "22px auto 0", textAlign: "center" }}>
            Tell us about the unit. You&apos;ll have a furnished, styled, ready home before you&apos;ve
            finished thinking about it.
          </p>
          <div data-reveal style={{ marginTop: 34, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }} className="on-dark">
            <Link href="/contact" className="btn">Get a quote <span className="arr">→</span></Link>
            <a href={`https://wa.me/${site.whatsapp}`} className="btn-ghost" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </div>
      </section>

      <Reveals />
    </main>
  );
}
