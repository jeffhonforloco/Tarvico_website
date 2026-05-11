'use client'

import Link from 'next/link'
import { CSSProperties, ReactNode, useState } from 'react'

// ─── Button ──────────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  style?: CSSProperties
  type?: 'button' | 'submit'
}

export function Button({ children, href, onClick, variant = 'secondary', style, type = 'button' }: ButtonProps) {
  const [hovered, setHovered] = useState(false)

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontSize: '0.68rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    padding: '13px 28px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.22s ease',
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 500,
    border: 'none',
    lineHeight: 1,
    ...style,
  }

  const variants: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: hovered ? 'var(--gold-light)' : 'var(--gold)',
      color: '#07070A',
      fontWeight: 600,
    },
    secondary: {
      background: hovered ? 'rgba(255,255,255,0.04)' : 'transparent',
      color: hovered ? 'var(--text)' : 'var(--text-2)',
      border: '1px solid var(--border-m)',
    },
    ghost: {
      background: 'transparent',
      color: hovered ? 'var(--gold)' : 'var(--text-2)',
      border: '1px solid transparent',
      padding: '13px 0',
    },
  }

  const combined = { ...base, ...variants[variant] }

  if (href) {
    return (
      <Link
        href={href}
        style={combined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={combined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────

export function SectionLabel({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'flex-start',
      gap: 10,
      fontSize: '0.58rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      marginBottom: '1.75rem',
      fontWeight: 500,
    }}>
      <span style={{ display: 'block', width: 20, height: 1, background: 'var(--gold)', flexShrink: 0 }} />
      {children}
      {center && <span style={{ display: 'block', width: 20, height: 1, background: 'var(--gold)', flexShrink: 0 }} />}
    </div>
  )
}

// ─── PageHero ─────────────────────────────────────────────────────────────────

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
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-w)',
    }}>
      <div className="hero-grid" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 70% 70% at 50% 100%, transparent 50%, var(--bg) 100%)',
      }} />
      <div className="mob-px" style={{
        position: 'relative',
        zIndex: 2,
        padding: '9rem 3rem 6rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: '0.58rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: '2rem',
          fontWeight: 500,
        }}>
          <span style={{ display: 'block', width: 20, height: 1, background: 'var(--gold)' }} />
          {label}
        </div>
        <h1 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(3.2rem, 6vw, 6rem)',
          fontWeight: 400,
          lineHeight: 1.0,
          marginBottom: '2rem',
          color: 'var(--text)',
          letterSpacing: '-0.01em',
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-2)',
            maxWidth: 520,
            lineHeight: 1.85,
            fontWeight: 300,
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

// ─── Divider ──────────────────────────────────────────────────────────────────

export function Divider({ label }: { label?: string } = {}) {
  if (label) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        margin: '0 3rem',
      }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border-w)' }} />
        <span style={{ fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 500 }}>
          {label}
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border-w)' }} />
      </div>
    )
  }
  return (
    <div style={{ height: 1, background: 'var(--border-w)', margin: '0 3rem' }} />
  )
}

// ─── StatusBadge ──────────────────────────────────────────────────────────────

type StatusType = 'flagship' | 'active' | 'incubation' | 'stealth' | 'affiliated'

const statusConfig: Record<StatusType, { label: string; color: string; border: string; bg: string; dot?: string }> = {
  flagship:   { label: 'Flagship',    color: 'var(--gold)',    border: 'var(--gold-border)',    bg: 'var(--gold-glow)',    dot: 'var(--gold)' },
  active:     { label: 'Active',      color: 'var(--emerald)', border: 'var(--emerald-border)', bg: 'var(--emerald-glow)', dot: 'var(--emerald)' },
  incubation: { label: 'Incubation',  color: 'var(--gold-dim)', border: 'rgba(201,164,71,0.15)', bg: 'transparent' },
  stealth:    { label: 'Stealth',     color: 'var(--text-3)',  border: 'var(--border-w)',       bg: 'transparent' },
  affiliated: { label: 'Affiliated',  color: 'var(--blue)',    border: 'var(--blue-border)',    bg: 'var(--blue-glow)' },
}

export function StatusBadge({ status, custom }: { status: StatusType; custom?: string }) {
  const cfg = statusConfig[status]
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: '0.56rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      border: `1px solid ${cfg.border}`,
      color: cfg.color,
      background: cfg.bg,
      padding: '4px 10px',
      whiteSpace: 'nowrap',
      fontWeight: 500,
    }}>
      {cfg.dot && (
        <span style={{
          display: 'inline-block',
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: cfg.dot,
          flexShrink: 0,
        }} />
      )}
      {custom ?? cfg.label}
    </span>
  )
}

// ─── MetricCard ───────────────────────────────────────────────────────────────

export function MetricCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div style={{
      padding: '2.5rem',
      border: '1px solid var(--border-w)',
      background: 'var(--bg-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}>
      <div style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
        fontWeight: 400,
        color: 'var(--text)',
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '0.62rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-2)',
        fontWeight: 500,
      }}>
        {label}
      </div>
      {sub && (
        <div style={{ fontSize: '0.72rem', color: 'var(--text-3)', fontWeight: 300 }}>{sub}</div>
      )}
    </div>
  )
}
