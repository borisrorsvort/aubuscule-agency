const testimonials = [
  {
    quote: '« Vous nous avez sorti la tête du sable côté admin et web. On avait la musique, il nous manquait le reste. »',
    name: 'Léa Martin',
    initials: 'LM',
    photo: null,
    role: 'Auteure-compositrice',
  },
  {
    quote: "« L'EPK a été fait en une semaine. Propre, direct. On l'envoie encore aujourd'hui. »",
    name: 'Naïl Benali',
    initials: 'NB',
    photo: null,
    role: 'Rappeur',
  },
  {
    quote: "« Le mix a tout changé. On entendait enfin ce qu'on voulait entendre. »",
    name: 'Thomas Renaud',
    initials: 'TR',
    photo: null,
    role: 'Producteur',
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
