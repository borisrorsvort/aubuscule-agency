'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const notice = sent
    ? 'Merci — on revient vers vous sous 48 h.'
    : error
    ? 'Erreur lors de l\'envoi. Réessayez ou écrivez-nous directement.'
    : 'Réponse sous 48 h ouvrées.'

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
        form.reset()
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
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
          role={sent || error ? 'status' : undefined}
          aria-live={sent || error ? 'polite' : undefined}
        >
          {notice}
        </span>
        <button type="submit" className="form-submit" disabled={sent}>
          {sent ? 'Envoyé' : 'Envoyer la demande'}
        </button>
      </div>
    </form>
  )
}
