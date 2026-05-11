'use client'

import { PageHero, SectionLabel, Divider } from '@/components/ui'

const values = [
  { n: '01', title: 'Ownership Mentality', desc: 'Every person at Tarvico operates like a founder. You own outcomes, not just tasks. Initiative is expected. Waiting for permission is not how we work.' },
  { n: '02', title: 'Ruthless Prioritization', desc: 'We focus on what compounds. The ability to identify high-leverage work and ignore everything else is one of the most valuable skills you can bring.' },
  { n: '03', title: 'AI as Superpower', desc: "We expect everyone to build with AI. Not because it's trendy — because it makes you 10× more effective. We hire AI-native thinkers and builders." },
  { n: '04', title: 'Speed with Quality', desc: "Move fast, build well. We don't accept the false tradeoff between speed and quality. Elite teams do both — through better judgment and AI leverage." },
  { n: '05', title: 'Curiosity over Credentials', desc: "We care about what you've built, how you think, and how quickly you learn. Background matters less than intellectual curiosity and proven execution." },
  { n: '06', title: 'Long-Term Thinking', desc: "We build for decades. If you're optimizing for short-term metrics at the expense of long-term value, Tarvico is not the right place. We think in compounding advantages." },
]

const roles = [
  { title: 'Senior Full-Stack Engineer', team: 'Vytre AWOS', location: 'Remote', type: 'Full-Time', priority: true },
  { title: 'AI/ML Engineer — Agent Systems', team: 'Tarvico Core', location: 'Remote', type: 'Full-Time', priority: true },
  { title: 'Product Designer — Enterprise UX', team: 'Vytre AWOS', location: 'Remote', type: 'Full-Time', priority: false },
  { title: 'Head of Growth & Marketing', team: 'Tarvico Core', location: 'Remote', type: 'Full-Time', priority: false },
  { title: 'Enterprise Sales Lead', team: 'Vytre AWOS', location: 'Remote / US', type: 'Full-Time', priority: false },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title={<>Build systems that<br />shape the future<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>of intelligent work.</em></>}
        subtitle="We hire exceptional people who think in systems, move with speed, and take genuine ownership of their work. Small teams. Massive ambitions. AI-powered leverage."
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border-w)', marginBottom: '2rem' }}>
          {[
            { n: '100%', l: 'Remote First' },
            { n: 'AI-Native', l: 'Operating Model' },
            { n: 'Elite', l: 'Team Density' },
          ].map(s => (
            <div key={s.n} style={{ background: 'var(--bg-card)', padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.4rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1, marginBottom: '0.5rem' }}>{s.n}</div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <Divider />

        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Culture & Values</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'var(--border-w)', marginTop: '1.5rem' }}>
            {values.map(v => (
              <div key={v.n} style={{
                background: 'var(--bg)', padding: '2.75rem',
                borderTop: '2px solid transparent', transition: 'background 0.25s, border-top-color 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderTopColor = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.borderTopColor = 'transparent' }}
              >
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3rem', fontWeight: 300, color: 'var(--text-3)', marginBottom: '1.5rem', lineHeight: 1 }}>{v.n}</div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text)', marginBottom: '0.65rem', fontWeight: 400 }}>{v.title}</div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Open Positions</SectionLabel>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 500, fontWeight: 300, marginBottom: '2rem', marginTop: '0.5rem' }}>
            We are a small team growing thoughtfully. Every hire shapes our culture and capabilities. We evaluate all applicants regardless of traditional background or location.
          </p>

          <div style={{ border: '1px solid var(--border-w)', overflow: 'hidden' }}>
            {roles.map((r, i) => (
              <div key={r.title} style={{
                padding: '1.75rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '2rem',
                borderBottom: i < roles.length - 1 ? '1px solid var(--border-w)' : 'none',
                background: 'transparent',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  {r.priority && (
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                      border: '1px solid var(--gold-border)', color: 'var(--gold)',
                      background: 'var(--gold-glow)', padding: '3px 8px', fontWeight: 500, whiteSpace: 'nowrap',
                    }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                      Priority
                    </span>
                  )}
                  <div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.25rem', fontWeight: 400 }}>{r.title}</div>
                    <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.72rem', color: 'var(--text-2)', fontWeight: 300 }}>
                      <span>{r.team}</span>
                      <span style={{ color: 'var(--text-3)' }}>·</span>
                      <span>{r.location}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', border: '1px solid var(--border-w)', color: 'var(--text-3)', padding: '4px 10px', whiteSpace: 'nowrap', fontWeight: 500 }}>
                    {r.type}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>→</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem', padding: '2rem', border: '1px solid var(--border-w)', background: 'var(--bg-card)' }}>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.75rem', fontWeight: 500 }}>General Applications</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300 }}>
              Don't see the right role? We're always interested in exceptional people. Send your background and what you'd like to build to{' '}
              <a href="mailto:careers@tarvico.com" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 400 }}>careers@tarvico.com</a>
            </p>
          </div>
        </div>

        <Divider />

        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Why Tarvico</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border-w)', marginTop: '1.5rem' }}>
            {[
              { t: 'Work on problems that matter', d: 'We build infrastructure for the intelligence economy — systems that will power how organizations work for the next decade. The problems are real, the stakes are high, the work is meaningful.' },
              { t: 'Operate with genuine autonomy', d: 'No bureaucracy. No process theater. You own your domain, make decisions with context, and move fast. We trust exceptional people to do exceptional things.' },
              { t: 'Build with the best tools', d: 'We are AI-native from day one. Every team member has access to the full stack of AI tools, infrastructure, and capability. Your leverage here is unlike anywhere else.' },
              { t: 'Shape a company from its foundation', d: 'Early employees at enduring companies become its institutional memory, culture carriers, and leadership. This is a rare opportunity to help build something that lasts.' },
            ].map(item => (
              <div key={item.t} style={{ background: 'var(--bg)', padding: '2.5rem', borderLeft: '2px solid var(--border-w)', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'var(--border-w)' }}
              >
                <div style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 400 }}>{item.t}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300 }}>{item.d}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
