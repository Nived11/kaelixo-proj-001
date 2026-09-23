import React from "react";

interface KaelixoLogoProps {
  className?: string;
  size?: number;
}

export default function KaelixoLogo({ className = "w-8 h-8", size }: KaelixoLogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_10px_rgba(255,0,85,0.6)]"
      >
        <defs>
          <linearGradient id="kaelixoGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF2B75" />
            <stop offset="50%" stopColor="#FF0055" />
            <stop offset="100%" stopColor="#D40045" />
          </linearGradient>
          <linearGradient id="facetGrad" x1="13" y1="16" x2="27" y2="16" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF478B" />
            <stop offset="50%" stopColor="#FF0B5F" />
            <stop offset="100%" stopColor="#A80036" />
          </linearGradient>
        </defs>

        {/* Outer Monolith Polygon Wing matching the reference logo */}
        <path
          d="M4 7.2 L28 1.2 V6.8 L10.5 16 L28 25.2 V30.8 L4 24.8 Z"
          fill="url(#kaelixoGrad)"
        />

        {/* Inner Glowing Monolith Facet with dark channel separation */}
        <path
          d="M13.5 16 L27 10.2 V21.8 Z"
          fill="url(#facetGrad)"
          opacity="0.95"
        />

        {/* Specular Edge Highlight on inner chevron groove */}
        <path
          d="M26 3.2 L11.2 16 L26 28.8"
          stroke="#FFA5C8"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
