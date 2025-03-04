import '../../styles/large_page.css'

import HeaderLargePage from "../../components/largeScreen/HeaderLargePage"
import OfferTitle from '../../components/largeScreen/OfferTitle'
import OfferIntro from '../../components/largeScreen/OfferIntro'
import OfferParagraph from '../../components/largeScreen/OfferParagraph'

import MessageOfferLargePage from '../../components/largeScreen/MessageOfferLargePage'
import TemplatesOfferLargePage from '../../components/largeScreen/TemplatesOfferLargePage'

import screen01 from '../../assets/template_computer_01_00.png'
import screen02 from '../../assets/template_computer_02_00.png'
import screen03 from '../../assets/pagex_test_03_00.png'
import screen04 from '../../assets/pagex_test_04_00.png'
import screen05 from '../../assets/pagex_test_05_00.png'
import screen06 from '../../assets/pagex_test_06_00.png'
import screen01_01 from '../../assets/template_computer_01_01.png'
import screen02_01 from '../../assets/template_computer_02_01.png'
import screen03_01 from '../../assets/pagex_test_03_01.png'
import screen04_01 from '../../assets/pagex_test_04_01.png'
import screen05_01 from '../../assets/pagex_test_05_01.png'
import screen06_01 from '../../assets/pagex_test_06_01.png'
import screen01_02 from '../../assets/template_computer_01_02.png'
import screen02_02 from '../../assets/template_computer_02_02.png'
import screen03_02 from '../../assets/pagex_test_03_02.png'
import screen04_02 from '../../assets/pagex_test_04_02.png'
import screen05_02 from '../../assets/pagex_test_05_02.png'
import screen06_02 from '../../assets/pagex_test_06_02.png'
import screen01_03 from '../../assets/template_computer_01_03.png'
import screen02_03 from '../../assets/template_computer_02_03.png'
import screen03_03 from '../../assets/pagex_test_03_03.png'
import screen04_03 from '../../assets/pagex_test_04_03.png'
import screen05_03 from '../../assets/pagex_test_05_03.png'
import screen06_03 from '../../assets/pagex_test_06_03.png'

import screen01y from '../../assets/template_smartphone_01_00.png'
import screen02y from '../../assets/template_smartphone_02_00.png'
import screen03y from '../../assets/pagey_test_03_00.png'
import screen04y from '../../assets/pagey_test_04_00.png'
import screen05y from '../../assets/pagey_test_05_00.png'
import screen06y from '../../assets/pagey_test_06_00.png'
import screen01y_01 from '../../assets/template_smartphone_01_01.png'
import screen02y_01 from '../../assets/template_smartphone_02_01.png'
import screen03y_01 from '../../assets/pagey_test_03_01.png'
import screen04y_01 from '../../assets/pagey_test_04_01.png'
import screen05y_01 from '../../assets/pagey_test_05_01.png'
import screen06y_01 from '../../assets/pagey_test_06_01.png'
import screen01y_02 from '../../assets/template_smartphone_01_02.png'
import screen02y_02 from '../../assets/template_smartphone_02_02.png'
import screen03y_02 from '../../assets/pagey_test_03_02.png'
import screen04y_02 from '../../assets/pagey_test_04_02.png'
import screen05y_02 from '../../assets/pagey_test_05_02.png'
import screen06y_02 from '../../assets/pagey_test_06_02.png'
import screen01y_03 from '../../assets/template_smartphone_01_03.png'
import screen02y_03 from '../../assets/template_smartphone_02_03.png'
import screen03y_03 from '../../assets/pagey_test_03_03.png'
import screen04y_03 from '../../assets/pagey_test_04_03.png'
import screen05y_03 from '../../assets/pagey_test_05_03.png'
import screen06y_03 from '../../assets/pagey_test_06_03.png'

