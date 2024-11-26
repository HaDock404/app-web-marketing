import React, { useState, useEffect } from "react";

import WebEssentialLargePage from './WebEssentialLargePage'
import WebEssentialSmallPage from './WebEssentialSmallPage'

function WebEssentialPage() {
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
        <>{isLargeScreen ? <WebEssentialLargePage /> : <WebEssentialSmallPage />}</>
    )
}

export default WebEssentialPage