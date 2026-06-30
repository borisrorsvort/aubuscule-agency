'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Mark } from '@/components/shared/Mark'

interface HubCard {
  href: string
  label: string
  title: string
  desc: string
  external?: boolean
}

const cards: HubCard[] = [
  {
    href: '/agency',
    label: 'Agence',
    title: 'Services artistiques',
    desc: 'Digital, audio, vidéo et administratif — on fait le reste.',
  },
  {
    href: '/apps',
    label: 'Apps',
    title: 'Outils créatifs',
    desc: 'Applications conçues pour les artistes et les créateurs.',
  },
]

export function HubHome() {
  const heroRef = useRef<HTMLElement>(null)
  const [yOffset, setYOffset] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return
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
        <p className="hub-sub">Agence digital à échelle humaine</p>

        <section className="hub-cards" aria-label="Sections">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="hub-card"
              {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="label hub-card-label">{card.label}</span>
              <span className="hub-card-title">{card.title}</span>
              <span className="hub-card-desc">{card.desc}</span>
            </Link>
          ))}
        </section>
      </section>
    </main>
  )
}
