import React, { useEffect, useState } from "react";
import livingRoom from "@/assets/living-room.jpg";
import bedroom from "@/assets/bed-room.jpg";
import dining from "@/assets/dining-table.jpg";
import sofas from "@/assets/sofas.jpg";
import mattress from "@/assets/sleepwell-mattress.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import sofaBed from "@/assets/sofa-cum-bed.jpg";
import storage from "@/assets/storage-solutions.jpg";
import furnishings from "@/assets/furnishings.jpg";
import chairs from "@/assets/plastic-chairs.jpg";
import lockers from "@/assets/godrej-lockers.jpg";
import miscellaneous from "@/assets/miscellaneous.jpg";

interface FallingTilesFlightProps {
  isActive: boolean;
  onComplete?: () => void;
}

const TILES = [
  { img: livingRoom, name: "Living Room", startX: -60, endX: -140, rot: -24, delay: 0 },
  { img: bedroom, name: "Bedroom Sets", startX: 40, endX: 110, rot: 28, delay: 0.08 },
  { img: dining, name: "Dining Tables", startX: -30, endX: -80, rot: -18, delay: 0.16 },
  { img: sofas, name: "Sofa Sets", startX: 60, endX: 160, rot: 32, delay: 0.24 },
  { img: mattress, name: "Sleepwell", startX: -50, endX: -120, rot: -26, delay: 0.32 },
  { img: wardrobe, name: "Wardrobes", startX: 30, endX: 90, rot: 20, delay: 0.40 },
  { img: sofaBed, name: "Sofa - Bed", startX: -20, endX: -60, rot: -16, delay: 0.48 },
  { img: furnishings, name: "Furnishings", startX: 50, endX: 130, rot: 25, delay: 0.56 },
  { img: storage, name: "Storage", startX: -40, endX: -100, rot: -22, delay: 0.64 },
  { img: chairs, name: "Chairs", startX: 45, endX: 115, rot: 29, delay: 0.72 },
  { img: lockers, name: "Lockers", startX: -35, endX: -90, rot: -20, delay: 0.80 },
  { img: miscellaneous, name: "Essentials", startX: 25, endX: 75, rot: 18, delay: 0.88 },
];

export const FallingTilesFlight: React.FC<FallingTilesFlightProps> = ({ isActive, onComplete }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isActive) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onComplete) onComplete();
      }, 2100);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [isActive, onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[999] overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes flightTumbleDown {
          0% {
            opacity: 0;
            transform: translate3d(var(--flight-start-x, 0px), -60px, 0) scale(0.4) rotateX(15deg) rotateZ(0deg);
            filter: blur(2px);
          }
          15% {
            opacity: 1;
            transform: translate3d(calc(var(--flight-start-x, 0px) * 0.8), 120px, 0) scale(0.85) rotateX(45deg) rotateZ(calc(var(--flight-rot, 15deg) * 0.5));
            filter: blur(0);
          }
          55% {
            opacity: 1;
            transform: translate3d(var(--flight-end-x, 0px), 520px, 0) scale(1) rotateX(180deg) rotateZ(var(--flight-rot, 25deg));
          }
          85% {
            opacity: 0.9;
            transform: translate3d(calc(var(--flight-end-x, 0px) * 1.1), 860px, 0) scale(0.95) rotateX(270deg) rotateZ(calc(var(--flight-rot, 25deg) * 1.2));
          }
          100% {
            opacity: 0;
            transform: translate3d(calc(var(--flight-end-x, 0px) * 1.2), 1100px, 0) scale(0.7) rotateX(360deg) rotateZ(var(--flight-rot, 30deg));
          }
        }

        .flying-tile {
          position: absolute;
          left: 50%;
          top: 22%;
          width: 140px;
          height: 100px;
          border-radius: 12px;
          overflow: hidden;
          background: #fffefa;
          border: 2px solid #caa05b;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35), 0 4px 10px rgba(183, 131, 75, 0.4);
          animation: flightTumbleDown 1.5s cubic-bezier(0.25, 0.9, 0.35, 1) forwards;
          will-change: transform, opacity;
        }

        @media (max-width: 640px) {
          .flying-tile {
            width: 110px;
            height: 80px;
            top: 28%;
          }
        }

        @keyframes sparkRain {
          0% { transform: translateY(-30px); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(900px) rotate(180deg); opacity: 0; }
        }
      `}</style>

      {/* 12 In-Flight Tumbling Tiles cascading through the middle of the screen */}
      {TILES.map((tile, idx) => (
        <div
          key={idx}
          className="flying-tile"
          style={
            {
              "--flight-start-x": `${tile.startX}px`,
              "--flight-end-x": `${tile.endX}px`,
              "--flight-rot": `${tile.rot}deg`,
              animationDelay: `${tile.delay}s`,
            } as React.CSSProperties
          }
        >
          <img src={tile.img} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-1.5">
            <span className="text-[9px] font-bold text-white truncate drop-shadow">
              {tile.name}
            </span>
          </div>
        </div>
      ))}

      {/* Floating golden sparkle burst particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={`spark-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${40 + (i % 8) * 3}%`,
            top: `${20 + (i % 4) * 5}%`,
            width: `${3 + (i % 4)}px`,
            height: `${3 + (i % 4)}px`,
            background: i % 2 === 0 ? "#e5cb9b" : "#b7834b",
            boxShadow: "0 0 8px #f5dfbe",
            animation: `sparkRain 1.4s linear forwards`,
            animationDelay: `${(i * 0.05).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
};
