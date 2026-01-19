import "./Plant.css";

import CareScale from "../CareScale/CareScale";

const Plant = ({ plant, careType, scaleValue }) => {
  // on recup plant en parametre depuis lautre page
  console.log("plant", plant);

  return (
    <>
      <div>
        <div className="plant-item">
          <img src={plant.image} className="plant-img" alt="image de plante" />
        </div>
        <p>{plant.name}</p>

        <div>
          <CareScale careType="water" scaleValue={plant.water} />
          <CareScale careType="light" scaleValue={plant.light} />
        </div>
      </div>
      {/*  <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} /> */}
    </>
  );
};

export default Plant;
