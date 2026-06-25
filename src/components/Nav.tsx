'use client'

import { useState, useEffect } from 'react'
import { Mark } from './Mark'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const close = () => setIsOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-logo" onClick={close}>
          <Mark idPrefix="n" style={{ width: 32, height: 32, flexShrink: 0 }} />
          <span className="nav-wordmark">Aubuscule</span>
        </a>
        <nav aria-label="Navigation principale">
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
          <ul
            className={`nav-links${isOpen ? ' open' : ''}`}
            id="nav-menu"
          >
            <li><a href="#services" className="nav-link" onClick={close}>Services</a></li>
            <li><a href="#equipe" className="nav-link" onClick={close}>Équipe</a></li>
            <li><a href="#contact" className="nav-cta" onClick={close}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
