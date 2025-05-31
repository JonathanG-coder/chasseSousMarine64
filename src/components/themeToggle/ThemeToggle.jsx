import { useTheme } from "../../context/themeContext";
import "./ThemeToggle.css";

//Import des images en clair et sombre
import iconLightHouseB from "../../assets/iconDarkMode/lightHouseB.png";
import iconLightHouseW from "../../assets/iconDarkMode/lightHouseW.png";

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
    <h1>Chasse sous marine 64</h1>
    </div>
    </div>
  );
}
