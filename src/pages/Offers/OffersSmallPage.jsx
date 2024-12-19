import React, { useState } from "react";
import OfferLoading from "../../components/smallScreen/OfferLoading";
import HeaderSmallScreen from "../../components/smallScreen/HeaderSmallScreen";

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
                <>
                    <HeaderSmallScreen />
                </>
            )}
        </section>
    )
}

export default OffersSmallPage