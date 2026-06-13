import { site, packages, testimonials, communities } from "@/lib/site";

/**
 * Structured data for SEO + GEO/AEO so search and AI engines can attribute and
 * recommend the service with grounded facts. Rendered once in the root layout.
 */
export default function JsonLd() {
  const graph = [
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      email: site.email,
      telephone: site.phoneHref,
      description: site.description,
      slogan: site.tagline,
      areaServed: [
        { "@type": "City", name: "Dubai" },
        ...communities.map((c) => ({ "@type": "Place", name: `${c.name}, Dubai` })),
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      founder: {
        "@type": "Person",
        name: site.founder,
        jobTitle: "Senior FF&E & Interior Designer",
      },
      knowsAbout: [
        "Turnkey Furnishing",
        "FF&E Procurement",
        "Property Styling",
        "Short-term Rental Furnishing",
        "Investor Furnishing Packages",
        "Holiday Home Setup",
      ],
      makesOffer: packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        description: p.blurb,
        category: "Turnkey furnishing & styling",
        url: `${site.url}/packages#${p.slug}`,
      })),
      review: testimonials.map((t) => ({
        "@type": "Review",
        reviewBody: t.quote,
        author: { "@type": "Person", name: `${t.who} — ${t.context}` },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — ${site.founderLine}`,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": `${site.url}/#service`,
      serviceType: "Turnkey furnishing, FF&E procurement & styling",
      provider: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "City", name: "Dubai" },
      description:
        "Designer-led turnkey furnishing for Dubai property investors and owners — keys to a furnished, styled, rent-ready home in 2–4 weeks.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Furnishing packages",
        itemListElement: packages.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: p.name, description: p.blurb },
        })),
      },
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
