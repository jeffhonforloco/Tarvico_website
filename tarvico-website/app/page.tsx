import Link from 'next/link'
import ConceptImage from '@/components/ConceptImage'
import { Button, FadeUp, MaturityTag } from '@/components/ui'
import { featuredBusinesses, PILLARS } from '@/lib/businesses'

const DISPLAY = 'var(--font-display)'
const SERIF = 'var(--font-editorial)'
const MONO = 'var(--font-body)'

const mono = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  fontFamily: MONO, fontSize: '0.62rem', letterSpacing: '0.22em',
  textTransform: 'uppercase', fontWeight: 500, ...extra,
})

/* Engineering dimension line: ─┬───────┬─ with end ticks */
function DimLine({ color = 'var(--accent-line)', flex = true }: { color?: string; flex?: boolean }) {
  return (
    <span aria-hidden style={{ display: flex ? 'flex' : 'inline-flex', alignItems: 'center', flex: flex ? 1 : undefined, minWidth: 28 }}>
      <span style={{ width: 1, height: 7, background: color }} />
      <span style={{ flex: 1, height: 1, background: color }} />
      <span style={{ width: 1, height: 7, background: color }} />
    </span>
  )
}

const featured = featuredBusinesses()
const productStudies = { SireIQ: 'sireiq', 'Vytre AWOS': 'vytre' } as const
const currentProducts = Object.entries(productStudies).flatMap(([name, study]) => {
  const business = featured.find(product => product.name === name)
  return business ? [{ business, study }] : []
})
const developmentProduct = featured.find(business => business.name === 'Maeyen')

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

