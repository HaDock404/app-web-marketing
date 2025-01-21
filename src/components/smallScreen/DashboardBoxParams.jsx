import BillIcon from './BillIcon'
import CardIcon from './CardIcon'
import CodeIcon from './CodeIcon'
import GiftIcon from './GiftIcon'
import MailIcon from './MailIcon'
import SubIcon from './SubIcon'

function DashboardBoxParams() {
    return (
        <article className="dashboard_box_params_article">
            <div className="dashboard_box_params_title">Gestion de votre compte</div>
            <ul className='dashboard_box_params_ul'>
                <li>Parrainer un ami</li>
                <li>Modifier la carte de crédit</li>
                <li>Abonnement</li>
                <li>E-mail & Mot de passe</li>
                <li>Factures</li>
                <li>Code de Promotion</li>
            </ul>
        </article>
    )
}

export default DashboardBoxParams