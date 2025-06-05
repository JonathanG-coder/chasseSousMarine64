// 🪸 Faune et flore marine côtière du 64  A GARDER COMME TITRE !!!!!!
// 🌿 Végétaux marins et algues
// 🐙 Céphalopodes observables en bord de côte
// 🦞 Crustacés présents sur la côte
// 🐟 Poissons côtiers fréquents

import CategoryGrid from "../../components/especesComponents/categoryGrid/CategoryGrid";

const categoriesEspeces = [
  { nom: "Poissons", image: "https://placehold.co/300x200?text=Poissons" },
  { nom: "Crustacés", image: "https://placehold.co/300x200?text=Crustacés" },
  { nom: "Céphalopodes", image: "https://placehold.co/300x200?text=Céphalopodes" },
  { nom: "Algues", image: "https://placehold.co/300x200?text=Algues" },
  { nom: "Coquillages", image: "https://placehold.co/300x200?text=Coquillages" },
  { nom: "Roches", image: "https://placehold.co/300x200?text=Roches" },
];

const handleCategoryClick = (cat) => {
    console.log("categorie cliqué: " , cat);
    
}

const Especes = () => {
  return (
    <div>
        <h1>Faune et flore marine côtière du 64 </h1>
        <CategoryGrid categories={categoriesEspeces} onCategoryClick={handleCategoryClick}/>
    </div>
  )
}

export default Especes