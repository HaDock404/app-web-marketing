import '../styles/header.css'
import { Link } from 'react-router-dom'

function HeaderOffersLargePage() {
    return (
        <header id='header_offers'>
            <h1 id='header_offers_h1'>
                Services Marketing
                <span id='header_offers_h1_span'>.fr</span>
            </h1>

            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn_offers" for="menu__toggle">
                <span></span>
                </label>

                <ul class="menu__box">
                <li><Link class="menu__item" to="/">Nos Offres</Link></li>
                <li><Link class="menu__item" to="/">Connexion à votre compte</Link></li>
                <li><Link class="menu__item" to="/">À Propos</Link></li>
                <li><Link class="menu__item" to="/">Mentions Légales</Link></li>
                <li><Link class="menu__item" to="/">Aide - Contact</Link></li>
                </ul>
            </div>
        </header>

    )
}

export default HeaderOffersLargePage