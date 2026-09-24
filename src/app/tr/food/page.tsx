import type { Metadata } from "next";
import Header from "@/components/Header";
import FoodHero from "@/components/FoodHero";
import RestaurantExplorer from "@/components/RestaurantExplorer";
import Footer from "@/components/Footer";
import { restaurantsTr } from "@/data/food.tr";

export const metadata: Metadata = {
  title: "İrlanda Yemek Rehberi | Education State",
  description:
    "Sıcacık İrlanda pub'larından helal dostu Türk, Hint ve Çin ızgaralarına kadar her mutfaktan Dublin restoranları — Education State'in uluslararası öğrencileri için özenle hazırlandı.",
};

const hrefs = { en: "/food", tr: "/tr/food", de: "/de/food" };

export default function FoodPageTr() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="tr" hrefs={hrefs} />
      <FoodHero locale="tr" />
      <RestaurantExplorer restaurants={restaurantsTr} locale="tr" />
      <Footer locale="tr" />
    </div>
  );
}
