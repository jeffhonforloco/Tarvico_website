import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'

// ─── Button ─────────────────────────────────────────────────────────────────

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  style?: CSSProperties
}

export function Button({ children, href, onClick, variant = 'secondary', style }: ButtonProps) {
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontSize: '0.72rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    padding: '14px 28px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 400,
    border: 'none',
    ...style,
  }

  const variants: Record<string, CSSProperties> = {
    primary: {
      background: 'var(--gold)',
      color: '#000',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-2)',
      border: '1px solid var(--gold-border)',
    },
  }

  const combined = { ...base, ...variants[variant] }

  if (href) {
    return <Link href={href} style={combined}>{children}</Link>
  }
  return <button onClick={onClick} style={combined}>{children}</button>
}

// ─── SectionLabel ────────────────────────────────────────────────────────────

export function SectionLabel({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'flex-start',
      gap: 12,
      fontSize: '0.62rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      marginBottom: '1.5rem',
    }}>
      <span style={{ display: 'block', width: 24, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
      {children}
      {center && <span style={{ display: 'block', width: 24, height: 1, background: 'var(--gold)', flexShrink: 0 }} />}
    </div>
  )
}

// ─── PageHero ────────────────────────────────────────────────────────────────

export function PageHero({
  label,
  title,
  subtitle,
}: {
  label: string
  title: ReactNode
  subtitle?: string
}) {
  return (
    <div style={{
      padding: '8rem 3rem 5rem',
      maxWidth: 1200,
      margin: '0 auto',
      borderBottom: '1px solid var(--border-w)',
    }}>
      <div style={{
        fontSize: '0.62rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--gold)',
        marginBottom: '1.5rem',
      }}>
        {label}
      </div>
      <h1 style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(3rem, 5vw, 5rem)',
        fontWeight: 300,
        lineHeight: 1.0,
        marginBottom: '1.5rem',
        color: 'var(--text)',
      }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{
          fontSize: '1rem',
          color: 'var(--text-2)',
          maxWidth: 520,
          lineHeight: 1.75,
          fontWeight: 300,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

// ─── Divider ─────────────────────────────────────────────────────────────────

export function Divider() {
  return (
    <div style={{
      height: 1,
      background: 'var(--border-w)',
      margin: '0 3rem',
    }} />
  )
}