const images= [
    {
        imageComputer: [screen01, screen01_01, screen01_02, screen01_03],
        imageSmartphone: [screen01y, screen01y_01, screen01y_02, screen01y_03],
        title: "Adventure",
        description: "Un template de qualité pour votre activité."
    },
    {
        imageComputer: [screen02, screen02_01, screen02_02, screen02_03],
        imageSmartphone: [screen02y, screen02y_01, screen02y_02, screen02y_03],
        title: "Emotion",
        description: "Réhaussez le niveau avec un site adapté à vos identités."
    },
    {
        imageComputer: [screen03, screen03_01, screen03_02, screen03_03],
        imageSmartphone: [screen03y, screen03y_01, screen03y_02, screen03y_03],
        title: "Successful",
        description: "Un site qui réalisera de nombreuses conversion et de client satisfait."
    },
    {
        imageComputer: [screen04, screen04_01, screen04_02, screen04_03],
        imageSmartphone: [screen04y, screen04y_01, screen04y_02, screen04y_03],
        title: "Desired",
        description: "Un site pour les activités proche de l'humain et qui apporte une touche de professionnalisme."
    },
    {
        imageComputer: [screen05, screen05_01, screen05_02, screen05_03],
        imageSmartphone: [screen05y, screen05y_01, screen05y_02, screen05y_03],
        title: "Masterclass",
        description: "Le meilleur moyen de vous démarquer de vos concurents en vous présentant de la meilleures des manières."
    },
    {
        imageComputer: [screen06, screen06_01, screen06_02, screen06_03],
        imageSmartphone: [screen06y, screen06y_01, screen06y_02, screen06y_03],
        title: "KilleApp",
        description: "Un site pour vous présentez facilement et simplement avec les informations adaptées à votre clientèle."
    }
];

function WebEssentialLargePage() {
    return (
        <section className="section_large_page">
            <article className="web_essential_large_page_el1">
                <HeaderLargePage />
                <OfferTitle title="WebEssential"/>
                <OfferIntro text="L’offre parfaite pour débuter son activité sans prise de tête"/>
                <OfferParagraph
                    title='1. Présentation'
                    content={`
                        Avec WebEssential, créer votre site internet n’a jamais été aussi <span class="span_underline">simple</span> :
                        <ul>
                            <li class="custom_bullet">
                                Choisissez le template qui correspond le mieux à votre activité. 
                            </li>
                            <li class="custom_bullet">
                                Contactez-nous en partageant les informations clés sur votre activité (coordonnées, prestations, horaires, etc.).
                            </li>
                            <li class="custom_bullet">
                                En <span class="span_underline">48h</span> , votre site est en ligne et prêt à attirer vos futurs <span class="span_underline">clients.</span>
                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    title='2. Notre offre'
                    content={`
                        <span class="span_underline">Simplifiez-vous la vie</span> en confiant la création de votre site à des professionnels du digital. Nous mettons tout en œuvre pour que vous soyez <span class="span_underline">visible</span> et <span class="span_underline">attractif</span> pour vos clients.
                        <br/><br/>
                        Ce que comprend notre service :
                        <ul>
                            <li class="custom_bullet">
                                <span class="span_underline">Un site clé en main</span> : Un site internet moderne, clair et optimisé pour mettre en avant vos prestations.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Design professionnel et personnalisé</span> : Chaque template est conçu pour s’adapter à votre activité (plombier, électricien, restaurateur, etc.).
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Adaptation mobile et tablette</span> : Votre site sera parfaitement lisible sur tous les appareils, garantissant une expérience utilisateur optimale.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Optimisation pour le référencement local (SEO)</span> : Vos clients vous trouveront facilement sur Google.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Hébergement et maintenance</span> : Nous nous occupons de tout pour que votre site reste rapide et sécurisé.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Support client</span> : Besoin d’un ajustement ou d’une modification ? Notre équipe est là pour vous accompagner.

                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    title='3. Pourquoi choisir WebEssentiel ?'
                    content={`
                        <ul>
                            <li class="custom_bullet">
                                <span class="span_underline">Rapidité</span> : Votre site est prêt en 48 heures.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Simplicité</span> : Pas besoin de connaissances techniques.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Efficacité</span> : Un site qui attire et convertit vos visiteurs en clients.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Prix attractif</span> : Une solution abordable, pensée pour les artisans.
                            </li>
                        </ul>
                        `}
                />
                <OfferParagraph
                    title='4. Comment ça fonctionne ?'
                    content={`
                        <ol>
                            <li class="custom_bullet">
                                <span class="span_underline">Sélectionnez votre template</span> : Découvrez nos modèles spécialement conçus pour les artisans.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Fournissez vos informations</span> : Remplissez un formulaire simple avec les détails de votre activité.
                            </li>
                            <li class="custom_bullet">
                                <span class="span_underline">Validation et mise en ligne</span> : Nous créons votre site et vous le présentons avant publication.
                            </li>
                        </ol>
                        `}
                />
                <footer style={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: 'white'
                }}/>
            </article>
            <article class="web_essential_large_page_el2">
                <MessageOfferLargePage />
                <TemplatesOfferLargePage images={images}/>
            </article>
        </section>
    )
}

export default WebEssentialLargePage