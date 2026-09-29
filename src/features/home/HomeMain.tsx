"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import TrustedBySection from "./components/TrustedBySection";
import MissionSection from "./components/MissionSection";
import ServicesSection from "./components/ServicesSection";
import WhyKaelixoSection from "./components/WhyKaelixoSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProductsSection from "./components/ProductsSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import AiSolutionsSection from "./components/AiSolutionsSection";
import ReadyToBuildSection from "./components/ReadyToBuildSection";
export default function HomeMain() {
  return (
    <div className="relative w-full overflow-hidden bg-[#020205] text-white selection:bg-[#FF0055] selection:text-white">
      <HeroSection />

      <div className="relative">
        <div
          className="absolute inset-0 bg-[url('/content-rock.png')] bg-[length:300%_auto] sm:bg-[length:120%_auto] md:bg-[length:100%_auto] bg-[center_bottom_5%] sm:bg-bottom bg-no-repeat opacity-50 sm:opacity-20 pointer-events-none mix-blend-screen"
        />
        {/* Only fade at the bottom to blend with the next section, less aggressive on mobile so image shows */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020205]/90 sm:to-[#020205] pointer-events-none" />

        <div className="relative z-10">
          <TrustedBySection />
          <MissionSection />
        </div>
      </div>

      <ServicesSection />

      <WhyKaelixoSection />

      <ProcessSection />

      <TestimonialsSection />

      <ProductsSection />

      <SuccessStoriesSection />

      <AiSolutionsSection />

      <ReadyToBuildSection />

    </div>
  );
}
