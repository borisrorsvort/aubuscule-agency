import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <section className="section section-pb" id="contact" aria-labelledby="contact-heading">
      <div className="contact-grid">
        <div className="contact-col">
          <div>
            <p className="eyebrow contact-eyebrow">Contact</p>
            <h2 className="contact-h2" id="contact-heading">Parlons de votre projet</h2>
            <p className="contact-lead">
              Dites-nous où vous en êtes. On répond vite, sans jargon.
            </p>
          </div>
          <address className="contact-details">
            <a href={`mailto:contact@aubuscule.com?subject=${encodeURIComponent("Demande d'information - Aubuscule")}&body=${encodeURIComponent("Bonjour,\n\nVoici où j'en suis :\n\n\nCe dont j'ai besoin :\n\n")}`} className="contact-item">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">contact@aubuscule.com</span>
            </a>
            <a href="https://www.instagram.com/aubuscule_agency/" className="contact-item" target="_blank" rel="noopener noreferrer">
              <span className="contact-item-label">Instagram</span>
              <span className="contact-item-value contact-item-instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                @aubuscule_agency
              </span>
            </a>
          </address>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
