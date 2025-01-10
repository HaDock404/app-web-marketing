import { Link } from 'react-router-dom'

import FacebookLogo from './FacebookLogo.jsx'
import GoogleLogo from './GoogleLogo.jsx'
import InstaLogo from './InstaLogo.jsx'

function CreateAccount() {
    return (
        <article className="connexion_article">
            <h1 className="connexion_h1">Connexion rapide</h1>
            <div className="connexion_tierce-party">
                <button className="connexion_tierce-party_button">
                    <GoogleLogo />
                </button>
                <button className="connexion_tierce-party_button">
                    <FacebookLogo />
                </button>
                <button className="connexion_tierce-party_button" style={{padding:"0"}}>
                    <InstaLogo />
                </button>
            </div>
            <div className='connexion_hr_box'>
                <hr className='connexion_hr'/>
                ou
                <hr className='connexion_hr'/>
            </div>
            <div className='connexion_input_box'>
                <input className='connexion_input' placeholder="Email"/>
                <input className='connexion_input' placeholder="Mot de passe"/>
            </div>
            <button className='connexion_validation'>Valider</button>
            <div className='connexion_registration_box'>
                Oups !! pas encore de compte ?<br/><Link to="/registration" className='connexion_registration'>Créer un compte</Link>
            </div>
        </article>
    )
}

export default CreateAccount