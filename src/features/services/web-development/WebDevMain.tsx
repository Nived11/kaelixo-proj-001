"use client";

import React from "react";
import WebDevHero from "./components/WebDevHero";
import WebDevOverview from "./components/WebDevOverview";
import WebDevApproach from "./components/WebDevApproach";
import WebDevWhyChooseUs from "./components/WebDevWhyChooseUs";
import WebDevTechStack from "./components/WebDevTechStack";
import WebDevProjects from "./components/WebDevProjects";
import WebDevIndustries from "./components/WebDevIndustries";
import WebDevCost from "./components/WebDevCost";
import EnquirySection from "./components/EnquirySection";
import CTASection from "./components/CTASection";
import WebDevRelatedServices from "./components/WebDevRelatedServices";
import FAQSection from "./components/FAQSection";
import styles from './WebDevMain.module.css';

export default function WebDevMain() {
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
        <WebDevHero />
        <WebDevOverview />
      </div>

      {/* Subsequent Sections in solid elevated stacking context */}
      <div className="relative z-20">
        <WebDevApproach />
        <WebDevWhyChooseUs />
        <WebDevTechStack />
        <WebDevProjects />
        <WebDevIndustries />
        <WebDevCost />
        <WebDevRelatedServices />
        <FAQSection />
        <EnquirySection/>
        <CTASection />
      </div>
    </div>
  );
}
