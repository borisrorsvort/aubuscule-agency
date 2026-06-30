import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dev — Aubuscule',
  description: 'Développement web — Aubuscule.',
  alternates: { canonical: '/dev' },
}

export default function DevHome() {
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>Dev</h1>
        <p>Bientôt disponible — à venir (Epic 6).</p>
      </div>
    </main>
  )
}
