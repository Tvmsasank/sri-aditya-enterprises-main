import React from "react";

interface TricolorWaveProps {
  className?: string;
  flip?: boolean;
  opacity?: number;
}

export const TricolorWave: React.FC<TricolorWaveProps> = ({
  className = "",
  flip = false,
  opacity = 0.65,
}) => {
  return (
    <div
      className={`pointer-events-none overflow-hidden select-none transition-opacity duration-500 w-full h-36 sm:h-48 md:h-64 lg:h-72 z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="w-full h-full animate-wave-flow">
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full drop-shadow-md ${
            flip ? "scale-x-[-1]" : ""
          }`}
          preserveAspectRatio="none"
        >
          <defs>
            {/* 1. Saffron / Orange Gradient (TOP) - Rich & Vibrant */}
            <linearGradient id="topSaffronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF9933" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#FF6B00" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFA000" stopOpacity="0.9" />
            </linearGradient>

            {/* 2. White Luminous Gradient (MIDDLE) - Pure & Clear */}
            <linearGradient id="midWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.95" />
            </linearGradient>

            {/* 3. India Green Gradient (BOTTOM) - Deep & Emerald */}
            <linearGradient id="botGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803D" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#0B6E07" stopOpacity="1" />
              <stop offset="100%" stopColor="#16A34A" stopOpacity="0.9" />
            </linearGradient>

            {/* Highlight Line Gradients */}
            <linearGradient id="saffronLineHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB74D" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#FF6D00" stopOpacity="1" />
              <stop offset="100%" stopColor="#FF9800" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="greenLineHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#15803D" stopOpacity="1" />
              <stop offset="100%" stopColor="#166534" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* ========================================================= */}
          {/* 1. TOP BAND: SAFFRON / ORANGE FLOWING WAVE                */}
          {/* ========================================================= */}
          <path
            d="M0,100 C280,0 520,-20 780,70 C1040,160 1240,240 1440,150 L1440,215 C1240,305 1040,225 780,135 C520,45 280,65 0,165 Z"
            fill="url(#topSaffronGrad)"
          />
          {/* Saffron Brush Stroke Highlights */}
          <path
            d="M0,80 C300,-15 540,-35 800,55 C1060,145 1260,225 1440,130"
            stroke="url(#saffronLineHighlight)"
            strokeWidth="6"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M0,60 C320,-25 560,-45 820,45 C1080,130 1280,210 1440,115"
            stroke="#FED7AA"
            strokeWidth="3.5"
            fill="none"
            opacity="0.8"
          />

          {/* ========================================================= */}
          {/* 2. MIDDLE BAND: LUMINOUS PURE WHITE CORE                  */}
          {/* ========================================================= */}
          <path
            d="M0,165 C280,65 520,45 780,135 C1040,225 1240,305 1440,215 L1440,280 C1240,370 1040,290 780,200 C520,110 280,130 0,230 Z"
            fill="url(#midWhiteGrad)"
          />
          {/* Pure White Central Sheen */}
          <path
            d="M0,140 C300,45 540,25 800,115 C1060,205 1260,285 1440,190"
            stroke="#FFFFFF"
            strokeWidth="5"
            fill="none"
            opacity="0.95"
          />

          {/* ========================================================= */}
          {/* 3. BOTTOM BAND: INDIA GREEN FLOWING WAVE                  */}
          {/* ========================================================= */}
          <path
            d="M0,230 C280,130 520,110 780,200 C1040,290 1240,370 1440,280 L1440,345 C1240,435 1040,355 780,265 C520,175 280,195 0,295 Z"
            fill="url(#botGreenGrad)"
          />
          {/* Green Brush Stroke Highlights */}
          <path
            d="M0,205 C300,105 540,85 800,175 C1060,265 1260,345 1440,250"
            stroke="url(#greenLineHighlight)"
            strokeWidth="6"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M0,225 C320,125 560,105 820,195 C1080,280 1280,360 1440,270"
            stroke="#86EFAC"
            strokeWidth="3.5"
            fill="none"
            opacity="0.75"
          />
        </svg>
      </div>
    </div>
  );
};
