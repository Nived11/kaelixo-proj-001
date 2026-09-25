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

export default function WebDevMain() {
  return (
    <div className="relative w-full overflow-hidden font-sans pt-[96px] bg-[#020205]">
      <WebDevHero />
      <div className="bg-white">
        <WebDevOverview />
        <WebDevApproach />
      </div>
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
  );
}
