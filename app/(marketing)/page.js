import ExitIntentPopup from "@/components/ExitIntentPopup";
import HomeHero from "@/components/home/HomeHero";
import { FinalCta, GenresSection, JourneySection, PortfolioSection, ServicesSection, TestimonialsSection, WhySection } from "@/components/home/HomeSections";

export default function HomePage() {
  return <div className="home-page">
    <HomeHero />
    <ServicesSection />
    <JourneySection />
    <PortfolioSection />
    <WhySection />
    <TestimonialsSection />
    <GenresSection />
    <FinalCta />
    <ExitIntentPopup />
  </div>;
}
