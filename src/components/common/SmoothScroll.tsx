"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePageReady } from '@/components/ui/PageLoader';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const isReady = usePageReady();
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable native browser automatic scroll restoration to avoid clashing with Lenis
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Touch devices keep native scrolling and do not need a continuous Lenis RAF.
    if (!isReady || !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.08, // Inertia-based smoothing
      wheelMultiplier: 1,
      smoothWheel: true,
      prevent: (node: HTMLElement) => {
        if (!node) return false;

        // 1. Direct or ancestor data-lenis-prevent attribute
        if (node.closest && node.closest('[data-lenis-prevent]')) {
          return true;
        }

        // 2. Check if element is inside Shadow DOM (browser extensions / third-party widgets)
        const rootNode = node.getRootNode?.();
        if (rootNode instanceof ShadowRoot) {
          return true;
        }

        // 3. Inspect target and parent chain
        let curr: HTMLElement | null = node;
        while (curr && curr !== document.body && curr !== document.documentElement) {
          if (curr.hasAttribute && curr.hasAttribute('data-lenis-prevent')) {
            return true;
          }

          const id = curr.id?.toLowerCase() || '';
          const className = typeof curr.className === 'string' ? curr.className.toLowerCase() : '';
          const tagName = curr.tagName.toLowerCase();

          // Extension, widget, modal or dropdown containers
          if (
            id.includes('extension') ||
            id.includes('kaira') ||
            id.includes('modal') ||
            id.includes('popup') ||
            id.includes('overlay') ||
            id.includes('dropdown') ||
            className.includes('modal') ||
            className.includes('popup') ||
            className.includes('extension') ||
            className.includes('dropdown') ||
            className.includes('country-list') ||
            tagName.includes('-') // Web components / Chrome extension elements
          ) {
            return true;
          }

          // Modal and dialog accessibility roles
          if (
            curr.getAttribute('role') === 'dialog' ||
            curr.getAttribute('role') === 'menu' ||
            curr.getAttribute('aria-modal') === 'true'
          ) {
            return true;
          }

          // Any nested container that has overflow auto/scroll and is scrollable
          const style = window.getComputedStyle(curr);
          const hasScrollableOverflow =
            style.overflowY === 'auto' ||
            style.overflowY === 'scroll' ||
            style.overflowX === 'auto' ||
            style.overflowX === 'scroll';

          if (
            hasScrollableOverflow &&
            (curr.scrollHeight > curr.clientHeight || curr.scrollWidth > curr.clientWidth)
          ) {
            return true;
          }

          curr = curr.parentElement;
        }

        return false;
      },
    });

    lenisRef.current = lenis;
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, [isReady]);

  // Reset scroll position to top whenever route (pathname) changes, unless a hash is targeted
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If navigating to an in-page section with an anchor hash (e.g. /#services, /about#team), skip resetting
    if (window.location.hash) {
      return;
    }

    const resetScrollToTop = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        const globalLenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts?: { immediate?: boolean }) => void } }).__lenis;
        if (globalLenis) {
          globalLenis.scrollTo(0, { immediate: true });
        }
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScrollToTop();

    // Catch late layout / DOM updates on subsequent frames
    const rafId = requestAnimationFrame(resetScrollToTop);
    const timer = setTimeout(resetScrollToTop, 60);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [pathname]);

  return <>{children}</>;
}
