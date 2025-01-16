import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

import FacebookLogo from './FacebookLogo.jsx'
import GoogleLogo from './GoogleLogo.jsx'
import InstaLogo from './InstaLogo.jsx'

function CreateAccount() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const validateForm = () => {
        const newErrors = {};
    
        // Validation de l'adresse email
        if (!emailRegex.test(email)) {
          newErrors.email = "L'adresse email n'est pas valide.";
        }
    
        // Validation du mot de passe
        if (!passwordRegex.test(password)) {
          newErrors.password =
            "Trop peu sécurisé.";
        }
    
        // Validation de la correspondance des mots de passe
        if (password !== confirmPassword) {
          newErrors.confirmPassword = "Les mots de passe sont différents.";
        }
    
        setErrors(newErrors);
    
        // Retourne true si le formulaire est valide
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
              const response = await fetch('http://localhost:3001/api/users/create-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // Inclut les cookies dans la requête
              });
        
              const data = await response.json();
        
              if (response.ok) {
                alert(data.message);
                // Réinitialiser le formulaire
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate("/code-validation");
              } else {
                console.error('Erreur backend:', data);
                alert(data.message);
              }
            } catch (err) {
                alert('Erreur lors de la création de l\'utilisateur.');
            }
        }
    };

    return (
        <article className="create_account_article">
            <h1 className="create_account_h1">Inscription rapide</h1>
            <div className="create_account_tierce-party">
                <button className="create_account_tierce-party_button">
                    <GoogleLogo />
                </button>
                <button className="create_account_tierce-party_button">
                    <FacebookLogo />
                </button>
                <button className="create_account_tierce-party_button" style={{padding:"0"}}>
                    <InstaLogo />
                </button>
            </div>
            <div className='create_account_hr_box'>
                <hr className='create_account_hr'/>
                ou
                <hr className='create_account_hr'/>
            </div>
            <form className='create_account_input_box' onSubmit={handleSubmit}>
                <div className='create_account_input_div'>
                    <input 
                        className='create_account_input' 
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className='create_account_input_error-message'>{errors.email}</div>}
                </div>
                <div className='create_account_input_div'>
                    <input 
                        className='create_account_input' 
                        placeholder="Mot de passe"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <div className='create_account_input_error-message'>{errors.password}</div>}
                </div>
                <div className='create_account_input_div'>
                    <input 
                        className='create_account_input' 
                        placeholder="Confirmation du mot de passe"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && (<div className='create_account_input_error-message'>{errors.confirmPassword}</div>)}
                </div>
                
                <button type="submit" className='create_account_validation'>Valider</button>
            </form>
            <div className='create_account_registration_box'>
                Déjà Client ? <Link to="/connexion" className='create_account_registration'>Connection</Link>
            </div>
        </article>
    )
}

export default CreateAccount