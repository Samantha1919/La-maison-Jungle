import { useState } from "react";
import { plantList } from "../../data/PlantList";
import "./ShoppingList.css";
import Plant from "../Plant/Plant";
import Categories from "../Categories/Categories";

// permet dafficher la liste de plantes

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const uniqueCategories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category), // pr pas faire de doublons genre pr que y ait que 3 categories et si genre 2 plantes ont la mm categorie ca reconnaisse que c la meme
    [],
  );

  // ajouter au panier
  const addToCart = (plant) => {
    // vérifie l'existence de l'item dans le cart et genre il regarde si la plante existe deja en comparant leur id pr voir si c le meme
    const existingPlant = cart.find((item) => item.id === plant.id);

    // en gros quantity c comme un element quon rajouterai dans le tableau des plantes mais on le rajoute grace a la fonction updateCart

    if (existingPlant) {
      // si la plante existe deja augmenter sa quantité
      updateCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      // sinon ajouter la plante avec une quantité de 1
      updateCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const filteredPlantList = plantList.filter((plant) => {
    if (activeCategory == "all") {
      return true; // ca retourne true dcp ca affiche toutes les plantes
    }
    return plant.category === activeCategory;
  });

  return (
    <div className="sl-container">
      <Categories
        categories={uniqueCategories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className="ul-flex">
        {filteredPlantList.map(
          // cest ca qui permet de faire une boucle sur un element du tableau
          (plant) => (
            <li key={plant.id}>
              <Plant plant={plant} />
              <button onClick={() => addToCart(plant)}>
                {/* rajoute la plante dans la variable cart*/}
                Ajouter
              </button>

              {/*  on prend lobjet mis en parametre
              avant et on le met dans les {}*/}
            </li>
          ),
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
