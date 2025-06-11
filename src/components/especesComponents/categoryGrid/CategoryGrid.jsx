import PropTypes from 'prop-types';
import "./CategoryGrid.css";
import React from "react";

const CategoryGrid = ({ categories, onCategoryClick }) => {
  return (
    <div className="categoryGrid">
  {categories.map((cat, index) => (
    <div
      key={index}
      className={`grid-item area-${cat.area}`}
      onClick={() => onCategoryClick(cat)}
    >
      <div className="image-category-grid">
        <img src={cat.image} alt={cat.nom} />
      </div>
      <div className="title-category-grid">
        <h3>{cat.nom}</h3>
      </div>
    </div>
  ))}
</div>

  );
};

//  défini la validation des props
CategoryGrid.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      area: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      nom: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryGrid;
