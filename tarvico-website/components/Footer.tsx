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
                src={theme === 'light' ? '/logo-black-wordmark.png' : '/logo-white-wordmark.png'}
                alt="Tarvico"
                width={160}
                height={66}
                style={{ objectFit: 'contain', display: 'block', height: 127 }}
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
              borderRadius: 999,
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

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
              {[
                { href: 'https://www.facebook.com/tarvicoinc', label: 'Facebook', svg: 'M24 12.073C24 5.41 18.627 0 12 0S0 5.41 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z' },
                { href: 'https://www.instagram.com/tarvicoinc', label: 'Instagram', svg: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { href: 'https://www.tiktok.com/@tarvicoinc', label: 'TikTok', svg: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
                { href: 'https://x.com/tarvicoinc', label: 'X', svg: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    border: '1px solid var(--border-m)',
                    color: 'var(--text-3)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold-border)'
                    e.currentTarget.style.color = 'var(--gold)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-m)'
                    e.currentTarget.style.color = 'var(--text-3)'
                  }}
                >
                  <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" aria-hidden="true">
                    <path d={svg} />
                  </svg>
                </a>
              ))}
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
