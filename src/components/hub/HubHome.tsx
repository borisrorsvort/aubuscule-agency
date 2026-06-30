'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Mark } from '@/components/shared/Mark'

interface HubCard {
  key: string
  href: string
  external?: boolean
}

const cards: HubCard[] = [
  {
    key: 'agency',
    href: '/agency',
  },
  {
    key: 'apps',
    href: '/apps',
  },
]

export function HubHome() {
  const t = useTranslations('hub')
  const heroRef = useRef<HTMLElement>(null)
  const [yOffset, setYOffset] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = heroRef.current.getBoundingClientRect()
    const cy = rect.top + rect.height / 2
    const dy = (e.clientY - cy) / rect.height
    setYOffset(-dy * 28)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setYOffset(0)
  }, [])

  return (
    <main id="main-content" className="hub-page">
      <section
        ref={heroRef}
        className={`hub-hero ${visible ? 'hub-hero--visible' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-labelledby="hub-heading"
      >
        <div
          className="hub-hero-parallax"
          style={{ transform: `translateY(${yOffset}px)` }}
        >
          <Mark idPrefix="hub" className="hub-mark-svg" inkColor="#e8e6e0" />
        </div>
        <h1 className="hub-h1" id="hub-heading">Aubuscule</h1>
        <p className="hub-sub">{t('subtitle')}</p>

        <section className="hub-cards" aria-label={t('cardsSectionLabel')}>
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="hub-card"
              {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="label hub-card-label">{t(`cards.${card.key}.label`)}</span>
              <span className="hub-card-title">{t(`cards.${card.key}.title`)}</span>
              <span className="hub-card-desc">{t(`cards.${card.key}.desc`)}</span>
            </Link>
          ))}
        </section>
      </section>
    </main>
  )
}

