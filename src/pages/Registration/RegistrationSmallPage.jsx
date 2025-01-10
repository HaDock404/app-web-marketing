import React from "react";
import { useLocation } from "react-router-dom";

import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'
import RegistrationTitle from '../../components/smallScreen/RegistrationTitle'
import CreateAccount from "../../components/smallScreen/CreateAccount";

function RegistrationSmallPage() {
    const location = useLocation();
    const { dataIndex } = location.state || {};
    
    return (
        <section data={dataIndex} className="registration_small_page">
            <article className="registration_small_page_el1">
                <HeaderSmallScreen />
                <RegistrationTitle title="Créez votre compte pour booster votre activité"/>
            </article>
            <article className="registration_small_page_el2">
                <CreateAccount />
            </article>
        </section>
    )
}

export default RegistrationSmallPage