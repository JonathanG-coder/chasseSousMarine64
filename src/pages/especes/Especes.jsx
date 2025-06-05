// 🪸 Faune et flore marine côtière du 64  A GARDER COMME TITRE !!!!!!
// 🌿 Végétaux marins et algues
// 🐙 Céphalopodes observables en bord de côte
// 🦞 Crustacés présents sur la côte
// 🐟 Poissons côtiers fréquents

import "./Especes.css";
import CategoryGrid from "../../components/especesComponents/categoryGrid/CategoryGrid";

const categoriesEspeces = [
  { nom: "Poissons", image: "https://placehold.co/300x200?text=Poissons", area: "poissons" },
  { nom: "Crustaces", image: "https://placehold.co/300x200?text=Crustaces", area: "crustaces" },
  { nom: "Cephalopodes", image: "https://placehold.co/300x200?text=Cephalopodes", area: "cephalopodes" },
  { nom: "Algues", image: "https://placehold.co/300x200?text=Algues", area: "algues" },
  { nom: "Coquillages", image: "https://placehold.co/300x200?text=Coquillages", area: "coquillages" },
  { nom: "Roches", image: "https://placehold.co/300x200?text=Roches", area: "roches" },
];

const handleCategoryClick = (cat) => {
    console.log("categorie cliqué: " , cat);
    
}

const Especes = () => {
  return (
    <div className="especeContainer">
        <h1>Faune et flore marine côtière du 64 </h1>
        <CategoryGrid categories={categoriesEspeces} onCategoryClick={handleCategoryClick}/>
    </div>
  )
}

export default Especes