'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '/portfolio', label: 'Businesses' },
  { href: '/about', label: 'About' },
  { href: '/investors', label: 'Investors' },
  { href: '/vision', label: 'Vision' },
  { href: '/careers', label: 'Careers' },
  { href: '/newsroom', label: 'Newsroom' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [dark, setDark] = useState(false)
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

  const toggleTheme = () => {
    document.documentElement.dataset.theme = dark ? 'light' : 'dark'
    setDark(!dark)
  }

  const navigationLinks = () => links.map(({ href, label }) => (
    <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpenPath(null)}>
      {label}
    </Link>
  ))

  return (
    <header className="site-header keystone-dark">
      <a className="skip-link" href="#main-content" hidden={open}>Skip to content</a>
      <nav aria-label="Main navigation" className="keystone-shell site-nav">
        <Link className="site-wordmark" href="/">
          <Image src="/keystone/wordmark.webp" alt="Tarvico Inc." width={320} height={37} priority />
        </Link>
        <div className="site-nav-desktop">{navigationLinks()}</div>
        <div className="site-nav-controls">
          <button className="site-nav-control" type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={toggleTheme}>
            <span aria-hidden="true">{dark ? '☀' : '◐'}</span>
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
