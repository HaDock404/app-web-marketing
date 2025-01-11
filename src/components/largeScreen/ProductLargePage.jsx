import { Link } from 'react-router-dom'
import '../../styles/products_large_page.css'
import IconStar from './IconStar'

function ProductLargePage({border, id, title, intro, price,link, button, info_01, info_02, info_03, info_04, style1, info_05, display, greatings}) {
    return (
        <article className='article_product_large_page' style={{border: border}} id={id}>
            <div className='article_product_large_page_title'>{title}</div>
            <div className='article_product_large_page_intro'>{intro}</div>
            <div className='article_product_large_page_price'>{price}</div>
            <Link to={link} className='article_product_large_page_button'>{button}</Link>
            <div className='article_product_large_page_product info-grey'>{info_01}</div>
            <div className='article_product_large_page_product'>{info_02}</div>
            <div className='article_product_large_page_product info-grey' style={{backgroundColor: style1}}>{info_03}</div>
            <div className='article_product_large_progress' style={{display: display}}><IconStar/> {greatings}</div>
        </article>
    )
}

export default ProductLargePage