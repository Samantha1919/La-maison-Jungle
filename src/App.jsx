import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart (panier)/Cart";
import Footer from "./components/Footer/Footer";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {
  const [cart, updateCart] = useState([]);
  //const [cart, updateCart] = useState(0);

  console.log("cart", cart);

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
