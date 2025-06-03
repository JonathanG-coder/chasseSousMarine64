import "./Home.css";

//Import de WaterWaveEffect pour animé l'ondulation durant le bougement de la souris
import WaterWaveEffect from "../../components/waterWaveEffect/WaterWaveEffect";

//Import de WavyTitle pour faire bouger le titre
import WavyTitle from "../../components/header/wavyTitle/WavyTitle";

// Import des elements pour le DarkMode
import { useTheme } from "../../context/themeContext";
//Import des images en clair et sombre
import iconLightHouseB from "../../assets/iconDarkMode/lightHouseB.png";
import iconLightHouseW from "../../assets/iconDarkMode/lightHouseW.png";

// Variable pour appeler les images.
const lightIconW = iconLightHouseW
const lightIconB = iconLightHouseB


export default function Home() {
  const { darkModeLightHouse, toggleDarkMode } = useTheme();

  return (
    <>
    
    <div className="home-container">
      <WaterWaveEffect />
      
      <div className="titleBanniere">
        {/* Bouton DarkMode placé à gauche */}
        <div className="left-light-toggle">
          <button onClick={toggleDarkMode} className="light-toggle-btn">
            <img
              src={darkModeLightHouse ? lightIconB : lightIconW}
              alt="lightHouse"
              className="iconLightHouse"
            />
          </button>
        </div>,
            <WavyTitle/>
          </div>
      
    </div>
        </>

  );
}

