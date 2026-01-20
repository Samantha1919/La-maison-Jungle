import "./Cart.css";
import { useState } from "react";

const Cart = ({ cart, updateCart }) => {
  // const total = cart.reduce(
  //   (acc, plantType) => acc + plantType.amount * plantType.price,
  //   0,
  // );

  const totalPrice = cart.reduce((total, plant) => total + plant.price, 0);

  console.log("cart in cart", cart);

  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="cart-container">
      <button className="boutons" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      <h2>Panier</h2>

      {cart.map((item) => (
        <p>
          {item.name},{item.price}
        </p>
      ))}

      <h3>Total : {totalPrice}CHF</h3>

      <button className="boutons" onClick={() => updateCart(0)}>
        Vider le panier
      </button>
    </div>
  ) : (
    <div>
      <button className="open-button" onClick={() => setIsOpen(true)}>
        {/* quand tu appuies sur le bouton ca change la valeu de isOpen a true ducoup ca ouvre le panier*/}
        Ouvrir le Panier
      </button>
    </div>
  );
};

export default Cart;
