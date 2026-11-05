"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ProjectItem } from "@/features/portfolio/data/portfolioProjects";
import ProjectDetailHero from "./ProjectDetailHero";
import ProjectAtAGlance from "./ProjectAtAGlance";

interface SnapshotData {
  platform: string;
  duration: string;
  location: string;
  services: string;
  industry?: string;
  previewImage?: string;
  quickStats: {
    stat: string;
    label: string;
    desc: string;
  }[];
}

interface HeroAtAGlanceInteractiveProps {
  project: ProjectItem;
  heroHeadline: {
    prefix: string;
    highlight: string;
  };
  heroSubtitle: string;
  projectType: string;
  clientLogoText: string;
  clientLogoTagline: string;
  snapshot: SnapshotData;
}

export default function HeroAtAGlanceInteractive({
  project,
  heroHeadline,
  heroSubtitle,
  projectType,
  clientLogoText,
  clientLogoTagline,
  snapshot,
}: HeroAtAGlanceInteractiveProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSlotRef = useRef<HTMLDivElement>(null);
  const targetSlotRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);

  const metricsRef = useRef<{
    heroRect: DOMRect;
    targetRect: DOMRect;
    heroPageTop: number;
    heroPageLeft: number;
    targetPageTop: number;
    targetPageLeft: number;
    targetScale: number;
    scrollEnd: number;
  } | null>(null);

  const mockupSrc = project.heroMockupImage || project.image;

  const updatePosition = useCallback(() => {
    const metrics = metricsRef.current;
    const floatingEl = floatingRef.current;
    if (!metrics || !floatingEl) return;

    const scrollY = window.scrollY;
    const { heroRect, targetPageTop, targetPageLeft, targetScale, scrollEnd } = metrics;

    let currentX: number;
    let currentY: number;
    let scale: number;

    const progress = scrollEnd > 0 ? scrollY / scrollEnd : 1;

    if (progress < 1) {
      // In transit: smoothly shrink uniformly and glide into At a Glance slot
      const clampedP = Math.max(0, progress);
      const e =
        clampedP < 0.5
          ? 4 * clampedP * clampedP * clampedP
          : 1 - Math.pow(-2 * clampedP + 2, 3) / 2;

      // Hero is sticky top-0, so its top in viewport is heroRect.top
      const heroViewportTop = heroRect.top;
      const heroViewportLeft = heroRect.left;

      // Target slot viewport top as page scrolls
      const targetViewportTop = targetPageTop - scrollY;
      const targetViewportLeft = targetPageLeft;

      currentX = heroViewportLeft + (targetViewportLeft - heroViewportLeft) * e;
      currentY = heroViewportTop + (targetViewportTop - heroViewportTop) * e;
      scale = 1 + (targetScale - 1) * e;
    } else {
      // Landed in At a Glance slot: locks precisely to targetPageLeft & targetPageTop
      // and scrolls naturally with the document — ZERO BLINKING, ZERO SWAP!
      currentX = targetPageLeft;
      currentY = targetPageTop - scrollY;
      scale = targetScale;
    }

    // Smoothly fade out drop shadow so it completely disappears in Project Snapshot
    const imgWrapper = imageWrapperRef.current;
    if (imgWrapper) {
      if (progress <= 0.05) {
        imgWrapper.style.filter = "drop-shadow(0 20px 45px rgba(0,0,0,0.75))";
      } else if (progress < 0.8) {
        const shadowFactor = Math.max(0, 1 - progress / 0.8);
        const yOffset = Math.round(20 * shadowFactor);
        const blur = Math.round(45 * shadowFactor);
        const alpha = (0.75 * shadowFactor).toFixed(2);
        imgWrapper.style.filter = `drop-shadow(0 ${yOffset}px ${blur}px rgba(0,0,0,${alpha}))`;
      } else {
        // Zero shadow in Project Snapshot
        imgWrapper.style.filter = "none";
      }
    }

    // Hide only if scrolled far above viewport to save GPU compositor work
    if (currentY < -heroRect.height * 1.5) {
      floatingEl.style.visibility = "hidden";
    } else {
      floatingEl.style.visibility = "visible";
      floatingEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${scale})`;
    }
  }, []);

  // Measure initial coordinates and configure dimensions
  const measure = useCallback(() => {
    if (!heroSlotRef.current || !targetSlotRef.current || !floatingRef.current) return;

    const heroRect = heroSlotRef.current.getBoundingClientRect();
    const targetRect = targetSlotRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;

    const heroPageTop = heroRect.top + scrollY;
    const heroPageLeft = heroRect.left;
    const targetPageTop = targetRect.top + scrollY;
    const targetPageLeft = targetRect.left;

    // Uniform scale preserving exact 1774/887 aspect ratio without horizontal compression
    const targetScale = targetRect.width / heroRect.width;

    // Resting position: when target slot arrives at comfortable viewing position in viewport
    const targetRestingTop = Math.max(
      120,
      Math.min(280, window.innerHeight * 0.35)
    );
    const scrollEnd = Math.max(150, targetPageTop - targetRestingTop);

    metricsRef.current = {
      heroRect,
      targetRect,
      heroPageTop,
      heroPageLeft,
      targetPageTop,
      targetPageLeft,
      targetScale,
      scrollEnd,
    };

    floatingRef.current.style.width = `${heroRect.width}px`;
    floatingRef.current.style.height = `${heroRect.height}px`;
    floatingRef.current.style.transformOrigin = "top left";

    updatePosition();
    setIsMounted(true);
  }, [updatePosition]);

  useEffect(() => {
    measure();
    const timer1 = setTimeout(measure, 150);
    const timer2 = setTimeout(measure, 600);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        measure();
      });
      if (heroSlotRef.current) ro.observe(heroSlotRef.current);
      if (targetSlotRef.current) ro.observe(targetSlotRef.current);
    }

    const handleResize = () => {
      measure();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [measure]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [updatePosition]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* 1. HERO SECTION */}
      <ProjectDetailHero
        project={project}
        heroHeadline={heroHeadline}
        heroSubtitle={heroSubtitle}
        projectType={projectType}
        clientLogoText={clientLogoText}
        clientLogoTagline={clientLogoTagline}
        heroSlotRef={heroSlotRef}
        isMounted={isMounted}
      />

      {/* 2. AT A GLANCE SECTION */}
      <ProjectAtAGlance
        project={project}
        clientLogoText={clientLogoText}
        clientLogoTagline={clientLogoTagline}
        snapshot={snapshot}
        targetSlotRef={targetSlotRef}
      />

      {/* 3. CONTINUOUS GPU-ACCELERATED MOCKUP (Single continuous element, zero flicker, zero width compression) */}
      {mockupSrc && (
        <div
          ref={floatingRef}
          className="fixed top-0 left-0 z-30 pointer-events-none transition-none"
          style={{
            transformOrigin: "top left",
            willChange: "transform",
            visibility: isMounted ? "visible" : "hidden",
          }}
        >
          <div
            ref={imageWrapperRef}
            className="relative w-full h-full flex items-center justify-center transition-none"
            style={{ willChange: "filter" }}
          >
            <Image
              src={mockupSrc}
              alt={`${project.title} Showcase`}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1500px"
              className="object-contain object-center"
            />
          </div>
        </div>
      )}
    </div>
  );
}
