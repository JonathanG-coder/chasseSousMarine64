import "./CategoryGrid.css";

const CategoryGrid = ({ categories, onCategoryClick }) => {


  return (
    <div className="categoryGrid">
      {categories.map((cat, index) => (
        <div
          key={index}
          className={`grid-item area-${cat.area}`}
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
