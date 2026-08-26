import React from "react";

interface RakhiDividerProps {
  className?: string;
}

export const RakhiDivider: React.FC<RakhiDividerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 sm:my-6 ${className}`} aria-hidden="true">
      {/* Left Silk & Gold Line */}
      <div className="h-[2.5px] w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-[#FFD700] to-[#C9184A] rounded-full shadow-[0_0_8px_rgba(255,215,0,0.5)]" />

      {/* Center Ornate Rakhi Medallion */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-7 h-7 rounded-full bg-amber-400/40 blur-md animate-pulse" />
        <svg
          viewBox="0 0 40 40"
          className="w-7 h-7 sm:w-8 sm:h-8 text-amber-500 drop-shadow-[0_2px_8px_rgba(201,24,74,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Petal Ring */}
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 20 20)`}>
              <circle cx="20" cy="8" r="2.5" fill="#FFD700" />
            </g>
          ))}
          {/* Outer Crimson Ring */}
          <circle cx="20" cy="20" r="10" fill="#C9184A" stroke="#FFD700" strokeWidth="1" />
          {/* Inner Golden Core */}
          <circle cx="20" cy="20" r="5" fill="#FFD700" />
          <circle cx="20" cy="20" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Right Silk & Gold Line */}
      <div className="h-[2.5px] w-16 sm:w-24 md:w-32 bg-gradient-to-l from-transparent via-[#FFD700] to-[#C9184A] rounded-full shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
    </div>
  );
};
