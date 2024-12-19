import React, { useState } from "react";
import OfferLoading from "../../components/smallScreen/OfferLoading";

function OffersSmallPage() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <section>
            {isLoading ? (
                <OfferLoading onComplete={handleLoadingComplete} />
            ) : (
                <div className="main-page">
                    <h1>Bienvenue sur la page principale</h1>
                </div>
            )}
        </section>
    )
}

export default OffersSmallPage