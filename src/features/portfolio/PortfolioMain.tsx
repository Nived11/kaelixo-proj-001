"use client";

import React, { useEffect } from "react";
import HomeAnimationActivity from "@/components/ui/HomeAnimationActivity";
import PortfolioHero from "./components/PortfolioHero";
import PortfolioStats from "./components/PortfolioStats";
import PortfolioGridSection from "./components/PortfolioGridSection";

export default function PortfolioMain() {
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
        {/* Hero, Stats & Grid Parallax Container */}
        <div className="relative w-full">
          <PortfolioHero />
          <PortfolioStats />
          <PortfolioGridSection />
        </div>
      </div>
    </HomeAnimationActivity>
  );
}
