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
                    <li><Link className="menu__item" to="/">Nos Offres</Link></li>
                    <li><Link className="menu__item" to="/">Connexion à votre compte</Link></li>
                    <li><Link className="menu__item" to="/">À Propos</Link></li>
                    <li><Link className="menu__item" to="/">Mentions Légales</Link></li>
                    <li><Link className="menu__item" to="/">Aide - Contact</Link></li>
                </ul>
            </div>
            <div className='header_mask_offers_small'></div>
         </header>
    )
}

export default HeaderSmallScreen