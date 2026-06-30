'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Mark } from './Mark'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/agency', label: 'Agence' },
  { href: '/apps', label: 'Apps' },
  { href: '/blog', label: 'Blog' },
] as const

export function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const close = () => setIsOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const close = () => setIsOpen(false)

  if (pathname === '/') return null

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={close}>
          <Mark idPrefix="n" style={{ width: 32, height: 32, flexShrink: 0 }} />
          <span className="nav-wordmark">Aubuscule</span>
        </Link>
        <nav aria-label="Navigation principale" className="nav-area">
          <ul
            className={`nav-links${isOpen ? ' open' : ''}`}
            id="nav-menu"
            role="menubar"
          >
            {links.map(link => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <li key={link.href} role="none">
                  <Link
                    href={link.href}
                    className={`nav-link${active ? ' nav-link--active' : ''}`}
                    onClick={close}
                    role="menuitem"
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <ThemeToggle />
          <button
            className={`hamburger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(o => !o)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
            <span className="hamburger-line" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </header>
  )
}
