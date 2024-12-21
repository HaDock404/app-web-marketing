import '../../styles/small_page.css'

import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'
import OfferTitle from '../../components/smallScreen/OfferTitle'
import OfferIntro from '../../components/smallScreen/OfferIntro'
import OfferParagraph from '../../components/smallScreen/OfferParagraph'
import MessageOfferSmallPage from '../../components/smallScreen/MessageOfferSmallPage'

function WebEssentialSmallPage() {
    return (
        <section className="section_small_page">
            <article className="web_essential_small_page_el1">
                <HeaderSmallScreen />
                <OfferTitle title="WebEssential"/>
                <OfferIntro text="L’offre parfaite pour débuter son activité sans prise de tête"/>
                <OfferParagraph
                    id="1"
                    title='1. Présentation ⌵'
                    content={`
                        Avec WebEssential, créer votre site internet n’a jamais été aussi <span class="span_underline_small_page">simple</span> :
                        <ul class="custome_ul_ol">
                            <li class="custom_bullet">
                                Choisissez le template qui correspond le mieux à votre activité. 
                            </li>
                            <li class="custom_bullet">
                                Contactez-nous en partageant les informations clés sur votre activité (coordonnées, prestations, horaires, etc.).
                            </li>
                            <li class="custom_bullet">
                                En <span class="span_underline_small_page">48h</span> , votre site est en ligne et prêt à attirer vos futurs <span class="span_underline_small_page">clients.</span>
                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    id="2"
                    title='2. Notre offre ⌵'
                    content={`
                        <span class="span_underline_small_page">Simplifiez-vous la vie</span> en confiant la création de votre site à des professionnels du digital. Nous mettons tout en œuvre pour que vous soyez <span class="span_underline_small_page">visible</span> et <span class="span_underline_small_page">attractif</span> pour vos clients.
                        <br/><br/>
                        Ce que comprend notre service :
                        <ul class="custome_ul_ol">
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Un site clé en main</span> : Un site internet moderne, clair et optimisé pour mettre en avant vos prestations.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Design professionnel et personnalisé</span> : Chaque template est conçu pour s’adapter à votre activité (plombier, électricien, restaurateur, etc.).
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Adaptation mobile et tablette</span> : Votre site sera parfaitement lisible sur tous les appareils, garantissant une expérience utilisateur optimale.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Optimisation pour le référencement local (SEO)</span> : Vos clients vous trouveront facilement sur Google.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Hébergement et maintenance</span> : Nous nous occupons de tout pour que votre site reste rapide et sécurisé.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Support client</span> : Besoin d’un ajustement ou d’une modification ? Notre équipe est là pour vous accompagner.

                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    id="3"
                    title='3. Pourquoi choisir WebEssentiel ? ⌵'
                    content={`
                        <ul class="custome_ul_ol">
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Rapidité</span> : Votre site est prêt en 48 heures.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Simplicité</span> : Pas besoin de connaissances techniques.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Efficacité</span> : Un site qui attire et convertit vos visiteurs en clients.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Prix attractif</span> : Une solution abordable, pensée pour les artisans.
                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    id="4"
                    title='4. Comment ça fonctionne ? ⌵'
                    content={`
                        <ol class="custome_ul_ol">
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Sélectionnez votre template</span> : Découvrez nos modèles spécialement conçus pour les artisans.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Fournissez vos informations</span> : Remplissez un formulaire simple avec les détails de votre activité.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline_small_page">Validation et mise en ligne</span> : Nous créons votre site et vous le présentons avant publication.
                            </li>
                        </ol>
                        `}
                />
            </article>
            <article className="web_essential_small_page_el2">
                <MessageOfferSmallPage/>
            </article>
        </section>
    )
}

export default WebEssentialSmallPage