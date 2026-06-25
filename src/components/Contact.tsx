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
          </address>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
