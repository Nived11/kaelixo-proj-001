"use client";

import React from "react";
import HomeAnimationActivity from "@/components/ui/HomeAnimationActivity";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";
import AboutWhoWeAre from "./components/AboutWhoWeAre";
import AboutStory from "./components/AboutStory";
import AboutDirectors from "./components/AboutDirectors";
import AboutMissionValues from "./components/AboutMissionValues";
import AboutTeam from "./components/AboutTeam";
import AboutWorkspace from "./components/AboutWorkspace";
import AboutImpact from "./components/AboutImpact";
import AboutCTA from "./components/AboutCTA";
import AboutTeamModal from "./components/AboutTeamModal";

export default function AboutMain() {
  React.useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const hash = window.location.hash;

    const scrollToHash = (immediate: boolean = false) => {
      const target = document.querySelector(hash);
      if (target) {
        const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string | HTMLElement, opts?: { offset?: number; immediate?: boolean }) => void } }).__lenis;
        if (lenis) {
          lenis.scrollTo(hash, { offset: -90, immediate });
        } else {
          target.scrollIntoView({ behavior: immediate ? "instant" : "smooth" });
        }
        return true;
      }
      return false;
    };

    // Scroll immediately on mount
    scrollToHash(true);

    // Re-verify after layout and hydration
    const t1 = setTimeout(() => scrollToHash(true), 80);
    const t2 = setTimeout(() => scrollToHash(true), 250);

    const handleHashChange = () => {
      scrollToHash(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <HomeAnimationActivity>
      <div className="relative w-full font-sans pt-[96px] bg-[#020205]">
        {/* Hero & Stats Parallax Container */}
        <div className="relative w-full">
          <AboutHero />
          <AboutStats />
          <AboutWhoWeAre />
        </div>

        {/* Subsequent Sections in solid elevated stacking context */}
        <div className="relative z-20">
          <AboutStory />
          <AboutDirectors />
          <AboutMissionValues />
          <AboutTeam />
          <AboutWorkspace />
          <AboutImpact />
          <AboutCTA />
        </div>
      </div>

      {/* Team Modal rendered outside section stack */}
      <AboutTeamModal />
    </HomeAnimationActivity>
  );
}

