"use client";
import { useEffect, useRef } from 'react';
export default function HomeAnimationActivity({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || typeof IntersectionObserver === 'undefined') return;
    const elements = Array.from(root.querySelectorAll<HTMLElement>('section, .pause-marquee-hover'));
    const visible = new Set<Element>();
    const update = () => elements.forEach(element => {
      element.dataset.animationActive = String(visible.has(element) && !document.hidden);
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
      update();
    }, { threshold: 0 });
    elements.forEach(element => observer.observe(element));
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect(); document.removeEventListener('visibilitychange', update);
      elements.forEach(element => delete element.dataset.animationActive);
    };
  }, []);
  return <div ref={ref} className="home-page relative w-full overflow-x-clip bg-[#020205] text-white selection:bg-[#FF0055] selection:text-white">{children}</div>;
}
