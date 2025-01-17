import React, { useEffect, useState } from 'react';

function DashboardSmallPage() {
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchDashboardData = async () => {
          try {
            const response = await fetch('http://localhost:3001/api/users/dashboard', {
              method: 'GET',
              credentials: 'include', // Inclut les cookies dans la requête
            });
    
            if (!response.ok) {
              throw new Error('Non autorisé ou erreur serveur.');
            }
    
            const data = await response.json();
            setUserEmail(data.user.email);
          } catch (err) {
            setError(err.message);
          }
        };
    
        fetchDashboardData();
      }, []); // Appel une seule fois au montage du composant
    
      if (error) {
        return <div>Erreur : {error}</div>;
      }

    return (
        <div>
            <h1>Bienvenue au tableau de bord</h1>
            {userEmail ? (
                <p>Adresse email : {userEmail}</p>
            ) : (
                <p>Chargement des données utilisateur...</p>
            )}
        </div>
    )
}

export default DashboardSmallPage