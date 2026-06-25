import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aubuscule — Artisans numériques pour musiciens',
  description:
    'Aubuscule accompagne les artistes sur quatre fronts — digital, audio, vidéo et administratif. Deux musiciens-artisans au service de votre projet.',
  openGraph: {
    title: 'Aubuscule — Artisans numériques pour musiciens',
    description:
      'Accompagnement digital, audio, vidéo et administratif pour artistes musiciens.',
    locale: 'fr_BE',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
