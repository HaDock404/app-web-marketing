//burger menu https://alvarotrigo.com/blog/hamburger-menu-css/
import React, { useState, useEffect } from "react";
import '../styles/homepage.css'

import LargePage from './LargePage'
import SmallPage from './SmallPage'

function HomePage() {
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
        <div>{isLargeScreen ? <LargePage /> : <SmallPage />}</div>
    )
}

export default HomePage