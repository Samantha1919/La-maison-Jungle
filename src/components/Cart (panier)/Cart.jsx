import "./Cart.css";
import { useState } from "react";

const Cart = () => {
  const monsteraPrice = 8;
  const [cart, updateCart] = useState(0); // valeur initiale de 0
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="cart-container">
      <button className="boutons" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      <h2>Panier</h2>
      <div>Monstera : {monsteraPrice}CHF</div>
      <button className="boutons" onClick={() => updateCart(cart + 1)}>
        Ajouter
      </button>
      {/* ducoup au debut tu as 0 carte et apres ducoup ca fait 0 + 1 = 1 et apres 1 + 1 = 2 ect */}
      <h3>Total : {monsteraPrice * cart}CHF</h3>
      {/*on fait ducoup 8x1 8x2 ect*/}
      <button className="boutons" onClick={() => updateCart(0)}>
        Vider le panier
      </button>
      {/* la "fonction" remet la valeur de cart a 0 et dcp ca vide le panier */}
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
