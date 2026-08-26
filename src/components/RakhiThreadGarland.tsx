import React from "react";

interface RakhiThreadGarlandProps {
  className?: string;
}

export const RakhiThreadGarland: React.FC<RakhiThreadGarlandProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none z-30 relative ${className}`}
      aria-hidden="true"
    >
      {/* Tiled Pattern of Red-Gold Rakhi Silk Threads & Golden Beads for 100% Crisp Aspect Ratio */}
      <svg
        className="w-full h-8 sm:h-10 md:h-12 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="garlandRed" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#800020" />
            <stop offset="50%" stopColor="#C9184A" />
            <stop offset="100%" stopColor="#800020" />
          </linearGradient>

          <linearGradient id="garlandGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="50%" stopColor="#F5D061" />
            <stop offset="100%" stopColor="#8A5A00" />
          </linearGradient>

          {/* Pattern Tile: 100px wide */}
          <pattern
            id="rakhiThreadPattern"
            x="0"
            y="0"
            width="100"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            {/* Hanging Thread Loop Arc */}
            <path
              d="M0 4 Q50 36 100 4"
              stroke="url(#garlandRed)"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              d="M0 4 Q50 36 100 4"
              stroke="url(#garlandGold)"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              fill="none"
            />

            {/* Golden Beads on Thread Loop */}
            <circle cx="25" cy="14" r="3.5" fill="url(#garlandGold)" stroke="#664000" strokeWidth="0.4" />
            <circle cx="75" cy="14" r="3.5" fill="url(#garlandGold)" stroke="#664000" strokeWidth="0.4" />

            {/* Mini Central Rakhi Pendant at bottom of loop */}
            <g transform="translate(50, 24)">
              <circle cx="0" cy="0" r="7" fill="#C9184A" stroke="url(#garlandGold)" strokeWidth="1" />
              <circle cx="0" cy="0" r="4" fill="url(#garlandGold)" />
              <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
            </g>

            {/* Main Node Rakhi Medallion at junction */}
            <g transform="translate(0, 4)">
              <circle cx="0" cy="0" r="5" fill="url(#garlandGold)" stroke="#8A5A00" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="3" fill="#C9184A" />
            </g>
          </pattern>
        </defs>

        {/* Top Binding Silk Thread */}
        <line x1="0" y1="4" x2="100%" y2="4" stroke="#DC2626" strokeWidth="2.5" />
        <line x1="0" y1="4" x2="100%" y2="4" stroke="#FDE047" strokeWidth="1" strokeDasharray="4 4" />

        {/* Tiled Rakhi Pattern across 100% screen width */}
        <rect x="0" y="0" width="100%" height="40" fill="url(#rakhiThreadPattern)" />
      </svg>
    </div>
  );
};
