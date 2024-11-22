import '../styles/intro_large_page.css'
import { Link } from 'react-router-dom'

function IntroLargePage() {
    return (
        <article id='article_intro_large_page'>
            <h2 id="intro_large_page_h2">
                Besoin d'augmentez votre clientèle ?
            </h2>
            <p id='intro_large_page_p'>
                Ne loupez plus aucune opportunitée grâce à notre méthode marketing adapté à votre secteur d’activité.
            </p>
            <Link to="/nos-offres" id='intro_large_page_button'>
                Découvrir
            </Link>
        </article>
    )
}

export default IntroLargePage