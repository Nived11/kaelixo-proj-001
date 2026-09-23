// Spherical texture projection using SVG image patches, without canvas/WebGL.
// The single supplied view is reused on the back hemisphere (mirrored there).
const SVG_NS = 'http://www.w3.org/2000/svg';
const CENTER = 700;
const RADIUS = 522;
const SOURCE_X = 628;
const SOURCE_Y = 638;
// Sample inside the baked atmosphere so its bright rim is not dragged across
// the globe's face as the texture turns. The original rim is composited below.
const SOURCE_RADIUS = 440;
const COLS = 24;
const ROWS = 12;
const TAU = Math.PI * 2;

export interface Vertex {
  x: number;
  y: number;
  longitude: number;
  latitude: number;
  sourceY: number;
}

export interface Patch {
  vertices: Vertex[];
  image: SVGElement;
  polygon: SVGElement;
  group: SVGElement;
  row: number;
  col?: number;
  triangle: number;
  half?: number;
}

export interface SphereOptions {
  imageHref: string;
  id: string;
  duration?: number;
  animated?: boolean;
}

export interface SphereController {
  setPhase: (radians: number) => void;
  setAnimated: (value: boolean) => void;
  setDuration: (value: number) => void;
  destroy: () => void;
}

function element<K extends keyof SVGElementTagNameMap>(
  name: K,
  attributes: Record<string, string | number> = {}
): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, name);
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, String(value)));
  return node;
}

function project(longitude: number, latitude: number): [number, number] {
  return [CENTER + RADIUS * Math.cos(latitude) * Math.sin(longitude), CENTER - RADIUS * Math.sin(latitude)];
}

// A linear mirrored texture repeat keeps texel density finite at every phase.
// The previous sine mapping had zero slope at a quarter-turn, stretching a
// single row of pixels across a broad band of the globe.
function textureCoordinate(angle: number): number {
  const wrapped = ((angle + Math.PI / 2) % TAU + TAU) % TAU;
  return wrapped <= Math.PI ? -1 + 2 * wrapped / Math.PI : 3 - 2 * wrapped / Math.PI;
}

function triangleVertices(row: number, west: number, east: number, triangle: number): Vertex[] {
  const north = -Math.PI / 2 + row * Math.PI / ROWS;
  const south = north + Math.PI / ROWS;
  const vertex = (longitude: number, latitude: number): Vertex => {
    const [x, y] = project(longitude, latitude);
    return { x, y, longitude, latitude, sourceY: SOURCE_X - SOURCE_RADIUS * Math.sin(latitude) };
  };
  return triangle === 0
    ? [vertex(west, north), vertex(east, north), vertex(east, south)]
    : [vertex(west, south), vertex(east, south), vertex(west, north)];
}

function expandedTriangle(vertices: { x: number; y: number }[]): string {
  const [a, b, c] = vertices;
  const direction = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) > 0 ? 1 : -1;
  const normals = vertices.map((point, index) => {
    const next = vertices[(index + 1) % 3];
    const dx = next.x - point.x, dy = next.y - point.y;
    const length = Math.hypot(dx, dy) || 1;
    return { x: direction * dy / length, y: -direction * dx / length };
  });
  return vertices.map((point, index) => {
    const before = normals[(index + 2) % 3], after = normals[index];
    const amount = .8 / Math.max(.002, 1 + before.x * after.x + before.y * after.y);
    return `${(point.x + (before.x + after.x) * amount).toFixed(3)},${(point.y + (before.y + after.y) * amount).toFixed(3)}`;
  }).join(' ');
}

