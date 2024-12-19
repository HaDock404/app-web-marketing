import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import '../../styles/offer_small_page.css';
import IconStar from './IconStar';

function OfferSmallPage({ border, id, title, intro, price, link, button, style1, display, infos }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <article
            className={`article_offer_small_page ${isExpanded ? 'expanded' : ''}`}
            style={{ border: border }}
            id={id}
        >
            <article
                className="offer_small_page_box"
                style={{
                    maxHeight: isExpanded ? 'none' : '360px', // Limite la hauteur si non étendu
                    overflow: isExpanded ? 'visible' : 'hidden', // Gère le débordement
                    transition: 'max-height 0.3s ease',
                }}
            >
                <div className="article_offer_small_page_title">{title}</div>
                <div className="article_offer_small_page_intro">{intro}</div>
                <div className="article_offer_small_page_price">{price}</div>
                <Link to={link} className="article_offer_small_page_button">{button}</Link>
                <div>
                    {infos.map((info, index) => (
                        <div
                            key={index}
                            className={`article_offer_small_page_product ${info.style ? 'info-grey' : ''}`}
                            style={info.style ? { backgroundColor: style1 } : {}}
                        >
                            {info.text}
                        </div>
                    ))}
                </div>
            </article>
            <div className='offer_small_page_mask'></div>
            <div className='article_offer_small_progress' style={{display: display}}><IconStar/></div>
            <button
                onClick={toggleExpand}
                className="scroll-button"
                style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    zIndex: 9,
                    padding: '10px 15px',
                    backgroundColor: '#6400E3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    width: '40px',
                    height:'40px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                }}
            >
                {isExpanded ? '↑' : '↓'}
            </button>
        </article>
    );
}

export default OfferSmallPage;
