import '../../styles/large_page.css'

import HeaderLargePage from "../../components/HeaderLargePage"
import OfferTitle from '../../components/OfferTitle'
import OfferIntro from '../../components/OfferIntro'

function WebEssentialLargePage() {
    return (
        <section className="section_large_page">
            <article id="web_essential_large_page_el1">
                <HeaderLargePage />
                <OfferTitle title="WebEssential"/>
                <OfferIntro text="L’offre parfaite pour débuter son activité sans prise de tête"/>
            </article>
            <article id="web_essential_large_page_el2">
            </article>
        </section>
    )
}

export default WebEssentialLargePage