# Neon globe: top-to-bottom spherical rotation

The globe stays round while its surface turns around its horizontal
axis from top to bottom. A full turn takes 90 seconds. Its atmosphere and rim
stay fixed. The original PNG is preserved without color filters or image edits.

The renderer projects that image through small SVG texture patches onto a
curved surface. This is raster artwork inside SVG geometry, not vector-traced
continents. Since the input only shows one hemisphere, the reverse hemisphere
reuses a mirrored continuation of the supplied texture. Its unseen geography
is not reconstructed. The inner texture is cropped to keep the original baked
rim lighting from moving across the face. The outer glow uses the original view.
Texture repeats use linear coordinates, with the mesh split at the moving
repeat boundary, to prevent stretched pixel bands during quarter-turns.

## Recommended React integration

Copy these files, preserving relative paths:

- src/components/RotatingGlobe.jsx
- src/components/sphere.js
- src/styles/globe.css
- src/assets/globe-original.png

```jsx
import RotatingGlobe from './components/RotatingGlobe.jsx';

<div style={{ width: '100%', maxWidth: 560 }}>
  <RotatingGlobe duration={90} animated />
</div>
```

`duration` is seconds per complete turn. A larger number is slower.
Set `animated={false}` to pause. `title` and `className` are also supported.
The renderer honors reduced-motion preferences and suspends work when hidden
or outside the viewport. Its SVG geometry is updated at up to 24 frames/second.
There is no Three.js, canvas, WebGL, or animation dependency.

## Self-contained SVG

rotating-globe.svg embeds the artwork and the spherical renderer. It animates
when opened directly in a browser or embedded as an SVG document:

```html
<object type="image/svg+xml" data="/assets/rotating-globe.svg"
        aria-label="Rotating neon Earth"
        style="display:block; width:100%; max-width:560px; aspect-ratio:1;">
</object>
```

JavaScript must be allowed in the SVG document. An ordinary `<img>` tag disables
SVG scripts and displays the still-image fallback instead. Use the React
component when your site's content security policy prohibits scripted SVGs.

## Preview and production build

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

The preview is at http://127.0.0.1:5174/ . Its page and controls are development
tools; only integrate the globe component on your website. The background is
transparent in both the React component and the standalone SVG.
