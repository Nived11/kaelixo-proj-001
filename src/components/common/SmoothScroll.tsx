"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import { usePageReady } from '@/components/ui/PageLoader';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const isReady = usePageReady();
  useEffect(() => {
    // Touch devices keep native scrolling and do not need a continuous Lenis RAF.
    if (!isReady || !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      lerp: 0.07, // Inertia-based smoothing (closer to 0 is smoother/slower, default is 0.1)
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isReady]);

  return <>{children}</>;
}
