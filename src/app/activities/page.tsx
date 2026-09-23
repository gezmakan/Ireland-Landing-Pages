import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ActivityExplorer from "@/components/ActivityExplorer";
import Footer from "@/components/Footer";

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ActivityExplorer />
      <Footer />
    </div>
  );
}
