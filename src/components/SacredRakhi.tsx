import React from "react";

interface SacredRakhiProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const SacredRakhi: React.FC<SacredRakhiProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeStyles = {
    sm: "w-28 sm:w-36 h-28 sm:h-36",
    md: "w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52",
    lg: "w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72",
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${sizeStyles[size]} ${className}`}
      role="img"
      aria-label="Sacred Kundan & Silk Thread Rakhi"
    >
      {/* Divine Golden Glow Aura Behind Rakhi */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/40 via-red-500/30 to-yellow-400/40 blur-xl animate-pulse pointer-events-none" />

      {/* Main Rakhi Artwork */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-[0_10px_25px_rgba(201,24,74,0.45)] relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold Gradients */}
          <linearGradient id="rakhiGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="30%" stopColor="#F5D061" />
            <stop offset="70%" stopColor="#E6A117" />
            <stop offset="100%" stopColor="#8A5A00" />
          </linearGradient>

          <linearGradient id="rakhiRuby" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4D6D" />
            <stop offset="50%" stopColor="#C9184A" />
            <stop offset="100%" stopColor="#590214" />
          </linearGradient>

          <linearGradient id="threadRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#800020" />
            <stop offset="50%" stopColor="#FF0040" />
            <stop offset="100%" stopColor="#800020" />
          </linearGradient>

          <radialGradient id="kundanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFE066" />
            <stop offset="100%" stopColor="#E6A117" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Left Braid & Silk Threads with Beads */}
        <g id="leftThread">
          {/* Main Red Thread */}
          <path d="M0 200 C60 190 100 210 150 200" stroke="url(#threadRed)" strokeWidth="6" strokeLinecap="round" />
          {/* Secondary Gold Thread */}
          <path d="M0 200 C60 210 100 190 150 200" stroke="url(#rakhiGold)" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />
          
          {/* Thread Tassel */}
          <path d="M0 200 L-20 185 M0 200 L-25 200 M0 200 L-20 215" stroke="#FF4D6D" strokeWidth="2.5" strokeLinecap="round" />

          {/* Golden & Pearl Beads on Left Thread */}
          <circle cx="50" cy="198" r="8" fill="url(#rakhiGold)" stroke="#664000" strokeWidth="0.8" />
          <circle cx="85" cy="202" r="10" fill="url(#rakhiRuby)" stroke="#FFD700" strokeWidth="1.2" />
          <circle cx="120" cy="199" r="8" fill="url(#rakhiGold)" stroke="#664000" strokeWidth="0.8" />
        </g>

        {/* 2. Right Braid & Silk Threads with Beads */}
        <g id="rightThread">
          {/* Main Red Thread */}
          <path d="M250 200 C300 190 340 210 400 200" stroke="url(#threadRed)" strokeWidth="6" strokeLinecap="round" />
          {/* Secondary Gold Thread */}
          <path d="M250 200 C300 210 340 190 400 200" stroke="url(#rakhiGold)" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />

          {/* Thread Tassel */}
          <path d="M400 200 L420 185 M400 200 L425 200 M400 200 L420 215" stroke="#FF4D6D" strokeWidth="2.5" strokeLinecap="round" />

          {/* Golden & Pearl Beads on Right Thread */}
          <circle cx="280" cy="199" r="8" fill="url(#rakhiGold)" stroke="#664000" strokeWidth="0.8" />
          <circle cx="315" cy="202" r="10" fill="url(#rakhiRuby)" stroke="#FFD700" strokeWidth="1.2" />
          <circle cx="350" cy="198" r="8" fill="url(#rakhiGold)" stroke="#664000" strokeWidth="0.8" />
        </g>

        {/* 3. Central Rakhi Medallion */}
        <g id="rakhiMedallion">
          {/* Outer Sunburst Zardosi Petals */}
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 22.5} 200 200)`}>
              <path
                d="M200 130 C190 150 195 165 200 168 C205 165 210 150 200 130 Z"
                fill="url(#rakhiGold)"
                stroke="#8A5A00"
                strokeWidth="0.5"
              />
              <circle cx="200" cy="134" r="3" fill="url(#rakhiRuby)" />
            </g>
          ))}

          {/* Outer Bead Ring */}
          <circle cx="200" cy="200" r="48" fill="url(#rakhiRuby)" stroke="url(#rakhiGold)" strokeWidth="3" />

          {/* Kundan Pearl Ring */}
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 200 200)`}>
              <circle cx="200" cy="162" r="5" fill="#FFFDF0" stroke="#D4A017" strokeWidth="0.8" />
            </g>
          ))}

          {/* Inner Golden Ring */}
          <circle cx="200" cy="200" r="32" fill="url(#rakhiGold)" stroke="#8A5A00" strokeWidth="1" />

          {/* Central Faceted Ruby Gemstone */}
          <circle cx="200" cy="200" r="22" fill="url(#rakhiRuby)" />
          <path d="M185 200 L200 185 L215 200 L200 215 Z" fill="#FF4D6D" opacity="0.6" />
          <circle cx="200" cy="200" r="8" fill="url(#kundanGlow)" />
          <circle cx="196" cy="196" r="3" fill="#FFFFFF" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
};
