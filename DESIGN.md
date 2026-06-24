# Aubuscule — Design Tokens & System Reference

---

## 1. Visual Theme & Atmosphere

An editorial studio identity for two musician-craftspeople. The visual register is **monochrome print + warm paper** — zero decorative elements, no gradients, no illustration. Cards are white surfaces lifted off a warm off-white ground. Type does most of the work. The eclipse mark (crescent + trame pointilliste) is the only "image". Atmosphere: sober, confident, artisanal. Closer to a music imprint or gallery than a SaaS product. The restraint is intentional — the brand makes room for the artist's content rather than competing with it.

**Confidence: HIGH**

---

## 2. Color Palette & Roles

```
--bg-paper      #e8e6e0   Main page background (warm off-white)
--ink           #141414   Primary text, marks, buttons
--ink-soft      #55524b   Body text, descriptions
--ink-mute      #8a877f   Secondary labels, captions
--ink-faint     #a8a59c   Eyebrows, mono micro-labels
--ink-dim       #75726b   Footer tertiary text
--hairline      #d8d5cd   Section dividers, borders
--hairline-soft #cfccc4   Input borders, tag borders
--surface       #ffffff   Card surfaces
--surface-dark  #141414   Footer panel background
--quote         #3a3833   Pull-quote text
--footer-body   #9a978f   Footer paragraph text
--accent        #44579c   Buttons, nav CTA, mark ink (rgb(68, 87, 156))
--accent-fg     #e8e6e0   Text on accent backgrounds
```

The accent is currently set to `#44579c` — a muted blue-indigo. It applies to: the eclipse mark (nav + hero), the primary CTA button, the nav Contact pill, and the contact form submit button. The footer mark remains inversed (white ink on dark background).

**Confidence: HIGH**

---

## 3. Typography Rules

**Families:**
- `Space Grotesk` (400/500/600/700) — Display, headings, body, UI
- `JetBrains Mono` (400/500) — Eyebrows, labels, tags, numbers, footer

**Modular scale (px):**

| Token       | Size   | Weight | Usage                        |
|-------------|--------|--------|------------------------------|
| --t-hero    | 58px   | 600    | H1 hero                      |
| --t-h2      | 38px   | 600    | Section titles               |
| --t-h2-sm   | 32px   | 600    | Smaller H2                   |
| --t-h3      | 21px   | 600    | Sub-section headers          |
| --t-sub     | 17px   | 400    | Hero subtitle                |
| --t-body    | 16px   | 400    | Body copy                    |
| --t-card    | 15.5px | 400    | Quote / card body            |
| --t-ui      | 15px   | 500    | Button, input, select        |
| --t-sm      | 14.5px | 400    | Small body                   |
| --t-label   | 12px   | 400    | Mono eyebrow (uppercase)     |
| --t-tag     | 11.5px | 400    | Mono specialty tags          |
| --t-micro   | 10.5px | 400    | Mono micro-labels            |

Letter-spacing: `-0.02em` to `-0.03em` on display type; `+0.1em` to `+0.22em` on mono uppercase labels. Line-height: `1.04`–`1.08` headings, `1.55`–`1.65` body.

**Confidence: HIGH**

---

## 4. Component Stylings

**Button — Primary**
```css
background: var(--accent); /* #44579c */
color: var(--accent-fg);   /* #e8e6e0 */
font: 500 15px 'Space Grotesk';
padding: 14px 24px;
border-radius: 2px;
border: none;
```

**Button — Secondary (ghost)**
```css
background: transparent;
color: var(--ink);
border: 1px solid var(--ink);
padding: 13px 22px;
border-radius: 2px;
```

**Button — Mono link**
```css
font: 400 12px 'JetBrains Mono';
letter-spacing: 0.1em;
text-transform: uppercase;
border: 1px solid var(--hairline-soft);
padding: 8px 12px;
border-radius: 2px;
```

**Nav CTA**
```css
background: var(--accent); /* #44579c */
color: var(--accent-fg);   /* #e8e6e0 */
font: 400 12px 'JetBrains Mono';
letter-spacing: 0.08em;
text-transform: uppercase;
padding: 9px 16px;
border-radius: 2px;
```

**Card**
```css
background: #ffffff;
border-radius: 3px;
box-shadow: 0 1px 3px rgba(0,0,0,0.07);
padding: 26px–32px;
```

**Input / Textarea / Select**
```css
background: transparent;
border: none;
border-bottom: 1px solid var(--hairline-soft);
padding: 9px 0;
font: 400 15px 'Space Grotesk';
outline: none;
/* focus: border-bottom: 1px solid var(--ink) */
```

**Tag / Specialty pill**
```css
font: 400 11.5px 'JetBrains Mono';
border: 1px solid var(--hairline);
border-radius: 2px;
padding: 5px 9px;
color: var(--ink);
```

