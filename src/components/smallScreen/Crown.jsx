import React, { useEffect } from 'react';
import mojs from '@mojs/core';


const Crown = () => {
  useEffect(() => {
    const crown = document.querySelector('#crown');

    // Courbes d'animation
    const squashCurve = mojs.easing.path(
      'M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100'
    );
    const angleEasing = mojs.easing.path(
      'M0,100c1.2-1.1,25.8,0.4,34.8-8.5s25.1-72.6,34.5-82 S100,0,100,0'
    );

    // Animation de la couronne
    new mojs.Tween({
      duration: 1200,
      repeat: 999,
      onUpdate: (progress) => {
        const squashProgress = squashCurve(progress);
        const scaleX = 1 - 2 * squashProgress;
        const scaleY = 1 + 2 * squashProgress;
        const angleProgress = angleEasing(progress);

        crown.style.transform = `rotate(${360 * angleProgress}deg) scale3d(${scaleX}, ${scaleY}, 1)`;
      },
    }).play();

    // Animation Burst
    const burst = new mojs.Burst({
      parent: '.container', // Le parent est bien défini
      left: '50%',
      top: '50%',
      duration: 1500,
      delay: 0,
      radius: { 0: 100 },
      count: 8,
      children: {
        shape: 'circle',
        radius: 10,
        fill: { '#514c91': '#FFD700' },
        duration: 1500,
        opacity: { 1: 0 },
      },
    });

    // Répéter le Burst
    const repeatBurst = new mojs.Tween({
      duration: 2000, // Intervalle entre chaque burst
      repeat: 9999,
      onUpdate: () => burst.replay(),
    });

    burst.play();
    repeatBurst.play();

    // Nettoyage
    return () => {
      burst.stop();
      repeatBurst.stop();
    };
  }, []);

  return (
    <div className="container">
      <svg
        id="crown"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 50"
      >
        <defs>
          <style>.cls-1 {'{ fill: #FF7A00; }'}</style>
        </defs>
        <polygon
          className="cls-1"
          points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
        />
      </svg>
    </div>
  );
};

export default Crown;
