import { plantList } from "../../data/PlantList";
import "./Plant.css";

const Plant = () => {
  return <p className="plant-item">{plantList.name}</p>;
};

export default Plant;
