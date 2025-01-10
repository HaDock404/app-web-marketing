import { Link } from "react-router-dom"

function ContactButton() {
    return (
        <button className="button_contact_small_page">
            <Link className="button_contact_small_page-link" to="/">Nous contacter</Link>
        </button>
    )
}

export default ContactButton