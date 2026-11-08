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
      <nav aria-label="Main navigation" className="keystone-shell site-nav">
        <Link className="site-wordmark" href="/" onClick={() => setOpenPath(null)}>
          <BrandWordmark />
        </Link>
        <div className="site-nav-desktop">{navigationLinks()}</div>
        <div className="site-nav-controls">
          <button className="site-nav-control site-appearance-toggle" type="button" aria-label="Dark appearance" aria-pressed={dark} onClick={toggleAppearance}>
            <svg className="theme-icon--sun" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
            </svg>
            <svg className="theme-icon--moon" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.8 14.6A8.8 8.8 0 0 1 9.4 3.2a9 9 0 1 0 11.4 11.4Z" />
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
