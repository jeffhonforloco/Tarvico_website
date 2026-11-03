# AUREL — Cloudflare build fix & security hardening

Focused build-and-security fix for the Project AUREL design branch. No redesign
or legal-copy changes are included here.

## 1. Build failure — root cause & fix

**Symptom (Cloudflare Pages, commit `49857b9`):**
`app/layout.tsx — next/font/google — TypeError: Cannot read properties of null (reading '1')`

**Root cause.** `next/font/google` performs a **build-time network fetch** to
Google Fonts (CSS from `fonts.googleapis.com`, woff2 from `fonts.gstatic.com`)
and parses the response with a regex. On Cloudflare Pages' build container that
fetch does not return the expected payload, the regex match is `null`, and Next
14.2.x dereferences `match[1]` → the `null` TypeError. The failure is
**environment-specific**: in a build environment that *can* reach Google Fonts
the same code succeeds, which is exactly why build-time remote font fetching is
fragile and was replaced.

**Fix.** Removed `next/font/google` entirely and switched to **`next/font/local`**
with font files vendored into `app/fonts/`:

| Family | Role | File(s) | Weights |
|---|---|---|---|
| Inter | Body | `inter-latin-wght-normal.woff2` (variable) | 100–900 |
| Archivo | Display | `archivo-latin-wght-normal.woff2` (variable) | 100–900 |
| Fraunces | Editorial serif | `fraunces-latin-wght-normal.woff2` + `-italic` (variable) | 100–900 |
| IBM Plex Mono | Technical | `ibm-plex-mono-latin-{400,500}-normal.woff2` | 400, 500 |

- Fonts are **OFL-licensed** (redistribution permitted), latin subset, sourced
  from the Fontsource distributions. Variable files carry the full weight axis
  in one file each, so the whole four-family AUREL type system is **6 files,
  ~194 KB**, down from the previous per-weight set.
- **No runtime Google Fonts dependency remains.** No page emits a
  `fonts.googleapis.com` / `fonts.gstatic.com` link or fetch (verified against
  the built `out/`). The only residual occurrences of those strings are inert
  constants inside Next.js's own framework bundle (its built-in font optimizer),
  which never activate because no page links Google Fonts.
- The approved AUREL typography and visual identity are **unchanged** — same four
  typefaces, verified by re-rendering the homepage.

## 2. Security audit

Run in `tarvico-website/` with `npm audit`. **Before: 15 (1 critical, 11 high,
3 moderate). After: 2 (1 critical, 1 high).**

**Changed dependencies (minimal, no `--force`):**

| Package | From | To | Why |
|---|---|---|---|
| `next` | 14.2.3 | **14.2.35** | Latest patched 14.2.x; clears the backported advisories. |
| `wrangler` (dev) | ^3 | **^4** | Clears the dev-only chain (ws, zod, undici, miniflare, @fastify/busboy, esbuild). Used only by local `preview`/`deploy` scripts — not in the Cloudflare build or the shipped site. |
| `postcss` (dev) | ^8.4.38 | **^8.4.49** | Build-time CSS tooling. |
| `autoprefixer`, `tailwindcss` (dev) | — | latest patch | Build-time tooling. |
| transitive (browserslist, nanoid, source-map-js, postcss-selector-parser, baseline-browser-mapping) | — | — | Cleared with `npm audit fix` (non-force). |

### Remaining 2 advisories — actual impact: **none on the deployed site**

Both are on `next` (and a `postcss` copy nested under it) and are only
"resolved" by `npm audit` via a jump to **next@16** (two major versions). They
were deliberately **not** forced, because:

- Every remaining `next` advisory is a **server-runtime** vulnerability —
  RCE in the Image Optimization API (AVIF/SVG), SSRF in rewrites / Server
  Actions, middleware/i18n bypass, RSC cache poisoning, Server-Action DoS.
- **Tarvico ships as a static export** (`output: 'export'`) to the Cloudflare
  Pages **CDN**. At request time it runs **no Next.js server, no Image
  Optimization API, no middleware, no Server Actions, no RSC server runtime** —
  so none of these code paths exist in production. The advisories concern the
  `next` package present in `node_modules` at build time, not the HTML/CSS/JS
  that is served.
- The fixes landed in the **15.5.x / 16.x** lines and were not backported to
  14.2.x, so clearing them in audit requires a major upgrade. That is an
  architecture-level change (App Router/runtime/caching differences, React 19
  default) that should be planned and tested on its own, **not** bundled into an
  urgent build fix.

**Recommendation:** schedule a separate, tested **Next 15 (LTS) migration** to
retire these at the source. Until then, residual production risk is negligible
because the vulnerable runtimes are never deployed.

## 3. Deployment verification

- Clean `npm install` (fresh `node_modules`) — OK.
- `next build` (TypeScript check + lint) — **passes**, 23 static routes.
- Root build chain (`npm install && next build && copy out→dist`) — **passes**;
  `dist/` populated with self-hosted woff2. Matches `wrangler.toml`
  `pages_build_output_dir`.
- Output checks: 84 JSON-LD blocks valid, **no broken internal links**, all
  pages present (SEO/structured data intact).
- Homepage re-rendered: **sculpture, four fonts, dark/light themes, responsive
  layouts** all correct; no horizontal overflow at 1440/390.
