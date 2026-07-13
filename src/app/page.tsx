import Hero from "@/components/sections/Hero";
import HorizontalStory from "@/components/sections/HorizontalStory";
import ProductShowcase from "@/components/sections/ProductShowcase";
import SmartFeatures from "@/components/sections/SmartFeatures";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import Specifications from "@/components/sections/Specifications";
import Comparison from "@/components/sections/Comparison";
import TestimonialsAndFAQ from "@/components/sections/TestimonialsAndFAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ZoomAnimation from "@/components/sections/ZoomAnimation";
import SmoothScroll from "@/components/layout/SmoothScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/30">
      <SmoothScroll>
        <Hero />
        <HorizontalStory />
        <ProductShowcase />
        <SmartFeatures />
        <InteractiveDemo />
        <Comparison />
        <Specifications />
        <TestimonialsAndFAQ />
        <ZoomAnimation />
        <FinalCTA />
      </SmoothScroll>
    </main>
  );
}
