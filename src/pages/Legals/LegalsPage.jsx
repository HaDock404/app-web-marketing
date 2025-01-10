import React, { useState, useEffect } from "react";
import '../../styles/legals.css'

import LegalsLargePage from './LegalsLargePage'
import LegalsSmallPage from './LegalsSmallPage'

function LegalsPage() {
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
        <>{isLargeScreen ? <LegalsLargePage /> : <LegalsSmallPage />}</>
    )
}

export default LegalsPage