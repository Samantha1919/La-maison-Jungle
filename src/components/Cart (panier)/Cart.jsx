import "./Cart.css";

const Cart = () => {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  return (
    <>
      <div className="cart-container">
        <h2>Panier</h2>
        <ul>
          <li>Monstera : {monsteraPrice}CHF</li>
          <li>Lierre : {ivyPrice}CHF</li>
          <li>Bouquet de fleurs : {flowerPrice}CHF</li>
        </ul>
        Total : {monsteraPrice + ivyPrice + flowerPrice}CHF
      </div>
    </>
  );
};

export default Cart;
