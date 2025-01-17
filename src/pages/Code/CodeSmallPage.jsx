import React from 'react';

import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'
import CodeTitle from '../../components/smallScreen/CodeTitle'
import FormCode from '../../components/smallScreen/FormCode';

function CodeSmallPage() {

    return (
        <section className="code_small_page">
            <article className="code_small_page_el1">
                <HeaderSmallScreen />
                <CodeTitle title="Plus qu'une étape.."/>
            </article>
            <article className="code_small_page_el2">
                <FormCode />
            </article>
        </section>
    )
}

export default CodeSmallPage