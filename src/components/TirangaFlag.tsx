import React from "react";

export const AshokaChakra: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 14,
}) => {
  const center = size / 2;
  const radius = size * 0.42;
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    const rad = (angle * Math.PI) / 180;
    const x = center + radius * Math.cos(rad);
    const y = center + radius * Math.sin(rad);
    return { x, y };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
      }}
      className={`shrink-0 ${className}`}
      aria-label="Ashoka Chakra"
    >
      {/* Outer Ring */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#000080"
        strokeWidth={Math.max(1, size * 0.06)}
      />
      {/* Inner Hub */}
      <circle cx={center} cy={center} r={Math.max(1, size * 0.1)} fill="#000080" />
      {/* 24 Spokes */}
      {spokes.map((spoke, idx) => (
        <line
          key={idx}
          x1={center}
          y1={center}
          x2={spoke.x}
          y2={spoke.y}
          stroke="#000080"
          strokeWidth={Math.max(0.6, size * 0.04)}
        />
      ))}
    </svg>
  );
};

export const TirangaFlag: React.FC<{
  size?: "sm" | "md" | "lg";
  withPole?: boolean;
  className?: string;
}> = ({ size = "md", withPole = true, className = "" }) => {
  const dimensions = {
    sm: { width: 72, height: 48, poleHeight: 80, chakraSize: 12 },
    md: { width: 105, height: 70, poleHeight: 115, chakraSize: 16 },
    lg: { width: 144, height: 96, poleHeight: 155, chakraSize: 22 },
  }[size];

  const stripeHeight = dimensions.height / 3;

  return (
    <div className={`relative inline-flex items-start select-none ${className}`}>
      {withPole && (
        <div className="relative flex flex-col items-center mr-0.5 z-20 shrink-0">
          {/* Golden Finial */}
          <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-amber-600 via-amber-300 to-amber-100 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
          {/* Pole Shaft */}
          <div
            className="w-1.5 bg-gradient-to-r from-amber-800 via-amber-400 to-amber-700 rounded-sm shadow-md"
            style={{ height: `${dimensions.poleHeight}px` }}
          />
          {/* Base Stand */}
          <div className="w-5 h-1.5 bg-gradient-to-r from-amber-900 via-amber-600 to-amber-900 rounded-full -mt-0.5 shadow-md" />
        </div>
      )}

      {/* Flag Canvas with wave animation */}
      <div
        className="relative overflow-hidden rounded-r-sm shadow-md animate-flag-wave cursor-pointer transition-transform hover:scale-105 border border-black/10"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
        title="National Flag of India (Tiranga)"
      >
        {/* 1. TOP: Saffron / Orange */}
        <div
          className="bg-[#FF9933] w-full relative"
          style={{ height: `${stripeHeight}px` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-white/20" />
        </div>

        {/* 2. MIDDLE: Pure White with Centered Small Ashoka Chakra */}
        <div
          className="bg-[#FFFFFF] w-full flex items-center justify-center relative overflow-hidden"
          style={{ height: `${stripeHeight}px` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-white/20" />
          <AshokaChakra
            size={dimensions.chakraSize}
            className="animate-chakra-spin z-10"
          />
        </div>

        {/* 3. BOTTOM: India Green */}
        <div
          className="bg-[#138808] w-full relative"
          style={{ height: `${stripeHeight}px` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-white/20" />
        </div>

        {/* Realistic Wind Ripple Wave Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-black/10 mix-blend-overlay" />
      </div>
    </div>
  );
};
