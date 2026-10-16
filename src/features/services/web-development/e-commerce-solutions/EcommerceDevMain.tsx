"use client";

import React from "react";
import EcommerceHero from "./components/EcommerceHero";
import EcommerceOverview from "./components/EcommerceOverview";
import EcommerceApproach from "./components/EcommerceApproach";
import EcommerceWhyChooseUs from "./components/EcommerceWhyChooseUs";
import EcommerceTechStack from "./components/EcommerceTechStack";
import EcommerceProducts from "./components/EcommerceProducts";
import EcommerceIndustries from "./components/EcommerceIndustries";
import EcommerceCost from "./components/EcommerceCost";
import EcommerceRelatedServices from "./components/EcommerceRelatedServices";
import EcommerceFAQ from "./components/EcommerceFAQ";
import EnquirySection from "@/features/services/web-development/components/EnquirySection";
import EcommerceCTA from "./components/EcommerceCTA";
import styles from "@/features/services/web-development/WebDevMain.module.css";

export default function EcommerceDevMain() {
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
        <EcommerceHero />
        <EcommerceOverview />
      </div>

      {/* Subsequent Sections in solid elevated stacking context */}
      <div className="relative z-20">
        <EcommerceApproach />
        <EcommerceWhyChooseUs />
        <EcommerceTechStack />
        <EcommerceProducts />
        <EcommerceIndustries />
        <EcommerceCost />
        <EcommerceRelatedServices />
        <EcommerceFAQ />
        <EnquirySection />
        <EcommerceCTA />
      </div>
    </div>
  );
}
