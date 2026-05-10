# CONTEXT.md — Tarvico Website

Read this file at the start of every session before touching any code.

---

## Project Identity

Tarvico is a private AI holding company that builds and incubates AI-native companies across workforce infrastructure, developer tools, and creative software. The website is the company's primary public presence — a capital-facing, brand-defining artifact. It must read as premium, precise, and intentional at every detail level. The owner is Jeff Hon. There are no clients; this is internal product work.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + CSS custom properties (inline `style` objects dominant) |
| Animation | CSS keyframes only — Framer Motion is installed but not in use |
| Fonts | Cormorant Garamond (headings), DM Sans (body) — loaded via Google Fonts in globals.css |
| Deployment | (not configured — static export implied) |

---

## Key Paths

```
tarvico-website/
├── app/
│   ├── layout.tsx          Root layout — metadata, font links, Nav + Footer wrappers
│   ├── globals.css         All CSS custom properties, keyframes, base resets
│   ├── page.tsx            Homepage — hero, portfolio grid, philosophy, founder quote, CTA
│   ├── about/page.tsx      Timeline, leadership card, corporate structure
│   ├── portfolio/page.tsx  Flagship Vytre card + 4 incubation cards + Urs79 affiliated
│   ├── investors/page.tsx  Market stats, investment thesis cards, governance section
│   ├── vision/page.tsx     Full founder letter (18 paragraphs) + signature
│   ├── careers/page.tsx    6 culture value cards + 5 open role listings
│   ├── newsroom/page.tsx   Featured story card + 4 news items
│   └── contact/page.tsx    4 email channels + contact form with sent state
├── components/
│   ├── Nav.tsx             Fixed top nav — scroll-aware bg, mobile hamburger, active route
│   ├── Footer.tsx          4-column link grid, brand section, dynamic copyright year
│   └── ui/index.tsx        Shared component library: Button, SectionLabel, PageHero, Divider
├── tailwind.config.ts      Custom colors, font families, letter-spacing, animation names
├── next.config.ts
└── postcss.config.js
```

---

## Design System

These are laws, not suggestions. Never invent values outside this set.

### Colors (CSS custom properties)

**Backgrounds**
```
--bg:        #070707   ← page default
--bg-raised: #0C0C0B   ← footer, elevated surfaces
--bg-card:   #111110   ← cards
--bg-deep:   #181817   ← nested / inset areas
```

**Gold (primary accent — used sparingly)**
```
--gold:        #C9A447
--gold-light:  #D4B55A
--gold-dim:    rgba(201, 164, 71, 0.6)
--gold-glow:   rgba(201, 164, 71, 0.07)
--gold-border: rgba(201, 164, 71, 0.12)
```

**Text**
```
--text:   #EDE9E0   ← primary
--text-2: #7A776F   ← secondary / muted
--text-3: #3A3834   ← tertiary / very muted
```

**Borders**
```
--border-w: rgba(240, 237, 230, 0.07)   ← subtle white separator
```

### Typography

| Role | Font | Weight |
|---|---|---|
| Display / hero headline | Cormorant Garamond | 300 |
| Section headings | Cormorant Garamond | 300–400 |
| Body copy | DM Sans | 300 |
| UI labels, buttons | DM Sans | 400–500 |

Fluid sizing pattern: `clamp(2.2rem, 4vw, 3.5rem)` — always use clamp for display text.  
Letter spacing for labels: use `widest2` (0.25em) or `widest3` (0.3em) Tailwind extensions.

### Spacing

- Page max-width: **1200px**
- Page horizontal padding: **3rem** (left and right)
- Standard section padding: **6–8rem** vertical
- Grid gaps used as visual separators: **1.5px** with `background: var(--border-w)`

### Animations

| Name | Duration | Trigger |
|---|---|---|
| `fade-up` | 0.7s ease forwards | Hero elements, staggered with `.delay-100/250/400/550` |
| `pulse-slow` | 3s ease-in-out infinite | Background glows |
| `scroll-line` | 2s ease-in-out infinite | Scroll indicator |
| `grid-drift` | 20s linear infinite | Animated hero grid background |

---

## Portfolio Companies (single source of truth)

| Company | Status | Category | Market |
|---|---|---|---|
| Vytre AWOS | **Flagship** | AI Workforce Infrastructure | Enterprise / SaaS |
| SireIQ | Incubation | AI Assistant | SMB / Consumer |
| SEOAgentPro | Incubation | AI Search | Agencies / Growth |
| Fycra | Stealth | Developer Tools / Code Platform | Developers |
| Fycera | Stealth | AI Creative / Content | Creators / Media |
| Urs79 | Affiliated | (venture, not incubated) | — |

Status badge colors: Flagship = gold. Incubation = muted gold border. Stealth = `--text-3`. Affiliated = separate label treatment.

---

## Brand Voice

**Use:** precise, declarative, institutional, understated, capital-aware.  
**Avoid:** startup clichés ("revolutionize", "disrupt", "game-changing", "leverage", "synergy"), exclamation marks, second-person pushiness ("You'll love…"), vague superlatives.

Tone benchmarks: Berkshire Hathaway shareholder letters + YC essays + premium fund prospectuses.  
Copy reads like it was written once and never needs to change.

---

## Conventions (explicit Do NOTs)

- **No `<img>` tags** — use Next.js `<Image>` if images are needed
- **No `localStorage`** — no client-side persistence
- **No `position: fixed`** on anything other than the Nav — it already handles fixed positioning
- **No new color values** — only use `var(--token)` or the Tailwind mapped equivalents
- **No Framer Motion** — animations are CSS-only; don't add motion imports
- **No new fonts** — Cormorant Garamond and DM Sans only
- **No comments in JSX** — the code is self-documenting; don't narrate it
- **No backend** — the contact form is intentionally fake (sets `sent` state locally); don't wire up an API without explicit instruction
- **Inline styles are correct** — this project uses inline `style` objects with CSS vars extensively; don't refactor to Tailwind classes
- **Don't add `'use client'`** unless the component needs browser APIs or event handlers — keep server components server-side

---

## Session Workflow

Every session follows this order:

1. Read `CONTEXT.md` (this file)
2. Read the relevant page or component file(s)
3. State a plan in plain language — what changes, what stays the same
4. Wait for approval before writing any code
5. Make the change, then summarize what was done in one sentence

Never skip step 3. Never write code before step 4.

---

## Backlog

### Done
- [x] Homepage (hero, portfolio grid, philosophy, founder quote, CTA)
- [x] About page (timeline, leadership, corporate structure)
- [x] Portfolio page (Vytre flagship + incubation grid + Urs79)
- [x] Investors page (market stats, thesis cards, governance)
- [x] Vision page (founder letter)
- [x] Careers page (culture values + job listings)
- [x] Newsroom page (featured story + news grid)
- [x] Contact page (4 channels + form)
- [x] Nav (fixed, scroll-aware, mobile hamburger)
- [x] Footer (4-column, dynamic year)
- [x] UI component library (Button, SectionLabel, PageHero, Divider)
- [x] Design tokens (CSS custom properties + Tailwind extensions)
- [x] CONTEXT.md

### Pending
- [ ] Real contact form backend (email delivery)
- [ ] OG image (social share preview)
- [ ] Favicon / app icon
- [ ] Newsroom articles (real content)
- [ ] Careers — actual application flow or external link
- [ ] Analytics integration
- [ ] Domain + deployment configuration
