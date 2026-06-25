'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const notice = sent
    ? "Merci — votre messagerie va s'ouvrir."
    : 'Réponse sous 48 h ouvrées.'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const els = e.currentTarget.elements as HTMLFormControlsCollection & {
      nom: HTMLInputElement
      email: HTMLInputElement
      type: HTMLSelectElement
      message: HTMLTextAreaElement
    }
    const nom = els.nom?.value ?? ''
    const email = els.email?.value ?? ''
    const type = els.type?.value ?? ''
    const message = els.message?.value ?? ''
    const subject =
      'Aubuscule — ' + (type ? type.split('—')[0].trim() : 'Demande') + (nom ? ' · ' + nom : '')
    const body = `Nom : ${nom}\nEmail : ${email}\nType : ${type}\n\n${message}`
    window.location.href =
      'mailto:contact@aubuscule.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
    setSent(true)
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>
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
          role={sent ? 'status' : undefined}
          aria-live={sent ? 'polite' : undefined}
        >
          {notice}
        </span>
        <button type="submit" className="form-submit">
          Envoyer la demande
        </button>
      </div>
    </form>
  )
}
