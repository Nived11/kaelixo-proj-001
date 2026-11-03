"use client";

import React, { useEffect } from "react";
import HomeAnimationActivity from "@/components/ui/HomeAnimationActivity";
import ProductsHero from "./components/ProductsHero";
import ProductFeatures from "./components/ProductFeatures";
import ProductSuiteSection from "./components/ProductSuiteSection";

export default function ProductsMain() {
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
        {/* Parallax Container: Hero, Features Bar & Product Suite */}
        <div className="relative w-full">
          <ProductsHero />
          <ProductFeatures />
          <ProductSuiteSection />
        </div>
      </div>
    </HomeAnimationActivity>
  );
}

