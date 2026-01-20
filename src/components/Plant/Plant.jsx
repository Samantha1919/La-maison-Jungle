import "./Plant.css";

import CareScale from "../CareScale/CareScale";

const Plant = ({ plant }) => {
  // on recup plant en parametre depuis lautre page

  return (
    <>
      <div>
        <div className="plant-item">
          <img src={plant.image} className="plant-img" alt="image de plante" />
        </div>
        <p>{plant.name}</p>

        <div>
          {/* enft la
          scaleValue c le nombre dcp qui etait dans PlantList et il vient de la
          fin il est defini la et on le prend aussi en parametre*/}
          <CareScale careType="water" scaleValue={plant.water} />
          <CareScale careType="light" scaleValue={plant.light} />
        </div>
      </div>
    </>
  );
};

export default Plant;
