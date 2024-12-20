function OfferParagraph({title, content }) {
    return (
        <article className="offer_paragraph_small_page">
            <div className="offer_paragraph_small_page_title">{title}</div>
            <div className="offer_paragraph_small_page_text" dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    )
}

export default OfferParagraph