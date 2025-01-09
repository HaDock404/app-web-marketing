import React from "react";
import { useLocation } from "react-router-dom";

import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'
import ConnexionTitle from '../../components/smallScreen/ConnexionTitle'
import CreateAccount from "../../components/smallScreen/CreateAccount";

function ConnexionSmallPage() {
    const location = useLocation();
    const { dataIndex } = location.state || {};
    
    return (
        <section data={dataIndex} className="connexion_small_page">
            <article className="connexion_small_page_el1">
                <HeaderSmallScreen />
                <ConnexionTitle title="Créez votre compte pour booster votre activité"/>
            </article>
            <article className="connexion_small_page_el2">
                <CreateAccount />
            </article>
        </section>
    )
}

export default ConnexionSmallPage