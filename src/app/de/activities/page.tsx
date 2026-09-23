import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ActivityExplorer from "@/components/ActivityExplorer";
import Footer from "@/components/Footer";
import { activitiesDe } from "@/data/activities.de";

export const metadata: Metadata = {
  title: "Irland Aktivitätenführer | Education State",
  description:
    "Kostenlose Museen, Attraktionen zu Studierendenpreisen und unvergessliche Tagesausflüge in ganz Irland — kuratiert für die internationalen Studierenden von Education State.",
};

const hrefs = { en: "/activities", tr: "/tr/activities", de: "/de/activities" };

export default function ActivitiesPageDe() {
  return (
    <div className="min-h-screen bg-white">
      <Header locale="de" hrefs={hrefs} />
      <Hero activities={activitiesDe} locale="de" />
      <ActivityExplorer activities={activitiesDe} locale="de" />
      <Footer locale="de" />
    </div>
  );
}
