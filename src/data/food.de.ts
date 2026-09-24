import { restaurants, type Restaurant } from "./food";

const CUISINE_TYPE_DE: Record<string, string> = {
  "Fish and Chips": "Fish & Chips",
  "Traditional Irish Food": "Traditionelle Irische Küche",
  "British and Irish Classics": "Britische und Irische Klassiker",
  "Turkish Food": "Türkische Küche",
  "Berlin-Style Doner": "Döner nach Berliner Art",
  "Turkish Cuisine": "Türkische Küche",
  "Chinese Food": "Chinesische Küche",
  "Indian Food": "Indische Küche",
  "Italian Food": "Italienische Küche",
  "Japanese Food": "Japanische Küche",
  "Mexican Food": "Mexikanische Küche",
  "Neapolitan Pizza": "Neapolitanische Pizza",
  "Italian / Pinsa Romana": "Italienisch / Pinsa Romana",
  Teppanyaki: "Teppanyaki",
  "Korean Food": "Koreanische Küche",
  "Vietnamese Food": "Vietnamesische Küche",
  "Brazilian Steakhouse": "Brasilianisches Steakhouse",
  "Malaysian Food": "Malaysische Küche",
  "Persian Kebab": "Persischer Kebab",
};

const OFFERING_DE: Record<string, string> = {
  Halal: "Halal",
  Vegetarian: "Vegetarisch",
  Vegan: "Vegan",
  "Pub Experience": "Pub-Erlebnis",
  Fish: "Fisch",
};

export const restaurantsDe: Restaurant[] = restaurants.map((r) => ({
  ...r,
  cuisineType: CUISINE_TYPE_DE[r.cuisineType] ?? r.cuisineType,
  offering: r.offering.map((tag) => OFFERING_DE[tag] ?? tag),
}));
