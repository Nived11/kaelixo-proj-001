"use client";

import React, { useEffect } from "react";
import HomeAnimationActivity from "@/components/ui/HomeAnimationActivity";
import ContactHero from "./components/ContactHero";
import ContactMainSection from "./components/ContactMainSection";
import ContactCTA from "./components/ContactCTA";

export default function ContactMain() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          const lenis = (
            window as unknown as {
              __lenis?: { scrollTo: (t: string | HTMLElement, opts?: { offset?: number }) => void };
            }
          ).__lenis;
          if (lenis) {
            lenis.scrollTo(hash, { offset: -90 });
          } else {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }, 250);
      }
    }
  }, []);

  return (
    <HomeAnimationActivity>
      <div className="relative w-full font-sans pt-[96px] bg-[#020205]">
        {/* Hero & Main Form Parallax Container - identical structure to AboutMain */}
        <div className="relative w-full">
          <ContactHero />
          <ContactMainSection />
        </div>

        {/* Subsequent Sections in solid elevated stacking context */}
        <div className="relative z-20">
          <ContactCTA />
        </div>
      </div>
    </HomeAnimationActivity>
  );
}
