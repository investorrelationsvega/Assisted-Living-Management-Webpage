# Assisted-Living-Management-Webpage

Vega ALM information page — a static marketing site for Vega Assisted Living,
built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build into dist/
npm run preview  # serve the built site locally
npm run check    # Astro + TypeScript diagnostics
```

The build output in `dist/` is plain static files — it deploys to Netlify,
Vercel, Cloudflare Pages, GitHub Pages or any static host with no server
runtime.

## Structure

```
src/
  consts.ts              Site name, contact details, nav, form endpoint
  data/content.ts        Page copy: care levels, amenities, pricing, FAQs
  layouts/BaseLayout.astro  <head>, SEO/Open Graph tags, JSON-LD, header/footer
  components/            Header, Footer, Section, Card, CheckList, CtaBand, …
  pages/                 One file per route
  styles/global.css      Tailwind import + design tokens
public/                  Favicon, Open Graph image, robots.txt
```

Copy lives in `src/consts.ts` and `src/data/content.ts` rather than in the
templates, so text can be updated without touching markup.

### Pages

| Route              | Purpose                                                  |
| ------------------ | -------------------------------------------------------- |
| `/`                | Hero, differentiators, care levels, move-in process       |
| `/levels-of-care/` | The four levels in detail, each with what's included      |
| `/life-at-vega/`   | Sample day, amenities by category, family policy          |
| `/pricing/`        | Rate tiers, what's included vs. billed separately, FAQs    |
| `/about/`          | Approach, standards, at-a-glance facts, leadership        |
| `/contact/`        | Tour request form and direct contact details              |

## Before this goes live

The site renders end to end, but the content is scaffolding. Everything below
is a placeholder and needs real information — several items are legally or
financially significant, so none of them should ship as-is.

- [ ] **Contact details** (`src/consts.ts`) — phone, email, street address,
      office hours.
- [ ] **State license number** (`src/consts.ts`) — shown in the footer and on
      the About page; currently `PENDING`.
- [ ] **Pricing** (`src/data/content.ts`) — every rate is illustrative and
      marked `PLACEHOLDER`. Replace with the published rate sheet, or remove
      the numbers and keep the page as a "request a quote" page.
- [ ] **Payment sources FAQ** (`src/data/content.ts`) — confirm what is
      actually accepted: long-term care insurance, VA Aid and Attendance,
      Medicaid waiver participation.
- [ ] **Leadership bios** (`src/pages/about.astro`) — the section is a marked
      placeholder. Families read this closely.
- [ ] **Care and staffing claims** — the care level descriptions, staffing
      statements and amenity lists were written as plausible defaults. Check
      each against what the community actually provides; marketing claims about
      care are regulated.
- [ ] **Photography** — the hero and the Open Graph image (`public/og-default.svg`)
      are abstract placeholders. Replace with real photos of the community.
- [ ] **Form endpoint** (`FORM_ENDPOINT` in `src/consts.ts`) — the tour request
      form is deliberately rendered disabled until this is set, so no
      submission is silently dropped. Point it at Formspree, Netlify Forms, a
      serverless function, or the CRM already in use.
- [ ] **Production domain** (`site` in `astro.config.mjs` and the sitemap URL in
      `public/robots.txt`) — drives canonical URLs, Open Graph tags and the
      sitemap.

### A note on the contact form

The form asks for names and contact details but deliberately tells visitors not
to include medical details, and collects none. If the form is ever changed to
capture health information, the handler behind `FORM_ENDPOINT` needs a business
associate agreement and the privacy language on the page needs to be rewritten
to match.

## Accessibility and design notes

- Base font size is a step larger than a typical marketing site, and focus
  rings are high-contrast and always visible — most visitors are older adults
  or their adult children, often on a phone.
- `prefers-reduced-motion` is respected globally.
- Colors, fonts and the card radius are defined as tokens in
  `src/styles/global.css`; changing the palette is a single-file edit.
