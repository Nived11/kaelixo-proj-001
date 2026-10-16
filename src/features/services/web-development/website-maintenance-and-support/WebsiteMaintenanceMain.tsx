"use client";

import React from "react";
import WebsiteMaintenanceHero from "./components/WebsiteMaintenanceHero";
import WebsiteMaintenanceOverview from "./components/WebsiteMaintenanceOverview";
import WebsiteMaintenanceApproach from "./components/WebsiteMaintenanceApproach";
import WebsiteMaintenanceWhyChooseUs from "./components/WebsiteMaintenanceWhyChooseUs";
import WebsiteMaintenanceTechStack from "./components/WebsiteMaintenanceTechStack";
import WebsiteMaintenanceProducts from "./components/WebsiteMaintenanceProducts";
import WebsiteMaintenanceIndustries from "./components/WebsiteMaintenanceIndustries";
import WebsiteMaintenanceCost from "./components/WebsiteMaintenanceCost";
import WebsiteMaintenanceRelatedServices from "./components/WebsiteMaintenanceRelatedServices";
import WebsiteMaintenanceFAQ from "./components/WebsiteMaintenanceFAQ";
import EnquirySection from "@/features/services/web-development/components/EnquirySection";
import WebsiteMaintenanceCTA from "./components/WebsiteMaintenanceCTA";
import styles from "@/features/services/web-development/WebDevMain.module.css";

export default function WebsiteMaintenanceMain() {
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
        <WebsiteMaintenanceHero />
        <WebsiteMaintenanceOverview />
      </div>

      {/* Subsequent Sections in solid elevated stacking context */}
      <div className="relative z-20">
        <WebsiteMaintenanceApproach />
        <WebsiteMaintenanceWhyChooseUs />
        <WebsiteMaintenanceTechStack />
        <WebsiteMaintenanceProducts />
        <WebsiteMaintenanceIndustries />
        <WebsiteMaintenanceCost />
        <WebsiteMaintenanceRelatedServices />
        <WebsiteMaintenanceFAQ />
        <EnquirySection />
        <WebsiteMaintenanceCTA />
      </div>
    </div>
  );
}
