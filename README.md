# Curated Living

**Designer-led turnkey furnishing & styling for Dubai property investors.**

> *"Hand over the keys. We hand back a home."* — furnished, styled, rent-ready in 2–4 weeks.

Founder: **Melissa Fernandes** — Senior FF&E & Interior Designer (Dubai).
A separate venture from her bespoke interior-design studio, Atelier Madonna — same founder,
different funnel (fast, packaged, investor-focused furnishing vs. slow bespoke design).

## This repo

The single source of truth for the Curated Living business **and** its production website.

- **[BRAND_FOUNDATION.md](./BRAND_FOUNDATION.md)** — positioning, packages, pricing, unit economics,
  go-to-market, operations, brand direction, domain status, roadmap, and open decisions.
- **`app/`, `components/`, `lib/`** — the website (see below).

## Website

A cinematic, editorial, photography-led marketing site — its own visual world (**"Editorial
Evergreen Noir"**: noir + alabaster + evergreen, Bodoni / Fraunces / Hanken Grotesk), deliberately
distinct from Atelier Madonna's warm-humanist palette.

**Stack:** Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind v4 · Framer Motion · GSAP +
ScrollTrigger · Lenis smooth-scroll · Resend (contact) · Microsoft Clarity (opt-in) · Docker + Caddy.

**Routes:** `/` (immersive narrative), `/packages`, `/process`, `/work`, `/partners`, `/about`,
`/contact`, plus `/api/contact`, `/api/health`, `sitemap.xml`, `robots.txt`, `llms.txt`.

**Highlights:** scroll-driven hero, empty→furnished drag reveal, Day 1→21 process timeline, an
interactive investor **returns calculator**, pinned horizontal work gallery, full SEO/GEO
(metadata, JSON-LD `LocalBusiness`/`Service`/`Offer`/reviews, `llms.txt`).

### Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (clean)
```

Imagery in `public/projects/` is palette-aligned **placeholder** photography — swap 1:1 for
Melissa's real finished-unit photos. Content lives in **`lib/site.ts`**.

### Deploy (VPS — Docker + shared Caddy)

Standalone output, binds `127.0.0.1:3008`. Set `NEXT_PUBLIC_SITE_URL`, copy `.env` (see
`.env.example`), add `Caddyfile.snippet` to the shared Caddy, then `./deploy.sh`.
Contact form needs `RESEND_API_KEY` + a verified sender; without it, enquiries validate and log
(the UX never breaks).

## Status

- **Phase 0 — Foundation:** ✅
- **Phase 1 — Identity:** ✅ brand direction + visual system built into the site.
- **Phase 2 — Website:** ✅ shipped (this repo) — builds clean, all routes verified.
- **Next:** register domain (`curatedlivingdubai.com` + `curatedliving.co`), wire Resend + Clarity,
  swap placeholder imagery for real units, then deploy.

See `BRAND_FOUNDATION.md` §13–14 for the roadmap and open decisions awaiting sign-off.
