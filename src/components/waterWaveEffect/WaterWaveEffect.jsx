// Lien du code pour l'animation  :
// https://github.com/homerchen19/react-water-wave


import React from 'react';
import WaterWave from 'react-water-wave';
import './WaterWaveEffect.css';

// Trigger redeploy

// Import de l'image
import waterImg from "../../assets/waterimg.jpg";


export default function WaterWaveEffect() {
  return (
    <WaterWave imageUrl={waterImg} className="waterwave-wrapper">
      {() => (
        <div className="inside-waterwave">
          {/* <p className="waterwave-text">La mer est notre terrain de jeu</p> */}
        </div>
      )}
    </WaterWave>
  );
}
