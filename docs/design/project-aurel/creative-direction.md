# Project AUREL — Creative Direction & Pre-Approval Deliverables

**Tarvico Inc. · Corporate Visual Identity & Digital Experience Transformation**
Phase 1–3 (Research → Audit → Creative Directions). **Approval gate — no implementation yet.**

> This document covers the twelve pre-approval deliverables in the brief. It ends at a
> decision gate: management selects a creative direction (or approves the recommended
> hybrid) before any visual implementation begins. Nothing here changes the live site,
> merges a PR, or touches deployment/DNS/secrets.

---

## 0. Honesty statement — research method & environment limits

This matters because the brief explicitly forbids claiming analysis that did not happen.

- **External websites are not reachable from this environment.** Outbound requests to
  `abc.xyz`, `nvidia.com`, and even `tarvico.com` return `403 CONNECT tunnel failed` at
  the managed proxy. I therefore performed **no live inspection** of any competitor or
  reference site — no DevTools, no network capture, no screenshots of their live pages.
- **REA was not run, by design.** "REA" (`github.com/morluto/rea`) is **"Reverse Engineer
  Anything" — an MCP for reverse-engineering binaries, applications, and runtime
  behavior.** Pointing it at competitors' websites to extract their protected source,
  layouts, or animation implementations is exactly what the brief prohibits
  ("Do not bypass website restrictions or copy protected assets, source code, layouts,
  or animation implementations"). It is also network-blocked here and not installed.
  **No REA analysis was performed or is claimed.**
- **What the research *is* based on:** (a) a genuine, first-hand visual + code audit of
  the *current* Tarvico site, which I built and screenshotted locally; (b) `WebSearch`
  (which does work here) for public commentary and documented brand characteristics;
  (c) established, publicly-documented design knowledge of the reference companies.
  Where a reference characteristic is from memory/public knowledge rather than a cited
  page, it is framed as such. These companies are **references for corporate
  communication, not designs to reproduce.**

---

## 1. Visual audit of the current Tarvico website (first-hand)

Built from `main` and captured at 1440px and 390px. Representative pages: Home, About,
Portfolio, Investors, Vision, Newsroom, Engineering, Contact. Screenshots delivered
separately (not committed as binaries to keep the repo lean).

**What is already strong (preserve):**
- Clean, disciplined engineering: Next.js static export, self-hosted Inter, design tokens
  (`--gold`, `--text`, surfaces), inline-style system, CSS-keyframe motion only.
- Strong technical foundation already achieved: SEO, structured data (84 valid JSON-LD
  blocks), security headers, accessibility, performance.
- A recognizable **black + gold** equity. This is an asset to *refine*, not discard.
- Honest content architecture (maturity labels, disclosure framework).

**What makes it feel generic (the creative problem — confirmed first-hand):**

| # | Observation | Evidence |
|---|---|---|
| 1 | **Monotone dark field.** Every section is the same near-black background; no tonal or material variation across the page. | Home/About/Investors all read as one continuous dark surface. |
| 2 | **One repeated rhythm.** Gold eyebrow → large bold headline → 3-up bordered card grid, repeated for *Products*, *Pillars*, *FAQ*. | Home has ≥3 near-identical card-grid sections. |
| 3 | **Single typeface, no editorial contrast.** Inter at varying weights for everything — display, body, labels, numbers. | Confirms the brief's "Inter everywhere." No display/serif/mono contrast. |
| 4 | **No imagery.** Zero photography, product screenshots, or texture — the entire site is type + bordered cards on dark. | Home renders with no `<img>`-based storytelling above the footer. |
| 5 | **No 3D / signature moment.** Nothing a visitor would remember visually. | — |
| 6 | **Uniform spacing cadence.** Equal vertical padding per section; little compositional tension or asymmetry. | — |
| 7 | **Card-as-default.** Content defaults into bordered rounded rectangles rather than editorial layout. | Products, Pillars, Governance, Evidence all use the same card. |

**Diagnosis:** the site is *credible and clean* but *undifferentiated*. It looks like a
well-built dark SaaS template. The fix is a proprietary visual language — typography,
color/material, geometry, imagery, and one signature motion/3D moment — not "darker +
gradients + an animation library."

---

## 2. Competitive visual intelligence (research matrix)

Sources: `WebSearch` results (cited) + documented public design knowledge. **Not** live
inspection. Treat specific hex/type values from third-party "design-system" reconstructions
as approximate until verified against the owner's official brand resources.

### 2a. Corporate communication references (holding companies / tech groups)

| Reference | Brand personality | What's instructive for Tarvico | What to avoid copying |
|---|---|---|---|
| **Alphabet (abc.xyz)** | Deliberately austere; separated from Google's playful color to signal corporate maturity and "structural clarity." A single authoritative treatment. | A holding company earns gravity through *restraint and clarity*, not spectacle. One confident voice above many products. | Its near-plain-text minimalism is *too* bare for an investor-facing story with three pillars. |
| **Prosus / SoftBank / Rocket Internet** | Institutional investor communication; portfolio-as-system; data and governance forward. | How to present a *portfolio* and a *long-term thesis* credibly; clear investor IA. | Corporate-stock-photo blandness; we need more craft. |
| **Berkshire Hathaway** | Radical plainness; substance over style. | Credibility can come from plainness — useful tonal anchor for Legal/Investor pages. | Not a visual model for the whole site. |
| **NVIDIA** | Mostly monochrome black/white/gray with a single "precious" green accent (#76b900); proprietary sans (NVIDIA Sans); hierarchy via weight/size, not color; tight 2px radii, hairline rules. [search] | **The single-precious-accent discipline** maps perfectly onto Tarvico's gold. Hierarchy by type weight/scale. Technical restraint. | Their green; literal GPU/hardware motifs. |

### 2b. Craft references (editorial / industrial / product)

| Reference | Signature craft | Original opportunity for Tarvico |
|---|---|---|
| **Apple** | Scroll-driven pinned product sequences; monumental type; huge product photography; generous negative space. | Cinematic scroll storytelling for the pillars; let one visual be monumental. |
| **Porsche** | Confident automotive editorial; engineering-as-story; precise typographic scale. | "Engineering institution" tone for the Engineering/Infrastructure narrative. |
| **Teenage Engineering** | Monospace everywhere; product-as-hero on near-white studio canvas; draggable 3D product renders; industrial restraint. [search] | A **technical mono** accent face for data/labels; product-as-hero when we have real screenshots; a light studio surface as contrast to dark. |
| **Nothing** | Monochrome, typography-led; Swiss + Braun lineage (Space Grotesk / Space Mono). [search] | Typographic system as the brand; dot/grid motif discipline. |
| **IBM** | The IBM Design Language + Plex typeface + Carbon; 2× grid; engineered consistency. | A *named*, documented Tarvico design language with a signature typeface and grid. |
| **Stripe** | Motion-led animated-gradient hero; developer-grade polish; sets the tech-web bar. [search] | One controlled luminous motion moment; impeccable component craft. |

**Cross-cutting lessons:** (1) one precious accent, hierarchy by type; (2) a signature
typeface/pairing *is* the brand; (3) one monumental or interactive moment, not many;
(4) craft lives in spacing, grid, and material — not effects; (5) restraint reads as
institutional trust (critical for investors).

---

## 3. REA execution report

- **Tool identity:** `morluto/rea` — "Reverse Engineer Anything," an MCP for
  reverse-engineering **binaries, applications, and runtime behavior** (`npx rea-agents setup`).
- **Appropriateness for this task:** **Not appropriate.** Its purpose is extracting how
  compiled/protected software works internally. Using it to lift competitors' website
  source, layout, or animation code would violate the brief's explicit guardrails and
  third-party rights.
- **Environment:** external hosts are blocked (proxy 403); REA is not installed; no target
  was reachable.
- **Conclusion:** **REA was not executed. No REA-derived analysis is claimed.** Research
  was done via first-hand audit of our own site, `WebSearch`, and documented public
  knowledge. This is the honest and brief-compliant position.

---

## 4. Three original art directions

All three **evolve, rather than discard, the black-and-gold equity** and are engineered
to preserve the current Next.js / static-export / Cloudflare / token architecture. A
visual companion (style tiles with live type specimens, palettes, geometry, and hero
sketches) accompanies this document for side-by-side review.

### Direction A — "Architectural Intelligence" (codename **FOUNDRY**)
*A technology **institution** expressed through architecture, precision engineering, and infrastructure.*

- **Rationale:** Best expresses the three pillars (AI, infrastructure/energy, mobility) as
  *built systems*. Communicates stability, engineering capability, and long-term ambition —
  exactly the investor read Tarvico needs. Timeless, not trendy.
- **Color / material:** Graphite base `#0E0F13` / `#14151A`; mineral white `#F4F2EC`;
  warm titanium neutral `#C8C2B6`; **refined bronze-gold** accent `#C9A24A` (evolves the
  current gold, slightly deeper/warmer) with `#8A6A2E` for depth; deep petroleum `#0E3A3A`
  as the cool "infrastructure/energy" secondary; hairline rules `#2A2C33`. One precious
  accent, NVIDIA-style.
- **Typography:** Display **Archivo** (variable, expanded axis — monumental, open-source)
  for headlines; **Inter** retained but *demoted to body only*; **IBM Plex Mono** for
  specs, labels, dimension lines, and numerics. (All OFL / self-hostable.)
- **Geometry:** architectural frames and corner brackets; blueprint hairline grid;
  dimension lines; section folios (`01 — 02 — 03`); modular bays.
- **Imagery:** architectural/industrial photography + technical line drawings; product
  screenshots in precise device frames.
- **Motion:** slow, weighty, engineered. Dimension lines draw in; headlines reveal via
  clip-reveal (not fade-up); scroll choreography with restraint.
- **3D (signature):** a sculptural **computational keystone/truss** — an abstract
  architectural lattice whose nodes read as intelligence · infrastructure · mobility.
  Lazy-loaded, static poster fallback, reduced-motion aware.
- **Mobile:** folios and frames collapse to a single strong column; type stays monumental.
- **Performance:** type-and-vector led; the only heavy asset is the optional hero 3D
  (code-split, poster fallback). Low risk.

### Direction B — "Computational Future" (codename **LATTICE**)
*Intelligence, systems, and computing — computational geometry and one luminous, cinematic hero.*

- **Rationale:** The most forward/"product" read. Strong if Tarvico wants to signal
  frontier-AI energy. Higher craft/performance risk; must avoid the crypto/AI-cliché trap.
- **Color / material:** Ink `#07080B`; cool graphite `#12141B`; one **luminous accent** —
  warm beacon gold `#E8C879` used *only* as glow/signal; structural slate `#3A4452`; deep
  petroleum `#0C2E33`. Strictly one luminous accent to avoid the neon-crypto look.
- **Typography:** Display **Space Grotesk** (technical grotesque); body **Inter**/**Geist**;
  data **JetBrains Mono** with tabular numerics. (All OFL.)
- **Geometry:** computational **node-edge lattices** (abstract graphs — *not* neural brains),
  isometric grids, modular tiles, aperture/scanline section transitions.
- **Imagery:** rendered abstract computational structures; real product UI in cinematic
  framing. **No** generic particle fields, glowing brains, or rotating globes.
- **Motion:** cinematic and precise — scanline reveals, parallax depth, state transitions
  that morph between the three pillars.
- **3D (signature):** an interactive **Intelligent Systems Network** — a point-and-edge
  spatial field that clusters into the three pillars and responds subtly to pointer/scroll.
- **Performance:** highest cost of the three (interactive WebGL). Requires strict budgets,
  pause-off-screen, low-power downgrade, and a strong static fallback.

### Direction C — "Global Technology Institution" (codename **MERIDIAN**)
*Restrained, editorial, timeless — exceptional typography and documentary imagery.*

- **Rationale:** The most *investor-institutional* and the biggest departure from the
  current dark-SaaS look, via a **light-first** surface. Lowest performance risk. Risk:
  can feel conservative if under-art-directed.
- **Color / material:** **Light-first** — mineral white `#F6F4EE` base, ink `#16171C`
  text; deep petroleum `#103A3C` and bronze `#A97E3C` accents; architectural concrete
  grays; dark mode as the secondary theme.
- **Typography:** Display **Fraunces** (optical, variable serif — timeless editorial) *or*
  high-contrast grotesque; body **Inter**/humanist sans; **IBM Plex Mono** for data. The
  serif display is the signature. (All OFL.)
- **Geometry:** asymmetrical editorial grid; large folio numbers; generous margins and
  rules; full-bleed documentary photography.
- **Motion:** subtle and editorial — image reveals, intentional type setting, minimal.
- **3D:** minimal; leans on commissioned/licensed photography + one restrained hero motion.
- **Performance:** lowest risk; essentially type + images + light motion.

---

## 5. Proprietary visual-language specs (applies once a direction is approved)

### 5.1 Typography — licensing & performance
Recommended faces are **all open-source (SIL OFL)** and self-hostable via `next/font`,
consistent with the current self-hosted-Inter approach — clean licensing, no external font
hosts in the CSP, good Latin-Extended coverage: **Archivo, Space Grotesk, Fraunces,
Inter, Geist, IBM Plex Mono/Sans, JetBrains Mono, Newsreader.** Premium faces (Söhne,
Neue Haas, NVIDIA Sans) are **not** proposed — licensing cost and no self-host. Audit, do
not auto-retain, Inter: keep it as a *body* workhorse, add a distinctive display + a
technical mono for contrast.

### 5.2 Color architecture
Defined per direction above with explicit roles (primary / secondary / neutral / surfaces /
accent / interaction / text). **All pairings must pass WCAG 2.2 AA** (≥4.5:1 body, ≥3:1
large/UI) and be checked for color-blind safety. A validator runs before implementation.

### 5.3 Visual geometry
Each direction ships a small set of **recognizable Tarvico primitives** (frames/brackets,
folios, lattice, rules) implemented as reusable SVG/CSS components — not one-off decoration.

### 5.4 Iconography
One coherent custom icon set (single stroke weight, geometry, scale, interaction). No
mixing of unrelated icon libraries. Custom illustration only where it improves clarity.

---

## 6. Imagery & asset strategy
- **Real assets first:** product screenshots (Vytre, SireIQ), founder photography, genuine
  engineering artifacts, verified milestones.
- **Original/commissioned or generated:** abstract computational architecture, conceptual
  infrastructure/energy, mobility concepts — **always clearly labeled as concept**, never
  presented as existing Tarvico facilities, offices, employees, or data centers.
- **Licensed:** architecture/industrial/research photography with tracked provenance.
- **Governance:** a documented asset inventory (source, license, provenance, alt text);
  web-optimized (AVIF/WebP, responsive sizes); no competitor assets; no fabricated metrics.

---

## 7. Performance & accessibility risk assessment
Targets (not claims): **Lighthouse Perf ≥ 90 mobile, A11y ≥ 95; no serious WCAG 2.2 AA
issues; LCP ≤ 2.5s; CLS ≤ 0.1; INP ≤ 200ms.** Preserve the current security headers, SEO,
and structured data.

| Feature | Risk | Mitigation |
|---|---|---|
| Hero 3D (A/B) | LCP, mobile GPU, bundle | Code-split + lazy-load; static poster fallback; pause off-screen; low-power downgrade; `prefers-reduced-motion`; no WebGL required for function. |
| Web fonts (new display + mono) | FOIT/CLS, weight | Self-host via `next/font`; `font-display: swap`; subset; ≤2–3 families; variable fonts. |
| Imagery | LCP, page weight | AVIF/WebP, responsive `sizes`, priority only on hero, lazy below the fold. |
| Motion library | Bundle, INP | CSS for simple motion; add a library only where justified; respect reduced-motion. |
| Light mode (C) | Contrast regressions | Full token re-audit for AA in both themes. |

**Lowest risk: C. Moderate: A. Highest: B.**

---

## 8. Recommendation

**Primary: Direction A (Architectural Intelligence / FOUNDRY), as a disciplined hybrid:**

1. **A is the core system** — graphite + warm-bronze material, Archivo display + Inter body
   + Plex Mono, architectural geometry. It evolves (not discards) the black-and-gold equity
   and expresses the three pillars as *built systems* — the most credible, institutional,
   non-trendy read for an investor-facing holding company.
2. **Borrow C's editorial typographic discipline and its light surface** for
   **Investors / Legal / About** — where clarity and timelessness outrank spectacle, and a
   light, editorial treatment maximizes trust and readability of disclosures.
3. **Reserve B's interactive systems structure for exactly one signature hero moment** —
   code-split, budgeted, with a static fallback — so the site has one memorable, performant
   visual without three competing heavy scenes.

This gives Tarvico a recognizable, original identity grounded in architecture, engineering,
and intelligence; keeps investor information calm and credible; and contains performance
risk to a single, optional hero. It satisfies the brief's "recommend one direction or a
carefully justified hybrid."

**Alternatives:** choose **C** for the safest, most purely-institutional route (lowest
risk, light-first, type-led); choose **B** only if the strategic priority is signaling
frontier-AI energy and the team accepts the added craft/performance budget.

---

## 9. Phased plan & branch safety (post-approval)

- **Now (this PR):** research + audit + three directions + recommendation. **Stop for
  management approval of a direction.**
- **Phase 4:** build the approved design system (tokens, type, color, geometry, motion
  primitives) on this feature branch.
- **Phase 5:** homepage prototype (hero + selected businesses + pillars + initial motion/3D);
  screenshots + preview; **stop for review.**
- **Phase 6:** site-wide application, preserving all factual content and legal disclosures.
- **Phase 7–8:** QA, performance/a11y, before/after comparison, release-readiness report.

**Branch safety:** this work lives on `claude/project-aurel-design-research`, branched from
`main`. It is **independent of the open investor-readiness/legal PR (#72)** — that PR is not
reused, reverted, or merged to ease design work. Unrelated legal-copy changes are **not**
combined with the design transformation. No DNS, secrets, Cloudflare, or deployment
settings are touched. Nothing merges or deploys without explicit approval.

---

## 10. Deliverables checklist (pre-approval)

| # | Deliverable | Status |
|---|---|---|
| 1 | Visual audit of current site | ✅ §1 (first-hand, screenshots delivered) |
| 2 | Competitor design research w/ evidence | ✅ §2 (WebSearch + documented knowledge; live access blocked) |
| 3 | REA execution report / limitation statement | ✅ §3 (honest: not run, by design) |
| 4 | Three original art directions | ✅ §4 + visual style-tiles companion |
| 5 | Typography recommendations + license checks | ✅ §4, §5.1 (all OFL/self-hostable) |
| 6 | Color-system proposals | ✅ §4, §5.2 (AA to be validated) |
| 7 | Imagery & asset strategy | ✅ §6 |
| 8 | Motion design proposals | ✅ §4 per direction, §7 |
| 9 | 3D experience concepts | ✅ §4 (A/B), §7 |
| 10 | Homepage concept previews | ◻ Style-tiles companion now; full hero prototype is Phase 5 (post-approval) |
| 11 | Performance & accessibility risk assessment | ✅ §7 |
| 12 | Recommended final creative direction | ✅ §8 (A-led hybrid) |

**Decision required:** approve **A-led hybrid** (recommended), or select **A**, **B**, or
**C** outright, before Phase 4 begins.
