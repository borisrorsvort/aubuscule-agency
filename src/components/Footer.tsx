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
