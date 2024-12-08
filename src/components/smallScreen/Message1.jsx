import SmartphoneMessage from "./SmartphoneMessage"

function Message1() {
    return (
        <article className='message1_element'>
            <h2 className='message1_title'>
                Besoin d'augmentez votre clientèle ?
            </h2>
            <p className='message1_subtile'>
                Un site professionnel en <strong className="message1_subtile_strong">3 minutes</strong>, pour être trouvé facilement et attirer de nouveaux clients.
            </p>
            <article className='message1_svg'>
                <SmartphoneMessage />
            </article>
            
        </article>
    )
}

export default Message1