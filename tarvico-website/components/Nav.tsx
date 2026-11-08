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
    <header className="site-header keystone-dark">
      <a className="skip-link" href="#main-content" hidden={open}>Skip to content</a>
      <nav aria-label="Main navigation" className="keystone-shell site-nav">
        <Link className="site-wordmark" href="/" onClick={() => setOpenPath(null)}>
          <BrandWordmark />
        </Link>
        <div className="site-nav-desktop">{navigationLinks()}</div>
        <div className="site-nav-controls">
          <button className="site-nav-control" type="button" aria-label="Dark appearance" aria-pressed={dark} onClick={toggleAppearance}>
            <span className="theme-icon theme-icon--sun" aria-hidden="true">☀</span>
            <span className="theme-icon theme-icon--moon" aria-hidden="true">◐</span>
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
