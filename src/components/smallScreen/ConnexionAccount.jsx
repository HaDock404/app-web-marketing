import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

import FacebookLogo from './FacebookLogo.jsx'
import GoogleLogo from './GoogleLogo.jsx'
import InstaLogo from './InstaLogo.jsx'

function CreateAccount() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        setErrors(newErrors);
        // Retourne true si le formulaire est valide
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
              const response = await fetch('http://localhost:3001/api/users/login-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // Inclut les cookies dans la requête
              });
        
              const data = await response.json();
        
              if (response.ok) {
                //alert(data.message);
                // Réinitialiser le formulaire
                setEmail('');
                setPassword('');
                navigate("/dashboard");
              } else {
                console.error('Erreur backend:', data);
                alert(data.message);
              }
            } catch (err) {
                alert('Erreur lors de la connexion de l\'utilisateur.');
            }
        }
    };

    return (
        <article className="connexion_article">
            <h1 className="connexion_h1">Connexion rapide</h1>
            <div className="connexion_tierce-party">
                <button className="connexion_tierce-party_button">
                    <GoogleLogo />
                </button>
                <button className="connexion_tierce-party_button">
                    <FacebookLogo />
                </button>
                <button className="connexion_tierce-party_button" style={{padding:"0"}}>
                    <InstaLogo />
                </button>
            </div>
            <div className='connexion_hr_box'>
                <hr className='connexion_hr'/>
                ou
                <hr className='connexion_hr'/>
            </div>
            <form className='connexion_input_box' onSubmit={handleSubmit}>
                <input 
                    className='connexion_input' 
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    className='connexion_input' 
                    placeholder="Mot de passe"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className='connexion_validation'>Valider</button>
            </form>
            
            <div className='connexion_registration_box'>
                Oups !! pas encore de compte ?<br/><Link to="/registration" className='connexion_registration'>Créer un compte</Link>
            </div>
        </article>
    )
}

export default CreateAccount