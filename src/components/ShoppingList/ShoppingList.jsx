import { plantList } from '../../data/PlantList';
import './ShoppingList.css';
import Plant from '../Plant/Plant';

// permet dafficher la liste de plantes

function ShoppingList({ cart, updateCart }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category), // pr pas faire de doublons genre pr que y ait que 3 categories et si genre 2 plantes ont la mm categorie ca reconnaisse que c la meme
		[],
	);

	// ajouter au panier
	const addToCart = (plant) => {
		// vérifie l'existence de l'item dans le cart
		const existingPlant = cart.find((item) => item.id === plant.id);

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

	return (
		<div className="sl-container">
			<ul className="ul-flex">
				{plantList.map(
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
			{/*tu peux mettre nimporte quel nom entre () c juste que la on a mis plant et categorie pr la logique */}
			<ul className="ul-categorie">
				{categories.map((categorie) => (
					<li key={categorie}>{categorie}</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
