'use client'

import Link from 'next/link'
import BrandWordmark from '@/components/BrandWordmark'
import { getAppearance, getServerAppearance, subscribeToAppearance, toggleAppearance } from '@/lib/appearance'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'

const links = [
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/vision', label: 'Vision' },
  { href: '/about', label: 'Company' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const dark = useSyncExternalStore(subscribeToAppearance, getAppearance, getServerAppearance) === 'dark'
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === pathname
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const media = window.matchMedia('(min-width: 1024px)')
    const close = () => setOpenPath(null)
    const closeOnDesktop = () => { if (media.matches) close() }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
        menuButton.current?.focus()
      }
    }
    const pageContent = Array.from(document.querySelectorAll<HTMLElement>('body > main, body > footer'))
    const originalInert = pageContent.map(element => element.inert)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    pageContent.forEach(element => { element.inert = true })
    media.addEventListener('change', closeOnDesktop)
    window.addEventListener('keydown', onKey)
    window.addEventListener('popstate', close)
    return () => {
      document.body.style.overflow = previousOverflow
      pageContent.forEach((element, index) => { element.inert = originalInert[index] })
      media.removeEventListener('change', closeOnDesktop)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('popstate', close)
    }
  }, [open])

  const navigationLinks = () => links.map(({ href, label }) => (
    <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpenPath(null)}>
      {label}
    </Link>
  ))

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content" hidden={open}>Skip to content</a>
      <nav aria-label="Main navigation" className="site-nav">
        <Link className="site-wordmark" href="/" onClick={() => setOpenPath(null)}>
          <BrandWordmark />
        </Link>
        <div className="site-nav-desktop">{navigationLinks()}</div>
        <div className="site-nav-controls">
          <button className="site-nav-control site-appearance-toggle" type="button" aria-label="Dark appearance" aria-pressed={dark} onClick={toggleAppearance}>
            <svg className="theme-icon--sun" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <circle cx="8" cy="8" r="3.45" />
              <path d="M8 .5v2.8m0 9.4v2.8M.5 8h2.8m9.4 0h2.8M2.7 2.7l2 2m6.6 6.6 2 2m0-10.6-2 2m-6.6 6.6-2 2"
                fill="none" stroke="currentColor" strokeWidth=".7" />
            </svg>
            <svg className="theme-icon--moon" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" />
              <path d="M8 1a7 7 0 0 0 0 14Z" />
            </svg>
          </button>
          <button className="site-nav-control site-menu-toggle" ref={menuButton} type="button"
            aria-label="Toggle menu" aria-controls="site-mobile-menu" aria-expanded={open}
            onClick={() => setOpenPath(open ? null : pathname)}>
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </button>
        </div>
        <div className="site-nav-mobile" id="site-mobile-menu" hidden={!open}>{navigationLinks()}</div>
      </nav>
    </header>
  )
}
