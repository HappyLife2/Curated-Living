import Image from "next/image";
import Link from "next/link";
import Reveals from "@/components/Reveals";
import Faq from "@/components/Faq";
import Marquee from "@/components/Marquee";
import ProcessTimeline from "@/components/ProcessTimeline";
import ReturnsCalculator from "@/components/ReturnsCalculator";
import Transform from "@/components/Transform";
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
          <span>FF&amp;E · Styling · Handover</span>
          <span>Dubai</span>
        </div>
        <div className="hero-inner wrap">
          <span className="eyebrow" style={{ color: "var(--sage)" }}>Curated Living — {site.founderLine}</span>
          <h1 style={{ marginTop: 18 }}>
            <span className="ov"><span className="hl">Hand over</span></span>
            <span className="ov"><span className="hl">the keys.</span></span>
            <span className="ov"><span className="hl"><em>We hand back a home.</em></span></span>
          </h1>
          <p className="hero-sub">
            Designer-led turnkey furnishing for Dubai property investors. Give us an empty
            apartment — in two to four weeks we return it furnished, styled and rent-ready.
          </p>
          <div className="hero-cta on-dark">
            <Link href="/contact" className="btn">Get a quote <span className="arr">→</span></Link>
            <Link href="/packages" className="btn-ghost">See the packages</Link>
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
                Most investors don&apos;t want <em>design</em>. They want a finished apartment —
                without the suppliers, the deliveries, the months.
              </p>
            </div>
            <div data-reveal style={{ paddingTop: 8 }}>
              <p className="lede">
                Curated Living sits between the generic furniture-pack companies and the slow,
                expensive design studios. The taste and judgement of a senior FF&amp;E designer,
                delivered as a fast, packaged service — so an empty unit becomes a rent-ready home
                in weeks, not months.
              </p>
              <p className="lede" style={{ marginTop: 18 }}>
                You hand over the keys and a budget. We handle sourcing, procurement, delivery,
                installation and styling, and give you back somewhere a tenant wants to live.
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

      {/* ============ TRANSFORM ============ */}
      <section className="section dark">
        <div className="wrap">
          <div className="sec-head row">
            <div data-reveal>
              <span className="eyebrow">Keys to rent-ready</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>
                From bare handover<br />to a home that <em>lets itself.</em>
              </h2>
            </div>
            <p className="lede" style={{ maxWidth: "42ch" }} data-reveal>
              Drag to see the difference a designer&apos;s eye and a managed procurement make — the
              same space, before and after.
            </p>
          </div>
          <div data-reveal>
            <Transform src="/projects/showroom.jpg" alt="Dubai apartment furnished by Curated Living" />
          </div>
        </div>
      </section>

      {/* ============ PACKAGES ============ */}
      <section className="section" id="packages">
        <div className="wrap">
          <div className="sec-head row">
            <div data-reveal>
              <span className="eyebrow">What you can book</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>Three ways to a<br />finished home.</h2>
            </div>
            <Link href="/packages" className="link-u" data-reveal>Full package detail →</Link>
          </div>
          <div className="pkg-grid">
            {packages.map((p) => (
              <article className={`pkg${p.featured ? " feature" : ""}`} key={p.slug} data-reveal>
                {p.featured && <span className="pkg-flag">Most booked</span>}
                <span className="pkg-for">{p.for}</span>
                <h3 className="pkg-name">{p.name}</h3>
                <div className="pkg-price">
                  {p.price}
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

      {/* ============ PROCESS ============ */}
      <section className="section dark">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="kicker">Rent-ready in <em>two to four weeks.</em></h2>
            <p className="lede" style={{ maxWidth: "52ch" }}>
              No drawings, no contractors, no renovation. One designer, one point of contact, one
              finished home — on a timeline an investor can plan around.
            </p>
          </div>
          <ProcessTimeline />
          <div data-reveal style={{ marginTop: 48 }}>
            <Link href="/process" className="btn-ghost on-dark-cta" style={{ color: "var(--alabaster)", borderColor: "var(--alabaster)" }}>
              See the full process
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CALCULATOR ============ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head row">
            <div data-reveal>
              <span className="eyebrow">The numbers</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>Transparent from<br />the first message.</h2>
            </div>
            <p className="lede" style={{ maxWidth: "40ch" }} data-reveal>
              Move the budget to see how we charge — a fixed fee plus 10% procurement, or one
              turnkey price with everything handled.
            </p>
          </div>
          <div data-reveal>
            <ReturnsCalculator />
          </div>
        </div>
      </section>

      {/* ============ WHY DESIGNER-LED ============ */}
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

      {/* ============ WORK (pinned horizontal) ============ */}
      <section className="hscroll" data-hscroll aria-label="Selected work">
        <div className="hscroll-track" data-hscroll-track>
          <div className="hscroll-intro">
            <span className="eyebrow" style={{ color: "var(--sage)" }}>Selected work</span>
            <h2 className="kicker" style={{ marginTop: 20, fontSize: "clamp(30px,4vw,52px)" }}>
              Finished homes, across Dubai.
            </h2>
            <p className="lede" style={{ color: "var(--muted-2)", marginTop: 18 }}>
              A selection of units taken from empty to rent-ready.
            </p>
            <Link href="/work" className="link-u" style={{ display: "inline-block", marginTop: 20, color: "var(--sage)" }}>
              View all work →
            </Link>
          </div>
          {works.slice(0, 5).map((w) => (
            <article className="gcard" key={w.slug}>
              <Image src={w.image} alt={`${w.name} — ${w.location}`} fill sizes="(max-width:860px) 74vw, 560px" style={{ objectFit: "cover" }} />
              <div className="gcard-cap">
                <div className="t">{w.name}</div>
                <div className="s">{w.type} · {w.location}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ COMMUNITIES ============ */}
      <section className="section dark">
        <div className="wrap">
          <div className="sec-head row">
            <div data-reveal>
              <span className="eyebrow">Where we work</span>
              <h2 className="kicker" style={{ marginTop: 20 }}>Dubai&apos;s prime<br />investor communities.</h2>
            </div>
            <p className="lede" style={{ maxWidth: "38ch" }} data-reveal>
              Concentrated where the rental demand and new handovers are. Elsewhere in the city? Just ask.
            </p>
          </div>
          <div className="comm" data-reveal>
            {communities.map((c) => (
              <Link href="/contact" className="comm-cell" key={c.name}>
                <span className="ci" aria-hidden>→</span>
                <span className="cn">{c.name}</span>
                <span className="cs">{c.note}</span>
              </Link>
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

      {/* ============ PARTNERS BAND ============ */}
      <section className="section tight">
        <div className="wrap">
          <div className="band" data-reveal>
            <div>
              <span className="eyebrow" style={{ color: "var(--sage)" }}>For brokers &amp; agents</span>
              <h2 style={{ marginTop: 18 }}>
                Send us your buyers.<br /><em>Keep the relationship.</em>
              </h2>
              <p>
                You introduce a completing investor; we furnish the unit and pay you a referral fee
                on handover. Your client is looked after, and you do none of the running.
              </p>
            </div>
            <div className="on-dark" style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <Link href="/partners" className="btn" style={{ background: "var(--sage)", color: "var(--evergreen-dk)" }}>
                The partner programme <span className="arr">→</span>
              </Link>
              <Link href="/contact" className="link-u" style={{ color: "var(--sage)" }}>Become a partner →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <Faq />

      {/* ============ FINAL CTA ============ */}
      <section className="section dark" style={{ textAlign: "center" }}>
        <div className="wrap-n">
          <h2 className="kicker center" data-reveal style={{ fontSize: "clamp(34px,6vw,84px)" }}>
            Hand over the keys.
          </h2>
          <p className="lede" data-reveal style={{ margin: "22px auto 0", textAlign: "center" }}>
            Tell us about the unit. You&apos;ll have a furnished, styled, rent-ready home before
            you&apos;ve finished thinking about it.
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
