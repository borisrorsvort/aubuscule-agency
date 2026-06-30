'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Select } from '@/components/shared/Select'

export function ContactForm() {
  const t = useTranslations('form')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)
  const [projectType, setProjectType] = useState('digital')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nom = String(data.get('nom') ?? '')
    const email = String(data.get('email') ?? '')
    const typeValue = String(data.get('type') ?? '')
    const message = String(data.get('message') ?? '')

    const typeLabel = t(`typeOptions.${typeValue as 'digital' | 'audio' | 'video' | 'admin' | 'global'}`)
    const subject = `Demande de projet — ${nom || 'sans nom'}`
    const body = [
      `${t('labelName')} : ${nom}`,
      `${t('labelEmail')} : ${email}`,
      `${t('labelType')} : ${typeLabel}`,
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
        <p className="form-success-title">{t('successTitle')}</p>
        <p className="form-success-sub">{t('successSub')}</p>
      </div>
    )
  }

  return (
    <form className="card contact-form" id="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span className="label-sm form-label">{t('labelName')}</span>
          <input
            className="form-input"
            name="nom"
            type="text"
            placeholder={t('placeholderName')}
            required
            autoComplete="name"
          />
        </label>
        <label className="form-field">
          <span className="label-sm form-label">{t('labelEmail')}</span>
          <input
            className="form-input"
            name="email"
            type="email"
            placeholder={t('placeholderEmail')}
            required
            autoComplete="email"
          />
        </label>
      </div>
      <div className="form-field">
        <span className="label-sm form-label">{t('labelType')}</span>
        <Select
          name="type"
          value={projectType}
          onChange={setProjectType}
          options={[
            { value: 'digital', label: t('typeOptions.digital') },
            { value: 'audio', label: t('typeOptions.audio') },
            { value: 'video', label: t('typeOptions.video') },
            { value: 'admin', label: t('typeOptions.admin') },
            { value: 'global', label: t('typeOptions.global') },
          ]}
        />
      </div>
      <label className="form-field">
        <span className="label-sm form-label">{t('labelMessage')}</span>
        <textarea
          className="form-textarea"
          name="message"
          rows={4}
          placeholder={t('placeholderMessage')}
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
            ? t('noticeError')
            : t('notice')}
        </span>
        <button type="submit" className="form-submit">
          {t('submit')}
        </button>
      </div>
    </form>
  )
}


