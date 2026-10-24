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

export default function AboutMain() {
  return (
    <HomeAnimationActivity>
      <AboutHero />
      <AboutStats />
      <AboutWhoWeAre />
      <AboutStory />
      <AboutDirectors />
      <AboutMissionValues />
      <AboutTeam />
      <AboutWorkspace />
      <AboutImpact />
      <AboutCTA />
    </HomeAnimationActivity>
  );
}
