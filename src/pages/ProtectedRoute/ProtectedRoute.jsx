import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/users/auth/validate', {
            method: 'GET',
            credentials: 'include', // Inclut les cookies dans la requête
            });

            if (response.ok) {
            setIsAuthenticated(true);
            } else {
            setIsAuthenticated(false);
            }
        } catch (error) {
            console.error('Erreur lors de la vérification de l\'authentification :', error);
            setIsAuthenticated(false);
        }
        };

        checkAuth();
    }, []);

    if (isAuthenticated === null) {
        // En cours de vérification, affichage d'un écran de chargement
        return <div>Chargement...</div>;
    }

    return isAuthenticated ? children : <Navigate to="/connexion" />;
}

export default ProtectedRoute