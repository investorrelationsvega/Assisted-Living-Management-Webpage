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

## Deployment: Cloudflare Pages at vegarei.com/ALM

The site is served at **https://vegarei.com/ALM**, a subpath of the main Vega
domain rather than its own host. That is the right call for SEO, since the
pages inherit vegarei.com's existing domain authority instead of starting from
zero on a new subdomain. It costs one piece of extra infrastructure.

**Cloudflare Pages cannot serve a subpath by itself.** A Pages custom domain
attaches a domain or a subdomain, never a path. So the setup is two parts:

1. A **Pages project** that builds this repo and serves it at `*.pages.dev`.
2. A **Worker** on the `vegarei.com/ALM*` route that proxies to that project.

The build is nested under `/ALM` on disk (`outDir: './dist/ALM'`), so the Pages
origin already answers at `/ALM/...`. The Worker is therefore a straight
path-through proxy with nothing to rewrite, and the preview URL behaves
identically to production.

### Step 1: create the Pages project

In the Cloudflare dashboard, go to Workers and Pages, then Create, then Pages,
then Connect to Git, and pick this repository. Configure:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |
| Node version | `22` (from `.nvmrc`, or set `NODE_VERSION=22`) |

Note the output directory is `dist`, not `dist/ALM`. Cloudflare serves the dist
root, which contains the `ALM/` directory and `_headers`.

The project gets a URL like `vega-alm.pages.dev`. Because of the nesting, the
site is at **`vega-alm.pages.dev/ALM/`**, not at the root.

Every branch push now builds its own preview deployment. That is the intended
way to review changes.

### Step 2: deploy the Worker

Set `PAGES_ORIGIN` in `worker/wrangler.toml` to the Pages URL from step 1, then:

```bash
cd worker
npx wrangler deploy
```

This requires **vegarei.com to be an active zone in the same Cloudflare
account, proxied (orange cloud)**. A Worker route cannot intercept traffic for
a domain Cloudflare does not sit in front of. If vegarei.com is hosted
elsewhere with DNS somewhere else, that has to move first.

The Worker also redirects `/alm` to `/ALM`, since URL paths are case sensitive
and the lowercase form would otherwise miss every asset.

### Preview deployments are not indexable

A preview would otherwise compete with the real site for the same terms and
leak placeholder content into results. Protection is keyed on `CF_PAGES_BRANCH`
(see `src/deploy.ts`):

- **`X-Robots-Tag: noindex, nofollow`** on previews, written into
  `dist/_headers` by `scripts/write-headers.mjs`. This is the primary
  mechanism.
- **A `<meta name="robots">` tag** on every page of a preview build, as a
  second layer.

`robots.txt` is generated too, but note it is **not authoritative here**:
crawlers only read `/robots.txt` at the domain root, and that file belongs to
the parent vegarei.com site. Which leads to the one thing this repo cannot do
for itself:

> **Action for whoever owns vegarei.com:** add a sitemap reference to the root
> `robots.txt` so this site gets discovered:
> `Sitemap: https://vegarei.com/ALM/sitemap-index.xml`

The default leans toward indexable: only a positively identified preview is
blocked, so a local or manual build cannot silently suppress production. Set
`SITE_NOINDEX=1` to force the block.

Verify either case locally:

```bash
CF_PAGES_BRANCH=main npm run build          # no noindex anywhere
CF_PAGES_BRANCH=some-branch npm run build   # meta tag + X-Robots-Tag header
```

### Linking within the site

Astro prefixes asset URLs with the base automatically, but **not hrefs you
write by hand**. A bare `href="/owners/"` escapes the subpath and lands on the
parent Vega site. Use the helper:

```ts
import { path } from '../utils/url';
path('/owners/')  // -> /ALM/owners/
```

## Structure

```
src/
  data/                  All site copy, one file per page, plus seo.ts
  deploy.ts              Preview vs production detection
  styles/
    global.css           Tailwind import + token imports
    tokens/              Design system tokens (colors, typography, spacing, effects)
  components/brand/      Logo component and traced logo geometry
  utils/url.ts           path() helper for subpath-safe internal links
  assets/brand/          Source logo artwork
  layouts/ components/ pages/
public/brand/            Standalone logo SVGs for Open Graph and external use
scripts/clean.mjs        Pre-build dist cleanup
scripts/write-headers.mjs  Post-build Cloudflare _headers writer
worker/                  Cloudflare Worker serving the site at /ALM
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
- [ ] **Root robots.txt** on vegarei.com should reference this site's sitemap
      (see the deployment section). This repo cannot set it.

## Accessibility

- `prefers-reduced-motion` is honored globally. The handoff also requires that
  it disable the stat count-up (showing final values), the drawer slide and the
  caret rotation.
- Focus is `2px solid var(--focus-ring)` at `3px` offset, per the token system.
- The prototype behind the handoff is desktop only. Mobile behavior is ours to
  design: nav collapses to a drawer, two column grids stack, the communities
  grid goes to one column, stats and leadership go to two, the 460px drawer goes
  full width, and gutters step 48px to 32px to 24px.
