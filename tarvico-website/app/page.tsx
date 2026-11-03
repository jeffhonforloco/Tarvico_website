'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Button, FadeUp } from '@/components/ui'
import { featuredBusinesses, PILLARS } from '@/lib/businesses'

/* ══════════════════════════════════════════════════════════════════════════
   Project AUREL · FOUNDRY homepage prototype (A-led hybrid)
   - Architectural Intelligence (A) as the core language
   - Mineral-white editorial bands carry Direction C's institutional voice
   - One signature 3D "computational keystone" sculpture (B's systems idea)
   All factual copy is preserved verbatim from the approved content.
   ══════════════════════════════════════════════════════════════════════════ */

const DISPLAY = 'var(--font-archivo-stack)'
const SERIF = 'var(--font-fraunces-stack)'
const MONO = 'var(--mono)'

const mono = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  fontFamily: MONO, fontSize: '0.62rem', letterSpacing: '0.22em',
  textTransform: 'uppercase', fontWeight: 500, ...extra,
})

/* Engineering dimension line: ─┬───────┬─ with end ticks */
function DimLine({ color = 'var(--bronze-line)', flex = true }: { color?: string; flex?: boolean }) {
  return (
    <span aria-hidden style={{ display: flex ? 'flex' : 'inline-flex', alignItems: 'center', flex: flex ? 1 : undefined, minWidth: 28 }}>
      <span style={{ width: 1, height: 7, background: color }} />
      <span style={{ flex: 1, height: 1, background: color }} />
      <span style={{ width: 1, height: 7, background: color }} />
    </span>
  )
}

/* ── Signature 3D sculpture — a crystalline "computational keystone" ──────────
   Real depth: three wireframe layers at different translateZ inside a
   preserve-3d stage. Continuous slow Y-spin + pointer parallax tilt.
   Renders fully at rest; pointer tilt and spin disable under reduced-motion. */
