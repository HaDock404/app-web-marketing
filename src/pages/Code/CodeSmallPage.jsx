import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

function CodeSmallPage() {
    const [code, setCode] = useState('');
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
                const response = await fetch('http://localhost:3001/api/users/validate-code', {
                    method: 'POST', // Utilisation de POST
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ code }), // Le code est envoyé dans le corps
                    credentials: 'include', // Le cookie contenant le token temporaire sera inclus
                });
            
                if (response.ok) {
                    console.log('Code Validé');
                } else {
                    const errorData = await response.json();
                    console.error('Erreur lors de la validation :', errorData.message);
                }
            } catch (error) {
                    console.error('Erreur réseau :', error);
                }
        }
    };

    return (
        <div>Code small Page
            <form onSubmit={handleSubmit}>
                <input 
                    type="number"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    )
}

export default CodeSmallPage