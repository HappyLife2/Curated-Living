import { faqs } from "@/lib/site";

/**
 * FAQ section + FAQPage structured data.
 *
 * Rendered server-side with native <details>/<summary>, so every answer is in
 * the initial HTML — crawlable by Google and citable by LLMs even while
 * visually collapsed. The FAQPage JSON-LD mirrors the visible content 1:1
 * (a Google requirement) and gives search/AI engines grounded facts to quote.
 */
export default function Faq() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <div className="wrap faq-inner">
        <div className="faq-head" data-reveal>
          <span className="eyebrow">FAQ</span>
          <h2 className="didone">
            Questions,
            <br />
            answered.
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details
              className="faq-item"
              name="faq"
              key={f.q}
              data-reveal
              {...(i === 0 ? { open: true } : {})}
            >
              <summary>
                <span className="faq-q serif">{f.q}</span>
                <span className="faq-ico" aria-hidden />
              </summary>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
