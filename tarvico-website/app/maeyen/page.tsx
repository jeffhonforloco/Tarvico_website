import { PageHero, SectionLabel, Divider, Button } from '@/components/ui'

const pillars = [
  { t: 'Verified participants', d: 'Verify who is buying and selling before money moves.' },
  { t: 'Protected transactions', d: 'Protect both sides while the transaction is completed.' },
  { t: 'Earned reputation', d: 'Build reputation from real, completed transactions — a durable trust signal rather than appearances.' },
]

const roadmap = [
  { phase: 'Now', title: 'Building in Nigeria', desc: 'Developing verification and transaction protection for the first market.' },
  { phase: 'Next', title: 'Trusted commerce', desc: 'A place where buyers and sellers in Nigeria can transact with confidence, backed by verified reputation.' },
  { phase: 'Then', title: 'Across Africa', desc: 'Extend the trust network to more markets, making verified commerce the default rather than the exception.' },
]

export default function MaeyenPage() {
  return (
    <>
      <PageHero
        label="In development"
        title={<><span className="editorial-emphasis">Maeyen</span></>}
        subtitle="Maeyen is developing seller verification and transaction protection for online commerce in Africa, starting from Nigeria."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1640, margin: '0 auto', padding: '7rem 3rem' }}>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          <Button href="https://www.maeyen.com" variant="primary">Visit maeyen.com ↗</Button>
          <Button href="/contact" variant="secondary">Get in Touch</Button>
        </div>

        {/* Problem */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 220px) minmax(0, 1fr)', gap: '3rem', marginBottom: '5rem' }}>
          <SectionLabel>Why trust matters</SectionLabel>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Across much of Africa, the single biggest barrier to online commerce is not payments or logistics — it is trust. Buyers hesitate to pay people they cannot verify, and sellers cannot prove they are legitimate. Every transaction carries the risk that the other side will not hold up their end.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>
              That missing trust suppresses enormous economic activity. Markets exist, demand exists — but the confidence to transact with strangers online does not.
            </p>
          </div>
        </div>

        <Divider />

        {/* Solution */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 220px) minmax(0, 1fr)', gap: '3rem', margin: '5rem 0' }}>
          <SectionLabel>How it would work</SectionLabel>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Maeyen is designed to help buyers and sellers verify who they are dealing with and complete protected transactions. The following steps describe the proposed workflow.
            </p>
            <ol className="maeyen-pillars" aria-label="Proposed transaction steps">
              {pillars.map(p => (
                <li key={p.t} style={{
                  border: '1px solid var(--border-w)',
                  borderLeftWidth: 2,
                  borderLeftColor: 'var(--accent-line)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem 1.7rem',
                  background: 'var(--bg-card)',
                }}>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.4rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{p.t}</div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Divider />

        {/* Vision */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 220px) minmax(0, 1fr)', gap: '3rem', margin: '5rem 0' }}>
          <SectionLabel>The Vision</SectionLabel>
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 2.6vw, 2.1rem)',
            fontWeight: 600,
            lineHeight: 1.4,
            color: 'var(--text)',
            maxWidth: 780,
            borderLeft: '3px solid var(--text)',
            paddingLeft: '2.25rem',
            letterSpacing: '-0.02em',
          }}>
            &ldquo;When trust is built into commerce, entire economies open up. Maeyen exists to make verified, protected trade the default across Africa — starting with a single market and the people ready to build on it.&rdquo;
          </blockquote>
        </div>

        <Divider />

        {/* Stage + Roadmap */}
        <div style={{ margin: '5rem 0 0' }}>
          <SectionLabel>Current Stage &amp; Roadmap</SectionLabel>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, margin: '2rem 0 2.5rem', border: '1px solid var(--accent-line)', color: 'var(--text)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '6px 14px', fontWeight: 600, background: 'var(--accent-soft)', borderRadius: 999 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--text)' }} />
            Building · Nigeria first
          </div>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {roadmap.map(r => (
              <div key={r.phase} style={{ border: '1px solid var(--border-w)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-card)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 600, marginBottom: '1rem' }}>{r.phase}</div>
                <div style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>{r.title}</div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
