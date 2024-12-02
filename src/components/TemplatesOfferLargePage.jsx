import React, { useState } from 'react';
import '../styles/large_page.css'
import Computer from './Computer';
import ComputerIcon from './ComputerIcon'
import SmartphoneIcon from './SmartphoneIcon'

function TemplatesOfferLargePage({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const handleSelect = (event) => {
        setCurrentIndex(Number(event.target.value));
    };

    return (
        <article className='templates_offer_large_page'>
            <div className="templates_offer_large_page_carousel">
                <Computer 
                    image={images[currentIndex].imageComputer}
                    alt={`Image ${currentIndex + 1} - ${images[currentIndex].title}`}
                
                />
                <div className="templates_offer_large_page_carousel-controls">
                    <button onClick={handlePrevious} className="templates_offer_large_page_carousel-button">
                    &lt; Précédent
                    </button>
                    <select
                    onChange={handleSelect}
                    value={currentIndex}
                    className="templates_offer_large_page_carousel-dropdown"
                    >
                    {images.map((image, index) => (
                        <option key={index} value={index}>
                        {image.title}
                        </option>
                    ))}
                    </select>
                    <button onClick={handleNext} className="templates_offer_large_page_carousel-button">
                    Suivant &gt;
                    </button>
                </div>



                <div className='templates_offer_large_page_device'>
                    <button className='templates_offer_large_page_device-button'>
                        <ComputerIcon color='#6400E3'/>
                    </button>
                    <button className='templates_offer_large_page_device-button'>
                        < SmartphoneIcon color='#6400E3'/>
                    </button>
                </div>



            </div>
            <div className='templates_offer_large_page_description'>{images[currentIndex].description}</div>
        </article>
    )
}

export default TemplatesOfferLargePage