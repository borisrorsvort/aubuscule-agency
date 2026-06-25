import { Mark } from './Mark'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <Mark idPrefix="f" inkColor="#ffffff" style={{ width: 34, height: 34, flexShrink: 0 }} />
            <span className="footer-wordmark">Aubuscule</span>
          </div>
          <p className="footer-tagline">
            On ne livre pas des projets. On éclaire un besoin, on construit une solution,
            on transmet les clés.
          </p>
        </div>
        <nav className="footer-cols" aria-label="Liens rapides">
          <div className="footer-col">
            <span className="footer-col-label">Contact</span>
            <a href="mailto:contact@aubuscule.com" className="footer-link">
              contact@aubuscule.com
            </a>
            <a href="https://www.instagram.com/aubuscule_agency/" className="footer-link footer-link-instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              @aubuscule_agency
            </a>
          </div>
          <div className="footer-col">
            <span className="footer-col-label">Naviguer</span>
            <a href="#services" className="footer-link">Services</a>
            <a href="#equipe" className="footer-link">Équipe</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Aubuscule</span>
        <span className="footer-copy">Musiciens · Plasticiens · Artistes</span>
      </div>
    </footer>
  )
}
