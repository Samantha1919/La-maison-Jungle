import { plantList } from "../../data/PlantList";
import "./ShoppingList.css";

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category), // pr pas faire de doublons genre pr que y ait que 3 categories et si genre 2 plantes ont la mm categorie ca reconnaisse que c la meme
    []
  );
  // tu peux mettre nimporte quel nom entre () c juste que la on a mis plant et categorie pr la logique
  return (
    <div className="sl-container">
      <ul className="ul-flex">
        {plantList.map((plant) => (
          <li key={plant.id} className="plant-item">
            {plant.name}
          </li>
        ))}
      </ul>

      <ul className="ul-categorie">
        {categories.map((categorie) => (
          <li key={categorie}>{categorie}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
