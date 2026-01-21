import monstera from "../assets/monstera.jpg";
import ficus from "../assets/ficus.png";
import pothos from "../assets/pothos.png";
import yucca from "../assets/yucca.png";
import olivier from "../assets/olivier.jpg";
import geranium from "../assets/geranium.jpg";
import basilique from "../assets/basilique.jpg";
import aloe from "../assets/aloe.png";
import succulente from "../assets/succulente.jpg";
import palmier from "../assets/palmier.jpg";
import menthe from "../assets/menthe.jpg";

// pour générer les ids dynmaiquement
let id = 0;

export const plantList = [
  {
    name: "monstera",
    category: "classique",
    id: id++,
    water: 3,
    light: 2,
    image: monstera,
    price: 8,
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: id++,
    water: 1,
    light: 3,
    image: ficus,
    price: 13,
  },
  {
    name: "pothos argenté",
    category: "classique",
    id: id++,
    water: 2,
    light: 1,
    image: pothos,
    price: 14,
  },
  {
    name: "yucca",
    category: "classique",
    id: id++,
    water: 2,
    light: 2,
    image: yucca,
    price: 19,
  },
  {
    name: "olivier",
    category: "extérieur",
    id: id++,
    water: 1,
    light: 3,
    image: olivier,
    price: 20,
  },
  {
    name: "géranium",
    category: "extérieur",
    id: id++,
    water: 2,
    light: 2,
    image: geranium,
    price: 12,
  },
  {
    name: "basilique",
    category: "extérieur",
    id: id++,
    water: 3,
    light: 2,
    image: basilique,
    price: 11,
  },
  {
    name: "aloe",
    category: "plante grasse",
    id: id++,
    water: 1,
    light: 2,
    image: aloe,
    price: 18,
  },
  {
    name: "succulente",
    category: "plante grasse",
    id: id++,
    water: 1,
    light: 2,
    image: succulente,
    price: 13,
  },

  {
    name: "palmier",
    category: "extérieur",
    id: id++,
    water: 1,
    light: 3,
    image: palmier,
    price: 20,
  },
  {
    name: "menthe",
    category: "classique",
    id: id++,
    water: 2,
    light: 2,
    image: menthe,
    price: 7,
  },
];
