import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialFeed from "@/components/SocialFeed";
import EventsSection from "@/components/EventsSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";


export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white">
      <Navbar />
      <HeroSection />
      <SocialFeed />
      <EventsSection />
      <WhyUsSection />
      <TestimonialsSection />
    </main>
  );
}