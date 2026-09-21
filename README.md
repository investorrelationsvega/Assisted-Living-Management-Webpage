# Assisted-Living-Management-Webpage

Marketing site for **Vega Assisted Living Management (Vega ALM)**, the senior
housing operating company of Vega.

Vega ALM is a **third party management company**, not a community. It sells
management services to owners who already hold the real estate. The site serves
owners first and families second, and the primary conversion is Request a
Proposal.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com),
deployed on Cloudflare Pages.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:4321, hot reload on save
npm run build    # static build into dist/
npm run preview  # serve the built site locally
npm run check    # Astro + TypeScript diagnostics
```

## Deployment: Cloudflare Pages

The build is fully static, so no adapter is needed. Connect the repository in
the Cloudflare dashboard (Workers and Pages, then Create, then Pages, then
Connect to Git) with:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |
| Node version | `22` (from `.nvmrc`, or set `NODE_VERSION=22`) |

Cloudflare then builds a **preview deployment for every branch push**, each on
its own URL, which is the intended way to review changes before they reach
production. No workflow file or API token is required.

### Preview deployments are not indexable

A preview build would otherwise compete with the real site for the same search
terms and leak placeholder content into results. Two mechanisms prevent that,
both driven by `CF_PAGES_BRANCH` (see `src/deploy.ts`):

- `robots.txt` is generated per build (`src/pages/robots.txt.ts`). Production
  allows crawling and points at the sitemap; previews send `Disallow: /`.
- `dist/_headers` is written after the build (`scripts/write-headers.mjs`) and
  adds `X-Robots-Tag: noindex, nofollow` on previews only. It also carries the
  security headers and the immutable cache policy for `/_astro/*`.

The default leans toward indexable: only a positively identified preview is
blocked, so a local or manual build cannot silently suppress the production
site. Set `SITE_NOINDEX=1` to force the block.

Verify either case locally:

```bash
CF_PAGES_BRANCH=main npm run build          # robots allows, no X-Robots-Tag
CF_PAGES_BRANCH=some-branch npm run build   # robots disallows, noindex header
```

## Structure

```
src/
  data/                  All site copy, one file per page, plus seo.ts
  deploy.ts              Preview vs production detection
  styles/
    global.css           Tailwind import + token imports
    tokens/              Design system tokens (colors, typography, spacing, effects)
  layouts/ components/ pages/
scripts/write-headers.mjs  Post-build Cloudflare _headers writer
```

### Copy

All customer facing copy lives in `src/data/`, not in the templates:
`home.ts`, `owners.ts`, `about.ts`, `careers.ts`, and `seo.ts` for title tags
and meta descriptions.

**House style: no em dashes.** Use periods, commas, colons or parentheses. This
applies to every piece of copy on the site. Check before committing:

```bash
grep -n '—' src/data/*.ts
```

### SEO

Targeting is **national**, so there are no geographic modifiers. Head terms are
operator and management terms (`assisted living management company`,
`third party senior living management`), not the consumer terms a single
community would chase. One head term per page; see `primaryTerm` in
`src/data/seo.ts`.

Two notes carried in that file: the two hero headlines are brand lines from the
design handoff and carry no keyword, so the keyword load sits in title tags,
meta descriptions, hero sub-copy and H2s. And the careers postings are the one
real structured data opportunity on the site, since `JobPosting` schema makes
them eligible for Google Jobs.

## Design system

`src/styles/tokens/` holds the Vega ALM design system tokens, transcribed from
the design handoff. The handoff calls these the contract, so **keep the values
and the semantic alias layer** when editing.

Five rules that are easy to break and that the handoff calls out specifically:

1. **One accent hue.** Sage only. Clay is a status color and must never appear
   as a CTA, dash, rule or section accent.
2. **Light weight, Title Case display type.** Never Archivo 800 uppercase for
   display; that is the Vega parent brand's register.
3. **Square corners.** Radius 0 everywhere, except 2px on photography.
4. **Hairlines, not shadows.** 1px rules and 1px-gap grids carry the structure.
5. **Underline form fields.** Not boxes. This is a strong brand signature.

Display type also needs its negative tracking (`-0.025em` to `-0.03em`), and
several spacing values are deliberately off-grid (26px, 34px, 44px, 62px,
168px). Do not snap them to a 4px grid.

## Current state

The token layer and all page copy are in place. The **page templates are still
the original scaffold** and do not yet reflect the handoff: they are a six page
family facing site with pricing, built on a serif face, a second accent, rounded
cards and boxed inputs. Every one of those is wrong for this brand.

Rebuild in progress, replacing them with the four routes the handoff specifies:

| Route | Purpose |
| --- | --- |
| `/` | Serves owners and families; routes each to the right page |
| `/owners` | The commercial page. Request a Proposal |
| `/about` | Operating history and the Vega to Vega ALM relationship |
| `/careers` | Hiring caregivers and community leaders |

Pricing is intentionally **not** a page. The cost of a management engagement is
a proposal conversation.

## Before this goes live

- [ ] **Design assets.** `vega-mark.svg` (nav and hero watermark) and the ALM
      lockups are not in the repository yet. The `Logo` component needs them.
- [ ] **Portfolio figures.** The stats band, the communities grid and the owner
      reporting table all render labelled placeholders. Only the founding year
      (2012) is verified. Publishing unverified occupancy or unit counts to an
      owner audience is a credibility risk.
- [ ] **Company history.** Three of the four timeline milestones are invented.
- [ ] **Leadership.** Only Sayer Leslie is confirmed; three roles read "Name TK".
- [ ] **The pull quote** on the homepage is drafted, not sourced. It is
      attributed to a real person and must be approved before it ships.
- [ ] **Job postings.** All four are placeholders.
- [ ] **Contact details.** Phone and email are placeholders.
- [ ] **Form endpoints.** Three forms (inquiry, proposal, application) need real
      handlers. Forms render disabled until one is set, so nothing is silently
      dropped.
- [ ] **Production domain** in `astro.config.mjs`, which drives canonical URLs,
      Open Graph tags and the sitemap.

## Accessibility

- `prefers-reduced-motion` is honored globally. The handoff also requires that
  it disable the stat count-up (showing final values), the drawer slide and the
  caret rotation.
- Focus is `2px solid var(--focus-ring)` at `3px` offset, per the token system.
- The prototype behind the handoff is desktop only. Mobile behavior is ours to
  design: nav collapses to a drawer, two column grids stack, the communities
  grid goes to one column, stats and leadership go to two, the 460px drawer goes
  full width, and gutters step 48px to 32px to 24px.
