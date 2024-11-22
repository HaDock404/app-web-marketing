import React from 'react';

import '../styles/products_large_page.css'
import ProductLargePage from './ProductLargePage'

function ProductsLargePage() {
    return (
        <section className='section_products_large_page'>
            <ProductLargePage 
                id='left'
                title="WebEssential"
                border="solid 2px #D9D9D9"
                display="none"
                intro="Nous créons votre présence sur le web afin que vos clients vous trouvent le plus facilement."
                price="498€"
                button="Sélectionner WebEssential"
                link='/nos-offres'
                info_01="Site web de votre activité"
                info_02="SEO/référencement Google"
                info_03=""
                greatings=""
                style1="white"
            />
            <ProductLargePage 
                id='right'
                title="WebInfluence"
                border="solid 2px #6400E3"
                display=""
                intro="Présence sur le web + amélioration de votre image de marque avec commentaire et notes."
                price="895€"
                button="Sélectionner WebInfluence"
                link='/nos-offres'
                info_01="Site web de votre activité"
                info_02="SEO/référencement Google"
                info_03="Commentaires et notes positives"
                greatings="Recommandé"
                style1='#C7C7C7'
            />
        </section>
    )
}

export default ProductsLargePage