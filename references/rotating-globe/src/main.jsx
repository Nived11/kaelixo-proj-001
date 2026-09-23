import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import RotatingGlobe from './components/RotatingGlobe.jsx';
import './styles/preview.css';

function GlobePreview() {
  const [animated, setAnimated] = useState(true);
  const [clear, setClear] = useState(false);
  return (
    <main className="globe-studio">
      <header><a href="/" className="brand">prism<span>.</span></a><span className="edition">GLOBE STUDY / 002</span></header>
      <section className="intro"><span className="eyebrow">A WORLD IN MOTION</span><h1>A world turning.</h1><p>A slow, top-to-bottom rotation. Light held at the horizon.</p></section>
      <section className={`globe-stage ${clear ? 'globe-stage--clear' : ''}`} aria-label="Rotating globe preview">
        <span className="stage-label">NEON EARTH</span>
        <div className="globe-art"><RotatingGlobe animated={animated} /></div>
        <div className="stage-bottom"><span>90 SECONDS / REVOLUTION</span><span>TRANSPARENT</span></div>
      </section>
      <div className="toolbar"><button type="button" onClick={() => setAnimated(!animated)} aria-pressed={!animated}>{animated ? 'Pause rotation' : 'Resume rotation'}</button><button type="button" onClick={() => setClear(!clear)} aria-pressed={clear}>Check transparency</button><span>SVG · Original artwork</span></div>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><GlobePreview /></React.StrictMode>);
