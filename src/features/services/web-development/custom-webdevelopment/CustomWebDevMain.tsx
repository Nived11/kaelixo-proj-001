"use client";

import React from "react";
import CustomWebDevHero from "./components/CustomWebDevHero";
import CustomWebDevOverview from "./components/CustomWebDevOverview";
import CustomWebDevApproach from "./components/CustomWebDevApproach";
import CustomWebDevWhyChooseUs from "./components/CustomWebDevWhyChooseUs";
import CustomWebDevTechStack from "./components/CustomWebDevTechStack";
import CustomWebDevProjects from "./components/CustomWebDevProjects";
import CustomWebDevIndustries from "./components/CustomWebDevIndustries";
import CustomWebDevCost from "./components/CustomWebDevCost";
import CustomWebDevRelatedServices from "./components/CustomWebDevRelatedServices";
import CustomWebDevFAQ from "./components/CustomWebDevFAQ";
import EnquirySection from "@/features/services/web-development/components/EnquirySection";
import CustomWebDevCTA from "./components/CustomWebDevCTA";
import styles from "@/features/services/web-development/WebDevMain.module.css";

export default function CustomWebDevMain() {
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
        <CustomWebDevHero />
        <CustomWebDevOverview />
      </div>

      {/* Subsequent Sections in solid elevated stacking context */}
      <div className="relative z-20">
        <CustomWebDevApproach />
        <CustomWebDevWhyChooseUs />
        <CustomWebDevTechStack />
        <CustomWebDevProjects />
        <CustomWebDevIndustries />
        <CustomWebDevCost />
        <CustomWebDevRelatedServices />
        <CustomWebDevFAQ />
        <EnquirySection />
        <CustomWebDevCTA />
      </div>
    </div>
  );
}
