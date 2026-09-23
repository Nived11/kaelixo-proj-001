"use client";

import React, { useId } from 'react';
import { frontMesh, sideMesh, channelMesh, MeshData } from './crystalMesh';

// The reference silhouette is traced in one coordinate system. Editing these
// paths updates the fills, clip boundaries and edge lighting.
export const LOGO_PATHS: Record<string, string> = {
  front: 'M 430,20 L 1260,405 L 700,525 C 641,538 621,595 660,635 L 1260,1068 L 1260,1170 L 380,1080 Z',
  inset: 'M 1260,528 L 960,613 C 928,622 925,659 950,681 L 1260,929 Z',
  side: 'M 430,20 L 115,158 L 85,1008 L 380,1080 Z',
  channel: 'M 1260,405 L 1260,528 L 960,613 C 928,622 925,659 950,681 L 1260,929 L 1260,1068 L 660,635 C 621,595 641,538 700,525 Z',
  ridge: 'M 430,20 L 380,1080',
  groove: 'M 1260,405 L 700,525 C 641,538 621,595 660,635 L 1260,1068',
};

interface CrystalMeshProps {
  data: MeshData;
  kind: string;
  glowId: string;
}

function CrystalMesh({ data, kind, glowId }: CrystalMeshProps) {
  return (
    <g className={`crystal-mesh crystal-mesh--${kind}`}>
      {data.triangles.map((triangle, index) => (
        <polygon
          key={index}
          points={triangle.points}
          fill={triangle.fill}
          fillOpacity={triangle.opacity}
        />
      ))}
      <path d={data.edges} className="mesh-lines" fill="none" />
      {data.nodes.map((node, index) => (
        <g key={index} transform={`translate(${node.x} ${node.y})`}>
          <g
            className={node.bright ? 'mesh-node mesh-node--bright' : 'mesh-node'}
            style={{
              ['--node-delay' as string]: `${-index * 0.731}s`,
              ['--node-duration' as string]: `${3.2 + (index % 5) * 0.61}s`,
            } as React.CSSProperties}
          >
            {node.bright && <circle r={node.radius * 6} fill={`url(#${glowId})`} />}
            <circle r={node.radius} fill={node.bright ? '#FFF5F8' : '#FFACC7'} />
            {node.star && (
              <path
                d="M-7 0 Q-1.2-1.2 0-8.5 Q1.2-1.2 7 0 Q1.2 1.2 0 8.5 Q-1.2 1.2-7 0Z"
                fill="#FFF5F8"
                opacity=".88"
              />
            )}
          </g>
        </g>
      ))}
    </g>
  );
}

export interface AnimatedNeonLogoProps {
  className?: string;
  glow?: boolean;
  animated?: boolean;
  title?: string;
}

/**
 * Pure vector artwork with crystal shader nodes and neon bloom.
 * React useId scopes every definition, allowing multiple independent instances.
 */
