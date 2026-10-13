"use client";

import { useEffect, useId, useRef, useState } from 'react';
import type { SphereController } from '@/components/sphere';
import { useViewportActivity } from '@/hooks/useViewportActivity';
import styles from './IndustryGlobe.module.css';

export default function IndustryGlobe() {
  const ref = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const controller = useRef<SphereController | null>(null);
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const active = useViewportActivity(ref);
  const nearby = useViewportActivity(ref, 300);
  const [ready, setReady] = useState(false);
  const activeRef = useRef(active);
  activeRef.current = active;

  // Load once near the viewport, then preserve the rotation phase on re-entry.
  useEffect(() => { if (nearby) setReady(true); }, [nearby]);
  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    import('@/components/sphere').then(({ createSphere }) => {
      if (cancelled || !svgRef.current) return;
      controller.current = createSphere(svgRef.current, {
        id: `industry-${id}`, imageHref: '/images/home/why-kaelixo-globe.webp',
        // Normalize this artwork's globe centre/radius to the home projection.
        imageBox: { x: -160, y: 90, width: 1576, height: 1099 },
        animated: activeRef.current, duration: 90, rotation: 'right', hideOuterArtwork: true, detail: 'compact',
      });
    });
    return () => { cancelled = true; controller.current?.destroy(); controller.current = null; };
  }, [ready, id]);
  useEffect(() => { controller.current?.setAnimated(active); }, [active]);

  return (
    <div ref={ref} className={`${styles.globe} w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px]`} data-active={active}>
      <svg ref={svgRef} viewBox="0 0 1400 1400" width="100%" height="100%" className={styles.surface} role="img" aria-label="Rotating globe connecting the industries we empower" />

    </div>
  );
}
