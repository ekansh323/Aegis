import { LandingNav } from "@/components/landing/landing-nav";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { TechShowcaseSection } from "@/components/landing/tech-showcase-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <LandingNav />
      <HeroSection />
      {/* Scroll storytelling stages are stubbed here for future milestone implementation */}
      <FeaturesSection />
      <HowItWorksSection />
      <TechShowcaseSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
