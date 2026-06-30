const services = [
  {
    num: '01',
    name: 'Digital',
    desc: "Le socle en ligne de l'artiste : site, EPK, plateformes et image.",
    items: [
      { name: 'One-page web', detail: 'Site vitrine léger, rapide, à votre image.' },
      { name: 'EPK numérique', detail: 'Dossier de presse en ligne, prêt à partager.' },
      { name: 'Calendrier synchronisé', detail: 'Agenda du site relié à un Google Sheet.' },
      { name: 'Mises à jour', detail: 'Site, EPK et réseaux tenus à jour.' },
      { name: 'Communication audiovisuelle', detail: 'Déclinaisons visuelles et fil éditorial.' },
      { name: 'Mini-séance portrait', detail: 'Shooting court, cadré pour vos besoins.' },
      { name: 'Photos live', detail: 'Captation photo de vos concerts.' },
      { name: 'Tri + retouche', detail: 'Sélection et retouche de votre existant.' },
      { name: 'Pack photo « réseaux »', detail: 'Format pensé pour Instagram & co.' },
    ],
  },
  {
    num: '02',
    name: 'Audio',
    desc: 'Du studio à la diffusion : enregistrement, mix, mastering, création.',
    items: [
      { name: 'Mixage / Mastering', detail: 'Au titre, prêt pour la diffusion.' },
      { name: 'Production titre « radio »', detail: 'Production calibrée format radio.' },
      { name: 'Journée studio multipiste', detail: "Session d'enregistrement multipiste." },
      { name: 'Création musicale sur mesure', detail: 'Composition originale, sans IA.' },
      { name: 'Setup informatique scénique', detail: 'Configuration de votre rig de scène.' },
    ],
  },
  {
    num: '03',
    name: 'Vidéos',
    desc: "L'image en mouvement : montage réseaux, clip, captation live.",
    items: [
      { name: 'Montage vidéo RS', detail: 'Formats réseaux, monté sur FCPX.' },
      { name: 'Réalisation clip', detail: 'Clip réalisé sur FCPX / Motion.' },
      { name: 'Captation live acoustique', detail: 'Ambiance + vidéo, prise en live.' },
    ],
  },
  {
    num: '04',
    name: 'Admin',
    desc: 'Tout ce qui vous vole votre temps de création :',
    items: [
      { name: 'Setup plateformes', detail: 'Spotify, Apple, YouTube, réseaux configurés.' },
      { name: 'Fiche technique + plan de scène', detail: 'Rider et plan de scène clairs.' },
      { name: 'Droits admin', detail: 'Gestion des droits, en perso ou via label.' },
      { name: 'Distribution numérique', detail: 'Mise en ligne sur les plateformes.' },
      { name: 'Automatisation sur mesure', detail: 'Workflows et scripts entre vos outils.' },
      { name: 'Synchronisation de données', detail: 'Feuilles, formulaires, plateformes reliés.' },
      { name: 'Notifications & rapports auto', detail: 'Alertes, résumés et envois programmés.' },
    ],
  },
]

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="section-header">
        <p className="eyebrow">Prestations · 01—04</p>
        <h2 className="section-h2" id="services-heading">Quatre domaines, une équipe</h2>
        <p className="section-lead">
          Chaque prestation se prend à la carte ou en accompagnement global.
          Tout est pensé pour rester léger et réutilisable.
        </p>
      </div>
      <div>
        {services.map(cat => (
          <div className="service-cat" key={cat.num}>
            <div className="service-label">
              <div className="service-num-row">
                <span className="label service-num" aria-hidden="true">{cat.num}</span>
                <h3 className="service-name">{cat.name}</h3>
              </div>
              <p className="service-desc">{cat.desc}</p>
            </div>
            <ul className="service-items" aria-label={`Services ${cat.name}`}>
              {cat.items.map(item => (
                <li className="service-item" key={item.name}>
                  <span className="service-item-name">{item.name}</span>
                  <span className="service-item-detail">{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
