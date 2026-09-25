"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import TrustedBySection from "./components/TrustedBySection";
import MissionSection from "./components/MissionSection";
import ServicesSection from "./components/ServicesSection";
import WhyKaelixoSection from "./components/WhyKaelixoSection";
import ProcessSection from "./components/ProcessSection";
import FAQSection from "../services/web-development/components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ProductsSection from "./components/ProductsSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import EnquirySection from "../services/web-development/components/EnquirySection";
import CTASection from "../services/web-development/components/CTASection";
export default function HomeMain() {
  return (
    <div className="relative bg-[#020205] text-white selection:bg-[#FF0055] selection:text-white">
      <HeroSection />

      <TrustedBySection />

      <MissionSection />

      <ServicesSection />

      <WhyKaelixoSection />

      <ProcessSection />

      <TestimonialsSection />

      <ProductsSection />

      <SuccessStoriesSection />

      <FAQSection />

      <EnquirySection/>

      <CTASection />

    </div>
  );
}
