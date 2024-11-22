import React, { useState, useEffect } from "react";
import '../styles/offerspage.css'

import OffersLargePage from './OffersLargePage'
import OffersSmallPage from './OffersSmallPage'

function OffersPage() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 1024);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>{isLargeScreen ? <OffersLargePage /> : <OffersSmallPage />}</div>
    )
}

export default OffersPage