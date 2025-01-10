import '../../styles/header.css'
import { Link } from 'react-router-dom'

function HeaderSmallScreen() {
    return (
        <header className='header_offers'>
            <Link to='/nos-offres' className='header_offers_h1_small'>
                Services Marketing
                <span className='header_offers_h1_span_small'>.fr</span>
            </Link>

            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn_offers" for="menu__toggle">
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
            <div className='header_mask_offers_small'></div>
         </header>
    )
}

export default HeaderSmallScreen