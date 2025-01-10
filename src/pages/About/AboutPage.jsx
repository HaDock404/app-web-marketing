import React, { useState, useEffect } from "react";
import '../../styles/about.css'

import AboutLargePage from './AboutLargePage'
import AboutSmallPage from './AboutSmallPage'

function AboutPage() {
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
        <>{isLargeScreen ? <AboutLargePage /> : <AboutSmallPage />}</>
    )
}

export default AboutPage