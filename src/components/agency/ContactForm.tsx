'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nom = String(data.get('nom') ?? '')
    const email = String(data.get('email') ?? '')
    const type = String(data.get('type') ?? '')
    const message = String(data.get('message') ?? '')

    const subject = `Demande de projet — ${nom || 'sans nom'}`
    const body = [
      `Nom : ${nom}`,
      `Email : ${email}`,
      `Type de projet : ${type}`,
      '',
      message,
    ].join('\n')

    try {
      window.location.href = `mailto:contact@aubuscule.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      setSent(true)
    } catch {
      setError(true)
    }
  }

  if (sent) {
    return (
      <div className="card form-success" role="status">
        <svg className="form-success-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2"/>
          <polyline points="14,25 21,32 34,17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="form-success-title">Votre client mail vient de s’ouvrir.</p>
        <p className="form-success-sub">Vérifiez l’envoi — on revient sous 48 h ouvrées.</p>
      </div>
    )
  }

  return (
    <form className="card contact-form" id="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span className="label-sm form-label">Nom</span>
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
          <span className="label-sm form-label">Email</span>
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
        <span className="label-sm form-label">Type de projet</span>
        <select className="form-select" name="type" defaultValue="Digital — web, EPK, plateformes">
          <option>Digital — web, EPK, plateformes</option>
          <option>Audio — studio, mix, création</option>
          <option>Vidéo — montage, clip, captation</option>
          <option>Admin — technique, droits, distribution</option>
          <option>Accompagnement global</option>
        </select>
      </label>
      <label className="form-field">
        <span className="label-sm form-label">Votre projet</span>
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
