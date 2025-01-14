import React, { useState, useEffect } from "react";
import '../../styles/code.css'

import CodeLargePage from './CodeLargePage'
import CodeSmallPage from './CodeSmallPage'

function CodePage() {
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
        <>{isLargeScreen ? <CodeLargePage /> : <CodeSmallPage />}</>
    )
}

export default CodePage