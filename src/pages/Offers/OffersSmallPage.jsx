import React, { useState } from "react";
import OfferLoading from "../../components/smallScreen/OfferLoading";
import HeaderSmallScreen from "../../components/smallScreen/HeaderSmallScreen";
import AllOffersSmallPage from "../../components/smallScreen/AllOffersSmallPage";

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
                    <AllOffersSmallPage />
                </>
            )}
        </section>
    )
}

export default OffersSmallPage