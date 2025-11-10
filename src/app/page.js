
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ScrollFoldIndicator from "@/components/ScrollFoldIndicator";
import {
  CTASection,
  IndustriesSection,
  ProcessSection,
  StatsSection,
  TestimonialsSection,
} from "@/components/testamonials";
import ModernFooter from "@/components/Footer";

export default function Home() {
  return (
   <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <IndustriesSection />
     
       <CTASection />
  </>
   

  );
}
