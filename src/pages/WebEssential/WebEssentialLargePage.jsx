import '../../styles/large_page.css'

import HeaderLargePage from "../../components/HeaderLargePage"
import OfferTitle from '../../components/OfferTitle'
import OfferIntro from '../../components/OfferIntro'
import OfferParagraph from '../../components/OfferParagraph'

import MessageOfferLargePage from '../../components/MessageOfferLargePage'
import TemplatesOfferLargePage from '../../components/TemplatesOfferLargePage'

import screen01 from '../../assets/screen_01.png'
import screen02 from '../../assets/screen_02.png'
import screen03 from '../../assets/screen_03.png'

const images= [
    {
        image: screen01,
        title: "couleurRed",
        description: "Un écran rouge parfait pour un site d'exception et de qualité."
    },
    {
        image: screen02,
        title: "couleurJaune",
        description: "Jaune comme la couleur du soleil, admirez le plus beau site pour votre entreprise."
    },
    {
        image: screen03,
        title: "couleurVert",
        description: "Un site vert comme la couleur de l'argent, qui affluera par millier une fois que vous aurez une site."
    }
];

function WebEssentialLargePage() {
    return (
        <section className="section_large_page">
            <article className="web_essential_large_page_el1">
                <HeaderLargePage />
                <OfferTitle title="WebEssential"/>
                <OfferIntro text="L’offre parfaite pour débuter son activité sans prise de tête"/>
                <OfferParagraph
                    title='1. Présentation'
                    content={`
                        Avec WebEssential, créer votre site internet n’a jamais été aussi <span class="span_underline">simple</span> :
                        <ul>
                            <li class="custom_bullet">
                                Choisissez le template qui correspond le mieux à votre activité. 
                            </li>
                            <li class="custom_bullet">
                                Contactez-nous en partageant les informations clés sur votre activité (coordonnées, prestations, horaires, etc.).
                            </li>
                            <li class="custom_bullet">
                                En <span class="span_underline">48h</span> , votre site est en ligne et prêt à attirer vos futurs <span class="span_underline">clients.</span>
                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    title='2. Notre offre'
                    content={`
                        <span class="span_underline">Simplifiez-vous la vie</span> en confiant la création de votre site à des professionnels du digital. Nous mettons tout en œuvre pour que vous soyez <span class="span_underline">visible</span> et <span class="span_underline">attractif</span> pour vos clients.
                        <br/><br/>
                        Ce que comprend notre service :
                        <ul>
                            <li class="custom_bullet">
                                <span class="span_underline">Un site clé en main</span> : Un site internet moderne, clair et optimisé pour mettre en avant vos prestations.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Design professionnel et personnalisé</span> : Chaque template est conçu pour s’adapter à votre activité (plombier, électricien, restaurateur, etc.).
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Adaptation mobile et tablette</span> : Votre site sera parfaitement lisible sur tous les appareils, garantissant une expérience utilisateur optimale.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Optimisation pour le référencement local (SEO)</span> : Vos clients vous trouveront facilement sur Google.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Hébergement et maintenance</span> : Nous nous occupons de tout pour que votre site reste rapide et sécurisé.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Support client</span> : Besoin d’un ajustement ou d’une modification ? Notre équipe est là pour vous accompagner.

                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    title='3. Pourquoi choisir WebEssentiel ?'
                    content={`
                        <ul>
                            <li class="custom_bullet">
                                <span class="span_underline">Rapidité</span> : Votre site est prêt en 48 heures.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Simplicité</span> : Pas besoin de connaissances techniques.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Efficacité</span> : Un site qui attire et convertit vos visiteurs en clients.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Prix attractif</span> : Une solution abordable, pensée pour les artisans.
                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    title='4. Comment ça fonctionne ?'
                    content={`
                        <ol>
                            <li class="custom_bullet">
                                <span class="span_underline">Sélectionnez votre template</span> : Découvrez nos modèles spécialement conçus pour les artisans.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Fournissez vos informations</span> : Remplissez un formulaire simple avec les détails de votre activité.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Validation et mise en ligne</span> : Nous créons votre site et vous le présentons avant publication.
                            </li>
                        </ol>
                        `}
                />
                <footer style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: 'white'
                }}/>
            </article>
            <article className="web_essential_large_page_el2">
                <MessageOfferLargePage />
                <TemplatesOfferLargePage images={images}/>
            </article>
        </section>
    )
}

export default WebEssentialLargePage