"use client";
import artwork from './ai-artwork.json';

export default function AiArtwork({ mobile, active }: { mobile: boolean; active: boolean }) {
  const art = mobile ? artwork.mobile : artwork.desktop;
  return <svg viewBox={art.viewBox} preserveAspectRatio="xMaxYMid slice" className={`absolute inset-0 w-full h-full ai-artwork ${mobile ? "opacity-90 -translate-y-[5%]" : ""}`} data-active={active} aria-hidden="true">
    <image href={`/images/home/ai-${mobile ? 'mobile' : 'desktop'}-base.webp`} width={art.width} height={art.height} />
    {active && art.paths.map((path, index) => <path key={index} d={path.d} pathLength={1000} fill="none" stroke="#ff45b5" strokeWidth={mobile ? 2.5 : 2} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="58 942" className="ai-circuit" style={{ animationDelay: path.delay }} />)}
  </svg>;
}
