# Aubuscule Multi-Domain + Multilingual Plan

## Domain Map

| Domain | Locales | Content | Type |
|---|---|---|---|
| `aubuscule.com` | FR, EN, NL | Hub — brand, 4 cards | Page |
| `agency.aubuscule.com` | FR, EN, NL | Artist services | Full site |
| `apps.aubuscule.com` | FR, EN, NL | App listing + detail pages | Multi-page |
| `shop.aubuscule.com` | — | 301 → `aubuscule.gumroad.com` | Redirect |
| `dev.aubuscule.com` | FR, EN, NL | Coming soon → later full page | Placeholder |
| `remplate.aubuscule.com` | — | 301 → `apps.aubuscule.com/fr/remplate` | Redirect |

## Phase 1: Cloudflare Pages Migration

- [ ] Remove `output: 'export'` from `next.config.ts`
- [ ] Add `opennextjs-cloudflare` (or `@cloudflare/next-on-pages`) adapter
- [ ] Configure `<Image>` loader for Cloudflare (replace `unoptimized: true`)
- [ ] Convert `public/robots.txt` → `src/app/robots.ts` (auto-generated)
- [ ] Convert `public/sitemap.xml` → `src/app/sitemap.ts` (auto-generated)
- [ ] Create Cloudflare Pages project, connect GitHub repo
- [ ] Set build command in CF Pages (adapter-specific)
- [ ] Migrate DNS from Netlify to Cloudflare (`agency.aubuscule.com` → CF Pages)
- [ ] Test current agency site works identically on CF Pages
- [ ] Remove Netlify config (`netlify.toml`, `_redirects`, etc.)

## Phase 2: Multi-Domain Host Routing

- [ ] Create `src/middleware.ts` — host-based routing:
  - `aubuscule.com` → `/(hub)`
  - `agency.aubuscule.com` → `/(agency)`
  - `apps.aubuscule.com` → `/(apps)`
  - `shop.aubuscule.com` → 301 → `https://aubuscule.gumroad.com`
  - `dev.aubuscule.com` → `/(dev)`
  - `remplate.aubuscule.com` → 301 → `apps.aubuscule.com/fr/remplate`
- [ ] Restructure into route groups:
  ```
  src/app/
    (hub)/layout.tsx + page.tsx
    (agency)/layout.tsx + page.tsx
    (apps)/layout.tsx + page.tsx + [slug]/page.tsx
    (dev)/layout.tsx + page.tsx
    layout.tsx (root: fonts, ThemeProvider)
  ```
- [ ] Move current components into `src/components/agency/`
- [ ] Create `src/components/shared/` (Mark, Nav, Footer, ThemeProvider, ThemeToggle)
- [ ] Create `src/components/hub/HubHome.tsx` — brand intro + 4 cards (Agency, Apps, Shop, Dev)
- [ ] Create `src/components/apps/AppListing.tsx` — cards grid
- [ ] Create `src/components/apps/AppDetail.tsx` — per-app marketing page
- [ ] Create `src/components/dev/DevPlaceholder.tsx` — coming soon + email
- [ ] Create `src/data/apps.ts` — app data array (starts with Remplate only)
- [ ] Port Remplate content from `remplate.aubuscule.com` into AppDetail (adapted to Aubuscule design system)
- [ ] Per-domain metadata via `generateMetadata()` in each route group layout
- [ ] Per-domain JSON-LD (Organization on hub, SoftwareApplication on apps, etc.)
- [ ] Add all domains in Cloudflare dashboard (point to same Pages project)

## Phase 3: Multilingual (FR + EN + NL)

- [ ] Install `next-intl`
- [ ] Create `src/i18n/config.ts` — locales: `['fr', 'en', 'nl']`, defaultLocale: `'fr'`
- [ ] Create translation files:
  - `src/i18n/fr.json` — ~105 strings
  - `src/i18n/en.json`
  - `src/i18n/nl.json`
- [ ] Add `[locale]` segment to each route group:
  ```
  src/app/(hub)/[locale]/page.tsx
  src/app/(agency)/[locale]/page.tsx
  src/app/(apps)/[locale]/page.tsx
  src/app/(apps)/[locale]/[slug]/page.tsx
  src/app/(dev)/[locale]/page.tsx
  ```
- [ ] Extract all hardcoded strings from components → `t('key')` calls
- [ ] Per-locale `<html lang>`, metadata, OG tags
- [ ] Add `hreflang` alternate links on every page
- [ ] Update middleware — locale detection, redirect root `/` to `/fr/`
- [ ] Update `sitemap.ts` — all locale/domain combinations
- [ ] Testimonial quotes stay in original French (only role labels translate)

## Key Data

- **Gumroad storefront**: `https://aubuscule.gumroad.com`
- **First app**: Remplate (`slug: 'remplate'`, Gumroad: `https://gumroad.com/l/remplate`)
- **Design system**: Space Grotesk + JetBrains Mono, accent `#44579c`, Mark eclipse SVG
- **Remplate source**: `remplate.aubuscule.com` (standalone React/HTML, Geist font — needs adaptation)

## Open Questions

- [ ] Remplate assets (screenshots, OG image) — port from current site or create new?
- [ ] Dev placeholder — just "coming soon" or also a brief line about web dev services?
- [ ] Cloudflare account setup — user needs to create Pages project + add domains