export default function AnimatedNeonLogo({
  className = '',
  glow = true,
  animated = true,
  title = 'Neon rose crystal logo with a rounded recessed chevron',
}: AnimatedNeonLogoProps) {
  const instance = useId().replace(/:/g, '');
  const id = (name: string) => `neon-${instance}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      viewBox="0 0 1400 1200"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      className={`animated-neon-logo ${className}`}
      role="img"
      aria-labelledby={id('title')}
      data-glow={glow}
      data-animated={animated}
    >
      <title id={id('title')}>{title}</title>
      <defs>
        <linearGradient id={id('frontGlass')} x1="430" y1="20" x2="1110" y2="1160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF0052" />
          <stop offset=".23" stopColor="#EF004D" />
          <stop offset=".49" stopColor="#AB0037" />
          <stop offset=".72" stopColor="#F5004F" />
          <stop offset="1" stopColor="#FF427F" />
        </linearGradient>
        <linearGradient id={id('sideGlass')} x1="120" y1="480" x2="422" y2="580" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10051e" />
          <stop offset=".47" stopColor="#22051d" />
          <stop offset=".83" stopColor="#650020" />
          <stop offset="1" stopColor="#B6003B" />
        </linearGradient>
        <linearGradient id={id('insetGlass')} x1="985" y1="586" x2="1250" y2="930" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF4A84" />
          <stop offset=".36" stopColor="#EC004C" />
          <stop offset=".7" stopColor="#FF1460" />
          <stop offset="1" stopColor="#FF76A2" />
        </linearGradient>
        <linearGradient id={id('channelGlass')} x1="940" y1="450" x2="1090" y2="990" gradientUnits="userSpaceOnUse">
          <stop stopColor="#400026" />
          <stop offset=".18" stopColor="#160315" />
          <stop offset=".34" stopColor="#30042e" />
          <stop offset=".44" stopColor="#06020d" />
          <stop offset=".77" stopColor="#180418" />
          <stop offset="1" stopColor="#4f002d" />
        </linearGradient>
        <linearGradient id={id('bevelGlass')} x1="780" y1="519" x2="810" y2="659" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B10039" stopOpacity=".14" />
          <stop offset=".52" stopColor="#150012" stopOpacity="0" />
          <stop offset="1" stopColor="#CB3A69" stopOpacity=".46" />
        </linearGradient>
        <linearGradient id={id('iceEdge')} x1="430" y1="40" x2="1130" y2="1180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF9FB" />
          <stop offset=".25" stopColor="#FFB7CE" />
          <stop offset=".45" stopColor="#FFFAFC" />
          <stop offset=".74" stopColor="#FFC1D5" />
          <stop offset="1" stopColor="#FFF7FA" />
        </linearGradient>
        <radialGradient id={id('pinkLight')}>
          <stop stopColor="#FF9CBC" stopOpacity=".85" />
          <stop offset=".3" stopColor="#FF246A" stopOpacity=".42" />
          <stop offset="1" stopColor="#FF0052" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('nodeLight')}>
          <stop stopColor="#fff" stopOpacity=".95" />
          <stop offset=".16" stopColor="#FFE4ED" stopOpacity=".85" />
          <stop offset=".4" stopColor="#FF7DA7" stopOpacity=".32" />
          <stop offset="1" stopColor="#FF4581" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('reflection')}>
          <stop stopColor="#FFD3E1" stopOpacity="0" />
          <stop offset=".38" stopColor="#FFD3E1" stopOpacity="0" />
          <stop offset=".5" stopColor="#FFF3F7" stopOpacity=".34" />
          <stop offset=".57" stopColor="#FFBCD2" stopOpacity=".05" />
          <stop offset="1" stopColor="#FFBCD2" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id('edgeLightWash')}>
          <stop stopColor="#FFF7FB" stopOpacity=".82" />
          <stop offset=".24" stopColor="#FFBCD3" stopOpacity=".58" />
          <stop offset=".65" stopColor="#FF4B85" stopOpacity=".28" />
          <stop offset="1" stopColor="#FF0052" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id('upperReflection')} x1="700" y1="525" x2="1260" y2="405" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF5FA" stopOpacity=".25" />
          <stop offset=".16" stopColor="#FFFFFF" stopOpacity=".96" />
          <stop offset=".63" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFB4CF" stopOpacity=".12" />
        </linearGradient>
        <linearGradient id={id('diagonalReflection')} x1="940" y1="636" x2="1260" y2="929" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity=".85" />
          <stop offset=".35" stopColor="#FFF8FC" />
          <stop offset=".74" stopColor="#FFD5E5" stopOpacity=".8" />
          <stop offset="1" stopColor="#FF8FB5" stopOpacity=".12" />
        </linearGradient>
        {/* Explicit filter regions preserve bloom without blurring face geometry. */}
        {([
          ['neonGlow', 3.2],
          ['softGlow', 7],
          ['strongGlow', 17],
          ['glassGlow', 1.25],
        ] as const).map(([name, blur]) => (
          <filter key={name} id={id(name)} x="-15%" y="-15%" width="130%" height="130%" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation={blur} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        ))}
        <clipPath id={id('frontClip')}>
          <path d={LOGO_PATHS.front} />
          <path d={LOGO_PATHS.inset} />
        </clipPath>
        <clipPath id={id('sideClip')}>
          <path d={LOGO_PATHS.side} />
        </clipPath>
        <clipPath id={id('channelClip')}>
          <path d={LOGO_PATHS.channel} />
        </clipPath>
        {Object.entries(LOGO_PATHS).map(([name, d]) => (
          <path key={name} id={id(`${name}Path`)} d={d} pathLength="1000" />
        ))}
      </defs>

      {/* Inset the reference tracing to leave transparent space for the bloom. */}
      <g id={id('logo')} transform="translate(45 32) scale(.94)">
        <g id={id('back-face')}>
          <path d="M115 158 430 20 1260 405 1260 1170 380 1080 85 1008Z" fill="#160318" />
        </g>
        <g id={id('side-face')}>
          <use href={`#${id('sidePath')}`} fill={url('sideGlass')} />
          <path d="M115 158 270 89 380 1080 85 1008Z" fill="#150826" opacity=".24" />
        </g>
        <g id={id('inner-cutout')}>
          <use href={`#${id('channelPath')}`} fill={url('channelGlass')} />
          <path d="M1260 405 700 525 C641 538 621 595 660 635 L714 672 1260 528Z" fill={url('bevelGlass')} />
          <path d="M714 672 950 681 1260 929 1103 976Z" fill="#08030e" opacity=".7" />
          <path d="M714 672 950 681 1260 929 1103 976Z" fill="none" stroke="#B21648" strokeWidth="1" opacity=".35" />
          <g clipPath={url('channelClip')}>
            <CrystalMesh data={channelMesh} kind="channel" glowId={id('nodeLight')} />
          </g>
        </g>
        <g id={id('front-face')}>
          <use href={`#${id('frontPath')}`} fill={url('frontGlass')} />
          <use href={`#${id('insetPath')}`} fill={url('insetGlass')} />
          <g clipPath={url('frontClip')}>
            <ellipse cx="459" cy="488" rx="320" ry="470" fill={url('pinkLight')} />
            <ellipse cx="1085" cy="1110" rx="570" ry="320" fill={url('pinkLight')} opacity=".75" />
            <ellipse cx="1120" cy="349" rx="390" ry="150" fill={url('pinkLight')} />
          </g>
        </g>
        <g id={id('mesh')}>
          <g clipPath={url('sideClip')}>
            <CrystalMesh data={sideMesh} kind="side" glowId={id('nodeLight')} />
          </g>
          <g clipPath={url('frontClip')}>
            <CrystalMesh data={frontMesh} kind="front" glowId={id('nodeLight')} />
          </g>
        </g>
        {/* A soft light sweep crosses the glass, clipped to the front surfaces. */}
        <g clipPath={url('frontClip')} className="surface-light">
          <g className="surface-reflection">
            <path d="M-360-350 H140 L790 1480 H290Z" fill={url('reflection')} />
          </g>
        </g>
        <g id={id('glow-edges')} fill="none" strokeLinejoin="round" strokeLinecap="round">
          <g className="edge-bloom" stroke="#FF0052" strokeWidth="9" filter={`url(#${id('strongGlow')})`} opacity=".55">
            <use href={`#${id('frontPath')}`} />
            <use href={`#${id('insetPath')}`} />
          </g>
          <g className="edge-bloom" stroke="#FF78A3" strokeWidth="4" filter={url('softGlow')} opacity=".65">
            <use href={`#${id('frontPath')}`} />
            <use href={`#${id('insetPath')}`} />
          </g>
          <use href={`#${id('sidePath')}`} stroke="#D22C61" strokeWidth="1.1" opacity=".75" />
          <path d="M85 1008 150 981" stroke="#FF9BBB" strokeWidth="2" opacity=".7" />
          <g stroke={url('iceEdge')} strokeWidth="2.2" opacity=".8">
            <use href={`#${id('frontPath')}`} />
            <use href={`#${id('insetPath')}`} />
          </g>
          <use href={`#${id('ridgePath')}`} stroke="#FFF6F9" strokeWidth="2.2" opacity=".4" />
          <use href={`#${id('ridgePath')}`} className="edge-bloom" stroke="#FF78A3" strokeWidth="4" opacity=".25" filter={url('neonGlow')} />
          <path d="M437 36 1248 407 M389 1075 1250 1159 M1254 543 1254 912" stroke="#FFD9E5" strokeWidth="1.3" opacity=".8" />
        </g>

        {/* ====== TRAVELING SPARKLES WITH TAIL ====== */}
        <g id={id('traveling-lights')}>
          
          {/* --- FRONT PATH (Big Face) --- */}
          <g>
            {/* Tails synced to 14s */}
            <path d={LOGO_PATHS.front} pathLength="1000" stroke="#FF0052" strokeWidth="12" fill="none" opacity="0.4" strokeDasharray="300 1000" filter={`url(#${id('softGlow')})`}>
              <animate attributeName="stroke-dashoffset" from="1600" to="600" dur="14s" repeatCount="indefinite" />
            </path>
            <path d={LOGO_PATHS.front} pathLength="1000" stroke="#FF78A3" strokeWidth="5" fill="none" opacity="0.8" strokeDasharray="150 1000" filter={`url(#${id('softGlow')})`}>
              <animate attributeName="stroke-dashoffset" from="1300" to="300" dur="14s" repeatCount="indefinite" />
            </path>
            <path d={LOGO_PATHS.front} pathLength="1000" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeDasharray="50 1000">
              <animate attributeName="stroke-dashoffset" from="1100" to="100" dur="14s" repeatCount="indefinite" />
            </path>

            {/* Sparkle on the FRONT (big) face border */}
            <g>
              <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${id('frontPath')}`} />
              </animateMotion>
              {/* Reduced shining to look like a dot */}
              <circle className="edge-bloom" r="35" fill={`url(#${id('nodeLight')})`} opacity="0.7" />
              <circle className="edge-bloom" r="12" fill="#FFD9E9" opacity="0.8" filter={`url(#${id('softGlow')})`} />
              <path d="M0 -16 Q1.5 -2 16 0 Q1.5 2 0 16 Q-1.5 2 -16 0 Q-1.5 -2 0 -16Z" fill="#FFFFFF" />
              <circle r="4" fill="#FFFFFF" />
            </g>
          </g>

          {/* --- INSET PATH (Small Chevron) --- */}
          <g>
            {/* Tails synced to 8s */}
            <path d={LOGO_PATHS.inset} pathLength="1000" stroke="#FF0052" strokeWidth="8" fill="none" opacity="0.4" strokeDasharray="180 1000" filter={`url(#${id('softGlow')})`}>
              <animate attributeName="stroke-dashoffset" from="1360" to="360" dur="8s" repeatCount="indefinite" />
            </path>
            <path d={LOGO_PATHS.inset} pathLength="1000" stroke="#FF78A3" strokeWidth="4" fill="none" opacity="0.8" strokeDasharray="90 1000" filter={`url(#${id('softGlow')})`}>
              <animate attributeName="stroke-dashoffset" from="1180" to="180" dur="8s" repeatCount="indefinite" />
            </path>
            <path d={LOGO_PATHS.inset} pathLength="1000" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeDasharray="30 1000">
              <animate attributeName="stroke-dashoffset" from="1060" to="60" dur="8s" repeatCount="indefinite" />
            </path>

            {/* Sparkle on the INSET (small chevron) border */}
            <g>
              <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                <mpath href={`#${id('insetPath')}`} />
              </animateMotion>
              {/* Scaled down dot for small part */}
              <circle className="edge-bloom" r="25" fill={`url(#${id('nodeLight')})`} opacity="0.7" />
              <circle className="edge-bloom" r="8" fill="#FFD9E9" opacity="0.8" filter={`url(#${id('softGlow')})`} />
              <path d="M0 -12 Q1 -1.5 12 0 Q1 1.5 0 12 Q-1 1.5 -12 0 Q-1 -1.5 0 -12Z" fill="#FFFFFF" />
              <circle r="3" fill="#FFFFFF" />
            </g>
          </g>

        </g>
      </g>
    </svg>
  );
}
