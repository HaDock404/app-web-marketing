import HeaderLargePage from "../components/HeaderLargePage"
import IntroLargePage from "../components/IntroLargePage"

function LargePage() {
    return (
        <section className="page_section">
            <article id="large_page_el1">
                <HeaderLargePage />
                <IntroLargePage />
            </article>
            <article id="large_page_el2"></article>
        </section>
    )
}

export default LargePage