function FoundrySculpture() {
  const stage = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = stage.current
    if (!el || typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) / Math.max(r.width, 1)
      const dy = (e.clientY - (r.top + r.height / 2)) / Math.max(r.height, 1)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${(-dy * 9).toFixed(2)}deg) rotateY(${(dx * 13).toFixed(2)}deg)`
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  const node = (cx: number, cy: number, r: number, fill: string) => <circle cx={cx} cy={cy} r={r} fill={fill} />

  return (
    <div className="sculpt-wrap mob-hide" style={{ width: 'min(42vw, 480px)', height: 480, position: 'relative' }} aria-hidden>
      {/* ambient glow */}
      <div className="animate-glow-breathe" style={{
        position: 'absolute', inset: '12%', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,162,74,0.16) 0%, rgba(21,83,77,0.10) 45%, transparent 70%)',
        filter: 'blur(6px)',
      }} />
      <div ref={stage} className="sculpt-stage" style={{ position: 'absolute', inset: 0 }}>
        <div className="sculpt-spin animate-aurel-float" style={{ position: 'absolute', inset: 0 }}>
          {/* back layer — faint titanium frame, pushed away */}
          <div className="sculpt-layer" style={{ transform: 'translateZ(-150px)' }}>
            <svg width="420" height="420" viewBox="0 0 300 300" fill="none">
              <g stroke="var(--titanium)" strokeWidth="0.8" opacity="0.22">
                <path d="M150 20 L280 150 L150 280 L20 150 Z" />
                <path d="M150 20 L150 280 M20 150 L280 150" />
                <rect x="66" y="66" width="168" height="168" transform="rotate(45 150 150)" />
              </g>
            </svg>
          </div>
          {/* mid layer — main bronze crystalline truss */}
          <div className="sculpt-layer" style={{ transform: 'translateZ(0px)' }}>
            <svg width="340" height="400" viewBox="0 0 300 360" fill="none">
              <g stroke="var(--bronze)" strokeWidth="1.1" strokeLinejoin="round">
                <path d="M150 24 L264 180 L150 336 L36 180 Z" />
                <path d="M150 24 L150 336 M36 180 L264 180" />
                <path d="M150 24 L96 180 L150 336 M150 24 L204 180 L150 336" opacity="0.85" />
                <path d="M96 180 L204 180" opacity="0.5" />
              </g>
              <g>
                {node(150, 24, 4, 'var(--bronze)')}
                {node(264, 180, 3.4, 'var(--bronze)')}
                {node(36, 180, 3.4, 'var(--bronze)')}
                {node(150, 336, 4, 'var(--bronze)')}
                {node(96, 180, 2.6, 'var(--petroleum-ink)')}
                {node(204, 180, 2.6, 'var(--petroleum-ink)')}
              </g>
            </svg>
          </div>
          {/* front layer — petroleum satellites + bright core, pulled forward */}
          <div className="sculpt-layer" style={{ transform: 'translateZ(140px)' }}>
            <svg width="240" height="240" viewBox="0 0 220 220" fill="none">
              <g stroke="var(--petroleum-ink)" strokeWidth="0.9" opacity="0.8">
                <path d="M110 60 L150 110 L110 160 L70 110 Z" />
                <path d="M110 60 L110 160 M70 110 L150 110" />
              </g>
              {node(110, 110, 5.5, 'var(--bronze)')}
              <circle cx="110" cy="110" r="12" stroke="var(--bronze)" strokeWidth="0.8" fill="none" opacity="0.6" />
              {node(110, 60, 2.6, 'var(--petroleum-ink)')}
              {node(150, 110, 2.6, 'var(--petroleum-ink)')}
              {node(110, 160, 2.6, 'var(--petroleum-ink)')}
              {node(70, 110, 2.6, 'var(--petroleum-ink)')}
            </svg>
          </div>
        </div>
      </div>
      <div style={{ ...mono({ color: 'var(--text-3)', position: 'absolute', bottom: 8, left: 0, fontSize: '0.54rem' }) }}>
        Fig. 01 — Computational Keystone · concept
      </div>
    </div>
  )
}

const featured = featuredBusinesses()

// Verifiable execution signals only — no invented customers, revenue, metrics, or uptime.
const evidence = [
  { t: 'SireIQ is publicly available', d: 'A live, usable AI assistant for chat, content, and workflow.', href: 'https://sireiq.com', cta: 'sireiq.com ↗' },
  { t: 'Vytre AWOS — public beta', d: 'The AI Workforce Operating System is in public beta.', href: 'https://www.vytre.com', cta: 'vytre.com ↗' },
  { t: 'Vytre Core — open model', d: 'A workforce-operations model published openly on Hugging Face.', href: 'https://huggingface.co/tarvico/vytre_core', cta: 'View on Hugging Face ↗' },
  { t: 'Member, NVIDIA Developer Program', d: 'Participation in NVIDIA’s developer program. Not an investment, endorsement, or partnership.', href: undefined, cta: undefined },
]

const principles = [
  { t: 'Build internally', d: 'Products are developed in-house, validated with rigor, and shipped when ready — not announced before they exist.' },
  { t: 'Intelligence-first', d: 'AI is the operating layer of the products we build, not a feature bolted on afterward.' },
  { t: 'Long-term capital strategy', d: 'We build for the long term — patient ownership and focused reinvestment over short-term optics.' },
  { t: 'Operational leverage', d: 'Small, capable teams with technological leverage, building more with less.' },
]

const faqLink: React.CSSProperties = { color: 'var(--bronze-deep)', textDecoration: 'underline', textUnderlineOffset: 3, fontWeight: 600 }

const faqs: { q: string; a: React.ReactNode }[] = [
  { q: 'What is Tarvico Inc.?', a: <>Tarvico Inc. is a privately held U.S. technology company, incorporated in Delaware, that builds and operates AI, digital platforms, and emerging technology products. It builds long-term businesses that solve foundational problems, with a long-term vision spanning global technology, mobility, infrastructure, and energy. <Link href="/about" style={faqLink}>About Tarvico →</Link></> },
  { q: 'Who founded Tarvico?', a: <>Tarvico was founded by Jeff Yèmalín Bienvenu Honforloco (Jeff Hon), who serves as Founder & CEO. A self-taught builder and former professional photographer, he leads vision, strategy, and product across the company. <Link href="/founder" style={faqLink}>Founder profile →</Link></> },
  { q: 'What products does Tarvico build?', a: <>Tarvico’s featured products are <Link href="/vytre" style={faqLink}>Vytre AWOS</Link> (an AI Workforce Operating System, in public beta), SireIQ (a publicly available AI assistant), and <Link href="/maeyen" style={faqLink}>Maeyen</Link> (commerce trust infrastructure, in development). <Link href="/products" style={faqLink}>Products →</Link></> },
  { q: 'What is Vytre AWOS?', a: <>Vytre AWOS is Tarvico’s flagship product — an AI Workforce Operating System that gives enterprises a single control plane to deploy, coordinate, observe, and govern AI workers. It is currently in public beta. <Link href="/vytre" style={faqLink}>Learn about Vytre →</Link></> },
  { q: 'What is Maeyen?', a: <>Maeyen is a commerce trust network for Africa, starting from Nigeria, in development. By verifying participants and protecting transactions, it aims to let buyers and sellers transact online with confidence. <Link href="/maeyen" style={faqLink}>Learn about Maeyen →</Link></> },
  { q: 'What is Tarvico’s long-term strategy?', a: <>Founded in the United States and operating from the U.S. today, Tarvico plans to expand internationally over time — including African markets — and holds long-term ambitions across AI, computing infrastructure, data centers, sustainable energy, and intelligent mobility. These are future directions, not current operations. <Link href="/investors" style={faqLink}>Investor relations →</Link></> },
]

const pillarStance = (stance: 'current' | 'long-term') => (stance === 'current' ? 'Building today' : 'Long-Term Vision')

/* ── Reusable band eyebrow (folio + label + dimension line) ───────────────── */
function Eyebrow({ folio, label, onMineral = false }: { folio: string; label: string; onMineral?: boolean }) {
  const acc = onMineral ? 'var(--bronze-deep)' : 'var(--bronze)'
  const faint = onMineral ? 'var(--mineral-ink-2)' : 'var(--text-3)'
  const line = onMineral ? 'var(--mineral-line)' : 'var(--hairline)'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
      <span style={mono({ color: faint, fontSize: '0.64rem' })}>{folio}</span>
      <span style={mono({ color: acc, fontSize: '0.64rem' })}>{label}</span>
      <DimLine color={line} />
    </div>
  )
}

export default function HomePage() {
  const H2 = { fontFamily: DISPLAY, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 0.98 } as React.CSSProperties

  return (
    <>
      {/* ── 00 · HERO ──────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bg)' }}>
        <div className="aurel-blueprint" style={{ position: 'absolute', inset: 0, opacity: 0.8 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 70% at 68% 42%, transparent 20%, var(--bg) 78%)' }} />
        {/* left bronze edge rule */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 'max(1.5rem, 4vw)', width: 1, background: 'linear-gradient(to bottom, transparent, var(--bronze-line) 20%, var(--bronze-line) 80%, transparent)' }} className="mob-hide" />

        <div className="mob-px" style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '0 max(1.5rem, 4vw)', width: '100%' }}>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1.15fr auto', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="animate-fade-in delay-100" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <span style={mono({ color: 'var(--text-3)' })}>00 — Tarvico Inc.</span>
                <DimLine color="var(--hairline)" />
                <span style={mono({ color: 'var(--petroleum-ink)' })}>Est. Delaware · USA</span>
              </div>

              <div className="animate-fade-in delay-100" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, marginBottom: '2rem', padding: '7px 15px 7px 11px', border: '1px solid var(--bronze-line)', borderRadius: 999, background: 'var(--bronze-soft)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--bronze)', display: 'inline-block' }} className="animate-pulse-gold" />
                <span style={mono({ color: 'var(--text-2)', fontSize: '0.6rem', letterSpacing: '0.16em' })}>U.S. Private Technology Company</span>
              </div>

              <h1 className="aurel-display animate-aurel-clip delay-250" style={{ fontSize: 'clamp(2.9rem, 7vw, 6.4rem)', color: 'var(--text)', marginBottom: '1.9rem' }}>
                Building<br />Technology<br />for a <span className="text-foundry">Connected World</span>.
              </h1>

              <p className="animate-fade-up delay-400" style={{ fontSize: '1.14rem', color: 'var(--text-2)', maxWidth: 540, lineHeight: 1.62, marginBottom: '2.5rem', fontWeight: 400 }}>
                Tarvico Inc. is a privately held U.S. technology company building artificial intelligence, digital platforms, and emerging technology businesses — with a long-term vision spanning global technology, intelligent mobility, computing infrastructure, and sustainable energy.
              </p>

              <div className="animate-fade-up delay-550" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <Button href="/portfolio" variant="primary">Our Businesses →</Button>
                <Button href="/investors" variant="secondary">Investor Relations</Button>
              </div>

              {/* engineering spec strip */}
              <div className="animate-fade-up delay-700" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[{ v: 'Delaware, USA', l: 'Incorporated' }, { v: '2026', l: 'Founded' }, { v: 'United States', l: 'Operating today' }].map(s => (
                  <div key={s.l} style={{ borderTop: '1px solid var(--bronze-line)', paddingTop: '0.7rem', minWidth: 110 }}>
                    <div style={{ fontFamily: DISPLAY, fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em' }}>{s.v}</div>
                    <div style={mono({ color: 'var(--text-3)', fontSize: '0.56rem', marginTop: 5 })}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <FoundrySculpture />
          </div>
        </div>

        <div className="mob-hide" style={{ position: 'absolute', bottom: '2rem', left: 'max(1.5rem, 4vw)', display: 'flex', alignItems: 'center', gap: 12, zIndex: 2 }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--bronze), transparent)' }} className="animate-scroll-line" />
          <span style={mono({ color: 'var(--text-3)', fontSize: '0.54rem' })}>Scroll</span>
        </div>
      </section>

      {/* ── 01 · WHAT WE DO — MINERAL EDITORIAL BAND (Direction C voice) ────── */}
      <section style={{ background: 'var(--mineral)', color: 'var(--mineral-ink)' }}>
        <div className="mob-p" style={{ maxWidth: 1280, margin: '0 auto', padding: '7.5rem max(1.5rem, 4vw)' }}>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <FadeUp>
              <Eyebrow folio="01" label="What We Do" onMineral />
              <h2 style={{ fontFamily: SERIF, fontWeight: 900, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--mineral-ink)', marginBottom: '1.75rem', textWrap: 'balance' }}>
                A U.S. technology company, built for the long&nbsp;term.
              </h2>
              <div style={{ fontSize: '1.04rem', color: 'var(--mineral-ink-2)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '58ch' }}>
                <p>Tarvico Inc. is a <strong style={{ color: 'var(--mineral-ink)', fontWeight: 600 }}>privately held U.S. technology company</strong>, incorporated in Delaware and operating from the United States. We design, build, and operate artificial intelligence and digital technology products.</p>
                <p>We work as a company builder, combining the <strong style={{ color: 'var(--mineral-ink)', fontWeight: 600 }}>capital discipline of a long-term holding-company strategy</strong> with the velocity of a product studio — developing products internally and scaling through operational leverage.</p>
                <p>What exists <strong style={{ color: 'var(--mineral-ink)', fontWeight: 600 }}>today</strong> is real technology development and live and in-development products. What lies <strong style={{ color: 'var(--mineral-ink)', fontWeight: 600 }}>ahead</strong> is a long-term vision across global technology, infrastructure, energy, and mobility — pursued deliberately, and clearly distinguished throughout this site.</p>
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/about" style={{ ...mono({ color: 'var(--bronze-deep)', fontSize: '0.66rem' }), textDecoration: 'none', borderBottom: '1px solid var(--bronze-deep)', paddingBottom: 4 }}>About Tarvico →</Link>
              </div>
            </FadeUp>

            <FadeUp delay={120} style={{ display: 'flex', flexDirection: 'column' }}>
              {principles.map((p, i) => (
                <div key={p.t} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.4rem', padding: '1.6rem 0', borderTop: '1px solid var(--mineral-line)' }}>
                  <span style={mono({ color: 'var(--bronze-deep)', fontSize: '0.7rem', paddingTop: 4 })}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div style={{ fontFamily: DISPLAY, fontSize: '1.05rem', fontWeight: 700, color: 'var(--mineral-ink)', letterSpacing: '-0.01em', marginBottom: '0.4rem' }}>{p.t}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--mineral-ink-2)', lineHeight: 1.6 }}>{p.d}</div>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 02 · SELECTED BUSINESSES — EDITORIAL ROWS (graphite) ────────────── */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="mob-p" style={{ maxWidth: 1280, margin: '0 auto', padding: '7.5rem max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="02" label="Selected Businesses" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.25rem' }}>
              <h2 className="aurel-display" style={{ ...H2, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', color: 'var(--text)', maxWidth: 560 }}>Products we build and operate.</h2>
              <Link href="/portfolio" style={{ ...mono({ color: 'var(--bronze)', fontSize: '0.66rem' }), textDecoration: 'none' }}>All businesses →</Link>
            </div>
          </FadeUp>

          <div style={{ borderTop: '1px solid var(--hairline)' }}>
            {featured.map((b, i) => {
              const href = b.internal ?? b.url ?? '/portfolio'
              const external = !b.internal && !!b.url
              const Inner = (
                <div className="biz-row" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'center', padding: '2.25rem 0', borderBottom: '1px solid var(--hairline)', transition: 'background 0.25s, padding 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-raised)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                  <span style={{ ...mono({ color: 'var(--text-3)', fontSize: '0.8rem' }) }}>{String(i + 1).padStart(2, '0')}</span>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <span style={{ fontFamily: DISPLAY, fontSize: 'clamp(1.5rem, 3vw, 2.3rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>{b.name}</span>
                      <MaturityDot tier={b.maturity} />
                    </div>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.55, maxWidth: '54ch' }}>{b.tagline}</p>
                  </div>
                  <span className="mob-hide" style={{ ...mono({ color: 'var(--bronze)', fontSize: '0.64rem' }), whiteSpace: 'nowrap' }}>{b.internal ? 'Overview →' : 'Visit ↗'}</span>
                </div>
              )
              return external ? (
                <FadeUp key={b.name} delay={i * 70}><a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>{Inner}</a></FadeUp>
              ) : (
                <FadeUp key={b.name} delay={i * 70}><Link href={href} style={{ textDecoration: 'none', display: 'block' }}>{Inner}</Link></FadeUp>
              )
            })}
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.6, marginTop: '1.75rem', maxWidth: 640, fontWeight: 300 }}>
            Maturity labels reflect each product’s current stage. Tarvico features a selective set of businesses; additional products are listed on the businesses page.
          </p>
        </div>
      </section>

      {/* ── 03 · THREE PILLARS — CONNECTED SPATIAL (graphite + petroleum) ───── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
        <div className="mob-p" style={{ maxWidth: 1280, margin: '0 auto', padding: '7.5rem max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="03" label="Strategic Direction" />
            <h2 className="aurel-display" style={{ ...H2, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', color: 'var(--text)', maxWidth: 640, marginBottom: '1.25rem' }}>Three connected pillars.</h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-2)', maxWidth: 620, lineHeight: 1.65, marginBottom: '3.5rem' }}>
              Corporate directions, not existing operating divisions. One is where we build today; two are long-term ambitions we are clear not to overstate.
            </p>
          </FadeUp>
          <div className="mob-stack pillar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, position: 'relative' }}>
            {PILLARS.map((p, i) => {
              const current = p.stance === 'current'
              const acc = current ? 'var(--bronze)' : 'var(--petroleum-ink)'
              return (
                <FadeUp key={p.id} delay={i * 90}>
                  <div style={{ padding: '2.5rem', height: '100%', borderLeft: i === 0 ? '1px solid var(--hairline)' : 'none', borderRight: '1px solid var(--hairline)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2rem' }}>
                      <span style={{ fontFamily: MONO, fontSize: '0.78rem', color: acc, fontWeight: 600 }}>P{i + 1}</span>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: acc, boxShadow: current ? '0 0 0 4px var(--bronze-soft)' : '0 0 0 4px var(--petroleum-soft)' }} />
                      <span style={mono({ color: acc, fontSize: '0.56rem' })}>{pillarStance(p.stance)}</span>
                    </div>
                    <div style={{ fontFamily: DISPLAY, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '0.9rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{p.title}</div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.65, flex: 1 }}>{p.summary}</p>
                    <div style={{ marginTop: '2rem', height: 2, background: acc, width: current ? '100%' : '38%', opacity: current ? 0.9 : 0.5 }} />
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 04 · EVIDENCE OF EXECUTION — MINERAL BAND ──────────────────────── */}
      <section style={{ background: 'var(--mineral)', color: 'var(--mineral-ink)' }}>
        <div className="mob-p" style={{ maxWidth: 1280, margin: '0 auto', padding: '7.5rem max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="04" label="Evidence of Execution" onMineral />
            <h2 style={{ fontFamily: SERIF, fontWeight: 900, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--mineral-ink)', maxWidth: 640, marginBottom: '1.25rem', textWrap: 'balance' }}>What exists today.</h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--mineral-ink-2)', maxWidth: 600, lineHeight: 1.65, marginBottom: '3.5rem' }}>
              Verifiable progress, stated plainly. We do not publish customer counts, revenue, usage metrics, or uptime.
            </p>
          </FadeUp>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--mineral-line)' }}>
            {evidence.map((e, i) => (
              <FadeUp key={e.t} delay={i * 60}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.1rem', padding: '2rem 2rem 2rem 0', borderBottom: '1px solid var(--mineral-line)', height: '100%' }}>
                  <span style={{ color: 'var(--petroleum)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 700 }}>✓</span>
                  <div>
                    <div style={{ fontFamily: DISPLAY, fontSize: '1.05rem', color: 'var(--mineral-ink)', marginBottom: '0.4rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{e.t}</div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--mineral-ink-2)', lineHeight: 1.6, marginBottom: e.href ? '0.75rem' : 0 }}>{e.d}</p>
                    {e.href && <a href={e.href} target="_blank" rel="noopener noreferrer" style={mono({ color: 'var(--bronze-deep)', fontSize: '0.6rem', textDecoration: 'none' } as React.CSSProperties)}>{e.cta}</a>}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 · LONG-TERM VISION — CINEMATIC (graphite + abstract field) ───── */}
      <section style={{ position: 'relative', background: 'var(--bg)', overflow: 'hidden' }}>
        <div className="aurel-blueprint-fine" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        <svg aria-hidden style={{ position: 'absolute', right: '-6%', top: '50%', transform: 'translateY(-50%)', width: 'min(55vw, 680px)', opacity: 0.5 }} viewBox="0 0 600 600" fill="none" className="mob-hide">
          <g stroke="var(--petroleum-ink)" strokeWidth="0.6" opacity="0.5">
            {Array.from({ length: 10 }).map((_, i) => <circle key={i} cx="300" cy="300" r={40 + i * 26} />)}
          </g>
          <g stroke="var(--bronze-line)" strokeWidth="0.8">
            <path d="M300 40 L560 300 L300 560 L40 300 Z" />
            <path d="M300 40 L300 560 M40 300 L560 300" />
          </g>
          <circle cx="300" cy="300" r="5" fill="var(--bronze)" />
        </svg>
        <div className="mob-p" style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '8rem max(1.5rem, 4vw)' }}>
          <FadeUp style={{ maxWidth: 760 }}>
            <Eyebrow folio="05" label="Long-Term Vision" />
            <h2 className="aurel-display" style={{ ...H2, fontSize: 'clamp(2.3rem, 4.6vw, 4rem)', color: 'var(--text)', marginBottom: '1.75rem' }}>
              Founded in the U.S. <span className="text-foundry">Building for the world.</span>
            </h2>
            <div style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <p>Tarvico operates from the United States today. Over the long term, we intend to expand internationally — with African markets, and Nigeria as a proposed first location, part of that future strategy — supported by growing technology, research, and engineering capabilities.</p>
              <p>Our longer-range ambitions include company-owned computing infrastructure, AI data centers, and sustainable energy, and the application of our technology to intelligent mobility. These are future directions — subject to funding, feasibility, and execution — and not existing operations, offices, or facilities.</p>
            </div>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <Button href="/investors" variant="secondary">Investor Relations →</Button>
              <Button href="/vision" variant="ghost">Read the Founder Letter</Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 06 · LEADERSHIP — EDITORIAL SERIF QUOTE (mineral) ──────────────── */}
      <section style={{ background: 'var(--mineral)', color: 'var(--mineral-ink)' }}>
        <div className="mob-p" style={{ maxWidth: 940, margin: '0 auto', padding: '8rem max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="06" label="Leadership" onMineral />
            <blockquote style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(1.7rem, 3.4vw, 2.9rem)', color: 'var(--mineral-ink)', lineHeight: 1.26, letterSpacing: '-0.015em', marginBottom: '2.5rem', textWrap: 'balance' }}>
              <span style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>“</span>The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life.<span style={{ fontStyle: 'italic', color: 'var(--bronze-deep)' }}>”</span>
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <DimLine color="var(--mineral-line)" flex={false} />
              <span style={mono({ color: 'var(--mineral-ink-2)', fontSize: '0.64rem' })}>Jeff Yèmalín Bienvenu Honforloco — Founder &amp; CEO</span>
            </div>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <Link href="/founder" style={{ ...mono({ color: 'var(--bronze-deep)', fontSize: '0.66rem' }), textDecoration: 'none', borderBottom: '1px solid var(--bronze-deep)', paddingBottom: 4 }}>Founder Profile →</Link>
              <Link href="/vision" style={{ ...mono({ color: 'var(--mineral-ink-2)', fontSize: '0.66rem' }), textDecoration: 'none', marginLeft: '1.5rem' }}>Read the Founder Letter →</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 07 · FAQ (graphite) ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--hairline)' }}>
        <div className="mob-p" style={{ maxWidth: 900, margin: '0 auto', padding: '7.5rem max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="07" label="Common Questions" />
            <h2 className="aurel-display" style={{ ...H2, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--text)', marginBottom: '3rem' }}>What is <span className="text-foundry">Tarvico?</span></h2>
            <div>
              {faqs.map((f, i) => (
                <div key={f.q} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.4rem', padding: '1.9rem 0', borderTop: '1px solid var(--hairline)' }}>
                  <span style={mono({ color: 'var(--bronze)', fontSize: '0.66rem', paddingTop: 6 })}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 style={{ fontFamily: DISPLAY, fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '0.7rem' }}>{f.q}</h3>
                    <p style={{ fontSize: '0.98rem', color: 'var(--text-2)', lineHeight: 1.72 }}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 08 · INVESTORS & PARTNERS (graphite, sculpture echo) ───────────── */}
      <section style={{ position: 'relative', background: 'var(--bg-raised)', borderTop: '1px solid var(--hairline)', overflow: 'hidden' }}>
        <div className="aurel-blueprint" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 70% at 50% 40%, var(--bronze-soft) 0%, transparent 55%)' }} />
        <div className="mob-p" style={{ position: 'relative', zIndex: 2, maxWidth: 820, margin: '0 auto', padding: '8rem max(1.5rem, 4vw)', textAlign: 'center' }}>
          <FadeUp>
            <div style={{ display: 'inline-flex', marginBottom: '2rem' }}><span style={mono({ color: 'var(--bronze)', fontSize: '0.64rem' })}>Investors &amp; Partners</span></div>
            <h2 className="aurel-display" style={{ ...H2, fontSize: 'clamp(2.1rem, 4.4vw, 3.8rem)', color: 'var(--text)', maxWidth: 780, margin: '0 auto 1.5rem', lineHeight: 1.04 }}>
              Building a U.S. technology company for the long term.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', maxWidth: 520, margin: '0 auto 2.75rem', lineHeight: 1.65 }}>
              We welcome conversations with aligned investors and strategic partners. For company information and inquiries, reach the team directly.
            </p>
            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button href="/investors" variant="primary">Investor Relations →</Button>
              <Button href="/contact" variant="secondary">Contact</Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

/* Small inline maturity dot+label styled for the FOUNDRY rows (keeps the
   canonical maturity wording; does not alter the shared MaturityTag used
   elsewhere). */
function MaturityDot({ tier }: { tier: string }) {
  const map: Record<string, { label: string; color: string }> = {
    operational: { label: 'Operational Today', color: 'var(--emerald)' },
    'public-beta': { label: 'Public Beta', color: 'var(--bronze)' },
    'in-development': { label: 'In Development', color: 'var(--petroleum-ink)' },
    'long-term': { label: 'Long-Term Vision', color: 'var(--blue)' },
  }
  const m = map[tier] ?? map['in-development']
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, border: '1px solid var(--hairline)', borderRadius: 999, padding: '4px 11px' }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: m.color }} />
      <span style={{ fontFamily: MONO, fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: m.color, fontWeight: 500 }}>{m.label}</span>
    </span>
  )
}
