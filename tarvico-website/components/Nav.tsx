'use client'

import Link from 'next/link'
import Image from 'next/image'
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
          ? 'rgba(250,250,248,0.98)'
          : 'rgba(250,250,248,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-w)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image
          src="/logo-name.png"
          alt="Tarvico"
          width={220}
          height={60}
          style={{ objectFit: 'contain', height: 46, width: 'auto' }}
          priority
        />
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
              fontWeight: pathname === href ? 500 : 400,
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
          fontWeight: 500,
        }}
        className="hidden md:inline-flex"
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
          background: 'rgba(250,250,248,0.99)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-w)',
          padding: '1.5rem 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
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
                fontWeight: pathname === href ? 500 : 400,
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
              fontWeight: 500,
            }}
          >
            Contact →
          </Link>
        </div>
      )}
    </nav>
  )
}
