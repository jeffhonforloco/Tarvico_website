'use client'

import Link from 'next/link'
import { Button, SectionLabel, Divider, FadeUp, MaturityTag } from '@/components/ui'
import { featuredBusinesses, PILLARS, IDENTITY } from '@/lib/businesses'

const S = {
  section: {
    padding: '8rem 3rem',
    maxWidth: 1200,
    margin: '0 auto',
  } as React.CSSProperties,
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
    fontWeight: 700,
    lineHeight: 1.04,
    color: 'var(--text)',
    letterSpacing: '-0.035em',
    marginBottom: '1.5rem',
  } as React.CSSProperties,
  sub: {
    fontSize: '1.05rem',
    color: 'var(--text-2)',
    lineHeight: 1.7,
    fontWeight: 400,
  } as React.CSSProperties,
}

const featured = featuredBusinesses()

// Verifiable execution signals only — no invented customers, revenue, metrics, or uptime.
const evidence = [
  { t: 'SireIQ is publicly available', d: 'A live, usable AI assistant for chat, content, and workflow.', href: 'https://sireiq.com', cta: 'sireiq.com ↗' },
  { t: 'Vytre AWOS — public beta', d: 'The AI Workforce Operating System is in public beta.', href: 'https://www.vytre.com', cta: 'vytre.com ↗' },
  { t: 'Vytre Core — open model', d: 'A workforce-operations model published openly on Hugging Face.', href: 'https://huggingface.co/tarvico/vytre_core', cta: 'View on Hugging Face ↗' },
  { t: 'Member, NVIDIA Developer Program', d: 'Participation in NVIDIA’s developer program. Not an investment, endorsement, or partnership.', href: undefined, cta: undefined },
]

const faqLink: React.CSSProperties = { color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: 'What is Tarvico Inc.?',
    a: <>Tarvico Inc. is a privately held U.S. technology company, incorporated in Delaware, that builds and operates AI, digital platforms, and emerging technology products. It builds long-term businesses that solve foundational problems, with a long-term vision spanning global technology, mobility, infrastructure, and energy. <Link href="/about" style={faqLink}>About Tarvico →</Link></>,
  },
  {
    q: 'Who founded Tarvico?',
    a: <>Tarvico was founded by Jeff Yèmalín Bienvenu Honforloco (Jeff Hon), who serves as Founder & CEO. A self-taught builder and former professional photographer, he leads vision, strategy, and product across the company. <Link href="/founder" style={faqLink}>Founder profile →</Link></>,
  },
  {
    q: 'What products does Tarvico build?',
    a: <>Tarvico’s featured products are <Link href="/vytre" style={faqLink}>Vytre AWOS</Link> (an AI Workforce Operating System, in public beta), SireIQ (a publicly available AI assistant), and <Link href="/maeyen" style={faqLink}>Maeyen</Link> (commerce trust infrastructure, in development). <Link href="/products" style={faqLink}>Products →</Link></>,
  },
  {
    q: 'What is Vytre AWOS?',
    a: <>Vytre AWOS is Tarvico’s flagship product — an AI Workforce Operating System that gives enterprises a single control plane to deploy, coordinate, observe, and govern AI workers. It is currently in public beta. <Link href="/vytre" style={faqLink}>Learn about Vytre →</Link></>,
  },
  {
    q: 'What is Maeyen?',
    a: <>Maeyen is a commerce trust network for Africa, starting from Nigeria, in development. By verifying participants and protecting transactions, it aims to let buyers and sellers transact online with confidence. <Link href="/maeyen" style={faqLink}>Learn about Maeyen →</Link></>,
  },
  {
    q: 'What is Tarvico’s long-term strategy?',
    a: <>Founded in the United States and operating from the U.S. today, Tarvico plans to expand internationally over time — including African markets — and holds long-term ambitions across AI, computing infrastructure, data centers, sustainable energy, and intelligent mobility. These are future directions, not current operations. <Link href="/investors" style={faqLink}>Investor relations →</Link></>,
  },
]

const pillarStance = (stance: 'current' | 'long-term') =>
  stance === 'current' ? 'Building today' : 'Long-Term Vision'

