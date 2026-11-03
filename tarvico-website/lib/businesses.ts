// ─────────────────────────────────────────────────────────────────────────────
// Tarvico disclosure framework — single source of truth for corporate identity,
// business portfolio, product maturity, and portfolio-visibility decisions.
//
// Provenance is tracked so public copy never overstates what has been verified:
//   'repo-verified'        — confirmed from this repository / public artifacts
//   'management-confirmed' — provided by Tarvico management (not independently
//                            verified in this build environment)
//   'unverified'           — not yet confirmed by either; treat conservatively
//
// Independent live verification of product sites was NOT possible in the build
// environment (product domains are outside the session's allowed network).
// Labels below reflect management-provided evidence where noted.
// ─────────────────────────────────────────────────────────────────────────────

export const IDENTITY = {
  legalName: 'Tarvico Inc.',
  shortName: 'Tarvico',
  // Approved positioning (management-approved starting point).
  tagline: 'Building Technology for a Connected World',
  positioning:
    'Tarvico Inc. is a privately held U.S. technology company, incorporated in Delaware, building artificial intelligence, digital platforms, and emerging technology businesses — with a long-term vision spanning global technology, intelligent mobility, computing infrastructure, and sustainable energy.',
  // Current reality vs future ambition — kept explicit per corporate-identity rules.
  currentReality: 'Incorporated in Delaware and operating from the United States.',
  globalLine: 'Founded in the United States. Building for global markets. Planning for international expansion.',
  registeredOffice: '8 The Green, #5275, Dover, DE 19901, United States', // registered office, not a staffed HQ
} as const

export type MaturityTier = 'operational' | 'public-beta' | 'in-development' | 'long-term'
export type Visibility = 'featured' | 'public' | 'private' | 'strategy'
export type Provenance = 'repo-verified' | 'management-confirmed' | 'unverified'
export type Pillar = 'ai' | 'infrastructure' | 'mobility'

export type Business = {
  name: string
  tagline: string
  pillar: Pillar
  maturity: MaturityTier
  visibility: Visibility
  url?: string
  internal?: string // internal product page on this site, if any
  provenance: Provenance
  note?: string // internal note (not for public display)
}

// Approved portfolio shortlist (per the strategy report, management-approved).
export const BUSINESSES: Business[] = [
  {
    name: 'Vytre AWOS',
    tagline: 'AI Workforce Operating System — the enterprise control plane for AI work.',
    pillar: 'ai',
    maturity: 'public-beta',
    visibility: 'featured',
    url: 'https://www.vytre.com',
    internal: '/vytre',
    provenance: 'management-confirmed',
    note: 'Public beta announced at vytre.com (management-confirmed). Hugging Face model at tarvico/vytre_core (management-confirmed canonical slug).',
  },
  {
    name: 'SireIQ',
    tagline: 'An intelligent assistant for chat, content creation, and workflow automation.',
    pillar: 'ai',
    maturity: 'operational',
    visibility: 'featured',
    url: 'https://sireiq.com',
    provenance: 'management-confirmed',
    note: 'Publicly accessible and actively developed (management-confirmed). Independent production-capability verification pending (network-blocked).',
  },
  {
    name: 'Maeyen',
    tagline: 'Commerce trust infrastructure for Africa, starting from Nigeria.',
    pillar: 'ai',
    maturity: 'in-development',
    visibility: 'featured',
    url: 'https://www.maeyen.com',
    internal: '/maeyen',
    provenance: 'unverified',
  },
  {
    name: 'SEOAgentPro',
    tagline: 'Autonomous SEO intelligence for content strategy and optimization.',
    pillar: 'ai',
    maturity: 'in-development',
    visibility: 'public',
    url: 'https://www.seoagentpro.com',
    provenance: 'unverified',
  },
  {
    name: 'Racym',
    tagline: 'A verified creative talent network — hiring on proven work, not follower count.',
    pillar: 'ai',
    maturity: 'in-development',
    visibility: 'public',
    url: 'https://www.racym.com',
    provenance: 'unverified',
  },
  // Category C — private development; not promoted publicly (per approval).
  { name: 'Fycra', tagline: 'Developer tooling / code platform.', pillar: 'ai', maturity: 'in-development', visibility: 'private', provenance: 'unverified' },
  { name: 'Fycera', tagline: 'AI creative / content infrastructure.', pillar: 'ai', maturity: 'in-development', visibility: 'private', provenance: 'unverified' },
  // Pillar 3 — Mobility. Existing travel platform is distinct from the future
  // premium-transportation business; do not imply the full mobility business is launched.
  {
    name: 'Escazo',
    tagline: 'Travel platform today; the foundation for a future intelligent-mobility business.',
    pillar: 'mobility',
    maturity: 'operational', // the travel platform is live (management-confirmed)
    visibility: 'strategy',
    url: 'https://escazo.com',
    provenance: 'management-confirmed',
    note: 'escazo.com travel platform is live (management-confirmed). Premium transportation / broader mobility is Long-Term Vision — do not present as launched.',
  },
]

export const featuredBusinesses = () => BUSINESSES.filter(b => b.visibility === 'featured')
export const publicBusinesses = () => BUSINESSES.filter(b => b.visibility === 'featured' || b.visibility === 'public')

// Three strategic pillars — corporate directions, not existing operating divisions.
export const PILLARS: { id: Pillar; title: string; stance: 'current' | 'long-term'; summary: string }[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence & Global Technology',
    stance: 'current',
    summary: 'Where Tarvico builds today — AI applications, workforce systems, enterprise software, digital platforms, and commerce technology.',
  },
  {
    id: 'infrastructure',
    title: 'AI Infrastructure, Data Centers & Energy',
    stance: 'long-term',
    summary: 'A long-term ambition to develop company-owned AI computing, private cloud, and sustainable energy — including a proposed future Lagos data-center campus. No existing facility, funding, or approved construction.',
  },
  {
    id: 'mobility',
    title: 'Intelligent Mobility & Transportation',
    stance: 'long-term',
    summary: 'Building from Escazo’s travel platform toward future opportunities in premium transportation, fleet operations, logistics, and mobility software. No autonomous fleets or vehicle manufacturing.',
  },
]
