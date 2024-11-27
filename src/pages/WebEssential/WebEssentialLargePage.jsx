import '../../styles/large_page.css'

import HeaderLargePage from "../../components/HeaderLargePage"
import OfferTitle from '../../components/OfferTitle'
import OfferIntro from '../../components/OfferIntro'
import OfferParagraph from '../../components/OfferParagraph'

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
                        Avec WebEssential c’est <span class="span_underline">simple</span> :
                        <ul>
                            <li class="custom_bullet">
                                Vous sélectionnez le template qui vous correspond le mieux. 
                            </li>
                            <li class="custom_bullet">
                                Vous nous contactez en nous donnant les informations qui apparaitront sur votre site
                            </li>
                            <li class="custom_bullet">
                                En <span class="span_underline">48h</span> votre site est en ligne et vos <span class="span_underline">clients</span> commencent à vous contacter
                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    title='1. Présentation'
                    content={`
                        Avec WebEssential c’est <span class="span_underline">simple</span> :
                        <ul>
                            <li class="custom_bullet">
                                Vous sélectionnez le template qui vous correspond le mieux. 
                            </li>
                            <li class="custom_bullet">
                                Vous nous contactez en nous donnant les informations qui apparaitront sur votre site
                            </li>
                            <li class="custom_bullet">
                                En <span class="span_underline">48h</span> votre site est en ligne et vos <span class="span_underline">clients</span> commencent à vous contacter
                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    title='1. Présentation'
                    content={`
                        Avec WebEssential c’est <span class="span_underline">simple</span> :
                        <ul>
                            <li class="custom_bullet">
                                Vous sélectionnez le template qui vous correspond le mieux. 
                            </li>
                            <li class="custom_bullet">
                                Vous nous contactez en nous donnant les informations qui apparaitront sur votre site
                            </li>
                            <li class="custom_bullet">
                                En <span class="span_underline">48h</span> votre site est en ligne et vos <span class="span_underline">clients</span> commencent à vous contacter
                            </li>
                        </ul>
                        `}
                />
            </article>
            <article className="web_essential_large_page_el2">
            </article>
        </section>
    )
}

export default WebEssentialLargePage