const faqLink: React.CSSProperties = { color: 'var(--text)', textDecoration: 'underline', textUnderlineOffset: 3, fontWeight: 600 }

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
  const acc = onMineral ? 'var(--paper-ink)' : 'var(--text)'
  const faint = onMineral ? 'var(--paper-muted)' : 'var(--text-3)'
  const line = onMineral ? 'var(--paper-line)' : 'var(--border-w)'
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
      <section className="home-hero keystone-dark">
        <div className="keystone-shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="keystone-label home-hero-identity">Tarvico Inc. <span aria-hidden="true">/</span> Delaware, U.S.</p>
            <h1 className="home-hero-title">We build and operate technology products.</h1>
            <p className="home-hero-summary">
              Tarvico Inc. is a privately held U.S. technology holding company building AI and digital products.
            </p>
            <div className="keystone-actions">
              <Button href="/portfolio" variant="primary">Explore our businesses →</Button>
            </div>
          </div>
          <ConceptImage study="keystone" priority />
        </div>
      </section>

      <section className="keystone-paper">
        <div className="keystone-shell keystone-band">
          <div className="keystone-heading-row">
            <h2>Products today</h2>
            <Link className="keystone-link" href="/portfolio">Full portfolio →</Link>
          </div>
          {currentProducts.map(({ business, study }) => (
            <article className="keystone-product-row" key={business.name}>
              <div>
                <div className="keystone-product-heading">
                  <h3>{business.name}</h3>
                  <MaturityTag tier={business.maturity} />
                </div>
                <p>{business.tagline}</p>
                {business.internal
                  ? <Link className="keystone-link" href={business.internal}>Explore {business.name} →</Link>
                  : <a className="keystone-link" href={business.url} target="_blank" rel="noopener noreferrer">Visit {business.name} ↗</a>}
              </div>
              <ConceptImage study={study} />
            </article>
          ))}
          {developmentProduct && (
            <div className="keystone-heading-row keystone-development">
              <div>
                <div className="keystone-product-heading">
                  <h3>{developmentProduct.name}</h3>
                  <MaturityTag tier={developmentProduct.maturity} />
                </div>
                <p>{developmentProduct.tagline}</p>
              </div>
              <Link className="keystone-link" href="/maeyen">Explore Maeyen →</Link>
            </div>
          )}
        </div>
      </section>

      <section className="keystone-dark">
        <div className="keystone-shell keystone-band keystone-feature">
          <div>
            <p className="keystone-label">Long-term direction</p>
            <h2>Founded in the U.S. Building for the world.</h2>
            <p>Tarvico operates from the United States today. Over the long term, we intend to expand internationally — with African markets, and Nigeria as a proposed first location, part of that future strategy — supported by growing technology, research, and engineering capabilities.</p>
            <p>Our longer-range ambitions include company-owned computing infrastructure, AI data centers, and sustainable energy, and the application of our technology to intelligent mobility. These are future directions — subject to funding, feasibility, and execution — and not existing operations, offices, or facilities.</p>
            <Link className="keystone-link" href="/vision">Read the founder letter →</Link>
          </div>
          <ConceptImage study="strategy" />
        </div>
      </section>

      {/* ── 01 · WHAT WE DO — MINERAL EDITORIAL BAND (Direction C voice) ────── */}
      <section className="keystone-paper">
        <div className="mob-p" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) max(1.5rem, 4vw)' }}>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <FadeUp>
              <Eyebrow folio="01" label="What We Do" onMineral />
              <h2 style={{ fontFamily: DISPLAY, fontWeight: 650, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--paper-ink)', marginBottom: '1.75rem', textWrap: 'balance' }}>
                A U.S. technology company, built for the long&nbsp;term.
              </h2>
              <div style={{ fontSize: '1.04rem', color: 'var(--paper-muted)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '58ch' }}>
                <p>Tarvico Inc. is a <strong style={{ color: 'var(--paper-ink)', fontWeight: 600 }}>privately held U.S. technology company</strong>, incorporated in Delaware and operating from the United States. We design, build, and operate artificial intelligence and digital technology products.</p>
                <p>We work as a company builder, combining the <strong style={{ color: 'var(--paper-ink)', fontWeight: 600 }}>capital discipline of a long-term holding-company strategy</strong> with the velocity of a product studio — developing products internally and scaling through operational leverage.</p>
                <p>What exists <strong style={{ color: 'var(--paper-ink)', fontWeight: 600 }}>today</strong> is real technology development and live and in-development products. What lies <strong style={{ color: 'var(--paper-ink)', fontWeight: 600 }}>ahead</strong> is a long-term vision across global technology, infrastructure, energy, and mobility — pursued deliberately, and clearly distinguished throughout this site.</p>
              </div>
              <p className="keystone-label keystone-company-meta">Founded 2026 · Incorporated in Delaware · Operating in the U.S.</p>
              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/about" style={{ ...mono({ color: 'var(--paper-ink)', fontSize: '0.66rem' }), textDecoration: 'none', borderBottom: '1px solid var(--paper-ink)', paddingBottom: 4 }}>About Tarvico →</Link>
              </div>
            </FadeUp>

            <FadeUp delay={120} style={{ display: 'flex', flexDirection: 'column' }}>
              {principles.map((p, i) => (
                <div key={p.t} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.4rem', padding: '1.6rem 0', borderTop: '1px solid var(--paper-line)' }}>
                  <span style={mono({ color: 'var(--paper-ink)', fontSize: '0.7rem', paddingTop: 4 })}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div style={{ fontFamily: DISPLAY, fontSize: '1.05rem', fontWeight: 700, color: 'var(--paper-ink)', letterSpacing: '-0.01em', marginBottom: '0.4rem' }}>{p.t}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>{p.d}</div>
                  </div>
                </div>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 06 · LEADERSHIP — EDITORIAL SERIF QUOTE (mineral) ──────────────── */}
      <section className="keystone-paper">
        <div className="mob-p" style={{ maxWidth: 940, margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="06" label="Leadership" onMineral />
            <blockquote style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 'clamp(1.7rem, 3.4vw, 2.9rem)', color: 'var(--paper-ink)', lineHeight: 1.26, letterSpacing: '-0.015em', marginBottom: '2.5rem', textWrap: 'balance' }}>
              <span style={{ fontStyle: 'italic', color: 'var(--paper-ink)' }}>“</span>The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life.<span style={{ fontStyle: 'italic', color: 'var(--paper-ink)' }}>”</span>
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <DimLine color="var(--paper-line)" flex={false} />
              <span style={mono({ color: 'var(--paper-muted)', fontSize: '0.64rem' })}>Jeff Yèmalín Bienvenu Honforloco — Founder &amp; CEO</span>
            </div>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <Link href="/founder" style={{ ...mono({ color: 'var(--paper-ink)', fontSize: '0.66rem' }), textDecoration: 'none', borderBottom: '1px solid var(--paper-ink)', paddingBottom: 4 }}>Founder Profile →</Link>
              <Link href="/vision" style={{ ...mono({ color: 'var(--paper-muted)', fontSize: '0.66rem' }), textDecoration: 'none', marginLeft: '1.5rem' }}>Read the Founder Letter →</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 03 · THREE PILLARS — CONNECTED SPATIAL (graphite + petroleum) ───── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', borderBottom: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="03" label="Strategic Direction" />
            <h2 className="editorial-display" style={{ ...H2, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', color: 'var(--text)', maxWidth: 640, marginBottom: '1.25rem' }}>Three connected pillars.</h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-2)', maxWidth: 620, lineHeight: 1.65, marginBottom: '3.5rem' }}>
              Corporate directions, not existing operating divisions. One is where we build today; two are long-term ambitions we are clear not to overstate.
            </p>
          </FadeUp>
          <div className="mob-stack pillar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, position: 'relative' }}>
            {PILLARS.map((p, i) => {
              const current = p.stance === 'current'
              const acc = current ? 'var(--text)' : 'var(--text-3)'
              return (
                <FadeUp key={p.id} delay={i * 90}>
                  <div style={{ padding: '2.5rem', height: '100%', borderLeft: i === 0 ? '1px solid var(--border-w)' : 'none', borderRight: '1px solid var(--border-w)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2rem' }}>
                      <span style={{ fontFamily: MONO, fontSize: '0.78rem', color: acc, fontWeight: 600 }}>P{i + 1}</span>
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: acc, boxShadow: current ? '0 0 0 4px var(--accent-soft)' : '0 0 0 4px var(--accent-soft)' }} />
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
      <section className="keystone-paper">
        <div className="mob-p" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="04" label="Evidence of Execution" onMineral />
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 650, fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', lineHeight: 1.04, letterSpacing: '-0.02em', color: 'var(--paper-ink)', maxWidth: 640, marginBottom: '1.25rem', textWrap: 'balance' }}>What exists today.</h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--paper-muted)', maxWidth: 600, lineHeight: 1.65, marginBottom: '3.5rem' }}>
              Verifiable progress, stated plainly. We do not publish customer counts, revenue, usage metrics, or uptime.
            </p>
          </FadeUp>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid var(--paper-line)' }}>
            {evidence.map((e, i) => (
              <FadeUp key={e.t} delay={i * 60}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.1rem', padding: '2rem 2rem 2rem 0', borderBottom: '1px solid var(--paper-line)', height: '100%' }}>
                  <span style={{ color: 'var(--paper-ink)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 700 }}>✓</span>
                  <div>
                    <div style={{ fontFamily: DISPLAY, fontSize: '1.05rem', color: 'var(--paper-ink)', marginBottom: '0.4rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{e.t}</div>
                    <p style={{ fontSize: '0.88rem', color: 'var(--paper-muted)', lineHeight: 1.6, marginBottom: e.href ? '0.75rem' : 0 }}>{e.d}</p>
                    {e.href && <a href={e.href} target="_blank" rel="noopener noreferrer" style={mono({ color: 'var(--paper-ink)', fontSize: '0.6rem', textDecoration: 'none' } as React.CSSProperties)}>{e.cta}</a>}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 · FAQ (graphite) ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 900, margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) max(1.5rem, 4vw)' }}>
          <FadeUp>
            <Eyebrow folio="07" label="Common Questions" />
            <h2 className="editorial-display" style={{ ...H2, fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--text)', marginBottom: '3rem' }}>What is <span className="editorial-emphasis">Tarvico?</span></h2>
            <div>
              {faqs.map((f, i) => (
                <div key={f.q} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.4rem', padding: '1.9rem 0', borderTop: '1px solid var(--border-w)' }}>
                  <span style={mono({ color: 'var(--text)', fontSize: '0.66rem', paddingTop: 6 })}>{String(i + 1).padStart(2, '0')}</span>
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
      <section className="keystone-dark">
        <div className="mob-p" style={{ position: 'relative', zIndex: 2, maxWidth: 820, margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) max(1.5rem, 4vw)', textAlign: 'center' }}>
          <FadeUp>
            <div style={{ display: 'inline-flex', marginBottom: '2rem' }}><span style={mono({ color: 'var(--text)', fontSize: '0.64rem' })}>Investors &amp; Partners</span></div>
            <h2 className="editorial-display" style={{ ...H2, fontSize: 'clamp(2.1rem, 4.4vw, 3.8rem)', color: 'var(--text)', maxWidth: 780, margin: '0 auto 1.5rem', lineHeight: 1.04 }}>
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