function patchMatrix(patch: Patch, phase: number): string {
  const ratio = SOURCE_RADIUS / RADIUS;
  const [first, second, third] = patch.vertices;
  // Virtual U runs down the screen and V runs across it. Decreasing texture
  // longitude makes surface features roll downward around the horizontal axis.
  const u = (vertex: Vertex) => SOURCE_Y + SOURCE_RADIUS * Math.cos(vertex.latitude) * textureCoordinate(vertex.longitude - phase);
  const u1 = u(first);
  const u2 = u(second);
  const u3 = u(third);
  // The first two vertices share a latitude. Exact affine triangle mapping
  // keeps neighboring patches continuous along their shared edges.
  const delta = u2 - u1;
  const safeDelta = Math.abs(delta) < .002 ? (delta < 0 ? -.002 : .002) : delta;
  const scaleX = (second.x - first.x) / safeDelta;
  const shearX = (third.x - first.x - scaleX * (u3 - u1)) / (third.sourceY - first.sourceY);
  const scaleY = 1 / ratio;
  const translateX = first.x - scaleX * u1 - shearX * first.sourceY;
  const translateY = first.y - scaleY * first.sourceY;
  // Swap the projected and source axes together to keep the artwork upright.
  return `matrix(${scaleY.toFixed(6)} ${shearX.toFixed(6)} 0 ${scaleX.toFixed(6)} ${translateY.toFixed(4)} ${translateX.toFixed(4)})`;
}

