import "./Cart.css";
import { useState, useEffect } from "react";

const Cart = ({ cart, updateCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cart.reduce(
    (total, plant) => total + plant.price * plant.quantity,
    0,
  );

  useEffect(() => {
    document.title = `LMJ: ${totalPrice}CHF d'achats`;
  }, [totalPrice]);

  return isOpen ? (
    <div className="cart-container">
      <button className="boutons" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      <h2>Panier</h2>

      {cart.map((item, index) => (
        <p key={index}>
          {item.quantity || 1} {item.name} -{item.price * (item.quantity || 1)}
          CHF
        </p>
      ))}

      <h3>Total : {totalPrice}CHF</h3>

      <button className="boutons" onClick={() => updateCart([])}>
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
