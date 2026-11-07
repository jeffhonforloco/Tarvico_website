'use client'

import Link from 'next/link'
import { CSSProperties, ReactNode, useState, useEffect, useRef } from 'react'
import type { MaturityTier } from '@/lib/businesses'

// ─── FadeUp — scroll-triggered reveal ────────────────────────────────────────

export function FadeUp({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${className ?? ''} ${visible ? 'keystone-reveal' : ''}`} style={{ ...style, animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

// ─── Button ──────────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: ButtonVariant
  style?: CSSProperties
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({ children, href, onClick, variant = 'secondary', style, type = 'button', disabled }: ButtonProps) {
  const className = `keystone-button keystone-button--${variant}`

  if (href) return <Link href={href} className={className} style={style}>{children}</Link>

  return <button type={type} onClick={onClick} disabled={disabled} className={className} style={style}>{children}</button>
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────

export function SectionLabel({ children, center }: { children: ReactNode; center?: boolean }) {
  const dim = <span aria-hidden style={{ display: 'inline-flex', alignItems: 'center', flex: center ? 'none' : 1, minWidth: 28, width: center ? 28 : undefined }}>
    <span style={{ width: 1, height: 6, background: 'var(--accent-line)' }} />
    <span style={{ flex: 1, height: 1, background: 'var(--accent-line)' }} />
    <span style={{ width: 1, height: 6, background: 'var(--accent-line)' }} />
  </span>
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'start',
      justifyContent: center ? 'center' : 'flex-start',
      gap: '1rem',
      fontFamily: 'var(--font-body)',
      fontSize: '0.64rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text)',
      marginBottom: '1.75rem',
      fontWeight: 500,
    }}>
      {center && dim}
      {children}
      {dim}
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
    <header className="page-masthead">
      <div className="keystone-shell">
        <p className="keystone-label">{label}</p>
        <h1>{title}</h1>
        {subtitle && <p className="page-masthead-summary">{subtitle}</p>}
      </div>
    </header>
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

const maturityLabels: Record<MaturityTier, string> = {
  operational: 'Operational',
  'public-beta': 'Public beta',
  'in-development': 'In development',
  'long-term': 'Long-term vision',
}

export function MaturityTag({ tier, label }: { tier: MaturityTier; label?: string }) {
  return <span className="keystone-stage" data-stage={tier}>{label ?? maturityLabels[tier]}</span>
}

// Shared editorial layout helpers

export const FONT = {
  display: 'var(--font-display)',
  serif: 'var(--font-editorial)',
  mono: 'var(--font-body)',
  body: 'var(--font-body)',
}

/** Engineering dimension line: ─┬───────┬─ with end ticks. */
export function DimLine({ color = 'var(--accent-line)', flex = true }: { color?: string; flex?: boolean }) {
  return (
    <span aria-hidden style={{ display: flex ? 'flex' : 'inline-flex', alignItems: 'center', flex: flex ? 1 : undefined, minWidth: 28 }}>
      <span style={{ width: 1, height: 7, background: color }} />
      <span style={{ flex: 1, height: 1, background: color }} />
      <span style={{ width: 1, height: 7, background: color }} />
    </span>
  )
}

/** Section eyebrow: folio number + mono label + dimension line. */
export function Eyebrow({ folio, label, onMineral = false, center = false }: { folio?: string; label: string; onMineral?: boolean; center?: boolean }) {
  const acc = onMineral ? 'var(--paper-ink)' : 'var(--text)'
  const faint = onMineral ? 'var(--paper-muted)' : 'var(--text-3)'
  const line = onMineral ? 'var(--paper-line)' : 'var(--border-w)'
  const m = (c: string): CSSProperties => ({ fontFamily: 'var(--font-body)', fontSize: '0.64rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: c })
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem', justifyContent: center ? 'center' : 'flex-start' }}>
      {folio && <span style={m(faint)}>{folio}</span>}
      <span style={m(acc)}>{label}</span>
      <DimLine color={line} />
    </div>
  )
}
