import Sun from "../../assets/sun.svg";
import Water from "../../assets/water.svg";

// pk c un objet et pas un tableau
const quantity = {
  1: "peu",
  2: "modérement",
  3: "beaucoup",
};

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];

  const scaleType = // sert a savoir si c de la lumiiere ou de leau ps : on peut creer une variable js avec une balise html dedans mais jle savais pas dcp dmd dm
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );
  console.log(scaleValue);

  return (
    <>
      <div
        onClick={() =>
          alert(
            `Cette plante requiert ${quantity[scaleValue]} ${
              careType === "light" ? "de lumière" : "d'arrosage"
            }`,
          )
        }
      >
        {range.map((rangeElem) =>
          scaleValue >= rangeElem ? (
            <span key={rangeElem.toString()}>{scaleType}</span> // par exemple si la scale value (valeur dans PlantList) cest 1 bah ca laffichera quune seule fois genre 1>= 1 mais pas le reste
          ) : null,
        )}
      </div>
    </>
  );
}

export default CareScale;
