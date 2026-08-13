import React from "react";

interface TricolorWaveProps {
  className?: string;
  flip?: boolean;
  opacity?: number;
}

export const TricolorWave: React.FC<TricolorWaveProps> = ({
  className = "",
  flip = false,
  opacity = 0.58,
}) => {
  return (
    <div
      className={`pointer-events-none overflow-hidden select-none transition-opacity duration-500 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="w-full animate-wave-flow">
        <svg
          viewBox="0 0 1440 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-auto drop-shadow-md ${
            flip ? "scale-x-[-1]" : ""
          }`}
          preserveAspectRatio="none"
        >
          <defs>
            {/* 1. Saffron / Orange Gradient (TOP) - Rich & Medium Thick */}
            <linearGradient id="topSaffronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9933" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#FF6E00" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFA000" stopOpacity="0.9" />
            </linearGradient>

            {/* 2. White Luminous Gradient (MIDDLE) */}
            <linearGradient id="midWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.95" />
            </linearGradient>

            {/* 3. India Green Gradient (BOTTOM) - Rich & Medium Thick */}
            <linearGradient id="botGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803D" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#0B6E07" stopOpacity="1" />
              <stop offset="100%" stopColor="#16A34A" stopOpacity="0.9" />
            </linearGradient>

            {/* Fine Flow Line Highlight Gradients */}
            <linearGradient id="saffronLineHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB74D" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FF6D00" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF9800" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="greenLineHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#15803D" stopOpacity="1" />
              <stop offset="100%" stopColor="#166534" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* ========================================================= */}
          {/* 1. TOP BAND: SAFFRON / ORANGE WAVE ARC                    */}
          {/* ========================================================= */}
          <path
            d="M0,110 C260,10 480,-30 760,60 C1040,150 1220,240 1440,160 L1440,210 C1220,290 1040,200 760,110 C480,20 260,60 0,160 Z"
            fill="url(#topSaffronGrad)"
          />
          {/* Saffron Glowing Brush Stroke Strands */}
          <path
            d="M0,90 C290,0 510,-20 790,45 C1070,130 1260,220 1440,140"
            stroke="url(#saffronLineHighlight)"
            strokeWidth="5"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M0,75 C310,-15 530,-30 810,35 C1090,115 1280,205 1440,125"
            stroke="#FDBA74"
            strokeWidth="3"
            fill="none"
            opacity="0.7"
          />

          {/* ========================================================= */}
          {/* 2. MIDDLE BAND: PURE WHITE / SILVER LUMINOUS WAVE         */}
          {/* ========================================================= */}
          <path
            d="M0,160 C260,60 480,20 760,110 C1040,200 1220,290 1440,210 L1440,260 C1220,340 1040,250 760,160 C480,70 260,110 0,210 Z"
            fill="url(#midWhiteGrad)"
          />
          {/* White Core Luminous Highlight Line */}
          <path
            d="M0,135 C280,40 500,5 780,85 C1060,165 1240,255 1440,180"
            stroke="#FFFFFF"
            strokeWidth="4"
            fill="none"
            opacity="0.9"
          />

          {/* ========================================================= */}
          {/* 3. BOTTOM BAND: INDIA GREEN WAVE ARC                      */}
          {/* ========================================================= */}
          <path
            d="M0,210 C260,110 480,70 760,160 C1040,250 1220,340 1440,260 L1440,310 C1220,390 1040,300 760,210 C480,120 260,160 0,260 Z"
            fill="url(#botGreenGrad)"
          />
          {/* Green Glowing Brush Stroke Strands */}
          <path
            d="M0,185 C290,90 510,50 790,135 C1070,215 1260,305 1440,230"
            stroke="url(#greenLineHighlight)"
            strokeWidth="5"
            fill="none"
            opacity="0.85"
          />
          <path
            d="M0,205 C310,115 530,75 810,155 C1090,230 1280,320 1440,250"
            stroke="#4ADE80"
            strokeWidth="3"
            fill="none"
            opacity="0.65"
          />
        </svg>
      </div>
    </div>
  );
};
