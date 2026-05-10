import Link from 'next/link'

const cols = [
  {
    title: 'Company',
    links: [
      { href: '/about',    label: 'About' },
      { href: '/vision',   label: 'Founder Letter' },
      { href: '/newsroom', label: 'Newsroom' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { href: '/portfolio', label: 'All Companies' },
      { href: '/portfolio', label: 'Vytre AWOS' },
      { href: '/portfolio', label: 'SireIQ' },
    ],
  },
  {
    title: 'Investors',
    links: [
      { href: '/investors', label: 'Investor Relations' },
      { href: '/investors', label: 'Strategic Thesis' },
      { href: '/investors', label: 'Governance' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/careers', label: 'Careers' },
      { href: '/contact', label: 'Contact' },
      { href: 'mailto:investors@tarvico.com', label: 'investors@tarvico.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-w)',
      background: 'var(--bg-raised)',
      padding: '4rem 3rem 2.5rem',
    }}>
      {/* Top */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem',
      }}>
        {/* Brand */}
        <div style={{ gridColumn: 'span 2' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: '1rem',
          }}>
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M4 4L24 4L14 24L4 4Z" fill="none" stroke="#C9A447" strokeWidth="1" />
              <path d="M10 14L14 6L18 14" fill="#C9A447" opacity="0.9" />
            </svg>
            <span style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.1rem',
              letterSpacing: '0.25em',
              fontWeight: 400,
              color: 'var(--text)',
            }}>TARVICO</span>
          </div>
          <p style={{
            fontSize: '0.8rem',
            color: 'var(--text-2)',
            lineHeight: 1.7,
            maxWidth: 260,
            fontWeight: 300,
          }}>
            An AI-native holding company building, launching, and scaling the next generation of intelligent software companies.
          </p>
        </div>

        {cols.map(col => (
          <div key={col.title}>
            <div style={{
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-3)',
              marginBottom: '1rem',
            }}>
              {col.title}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {col.links.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-2)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    fontWeight: 300,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid var(--border-w)',
        paddingTop: '1.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-3)' }}>
          © {new Date().getFullYear()} Tarvico Inc. All rights reserved.
        </span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.1em' }}>
          Building the infrastructure layer for the AI era.
        </span>
      </div>
    </footer>
  )
}
