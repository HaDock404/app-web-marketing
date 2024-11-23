import { Link } from 'react-router-dom'
import '../styles/offer_large_page.css'

function OfferLargePage({border="solid 2px #D9D9D9", id='left', title='WebEssential', intro="Présence sur le web + amélioration de votre image de marque avec commentaire et notes.", price="895€",link="/nos-offres", button="Sélectionner WebInfluence", info_01="Site web de votre activité", info_02="SEO/référencement Google", info_03="", style1="", display="", greatings="Recommandé", infos = [
    { text: "info_02", style: "grey" },
    { text: "info_01", style: null },
    { text: "info_02", style: "grey" },
    { text: "info_03", style: null },
    { text: "info_02", style: "grey" },
    { text: "info_01", style: null },
    { text: "info_02", style: "grey" },
    { text: "info_03", style: null },
  ]}) {
    return (
        <article className='article_offer_large_page' style={{border: border}} id={id}>
            <article className='offer_large_page_box'>
                <div className='article_offer_large_page_title'>{title}</div>
                <div className='article_offer_large_page_intro'>{intro}</div>
                <div className='article_offer_large_page_price'>{price}</div>
                <Link to={link} className='article_offer_large_page_button'>{button}</Link>
                <div>
                    {infos.map((info, index) => (
                    <div
                        key={index}
                        className={`article_offer_large_page_product ${info.style ? 'info-grey' : ''}`}
                        style={info.style ? { backgroundColor: style1 } : {}}
                    >{info.text}</div>
                    ))}
                </div>
                
            </article>
            <div className='offer_large_page_mask'></div>
            <div className='article_offer_large_progress' style={{display: display}}>🙈 {greatings}</div>
        </article>
    )
}

export default OfferLargePage