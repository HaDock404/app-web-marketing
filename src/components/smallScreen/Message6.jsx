import ComputerMessage4 from "./ComputerMessage4"

function Message6() {
    return (
        <article className='message3_element'>
           <ul className="message3_ul">
                <li className="message3_li">
                    <div className="message3_number" style={{backgroundColor:'#6400E3', color:'#ffff'}}>1</div>
                    <div className="message3_text">Sélectionnez votre <strong className="message3_text_strong">activité</strong>.</div>
                </li>
                <li className="message3_li">
                    <div className="message3_number" style={{backgroundColor:'#6400E3', color:'#ffff'}}>2</div>
                    <div className="message3_text">Choisissez un <strong className="message3_text_strong">modèle</strong>.</div>
                </li>
                <li className="message3_li">
                    <div className="message3_number" style={{backgroundColor:'#6400E3', color:'#ffff'}}>3</div>
                    <div className="message3_text">Ajoutez vos <strong className="message3_text_strong">informations</strong>.</div>
                </li>
                <li className="message3_li">
                    <div className="message3_number" style={{backgroundColor:'#ffff', color:'#6400E3'}}>4</div>
                    <div className="message3_text">Publiez en un <strong className="message3_text_strong">clic</strong>.</div>
                </li>
           </ul>
            <article className='message3_svg'>
                <ComputerMessage4/>
            </article>
        </article>
    )
}

export default Message6