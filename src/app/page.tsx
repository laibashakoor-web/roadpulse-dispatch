import AboutSection from "@/components/pages/about";
import ContactSection from "@/components/pages/contact";
import DriverRegistrationSection from "@/components/pages/driver-registration";
import HeroSection from "@/components/pages/hero";
import PricingSection from "@/components/pages/pricing";
import ServicesSection from "@/components/pages/services";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <DriverRegistrationSection />
    </main>
  );
}
