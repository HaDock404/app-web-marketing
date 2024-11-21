//burger menu https://alvarotrigo.com/blog/hamburger-menu-css/
import React, { useState, useEffect } from "react";

import LargePage from './LargePage'
import SmallPage from './SmallPage'

function HomePage() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 850);

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 850);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>{isLargeScreen ? <LargePage /> : <SmallPage />}</div>
    )
}

export default HomePage