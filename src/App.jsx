//import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart (panier)/Cart";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Banner />
      <div className="container-principal">
        <Cart />
        <ShoppingList />
      </div>
    </>
  );
}

export default App;
