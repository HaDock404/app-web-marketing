//burger menu https://alvarotrigo.com/blog/hamburger-menu-css/
import React, { useState, useEffect } from "react";

import Test1 from './Test1'
import Test2 from './Test2'

function HomePage() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 1000);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>{isLargeScreen ? <Test1 /> : <Test2 />}</div>
    )
}

export default HomePage