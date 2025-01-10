import React, { useState, useEffect } from "react";
import '../../styles/registration.css'

import RegistrationLargePage from './RegistrationLargePage'
import RegistrationSmallPage from './RegistrationSmallPage'

function RegistrationPage() {
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
        <>{isLargeScreen ? <RegistrationLargePage /> : <RegistrationSmallPage />}</>
    )
}

export default RegistrationPage