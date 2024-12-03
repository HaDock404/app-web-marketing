import React, { useState } from 'react';
import '../styles/large_page.css'
import Computer from './Computer';
import ComputerIcon from './ComputerIcon'
import Smartphone from './Smartphone'
import SmartphoneIcon from './SmartphoneIcon'

function TemplatesOfferLargePage({ images }) {
    const [ImageIndex, setImageIndex] = useState(0)

    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
        setImageIndex(0)
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
        setImageIndex(0)
    };
    const handleSelect = (event) => {
        setCurrentIndex(Number(event.target.value));
        setImageIndex(0)
    };

    const [selectedDevice, setSelectedDevice] = useState('computer');
    const handleButtonClick = (device) => {
        if (selectedDevice !== device) {
            setSelectedDevice(device);
            setImageIndex(0)
          }
     };

    
    const handleImageIndex = (image_index) => {
        setImageIndex(image_index)
    };

    return (
        <article className='templates_offer_large_page'>
            <div className="templates_offer_large_page_carousel">
                {selectedDevice === 'computer' ? (
                    <Computer
                    image={images[currentIndex].imageComputer[ImageIndex]}
                    alt={`Image ${currentIndex + 1} - ${images[currentIndex].title}`}
                />
                ) : (
                    <Smartphone
                        image={images[currentIndex].imageSmartphone[ImageIndex]}
                        alt={`Image ${currentIndex + 1} - ${images[currentIndex].title}`}
                    />
                )}
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
                <div className="templates_offer_large_page_device">
                    <button
                        className={`templates_offer_large_page_device-button ${
                        selectedDevice === 'computer' ? 'active' : ''
                        }`}
                        onClick={() => handleButtonClick('computer')}
                    >
                        <ComputerIcon color={selectedDevice === 'computer' ? '#FFFFFF' : '#6400E3'} />
                    </button>
                    <button
                        className={`templates_offer_large_page_device-button ${
                        selectedDevice === 'smartphone' ? 'active' : ''
                        }`}
                        onClick={() => handleButtonClick('smartphone')}
                    >
                        <SmartphoneIcon color={selectedDevice === 'smartphone' ? '#FFFFFF' : '#6400E3'} />
                    </button>
                </div>



                <div className="templates_offer_large_page_multiple_page">
                    
          

                    {selectedDevice === 'computer' ? (
                        images[currentIndex].imageComputer.map((image, index) => (
                            <button
                            key={index}
                            className={`templates_offer_large_page_multiple_page_box ${
                                ImageIndex === index ? 'active' : ''
                            }`}
                            onClick={() => handleImageIndex(index)}
                            style={{
                                backgroundColor: ImageIndex === index ? '#6400E3' : 'white',
                            }}
                            >
                                <img
                                    className="templates_offer_large_page_multiple_page_box_image"
                                    src={image}
                                    alt={`Image ${currentIndex + 1} - ${images[currentIndex].title}`}
                                />
                            </button>
                        ))
                    ) : (
                        images[currentIndex].imageSmartphone.map((image, index) => (
                            <button
                            key={index}
                            className={`templates_offer_large_page_multiple_page_box ${
                                ImageIndex === index ? 'active' : ''
                            }`}
                            onClick={() => handleImageIndex(index)}
                            style={{
                                backgroundColor: ImageIndex === index ? '#6400E3' : 'white',
                            }}
                            >
                                <img
                                    className="templates_offer_large_page_multiple_page_box_image"
                                    src={image}
                                    alt={`Image ${currentIndex + 1} - ${images[currentIndex].title}`}
                                />
                            </button>
                        ))
                    )}
                </div>



            </div>
            <div className='templates_offer_large_page_description'>{images[currentIndex].description}</div>
        </article>
    )
}

export default TemplatesOfferLargePage