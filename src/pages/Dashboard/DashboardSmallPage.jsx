import React, { useEffect, useState } from 'react';

import HeaderSmallScreen from '../../components/smallScreen/HeaderSmallScreen'
import Disconnect from '../../components/smallScreen/Disconnect'
import DashboardBox from '../../components/smallScreen/DashboardBox';

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
        <section className="dashboard_small_page">
          <article className="dashboard_small_page_el1">
                <HeaderSmallScreen />
                <Disconnect />
          </article>
          <article className="dashboard_small_page_el2">
                <DashboardBox />
          </article>


            {userEmail ? (
                <p>Adresse email : {userEmail}</p>
            ) : (
                <p>Chargement des données utilisateur...</p>
            )}
            <div style={{width:'100%', height:'1000px', backgroundColor:'red'}}></div>
        </section>
    )
}

export default DashboardSmallPage