'use client'

import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { locales } from '@/i18n/config'
import { Select } from '@/components/shared/Select'
import { Mark } from './Mark'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const close = () => setIsOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const close = () => setIsOpen(false)

  if (pathname === '/') return null

  const links = [
    { href: '/', label: t('home') },
    { href: '/agency', label: t('agency') },
    { href: '/apps', label: t('apps') },
  ] as const

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={close}>
          <Mark idPrefix="n" style={{ width: 32, height: 32, flexShrink: 0 }} />
          <span className="nav-wordmark">Aubuscule</span>
        </Link>
        <nav aria-label={t('ariaLabel')} className="nav-area">
          <ul className={`nav-links${isOpen ? ' open' : ''}`} id="nav-menu">
            {links.map(link => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link${active ? ' nav-link--active' : ''}`}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Select
            value={currentLocale}
            onChange={(nextLocale) => router.replace(pathname, { locale: nextLocale as 'fr' | 'en' | 'nl' })}
            options={locales.map(loc => ({ value: loc, label: loc.toUpperCase() }))}
            align="right"
            className="nav-lang-select"
          />
          <ThemeToggle />
          <button
            className={`hamburger${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(o => !o)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? t('closeMenu') : t('openMenu')}
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



