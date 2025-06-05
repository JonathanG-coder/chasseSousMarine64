import "./CategoryGrid.css";

const CategoryGrid = ({ categories, onCategoryClick }) => {


    
  const areaNames = [
    "poissons",
    "crustaces",
    "cephalopodes",
    "algues",
    "coquillages",
    "roches",
  ];

  return (
    <div className="categoryGrid">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`grid-item area-${areaNames[index]}`}
          onClick={() => onCategoryClick(cat)} // () = creation fonction anonyme qui sera executé plus tard, au clic et non maintenant
        >
          <img src={cat.image} alt={cat.nom} />
          <h3>{cat.nom}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
