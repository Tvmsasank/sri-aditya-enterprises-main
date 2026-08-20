import React from "react";

interface VaralakshmiKalasamProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  withDiyas?: boolean;
}

export const VaralakshmiKalasam: React.FC<VaralakshmiKalasamProps> = ({
  size = "md",
  className = "",
  withDiyas = true,
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
      aria-label="Goddess Sri Varalakshmi Divine Kalasam with Lotus and Sacred Diyas"
    >
      {/* Divine Golden Halo / Aura Behind Kalasam */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/30 via-yellow-400/40 to-amber-600/30 blur-xl animate-pulse pointer-events-none" />

      {/* Main Divine SVG Artwork */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full drop-shadow-[0_10px_25px_rgba(218,165,32,0.45)] relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Golden Gradients */}
          <linearGradient id="goldPot" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="25%" stopColor="#F5D061" />
            <stop offset="50%" stopColor="#E6A117" />
            <stop offset="75%" stopColor="#B37400" />
            <stop offset="100%" stopColor="#664000" />
          </linearGradient>

          <linearGradient id="goldRim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF7C2" />
            <stop offset="50%" stopColor="#E5B32A" />
            <stop offset="100%" stopColor="#8A5A00" />
          </linearGradient>

          <linearGradient id="coconutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8D5524" />
            <stop offset="40%" stopColor="#5C3317" />
            <stop offset="100%" stopColor="#361C08" />
          </linearGradient>

          <linearGradient id="mangoLeaf1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#48BB78" />
            <stop offset="50%" stopColor="#228B22" />
            <stop offset="100%" stopColor="#14532D" />
          </linearGradient>

          <linearGradient id="mangoLeaf2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#86EFAC" />
            <stop offset="50%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>

          <linearGradient id="lotusPetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFCCD5" />
            <stop offset="40%" stopColor="#FF6B8B" />
            <stop offset="100%" stopColor="#C9184A" />
          </linearGradient>

          <linearGradient id="lotusPetalBack" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF9ebb" />
            <stop offset="100%" stopColor="#8A0829" />
          </linearGradient>

          <linearGradient id="diyaGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE066" />
            <stop offset="60%" stopColor="#D4A017" />
            <stop offset="100%" stopColor="#7A5200" />
          </linearGradient>

          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFF275" />
            <stop offset="70%" stopColor="#FF7700" />
            <stop offset="100%" stopColor="#FF2200" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="divinePrabhavali" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF9D2" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#FF9900" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF9900" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. Divine Radiant Prabhavali (Halo Rings) */}
        <circle cx="200" cy="180" r="140" fill="url(#divinePrabhavali)" />
        <circle
          cx="200"
          cy="180"
          r="120"
          stroke="#FFD700"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.6"
          className="animate-spin [animation-duration:40s]"
        />

        {/* 2. Blooming Sacred Pink Lotus Base (కమలం / తామర పువ్వు) */}
        <g id="lotusBase">
          {/* Back Lotus Petals */}
          <path d="M120 330 C100 290 140 270 170 310 Z" fill="url(#lotusPetalBack)" />
          <path d="M280 330 C300 290 260 270 230 310 Z" fill="url(#lotusPetalBack)" />
          <path d="M150 345 C120 290 170 265 190 320 Z" fill="url(#lotusPetalBack)" />
          <path d="M250 345 C280 290 230 265 210 320 Z" fill="url(#lotusPetalBack)" />

          {/* Front Spread Lotus Petals */}
          <path d="M80 340 C90 300 150 310 180 345 C130 360 90 355 80 340 Z" fill="url(#lotusPetal)" />
          <path d="M320 340 C310 300 250 310 220 345 C270 360 310 355 320 340 Z" fill="url(#lotusPetal)" />
          
          <path d="M125 350 C140 315 185 320 200 355 C160 365 135 360 125 350 Z" fill="url(#lotusPetal)" />
          <path d="M275 350 C260 315 215 320 200 355 C240 365 265 360 275 350 Z" fill="url(#lotusPetal)" />

          {/* Central Main Lotus Petal */}
          <path d="M200 305 C175 330 180 360 200 370 C220 360 225 330 200 305 Z" fill="url(#lotusPetal)" stroke="#FFF" strokeWidth="0.5" />
        </g>

        {/* 3. Sacred Green Mango Leaves (మామిడాకులు) */}
        <g id="mangoLeaves">
          {/* Far Left Leaf */}
          <path d="M200 180 C150 160 100 150 70 180 C100 195 160 195 200 185 Z" fill="url(#mangoLeaf1)" />
          <path d="M200 182 Q120 170 70 180" stroke="#86EFAC" strokeWidth="1" opacity="0.6" />

          {/* Far Right Leaf */}
          <path d="M200 180 C250 160 300 150 330 180 C300 195 240 195 200 185 Z" fill="url(#mangoLeaf2)" />
          <path d="M200 182 Q280 170 330 180" stroke="#86EFAC" strokeWidth="1" opacity="0.6" />

          {/* Mid Left Leaf */}
          <path d="M200 175 C160 135 125 115 105 135 C130 160 175 175 200 180 Z" fill="url(#mangoLeaf2)" />
          <path d="M200 177 Q145 135 105 135" stroke="#BBF7D0" strokeWidth="1" opacity="0.7" />

          {/* Mid Right Leaf */}
          <path d="M200 175 C240 135 275 115 295 135 C270 160 225 175 200 180 Z" fill="url(#mangoLeaf1)" />
          <path d="M200 177 Q255 135 295 135" stroke="#BBF7D0" strokeWidth="1" opacity="0.7" />

          {/* Center Upright Leaf */}
          <path d="M200 175 C185 110 190 70 200 50 C210 70 215 110 200 175 Z" fill="url(#mangoLeaf1)" />
          <path d="M200 175 L200 52" stroke="#DCFCE7" strokeWidth="1" opacity="0.8" />
        </g>

        {/* 4. Sacred Whole Coconut (కొబ్బరికాయ) */}
        <g id="coconut">
          {/* Coconut Body */}
          <ellipse cx="200" cy="135" rx="42" ry="50" fill="url(#coconutGrad)" />
          {/* Fibers / Texture */}
          <path d="M175 110 Q190 140 175 165" stroke="#3E200B" strokeWidth="1.2" opacity="0.7" />
          <path d="M225 110 Q210 140 225 165" stroke="#3E200B" strokeWidth="1.2" opacity="0.7" />
          <path d="M200 95 Q195 135 200 175" stroke="#3E200B" strokeWidth="1.5" opacity="0.5" />

          {/* Sacred Chandan (Sandalwood) Paste Band */}
          <ellipse cx="200" cy="130" rx="26" ry="14" fill="#FDE047" opacity="0.85" />
          
          {/* Auspicious Kumkum Tilakam (కుంకుమ బొట్టు) */}
          <circle cx="200" cy="130" r="7" fill="#DC2626" />
          <circle cx="200" cy="130" r="8.5" stroke="#FEE2E2" strokeWidth="0.8" />
        </g>

        {/* 5. Golden Brass Kalasam Vessel (కలశ పాత్ర) */}
        <g id="kalasamPot">
          {/* Neck / Rim */}
          <ellipse cx="200" cy="180" rx="55" ry="14" fill="url(#goldRim)" stroke="#5E3A00" strokeWidth="1" />
          <ellipse cx="200" cy="177" rx="48" ry="10" fill="#FFE57F" opacity="0.7" />

          {/* Pot Neck Collar */}
          <path d="M152 180 L160 205 Q200 212 240 205 L248 180 Z" fill="url(#goldPot)" stroke="#664000" strokeWidth="1" />

          {/* Main Pot Body */}
          <path
            d="M160 205 C115 225 115 295 155 320 C175 330 225 330 245 320 C285 295 285 225 240 205 Z"
            fill="url(#goldPot)"
            stroke="#5A3800"
            strokeWidth="1.5"
          />

          {/* Sacred Silk Saree Pleat / Red-Gold Cloth Belt around Kalasam */}
          <path
            d="M130 255 Q200 275 270 255 Q265 275 200 290 Q135 275 130 255 Z"
            fill="#B91C1C"
            stroke="#FDE047"
            strokeWidth="1.2"
          />
          {/* Gold Brocade Pattern on Belt */}
          <path d="M145 262 Q200 280 255 262" stroke="#FDE047" strokeWidth="1" strokeDasharray="3 3" />

          {/* Traditional Etched Floral Medallion on Gold Pot */}
          <circle cx="200" cy="240" r="14" fill="none" stroke="#FFF59D" strokeWidth="1.2" />
          <circle cx="200" cy="240" r="6" fill="#DC2626" />
          {/* Lotus Petal Engravings around Medallion */}
          <circle cx="200" cy="240" r="20" stroke="#FFE082" strokeWidth="0.8" strokeDasharray="2 4" />

          {/* Goddess Lakshmi Golden Kasula Haram / Necklace */}
          <path d="M150 215 Q200 245 250 215" stroke="#FFE082" strokeWidth="2.5" />
          <circle cx="165" cy="225" r="3.5" fill="#FFE082" stroke="#854D0E" strokeWidth="0.5" />
          <circle cx="182" cy="233" r="3.5" fill="#FFE082" stroke="#854D0E" strokeWidth="0.5" />
          <circle cx="200" cy="236" r="4.5" fill="#DC2626" stroke="#FFE082" strokeWidth="1" />
          <circle cx="218" cy="233" r="3.5" fill="#FFE082" stroke="#854D0E" strokeWidth="0.5" />
          <circle cx="235" cy="225" r="3.5" fill="#FFE082" stroke="#854D0E" strokeWidth="0.5" />

          {/* Base Rim */}
          <ellipse cx="200" cy="320" rx="45" ry="8" fill="url(#goldRim)" stroke="#4A2F00" strokeWidth="1" />
        </g>

        {/* 6. Dual Flanking Sacred Brass Diyas / Oil Lamps (దీపాలు) */}
        {withDiyas && (
          <g id="diyas">
            {/* Left Brass Diya */}
            <g transform="translate(-15, 40)">
              {/* Diya Base */}
              <path d="M60 280 L75 280 L72 295 L63 295 Z" fill="url(#diyaGold)" stroke="#664000" strokeWidth="0.8" />
              <ellipse cx="67.5" cy="295" rx="14" ry="4" fill="url(#diyaGold)" stroke="#664000" strokeWidth="0.8" />
              {/* Diya Bowl */}
              <path d="M45 270 Q67.5 288 90 270 Q85 282 67.5 282 Q50 282 45 270 Z" fill="url(#diyaGold)" stroke="#664000" strokeWidth="1" />
              <ellipse cx="67.5" cy="270" rx="22.5" ry="5" fill="#B45309" />
              {/* Diya Oil & Flame */}
              <ellipse cx="67.5" cy="270" rx="18" ry="3.5" fill="#FEF08A" opacity="0.6" />
              {/* Flickering Flame Left */}
              <g className="animate-pulse [animation-duration:1.5s]">
                <circle cx="67.5" cy="255" r="18" fill="url(#flameGlow)" />
                <path d="M67.5 242 Q74 258 67.5 268 Q61 258 67.5 242 Z" fill="#FFAA00" />
                <path d="M67.5 248 Q71 258 67.5 266 Q64 258 67.5 248 Z" fill="#FFF" />
              </g>
            </g>

            {/* Right Brass Diya */}
            <g transform="translate(250, 40)">
              {/* Diya Base */}
              <path d="M60 280 L75 280 L72 295 L63 295 Z" fill="url(#diyaGold)" stroke="#664000" strokeWidth="0.8" />
              <ellipse cx="67.5" cy="295" rx="14" ry="4" fill="url(#diyaGold)" stroke="#664000" strokeWidth="0.8" />
              {/* Diya Bowl */}
              <path d="M45 270 Q67.5 288 90 270 Q85 282 67.5 282 Q50 282 45 270 Z" fill="url(#diyaGold)" stroke="#664000" strokeWidth="1" />
              <ellipse cx="67.5" cy="270" rx="22.5" ry="5" fill="#B45309" />
              {/* Diya Oil & Flame */}
              <ellipse cx="67.5" cy="270" rx="18" ry="3.5" fill="#FEF08A" opacity="0.6" />
              {/* Flickering Flame Right */}
              <g className="animate-pulse [animation-duration:1.8s]">
                <circle cx="67.5" cy="255" r="18" fill="url(#flameGlow)" />
                <path d="M67.5 242 Q74 258 67.5 268 Q61 258 67.5 242 Z" fill="#FFAA00" />
                <path d="M67.5 248 Q71 258 67.5 266 Q64 258 67.5 248 Z" fill="#FFF" />
              </g>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};
