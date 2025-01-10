import React from "react";
import { useLocation } from "react-router-dom";

import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'
import ConnexionTitle from '../../components/smallScreen/ConnexionTitle'
import ConnexionAccount from "../../components/smallScreen/ConnexionAccount";

function ConnexionSmallPage() {
    const location = useLocation();
    const { dataIndex } = location.state || {};
    
    return (
        <section data={dataIndex} className="connexion_small_page">
            <article className="connexion_small_page_el1">
                <HeaderSmallScreen />
                <ConnexionTitle title="Le succès de votre activité commence ici : connectez-vous pour briller"/>
            </article>
            <article className="connexion_small_page_el2">
                <ConnexionAccount />
            </article>
        </section>
    )
}

export default ConnexionSmallPage