/** Mount into an otherwise empty SVG. Returns pause/speed controls and cleanup. */
export function createSphere(
  svg: SVGSVGElement,
  { imageHref, id, duration = 90, animated = true }: SphereOptions
): SphereController {
  const url = (name: string) => `url(#${id}-${name})`;
  const defs = element('defs');
  const texture = element('image', { id: `${id}-texture`, href: imageHref, width: 1254, height: 1254 });
  defs.append(texture);

  const clip = element('clipPath', { id: `${id}-sphere-clip` });
  clip.append(element('circle', { cx: CENTER, cy: CENTER, r: RADIUS }));
  defs.append(clip);

  // Keep the supplied atmosphere and bright rim fixed while the surface rolls.
  const fade = element('radialGradient', { id: `${id}-rim-fade` });
  fade.append(element('stop', { offset: '0', 'stop-color': 'white' }));
  fade.append(element('stop', { offset: '.91', 'stop-color': 'white' }));
  fade.append(element('stop', { offset: '1', 'stop-color': 'black' }));
  defs.append(fade);
  const mask = element('mask', { id: `${id}-surface-mask`, maskUnits: 'userSpaceOnUse', x: 178, y: 178, width: 1044, height: 1044, 'mask-type': 'luminance' });
  mask.append(element('circle', { cx: CENTER, cy: CENTER, r: RADIUS, fill: url('rim-fade') }));
  defs.append(mask);

  const artwork = element('g', { class: 'globe-artwork' });
  artwork.append(element('use', { href: `#${id}-texture`, x: CENTER - SOURCE_X, y: CENTER - SOURCE_Y, class: 'globe-atmosphere' }));
  const surface = element('g', { class: 'globe-surface', 'clip-path': url('sphere-clip'), mask: url('surface-mask') });
  surface.append(element('circle', { cx: CENTER, cy: CENTER, r: RADIUS, fill: '#070717' }));
  const patches: Patch[] = [];
  const foldPatches: Patch[] = [];

  function createPatch(vertices: Vertex[], name: string, details: Partial<Patch>): Patch {
    const clipId = `${id}-patch-${name}`;
    const patchClip = element('clipPath', { id: clipId });
    const polygon = element('polygon', { points: expandedTriangle(vertices.map(vertex => ({ x: vertex.y, y: vertex.x }))) });
    patchClip.append(polygon);
    defs.append(patchClip);
    const group = element('g', { 'clip-path': `url(#${clipId})` });
    const image = element('use', { href: `#${id}-texture`, class: 'globe-patch' });
    const patch = { vertices, image, polygon, group, ...details } as Patch;
    image.setAttribute('transform', patchMatrix(patch, 0));
    group.append(image);
    surface.append(group);
    return patch;
  }

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const west = -Math.PI / 2 + col * Math.PI / COLS;
      const east = west + Math.PI / COLS;
      for (let triangle = 0; triangle < 2; triangle += 1) {
        const vertices = triangleVertices(row, west, east, triangle);
        if (Math.abs(vertices[1].x - vertices[0].x) < .001) continue;
        patches.push(createPatch(vertices, `${row}-${col}-${triangle}`, { row, col, triangle }));
      }
    }
  }

  // Split the single column crossing a moving texture fold into two bands.
  // No triangle may straddle the fold, which would reintroduce a singular map.
  for (let row = 0; row < ROWS; row += 1) {
    for (let half = 0; half < 2; half += 1) {
      for (let triangle = 0; triangle < 2; triangle += 1) {
        if ((row === 0 && triangle === 0) || (row === ROWS - 1 && triangle === 1)) continue;
        const vertices = triangleVertices(row, 0, Math.PI / COLS, triangle);
        foldPatches.push(createPatch(vertices, `fold-${row}-${half}-${triangle}`, { row, half, triangle }));
      }
    }
  }

  artwork.append(surface);
  svg.append(defs, artwork);

  let phase = 0;
  let seconds = duration;
  let playing = animated;
  let visible = true;
  let previousTime: number | null = null;
  let previousPaint = 0;
  let frame = 0;
  let disposed = false;
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  const canRun = () => playing && visible && !document.hidden && !disposed;
  let hiddenColumn = -1;
  const paint = () => {
    const fold = phase % Math.PI - Math.PI / 2;
    const col = Math.min(COLS - 1, Math.floor((fold + Math.PI / 2) * COLS / Math.PI));
    const west = -Math.PI / 2 + col * Math.PI / COLS;
    const east = west + Math.PI / COLS;
    const split = fold - west > 1e-7 && east - fold > 1e-7;
    const nextHidden = split ? col : -1;
    if (nextHidden !== hiddenColumn) {
      patches.forEach(patch => {
        if (patch.col === hiddenColumn) patch.group.removeAttribute('display');
        if (patch.col === nextHidden) patch.group.setAttribute('display', 'none');
      });
      hiddenColumn = nextHidden;
    }
    patches.forEach(patch => {
      if (patch.col !== hiddenColumn) patch.image.setAttribute('transform', patchMatrix(patch, phase));
    });
    foldPatches.forEach(patch => {
      if (!split) { patch.group.setAttribute('display', 'none'); return; }
      patch.group.removeAttribute('display');
      patch.vertices = triangleVertices(patch.row, patch.half === 0 ? west : fold, patch.half === 0 ? fold : east, patch.triangle);
      patch.polygon.setAttribute('points', expandedTriangle(patch.vertices.map(vertex => ({ x: vertex.y, y: vertex.x }))));
      patch.image.setAttribute('transform', patchMatrix(patch, phase));
    });
    svg.setAttribute('data-phase', phase.toFixed(6));
  };

  function tick(time: number) {
    frame = 0;
    if (!canRun()) { previousTime = null; return; }
    if (previousTime !== null) phase = (phase + Math.min(time - previousTime, 100) * TAU / (seconds * 1000)) % TAU;
    previousTime = time;
    if (time - previousPaint >= 1000 / 20) { paint(); previousPaint = time; }
    frame = requestAnimationFrame(tick);
  }

  function sync() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previousTime = null;
    svg.setAttribute('data-motion', canRun() ? 'running' : 'paused');
    if (canRun()) frame = requestAnimationFrame(tick);
  }

  const observer = typeof IntersectionObserver !== 'undefined' ? new IntersectionObserver(entries => {
    visible = Boolean(entries[0]?.isIntersecting);
    sync();
  }) : null;

  observer?.observe(svg);
  reducedMotion?.addEventListener?.('change', sync);
  document.addEventListener('visibilitychange', sync);
  paint();
  sync();

  return {
    setPhase(radians: number) { phase = ((radians % TAU) + TAU) % TAU; paint(); },
    setAnimated(value: boolean) { playing = value; sync(); },
    setDuration(value: number) { seconds = value; },
    destroy() {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      reducedMotion?.removeEventListener?.('change', sync);
      document.removeEventListener('visibilitychange', sync);
      defs.remove();
      artwork.remove();
    },
  };
}
