import React from "react";
import HomeAnimationActivity from "@/components/ui/HomeAnimationActivity";
import AboutHero from "./components/AboutHero";
import AboutStats from "./components/AboutStats";

export default function AboutMain() {
  return (
    <HomeAnimationActivity>
      <AboutHero />
      <AboutStats />
      {/* Additional About sections (Our Story, Mission, Values, Leadership team, etc.) can be added here */}
    </HomeAnimationActivity>
  );
}
