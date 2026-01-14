import "./Banner.css";
import logo from "../../assets/leaf.png";

const Banner = () => {
  // pk le h1 a un style de font alors qu'il n'y a pas de css appliqué

  return (
    <div className="banner-container">
      <h1 className="title">La maison jungle</h1>
      <img src={logo} alt="logo-de-la-maison-jungle" className="logo"></img>
    </div>
  );
};
export default Banner;
