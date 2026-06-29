# Aubuscule Multi-Domain + Multilingual — Roadmap

> **Status:** Planning. 5 milestones · 8 epics · ~70 tasks.

---

## Reference

### Domain Map

| Domain | Locales | Content | Type |
|---|---|---|---|
| `aubuscule.com` | FR, EN, NL | Hub — brand, 5 cards | Page |
| `agency.aubuscule.com` | FR, EN, NL | Artist services | Full site |
| `apps.aubuscule.com` | FR, EN, NL | App listing + detail pages | Multi-page |
| `shop.aubuscule.com` | — | 301 → `aubuscule.gumroad.com` | Redirect |
| `dev.aubuscule.com` | FR, EN, NL | Coming soon → later full page | Placeholder |
| `blog.aubuscule.com` | FR, EN, NL | Blog — apps, services, tech, misc | Multi-page |
| `remplate.aubuscule.com` | — | 301 → `apps.aubuscule.com/fr/remplate` | Redirect |

### Key Data

- **Gumroad storefront**: `https://aubuscule.gumroad.com`
- **First app**: Remplate (`slug: 'remplate'`, Gumroad: `https://gumroad.com/l/remplate`)
- **Design system**: Space Grotesk + JetBrains Mono, accent `#44579c`, Mark eclipse SVG
- **Remplate source**: `remplate.aubuscule.com` (standalone React/HTML, Geist font — needs adaptation)

---

## Open Questions

_Resolve before starting the tagged epic._

- [ ] **[Epic 1]** Cloudflare account setup — user must create Pages project + add domains manually
- [ ] **[Epic 5]** Remplate assets (screenshots, OG image) — port from current site or create new?
- [ ] **[Epic 6]** Dev placeholder — "coming soon" only, or include a brief web dev services line?
- [ ] **[Epic 8]** Blog cover images — placeholder slots or omit for now?
- [ ] **[Epic 8]** Blog — also reachable at `/blog` on agency domain, or `blog.aubuscule.com` only?

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

## Epic 1 — Cloudflare Pages Migration

_Unblocks: All epics. Requires CF account (Open Question)._

- [ ] Remove `output: 'export'` from `next.config.ts`
- [ ] Add `opennextjs-cloudflare` (or `@cloudflare/next-on-pages`) adapter
- [ ] Configure `<Image>` loader for Cloudflare (replace `unoptimized: true`)
- [ ] Convert `public/robots.txt` → `src/app/robots.ts` (auto-generated)
- [ ] Convert `public/sitemap.xml` → `src/app/sitemap.ts` (auto-generated)
- [ ] Create Cloudflare Pages project, connect GitHub repo _(user action)_
- [ ] Set build command in CF Pages (adapter-specific) _(user action)_
- [ ] Migrate DNS from Netlify to Cloudflare (`agency.aubuscule.com` → CF Pages) _(user action)_
- [ ] Test current agency site works identically on CF Pages
- [ ] Remove Netlify config (`netlify.toml`, `_redirects`, etc.)

---

## Epic 2 — Multi-Domain Architecture

_Depends on: E1. Unblocks: E3–E8._

### 2a — Route Group Restructure

- [ ] Create root `src/app/layout.tsx` (fonts, ThemeProvider only — no domain content)
- [ ] Create `src/app/(hub)/layout.tsx` + `page.tsx`
- [ ] Create `src/app/(agency)/layout.tsx` + `page.tsx`
- [ ] Create `src/app/(apps)/layout.tsx` + `page.tsx` + `[slug]/page.tsx`
- [ ] Create `src/app/(blog)/layout.tsx` + `page.tsx` + `[slug]/page.tsx`
- [ ] Create `src/app/(dev)/layout.tsx` + `page.tsx`
- [ ] Move current components into `src/components/agency/`
- [ ] Create `src/components/shared/` (Mark, Nav, Footer, ThemeProvider, ThemeToggle)

### 2b — Host-Based Middleware

- [ ] Create `src/middleware.ts` with host routing:
  - `aubuscule.com` → `/(hub)`
  - `agency.aubuscule.com` → `/(agency)`
  - `apps.aubuscule.com` → `/(apps)`
  - `blog.aubuscule.com` → `/(blog)`
  - `shop.aubuscule.com` → 301 `https://aubuscule.gumroad.com`
  - `dev.aubuscule.com` → `/(dev)`
  - `remplate.aubuscule.com` → 301 `apps.aubuscule.com/fr/remplate`
- [ ] Add all 7 domains in Cloudflare dashboard (point to same Pages project)

### 2c — Per-Domain Metadata

- [ ] `generateMetadata()` in each route group layout
- [ ] Per-domain JSON-LD (Organization on hub, SoftwareApplication on apps, etc.)

---

## Epic 3 — Hub Domain (`aubuscule.com`)

_Depends on: E2._

- [ ] Create `src/components/hub/HubHome.tsx` — brand intro + 5 cards (Agency, Apps, Blog, Shop, Dev)
- [ ] Wire `src/app/(hub)/page.tsx` to `HubHome`

---

## Epic 4 — Agency Domain (`agency.aubuscule.com`)

_Depends on: E2 (components moved to `agency/`, shared/ wired up)._

- [ ] Verify agency site renders correctly inside `(agency)` route group
- [ ] Confirm Nav/Footer use shared components

---

## Epic 5 — Apps Domain (`apps.aubuscule.com`)

_Depends on: E2. Resolve Remplate assets open question first._

- [ ] Create `src/data/apps.ts` — app array (Remplate only to start)
- [ ] Create `src/components/apps/AppListing.tsx` — cards grid
- [ ] Create `src/components/apps/AppDetail.tsx` — per-app marketing page
- [ ] Port Remplate content from `remplate.aubuscule.com` into `AppDetail` (adapt to Aubuscule design system)
- [ ] Wire `src/app/(apps)/page.tsx` + `[slug]/page.tsx`
- [ ] Add `SoftwareApplication` JSON-LD on Remplate detail page

---

## Epic 6 — Dev Placeholder (`dev.aubuscule.com`)

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

## Epic 8 — Blog (`blog.aubuscule.com`)

_Depends on: E7. Resolve cover images + agency path open questions first._

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
- [ ] Link Hub card → `blog.aubuscule.com`
