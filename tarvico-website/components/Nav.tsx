'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/',           label: 'Home' },
  { href: '/portfolio',  label: 'Portfolio' },
  { href: '/about',      label: 'About' },
  { href: '/investors',  label: 'Investors' },
  { href: '/vision',     label: 'Vision' },
  { href: '/careers',    label: 'Careers' },
  { href: '/newsroom',   label: 'Newsroom' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        background: scrolled
          ? 'rgba(7,7,7,0.96)'
          : 'rgba(7,7,7,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--gold-border)',
        transition: 'background 0.3s',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 4L24 4L14 24L4 4Z" fill="none" stroke="#C9A447" strokeWidth="1" />
          <path d="M10 14L14 6L18 14" fill="#C9A447" opacity="0.9" />
        </svg>
        <span style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '1.2rem',
          letterSpacing: '0.25em',
          fontWeight: 400,
          color: 'var(--text)',
        }}>TARVICO</span>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
           className="hidden md:flex">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: pathname === href ? 'var(--text)' : 'var(--text-2)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        style={{
          fontSize: '0.68rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          border: '1px solid var(--gold-border)',
          color: 'var(--gold)',
          padding: '7px 18px',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
        className="hidden md:inline-flex hover:bg-gold/10 hover:border-gold"
      >
        Contact
      </Link>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden"
        style={{ background: 'none', border: 'none', color: 'var(--text-2)', cursor: 'pointer', fontSize: '1.4rem' }}
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          background: 'rgba(7,7,7,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--gold-border)',
          padding: '1.5rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: '0.88rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: pathname === href ? 'var(--text)' : 'var(--text-2)',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginTop: '0.5rem',
              textDecoration: 'none',
            }}
          >
            Contact →
          </Link>
        </div>
      )}
    </nav>
  )
}
