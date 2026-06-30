# Aubuscule Multi-Domain + Multilingual — Roadmap

> **Status:** In progress. E1–E4 complete · E5–E8 remaining.

---

## Reference

### Domain Map

| Domain | Locales | Content | Type |
|---|---|---|---|
| `aubuscule.com` | FR, EN, NL | Hub — brand intro + cards | Page |
| `aubuscule.com/agency` | FR, EN, NL | Artist services | Full page |
| `aubuscule.com/apps` | FR, EN, NL | App listing + detail pages | Multi-page |
| `aubuscule.com/blog` | FR, EN, NL | Blog — apps, services, tech, misc | Multi-page |
| `aubuscule.com/dev` | FR, EN, NL | Coming soon → later full page | Placeholder |
| `/shop` | — | 301 → `aubuscule.gumroad.com` | Redirect |
| `/remplate` | — | 301 → `/apps/remplate` | Redirect |

### Key Data

- **Gumroad storefront**: `https://aubuscule.gumroad.com`
- **First app**: Remplate (`slug: 'remplate'`, Gumroad: `https://gumroad.com/l/remplate`)
- **Design system**: Space Grotesk + JetBrains Mono, accent `#44579c`, Mark eclipse SVG
- **Remplate source**: `remplate.aubuscule.com` (standalone React/HTML, Geist font — needs adaptation)

---

## Open Questions

_Resolve before starting the tagged epic._

- [ ] **[Epic 1]** Cut over live `agency.aubuscule.com`: delete Netlify CNAME → add custom_domain route
- [ ] **[Epic 5]** Remplate assets (screenshots, OG image) — port from current site or create new?
- [ ] **[Epic 6]** Dev placeholder — "coming soon" only, or include a brief web dev services line?
- [ ] **[Epic 8]** Blog cover images — placeholder slots or omit for now?

---

## Milestone Map

| # | Milestone | Epics | Unblocks |
|---|---|---|---|
| M1 | Infrastructure | E1 | Everything |
| M2 | Architecture | E2 | E3–E8 |
| M3 | Domains | E3, E4, E5, E6 | E7 |
| M4 | Multilingual | E7 | E8 |
| M5 | Blog | E8 | — |

---

## Epic 1 — Cloudflare Workers Migration (OpenNext)

_Unblocks: All epics. Requires CF account (Open Question)._

> **Decision (2026-06-29):** Target **Cloudflare Workers + `@opennextjs/cloudflare`**, not Pages.
> `@cloudflare/next-on-pages` is deprecated; CF now steers SSR Next.js to Workers + OpenNext
> (1.0 GA, full Node.js runtime, request-time middleware — required for host-based routing).
> Pin **Node 22** (`.nvmrc`); sharp has no Node 25 prebuild and tries to compile from source.

