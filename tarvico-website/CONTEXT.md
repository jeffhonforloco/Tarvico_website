# CONTEXT.md — Tarvico Website

Read this file at the start of every session before touching any code.

---

## Project Identity

| Field | Value |
|---|---|
| Project | Tarvico Website |
| Owner | Tarvico Inc. — Jeff Hon (Founder & CEO) |
| Status | Pre-launch |
| Purpose | Primary public presence — capital-facing, brand-defining artifact |

Tarvico is a private AI holding company that builds and incubates AI-native companies across workforce infrastructure, developer tools, and creative software. The website must read as premium, precise, and intentional at every detail level. There are no clients; this is internal product work.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) — static export (`output: 'export'`) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3.4 + CSS custom properties (inline `style` objects dominant) |
| Animation | CSS keyframes only — Framer Motion is installed but **not in use** |
| Fonts | Cormorant Garamond (headings), DM Sans (body) — loaded via Google Fonts in globals.css |
| Backend | None — static site, no server |
| Database | None |
| Cache | None |
| Queue | None |
| AI | Anthropic SDK — Claude claude-sonnet-4-6 (primary, future integration) |
| Auth | None |
| Payments | None |
| File Storage | None |
| Email | Resend (RESEND_API_KEY — contact form, pending wiring) |
| Cloud / Deployment | Cloudflare Pages (via Wrangler) |
| Functions | None (static export only) |
| CI/CD | GitHub Actions (implied via branch workflow) |

---

## Key Paths

```
tarvico-website/
├── app/
│   ├── layout.tsx              Root layout — metadata, font links, Nav + Footer wrappers
│   ├── globals.css             All CSS custom properties, keyframes, base resets
│   ├── page.tsx                Homepage — hero, portfolio grid, philosophy, founder quote, CTA
│   ├── about/page.tsx          Timeline, leadership card, corporate structure
│   ├── portfolio/page.tsx      Flagship Vytre card + 4 incubation cards + Urs79 affiliated
│   ├── investors/page.tsx      Market stats, investment thesis cards, governance section
│   ├── vision/page.tsx         Full founder letter (18 paragraphs) + signature
│   ├── careers/page.tsx        6 culture value cards + 5 open role listings
│   ├── newsroom/page.tsx       Featured story card + 4 news items
│   ├── contact/page.tsx        4 email channels + contact form with sent state
│   ├── legal/page.tsx          Legal notices
│   ├── privacy/page.tsx        Privacy policy
│   ├── terms/page.tsx          Terms of service
│   ├── manifest.ts             Web app manifest
│   ├── opengraph-image.tsx     OG image generation
│   ├── robots.ts               robots.txt
│   └── sitemap.ts              sitemap.xml
├── components/
│   ├── Nav.tsx                 Fixed top nav — scroll-aware bg, mobile hamburger, active route
│   ├── Footer.tsx              4-column link grid, brand section, dynamic copyright year
│   └── ui/index.tsx            Shared component library: Button, SectionLabel, PageHero, Divider,
│                               FadeUp, AnimatedBar, AnimatedNumber
├── public/                     Favicons, logos, OG image assets
├── tailwind.config.ts          Custom colors, font families, letter-spacing, animation names
├── next.config.mjs             output: 'export', images.unoptimized: true
├── wrangler.toml               Cloudflare Pages config (pages_build_output_dir: out)
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

## Critical Conventions

- Design tokens: use `var(--bg-raised)`, `var(--text-primary)` — no hardcoded colors
- Inline styles are correct — this project uses inline `style` objects with CSS vars extensively; don't refactor to Tailwind classes
- Server components by default — don't add `'use client'` unless the component needs browser APIs or event handlers
- LLM provider priority (future): Tarvico → anthropic → openai → nemotron → deepseek → llama
- Contact form is intentionally fake (sets `sent` state locally) — don't wire up an API without explicit instruction

---

## Environment Variables

> Names only — never values.

```
RESEND_API_KEY
ANTHROPIC_API_KEY
```

---

## Do NOT

- Use `<img>` tags — use Next.js `<Image>` if images are needed
- Use `localStorage` — no client-side persistence
- Use `position: fixed` on anything other than Nav — it already handles fixed positioning
- Introduce new color values — only `var(--token)` or Tailwind mapped equivalents
- Import Framer Motion — animations are CSS-only
- Add new fonts — Cormorant Garamond and DM Sans only
- Write comments in JSX — the code is self-documenting
- Wire up a backend without explicit instruction
- Add cloud-provider-specific SDKs without approval (keep infra swappable)
- Push to any branch other than the designated feature branch

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

## Known Deferred Items (Post-Launch)

- [ ] Real contact form backend (Resend email delivery via RESEND_API_KEY)
- [ ] Newsroom articles — real content
- [ ] Careers — actual application flow or external ATS link
- [ ] Analytics integration
- [ ] Domain + deployment configuration (Cloudflare Pages project)
- [ ] OG image finalization (social share preview)
- [ ] Favicon / app icon audit

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
- [x] Legal / Privacy / Terms pages
- [x] Nav (fixed, scroll-aware, mobile hamburger)
- [x] Footer (4-column, dynamic year)
- [x] UI component library (Button, SectionLabel, PageHero, Divider, FadeUp, AnimatedBar, AnimatedNumber)
- [x] Design tokens (CSS custom properties + Tailwind extensions)
- [x] Manifest, robots.ts, sitemap.ts, opengraph-image.tsx
- [x] Google Search Console verification meta tag
- [x] Social media handles (Facebook, Instagram, TikTok, X @tarvicoinc)
- [x] CONTEXT.md

### Pending
- [ ] Real contact form backend (Resend)
- [ ] Newsroom articles (real content)
- [ ] Careers — application flow or external link
- [ ] Analytics integration
- [ ] Domain + deployment configuration
- [ ] OG image (social share preview)
- [ ] Favicon / app icon

---

## Last Updated

2026-05-22 — Merged project-specific CONTEXT with general template; added stack details (Cloudflare Pages, Resend, static export), discovered pages (legal/privacy/terms), environment variables, and deferred items backlog.
