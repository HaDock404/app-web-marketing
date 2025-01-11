import '../../styles/offer_large_page.css'
import OfferLargePage from './OfferLargePage'

function AllOffersLargePage() {
    return (
        <section className='section_offer_large_page'>
            <OfferLargePage 
                border="solid 2px #D9D9D9"
                id='left'
                title='WebEssential'
                intro="Nous créons votre présence sur le web afin que vos clients vous trouvent le plus facilement."
                price="498€"
                button="Sélectionner WebEssential"
                link="/web-essential"
                greatings=""
                infos={[
                    { text: "Prise de contact avec nos experts", style: "grey" },
                    { text: "Personnalisation de votre image", style: null },
                    { text: "Création de votre site web", style: "grey" },
                    { text: "Nom de domaine personnalisé", style: null },
                    { text: "Adresse mail personnalisé", style: "grey" },
                    { text: "Qr code ", style: null },
                    { text: "Référencement Google", style: "grey" },
                    { text: "Maintenance de votre site web", style: null },
                    { text: "Sécurisation de votre site web", style: "grey" },
                    { text: "Renouvellement du nom de domaine", style: null },
                ]}
                display="none"
            />
            <OfferLargePage 
                border="solid 2px #6400E3"
                id='left'
                title='WebInfluence'
                intro="Présence sur le web + amélioration de votre image de marque avec commentaire et notes."
                price="895€"
                link="/nos-offres"
                button="Sélectionner WebInfluence"
                greatings="Recommandé"
                infos={[
                    { text: "Prise de contact avec nos experts", style: "grey" },
                    { text: "Personnalisation de votre image", style: null },
                    { text: "Création de votre site web", style: "grey" },
                    { text: "Nom de domaine personnalisé", style: null },
                    { text: "Adresse mail personnalisé", style: "grey" },
                    { text: "Qr code ", style: null },
                    { text: "Référencement Google", style: "grey" },
                    { text: "Maintenance de votre site web", style: null },
                    { text: "Sécurisation de votre site web", style: "grey" },
                    { text: "Renouvellement du nom de domaine", style: null },
                    { text: "Présentation de vos produits", style: "grey" },
                    { text: "Site multi-pages", style: null },
                    { text: "Commentaires positifs", style: "grey" },
                    { text: "Note de clients de 5 étoiles", style: null }
                ]}
            />
            <OfferLargePage 
                border="solid 2px #6400E3"
                id='left'
                title='WebProfessional'
                intro="Présence sur le web + amélioration de votre image de marque avec commentaire et notes + publicité digitale personnalisé "
                price="1205€"
                link="/nos-offres"
                button="Sélectionner WebProfessional"
                greatings="Recommandé"
                infos={[
                    { text: "Prise de contact avec nos experts", style: "grey" },
                    { text: "Personnalisation de votre image", style: null },
                    { text: "Création de votre site web", style: "grey" },
                    { text: "Nom de domaine personnalisé", style: null },
                    { text: "Adresse mail personnalisé", style: "grey" },
                    { text: "Qr code ", style: null },
                    { text: "Référencement Google", style: "grey" },
                    { text: "Maintenance de votre site web", style: null },
                    { text: "Sécurisation de votre site web", style: "grey" },
                    { text: "Renouvellement du nom de domaine", style: null },
                    { text: "Présentation de vos produits", style: "grey" },
                    { text: "Site multi-pages", style: null },
                    { text: "Commentaires positifs", style: "grey" },
                    { text: "Note de clients de 5 étoiles", style: null },
                    { text: "Publicité digitale/réseaux sociaux", style: "grey" }
                ]}
            />
            <OfferLargePage 
                border="solid 2px #6400E3"
                id='left'
                title='WebExpert'
                intro="Présence sur le web + amélioration de votre image de marque avec commentaire et notes + publicité digitale personnalisé + prise de rendez-vous automatisé + base de données clients + relance commercialePrésence sur le web + amélioration de votre image de marque avec commentaire et notes."
                price="2309€"
                link="/nos-offres"
                button="Sélectionner WebExpert"
                greatings="Recommandé"
                infos={[
                    { text: "Prise de contact avec nos experts", style: "grey" },
                    { text: "Personnalisation de votre image", style: null },
                    { text: "Création de votre site web", style: "grey" },
                    { text: "Nom de domaine personnalisé", style: null },
                    { text: "Adresse mail personnalisé", style: "grey" },
                    { text: "Qr code ", style: null },
                    { text: "Référencement Google", style: "grey" },
                    { text: "Maintenance de votre site web", style: null },
                    { text: "Sécurisation de votre site web", style: "grey" },
                    { text: "Renouvellement du nom de domaine", style: null },
                    { text: "Présentation de vos produits", style: "grey" },
                    { text: "Site multi-pages", style: null },
                    { text: "Commentaires positifs", style: "grey" },
                    { text: "Note de clients de 5 étoiles", style: null },
                    { text: "Publicité digitale/réseaux sociaux", style: "grey" },
                    { text: "Planning de rendez-vous", style: null },
                    { text: "Base de données clients", style: "grey" },
                    { text: "Relance commerciale par mail", style: null },
                    { text: "Relance commerciale par sms", style: "grey" }
                ]}
            />
        </section>
        
    )
}

export default AllOffersLargePage