import Image from 'next/image'

const members = [
  {
    slug: 'boris',
    src: '/img/boris.jpeg',
    alt: 'Boris Rorsvort, artisan numérique et photographe',
    role: 'Artisan numérique · Photo',
    name: 'Boris',
    bio: "Musicien, artisan numérique et photographe. Il façonne le web, l'image et l'automatisation autour de l'artiste — du site à l'EPK jusqu'aux réseaux.",
    tags: ['Web', 'Design', 'Photo', 'Automatisation'],
  },
  {
    slug: 'eric',
    src: '/img/eric.jpg',
    alt: 'Éric, musicien, compositeur et ingénieur du son',
    role: 'Musicien · Composition · Son',
    name: 'Éric',
    bio: "Musicien et compositeur avant tout, ingénieur du son de formation. L'enregistrement, la vidéo et le clip n'ont pas de secrets pour lui — de la prise au mastering.",
    tags: ['Enregistrement', 'Mix / Master', 'Vidéo', 'Clip'],
  },
]

export function Team() {
  return (
    <section className="section" id="equipe" aria-labelledby="team-heading">
      <div className="section-header section-header-sm">
        <p className="eyebrow">L'équipe</p>
        <h2 className="section-h2" id="team-heading">Les visages derrière Aubuscule</h2>
        <p className="section-lead">
          Deux personnes, des compétences complémentaires. Pas d'intermédiaire : vous parlez
          directement à ceux qui font.
        </p>
      </div>
      <ul className="team-grid" role="list">
        {members.map(m => (
          <li key={m.slug} className="card person-card">
            <div className="person-photo-col">
              <div className="person-photo">
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 719px) calc(100vw - 40px), 168px"
                  className="person-photo-img"
                />
              </div>
            </div>
            <div className="person-info">
              <div>
                <p className="person-name">{m.name}</p>
              </div>
              <p className="person-bio">{m.bio}</p>
              <div className="person-specs">
                <p className="label person-specs-label">Spécialités</p>
                <ul className="tag-row" role="list">
                  {m.tags.map(tag => (
                    <li key={tag} className="tag">{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
