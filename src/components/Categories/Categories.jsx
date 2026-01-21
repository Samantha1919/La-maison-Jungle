import "./Categories.css";

const Categories = ({ setActiveCategory, categories, activeCategory }) => {
  return (
    <>
      <div className="cat-container">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)} // la f met la categorie active et cest sur celle que tas appuye fin quand ca change dcp
          className="categor"
        >
          <option value="all">Tous</option>
          {categories.map(
            // on fait une boucle pr afficher toutes les catégories
            (cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ),
          )}
        </select>
        <button className="reset" onClick={() => setActiveCategory("all")}>
          Réinitialiser
        </button>
      </div>
    </>
  );
};

export default Categories;
