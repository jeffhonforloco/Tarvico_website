'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

const links = [
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
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, close])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
    <nav className="mob-px" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 3rem 0 1.5rem',
      background: scrolled
        ? 'rgba(7,7,10,0.94)'
        : 'rgba(7,7,10,0.72)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled
        ? '1px solid rgba(255,255,255,0.07)'
        : '1px solid transparent',
      transition: 'background 0.4s ease, border-color 0.4s ease',
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Image
          src="/logo-transparent.png"
          alt="Tarvico Inc. — A Private Technology Holding Company"
          width={140}
          height={58}
          style={{ objectFit: 'contain', height: 42, width: 'auto' }}
          priority
        />
      </Link>

      <div className="hidden md:flex" style={{ gap: '2.75rem', alignItems: 'center' }}>
        {links.map(({ href, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: active ? 'var(--text)' : 'var(--text-2)',
                textDecoration: 'none',
                fontWeight: active ? 500 : 400,
                transition: 'color 0.2s',
                position: 'relative',
                paddingBottom: '2px',
              }}
            >
              {label}
              {active && (
                <span style={{
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'var(--gold)',
                }} />
              )}
            </Link>
          )
        })}
      </div>

      <Link
        href="/contact"
        className="hidden md:inline-flex"
        style={{
          fontSize: '0.65rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          border: '1px solid var(--gold-border)',
          color: 'var(--gold)',
          padding: '8px 20px',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--gold-glow)'
          e.currentTarget.style.borderColor = 'var(--gold)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'transparent'
          e.currentTarget.style.borderColor = 'var(--gold-border)'
        }}
      >
        Contact
      </Link>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden"
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-2)',
          cursor: 'pointer',
          fontSize: '1.2rem',
          padding: '4px',
          lineHeight: 1,
        }}
        aria-label="Toggle menu"
      >
        {open ? '✕' : '☰'}
      </button>

    </nav>

    {mounted && open && createPortal(
      <div style={{
        position: 'fixed',
        top: 80,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(7,7,10,0.98)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderTop: '1px solid var(--border-w)',
        padding: '3rem 3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        zIndex: 999,
      }}>
        {links.map(({ href, label }, i) => (
          <Link
            key={href}
            href={href}
            onClick={close}
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              color: pathname === href ? 'var(--text)' : 'var(--text-2)',
              textDecoration: 'none',
              padding: '0.9rem 0',
              borderBottom: '1px solid var(--border-w)',
              transition: 'color 0.2s',
              animationDelay: `${i * 60}ms`,
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={close}
          style={{
            marginTop: '2.5rem',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            textDecoration: 'none',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ display: 'block', width: 24, height: 1, background: 'var(--gold)' }} />
          Contact Tarvico
        </Link>
      </div>,
      document.body
    )}
    </>
  )
}
