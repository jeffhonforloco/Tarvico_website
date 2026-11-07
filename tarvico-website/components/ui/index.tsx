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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
        transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
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
  const [hovered, setHovered] = useState(false)

  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: '0.85rem',
    padding: '13px 24px',
    borderRadius: 'var(--radius-sm)',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'transform 0.2s cubic-bezier(0.16,1,0.3,1), background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
    fontFamily: 'var(--font-archivo-stack)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    border: 'none',
    lineHeight: 1.1,
    opacity: disabled ? 0.5 : 1,
    transform: hovered && !disabled ? 'translateY(-2px)' : 'translateY(0)',
    ...style,
  }

  const variants: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: 'var(--bronze)',
      color: '#0E0F13',
      fontWeight: 700,
      boxShadow: hovered ? 'var(--shadow-gold)' : 'none',
    },
    secondary: {
      background: hovered ? 'var(--bg-card)' : 'transparent',
      color: hovered ? 'var(--text)' : 'var(--text-2)',
      border: '1px solid var(--border-m)',
    },
    ghost: {
      background: 'transparent',
      color: hovered ? 'var(--bronze)' : 'var(--text-2)',
      border: '1px solid transparent',
      padding: '13px 4px',
      transform: 'none',
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
      disabled={disabled}
      style={combined}
      onMouseEnter={() => { if (!disabled) setHovered(true) }}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

// ─── SectionLabel ─────────────────────────────────────────────────────────────

export function SectionLabel({ children, center }: { children: ReactNode; center?: boolean }) {
  const dim = <span aria-hidden style={{ display: 'inline-flex', alignItems: 'center', flex: center ? 'none' : 1, minWidth: 28, width: center ? 28 : undefined }}>
    <span style={{ width: 1, height: 6, background: 'var(--bronze-line)' }} />
    <span style={{ flex: 1, height: 1, background: 'var(--bronze-line)' }} />
    <span style={{ width: 1, height: 6, background: 'var(--bronze-line)' }} />
  </span>
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: center ? 'center' : 'flex-start',
      gap: '1rem',
      fontFamily: 'var(--mono)',
      fontSize: '0.64rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--bronze)',
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
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg)',
      borderBottom: '1px solid var(--hairline)',
    }}>
      <div className="aurel-blueprint" style={{ position: 'absolute', inset: 0, opacity: 0.7 }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 75% at 30% 10%, var(--bronze-soft) 0%, transparent 55%)',
      }} />
      {/* left bronze edge rule */}
      <div className="mob-hide" style={{ position: 'absolute', top: 0, bottom: 0, left: 'max(1.5rem, 4vw)', width: 1, background: 'linear-gradient(to bottom, transparent, var(--bronze-line) 30%, transparent)' }} />
      <div className="mob-px" style={{
        position: 'relative',
        zIndex: 2,
        padding: '8.5rem max(1.5rem, 4vw) 5.5rem',
        maxWidth: 1280,
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          fontFamily: 'var(--mono)',
          fontSize: '0.64rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--bronze)',
          marginBottom: '1.9rem',
          fontWeight: 500,
          maxWidth: 520,
        }}>
          {label}
          <span aria-hidden style={{ display: 'inline-flex', alignItems: 'center', flex: 1, minWidth: 28 }}>
            <span style={{ width: 1, height: 6, background: 'var(--bronze-line)' }} />
            <span style={{ flex: 1, height: 1, background: 'var(--bronze-line)' }} />
            <span style={{ width: 1, height: 6, background: 'var(--bronze-line)' }} />
          </span>
        </div>
        <h1 className="aurel-display" style={{
          fontSize: 'clamp(2.6rem, 5.6vw, 5rem)',
          color: 'var(--text)',
          marginBottom: subtitle ? '1.9rem' : 0,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: '1.14rem',
            color: 'var(--text-2)',
            maxWidth: 580,
            lineHeight: 1.65,
            fontWeight: 400,
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
      padding: '4px 11px',
      borderRadius: 999,
      whiteSpace: 'nowrap',
      fontWeight: 600,
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

// ─── AnimatedBar — scroll-triggered width reveal ──────────────────────────────

export function AnimatedBar({ pct, color }: { pct: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setWidth(pct); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={ref} style={{ flex: 1, height: 4, background: 'var(--bg-raised)', border: '1px solid var(--border-w)', borderRadius: 4, position: 'relative', overflow: 'hidden' }}>
      <div className="bar-reveal" style={{ height: '100%', width: `${width}%`, background: color, opacity: 0.85, borderRadius: 4 }} />
    </div>
  )
}

// ─── AnimatedNumber — scroll-triggered count-up ───────────────────────────────

export function AnimatedNumber({ value, suffix = '' }: { value: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState<number | string>(typeof value === 'number' ? 0 : value)

  useEffect(() => {
    if (typeof value !== 'number') return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const start = performance.now()
        const duration = 1600
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return <span ref={ref}>{display}{suffix}</span>
}

// ─── MetricCard ───────────────────────────────────────────────────────────────

export function MetricCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div style={{
      padding: '2.25rem',
      border: '1px solid var(--border-w)',
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}>
      <div className="aurel-display" style={{
        fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
        fontWeight: 800,
        color: 'var(--text)',
        lineHeight: 1,
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: 'var(--mono)',
        fontSize: '0.62rem',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--bronze)',
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

// ─── MaturityTag — public disclosure label for product/initiative maturity ────

const maturityConfig: Record<MaturityTier, { label: string; color: string; border: string; bg: string; dot?: string }> = {
  operational:     { label: 'Operational Today', color: 'var(--emerald)',      border: 'var(--emerald-border)', bg: 'var(--emerald-glow)', dot: 'var(--emerald)' },
  'public-beta':   { label: 'Public Beta',        color: 'var(--bronze)',       border: 'var(--bronze-line)',    bg: 'var(--bronze-soft)',  dot: 'var(--bronze)' },
  'in-development': { label: 'In Development',      color: 'var(--petroleum-ink)', border: 'rgba(127,183,173,0.28)', bg: 'var(--petroleum-soft)', dot: 'var(--petroleum-ink)' },
  'long-term':     { label: 'Long-Term Vision',    color: 'var(--blue)',          border: 'var(--blue-border)',    bg: 'var(--blue-glow)' },
}

export function MaturityTag({ tier, label }: { tier: MaturityTier; label?: string }) {
  const cfg = maturityConfig[tier]
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--mono)',
      fontSize: '0.56rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      border: `1px solid ${cfg.border}`,
      color: cfg.color,
      background: cfg.bg,
      padding: '4px 11px',
      borderRadius: 999,
      whiteSpace: 'nowrap',
      fontWeight: 500,
    }}>
      {cfg.dot && (
        <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: cfg.dot, flexShrink: 0 }} />
      )}
      {label ?? cfg.label}
    </span>
  )
}

// ─── FOUNDRY layout helpers (Project AUREL) ───────────────────────────────────

export const FONT = {
  display: 'var(--font-archivo-stack)',
  serif: 'var(--font-fraunces-stack)',
  mono: 'var(--mono)',
  body: 'var(--font-body)',
}

/** Engineering dimension line: ─┬───────┬─ with end ticks. */
export function DimLine({ color = 'var(--bronze-line)', flex = true }: { color?: string; flex?: boolean }) {
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
  const acc = onMineral ? 'var(--bronze-deep)' : 'var(--bronze)'
  const faint = onMineral ? 'var(--mineral-ink-2)' : 'var(--text-3)'
  const line = onMineral ? 'var(--mineral-line)' : 'var(--hairline)'
  const m = (c: string): CSSProperties => ({ fontFamily: 'var(--mono)', fontSize: '0.64rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: c })
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem', justifyContent: center ? 'center' : 'flex-start' }}>
      {folio && <span style={m(faint)}>{folio}</span>}
      <span style={m(acc)}>{label}</span>
      <DimLine color={line} />
    </div>
  )
}
