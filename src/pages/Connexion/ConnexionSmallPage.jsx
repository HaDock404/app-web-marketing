import React from "react";
import { useLocation } from "react-router-dom";

function ConnexionSmallPage() {
    const location = useLocation();
    const { currentIndex } = location.state || {};
    
    return (
        <div>
            <h1>Nouvelle Page</h1>
            <p>Valeur de currentIndex : {currentIndex}</p>
        </div>
    )
}

export default ConnexionSmallPage