import React from "react";
// import BubbleParticles from "./bubbleParticles/BubbleParticles";
import CategoryGrid from "../../components/especesComponents/categoryGrid/CategoryGrid";
import "./Especes.css";

// Déclaration du tableau categoriesEspeces avec les images importées
import poisson from "../../assets/categoryImg/poisson-category-grid.jpg";
import crustaces from "../../assets/categoryImg/crustaces-category-grid.jpg";
import cephalopodes from "../../assets/categoryImg/cephalopodes-category-grid.jpg";
import algues from "../../assets/categoryImg/algues-category-grid.jpg";
import coquillages from "../../assets/categoryImg/coquillages-category-grid.jpg";
import roches from "../../assets/categoryImg/roches-category-grid.jpg";
import epongesMarines from "../../assets/categoryImg/eponges-marines-category-grid.jpg";

const categoriesEspeces = [
  { nom: "Poissons côtiers fréquents", image: poisson },
  { nom: "Crustacés présents sur la côte", image: crustaces },
  { nom: "Céphalopodes observables en bord de côte", image: cephalopodes },
  { nom: "Végétaux marins et algues", image: algues },
  { nom: "Coquillages", image: coquillages },
  { nom: "Types de rochers côtiers", image: roches },
  { nom: "Animaux fixés / invertébrés", image: epongesMarines },
];

// Si tu souhaites gérer le clic sur une catégorie (optionnel)
const handleCategoryClick = (cat) => {
  console.log("Categorie cliquée:", cat);
};

const Especes = () => {
  return (
    <> </>
      {/* <BubbleParticles />
        //Ajout modif style css a faire
      <div style={{ position: "relative", zIndex: 1, padding: "2rem", color: "white" }}>*/}
        <div className="especeContainer"> 
          <h1 className="especeTitle">🪸 Faune et flore marine côtière du 64</h1>
          <CategoryGrid
            categories={categoriesEspeces}
            onCategoryClick={handleCategoryClick} // optionnel
          />
    </>
  );
};

export default Especes;
