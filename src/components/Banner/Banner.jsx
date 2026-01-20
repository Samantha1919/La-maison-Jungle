import "./Banner.css";
import logo from "../../assets/leaf.png";

const Banner = () => {
  return (
    <div className="banner-container">
      <h1 className="title">La maison jungle</h1>
      <img src={logo} alt="logo-de-la-maison-jungle" className="logo"></img>
    </div>
  );
};
export default Banner;
