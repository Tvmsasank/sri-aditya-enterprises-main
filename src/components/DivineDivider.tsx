import React from "react";

interface DivineDividerProps {
  className?: string;
}

export const DivineDivider: React.FC<DivineDividerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 sm:my-6 ${className}`} aria-hidden="true">
      {/* Left Golden Tapering Line */}
      <div className="h-[2px] w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-[#E5A93C] to-[#990000] rounded-full shadow-[0_0_8px_rgba(229,169,60,0.5)]" />

      {/* Center Sacred Golden Diya & Lotus Motif */}
      <div className="relative flex items-center justify-center">
        {/* Glow */}
        <div className="absolute w-8 h-8 rounded-full bg-amber-400/30 blur-md animate-pulse" />

        {/* Diya SVG */}
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500 drop-shadow-[0_2px_8px_rgba(218,165,32,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lotus Base Wings */}
          <path d="M12 28 C8 24 12 20 16 26 Z" fill="#C9184A" />
          <path d="M28 28 C32 24 28 20 24 26 Z" fill="#C9184A" />
          <path d="M15 31 C10 26 16 23 19 28 Z" fill="#FF758F" />
          <path d="M25 31 C30 26 24 23 21 28 Z" fill="#FF758F" />

          {/* Diya Base & Bowl */}
          <path d="M16 29 L24 29 L22 33 L18 33 Z" fill="#B45309" />
          <path d="M10 25 Q20 32 30 25 Q28 29 20 29 Q12 29 10 25 Z" fill="#D97706" stroke="#92400E" strokeWidth="0.5" />
          <ellipse cx="20" cy="25" rx="10" ry="2.5" fill="#FDE047" />

          {/* Flickering Flame */}
          <circle cx="20" cy="18" r="6" fill="url(#miniFlame)" className="animate-pulse" />
          <path d="M20 11 Q24 19 20 24 Q16 19 20 11 Z" fill="#EA580C" />
          <path d="M20 14 Q22 19 20 23 Q18 19 20 14 Z" fill="#FEF08A" />

          <defs>
            <radialGradient id="miniFlame" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Right Golden Tapering Line */}
      <div className="h-[2px] w-16 sm:w-24 md:w-32 bg-gradient-to-l from-transparent via-[#E5A93C] to-[#990000] rounded-full shadow-[0_0_8px_rgba(229,169,60,0.5)]" />
    </div>
  );
};
