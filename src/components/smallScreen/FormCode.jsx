import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function FormCode() {
    const [code, setCode] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [secondsLeft, setSecondsLeft] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const validateForm = () => {
        const newErrors = {};
    
        setErrors(newErrors);
    
        // Retourne true si le formulaire est valide
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:3001/api/users/validate-code', {
                    method: 'POST', // Utilisation de POST
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ code }), // Le code est envoyé dans le corps
                    credentials: 'include', // Le cookie contenant le token temporaire sera inclus
                });
            
                if (response.ok) {
                    //console.log('Code Validé');
                    navigate("/dashboard");
                } else {
                    const errorData = await response.json();
                    console.error('Erreur lors de la validation :', errorData.message);
                }
            } catch (error) {
                    console.error('Erreur réseau :', error);
                }
        }
    };

    useEffect(() => {
        let timer;
        if (secondsLeft > 0) {
          timer = setInterval(() => {
            setSecondsLeft((prev) => prev - 1);
          }, 1000);
        } else {
          setIsDisabled(false);
          clearInterval(timer);
        }
        return () => clearInterval(timer);
      }, [secondsLeft]);

    const handleClick = () => {
        setSecondsLeft(60);
        setIsDisabled(true);
    };

    return (
        <div className="box_form_small_page">
            <h2 className="h2_box_form_small_page">Code de validation</h2>
            <form onSubmit={handleSubmit} className='form_small_page'>
                    <input 
                        placeholder='Code de Validation'
                        className='form_small_page_input'
                        type="number"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button className='form_small_page_button' type='submit'>Valider</button>
            </form>
            <button className='form_small_page_button-again' onClick={handleClick} disabled={isDisabled}>
                {isDisabled ? "Veuillez patienter..." : "Renvoyer le code"}
            </button>
            {secondsLeft > 0 && (
            <p>
                Attendez quelques instants pour recevoir un nouvel email : {secondsLeft}s
            </p>
      )}
        </div>
    )
}

export default FormCode