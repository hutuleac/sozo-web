# SOZO PROJECT — sozoproject.eu

Marketing site for SC SOZO PROJECT SRL — debitare laser & abkant CNC, Iași.

**Stack:** Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 · React 19

---

## Project Overview

Phase 1 + 2 + 3 (per `../PRD.md` §14):

- `/` — Homepage (hero, trust bar, services, USPs, materials, industries, client logos zone, portfolio teaser, testimonials, CTA)
- `/servicii/debitare-laser` — Service page with full content + FAQ + schema
- `/servicii/prelucrare-abkant` — Service page with full content + FAQ + schema
- `/portofoliu` — Filterable gallery (service / material / industry)
- `/despre-noi` — Owner story, equipment investment, values, company data
- `/faq` — All 13 FAQs grouped (laser / abkant / comenzi)
- `/blog` — Hub + 4 seed articles (laser vs plasma, toleranțe, DXF prep, materiale)
- `/contact` — NAP block, contact form, embedded Google Map
- `/cere-oferta` — Quote form with file upload (DXF/DWG/STEP/STP/PDF, 20MB)
- `/api/contact` — Form handler (Resend) with honeypot
- `sitemap.xml` (incl. all posts), `robots.txt`, `/llms.txt`, JSON-LD schemas (LocalBusiness, Service, FAQ, Breadcrumb, AboutPage, Article)

Phase 4+ (EN mirror) — not yet implemented.

### Blog content

Articles live in `lib/posts.ts` as a typed array of `Post` objects. The renderer
(`components/blog/PostRenderer.tsx`) maps a `Block[]` to JSX (h2/h3/p/ul/ol/table/callout/qa/internal). Static params for `/blog/[slug]` are generated from the same array.

To add a new article: append a Post to `lib/posts.ts`, no other wiring needed —
the hub, dynamic route, sitemap and Article schema all read from the same source.

---

## Running the Project

```bash
# 1. Install deps
cd site
npm install

# 2. Configure env
cp .env.example .env.local
# Fill RESEND_API_KEY (or leave empty for dev — form logs to console)

# 3. Dev server (http://localhost:3000)
npm run dev

# 4. Production build
npm run build
npm start
```

---

## Architecture

| Layer | Path | Responsibility |
|---|---|---|
| Routes | `app/` | Pages, layouts, API routes, sitemap/robots |
| Layout | `components/layout/` | Header (sticky, dropdown, mobile drawer), Footer, WhatsApp FAB, Logo |
| UI primitives | `components/ui/` | Button, SpecBadge, SectionHeader, Container, FAQAccordion |
| Sections | `components/sections/` | Hero, TrustBar, ServicesGrid, WhyUs, MaterialsStrip, Industries, ClientLogos, PortfolioTeaser, Testimonials, CtaSection, ServiceHero, Breadcrumbs |
| Forms | `components/forms/` | ContactForm, QuoteForm |
| Schema | `components/schema/` | JSON-LD: LocalBusiness, Service, FAQ, Breadcrumb |
| Lib | `lib/` | `site.ts` (NAP), `fonts.ts` (next/font), `images.ts` (Unsplash placeholders) |
| Public | `public/` | `llms.txt`, future static assets |

### Data flow

```
User → page → sections (server components)
              ↳ FAQAccordion / ContactForm / QuoteForm (client)
                ↳ POST /api/contact → Resend → contact@sozoproject.eu
                                    ↳ honeypot drops bots silently
                                    ↳ file validated (size + ext) before send
```

---

## Common Change Patterns

| Goal | Files |
|---|---|
| Edit phone/email/address | `lib/site.ts` (only) |
| Add a service page | Copy `app/servicii/debitare-laser/page.tsx`, change copy + metadata + schema |
| Replace placeholder hero image | `lib/images.ts` — swap URL or use `/public/images/*.webp` |
| Add client logos | Replace placeholders in `components/sections/ClientLogos.tsx` with `<Image>` entries |
| Edit homepage section order | `app/page.tsx` |
| Tweak colors | `app/globals.css` — `@theme` block |
| Update metadata (titles/desc) | `app/layout.tsx` (defaults) + per-page `export const metadata` |
| Update sitemap entries | `app/sitemap.ts` |
| Update llms.txt | `public/llms.txt` |

---

## Images

Currently uses Unsplash placeholders (free, commercial-safe under Unsplash License) referenced from `lib/images.ts`. The client logos zone in `components/sections/ClientLogos.tsx` is a 6-slot template — replace with real `<Image>` entries when client provides logos.

Existing brand assets (logo PNG) at `https://sozoproject.eu/wp-content/uploads/...` are usable but should be exported as SVG before launch (see `../IMAGES-INVENTORY.md`).

---

## Environment variables

| Var | Purpose |
|---|---|
| `RESEND_API_KEY` | Contact form sender. If empty in dev, form logs payload to console and returns success. |
| `CONTACT_EMAIL` | Recipient address. Default: `contact@sozoproject.eu`. |
| `CONTACT_FROM` | From header. Use a verified Resend domain in prod. |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL (default `https://sozoproject.eu`). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Number used in `wa.me` link (no `+`). |
| `NEXT_PUBLIC_PHONE` | `tel:` link target. |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Visible phone format. |

---

## Deployment

Recommended: Vercel.

```bash
# Once
npx vercel link
npx vercel env add RESEND_API_KEY
npx vercel env add CONTACT_EMAIL

# Deploy
npx vercel --prod
```

Add domain `sozoproject.eu` in Vercel dashboard. Set up `sozoproject.com → sozoproject.eu` 301 redirect at the registrar or via a Vercel project alias rewrite.

---

## Open items (per PRD §15)

Awaiting from client before launch: portfolio photos, real testimonials, client logos, owner photo + bio, real machine photos. Placeholders are in place and clearly marked.
