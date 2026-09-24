import type { Metadata } from "next";
import Header from "@/components/Header";
import FoodHero from "@/components/FoodHero";
import RestaurantExplorer from "@/components/RestaurantExplorer";
import Footer from "@/components/Footer";
import { restaurants } from "@/data/food";

export const metadata: Metadata = {
  title: "Ireland Food Guide | Education State",
  description:
    "Dublin restaurants across every cuisine — from cosy Irish pubs to halal-friendly Turkish, Indian, and Chinese grills — curated for Education State's international students.",
};

const hrefs = { en: "/food", tr: "/tr/food", de: "/de/food" };

export default function FoodPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="en" hrefs={hrefs} />
      <FoodHero locale="en" />
      <RestaurantExplorer restaurants={restaurants} locale="en" />
      <Footer locale="en" />
    </div>
  );
}
