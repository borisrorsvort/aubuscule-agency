# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Dev server

```bash
python3 -m http.server 8743
# → http://localhost:8743/
```

No build step. No dependencies. No package manager.

## Architecture

Single-file static site: everything lives in `index.html`.

- **CSS** — custom properties in `:root`, all tokens in `DESIGN.md`. No framework, no preprocessor.
- **SVG marks** — the eclipse mark is inlined three times with unique `id` prefixes (`n*` nav, `h*` hero, `f*` footer). Each is the "trame" treatment: a dot-pattern corona mask + crescent circle. Nav and hero use `--accent` ink; footer uses white (inverse on dark bg).
- **JS** — single `<script>` block at bottom, vanilla. Handles the contact form: builds a `mailto:` URI from field values and fires `window.location.href`.
- **No frameworks, no modules, no bundler.**

## Design constraints

See `DESIGN.md` for the full token reference. Hard rules:

- Fonts: `Space Grotesk` (body/headings) + `JetBrains Mono` (labels/tags/numbers) only — loaded from Google Fonts
- Accent: `--accent: #44579c` / `--accent-fg: #e8e6e0`
- `border-radius: 2px` on buttons, `3px` on cards — never pill-shaped
- `box-shadow: 0 1px 3px rgba(0,0,0,.07)` max — no heavier shadows
- No gradients, no emoji in UI, no coloured accents other than `#44579c`

## Screenshots

Playwright screenshots go in `tmp/` (gitignored). When taking screenshots via the playwright MCP, pass a `filename` of `tmp/<name>.png`.

## Sync

The design source lives at `claude.ai/design` project `2130ba76-3f7b-4724-a841-d913eb6ae028`. Use `DesignSync` to read component files or push an updated `DESIGN.md`.
