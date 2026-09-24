import { restaurants, type Restaurant } from "./food";

const CUISINE_TYPE_TR: Record<string, string> = {
  "Fish and Chips": "Balık ve Cips",
  "Traditional Irish Food": "Geleneksel İrlanda Mutfağı",
  "British and Irish Classics": "İngiliz ve İrlanda Klasikleri",
  "Turkish Food": "Türk Mutfağı",
  "Berlin-Style Doner": "Berlin Usulü Döner",
  "Turkish Cuisine": "Türk Mutfağı",
  "Chinese Food": "Çin Mutfağı",
  "Indian Food": "Hint Mutfağı",
  "Italian Food": "İtalyan Mutfağı",
  "Japanese Food": "Japon Mutfağı",
  "Mexican Food": "Meksika Mutfağı",
};

const OFFERING_TR: Record<string, string> = {
  Halal: "Helal",
  Vegetarian: "Vejetaryen",
  Vegan: "Vegan",
  "Pub Experience": "Pub Deneyimi",
  Fish: "Balık",
};

export const restaurantsTr: Restaurant[] = restaurants.map((r) => ({
  ...r,
  cuisineType: CUISINE_TYPE_TR[r.cuisineType] ?? r.cuisineType,
  offering: r.offering.map((tag) => OFFERING_TR[tag] ?? tag),
}));
