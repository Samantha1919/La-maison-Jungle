import { useState, useEffect } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart (panier)/Cart";
import Footer from "./components/Footer/Footer";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateCart = (cart) => {
    setCart(cart);
    saveCart(cart);
  };

  console.log("cart", cart);
  console.log("App was rerender");

  // de base dans lex on utilisait useEffect() mais c mieux et plus logique de faire une fonction

  return (
    <>
      <Banner />
      <div className="container-principal">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  );
}

export default App;
