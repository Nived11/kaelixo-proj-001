"use client";
import { useEffect, useState, type RefObject } from 'react';

// Observation controls optional work only; content and scrolling never depend on it.
export function useViewportActivity(ref: RefObject<Element | null>, margin = 0) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let inView = false;
    const update = () => setActive(inView && !document.hidden);
    const measure = () => {
      const box = element.getBoundingClientRect();
      inView = box.bottom > -margin && box.top < window.innerHeight + margin;
      update();
    };
    measure();
    const observer = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(
      ([entry]) => { inView = entry.isIntersecting; update(); },
      { rootMargin: `${margin}px`, threshold: 0 }
    );
    observer?.observe(element);
    document.addEventListener('visibilitychange', measure);
    window.addEventListener('pageshow', measure);
    if (!observer) window.addEventListener('scroll', measure, { passive: true });
    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', measure);
      window.removeEventListener('pageshow', measure);
      window.removeEventListener('scroll', measure);
    };
  }, [ref, margin]);
  return active;
}
