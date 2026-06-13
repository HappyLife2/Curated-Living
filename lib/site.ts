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
export type Package = {
  slug: string;
  name: string;
  for: string;
  price: string;
  priceNote: string;
  blurb: string;
  points: string[];
  featured?: boolean;
};

export const packages: Package[] = [
  {
    slug: "investor-essential",
    name: "Investor Essential",
    for: "Studio & 1-bedroom · to let",
    price: "from AED 5,000",
    priceNote: "fee + 10% procurement, or turnkey package",
    blurb:
      "A complete, rental-ready furnishing for investors and landlords who want the unit earning — fast, considered, and durable.",
    points: [
      "Furnishing concept + curated furniture selection",
      "Trade procurement & supplier coordination",
      "Delivery coordination + installation oversight",
      "Final styling & soft furnishings",
      "Tenant-ready handover",
    ],
  },
  {
    slug: "premium-living",
    name: "Premium Living",
    for: "Elevated homes & premium rentals",
    price: "from AED 9,000",
    priceNote: "fee + procurement, scaled to the budget",
    blurb:
      "A step up in materiality and detail — for owners and premium rentals that need to feel considered, not catalogue.",
    points: [
      "Everything in Investor Essential",
      "Higher-end furniture & decorative lighting",
      "Artwork & curated accessories",
      "Layered soft furnishings & textiles",
      "Full turnkey handover",
    ],
    featured: true,
  },
  {
    slug: "holiday-home",
    name: "Holiday Home",
    for: "Airbnb & short-let operators",
    price: "from AED 7,500",
    priceNote: "per unit · re-style cycles available",
    blurb:
      "Furnishing and styling tuned for short-let durability and broad guest appeal — handed over photo-ready for the listing.",
    points: [
      "Guest-ready furnishing & durable specification",
      "Styling for broad short-let appeal",
      "Photography-ready setup for listings",
      "Guest-ready accessories — the hotel touches",
      "Optional re-style & refresh cycles",
    ],
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
    title: "One point of contact",
    body: "No coordinating eight suppliers, three delivery windows and a handyman. You hand over keys and a budget; we return a finished home. The whole project runs through one person, end to end.",
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
    a: "Two simple structures. Either a fixed design & styling fee plus a procurement management fee (around 10% of the furnishing budget), or a single turnkey package price where we quote one number and handle everything. For a 1-bedroom you'd typically expect the fee to start around AED 5,000; the furnishing budget itself is separate and yours.",
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
