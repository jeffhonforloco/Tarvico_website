import { PageHero, SectionLabel, Divider } from '@/components/ui'

const values = [
  { n: '01', title: 'Ownership Mentality', desc: 'Every person at Tarvico operates like a founder. You own outcomes, not just tasks. Initiative is expected. Waiting for permission is not how we work.' },
  { n: '02', title: 'Ruthless Prioritization', desc: 'We focus on what compounds. The ability to identify high-leverage work and ignore everything else is one of the most valuable skills you can bring.' },
  { n: '03', title: 'AI as Superpower', desc: 'We expect everyone to build with AI. Not because it\'s trendy — because it makes you 10× more effective. We hire AI-native thinkers and builders.' },
  { n: '04', title: 'Speed with Quality', desc: 'Move fast, build well. We don\'t accept the false tradeoff between speed and quality. Elite teams do both — through better judgment and AI leverage.' },
  { n: '05', title: 'Curiosity over Credentials', desc: 'We care about what you\'ve built, how you think, and how quickly you learn. Background matters less than intellectual curiosity and proven execution.' },
  { n: '06', title: 'Long-Term Thinking', desc: 'We build for decades. If you\'re optimizing for short-term metrics at the expense of long-term value, Tarvico is not the right place. We think in compounding advantages.' },
]

const roles = [
  { title: 'Senior Full-Stack Engineer', team: 'Vytre AWOS', location: 'Remote', type: 'Full-Time' },
  { title: 'AI/ML Engineer — Agent Systems', team: 'Tarvico Core', location: 'Remote', type: 'Full-Time' },
  { title: 'Product Designer — Enterprise UX', team: 'Vytre AWOS', location: 'Remote', type: 'Full-Time' },
  { title: 'Head of Growth & Marketing', team: 'Tarvico Core', location: 'Remote', type: 'Full-Time' },
  { title: 'Enterprise Sales Lead', team: 'Vytre AWOS', location: 'Remote / US', type: 'Full-Time' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title={<>Build systems that<br />shape the future<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>of work.</em></>}
        subtitle="We hire exceptional people who think in systems, move with speed, and take genuine ownership of their work. Small teams. Big ambitions. AI-powered leverage."
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 3rem' }}>

        {/* Values */}
        <SectionLabel>Culture & Values</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5px', background: 'var(--border-w)', marginTop: '1.5rem', marginBottom: '5rem' }}>
          {values.map(v => (
            <div key={v.n} style={{ background: 'var(--bg)', padding: '2.5rem' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', fontWeight: 300, color: 'var(--text-3)', marginBottom: '1.25rem' }}>{v.n}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.6rem' }}>{v.title}</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        <Divider />

        {/* Open Roles */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Open Positions</SectionLabel>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 560, fontWeight: 300, marginBottom: '2.5rem', marginTop: '0.5rem' }}>
            We are a small team growing thoughtfully. Every hire shapes our culture and capabilities. We evaluate all applicants regardless of traditional background or location.
          </p>

          <div>
            {roles.map(r => (
              <div key={r.title} style={{
                border: '1px solid var(--border-w)',
                borderBottom: 'none',
                padding: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '2rem',
                transition: 'background 0.2s',
                cursor: 'pointer',
              }}
                   onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-raised)')}
                   onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                <div>
                  <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.3rem' }}>{r.title}</div>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.72rem', color: 'var(--text-2)' }}>
                    <span>{r.team}</span>
                    <span>·</span>
                    <span>{r.location}</span>
                  </div>
                </div>
                <span style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', border: '1px solid var(--border-w)', color: 'var(--text-3)', padding: '4px 10px', whiteSpace: 'nowrap' }}>
                  {r.type}
                </span>
              </div>
            ))}
            <div style={{ border: '1px solid var(--border-w)' }} />
          </div>

          <div style={{ marginTop: '2rem', padding: '2rem', border: '1px solid var(--border-w)', background: 'var(--bg-raised)' }}>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>
              Don't see the right role? We're always interested in exceptional people. Send your background and what you'd like to build to{' '}
              <a href="mailto:careers@tarvico.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>careers@tarvico.com</a>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
