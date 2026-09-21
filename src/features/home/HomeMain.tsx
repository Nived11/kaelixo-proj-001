"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import TrustedBySection from "./components/TrustedBySection";
import MissionSection from "./components/MissionSection";
import LightSection from "./components/LightSection";

export default function HomeMain() {
  return (
    <div className="relative bg-[#020205] text-white selection:bg-[#FF0055] selection:text-white">
      {/* 1. Hero Section with 3D Monolith artwork, Tagline, CTAs & Docked Stats Bar */}
      <HeroSection />

      {/* 2. Trusted By Companies (Microsoft, Google, AWS, Meta, etc.) */}
      <TrustedBySection />

      {/* 3. THINK. BUILD. GROW. Statement Section */}
      <MissionSection />

      {/* 4. Clean Transition to White Section (Services, Capabilities, Consultation Banner) */}
      <LightSection />
    </div>
  );
}
