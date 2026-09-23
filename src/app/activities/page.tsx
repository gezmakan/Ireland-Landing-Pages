import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ActivityExplorer from "@/components/ActivityExplorer";
import Footer from "@/components/Footer";
import { activities } from "@/data/activities";

export const metadata: Metadata = {
  title: "Ireland Activity Guide | Education State",
  description:
    "Free museums, student-priced attractions, and unforgettable day trips across Ireland — curated for Education State's international students.",
};

const hrefs = { en: "/activities", tr: "/tr/activities", de: "/de/activities" };

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="en" hrefs={hrefs} />
      <Hero activities={activities} locale="en" />
      <ActivityExplorer activities={activities} locale="en" />
      <Footer locale="en" />
    </div>
  );
}
