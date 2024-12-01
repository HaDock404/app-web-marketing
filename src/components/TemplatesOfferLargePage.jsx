import React, { useState } from 'react';
import '../styles/large_page.css'

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
            <div className="carousel">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="carousel-image"
                />
                <div className="carousel-controls">
                    <button onClick={handlePrevious} className="carousel-button">
                    &lt; Image précédente
                    </button>
                    <select
                    onChange={handleSelect}
                    value={currentIndex}
                    className="carousel-dropdown"
                    >
                    {images.map((image, index) => (
                        <option key={index} value={index}>
                        Image {index + 1}
                        </option>
                    ))}
                    </select>
                    <button onClick={handleNext} className="carousel-button">
                    Image suivante &gt;
                    </button>
                </div>
            </div>
        </article>
    )
}

export default TemplatesOfferLargePage