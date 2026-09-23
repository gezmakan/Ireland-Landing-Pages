import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ActivityExplorer from "@/components/ActivityExplorer";
import Footer from "@/components/Footer";
import { activitiesTr } from "@/data/activities.tr";

export const metadata: Metadata = {
  title: "İrlanda Aktivite Rehberi | Education State",
  description:
    "İrlanda'daki ücretsiz müzeler, öğrenci fiyatlı aktiviteler ve unutulmaz günübirlik turlar — Education State'in uluslararası öğrencileri için özenle hazırlandı.",
};

export default function ActivitiesPageTr() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="tr" switchHref="/activities" />
      <Hero activities={activitiesTr} locale="tr" />
      <ActivityExplorer activities={activitiesTr} locale="tr" />
      <Footer locale="tr" />
    </div>
  );
}
