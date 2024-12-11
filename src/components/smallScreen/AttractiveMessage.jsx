import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/attractive_message.css'

import Message1 from './Message1';
import Message2 from './Message2';
import Message3 from './Message3';
import Message4 from './Message4';
import Message5 from './Message5';
import Message6 from './Message6';

function AttractiveMessage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const navigate = useNavigate();

    const pages = [
        <Message1 />,
        <Message2 />,
        <Message3 />,
        <Message4 />,
        <Message5 />,
        <Message6 />
    ];

    const handlePageChange = (nextPage) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage(nextPage);
        }, 500);
        //setCurrentPage(nextPage)
    };

    const handleNext = () => {
        if (currentPage < pages.length) {
            handlePageChange(currentPage + 1);
        } else {
            navigate('/nos-offres');
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };


    const handleImagesLoaded = () => {
        setIsTransitioning(false); // Masquer la transition une fois les images chargées
    };

    useEffect(() => {
        const images = document.querySelectorAll('.loading_img');
        const minLoadTime = new Promise((resolve) => setTimeout(resolve, 500));
        const imageLoadPromises = Array.from(images).map(
            (img) =>
                new Promise((resolve) => {
                    if (img.complete) {
                        resolve(); // L'image est déjà chargée
                    } else {
                        img.onload = resolve; // Résoudre la promesse à la fin du chargement
                        img.onerror = resolve; // Résoudre même en cas d'erreur
                    }
                })
        );

        Promise.all([minLoadTime, ...imageLoadPromises]).then(() => {
            setIsTransitioning(false); // Masquer la transition après le délai minimal et le chargement des images
            handleImagesLoaded();
        });

    }, [currentPage])

    return (
        <section className='AttractiveMessage_section_page'>
            {isTransitioning && (
                <div className="loading-screen">
                    <div className="loading-icon">Chargement...</div>
                </div>
            )}
            <article
                className={`AttractiveMessage_article_message ${
                    isTransitioning ? 'hidden' : ''
                }`}
            >
                    {pages[currentPage - 1]}
            </article>
            <article className='AttractiveMessage_article_button'>
                <button className='AttractiveMessage_button AttractiveMessage_button_previous' onClick={handlePrevious} disabled={currentPage === 1 || isTransitioning}>
                    Précédent
                </button>
                <button className='AttractiveMessage_button AttractiveMessage_button_next' onClick={handleNext} disabled={isTransitioning}>{/*disabled={currentPage === pages.length}*/}
                    Suivant
                </button>
            </article>
        </section>
    )
}

export default AttractiveMessage