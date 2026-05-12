'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const cols = [
  {
    title: 'Company',
    links: [
      { href: '/about',    label: 'About Tarvico' },
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
      { href: '/careers',                       label: 'Careers' },
      { href: '/contact',                       label: 'Contact' },
      { href: 'mailto:investors@tarvico.com',   label: 'investors@tarvico.com' },
    ],
  },
]

export default function Footer() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const el = document.documentElement
    const sync = () => setTheme((el.getAttribute('data-theme') as 'dark' | 'light') || 'dark')
    sync()
    const observer = new MutationObserver(sync)
    observer.observe(el, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  return (
    <footer style={{
      background: 'var(--bg-raised)',
      borderTop: '1px solid var(--border-w)',
    }}>
      <div className="mob-px" style={{ padding: '5rem 3rem 0' }}>
        <div className="mob-stack" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          <div>
            <div style={{ marginBottom: '0.25rem' }}>
              <Image
                src={theme === 'light' ? '/logo-dark.png' : '/logo-transparent.png'}
                alt="Tarvico"
                width={160}
                height={66}
                style={{ objectFit: 'contain', display: 'block' }}
              />
            </div>
            <p style={{
              fontSize: '0.82rem',
              color: 'var(--text-2)',
              lineHeight: 1.75,
              maxWidth: 260,
              fontWeight: 300,
              marginBottom: '1.75rem',
            }}>
              A Private Technology Holding Company. Tarvico builds, acquires, and operates enduring AI-native technology ventures for the next global economy.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              border: '1px solid var(--emerald-border)',
              background: 'var(--emerald-glow)',
            }}>
              <span style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--emerald)',
                flexShrink: 0,
              }} className="animate-pulse-dot" />
              <span style={{
                fontSize: '0.58rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--emerald)',
                fontWeight: 500,
              }}>
                All Systems Operational
              </span>
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: '0.58rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-3)',
                marginBottom: '1.25rem',
                fontWeight: 500,
              }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {col.links.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-2)',
                      textDecoration: 'none',
                      fontWeight: 300,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mob-px" style={{
        borderTop: '1px solid var(--border-w)',
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-3)', fontWeight: 300 }}>
          © {new Date().getFullYear()} Tarvico Inc. — Delaware, United States. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {[{ label: 'Privacy', href: '/privacy' }, { label: 'Terms', href: '/terms' }, { label: 'Legal', href: '/legal' }].map(item => (
            <Link
              key={item.label}
              href={item.href}
              style={{ fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.1em', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-3)' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
