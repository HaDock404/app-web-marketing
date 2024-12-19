import React, { useEffect } from "react";
import '../../styles/offer_small_page.css'

function OfferLoading({ onComplete }) {
    useEffect(() => {
        const timer = setTimeout(() => {
          onComplete();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <section className="loading-page">
          <article className="loading-text">Nos offres</article>
        </section>
    );
}

export default OfferLoading