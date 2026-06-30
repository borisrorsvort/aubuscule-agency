import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Team() {
  const t = useTranslations('team')

  const members = [
    {
      slug: 'boris',
      src: '/img/boris.jpeg',
      name: 'Boris',
    },
    {
      slug: 'eric',
      src: '/img/eric.jpg',
      name: 'Éric',
    },
  ] as const

  return (
    <section className="section" id="equipe" aria-labelledby="team-heading">
      <div className="section-header section-header-sm">
        <p className="eyebrow">{t('eyebrow')}</p>
        <h2 className="section-h2" id="team-heading">{t('h2')}</h2>
        <p className="section-lead">{t('lead')}</p>
      </div>
      <ul className="team-grid" role="list">
        {members.map(m => {
          const tags = t.raw(`members.${m.slug}.tags`) as string[]
          return (
            <li key={m.slug} className="card person-card">
              <div className="person-photo-col">
                <div className="person-photo">
                  <Image
                    src={m.src}
                    alt={t(`members.${m.slug}.alt`)}
                    fill
                    sizes="(max-width: 719px) calc(100vw - 40px), 168px"
                    className="person-photo-img"
                  />
                </div>
              </div>
              <div className="person-info">
                <div>
                  <p className="person-name">{m.name}</p>
                  <p className="person-role">{t(`members.${m.slug}.role`)}</p>
                </div>
                <p className="person-bio">{t(`members.${m.slug}.bio`)}</p>
                <div className="person-specs">
                  <p className="label person-specs-label">{t('specialties')}</p>
                  <ul className="tag-row" role="list">
                    {tags.map(tag => (
                      <li key={tag} className="tag">{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

