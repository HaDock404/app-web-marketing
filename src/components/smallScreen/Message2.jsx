import React, { useState, useEffect } from 'react';

import Smartphone2 from "./SmartphoneMessage2"
import Template1 from "../../assets/template_smartphone_01_00.png"
import Template2 from "../../assets/template_smartphone_02_00.png"

function Message2() {
    const images = [
        { src: Template1, alt: 'Image 1' },
        { src: Template2, alt: 'Image 2' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <article className='message2_element'>
            <p className='message2_subtile'>
                Simplifiez la vie de vos clients : un <strong className="message1_subtile_strong">clic</strong> pour vous contacter ou réserver.
            </p>
            <article className='message2_svg'>
                <Smartphone2 image={images[currentIndex].src} alt={images[currentIndex].alt} />
            </article>

        </article>
    )
}

export default Message2