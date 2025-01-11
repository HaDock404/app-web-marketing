import { Link } from 'react-router-dom'

import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'

function LegalsSmallPage() {
    const website = "website.fr"
    const company = "company"
    const adress = "adress"
    const siret = "000000000000"
    const mail = "mail@mail.com"
    const name1 = "name"
    return (
        <section className="legals_small_page">
            <HeaderSmallScreen />
            <article className="legals_small_page_el1">
                <h1 className='title_legals_small_page'>
                    1. Mentions légales
                </h1>
                <h1 className='title_legals_small_page'>
                    Identité :
                </h1>
                <div className='paragraph_legals_small_page'>
                    Le site {website} est édité par {company}, société par actions simplifiée au capital de mille euros (1000€)
                </div>
                <div className='paragraph_legals_small_page'>
                    Siège social : {adress}
                </div>
                <div className='paragraph_legals_small_page'>
                    Siret : {siret}
                </div>
                <div className='paragraph_legals_small_page'>
                    représentée par :
                </div>
                <div className='paragraph_legals_small_page'>
                    {name1}
                </div>

                <h1 className='title_legals_small_page'>
                    Condition d’utilisation du site
                </h1>
                <div className='paragraph_legals_small_page'>
                    La visite de {website}  implique l’acceptation pleine de notre Politique de confidentialité et de nos Conditions générales de vente.
                </div>

                <h1 className='title_legals_small_page'>
                    Propriété intellectuelle
                </h1>
                <div className='paragraph_legals_small_page'>
                    Le site {website}, sa structure, les contenus et les images présentes sur le site sont la propriété de {company} et ne peuvent être réutilisé sans l’accord préalable écrit d’un des représentants de l’entreprise.
                </div>
                <div className='paragraph_legals_small_page'>
                    Pour toutes demandes d’exploitations d’éléments du site, merci d’envoyer un mail à {mail}
                </div>
                <h1 className='title_legals_small_page'>
                    2. Politique de Confidentialité
                </h1>
                <h1 className='title_legals_small_page'>
                    Introduction
                </h1>
                <div className='paragraph_legals_small_page'>
                    Dans le cadre de son activité, la société {company}, dont le siège social est situé au {adress}, est amenée à collecter et à traiter des informations dont certaines sont qualifiées de « données personnelles ». {company} attache une grande importance au respect de la vie privée, et n’utilise que des donnes de manière responsable et confidentielle et dans une finalité précise.
                </div>
                <h1 className='title_legals_small_page'>
                    Données personnelles
                </h1>
                <div className='paragraph_legals_small_page'>
                    Sur le site web {website}, 2 types de données sont susceptibles d’être recueillies :
                </div>
                <div className='paragraph_legals_small_page'>
                    Les données transmises directement : Ces données sont celles que vous nous transmettez directement, via un formulaire (mail, ou autre informations relatives à votre compte)Les données collectées automatiquementLors de vos visites, une fois votre consentement donné, nous pouvons recueillir des informations de type « web analytics » relatives à votre navigation, la durée de votre consultation, votre adresse IP, votre type et version de navigateur. La technologie utilisée est le cookie.Utilisation des donnéesLes données que vous nous transmettez directement sont utilisées dans le but de vous re-contacter et/ou dans le cadre de la demande que vous nous faites. Les données « web analytics » sont collectées de forme anonyme (en enregistrant des adresses IP anonymes) par Google Analytics, et nous permettent de mesurer l’audience de notre site web, les consultations et les éventuelles erreurs afin d’améliorer constamment l’expérience des utilisateurs. Ces données sont utilisées par {company}, responsable du traitement des données, et ne seront jamais cédées à un tiers ni utilisées à d’autres fins que celles détaillées ci-dessus.
                </div>
                <h1 className='title_legals_small_page'>
                    Base légale
                </h1>
                <div className='paragraph_legals_small_page'>
                    Les données personnelles ne sont collectées qu’après consentement obligatoire de l’utilisateur. Ce consentement est valablement recueilli (boutons et cases à cocher), libre, clair et sans équivoque.
                </div>
                <div className='paragraph_legals_small_page'>
                    Durée de conservationLes données transmises par vous dans le cadre d’un commande sur notre site sont conservées à des fins de sécurité, afin de respecter les obligations légales et réglementaires.Les données collectés automatiquement seront sauvegardées durant une durée maximale de 3 ans.
                </div>
                <h1 className='title_legals_small_page'>
                    Cookies
                </h1>
                <div className='paragraph_legals_small_page'>
                    Liste des cookies et des leurs fonctionnements :
                </div>
                <h1 className='title_legals_small_page'>
                    Commentaires
                </h1>
                <div className='paragraph_legals_small_page'>
                    Quand vous laissez un commentaire sur notre site, les données inscrites dans le formulaire de commentaire, mais aussi votre adresse IP et l’agent utilisateur de votre navigateur sont collectés pour nous aider à la détection des commentaires indésirables.
                </div>
                <h1 className='title_legals_small_page'>
                    Médias
                </h1>
                <div className='paragraph_legals_small_page'>
                    Si vous téléversez des images sur le site, nous vous conseillons d’éviter de téléverser des images contenant des données EXIF de coordonnées GPS. Les personnes visitant votre site peuvent télécharger et extraire des données de localisation depuis ces images.
                </div>
                <h1 className='title_legals_small_page'>
                    Contenu embarqué depuis d’autres sites
                </h1>
                <div className='paragraph_legals_small_page'>
                    Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites se comporte de la même manière que si le visiteur se rendait sur cet autre site.
                </div>
                <div className='paragraph_legals_small_page'>
                    Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.
                </div>
                <h1 className='title_legals_small_page'>
                    Statistiques et mesures d’audience
                </h1>
                <h1 className='title_legals_small_page'>
                    Utilisation et transmission de vos données personnelles
                </h1>
                <div className='paragraph_legals_small_page'>
                    Si vous demandez une réinitialisation de votre mot de passe, votre adresse IP sera incluse dans l’e-mail de réinitialisation.
                </div>
                <h1 className='title_legals_small_page'>
                    Durées de stockage de vos données
                </h1>
                <div className='paragraph_legals_small_page'>
                    Si vous laissez un commentaire, le commentaire et ses métadonnées sont conservés indéfiniment. Cela permet de reconnaître et approuver automatiquement les commentaires suivants au lieu de les laisser dans la file de modération.
                </div>
                <div className='paragraph_legals_small_page'>
                    Pour les comptes qui s’inscrivent sur notre site (le cas échéant), nous stockons également les données personnelles indiquées dans leur profil. Tous les comptes peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur identifiant). Les gestionnaires du site peuvent aussi voir et modifier ces informations.
                </div>
                <h1 className='title_legals_small_page'>
                    Les droits que vous avez sur vos données
                </h1>
                <div className='paragraph_legals_small_page'>
                    Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies. Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.
                </div>
                <h1 className='title_legals_small_page'>
                    Transmission de vos données personnelles
                </h1>
                <div className='paragraph_legals_small_page'>
                    Les commentaires des visiteurs peuvent être vérifiés à l’aide d’un service automatisé de détection des commentaires indésirables.
                </div>
                <h1 className='title_legals_small_page'>
                    Contact délégué à la protection des données
                </h1>
                <div className='paragraph_legals_small_page'>
                    {name1}
                </div>
                <h1 className='title_legals_small_page'>
                    3. Cookies
                </h1>
                <h1 className='title_legals_small_page'>
                    Cookies
                </h1>
                <div className='paragraph_legals_small_page'>
                    This Cookie Policy was last updated on 4 août 2021 and applies to citizens and legal permanent residents of the European Economic Area and Switzerland
                </div>
                <h1 className='title_legals_small_page'>
                    1. Introduction
                </h1>
                <div className='paragraph_legals_small_page'>
                    Notre site web, {website} (ci-après : « le site web ») utilise des cookies et autres technologies liées (par simplification, toutes ces technologies sont désignées par le terme « cookies »). Des cookies sont également placés par des tierces parties que nous avons engagées. Dans le document ci-dessous, nous vous informons de l’utilisation des cookies sur notre site web.
                </div>
                <h1 className='title_legals_small_page'>
                    2. Que sont les cookies ?
                </h1>
                <div className='paragraph_legals_small_page'>
                    Un cookie est un petit fichier simple envoyé avec les pages de ce site web et stocké par votre navigateur sur le disque dur de votre ordinateur ou d’un autre appareil. Les informations qui y sont stockées peuvent être renvoyées à nos serveurs ou aux serveurs des tierces parties concernées lors d’une visite ultérieure.
                </div>
                <h1 className='title_legals_small_page'>
                    3. Que sont les scripts ?
                </h1>
                <div className='paragraph_legals_small_page'>
                    Un script est un élément de code utilisé pour que notre site web fonctionne correctement et de manière interactive. Ce code est exécuté sur notre serveur ou sur votre appareil.
                </div>
                <h1 className='title_legals_small_page'>
                    4. Qu’est-ce qu’une balise invisible ?
                </h1>
                <div className='paragraph_legals_small_page'>
                    Une balise invisible (ou balise web) est un petit morceau de texte ou d’image invisible sur un site web, utilisé pour suivre le trafic sur un site web. Pour ce faire, diverses données vous concernant sont stockées à l’aide de balises invisibles.
                </div>
                <h1 className='title_legals_small_page'>
                    5. Cookies
                </h1>
                <div className='paragraph_legals_small_page bold_color'>
                    5.1 Cookies techniques ou fonctionnels
                </div>
                <div className='paragraph_legals_small_page'>
                    Certains cookies assurent le fonctionnement correct de certaines parties du site web et la prise en compte de vos préférences en tant qu’utilisateur. En plaçant des cookies fonctionnels, nous vous facilitons la visite de notre site web. Ainsi, vous n’avez pas besoin de saisir à plusieurs reprises les mêmes informations lors de la visite de notre site web et, par exemple, les éléments restent dans votre panier jusqu’à votre paiement. Nous pouvons placer ces cookies sans votre consentement.
                </div>
                <div className='paragraph_legals_small_page bold_color'>
                    5.2 Cookies statistiques
                </div>
                <div className='paragraph_legals_small_page'>
                    Nous utilisons des cookies statistiques afin d’optimiser l’expérience des utilisateurs sur notre site web. Avec ces cookies statistiques, nous obtenons des informations sur l’utilisation de notre site web. Nous demandons votre permission pour placer des cookies statistiques.
                </div>
                <div className='paragraph_legals_small_page bold_color'>
                    5.3 Cookies de marketing/suivi
                </div>
                <div className='paragraph_legals_small_page'>
                    Les cookies de marketing/suivi sont des cookies ou toute autre forme de stockage local, utilisés pour créer des profils d’utilisateurs afin d’afficher de la publicité ou de suivre l’utilisateur sur ce site web ou sur plusieurs sites web à des fins de marketing similaires.
                </div>
                <h1 className='title_legals_small_page'>
                    6. Cookies placés
                </h1>
                <div className='paragraph_legals_small_page'>
                    WooCommerce Fonctionnel WordPress Fonctionnel HubSpot Marketing/Suivi Google Analytics Statistiques, Fonctionnel Stripe Fonctionnel Vimeo Statistiques Divers Finalité en attente d’enquête
                </div>
                <h1 className='title_legals_small_page'>
                    7. Consentement
                </h1>
                <div className='paragraph_legals_small_page'>
                    Lorsque vous visitez notre site web pour la première fois, nous vous montrerons une fenêtre contextuelle avec une explication sur les cookies. Dès que vous cliquez sur « Sauver preferences » vous nous autorisez à utiliser les catégories de cookies et d’extensions que vous avez sélectionnés dans la fenêtre contextuelle, comme décrit dans la présente politique de cookies. Vous pouvez désactiver l’utilisation des cookies via votre navigateur, mais veuillez noter que notre site web pourrait ne plus fonctionner correctement.
                </div>
                <div className='paragraph_legals_small_page bold_color'>
                    7.1 Gérez vos réglages de consentement
                </div>
                <div className='paragraph_legals_small_page'>
                    FonctionnelsAlways activeStatistics[ ] Marketing[ ]
                </div>
                <h1 className='title_legals_small_page'>
                    8. Vos droits concernant les données personnelles
                </h1>
                <div className='paragraph_legals_small_page'>
                    Vous avez les droits suivants concernant vos données personnelles :
                </div>
                <div className='paragraph_legals_small_page'>
                    - Vous avez le droit de savoir pourquoi vos données personnelles sont nécessaires, ce qui leur arrivera et combien de temps elles seront conservées.
                </div>
                <div className='paragraph_legals_small_page'>
                    - Droit d’accès : vous avez le droit d’accéder à vos données personnelles que nous connaissons.
                </div>
                <div className='paragraph_legals_small_page'>
                    - Droit de rectification : vous avez le droit à tout moment de compléter, corriger, faire supprimer ou bloquer vos données personnelles.
                </div>
                <div className='paragraph_legals_small_page'>
                    - Si vous nous donnez votre consentement pour le traitement de vos données, vous avez le droit de révoquer ce consentement et de faire supprimer vos données personnelles.
                </div>
                <div className='paragraph_legals_small_page'>
                    - Droit de transférer vos données : vous avez le droit de demander toutes vos données personnelles au responsable du traitement et de les transférer dans leur intégralité à un autre responsable du traitement.
                </div>
                <div className='paragraph_legals_small_page'>
                    - Droit d’opposition : vous pouvez vous opposer au traitement de vos données. Nous obtempérerons, à moins que certaines raisons ne justifient ce traitement.
                </div>
                <div className='paragraph_legals_small_page'>
                    Pour exercer ces droits, veuillez nous contacter. Veuillez vous référer aux coordonnées au bas de cette politique de cookies. Si vous avez une plainte concernant la façon dont nous traitons vos données, nous aimerions en être informés, mais vous avez également le droit de déposer une plainte auprès de l’autorité de contrôle (l’autorité chargée de la protection des données, comme le CEPD).
                </div>
                <h1 className='title_legals_small_page'>
                    9. Activer/désactiver et supprimer les cookies
                </h1>
                <div className='paragraph_legals_small_page'>
                    Vous pouvez utiliser votre navigateur internet pour supprimer automatiquement ou manuellement les cookies. Vous pouvez également spécifier que certains cookies ne peuvent pas être placés. Une autre option consiste à modifier les réglages de votre navigateur internet afin que vous receviez un message à chaque fois qu’un cookie est placé. Pour plus d’informations sur ces options, reportez-vous aux instructions de la section Aide de votre navigateur.
                </div>
                <div className='paragraph_legals_small_page'>
                    Veuillez noter que notre site web peut ne pas marcher correctement si tous les cookies sont désactivés. Si vous supprimez les cookies dans votre navigateur, ils seront de nouveau placés après votre consentement lorsque vous revisiterez nos sites web.
                </div>
                <h1 className='title_legals_small_page'>
                    10. Coordonnées
                </h1>
                <div className='paragraph_legals_small_page'>
                    Pour des questions et/ou des commentaires sur notre politique de cookies et cette déclaration, veuillez nous contacter en utilisant les coordonnées suivantes :
                </div>
                <div className='paragraph_legals_small_page'>
                    {company} {adress} : {website}
                </div>
                <div className='paragraph_legals_small_page'>
                    Email : {mail}
                </div>
                <div className='paragraph_legals_small_page'>
                    Cette politique de cookies a été synchronisée avec <Link style={{textDecoration:"none", color:"#6400E3"}} to="https://cookiedatabase.org/">cookiedatabase.org</Link> le 12 juillet 2021
                </div>
            </article>

        </section>
    )
}

export default LegalsSmallPage