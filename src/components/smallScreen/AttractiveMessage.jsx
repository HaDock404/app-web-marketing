import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/attractive_message.css'

import Test1 from './Message1';
import Test2 from './Message2';
import Test3 from './Message3';

function AttractiveMessage() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const pages = [
        <Test1 />,
        <Test2 />,
        <Test3 />,
        <Test1 />,
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
                <button className='AttractiveMessage_button_previous' onClick={handlePrevious} disabled={currentPage === 1}>
                    Précédent
                </button>
                <button className='AttractiveMessage_button_next' onClick={handleNext}>{/*disabled={currentPage === pages.length}*/}
                    Suivant
                </button>
            </article>
    </section>
    )
}

export default AttractiveMessage