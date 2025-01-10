import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'
import SphereAnimation from '../../components/smallScreen/SphereAnimation';

function AboutSmallPage() {
    return (
        <section className="about_small_page">
            <article className="about_small_page_el1">
                <HeaderSmallScreen />
                <h1 className='title_about_small_page'>
                    Les <span className='title_about_small_page_span'>experts</span> qui apportent la meilleure <span className='title_about_small_page_span'>visibilité</span> à votre site internet dans les moteurs de recherche
                </h1>
                <div className='paragraph_about_small_page'>
                    Nous sommes une agence indépendante qui place l’analyse, l’innovation & la proximité au centre de son expertise pour délivrer le meilleur service à ses clients.
                </div>
                <div className='paragraph_about_small_page'>
                    Nos équipes mêlent diverses compétences technique dans notamment la pratique du SEO, l'utilisation de framework Web moderne et manipulation et analyse complexe des données marketing pour répondre à l’ensemble des problématiques d’acquisition organiques auxquelles font face nos clients. 
                </div>
                <div className='sphere_div'>
                    <SphereAnimation />
                    <div className='sphere_div_test'>
                        <div>Artifical Intelligence</div>
                        <div>Semantical Analysis</div>
                        <div>Social Network</div>
                    </div>
                </div>
                
                <div className='paragraph_about_small_page'>
                    Nous plaçons l’innovation au coeur de notre environnement en dédiant du temps à la recherche et au développement d’outils et d’offres commerciales pertinentes: (Intelligence Artificielle, Analyse Sémantique, Réseau Sociaux ..) 
                </div>
                <h1 className='title_about_small_page'>
                    L’étude <span className='title_about_small_page_span'>sémantique</span> la plus poussée du marché
                </h1>
                <div className='paragraph_about_small_page'>
                    Nous avons réalisé une étude approfondie du vocabulaire des différents corps de métier afin d’y voir plus clair dans cette nébuleuse de mots-clés qui permet à certains, de passer devant les autres. Il s’agit d’une analyse fine des tendances, des acteurs et des opportunités qu'apporte le référencement web afin de vous assurer une présence optimale dans les pages de résultats. 
                </div>
                <h1 className='title_about_small_page'>
                    <span className='title_about_small_page_span'>Stratégie</span> éditoriale : content is <span className='title_about_small_page_span'>queen</span>
                </h1>
                <div className='paragraph_about_small_page'>
                    Nous nous occupons de la stratégie éditoriale de votre site web de Mercure jusqu’à Neptune. Inutile de vous tracasser à trouver la bonne formule pour attirer votre clientèle, nos équipes identifient précisément les contenus à créer (format, angle, titre, longueur…).
                </div>
            </article>
        </section>
    )
}

export default AboutSmallPage