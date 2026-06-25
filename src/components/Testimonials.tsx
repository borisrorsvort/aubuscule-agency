const testimonials = [
  {
    quote: '«\u00A0Ravi du travail d\'Aubuscule ! Ils ont parfaitement su immortaliser mon univers et l\'âme de mes UDU, que ce soit pour le catalogue ou en plein jeu. Je recommande à 100\u00A0%\u00A0»',
    name: 'Yovanny Adant',
    initials: 'YA',
    photo: '/img/yovanny-adant.png',
    role: 'Créateur des UDU',
  },
  {
    quote: "«\u00A0En studio, Aubuscule a le sens du détail et l'oreille du lynx des steppes\u00A0»",
    name: 'Vincent Mardens',
    initials: 'VM',
    photo: '/img/vincent-mardens.jpg',
    role: 'Saxophoniste (Maurane etc.)',
  },
  {
    quote: "«\u00A0Bosser avec Aubuscule c'est la créativité et la bonne humeur assurée pour un résultat qui déchire sa mère la congolaise\u00A0»",
    name: 'Guy Waku',
    initials: 'GW',
    photo: '/img/guy-waku.webp',
    role: 'Producteur',
  },
  {
    quote: "«\u00A0C'était vraiment sympa de travailler sur la musique d'animations avec Aubuscule\u00A0!\u00A0»",
    name: 'David Freedman',
    initials: 'DF',
    photo: '/img/david-freedman.jpg',
    role: 'Réalisateur (animation)',
  },
  {
    quote: "«\u00A0Aubuscule a su capturer avec beaucoup de sensibilité la nouvelle énergie du projet Solia\u00A0; les photos de groupe sont superbes, modernes et fidèles à notre univers.\u00A0»",
    name: 'Rakel Gigot',
    initials: 'RG',
    photo: '/img/rakel-gigot.jpg',
    role: 'Accordéoniste, compositrice',
  },
  {
    quote: "«\u00A0Aubuscule a conçu un système de booking sur Notion et IA d'une efficacité redoutable, parfaitement adapté aux réalités des musiciens professionnels.\u00A0»",
    name: 'Fabrice Alleman',
    initials: 'FA',
    photo: '/img/fabrice-alleman.png',
    role: 'Saxophoniste, compositeur',
  },
]

export function Testimonials() {
  return (
    <section className="section" id="temoignages" aria-labelledby="testimonials-heading">
      <div className="section-header section-header-sm">
        <p className="eyebrow">La parole aux artistes</p>
        <h2 className="section-h2" id="testimonials-heading">Ce qu'ils en disent</h2>
      </div>
      <ul className="testimonials-grid" role="list">
        {testimonials.map(t => (
          <li key={t.name} className="testimonial-card">
            <blockquote>
              <p className="testimonial-quote">{t.quote}</p>
              <footer className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.photo
                    ? <img src={t.photo} alt="" />
                    : t.initials}
                </div>
                <div>
                  <cite className="testimonial-name">{t.name}</cite>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  )
}
