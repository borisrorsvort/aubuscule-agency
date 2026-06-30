import { useTranslations } from 'next-intl'

export function Services() {
  const t = useTranslations('services')

  const categories = [
    {
      key: 'digital',
      itemKeys: [
        'onepage',
        'epk',
        'calendrier',
        'mises_a_jour',
        'comm_av',
        'mini_seance',
        'photos_live',
        'retouche',
        'pack_photo',
      ],
    },
    {
      key: 'audio',
      itemKeys: ['mix_master', 'prod_radio', 'studio_mp', 'compo', 'setup_scene'],
    },
    {
      key: 'videos',
      itemKeys: ['montage_rs', 'clip', 'captation_live'],
    },
    {
      key: 'admin',
      itemKeys: ['setup_plateformes', 'fiche_tech', 'droits', 'distrib', 'auto', 'sync', 'notifs'],
    },
  ] as const

  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="section-header">
        <p className="eyebrow">{t('eyebrow')}</p>
        <h2 className="section-h2" id="services-heading">{t('h2')}</h2>
        <p className="section-lead">{t('lead')}</p>
      </div>
      <div>
        {categories.map(cat => (
          <div className="service-cat" key={cat.key}>
            <div className="service-label">
              <div className="service-num-row">
                <span className="label service-num" aria-hidden="true">
                  {t(`categories.${cat.key}.num`)}
                </span>
                <h3 className="service-name">{t(`categories.${cat.key}.name`)}</h3>
              </div>
              <p className="service-desc">{t(`categories.${cat.key}.desc`)}</p>
            </div>
            <ul className="service-items" aria-label={`Services ${t(`categories.${cat.key}.name`)}`}>
              {cat.itemKeys.map(itemKey => (
                <li className="service-item" key={itemKey}>
                  <span className="service-item-name">{t(`categories.${cat.key}.items.${itemKey}.name`)}</span>
                  <span className="service-item-detail">{t(`categories.${cat.key}.items.${itemKey}.detail`)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

