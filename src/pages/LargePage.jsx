import HeaderLargePage from "../components/HeaderLargePage"
import IntroLargePage from "../components/IntroLargePage"
import MessageLargePage from "../components/MessageLargePage"
import ImageLargePage from "../components/ImageLargePage"
import ProductsLargePage from "../components/ProductsLargePage"
import FooterLargePage from "../components/FooterLargePage"

function LargePage() {
    return (
        <section className="page_section">
            <article id="large_page_el1">
                <HeaderLargePage />
                <IntroLargePage />
                <ProductsLargePage />
                <FooterLargePage />
            </article>
            <article id="large_page_el2">
                <MessageLargePage />
                <ImageLargePage />
            </article>
        </section>
    )
}

export default LargePage