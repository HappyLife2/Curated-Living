import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveals from "@/components/Reveals";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Get a Quote",
  description: `Hand over the keys to an empty Dubai apartment and get back a furnished, rent-ready home in 2–4 weeks. Tell ${site.name} about your unit, budget and timeline.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <header className="phead">
        <div className="wrap">
          <span className="crumb">Get a quote</span>
          <h1>
            Tell us about<br /><em>the unit.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "52ch" }}>
            Empty apartment, a budget, a date you&apos;d like it earning. That&apos;s all we need to start —
            Melissa usually replies the same day.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="wrap contact-grid">
          <div data-reveal>
            <div className="foot-col" style={{ gap: 26 }}>
              <div>
                <span className="foot-h" style={{ color: "var(--moss)" }}>Phone / WhatsApp</span>
                <div><a href={`tel:${site.phoneHref}`} className="link-u">{site.phone}</a></div>
              </div>
              <div>
                <span className="foot-h" style={{ color: "var(--moss)" }}>Email</span>
                <div><a href={`mailto:${site.email}`} className="link-u">{site.email}</a></div>
              </div>
              <div>
                <span className="foot-h" style={{ color: "var(--moss)" }}>Based in</span>
                <div style={{ color: "var(--ink-soft)" }}>{site.location}</div>
              </div>
            </div>
            <p className="serif" style={{ marginTop: 36, fontSize: "clamp(20px,2.2vw,28px)", lineHeight: 1.3, color: "var(--ink)", maxWidth: "20ch" }}>
              &ldquo;Hand over the keys. We hand back a home.&rdquo;
            </p>
            <a href={`https://wa.me/${site.whatsapp}`} className="btn" style={{ marginTop: 28 }} target="_blank" rel="noopener noreferrer">
              Message on WhatsApp <span className="arr">→</span>
            </a>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>

      <Reveals />
    </main>
  );
}
