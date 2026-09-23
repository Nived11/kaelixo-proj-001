# Neon crystal logo

A React SVG recreation of the supplied crystal reference, recolored to #FF0052. The artwork
is built from editable paths, irregular triangular facets, gradients, clip paths,
and layered SVG glow filters. There are no raster images, canvas, Three.js, or
animation dependencies. This is a vector interpretation, not a pixel-identical
reproduction of the original CGI image.

## Run the preview

In PowerShell, from this directory:

```powershell
npm.cmd install
npm.cmd run dev -- --port 5173
```

Open http://127.0.0.1:5173/ . The app includes dark, clear/checkerboard, and light
backgrounds, glow and animation switches, and a scale slider. The checkerboard
belongs to the preview page only. The logo has a transparent background.

```powershell
npm.cmd run build
```

The app uses a TSX entry point and the requested JSX component filenames.

## Use in another React app

Copy these three files, preserving their relative paths:

- `src/components/AnimatedNeonLogo.jsx`
- `src/components/crystalMesh.js`
- `src/styles/global.css` (only the logo section, above the preview comment)

```jsx
import AnimatedNeonLogo from './components/AnimatedNeonLogo.jsx';
import './styles/global.css';

export default function Brand() {
  return (
    <div style={{ width: '100%', maxWidth: 512, aspectRatio: '7 / 6' }}>
      <AnimatedNeonLogo glow animated title="My brand" />
    </div>
  );
}
```

Props: `glow` and `animated` default to `true`; `className` and an accessible
`title` are optional. Turning animation off pauses all animation at its current
position. The component also honors `prefers-reduced-motion`. React `useId`
scopes every gradient, clip, filter, path and accessible title per instance.

## Edit the artwork

- `LOGO_PATHS` defines the front, left face, inner triangle, curved channel,
  ridge, and groove. The same geometry drives clipping and highlights.
- `crystalMesh.js` stores editable, precomputed irregular Delaunay triangle,
  edge and node coordinates. No triangulation runs in the browser.
- Gradients in the component define glass color and recessed-wall lighting.
- The CSS logo section contains all animation timing and stroke styling.
- Semantic groups use instance-prefixed IDs such as `…-front-face`,
  `…-inner-cutout` and `…-fixed-reflections` to avoid collisions.

Three stationary reflections match the marked reference: a bright point on the
left ridge, an elongated reflection along the upper groove, and a glossy band
along the inner diagonal. White edge cores, soft rose bloom, and clipped surface
light create the glass effect. A soft diagonal light sweep crosses the glass
every five seconds, clipped to the front surfaces. Each marked edge reflection
smoothly brightens and dims in place with its own timing, alongside the faint
mesh nodes and ambient neon glow. There is no moving dot or shooting star. Use
`animated={false}` for an entirely static website logo. The background stays
transparent in either mode.

The preview uses optional Google Fonts with local sans-serif fallbacks. The
logo component itself requires no network resources. Production output is in
`dist/` after building.
