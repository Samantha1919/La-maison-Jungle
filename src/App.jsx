//import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cart from "./components/Cart (panier)/Cart";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
