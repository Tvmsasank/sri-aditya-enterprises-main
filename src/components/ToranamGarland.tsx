import React from "react";

interface ToranamGarlandProps {
  className?: string;
}

export const ToranamGarland: React.FC<ToranamGarlandProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none z-30 relative ${className}`}
      aria-hidden="true"
    >
      {/* Traditional South Indian Mango Leaf & Marigold Toranam - Tiled Pattern for 100% Crisp Aspect Ratio on Mobile & Desktop */}
      <svg
        className="w-full h-10 sm:h-12 md:h-14 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Leaf & Flower Gradients */}
          <linearGradient id="mangoLeafGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="60%" stopColor="#1B5E20" />
            <stop offset="100%" stopColor="#0E3813" />
          </linearGradient>

          <linearGradient id="mangoLeafLight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4CAF50" />
            <stop offset="50%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>

          <radialGradient id="marigoldYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="60%" stopColor="#FBC02D" />
            <stop offset="100%" stopColor="#F57F17" />
          </radialGradient>

          <radialGradient id="marigoldOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFB74D" />
            <stop offset="60%" stopColor="#FB8C00" />
            <stop offset="100%" stopColor="#E65100" />
          </radialGradient>

          {/* Pattern Tile: 90px wide, perfect open fan-shaped leaves */}
          <pattern
            id="toranamPattern"
            x="0"
            y="0"
            width="90"
            height="46"
            patternUnits="userSpaceOnUse"
          >
            <g transform="translate(0, 4)">
              {/* Left Spread Mango Leaf (Open Fan) */}
              <path
                d="M32 0 C18 14 10 28 28 38 C34 26 38 12 36 0 Z"
                fill="url(#mangoLeafLight)"
                stroke="#1B5E20"
                strokeWidth="0.5"
              />
              <path d="M33 0 Q22 20 28 38" stroke="#A5D6A7" strokeWidth="0.6" opacity="0.7" />

              {/* Right Spread Mango Leaf (Open Fan) */}
              <path
                d="M58 0 C72 14 80 28 62 38 C56 26 52 12 54 0 Z"
                fill="url(#mangoLeafLight)"
                stroke="#1B5E20"
                strokeWidth="0.5"
              />
              <path d="M57 0 Q68 20 62 38" stroke="#A5D6A7" strokeWidth="0.6" opacity="0.7" />

              {/* Center Long Pointed Mango Leaf */}
              <path
                d="M45 0 C35 15 30 30 45 44 C60 30 55 15 45 0 Z"
                fill="url(#mangoLeafGrad)"
                stroke="#0E3813"
                strokeWidth="0.5"
              />
              <path d="M45 0 L45 42" stroke="#81C784" strokeWidth="0.8" opacity="0.8" />

              {/* Marigold Flower Ball at the Node */}
              <circle
                cx="45"
                cy="4"
                r="7"
                fill="url(#marigoldOrange)"
                stroke="#8A3B00"
                strokeWidth="0.4"
              />
              <circle
                cx="45"
                cy="4"
                r="4.5"
                fill="url(#marigoldYellow)"
              />
              <circle cx="45" cy="4" r="2" fill="#FFFFFF" opacity="0.8" />

              {/* Fragrant White Jasmine Bud at Leaf Tip */}
              <circle cx="45" cy="41" r="2.2" fill="#FFFDF0" stroke="#E2E8F0" strokeWidth="0.3" />
            </g>
          </pattern>
        </defs>

        {/* Sacred Red & Gold Binding Thread */}
        <line x1="0" y1="4" x2="100%" y2="4" stroke="#DC2626" strokeWidth="2.5" />
        <line x1="0" y1="4" x2="100%" y2="4" stroke="#FDE047" strokeWidth="1" strokeDasharray="4 4" />

        {/* Seamless Tiled Pattern across 100% width */}
        <rect x="0" y="0" width="100%" height="46" fill="url(#toranamPattern)" />
      </svg>
    </div>
  );
};
