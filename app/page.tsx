import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { MaterialsStrip } from "@/components/sections/MaterialsStrip";
import { Industries } from "@/components/sections/Industries";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { PortfolioTeaser } from "@/components/sections/PortfolioTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <MaterialsStrip />
      <Industries />
      <ClientLogos />
      <PortfolioTeaser />
      <Testimonials />
      <CtaSection />
    </>
  );
}
