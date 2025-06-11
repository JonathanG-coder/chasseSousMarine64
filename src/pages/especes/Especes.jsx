// 🪸 Faune et flore marine côtière du 64  A GARDER COMME TITRE !!!!!!
// 🌿 Végétaux marins et algues
// 🐙 Céphalopodes observables en bord de côte
// 🦞 Crustacés présents sur la côte
// 🐟 Poissons côtiers fréquents
import React from "react";
import "./Especes.css";
import CategoryGrid from "../../components/especesComponents/categoryGrid/CategoryGrid";

// import des images
import poisson from "../../assets/categoryImg/poisson-category-grid.jpg";
import crustaces from "../../assets/categoryImg/crustaces-category-grid.jpg";
import cephalopodes from "../../assets/categoryImg/cephalopodes-category-grid.jpg";
import algues from "../../assets/categoryImg/algues-category-grid.jpg";
import coquillages from "../../assets/categoryImg/coquillages-category-grid.jpg";
import roches from "../../assets/categoryImg/roches-category-grid.jpg";
import epongesMarines from "../../assets/categoryImg/eponges-marines-category-grid.jpg"


const categoriesEspeces = [
  { nom: "Poissons côtiers fréquents", image: poisson},
  { nom: "Crustacés présents sur la côte", image: crustaces },
  { nom: "Céphalopodes observables en bord de côte", image: cephalopodes },
  { nom: "Végétaux marins et algues", image: algues },
  { nom: "Coquillages", image: coquillages },
  { nom: "Types de rochers côtiers", image: roches },
  { nom: "Animaux fixés / invertébrés", image: epongesMarines },
];

const handleCategoryClick = (cat) => {
    console.log("categorie cliqué: " , cat);
}

const Especes = () => {
  return (
    <div className="especeContainer">
        {/* <h1>Faune et flore marine côtière du 64 </h1> */}
        <CategoryGrid categories={categoriesEspeces} onCategoryClick={handleCategoryClick}/>
    </div>
  )
}

export default Especes