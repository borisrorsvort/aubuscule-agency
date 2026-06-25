'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <svg className="form-success-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2"/>
          <polyline points="14,25 21,32 34,17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="form-success-title">Votre message a bien été envoyé.</p>
        <p className="form-success-sub">On revient vers vous sous 48 h ouvrées.</p>
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      id="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="form-row">
        <label className="form-field">
          <span className="form-label">Nom</span>
          <input
            className="form-input"
            name="nom"
            type="text"
            placeholder="Votre nom d'artiste"
            required
            autoComplete="name"
          />
        </label>
        <label className="form-field">
          <span className="form-label">Email</span>
          <input
            className="form-input"
            name="email"
            type="email"
            placeholder="vous@exemple.com"
            required
            autoComplete="email"
          />
        </label>
      </div>
      <label className="form-field">
        <span className="form-label">Type de projet</span>
        <select className="form-select" name="type" defaultValue="Digital — web, EPK, plateformes">
          <option>Digital — web, EPK, plateformes</option>
          <option>Audio — studio, mix, création</option>
          <option>Vidéo — montage, clip, captation</option>
          <option>Admin — technique, droits, distribution</option>
          <option>Accompagnement global</option>
        </select>
      </label>
      <label className="form-field">
        <span className="form-label">Votre projet</span>
        <textarea
          className="form-textarea"
          name="message"
          rows={4}
          placeholder="En quelques mots, où vous en êtes et ce dont vous avez besoin."
          required
        />
      </label>
      <div className="form-footer">
        <span
          className="form-notice"
          role={error ? 'status' : undefined}
          aria-live={error ? 'polite' : undefined}
        >
          {error
            ? "Erreur lors de l'envoi. Réessayez ou écrivez-nous directement."
            : 'Réponse sous 48 h ouvrées.'}
        </span>
        <button type="submit" className="form-submit">
          Envoyer la demande
        </button>
      </div>
    </form>
  )
}