- [x] Remove `output: 'export'` from `next.config.ts`
- [x] Add `@opennextjs/cloudflare` + `wrangler` (installed with `--ignore-scripts`; sharp's native build skipped — unused while images are `unoptimized`)
- [x] Add `open-next.config.ts` + `wrangler.jsonc` (ASSETS binding, `nodejs_compat`)
- [x] Add `preview` / `deploy` / `cf-typegen` scripts to `package.json`
- [x] Pin Node 22 via `.nvmrc`; ignore `.open-next/` `.wrangler/` `.dev.vars` in git
- [x] Port Netlify security headers (CSP, HSTS, X-Frame-Options…) → `next.config.ts` `headers()`
- [x] Convert `public/robots.txt` → `src/app/robots.ts` (auto-generated)
- [x] Convert `public/sitemap.xml` → `src/app/sitemap.ts` (auto-generated)
- [x] Remove Netlify config (`netlify.toml`) + stale static `out/`
- [x] Verify locally: `next build` (SSR) → `opennextjs-cloudflare build` → `wrangler deploy --dry-run` all green
- [ ] Replace `images.unoptimized` with a Cloudflare Images loader once Image Resizing is enabled on the zone _(deferred)_
- [x] Smoke-test the running Worker locally (`wrangler dev`): `/` 200 + correct title, CSP/HSTS/X-Frame headers applied, `/robots.txt` + `/sitemap.xml` serve correctly
- [x] Create Cloudflare **Workers** project; deploy verified on `agency-staging.aubuscule.com` (zone already on CF)
- [x] `wrangler.jsonc` route: `agency-staging.aubuscule.com` custom_domain — live, renders correctly
- [ ] Set Workers Build / CI: deploy command `npx opennextjs-cloudflare build && wrangler deploy`, Node 22 _(user action)_
- [ ] Cut over live `agency.aubuscule.com`: delete Netlify CNAME → add custom_domain route _(last, low-traffic window)_
- [ ] Remove Netlify deployment once `agency` cutover confirmed

---

## Epic 2 — Single-Domain Path Architecture

_Depends on: E1. Unblocks: E3–E8._

> **Decision (2026-06-30):** Pivoted from subdomains to **single-domain, path-based routing** —
> `aubuscule.com/{agency,apps,blog,dev}`, hub at `/`. Pure Next path routing (no middleware, no
> host logic). Reasons: subdirectories ≥ subdomains for SEO consolidation; per-segment `layout.tsx`
> gives full per-section design freedom anyway; and host-routing is unreliable on OpenNext
> (Next 16 `proxy` is Node-runtime/rejected; `middleware.ts` flaky; OpenNext ignores `has:host`
> on rewrites → mis-routed everything to `/agency`). Removing host logic made the local Worker
> serve correctly. Old subdomains 301 → paths via Cloudflare dashboard redirect rules.

### 2a — Segment Restructure

- [x] Root `src/app/layout.tsx` slimmed to fonts + ThemeProvider + theme-init + skip-link only
- [x] Hub at root `src/app/page.tsx`; agency at `src/app/agency/` (layout w/ Nav, Footer, metadata, Organization JSON-LD + page)
- [x] `src/app/apps/page.tsx` + `[slug]/page.tsx` (stubs)
- [x] `src/app/blog/page.tsx` + `[slug]/page.tsx` (stubs)
- [x] `src/app/dev/page.tsx` (stub)
- [x] Moved agency components → `src/components/agency/`; shared → `src/components/shared/`

### 2b — Path Routing + Redirects (`next.config.ts`)

- [x] Pure path routing — `/agency`, `/apps`, `/apps/[slug]`, `/blog`, `/blog/[slug]`, `/dev`, hub at `/`
- [x] `redirects()` — `/shop` → gumroad (308), `/remplate` → `/apps/remplate` (308)
- [x] **Verified on `next dev` AND local Worker (`opennextjs-cloudflare preview`)** — all paths + redirects correct
- [ ] _(user)_ Cloudflare dashboard 301 redirect rules for old subdomains → paths:
  - `agency.aubuscule.com/*` → `aubuscule.com/agency/*`  (currently live on Worker — cut over)
  - `apps.` → `/apps`, `blog.` → `/blog`, `dev.` → `/dev`
  - `shop.` → `https://aubuscule.gumroad.com`, `remplate.` → `aubuscule.com/apps/remplate`
- [ ] _(user)_ wrangler `routes`: `aubuscule.com` is now the primary custom domain (+ `agency-staging` for testing)

### 2c — Per-Section Metadata

- [x] `metadata` per segment (agency full OG/twitter/canonical; hub/apps/blog/dev titles + canonical); `generateMetadata()` on `[slug]` pages
- [x] Organization JSON-LD moved to agency layout
- [ ] SoftwareApplication JSON-LD on apps (Epic 5), BlogPosting on blog (Epic 8)

---

## Epic 3 — Hub (`aubuscule.com`)

_Depends on: E2._

- [x] Create `src/components/hub/HubHome.tsx` — dark gradient hero, Mark parallax, 2 cards (Agency, Apps)
- [x] Wire `src/app/page.tsx` to `HubHome`
- [x] Hide Nav/Footer on hub page (immersive dark hero)

---

## Epic 4 — Agency + Site-wide Chrome

_Depends on: E2, E3._

- [x] Verify agency site renders correctly inside `agency/` route group
- [x] Nav + Footer moved to root layout (shared across all pages)
- [x] Nav links: Accueil, Agence, Apps, Blog with `Link` + active indicator on separator
- [x] Footer updated with site navigation column + contact column
- [x] Agency layout: metadata + JSON-LD only (no chrome)

---

## Epic 5 — Apps (`/apps`)

_Depends on: E2. Resolve Remplate assets open question first._

- [ ] Create `src/data/apps.ts` — app array (Remplate only to start)
- [ ] Create `src/components/apps/AppListing.tsx` — cards grid
- [ ] Create `src/components/apps/AppDetail.tsx` — per-app marketing page
- [ ] Port Remplate content from `remplate.aubuscule.com` into `AppDetail` (adapt to Aubuscule design system)
- [ ] Wire `src/app/(apps)/page.tsx` + `[slug]/page.tsx`
- [ ] Add `SoftwareApplication` JSON-LD on Remplate detail page

---

## Epic 6 — Dev Placeholder (`/dev`)

_Depends on: E2. Resolve copy open question first._

- [ ] Create `src/components/dev/DevPlaceholder.tsx` — coming soon + email
- [ ] Wire `src/app/(dev)/page.tsx`

---

## Epic 7 — Multilingual System (FR · EN · NL)

_Depends on: E2–E6 (all route groups populated). Unblocks: E8._

- [ ] Install `next-intl`
- [ ] Create `src/i18n/config.ts` — locales `['fr', 'en', 'nl']`, defaultLocale `'fr'`
- [ ] Create `src/i18n/fr.json` (~105 strings)
- [ ] Create `src/i18n/en.json`
- [ ] Create `src/i18n/nl.json`
- [ ] Add `[locale]` segment to all route group pages:
  - `(hub)/[locale]/page.tsx`
  - `(agency)/[locale]/page.tsx`
  - `(apps)/[locale]/page.tsx` + `[slug]/page.tsx`
  - `(blog)/[locale]/page.tsx` + `[slug]/page.tsx`
  - `(dev)/[locale]/page.tsx`
- [ ] Extract all hardcoded strings → `t('key')` calls
- [ ] Per-locale `<html lang>`, metadata, OG tags
- [ ] Add `hreflang` alternate links on every page
- [ ] Update middleware — locale detection, redirect root `/` → `/fr/`
- [ ] Update `sitemap.ts` — all locale × domain combinations
- [ ] Keep testimonial quotes in original French (role labels only translate)

---

## Epic 8 — Blog (`/blog`)

_Depends on: E7. Resolve cover images open question first._

### 8a — MDX Infrastructure

- [ ] Install MDX support (`@next/mdx` or `next-mdx-remote`)
- [ ] Create `content/blog/fr/` · `content/blog/en/` · `content/blog/nl/` directories
- [ ] Define frontmatter schema: `title`, `date`, `category` (apps | services | tech | misc), `author`, `excerpt`, `coverAlt`
- [ ] Create `src/data/blog.ts` — categories config + author metadata
- [ ] Create `src/lib/blog.ts` — server-side loader (glob files, parse frontmatter, render MDX, compute reading time)

### 8b — Blog UI

- [ ] Create `src/components/blog/PostCard.tsx` — title, excerpt, date (`JetBrains Mono`), category tag
- [ ] Create `src/components/blog/BlogHome.tsx` — post listing + category filter tabs
- [ ] Create `src/components/blog/BlogPost.tsx` — full MDX render, prose styling, eyebrow, back link
- [ ] Wire `src/app/(blog)/[locale]/page.tsx` → `BlogHome`
- [ ] Wire `src/app/(blog)/[locale]/[slug]/page.tsx` → `BlogPost` + `generateMetadata()` + `BlogPosting` JSON-LD

### 8c — Initial Content

- [ ] Write 4 sample posts in FR (one per category: Apps, Services, Tech, Misc)
- [ ] Write matching 4 posts in EN
- [ ] Link Hub card → `/blog`
