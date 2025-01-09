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
        </article>
    )
}

export default CreateAccount