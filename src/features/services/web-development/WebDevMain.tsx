"use client";

import React from "react";
import WebDevHero from "./components/WebDevHero";
import WebDevOverview from "./components/WebDevOverview";
import WebDevApproach from "./components/WebDevApproach";
import WebDevWhyChooseUs from "./components/WebDevWhyChooseUs";

export default function WebDevMain() {
  return (
    <div className="relative w-full overflow-hidden font-sans pt-[96px] bg-[#020205]">
      <WebDevHero />
      <div className="bg-white">
        <WebDevOverview />
        <WebDevApproach />
      </div>
      <WebDevWhyChooseUs />
    </div>
  );
}
