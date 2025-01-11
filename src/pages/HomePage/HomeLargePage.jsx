import HeaderLargePage from "../../components/largeScreen/HeaderLargePage"
import IntroLargePage from "../../components/largeScreen/IntroLargePage"
import MessageLargePage from "../../components/largeScreen/MessageLargePage"
import ImageLargePage from "../../components/largeScreen/ImageLargePage"
import ProductsLargePage from "../../components/largeScreen/ProductsLargePage"
import FooterLargePage from "../../components/largeScreen/FooterLargePage"

function HomeLargePage() {
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

export default HomeLargePage