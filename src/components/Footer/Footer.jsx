import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [inputValue, setInputValue] = useState(""); // dcp au debut y a rien dedans mais c genre une string

  function handleInput(e) {
    // enft c un event et il contient plein de choses dans le et ce qui tinteresse c le target puis la value qui est dans linput
    console.log("e", e);
    setInputValue(e.target.value); // je comprends pas trop a quoi ca sert. genre c quand ca change ducoup ca entre dans linput value et apr on verifier si y a un @
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@, ce n'est pas une adresse valide");
    }
  }

  return (
    <>
      <div className="footer-container">
        <h3>Pour les passionés de plantes</h3>
        <h3>Laissez-nous votre email</h3>
        <input
          type="email"
          name="email"
          placeholder="Entrez votre email"
          onChange={handleInput}
          value={inputValue} // comprends pas
          onBlur={handleBlur}
        />
      </div>
    </>
  );
};

export default Footer;
