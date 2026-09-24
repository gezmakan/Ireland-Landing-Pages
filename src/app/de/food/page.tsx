import type { Metadata } from "next";
import Header from "@/components/Header";
import FoodHero from "@/components/FoodHero";
import RestaurantExplorer from "@/components/RestaurantExplorer";
import Footer from "@/components/Footer";
import { restaurantsDe } from "@/data/food.de";

export const metadata: Metadata = {
  title: "Irland Essensführer | Education State",
  description:
    "Dubliner Restaurants aus jeder Küche — von gemütlichen irischen Pubs bis zu halal-freundlichen türkischen, indischen und chinesischen Grills — kuratiert für die internationalen Studierenden von Education State.",
};

const hrefs = { en: "/food", tr: "/tr/food", de: "/de/food" };

export default function FoodPageDe() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="de" hrefs={hrefs} />
      <FoodHero locale="de" />
      <RestaurantExplorer restaurants={restaurantsDe} locale="de" />
      <Footer locale="de" />
    </div>
  );
}
