"use client";

import React from "react";
import WebAppDevHero from "./components/WebAppDevHero";
import WebAppDevOverview from "./components/WebAppDevOverview";
import WebAppDevApproach from "./components/WebAppDevApproach";
import WebAppDevWhyChooseUs from "./components/WebAppDevWhyChooseUs";
import WebAppDevTechStack from "./components/WebAppDevTechStack";
import WebAppDevProducts from "./components/WebAppDevProducts";
import WebAppDevIndustries from "./components/WebAppDevIndustries";
import WebAppDevCost from "./components/WebAppDevCost";
import WebAppDevRelatedServices from "./components/WebAppDevRelatedServices";
import WebAppDevFAQ from "./components/WebAppDevFAQ";
import EnquirySection from "@/features/services/web-development/components/EnquirySection";
import WebAppDevCTA from "./components/WebAppDevCTA";
import styles from "@/features/services/web-development/WebDevMain.module.css";

export default function WebAppDevMain() {
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
        <WebAppDevHero />
        <WebAppDevOverview />
      </div>

      {/* Subsequent Sections in solid elevated stacking context */}
      <div className="relative z-20">
        <WebAppDevApproach />
        <WebAppDevWhyChooseUs />
        <WebAppDevTechStack />
        <WebAppDevProducts />
        <WebAppDevIndustries />
        <WebAppDevCost />
        <WebAppDevRelatedServices />
        <WebAppDevFAQ />
        <EnquirySection />
        <WebAppDevCTA />
      </div>
    </div>
  );
}
