import { useTranslations } from 'next-intl'
import { Mark } from '@/components/shared/Mark'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <p className="eyebrow" aria-hidden="true">{t('eyebrow')}</p>
        <h1 className="hero-h1" id="hero-heading">
          {t('h1')}
        </h1>
        <p className="hero-sub">
          {t.rich('sub', {
            bold: (chunks) => <strong>{chunks}</strong>
          })}
        </p>
        <div className="hero-ctas">
          <a href="#services" className="btn-primary">{t('ctaServices')}</a>
          <a href="#contact" className="btn-secondary">{t('ctaContact')}</a>
        </div>
      </div>
      <div className="hero-mark" aria-hidden="true">
        <Mark idPrefix="h" className="hero-mark-svg" />
      </div>
    </section>
  )
}

