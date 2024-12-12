import ComputerMessage2 from "./ComputerMessage2"
import image1 from "../../assets/template_computer_01_00.png"
import image2 from "../../assets/template_computer_01_01.png"
import image3 from "../../assets/template_computer_01_02.png"
import image4 from "../../assets/template_computer_01_03.png"

function Message4() {
    return (
        <article className='message3_element'>
           <ul className="message3_ul">
                <li className="message3_li">
                    <div className="message3_number" style={{backgroundColor:'#6400E3', color:'#ffff'}}>1</div>
                    <div className="message3_text">Sélectionnez votre <strong className="message3_text_strong">activité</strong>.</div>
                </li>
                <li className="message3_li">
                    <div className="message3_number" style={{backgroundColor:'#ffff', color:'#6400E3'}}>2</div>
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
                <ComputerMessage2 
                    image1={image1}
                    image2={image1}
                    image3={image2}
                    image4={image3}
                    image5={image4} 
                    alt="template_exemple"/>
            </article>
        </article>
    )
}

export default Message4