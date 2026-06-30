'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mark } from './Mark'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/agency', label: 'Agence' },
  { href: '/apps', label: 'Apps' },
  { href: '/blog', label: 'Blog' },
] as const

export function Footer() {
  const pathname = usePathname()

  if (pathname === '/') return null

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Mark idPrefix="f" inkColor="#ffffff" style={{ width: 34, height: 34, flexShrink: 0 }} />
            <span className="footer-wordmark">Aubuscule</span>
          </Link>
          <p className="footer-tagline">
            On ne livre pas des projets. On éclaire un besoin, on construit une solution,
            on transmet les clés.
          </p>
        </div>
        <nav className="footer-cols" aria-label="Navigation secondaire">
          <div className="footer-col">
            <span className="label-sm footer-col-label">Naviguer</span>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <span className="label-sm footer-col-label">Contact</span>
            <a href="mailto:contact@aubuscule.com" className="footer-link">
              contact@aubuscule.com
            </a>
            <a href="https://www.instagram.com/aubuscule_agency/" className="footer-link footer-link-instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              @aubuscule_agency
            </a>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">&copy; 2026 Aubuscule</span>
        <span className="footer-copy">Musiciens &middot; Plasticiens &middot; Artistes</span>
      </div>
    </footer>
  )
}
