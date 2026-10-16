"use client";

import React from "react";
import CMSHero from "./components/CMSHero";
import CMSOverview from "./components/CMSOverview";
import CMSApproach from "./components/CMSApproach";
import CMSWhyChooseUs from "./components/CMSWhyChooseUs";
import CMSTechStack from "./components/CMSTechStack";
import CMSProducts from "./components/CMSProducts";
import CMSIndustries from "./components/CMSIndustries";
import CMSCost from "./components/CMSCost";
import CMSRelatedServices from "./components/CMSRelatedServices";
import CMSFAQ from "./components/CMSFAQ";
import EnquirySection from "@/features/services/web-development/components/EnquirySection";
import CMSCTA from "./components/CMSCTA";
import styles from "@/features/services/web-development/WebDevMain.module.css";

export default function CMSDevMain() {
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
        <CMSHero />
        <CMSOverview />
      </div>

      {/* Subsequent Sections in solid elevated stacking context */}
      <div className="relative z-20">
        <CMSApproach />
        <CMSWhyChooseUs />
        <CMSTechStack />
        <CMSProducts />
        <CMSIndustries />
        <CMSCost />
        <CMSRelatedServices />
        <CMSFAQ />
        <EnquirySection />
        <CMSCTA />
      </div>
    </div>
  );
}
