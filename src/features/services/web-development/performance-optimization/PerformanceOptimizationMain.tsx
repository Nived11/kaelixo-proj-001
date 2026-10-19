"use client";

import React from "react";
import PerformanceHero from "./components/PerformanceHero";
import PerformanceOverview from "./components/PerformanceOverview";
import PerformanceApproach from "./components/PerformanceApproach";
import PerformanceWhyChooseUs from "./components/PerformanceWhyChooseUs";
import PerformanceTechStack from "./components/PerformanceTechStack";
import PerformanceProjects from "./components/PerformanceProjects";
import PerformanceProducts from "./components/PerformanceProducts";
import PerformanceIndustries from "./components/PerformanceIndustries";
import PerformanceCost from "./components/PerformanceCost";
import PerformanceRelatedServices from "./components/PerformanceRelatedServices";
import PerformanceFAQ from "./components/PerformanceFAQ";
import EnquirySection from "@/features/services/web-development/components/EnquirySection";
import PerformanceCTA from "./components/PerformanceCTA";
import styles from "@/features/services/web-development/WebDevMain.module.css";

export default function PerformanceOptimizationMain() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const sections = Array.from(rootRef.current?.querySelectorAll('section') ?? []);
    if (typeof IntersectionObserver === 'undefined') return;
    const visible = new Set<Element>();
    const update = () => sections.forEach(section => {
      section.dataset.animationActive = String(visible.has(section) && !document.hidden);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      update();
    });
    sections.forEach(section => observer.observe(section));
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
      sections.forEach(section => delete section.dataset.animationActive);
    };
  }, []);

  return (
    <div ref={rootRef} className={`${styles.page} relative w-full font-sans pt-[96px] bg-[#020205]`}>
      {/* Hero & Overview Parallax Container */}
      <div className="relative w-full">
        <PerformanceHero />
        <PerformanceOverview />
      </div>

      {/* Subsequent Sections in solid elevated stacking context */}
      <div className="relative z-20">
        <PerformanceApproach />
        <PerformanceWhyChooseUs />
        <PerformanceTechStack />
        <PerformanceProjects />
        <PerformanceProducts />
        <PerformanceIndustries />
        <PerformanceCost />
        <PerformanceRelatedServices />
        <PerformanceFAQ />
        <EnquirySection />
        <PerformanceCTA />
      </div>
    </div>
  );
}
