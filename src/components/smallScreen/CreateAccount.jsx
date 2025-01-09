import FacebookLogo from './FacebookLogo.jsx'
import GoogleLogo from './GoogleLogo.jsx'
import InstaLogo from './InstaLogo.jsx'

function CreateAccount() {
    return (
        <article className="create_account_article">
            <h1 className="create_account_h1">Inscription rapide</h1>
            <div className="create_account_tierce-party">
                <button className="create_account_tierce-party_button">
                    <GoogleLogo />
                </button>
                <button className="create_account_tierce-party_button">
                    <FacebookLogo />
                </button>
                <button className="create_account_tierce-party_button" style={{padding:"0"}}>
                    <InstaLogo />
                </button>
            </div>
            <div className='create_account_hr_box'>
                <hr className='create_account_hr'/>
                ou
                <hr className='create_account_hr'/>
            </div>
            <div className='create_account_input_box'>
                <input className='create_account_input' placeholder="Email"/>
                <input className='create_account_input' placeholder="Mot de passe"/>
                <input className='create_account_input' placeholder="Confirmation du mot de passe"/>
            </div>
            <button className='create_account_validation'>Valider</button>
            <div className='create_account_connexion_box'>
                Déjà Client ? <button className='create_account_connexion'>Connection</button>
            </div>
        </article>
    )
}

export default CreateAccount