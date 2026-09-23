import React, { useEffect, useId, useRef } from 'react';
import globeImage from '../assets/globe-original.png';
import { createSphere } from './sphere.js';
import '../styles/globe.css';

/**
 * Curved SVG surface projection of the original artwork. A positive phase
 * makes texture features roll from top to bottom around the horizontal axis.
 * The unseen hemisphere reuses the supplied front texture, mirrored.
 */
export default function RotatingGlobe({
  duration = 90,
  animated = true,
  className = '',
  title = 'Slowly rotating neon Earth',
}) {
  const titleId = useId();
  const svgRef = useRef(null);
  const sphereRef = useRef(null);
  const seconds = Number.isFinite(duration) && duration > 0 ? duration : 90;

  useEffect(() => {
    const sphere = createSphere(svgRef.current, { imageHref: globeImage, id: `sphere-${titleId.replace(/[^a-zA-Z0-9_-]/g, '')}` });
    sphereRef.current = sphere;
    return () => { sphere.destroy(); sphereRef.current = null; };
  }, [titleId]);

  useEffect(() => { sphereRef.current?.setDuration(seconds); }, [seconds]);
  useEffect(() => { sphereRef.current?.setAnimated(animated); }, [animated]);

  return (
    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 1400"
      width="100%" height="100%" preserveAspectRatio="xMidYMid meet"
      className={`rotating-globe ${className}`} role="img" aria-labelledby={titleId}
      data-animated={animated} data-duration={seconds}>
      <title id={titleId}>{title}</title>
    </svg>
  );
}
