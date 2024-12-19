import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';
import '../../styles/offer_small_page.css'
import IconStar from '../IconStar'

function OfferSmallPage({border, id, title, intro, price,link, button, style1, display, greatings, infos}) {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const scrollableRef = useRef(null);

    // Vérifie si l'utilisateur est en bas de l'élément défilable
    const handleScroll = () => {
        const element = scrollableRef.current;
        if (element) {
            // Tolérance pour éviter les erreurs d'arrondi
            const tolerance = 5;
            const isBottom =
                Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) <= tolerance;
            setIsAtBottom(isBottom);
        }
    };

    // Fait défiler en haut ou en bas selon l'état
    const scrollTo = () => {
        const element = scrollableRef.current;
        if (element) {
            element.scrollTo({
                top: isAtBottom ? 0 : element.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const element = scrollableRef.current;
        if (element) {
            element.addEventListener('scroll', handleScroll);
            return () => element.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    return (
        <article className='article_offer_small_page' style={{border: border}} id={id}>
            <article className='offer_small_page_box' ref={scrollableRef}>
                <div className='article_offer_small_page_title'>{title}</div>
                <div className='article_offer_small_page_intro'>{intro}</div>
                <div className='article_offer_small_page_price'>{price}</div>
                <Link to={link} className='article_offer_small_page_button'>{button}</Link>
                <div>
                    {infos.map((info, index) => (
                    <div
                        key={index}
                        className={`article_offer_small_page_product ${info.style ? 'info-grey' : ''}`}
                        style={info.style ? { backgroundColor: style1 } : {}}
                    >{info.text}</div>
                    ))}
                </div>
                
            </article>
            <div className='offer_small_page_mask'></div>
            <div className='article_offer_small_progress' style={{display: display}}><IconStar/> {greatings}</div>
            <button
                onClick={scrollTo}
                className="scroll-button"
                style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    zIndex: 1000,
                    padding: '10px 15px',
                    backgroundColor: '#6400E3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                }}
            >
                {isAtBottom ? '↑' : '↓'}
            </button>
        </article>
    )
}

export default OfferSmallPage