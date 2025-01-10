import '../styles/header.css'
import { Link } from 'react-router-dom'

function HeaderLargePage() {
    return (
        <header id='header'>
            <Link to='/' id='header_h1'>
                Services Marketing
                <span id='header_h1_span'>.fr</span>
            </Link>

            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" for="menu__toggle">
                <span></span>
                </label>

                <ul className="menu__box">
                <li><Link className="menu__item" to="/nos-offres">Nos Offres</Link></li>
                <li><Link className="menu__item" to="/connexion">Connexion à votre compte</Link></li>
                <li><Link className="menu__item" to="/a-propos">À Propos</Link></li>
                <li><Link className="menu__item" to="/mentions-legales">Mentions Légales</Link></li>
                <li><Link className="menu__item" to="/">Aide - Contact</Link></li>
                </ul>
            </div>
            <div id='header_offers_mask'></div>
        </header>

    )
}

export default HeaderLargePage