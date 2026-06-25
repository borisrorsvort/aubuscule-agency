import { Mark } from './Mark'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <p className="eyebrow" aria-hidden="true">Musiciens · artisans numériques</p>
        <h1 className="hero-h1" id="hero-heading">
          Concentrez-vous sur votre art. On fait le reste.
        </h1>
        <p className="hero-sub">
          Aubuscule accompagne les artistes sur quatre fronts —{' '}
          <strong>digital, audio, vidéo et administratif</strong>.
        </p>
        <div className="hero-ctas">
          <a href="#services" className="btn-primary">Découvrir les services</a>
          <a href="#contact" className="btn-secondary">Nous écrire</a>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <Mark idPrefix="h" className="hero-mark-svg" />
      </div>
    </section>
  )
}
