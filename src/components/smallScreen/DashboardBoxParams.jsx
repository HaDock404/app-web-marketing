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
                <li className="dashboard_box_params_li">
                    <div className="dashboard_box_params_svg">
                        <GiftIcon />
                    </div>
                    Parrainer un ami
                </li>
                <li className="dashboard_box_params_li">
                    <div className="dashboard_box_params_svg">
                        <CardIcon />
                    </div>
                    Modifier la carte de crédit
                </li>
                <li className="dashboard_box_params_li">
                    <div className="dashboard_box_params_svg">
                        <SubIcon />
                    </div>
                    Abonnement
                </li>
                <li className="dashboard_box_params_li">
                    <div className="dashboard_box_params_svg">
                        <MailIcon />
                    </div>
                    E-mail & Mot de passe
                </li>
                <li className="dashboard_box_params_li">
                    <div className="dashboard_box_params_svg">
                        <BillIcon />
                    </div>
                    Factures
                </li>
                <li className="dashboard_box_params_li">
                    <div className="dashboard_box_params_svg">
                        <CodeIcon />
                    </div>
                    Code & Promotion
                </li>
            </ul>
        </article>
    )
}

export default DashboardBoxParams