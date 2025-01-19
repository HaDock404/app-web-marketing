import DisconnectIcon from "./DisconnectIcon"

function Disconnect() {
    return (
        <section className="disconnect_small_page">
            <button className="button_disconnect_small_page">
                <div className="icon_disconnect_small_page">
                    <DisconnectIcon color="#6400E3" />
                </div>
                <div className="text_disconnect_small_page">
                    Déconnexion
                </div>
            </button>
        </section>
        
    )
}

export default Disconnect