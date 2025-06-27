import ChickenKothtu from '../assets/koththu.png'
import StringHoppers from '../assets/String Hoppers.png'
import FishCurry from '../assets/Fish Curry.png'
import MilkRice from '../assets/Milk Rice.png'
import EggHopper from '../assets/Egg Hopper.png'
import VegetableRoti from '../assets/Vegetable Roti.png'
import DevilledChicken from '../assets/Devilled Chicken.png'
import Lamprais from '../assets/Lamprais.png'
import DhalCurry from '../assets/Dhal Curry.png'
import BeefCurry from '../assets/Beef Curry.png'
import PolSambol from '../assets/Pol Sambol.png'
import Watalappam from '../assets/Watalappam.png'
import Pittu from '../assets/Pittu.png'
import ChickenCurry from '../assets/Chicken Curry.png'

const foodArray = [
  {
    id: 1,
    image:ChickenKothtu,
    name: "Chicken Kottu",
    price: 850.0,
    description: "Chopped godamba roti stir-fried with chicken, vegetables, egg, and curry.",
    rating: 4.5,
    category: "dinner"
  },
  {
    id:2,
    image:StringHoppers,
    name: "String Hoppers",
    price: 400.0,
    description: "Steamed rice noodle nests served with dhal curry and coconut sambol.",
    rating: 4.2,
    category: "breakfast"
  },
  {
    id: 3,
    image:FishCurry,
    name: "Fish Curry",
    price: 650.0,
    description: "A spicy Sri Lankan curry made with fresh fish and coconut milk.",
    rating: 4.6,
    category: "lunch"
  },
  {
    id: 4,
    image:MilkRice,
    name: "Milk Rice (Kiribath)",
    price: 300.0,
    description: "A traditional coconut milk rice dish eaten during celebrations.",
    rating: 4.3,
    category: "breakfast"
  },
  {
    id: 5,
    image:EggHopper,
    name: "Egg Hopper",
    price: 150.0,
    description: "Crispy fermented rice flour pancake with a soft egg center.",
    rating: 4.7,
    category: "breakfast"
  },
  {
    id: 6,
    image:VegetableRoti,
    name: "Vegetable Roti",
    price: 100.0,
    description: "Flaky flatbread filled with spicy vegetables.",
    rating: 4.0,
    category: "snack"
  },
  {
    id: 7,
    image:DevilledChicken,
    name: "Devilled Chicken",
    price: 900.0,
    description: "Deep-fried chicken tossed in a sweet and spicy chili sauce.",
    rating: 4.6,
    category: "dinner"
  },
  {
    id: 8,
    image:Lamprais,
    name: "Lamprais",
    price: 1000.0,
    description: "Dutch-influenced rice and curry wrapped in banana leaf and baked.",
    rating: 4.8,
    category: "lunch"
  },
  {
    id: 9,
    image:DhalCurry,
    name: "Dhal Curry (Parippu)",
    price: 250.0,
    description: "A mild red lentil curry cooked in coconut milk and spices.",
    rating: 4.1,
    category: "lunch"
  },
  {
    id: 10,
    image:BeefCurry,
    name: "Beef Curry",
    price: 750.0,
    description: "Rich and spicy beef curry slow-cooked with traditional Sri Lankan spices.",
    rating: 4.4,
    category: "dinner"
  },
  {
    id: 11,
    image:PolSambol,
    name: "Pol Sambol",
    price: 100.0,
    description: "A spicy coconut relish made with grated coconut, chili, and lime.",
    rating: 4.2,
    category: "side"
  },
  {
    id: 12,
    image:Watalappam,
    name: "Watalappam",
    price: 350.0,
    description: "A rich coconut custard pudding made with jaggery and spices.",
    rating: 4.9,
    category: "dessert"
  },
  {
    id: 13,
    image:Pittu,
    name: "Pittu",
    price: 300.0,
    description: "Steamed cylinders of ground rice and coconut, served with curry or sweet coconut milk.",
    rating: 4.0,
    category: "breakfast"
  },
  {
    id: 14,
    image:ChickenCurry,
    name: "Chicken Curry (Kukul Mas)",
    price: 700.0,
    description: "Classic Sri Lankan chicken curry simmered with spices and coconut milk.",
    rating: 4.7,
    category: "lunch"
  }
];

export default foodArray;
