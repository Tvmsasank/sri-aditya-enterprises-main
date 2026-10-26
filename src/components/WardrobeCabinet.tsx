import React from "react";
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

interface WardrobeCabinetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MINI_ITEMS = [
  { img: livingRoom, label: "Living", rot: "-7deg" },
  { img: bedroom, label: "Bedroom", rot: "6deg" },
  { img: dining, label: "Dining", rot: "-5deg" },
  { img: sofas, label: "Sofas", rot: "8deg" },
  { img: mattress, label: "Mattress", rot: "-6deg" },
  { img: wardrobe, label: "Wardrobe", rot: "4deg" },
  { img: sofaBed, label: "Sofa Bed", rot: "-8deg" },
  { img: storage, label: "Storage", rot: "7deg" },
  { img: furnishings, label: "Furnishings", rot: "-4deg" },
  { img: chairs, label: "Chairs", rot: "6deg" },
  { img: lockers, label: "Lockers", rot: "-5deg" },
  { img: miscellaneous, label: "Essentials", rot: "5deg" },
];

export const WardrobeCabinet: React.FC<WardrobeCabinetProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="relative w-full h-[440px] sm:h-[490px] md:h-[520px] flex items-center justify-center select-none" style={{ perspective: "1500px" }}>
      {/* Floating Interactive Callout Pill */}
      <button
        onClick={onToggle}
        aria-label={isOpen ? "Close wardrobe" : "Open wardrobe to explore collections"}
        className={`absolute -top-3 z-30 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl border cursor-pointer ${
          isOpen
            ? "bg-[#344b39] text-[#f3efe3] border-[#263a2b] hover:bg-[#263a2b] scale-102"
            : "bg-[#fffefa] text-[#242820] border-[#b7834b] hover:border-[#344b39] hover:scale-105 animate-bounce-subtle"
        }`}
      >
        <span className="text-sm">{isOpen ? "🔓" : "🗝️"}</span>
        <span>{isOpen ? "Wardrobe Opened • Collections Released" : "For more collections, open this door"}</span>
      </button>

      {/* 3D Wardrobe Cabinet Body */}
      <div
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        aria-expanded={isOpen}
        aria-label="3D Wooden Wardrobe with collections inside. Click to open."
        className="relative w-[92%] sm:w-[410px] md:w-[440px] h-[400px] sm:h-[450px] md:h-[480px] bg-[#2a160d] rounded-xl shadow-2xl transition-transform duration-300 hover:-translate-y-1 group cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 28px 60px -12px rgba(0,0,0,0.45), inset 0 0 40px rgba(0,0,0,0.85)",
        }}
      >
        {/* Top Crown Moulding */}
        <div
          className="absolute -top-3.5 -left-2.5 -right-2.5 h-4.5 rounded-t-lg border-t border-[#8e5837] z-30 shadow-md"
          style={{
            background: "linear-gradient(180deg, #6c4026 0%, #462715 60%, #2e180d 100%)",
          }}
        />

        {/* Outer Wooden Casing Frame */}
        <div className="absolute inset-0 border-[9px] border-[#4a2c19] rounded-xl pointer-events-none z-25 shadow-inner" />

        {/* Bottom Base Skirting */}
        <div
          className="absolute -bottom-4 -left-2 -right-2 h-5 rounded-b-lg z-30 shadow-xl"
          style={{
            background: "linear-gradient(180deg, #351d11 0%, #1f1008 100%)",
          }}
        />

        {/* ================= INSIDE WARDROBE (PACKED WITH COLLECTIONS!) ================= */}
        <div
          className="absolute inset-2 bg-gradient-to-b from-[#1c0f08] via-[#2f190e] to-[#170c06] rounded-lg overflow-hidden flex flex-col justify-between p-3.5 z-5"
          style={{ boxShadow: "inset 0 0 45px rgba(0,0,0,0.92)" }}
        >
          {/* Hanging Rod with Metallic Sheen */}
          <div
            className="absolute top-8 left-3 right-3 h-1.5 rounded-full z-6 shadow"
            style={{
              background: "linear-gradient(180deg, #e5cb9b, #8a6c3f, #3b2b16)",
            }}
          />

          {/* Shelves */}
          <div className="absolute top-[110px] left-2 right-2 h-2 bg-[#4e2e1b] border-t border-[#744527] shadow z-6" />
          <div className="absolute top-[225px] left-2 right-2 h-2 bg-[#4e2e1b] border-t border-[#744527] shadow z-6" />
          <div className="absolute top-[340px] left-2 right-2 h-2 bg-[#4e2e1b] border-t border-[#744527] shadow z-6" />

          {/* Warm Interior Illumination Glow */}
          <div
            className={`absolute inset-0 bg-radial-glow pointer-events-none transition-opacity duration-700 z-7 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: "radial-gradient(circle at 50% 40%, rgba(245, 223, 190, 0.32), transparent 70%)",
            }}
          />

          {/* Mini Packed Clothes / Collection Boxes Stack */}
          <div className="relative z-8 grid grid-cols-3 grid-rows-4 gap-1.5 pt-5 h-full">
            {MINI_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded overflow-hidden bg-[#efe8da] border border-white/20 shadow-md transition-all duration-700"
                style={{
                  transform: isOpen
                    ? `translateZ(40px) translateY(8px) rotate(${item.rot}) scale(1.02)`
                    : "translateZ(0) scale(1)",
                }}
              >
                <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[8px] font-bold text-[#f3efe3] text-center py-0.5 uppercase tracking-tight truncate px-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Brand Stamp */}
          <div className="relative z-8 text-center text-[9px] uppercase tracking-[0.2em] font-semibold text-[#e5c8a5]/60 pb-1">
            Sri Aditya Enterprises • ESTD 1990
          </div>
        </div>

        {/* ================= 3D DOUBLE WOODEN DOORS ================= */}
        <div className="absolute inset-1.5 flex z-20 pointer-events-auto">
          {/* Left Door */}
          <div
            className="relative w-1/2 h-full rounded-l-md transition-transform duration-700 ease-out cursor-pointer"
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              transform: isOpen ? "rotateY(-118deg)" : "rotateY(0deg)",
              background:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(0,0,0,0.04) 2px, transparent 10px), linear-gradient(135deg, #7c4728 0%, #522f1a 45%, #381f10 100%)",
              boxShadow: isOpen
                ? "-14px 10px 30px rgba(0,0,0,0.45)"
                : "inset 0 0 20px rgba(0,0,0,0.65), inset 0 2px 4px rgba(255,255,255,0.15)",
              borderRight: "1.5px solid #23130a",
            }}
          >
            {/* Brass Hinges on Left Outer Edge */}
            <div className="absolute left-1 top-8 w-1.5 h-6 rounded-sm bg-gradient-to-b from-[#caa05b] to-[#705221] shadow" />
            <div className="absolute left-1 bottom-8 w-1.5 h-6 rounded-sm bg-gradient-to-b from-[#caa05b] to-[#705221] shadow" />

            {/* Inset Moldings / Bevel Panels */}
            <div className="absolute left-3 right-3 top-5 h-[160px] sm:h-[180px] rounded border-2 border-[#331d10] bg-gradient-to-br from-black/15 to-white/5 shadow-inner" />
            <div className="absolute left-3 right-3 bottom-5 h-[160px] sm:h-[180px] rounded border-2 border-[#331d10] bg-gradient-to-br from-black/15 to-white/5 shadow-inner" />

            {/* Golden Brass Handle */}
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-18 rounded-full shadow-lg z-25 group-hover:scale-105 transition-transform"
              style={{
                background: "linear-gradient(90deg, #fcedca 0%, #d4a359 40%, #8c6426 100%)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.45), inset 0 1px 2px rgba(255,255,255,0.8)",
              }}
            >
              <div className="absolute top-1.5 -left-0.5 w-3.5 h-1.5 bg-[#8c6426] rounded-xs" />
              <div className="absolute bottom-1.5 -left-0.5 w-3.5 h-1.5 bg-[#8c6426] rounded-xs" />
            </div>
          </div>

          {/* Right Door */}
          <div
            className="relative w-1/2 h-full rounded-r-md transition-transform duration-700 ease-out cursor-pointer"
            style={{
              transformOrigin: "right center",
              transformStyle: "preserve-3d",
              transform: isOpen ? "rotateY(118deg)" : "rotateY(0deg)",
              background:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.015) 0px, rgba(0,0,0,0.04) 2px, transparent 10px), linear-gradient(135deg, #7c4728 0%, #522f1a 45%, #381f10 100%)",
              boxShadow: isOpen
                ? "14px 10px 30px rgba(0,0,0,0.45)"
                : "inset 0 0 20px rgba(0,0,0,0.65), inset 0 2px 4px rgba(255,255,255,0.15)",
              borderLeft: "1.5px solid #6b3e23",
            }}
          >
            {/* Brass Hinges on Right Outer Edge */}
            <div className="absolute right-1 top-8 w-1.5 h-6 rounded-sm bg-gradient-to-b from-[#caa05b] to-[#705221] shadow" />
            <div className="absolute right-1 bottom-8 w-1.5 h-6 rounded-sm bg-gradient-to-b from-[#caa05b] to-[#705221] shadow" />

            {/* Inset Moldings / Bevel Panels */}
            <div className="absolute left-3 right-3 top-5 h-[160px] sm:h-[180px] rounded border-2 border-[#331d10] bg-gradient-to-br from-black/15 to-white/5 shadow-inner" />
            <div className="absolute left-3 right-3 bottom-5 h-[160px] sm:h-[180px] rounded border-2 border-[#331d10] bg-gradient-to-br from-black/15 to-white/5 shadow-inner" />

            {/* Golden Brass Handle */}
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 w-2.5 h-18 rounded-full shadow-lg z-25 group-hover:scale-105 transition-transform"
              style={{
                background: "linear-gradient(90deg, #fcedca 0%, #d4a359 40%, #8c6426 100%)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.45), inset 0 1px 2px rgba(255,255,255,0.8)",
              }}
            >
              <div className="absolute top-1.5 -left-0.5 w-3.5 h-1.5 bg-[#8c6426] rounded-xs" />
              <div className="absolute bottom-1.5 -left-0.5 w-3.5 h-1.5 bg-[#8c6426] rounded-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
