import React, { useState, useEffect } from "react";
import '../../styles/dashboard.css'

import DashboardLargePage from './DashboardLargePage'
import DashboardSmallPage from './DashboardSmallPage'

function DashboardPage() {
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
        <>{isLargeScreen ? <DashboardLargePage /> : <DashboardSmallPage />}</>
    )
}

export default DashboardPage