export default function HomePage() {
  return (
    <>
      {/* ── 1 · HERO — CORPORATE IDENTITY ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0 }} />
        <div className="hero-grid-fine" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, var(--bg) 80%)',
        }} />
        <div className="animate-pulse-slow" style={{
          position: 'absolute',
          top: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1000,
          height: 1000,
          background: 'radial-gradient(circle, rgba(205,169,75,0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div className="mob-px" style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 3rem', width: '100%' }}>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="animate-fade-up delay-100" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: '0.72rem',
                letterSpacing: '0.02em',
                color: 'var(--text-2)',
                marginBottom: '2.25rem',
                fontWeight: 500,
                padding: '7px 14px 7px 10px',
                border: '1px solid var(--border-m)',
                borderRadius: 999,
                background: 'var(--bg-card)',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} className="animate-pulse-gold" />
                Tarvico Inc. — U.S. Private Technology Company
              </div>

              <h1 className="animate-rise delay-250" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 700,
                color: 'var(--text)',
                maxWidth: 940,
                lineHeight: 1.03,
                letterSpacing: '-0.04em',
                marginBottom: '1.75rem',
              }}>
                Building Technology<br />
                for a <span className="text-gradient-gold">Connected World</span>.
              </h1>

              <p className="animate-fade-up delay-400" style={{
                fontSize: '1.18rem',
                color: 'var(--text-2)',
                maxWidth: 560,
                lineHeight: 1.65,
                marginBottom: '2.75rem',
                fontWeight: 400,
              }}>
                Tarvico Inc. is a privately held U.S. technology company building artificial intelligence, digital platforms, and emerging technology businesses — with a long-term vision spanning global technology, intelligent mobility, computing infrastructure, and sustainable energy.
              </p>

              <div className="animate-fade-up delay-550" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Button href="/portfolio" variant="primary">Our Businesses →</Button>
                <Button href="/investors" variant="secondary">Investor Relations</Button>
              </div>
            </div>

            <div className="animate-fade-up delay-700 mob-hide" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              minWidth: 210,
            }}>
              {[
                { v: 'Delaware, USA', l: 'Incorporated' },
                { v: '2026', l: 'Founded' },
                { v: 'United States', l: 'Operating today' },
              ].map(s => (
                <div key={s.l} style={{
                  padding: '1.5rem 1.75rem',
                  border: '1px solid var(--border-w)',
                  borderRadius: 'var(--radius)',
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                  }}>
                    {s.v}
                  </div>
                  <div style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--text-3)',
                    marginTop: 8,
                    fontWeight: 600,
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          zIndex: 2,
        }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--gold), transparent)' }} className="animate-scroll-line" />
          <span style={{ fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 600 }}>Scroll</span>
        </div>
      </section>

      <Divider />

      {/* ── 2 · WHAT WE DO ──────────────────────────────────────────────────── */}
      <div className="mob-p" style={S.section}>
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: '6rem', alignItems: 'start' }}>
          <FadeUp>
            <SectionLabel>What We Do</SectionLabel>
            <h2 style={{ ...S.h2, maxWidth: 600 }}>
              A U.S. technology company, <span className="text-gradient-gold">building for the long term.</span>
            </h2>
            <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
              Tarvico Inc. is a <strong style={{ color: 'var(--text)', fontWeight: 600 }}>privately held U.S. technology company</strong>, incorporated in Delaware and operating from the United States. We design, build, and operate artificial intelligence and digital technology products.
            </p>
            <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
              We work as a company builder, combining the <strong style={{ color: 'var(--text)', fontWeight: 600 }}>capital discipline of a long-term holding-company strategy</strong> with the velocity of a product studio — developing products internally and scaling through operational leverage.
            </p>
            <p style={{ ...S.sub, marginBottom: '2.5rem' }}>
              What exists <strong style={{ color: 'var(--text)', fontWeight: 600 }}>today</strong> is real technology development and live and in-development products. What lies <strong style={{ color: 'var(--text)', fontWeight: 600 }}>ahead</strong> is a long-term vision across global technology, infrastructure, energy, and mobility — pursued deliberately, and clearly distinguished throughout this site.
            </p>
            <Button href="/about" variant="secondary">About Tarvico →</Button>
          </FadeUp>

          <FadeUp delay={150} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { t: 'Build internally', d: 'Products are developed in-house, validated with rigor, and shipped when ready — not announced before they exist.' },
              { t: 'Intelligence-first', d: 'AI is the operating layer of the products we build, not a feature bolted on afterward.' },
              { t: 'Long-term capital strategy', d: 'We build for the long term — patient ownership and focused reinvestment over short-term optics.' },
              { t: 'Operational leverage', d: 'Small, capable teams with technological leverage, building more with less.' },
            ].map(p => (
              <div key={p.t} style={{
                padding: '1.5rem 1.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-w)',
                borderLeftWidth: 2,
                borderLeftColor: 'var(--gold-border)',
                borderRadius: 'var(--radius)',
                transition: 'border-color 0.3s, background 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--gold)'; e.currentTarget.style.background = 'var(--bg-raised)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'var(--gold-border)'; e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                <div style={{ fontSize: '0.98rem', color: 'var(--text)', marginBottom: '0.4rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{p.t}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 400 }}>{p.d}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </div>

      <Divider />

      {/* ── 3 · SELECTED BUSINESSES ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', borderBottom: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '8rem 3rem' }}>
          <FadeUp>
            <SectionLabel>Selected Businesses</SectionLabel>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
              <h2 style={{ ...S.h2, marginBottom: 0, maxWidth: 620 }}>Products we build and operate.</h2>
              <Button href="/portfolio" variant="ghost">All businesses →</Button>
            </div>
          </FadeUp>

          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {featured.map((b, i) => {
              const href = b.internal ?? b.url ?? '/portfolio'
              const external = !b.internal && !!b.url
              const card = (
                <div style={{
                  background: 'var(--bg-card)', padding: '2.25rem', display: 'flex', flexDirection: 'column', height: '100%',
                  border: '1px solid var(--border-w)', borderTop: '2px solid var(--gold-border)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.1rem', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em' }}>{b.name}</div>
                    <MaturityTag tier={b.maturity} />
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '1.75rem', fontWeight: 400, flex: 1 }}>{b.tagline}</p>
                  <div style={{ borderTop: '1px solid var(--border-w)', paddingTop: '1.1rem', fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>
                    {b.internal ? 'Overview →' : 'Visit ↗'}
                  </div>
                </div>
              )
              return external ? (
                <FadeUp key={b.name} delay={i * 70}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="card-lift" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>{card}</a>
                </FadeUp>
              ) : (
                <FadeUp key={b.name} delay={i * 70}>
                  <Link href={href} className="card-lift" style={{ textDecoration: 'none', display: 'block', height: '100%' }}>{card}</Link>
                </FadeUp>
              )
            })}
          </div>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', lineHeight: 1.6, marginTop: '1.5rem', maxWidth: 640, fontWeight: 300 }}>
            Maturity labels reflect each product’s current stage. Tarvico features a selective set of businesses; additional products are listed on the businesses page.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── 4 · STRATEGIC DIRECTION — THREE PILLARS ─────────────────────────── */}
      <div className="mob-p" style={S.section}>
        <FadeUp>
          <SectionLabel>Strategic Direction</SectionLabel>
          <h2 style={{ ...S.h2, maxWidth: 680 }}>Three connected pillars.</h2>
          <p style={{ ...S.sub, maxWidth: 620, marginBottom: '3.5rem' }}>
            Corporate directions, not existing operating divisions. One is where we build today; two are long-term ambitions we are clear not to overstate.
          </p>
        </FadeUp>
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
          {PILLARS.map((p, i) => (
            <FadeUp key={p.id} delay={i * 70}>
              <div className="card-lift" style={{
                padding: '2.5rem', background: 'var(--bg-card)', height: '100%',
                border: '1px solid var(--border-w)',
                borderTop: `2px solid ${p.stance === 'current' ? 'var(--gold)' : 'var(--blue-border)'}`,
                borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
                display: 'flex', flexDirection: 'column',
              }}>
                <span style={{
                  alignSelf: 'flex-start',
                  fontSize: '0.54rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600,
                  color: p.stance === 'current' ? 'var(--gold)' : 'var(--blue)',
                  border: `1px solid ${p.stance === 'current' ? 'var(--gold-border)' : 'var(--blue-border)'}`,
                  background: p.stance === 'current' ? 'var(--gold-glow)' : 'var(--blue-glow)',
                  padding: '4px 11px', borderRadius: 999, marginBottom: '1.5rem',
                }}>{pillarStance(p.stance)}</span>
                <div style={{ fontSize: '1.05rem', color: 'var(--text)', marginBottom: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>{p.title}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400 }}>{p.summary}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <Divider />

      {/* ── 5 · EVIDENCE OF EXECUTION ───────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', borderBottom: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '8rem 3rem' }}>
          <FadeUp>
            <SectionLabel>Evidence of Execution</SectionLabel>
            <h2 style={{ ...S.h2, maxWidth: 640 }}>What exists today.</h2>
            <p style={{ ...S.sub, maxWidth: 600, marginBottom: '3.5rem' }}>
              Verifiable progress, stated plainly. We do not publish customer counts, revenue, usage metrics, or uptime.
            </p>
          </FadeUp>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {evidence.map((e, i) => (
              <FadeUp key={e.t} delay={i * 60}>
                <div style={{ display: 'flex', gap: '1rem', padding: '1.9rem 2rem', background: 'var(--bg-card)', border: '1px solid var(--border-w)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
                  <span style={{ color: 'var(--emerald)', fontSize: '1rem', flexShrink: 0, lineHeight: 1.4 }}>◆</span>
                  <div>
                    <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.4rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{e.t}</div>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 400, marginBottom: e.href ? '0.75rem' : 0 }}>{e.d}</p>
                    {e.href && (
                      <a href={e.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.68rem', letterSpacing: '0.06em', color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>{e.cta}</a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 6 · LONG-TERM VISION ────────────────────────────────────────────── */}
      <div className="mob-p" style={S.section}>
        <FadeUp style={{ maxWidth: 820 }}>
          <SectionLabel>Long-Term Vision</SectionLabel>
          <h2 style={{ ...S.h2 }}>
            Founded in the U.S. <span className="text-gradient-gold">Building for the world.</span>
          </h2>
          <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
            Tarvico operates from the United States today. Over the long term, we intend to expand internationally — with African markets, and Nigeria as a proposed first location, part of that future strategy — supported by growing technology, research, and engineering capabilities.
          </p>
          <p style={{ ...S.sub, marginBottom: '2.5rem' }}>
            Our longer-range ambitions include company-owned computing infrastructure, AI data centers, and sustainable energy, and the application of our technology to intelligent mobility. These are future directions — subject to funding, feasibility, and execution — and not existing operations, offices, or facilities.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Button href="/investors" variant="secondary">Investor Relations →</Button>
            <Button href="/vision" variant="ghost">Read the Founder Letter</Button>
          </div>
        </FadeUp>
      </div>

      <Divider />

      {/* ── 7 · LEADERSHIP ──────────────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--border-w)' }}>
        <FadeUp style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', padding: '9rem 3rem' }}>
          <SectionLabel center>Leadership</SectionLabel>
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.7rem, 3.2vw, 2.7rem)',
            fontWeight: 600,
            color: 'var(--text)',
            lineHeight: 1.3,
            marginBottom: '3rem',
            letterSpacing: '-0.025em',
          }}>
            &ldquo;The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life.&rdquo;
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
            <span style={{ display: 'block', flex: 1, maxWidth: 48, height: 1, background: 'var(--border-m)' }} />
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-2)', fontWeight: 600 }}>Jeff Yèmalín Bienvenu Honforloco — Founder &amp; CEO</span>
            <span style={{ display: 'block', flex: 1, maxWidth: 48, height: 1, background: 'var(--border-m)' }} />
          </div>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/founder" variant="secondary">Founder Profile →</Button>
            <Button href="/vision" variant="ghost">Read the Founder Letter</Button>
          </div>
        </FadeUp>
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={S.section}>
          <FadeUp style={{ maxWidth: 860, margin: '0 auto' }}>
            <SectionLabel center>Common Questions</SectionLabel>
            <h2 style={{ ...S.h2, textAlign: 'center', marginBottom: '3.5rem' }}>
              What is <span className="text-gradient-gold">Tarvico?</span>
            </h2>
            <div>
              {faqs.map((f, i) => (
                <div key={f.q} style={{ padding: '1.9rem 0', borderTop: i === 0 ? 'none' : '1px solid var(--border-w)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>{f.q}</h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 400 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── 8 · INVESTORS & PARTNERS ────────────────────────────────────────── */}
      <div style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', textAlign: 'center', padding: '8rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, var(--bg-raised) 80%)' }} />
        <FadeUp style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '2.5rem', fontWeight: 600 }}>Investors &amp; Partners</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
            fontWeight: 700,
            color: 'var(--text)',
            maxWidth: 780,
            margin: '0 auto 1.25rem',
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
          }}>
            Building a U.S. technology company for the long term.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', maxWidth: 520, margin: '0 auto 3rem', lineHeight: 1.65, fontWeight: 400 }}>
            We welcome conversations with aligned investors and strategic partners. For company information and inquiries, reach the team directly.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/investors" variant="primary">Investor Relations →</Button>
            <Button href="/contact" variant="secondary">Contact</Button>
          </div>
        </FadeUp>
      </div>
    </>
  )
}
