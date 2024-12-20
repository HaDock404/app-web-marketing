function OfferParagraph({title, content, id }) {
    return (
        <div className="offer_paragraph_small_page">
            <input type="checkbox"  id={id}></input>
            <label htmlFor={id} className="box-header">
                <h3 className="offer_paragraph_small_page_title">
                    {title}
                </h3>
            </label>
            <div className="box-content">
                <div className="offer_paragraph_small_page_text" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}

export default OfferParagraph

{/*<article className="offer_paragraph_small_page">
            <div className="offer_paragraph_small_page_title">{title}</div>
            <div className="offer_paragraph_small_page_text" dangerouslySetInnerHTML={{ __html: content }} />
        </article>*/}