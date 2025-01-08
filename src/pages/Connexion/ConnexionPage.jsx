import React, { useState, useEffect } from "react";
import '../../styles/connexion.css'

import ConnexionLargePage from './ConnexionLargePage'
import ConnexionSmallPage from './ConnexionSmallPage'

function ConnexionPage() {
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
        <>{isLargeScreen ? <ConnexionLargePage /> : <ConnexionSmallPage />}</>
    )
}

export default ConnexionPage