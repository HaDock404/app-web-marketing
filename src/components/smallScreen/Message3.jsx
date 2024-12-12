import ComputerMessage1 from "./ComputerMessage1"
import image from '../../assets/test.svg'

const alt = "hey"

function Message3() {
    return (
        <article className='message3_element'>
           <ul className="message3_ul">
                <li className="message3_li">
                    <div className="message3_number" style={{backgroundColor:'#ffff', color:'#6400E3'}}>1</div>
                    <div className="message3_text">Sélectionnez votre <strong className="message3_text_strong">activité</strong>.</div>
                </li>
                <li className="message3_li message_hidden">
                    <div className="message3_number" style={{backgroundColor:'#6400E3', color:'#ffff'}}>2</div>
                    <div className="message3_text">Choisissez un <strong className="message3_text_strong">modèle</strong>.</div>
                </li>
                <li className="message3_li message_hidden">
                    <div className="message3_number" style={{backgroundColor:'#6400E3', color:'#ffff'}}>3</div>
                    <div className="message3_text">Ajoutez vos <strong className="message3_text_strong">informations</strong>.</div>
                </li>
                <li className="message3_li message_hidden">
                    <div className="message3_number" style={{backgroundColor:'#6400E3', color:'#ffff'}}>4</div>
                    <div className="message3_text">Publiez en un <strong className="message3_text_strong">clic</strong>.</div>
                </li>
           </ul>
            <article className='message3_svg'>
                <ComputerMessage1  image={image} alt={alt}/>
            </article>
        </article>
    )
}

export default Message3