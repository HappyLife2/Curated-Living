// Central content + config for Curated Living.
// Photography in /public/projects is palette-aligned placeholder imagery — swap 1:1
// for Melissa's real finished-unit photos when they arrive.

export const site = {
  name: "Curated Living",
  legalName: "Curated Living",
  founderLine: "by Melissa Fernandes",
  domain: "curatedlivingdubai.com",
  // Override per-environment via NEXT_PUBLIC_SITE_URL (domain not yet confirmed/registered).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://curatedlivingdubai.com",
  tagline: "Hand over the keys. We hand back a home",
  shortTagline: "Turnkey furnishing & styling, Dubai",
  description:
    "Curated Living is a designer-led turnkey furnishing & styling service for Dubai property investors and owners. Give us the keys to an empty apartment — in two to four weeks we hand back a furnished, styled, rent-ready home. FF&E procurement, styling and handover by Melissa Fernandes, a senior interior designer with 10+ years in luxury residential.",
  founder: "Melissa Fernandes",
  founderRole: "Founder · Senior FF&E & Interior Designer",
  location: "Dubai, UAE",
  email: "hello@curatedlivingdubai.com",
  phone: "+971 58 954 1429",
  phoneHref: "+971589541429",
  whatsapp: "971589541429",
  social: {
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const nav = [
  { label: "Packages", href: "/packages" },
  { label: "Process", href: "/process" },
  { label: "Work", href: "/work" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
] as const;

export const stats = [
  { value: 3, suffix: " wk", label: "Keys to rent-ready" },
  { value: 10, suffix: "+", label: "Years in luxury FF&E" },
  { value: 6, suffix: "", label: "Prime communities served" },
  { value: 1, suffix: "", label: "Designer, start to finish" },
] as const;

/* The promise, restated as a moving line. */
export const marquee = [
  "Investor-ready furnishing",
  "FF&E procurement",
  "Styling & handover",
  "Photography-ready",
  "Short-let & long-let",
  "Designer-led, not a furniture pack",
] as const;

/* ===================== Packages ===================== */
// Unit sizes drive the fixed pricing across packs.
export const unitSizes = ["Studio", "1 BHK", "2 BHK", "3 BHK", "4 BHK"] as const;
export type UnitSize = (typeof unitSizes)[number];

export type Package = {
  slug: string;
  name: string;
  tagline: string;
  for: string;
  blurb: string;
  points: string[];
  featured?: boolean;
  model: "fixed" | "bespoke";
  // Fixed packs: full furnishing price per unit size (AED). Bespoke: design fee per unit size.
  prices?: number[];
  designFee?: (number | null)[]; // null = size not offered (e.g. Bespoke has no studio)
  start: string; // card display, e.g. "from AED 15,000"
  priceNote: string;
};

// Optional add-ons, available with any pack.
export type AddOn = { name: string; desc: string; note: string };
export const addOns: AddOn[] = [
  {
    name: "Electronics Pack",
    desc: "TV, microwave, toaster, kettle, hairdryer, iron and the everyday electronics a home needs — sourced, delivered and set up alongside the furniture.",
    note: "optional · available with any pack · quoted per unit",
  },
];

export const packages: Package[] = [
  {
    slug: "essential",
    name: "Essential",
    tagline: "The standard pack",
    for: "Studio – 4 BHK · to let",
    blurb:
      "A complete, rental-ready home at a fixed price. Everything an investor needs to put a unit on the market — chosen by a designer, not a catalogue.",
    points: [
      "Full furniture across every room",
      "Lighting, soft furnishings & essentials",
      "Procurement, delivery & installation",
      "Styling & tenant-ready handover",
      "Fixed price — no surprises",
    ],
    model: "fixed",
    prices: [15000, 17000, 20000, 23000, 26000],
    start: "from AED 15,000",
    priceNote: "fully furnished · fixed by unit size",
  },
  {
    slug: "premium",
    name: "Premium",
    tagline: "Elevated furnishing",
    for: "Studio – 4 BHK",
    blurb:
      "A step up in materiality and detail, still at a fixed price — for owners and premium rentals that need to feel considered, not standard.",
    points: [
      "Everything in Essential",
      "Higher-end furniture & decorative lighting",
      "Artwork & curated accessories",
      "Layered textiles & soft furnishings",
      "Full turnkey handover",
    ],
    featured: true,
    model: "fixed",
    prices: [19000, 21000, 24000, 27000, 30000],
    start: "from AED 19,000",
    priceNote: "fully furnished · fixed by unit size",
  },
  {
    slug: "holiday-home",
    name: "Holiday Home",
    tagline: "Airbnb & short-let",
    for: "Studio – 4 BHK · guest-ready",
    blurb:
      "Premium furnishing and styling with the basic OS&E a guest needs — cutlery, linens, kitchen kit — included as standard, so the unit is genuinely guest-ready and photo-ready for the listing.",
    points: [
      "Premium-level furnishing & guest-ready spec",
      "Basic OS&E included — cutlery, crockery, linens & kitchen kit",
      "Styling for broad short-let appeal",
      "Photography-ready setup for listings",
      "Optional re-style & refresh cycles",
    ],
    model: "fixed",
    // Holiday Home = Premium + AED 4,000 per size; basic OS&E included as standard (its differentiator).
    prices: [23000, 25000, 28000, 31000, 34000],
    start: "from AED 23,000",
    priceNote: "incl. basic OS&E · guest-ready & photographed",
  },
  {
    slug: "bespoke",
    name: "Bespoke",
    tagline: "Fully custom",
    for: "Owner-occupiers · 1 – 4 BHK",
    blurb:
      "For owners who'll live in the home and want something personal, not a pack. A custom scheme designed around you — the service most furnishing companies don't offer.",
    points: [
      "A custom scheme designed to your taste",
      "Fixed design fee by unit size",
      "Furniture billed at cost — fully transparent",
      "Procurement, delivery, install & styling",
      "Living-in luxury, not a generic pack",
    ],
    model: "bespoke",
    // Studio not offered for Bespoke (null) — starts at 1 BHK.
    designFee: [null, 7000, 10000, 13000, 16000],
    start: "design fee from AED 7,000",
    priceNote: "design fee + furniture at cost + flat 10%",
  },
];

// Helper: tidy AED formatting (deterministic — no locale → no hydration mismatch).
export const aed = (n: number) => "AED " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/* ===================== Signature styles ===================== */
// Three styles, shared across every pack — pick a look, applied at the pack's tier.
export type Style = {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  palette: string[]; // swatch hexes
  image: string;
  bestFor: string;
};

export const styles: Style[] = [
  {
    slug: "monochrome",
    name: "Neutral Monochrome",
    tagline: "Minimal · black accents",
    desc: "A pared-back, monochromatic base of off-whites and soft greys, anchored by black accents and lifted with a few warm accent touches. Clean, architectural and broadly lettable.",
    palette: ["#F1EFE9", "#A7A29A", "#1C1B18", "#BE7A4B"],
    image: "/projects/showroom.jpg",
    bestFor: "Modern apartments · long-let",
  },
  {
    slug: "modern-luxe",
    name: "Modern Luxe",
    tagline: "Warm neutrals · brass",
    desc: "Sophisticated and warm — beige and taupe tones, layered textures and gold/brass accents. Reads premium and considered without ever feeling cold.",
    palette: ["#ECE4D6", "#CBB89B", "#A78A57", "#5E513C"],
    image: "/projects/aura.jpg",
    bestFor: "Premium rentals · Downtown & Marina",
  },
  {
    slug: "light-coastal",
    name: "Light Coastal",
    tagline: "Airy · natural · relaxed",
    desc: "Light and breezy — soft whites, sea-glass tones, pale woods and natural textures. Effortless and highly photogenic; the natural fit for beachfront homes and short-lets.",
    palette: ["#F4F2EB", "#CBDAD7", "#DDCBAD", "#86A39C"],
    image: "/projects/bedroom.jpg",
    bestFor: "Beachfront · holiday homes & short-let",
  },
];

/* ===================== Process (2–4 weeks) ===================== */
export type Step = { day: string; title: string; body: string };

export const processSteps: Step[] = [
  {
    day: "Day 1",
    title: "Keys & brief",
    body: "We take the keys and the essentials: budget, timeline, and whether the unit is for long-let, short-let or your own use. One conversation — no drawn-out design process.",
  },
  {
    day: "Days 2–4",
    title: "Furnishing concept",
    body: "A curated concept and furniture selection built on a package, not a blank page — so you approve a considered home quickly, not a stack of options.",
  },
  {
    day: "Days 5–12",
    title: "Procurement",
    body: "We source at trade, place the orders, and coordinate every supplier — the part that usually eats an owner's evenings and weekends. You hear one update, from one person.",
  },
  {
    day: "Days 12–18",
    title: "Delivery & install",
    body: "Deliveries are scheduled and supervised, assembly managed, the space made whole. No chasing drivers, no missing screws, no half-built wardrobe.",
  },
  {
    day: "Days 18–21",
    title: "Styling & handover",
    body: "Final layering, accessories and the details that read as 'designed'. We hand back a furnished, styled, photography-ready home — ready for the listing or the tenant.",
  },
];

/* ===================== Differentiators ===================== */
export const differentiators = [
  {
    n: "01",
    title: "A designer, not a salesperson",
    body: "Most furnishing-package companies are run by sales teams. Every Curated Living home is selected by a senior FF&E designer — scale, proportion, materiality and budget, judged by someone who has furnished luxury residences for a decade.",
  },
  {
    n: "02",
    title: "Built for the rental market",
    body: "Beautiful that doesn't survive tenants is a liability. We specify for durability and broad appeal, and put the budget where it photographs and where it lasts — not where it merely looks good in a showroom.",
  },
  {
    n: "03",
    title: "Fixed prices, or fully bespoke",
    body: "Most companies sell you a rigid pack. We offer both: transparent fixed-price packs when you just need it done, and a fully bespoke service for owners who'll live in the home and want something personal — the option most furnishing companies simply don't offer.",
  },
];

/* ===================== Communities ===================== */
export const communities = [
  { name: "Dubai Marina", note: "Investor & short-let" },
  { name: "Dubai Hills", note: "Family & long-let" },
  { name: "Creek Harbour", note: "New handovers" },
  { name: "Downtown", note: "Premium rentals" },
  { name: "Palm Jumeirah", note: "Holiday homes" },
  { name: "Emaar Beachfront", note: "Short-let ready" },
] as const;

/* ===================== Work (finished homes) ===================== */
export type Work = {
  slug: string;
  name: string;
  location: string;
  type: string;
  image: string;
  blurb: string;
  span: "g-tall" | "g-wide" | "g-half";
};

export const works: Work[] = [
  {
    slug: "marina-1br",
    name: "Marina One-Bed",
    location: "Dubai Marina",
    type: "1BR · Long-let",
    image: "/projects/bedroom.jpg",
    blurb: "An investor's first unit, furnished and let within the month.",
    span: "g-tall",
  },
  {
    slug: "creek-2br",
    name: "Creek Rise",
    location: "Dubai Creek Harbour",
    type: "2BR · Owner-occupied",
    image: "/projects/showroom.jpg",
    blurb: "A new handover taken from bare shell to move-in ready.",
    span: "g-wide",
  },
  {
    slug: "downtown-views",
    name: "Downtown Views",
    location: "Downtown Dubai",
    type: "2BR · Premium rental",
    image: "/projects/aura.jpg",
    blurb: "Layered, warm, and built to photograph for a premium listing.",
    span: "g-wide",
  },
  {
    slug: "hills-studio",
    name: "Hills Studio",
    location: "Dubai Hills Estate",
    type: "Studio · Short-let",
    image: "/projects/corridor.jpg",
    blurb: "A compact short-let, styled for broad guest appeal.",
    span: "g-tall",
  },
  {
    slug: "beachfront-1br",
    name: "Beachfront Retreat",
    location: "Emaar Beachfront",
    type: "1BR · Holiday home",
    image: "/projects/villa.jpg",
    blurb: "A holiday home handed over guest-ready and listing-ready.",
    span: "g-half",
  },
  {
    slug: "palm-residence",
    name: "Palm Residence",
    location: "Palm Jumeirah",
    type: "2BR · Premium",
    image: "/projects/clubhouse.jpg",
    blurb: "Curated furnishing for a high-expectation address.",
    span: "g-half",
  },
];

/* ===================== Partner program ===================== */
export const partnerPerks = [
  {
    title: "A referral fee on every completed home",
    body: "A clear commission on each unit we furnish from your introduction — paid on handover, no chasing.",
  },
  {
    title: "Your client looked after — without the work",
    body: "You solve the furnishing problem for your buyer and stay the hero of the relationship, while we do the running.",
  },
  {
    title: "Faster to rent-ready, faster to earning",
    body: "Units we furnish reach the market in weeks, not months — which means your investor sees returns sooner.",
  },
  {
    title: "Designer-led work that reflects on you",
    body: "Every home is finished to a standard you're comfortable putting your name beside.",
  },
];

export const partnerTypes = [
  "Real-estate brokers & agents",
  "Property managers",
  "Short-let & Airbnb operators",
  "Holiday-home companies",
  "Developer sales teams",
] as const;

/* ===================== Testimonials ===================== */
export type Testimonial = { quote: string; who: string; context: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "I handed over the keys and a budget and stopped thinking about it. Three weeks later it was furnished, photographed and listed.",
    who: "Property investor",
    context: "1BR · Dubai Marina",
  },
  {
    quote:
      "It doesn't feel like a furniture package. It feels designed — and it has survived a year of guests.",
    who: "Short-let operator",
    context: "Studio · Dubai Hills",
  },
  {
    quote:
      "I send overseas buyers to Curated Living the moment they complete. It makes me look good and I never hear a complaint.",
    who: "Real-estate broker",
    context: "Referral partner · Downtown",
  },
];

/* ===================== FAQ ===================== */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How is this different from a furniture package company?",
    a: "Furniture-package companies sell a fixed pack, usually chosen by a sales team. Curated Living is designer-led: a senior FF&E designer selects every piece for proportion, materiality, durability and rental appeal, and manages the whole project to a styled, photo-ready handover. You get a furnished home, not a delivery of boxes.",
  },
  {
    q: "How does pricing work?",
    a: "The Essential, Premium and Holiday Home packs are a fixed, all-in price set by unit size — from AED 15,000 for an Essential studio up to AED 34,000 for a Holiday Home four-bed, furniture included. Holiday Home sits AED 4,000 above Premium at every size because it includes the basic OS&E a short-let needs — cutlery, crockery, linens and kitchen kit — as standard. No budget guesswork. The Bespoke service is for 1-bed and larger homes (it isn't offered for studios): a fixed design fee by unit size (from AED 7,000 for a 1-bed), furniture billed transparently at cost, plus a flat 10% management fee on the total furnishing value. An optional Electronics Pack (TV, microwave, kettle, etc.) can be added to any pack.",
  },
  {
    q: "Can I choose the style?",
    a: "Yes — every pack comes in three signature styles: Neutral Monochrome (minimal, off-white with black accents), Modern Luxe (warm beige and taupe with brass), and Light Coastal (airy and natural — ideal for beachfront homes and short-lets). You pick the look and we execute it at your pack's tier. If you'd prefer something entirely your own, that's the Bespoke service.",
  },
  {
    q: "How long does it take?",
    a: "Most apartments go from keys to rent-ready in two to four weeks, depending on the unit, the budget and supplier lead times. There are no drawings, contractors or renovation works to slow it down — it is furnishing, procurement and styling.",
  },
  {
    q: "Do you only work with investors?",
    a: "Investors and landlords are the core, but we also furnish for overseas owners, short-let and holiday-home operators, and busy professionals who have just bought and have no time to deal with suppliers. If you have an empty apartment and want it finished, we can help.",
  },
  {
    q: "Which areas do you cover?",
    a: "Across Dubai, with a focus on the prime investor communities — Dubai Marina, Dubai Hills, Creek Harbour, Downtown, Palm Jumeirah and Emaar Beachfront. If your unit is elsewhere in the city, just ask.",
  },
  {
    q: "Do you handle renovation or interior design too?",
    a: "Curated Living is deliberately furnishing, FF&E procurement and styling only — that is what keeps it fast. For full bespoke interior design, renovations or joinery, that is the remit of Melissa's design studio, Atelier Madonna, and we are happy to point you there.",
  },
];
