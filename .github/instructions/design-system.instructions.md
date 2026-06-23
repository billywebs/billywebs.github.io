---
applyTo: "**"
description: "Billy Webs design system — finalized client templates, color palettes, typography, component structures. Single source of truth for replication."
---

# Billy Webs Design System

This file documents every **finalized** client template so future sites can be spun up by referencing a named style.

When Billy says *"build a painter's site in the style of the Electrician template"*, find that template below and replicate its tokens and component structure exactly. Do not invent.

---

## Template Registry

The following templates represent confirmed good, live implementations. When Billy requests "a site like [Name]", cross-reference these templates and clone their structure, colors, constraints, and vibe exactly.

1. **Serenity Bay Template** (`campground`)
   - Style: Leaflet map-heavy, interactive, dark/forest green theme 
   - Source: `https://billybell991.github.io/serenity-bay/`
2. **Wade Collins Template** (`electrician` / `trades`)
   - Style: Standard service area trades, high-contrast, blue/white/dark accents, strong lead capture form.
   - Source: `https://billybell991.github.io/wade_collins_electric/`
3. **Ryan Peplinskie Template** (`photography` / `portfolio`)
   - Style: Visual-heavy, minimal UI, dark-mode gallery, masonry or grid image layouts.
   - Source: `https://billybell991.github.io/ryan_peplinskie_photography/`
4. **Billy Webs Portfolio** (`agency` / `b2b`)
   - Style: Midnight navy tech vibe, minimal bento grids, strict Svelte scoped CSS.
   - Source: `http://billywebs.ca` (Current Repo)

---

## Template: Billy Webs Portfolio

**Status:** In development — not yet confirmed good
**Live URL:** TBD (`billywebs.ca`)
**Repo:** `billywebs/billywebs.github.io` (planned)

### Color palette

| Token                | Value      | Use                                  |
| -------------------- | ---------- | ------------------------------------ |
| `--color-bg`         | `#0a0a0a`  | Page background                      |
| `--color-bg-alt`     | `#141414`  | Section/card background              |
| `--color-border`     | `#2a2a2a`  | Hairline borders, dividers           |
| `--color-text`       | `#e8e8e8`  | Primary text                         |
| `--color-text-dim`   | `#888888`  | Secondary text, captions             |
| `--color-accent`     | `#5ac8fa`  | Light sky blue — links, CTAs, marks  |
| `--color-accent-dim` | `#3ba9d8`  | Accent hover/pressed                 |

### Typography

| Role     | Font          | Weight | Notes                          |
| -------- | ------------- | ------ | ------------------------------ |
| Display  | JetBrains Mono| 700    | Hero H1 — digital tinkerer vibe|
| Heading  | Inter         | 700    | H2/H3                          |
| Body     | Inter         | 400    | Paragraphs                     |
| Mono UI  | JetBrains Mono| 500    | Labels, code-like accents      |

Loaded via Google Fonts in `src/app.html`.

### Layout tokens

- Spacing scale: 8px base (`--space-1` = 8px … `--space-10` = 80px)
- Max content width: `1120px`
- Section vertical padding: `--space-10` (80px) desktop / `--space-6` (48px) mobile
- **Border radius: 0 everywhere.** No exceptions.

### Component structure

```
src/lib/components/
  Hero.svelte        — Full-viewport intro, tagline, primary CTA
  Portfolio.svelte   — Grid of project cards (1 col mobile, 2-3 col desktop)
  Process.svelte     — 3-step Build / Launch / Support breakdown
  Contact.svelte     — Web3Forms form + service-area footer text
  Footer.svelte      — Email, service area, copyright
```

### Section order on homepage

1. Hero
2. Portfolio
3. Process
4. Contact
5. Footer

### Hero copy

- **H1:** "Lightweight websites built to catch leads, not headaches."
- **Sub:** Reference 30 years software / 26 years public safety + tinkerer nature
- **CTA:** "Start the conversation" → scrolls to contact

### Process copy (3 steps)

1. **The Build** — Hand-coded custom static site. Zero upfront cost.
2. **The Launch** — Domain, secure hosting, SSL — all handled.
3. **The Support** — Email me changes. Done.

### Service area footer

"Proudly building and supporting digital storefronts for trades and small businesses across Ottawa and the Ottawa Valley — Eganville, Mattawa, and surrounding communities."
