// 🪸 Faune et flore marine côtière du 64  A GARDER COMME TITRE !!!!!!
// 🌿 Végétaux marins et algues
// 🐙 Céphalopodes observables en bord de côte
// 🦞 Crustacés présents sur la côte
// 🐟 Poissons côtiers fréquents



  const renderCategory = (title, items) => {
    console.log("Catégorie :", title);
    console.log("Données reçues :", items);

    return (
      <div>
        <h2>{title}</h2>
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.nom} />
              <h4>{item.nom}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="especes-container">
      <h1>Faune et flore marine côtière du 64</h1>

      {/* {renderCategory("Poissons côtiers fréquents", Poissons)}
      {renderCategory("Crustacés présents sur la côte", Crustaces)}
      {renderCategory("Céphalopodes observables en bord de côte", Cephalopodes)}
      {renderCategory("Végétaux marins et algues", VégétauxMarinsAlgues)}
      {renderCategory("Animaux fixés / invertébrés", InvertebresAnimauxFixes)}
      {renderCategory("Coquillages", Coquillages)}
      {renderCategory("Types de rochers côtiers", Rochers)} */}
    </div>
  );
};

export default Especes;
