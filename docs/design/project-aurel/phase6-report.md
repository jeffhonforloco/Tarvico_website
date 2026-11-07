# Project AUREL — Phase 6 Progress Report

Branch `feature/aurel-phase6` (from `main`). **Local only** — not merged, not deployed,
no Cloudflare/DNS changes. Current head after the work below: see "Commits".

## What was done

### 1. Hero keystone (approved: B — Lit Keystone + A's glow)
- Replaced the thin wireframe with a **faceted, lit solid** (bronze / petroleum /
  graphite faces, back-half for thickness, apex highlight), plus A's soft core-glow and
  float, and a gentle sway that keeps the lit faces toward the viewer.
- **Now renders on mobile** (responsive scale) — fixes the hidden-on-mobile issue.
- Static at rest; sway/float disabled under `prefers-reduced-motion`.

### 2. FOUNDRY design system applied site-wide (shared layer)
These propagate the identity to **every** route at once:
- **PageHero** → blueprint grid, mono eyebrow + dimension line, monumental **Archivo**
  headline, bronze accent.
- **SectionLabel** → mono bronze + dimension line.
- **Button** → Archivo label, primary in **bronze**.
- **MetricCard** → Archivo value, mono bronze label.
- **MaturityTag** → mono; `public-beta` = bronze, `in-development` = **petroleum**,
  `operational` = emerald.
- **Nav / Footer** → gold accents retuned to **bronze**.
- **Global `--font-display` → Archivo** — every page's headings/quotes now use the
  display face (the biggest fix for "fonts still look old" across the site).

### 3. Corporate-accuracy corrections (PR #72, folded in)
All of #72's content corrections are now on this branch (no accuracy work lost):
- **Investors** — market-size figures removed; "Execution to Date" verified-evidence
  block; "Capital Philosophy" (no fixed use-of-funds %); reworded thesis; "majority
  ownership"; `$4.7T` removed from metadata.
- **Legal** — "Products and Business Lines" (products are company-operated, **not**
  separately incorporated); conditional securities language; "Corporate Structure" and
  "No Agency or Endorsement" clauses; trademark notice retains historical marks.
- **Terms / Privacy / Newsroom / About / Products** — "portfolio companies" → "products";
  newsroom SireIQ status update preserved as history + clarification; about timeline.
- **Metadata / JSON-LD** (`layout.tsx`, `founder`, `maeyen`, `investors` layouts) —
  "holding companies / venture incubation" → portfolio-strategy / product-development;
  "a Tarvico company" → "a Tarvico product, currently in development".
- **Escazo** already distinguishes the **live travel platform** from the **long-term**
  premium-transportation business (Task 5). **NVIDIA** wording is membership-only.

## Test results (this branch)
| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | ✅ clean |
| Production build (`next build`) | ✅ 23 static routes; lint step passes |
| Static export output | ✅ `out/` generated; fonts self-hosted (6 woff2) |
| Structured data | ✅ 84 JSON-LD blocks valid |
| Internal links | ✅ none broken |
| Responsive overflow (all 17 routes × desktop 1440 + mobile 390) | ✅ no horizontal overflow |
| Fonts | ✅ `next/font/local`, no Google Fonts request |

## Security findings
- `npm audit`: **2** remaining (1 critical `next`, 1 high nested `postcss`).
- **Impact on production: none.** Both are **server-runtime** advisories (Image-Optimizer
  RCE, SSRF in rewrites/Server Actions, middleware/RSC). Tarvico is a **static export on a
  CDN** — no Next server, image optimizer, middleware, or Server Actions run in production.
- **Tested upgrade path (recommended, separate effort):** the fixes exist only in the
  **Next 15.5.x / 16.x** lines, not backported to 14.2.x. Migrating to **Next 15 (LTS)**
  retires them at the source. It is a major upgrade (App Router/runtime/caching changes,
  React 19 default) and must be branched, built, and route-tested on its own — **not** bundled
  into a redesign branch, and never via `npm audit fix --force`.

## Status

**Applied and validated across all 17 routes:** FOUNDRY heroes, Archivo headings, mono
labels, bronze/petroleum accents, corrected content, the keystone, responsive integrity.

**Tier-1 — full MERIDIAN editorial depth (done):**
- **Home** — alternating graphite/mineral bands, Lit Keystone, folios, architectural layouts.
- **Vision** — reimagined as a mineral editorial *founder letter* (Fraunces serif pull-quotes
  and statements, Archivo masthead, italic signature).
- **About** — mineral/graphite tonal bands, Fraunces mission + leadership quotes, numbered
  principles, architectural timeline with folios.
- **Portfolio** — FOUNDRY flagship block + mineral "One strategy, three pillars" closing band.
- **Investors** — deliberately restrained graphite + Fraunces founder quote (brief: keep
  disclosures clear, not a spectacle).

**Tier-2/3 — unified FOUNDRY identity (done):** Research, Engineering, Newsroom, Founder,
Products, Vytre, Maeyen, Contact, Careers, Legal, Privacy, Terms all carry the FOUNDRY hero,
Archivo headings, mono labels, and bronze/petroleum accents through the shared components,
the global display-font switch, and an accent-token unification. Key blockquotes (Founder)
use Fraunces for voice consistency. Legal / Privacy / Terms kept intentionally clean and
highly readable (no decorative effects over legal content), per the brief.

**Optional future polish:** per-page mineral-band editorial layouts could be extended to
selected Tier-2 pages (e.g. Founder, Vytre) if desired; the current treatment is consistent,
professional, and brief-aligned.

## Boundaries honored
Local only on `feature/aurel-phase6`. No merge to `main`, no deploy, no preview push, no
Cloudflare/DNS/secret changes.
