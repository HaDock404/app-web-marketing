import React, { useState } from 'react';
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
    const navigate = useNavigate();

    const pages = [
        <Message1 />,
        <Message2 />,
        <Message3 />,
        <Message4 />,
        <Message5 />,
        <Message6 />
    ];
    
    const handleNext = () => {
        if (currentPage < pages.length) {
          setCurrentPage(currentPage + 1);
        } else {
            navigate('/nos-offres');
          }
      };
    
      const handlePrevious = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section className='AttractiveMessage_section_page'>
            <article className='AttractiveMessage_article_message'>
                    {pages[currentPage - 1]}
            </article>
            <article className='AttractiveMessage_article_button'>
                <button className='AttractiveMessage_button AttractiveMessage_button_previous' onClick={handlePrevious} disabled={currentPage === 1}>
                    Précédent
                </button>
                <button className='AttractiveMessage_button AttractiveMessage_button_next' onClick={handleNext}>{/*disabled={currentPage === pages.length}*/}
                    Suivant
                </button>
            </article>
            <div className="lineTest"></div>
        </section>
    )
}

export default AttractiveMessage