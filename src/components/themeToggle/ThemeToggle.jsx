import { useTheme } from "../../context/themeContext";
import "./ThemeToggle.css";

//Import des images en clair et sombre
import iconLightHouseB from "../../assets/iconDarkMode/lightHouseB.png";
import iconLightHouseW from "../../assets/iconDarkMode/lightHouseW.png";

//Import de WavyTitle pour faire bouger le titre
import WavyTitle from "../header/wavyTitle/WavyTitle";
import { h1, text } from "framer-motion/client";


const lightIconW = iconLightHouseW
const lightIconB = iconLightHouseB

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="ThemeTOggleBody">
    <button onClick={toggleDarkMode}>
      <img src={darkMode ? lightIconB : lightIconW} alt="lightHouse" className="iconLightHouse"></img>
    </button>
    <div className="titleBanniere">
      <WavyTitle/>
    </div>
    </div>
  );
}