**Nav**
```css
position: sticky; top: 0;
background: rgba(232,230,224,0.86);
backdrop-filter: blur(10px);
border-bottom: 1px solid var(--hairline);
```

**Confidence: HIGH**

---

## 5. Layout Principles

- **Max-width:** 1120px, centred with `margin: 0 auto`
- **Horizontal padding:** 40px (desktop)
- **Section rhythm:** `border-top: 1px solid var(--hairline)`, `padding: 72px 0`
- **Grid columns:** Hero = `1.15fr 0.85fr`; Services = `300px 1fr` (sticky label); Cards = `1fr 1fr`; Testimonials = `repeat(3,1fr)`; Contact = `0.8fr 1.2fr`
- **Gap scale:** 56px (hero gap), 48px (section content), 24px (cards), 20px (testimonials), 18px (grid items), 14px (stack items), 7px (tags)
- No horizontal scrolling; no full-bleed sections except the dark footer

**Confidence: HIGH**

---

## 6. Depth & Elevation

Only one elevation level in use:

```css
/* Level 1 — cards, form, person cards */
box-shadow: 0 1px 3px rgba(0,0,0,0.07);
border-radius: 3px;
```

No Level 2 (modals, dropdowns) defined yet. Separation is handled by hairline borders (`1px solid #d8d5cd`) rather than shadow stacking. The sticky nav uses `backdrop-filter: blur(10px)` as a depth cue — no shadow.

**Confidence: HIGH**

---

## 7. Do's and Don'ts

**Do:**
- Use `Space Grotesk` + `JetBrains Mono` exclusively
- Eyebrows in JetBrains Mono, uppercase, letter-spacing ≥ 0.16em
- Numbered sections (01, 02…) in mono faint
- Section dividers via `border-top: 1px` hairline, never a full rule element
- Italic pull-quotes with `border-left: 2px solid #cfccc4`
- Buttons at `border-radius: 2px` (not rounded pill)
- `border-radius: 3px` on cards only
- Use `--accent` (`#44579c`) for primary actions and the mark ink

**Don't:**
- No gradient backgrounds, gradient text, or glow effects
- No emoji anywhere in UI
- No deep shadows (`box-shadow` must stay ≤ `0 1px 3px`)
- No Inter, Roboto, Arial, or system-ui as fallback UI font
- No coloured accent other than `#44579c` without explicit decision
- No decorative SVG illustrations; use the mark or placeholder slots

**Confidence: HIGH**

---

## 8. Responsive Behavior

No explicit breakpoints are defined in the current system (desktop-first at 1120px). Expected transitions:

- **< 900px:** Hero grid collapses to single column (mark drops below); ServiceCategory grid `300px 1fr` → stacked
- **< 720px:** Testimonial `repeat(3,1fr)` → `1fr`; Contact `0.8fr 1.2fr` → stacked; PersonCard portrait row → stacked column
- **< 480px:** Nav links hide or collapse to a burger; hero H1 scales down from 58px; padding reduces from 40px to 16–20px

None of this is currently implemented — the system is desktop-only.

**Confidence: LOW** *(inferred, not implemented)*

---

## 9. Agent Prompt Guide

**When generating UI for Aubuscule:**
- Accent color is `#44579c` (rgb(68,87,156)) — use for primary buttons, nav CTA, and mark ink
- Accent foreground text: `#e8e6e0` (computed luminance < 0.35 → light text on dark bg)
- Default palette is `#e8e6e0` bg / `#141414` ink — do not invent new colors
- Use `Space Grotesk` for all text; `JetBrains Mono` for labels, numbers, tags only
- Every section gets a mono eyebrow (uppercase, letter-spacing 0.22em) above the heading
- Cards: white, `border-radius: 3px`, `box-shadow: 0 1px 3px rgba(0,0,0,.07)` — nothing heavier
- Buttons: `border-radius: 2px`, never pill-shaped
- Eclipse mark (trame treatment, dotScale 0.45): ink = `#44579c` in nav/hero; ink = `#ffffff` in footer (inverse on dark)

**Reject / Avoid:**
- Gradient backgrounds or `background: linear-gradient(…)` anywhere
- Emojis as UI decoration
- `border-radius > 4px` on any non-circular element
- `font-family: Inter`, Roboto, or system-ui
- "AI slop" card patterns: left accent border + icon + stat number + label stacked
- Multi-level drop shadows or `filter: drop-shadow`
- Decorative SVG shapes; use the eclipse mark component only

**Confidence: HIGH** *(rules directly observable in source)*

---

*Extracted from: `Aubuscule — Services.dc.html`, `PersonCard.dc.html`, `ServiceCategory.dc.html`, `Mark.dc.html`, `Aubuscule — Charte.dc.html`*
*Implemented in: `index.html` (aubuscule-agency repo)*
*Date: 2026-06-24*
