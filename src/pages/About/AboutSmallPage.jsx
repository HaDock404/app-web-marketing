import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'
import SphereAnimation from '../../components/smallScreen/SphereAnimation';
import Crown from '../../components/smallScreen/Crown';
import ContactButton from '../../components/smallScreen/ContactButton';

function AboutSmallPage() {
    return (
        <section className="about_small_page">
            <article className="about_small_page_el1">
                <HeaderSmallScreen />
                <h1 className='title_about_small_page'>
                    Les <span className='title_about_small_page_span'>experts</span> en <span className='title_about_small_page_span'>visibilité</span> pour les artisans et professionnels locaux
                </h1>
                <div className='paragraph_about_small_page'>
                    Nous sommes une agence indépendante dédiée à maximiser la visibilité en ligne des artisans et professionnels comme vous. Notre approche repose sur trois piliers : analyse, innovation, et proximité. Notre objectif est simple : vous offrir un site internet performant et optimisé pour attirer davantage de clients.
                </div>
                <div className='paragraph_about_small_page'>
                    Notre équipe multidisciplinaire réunit des spécialistes du SEO, des frameworks web modernes, et de l’analyse marketing avancée. Nous identifions les meilleures opportunités pour améliorer votre acquisition de clients grâce à des stratégies personnalisées et efficaces. 
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
                    Nous consacrons une partie de notre temps à la recherche et au développement d’outils innovants pour rester à la pointe des tendances numériques. Qu’il s’agisse d’intelligence artificielle, d’analyse sémantique, ou de gestion des réseaux sociaux, nous développons des solutions adaptées aux besoins spécifiques de votre activité. 
                </div>
                <h1 className='title_about_small_page'>
                    Une analyse <span className='title_about_small_page_span'>sémantique</span> adapté à votre activité
                </h1>
                <div className='paragraph_about_small_page'>
                    Nous avons mené une étude approfondie du vocabulaire et des tendances de chaque corps de métier. Grâce à cette analyse, nous identifions les mots-clés stratégiques qui assurent à votre site une visibilité optimale dans les moteurs de recherche. 
                </div>
                <h1 className='title_about_small_page'>
                    <span className='title_about_small_page_span'>Stratégie</span> éditoriale : content is <span className='title_about_small_page_span'>King</span>
                </h1>
                <Crown />
                <div className='paragraph_about_small_page'>
                    Le contenu de votre site web est le moteur de votre visibilité. Nous élaborons une stratégie éditoriale sur-mesure pour votre site. Nos équipes déterminent les formats, angles, titres et longueurs idéaux pour capter l’attention de votre audience et convertir vos visiteurs en clients.
                </div>
                <h1 className='title_about_small_page'>
                    Besoin <span className='title_about_small_page_span'>d'Aide</span> et de <span className='title_about_small_page_span'>Conseils</span> ?
                </h1>
                <div className='paragraph_about_small_page'>
                    Nos équipes sont disposées à répondre à toutes vos interrogations.
                </div>
                <ContactButton />
            </article>
        </section>
    )
}

export default AboutSmallPage