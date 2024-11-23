import { Link } from 'react-router-dom'
import '../styles/offer_large_page.css'
import IconStar from './IconStar'

function OfferLargePage({border, id, title, intro, price,link, button, style1, display, greatings, infos}) {
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
            <div className='article_offer_large_progress' style={{display: display}}><IconStar/> {greatings}</div>
        </article>
    )
}

export default OfferLargePage