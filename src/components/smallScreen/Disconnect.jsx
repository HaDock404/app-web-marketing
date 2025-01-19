import React from 'react';
import { useNavigate } from 'react-router-dom';

import DisconnectIcon from "./DisconnectIcon"

function Disconnect() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/users/logout', {
            method: 'POST',
            credentials: 'include', // Inclut les cookies dans la requête
          });
    
          if (response.ok) {
            // Redirige vers la page de connexion après déconnexion
            navigate('/connexion');
          } else {
            console.error('Erreur lors de la déconnexion');
          }
        } catch (error) {
          console.error('Erreur réseau lors de la déconnexion :', error);
        }
    };

    return (
        <section className="disconnect_small_page">
            <button onClick={handleLogout} className="button_disconnect_small_page">
                <div className="icon_disconnect_small_page">
                    <DisconnectIcon color="#6400E3" />
                </div>
                <div className="text_disconnect_small_page">
                    Déconnexion
                </div>
            </button>
        </section>
        
    )
}

export default Disconnect