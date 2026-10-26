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
import "./Wardrobe.css";

interface WardrobeCabinetProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MINI_ITEMS = [
  { img: livingRoom, label: "Living", rot: "-8deg" },
  { img: bedroom, label: "Bedroom", rot: "6deg" },
  { img: dining, label: "Dining", rot: "-5deg" },
  { img: sofas, label: "Sofas", rot: "10deg" },
  { img: mattress, label: "Mattress", rot: "-7deg" },
  { img: wardrobe, label: "Wardrobes", rot: "4deg" },
  { img: sofaBed, label: "Sofa Bed", rot: "-9deg" },
  { img: storage, label: "Storage", rot: "7deg" },
  { img: furnishings, label: "Furnishings", rot: "-4deg" },
  { img: chairs, label: "Chairs", rot: "8deg" },
  { img: lockers, label: "Lockers", rot: "-6deg" },
  { img: miscellaneous, label: "Essentials", rot: "5deg" },
];

export const WardrobeCabinet: React.FC<WardrobeCabinetProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="wardrobe-stage">
      {/* Floating Interactive Callout Pill */}
      <button
        onClick={onToggle}
        type="button"
        aria-label={isOpen ? "Close wardrobe" : "Open wardrobe to explore collections"}
        className="wardrobe-callout"
      >
        <span className="key-icon">{isOpen ? "🔓" : "🗝️"}</span>
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
        className={`wardrobe-cabinet ${isOpen ? "wardrobe-opened" : ""}`}
      >
        {/* Top Crown Moulding */}
        <div className="wardrobe-crown" />

        {/* Outer Wooden Casing Frame */}
        <div className="wardrobe-frame" />

        {/* Inside Packed Interior (Revealed through crack on hover and fully when open) */}
        <div className="wardrobe-interior">
          <div className="wardrobe-rod" />
          <div className="wardrobe-shelf shelf-top" />
          <div className="wardrobe-shelf shelf-mid" />
          <div className="wardrobe-shelf shelf-bot" />
          <div className="interior-glow" />

          {/* Mini Packed Collection Cards inside (Burst forward & fall down out of wardrobe when opened!) */}
          <div className="interior-packed-preview">
            {MINI_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="mini-packed-card"
                style={{ "--rand-rot": item.rot } as React.CSSProperties}
              >
                <img src={item.img} alt={item.label} />
                <div className="mini-label">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="interior-crest">Sri Aditya Enterprises • Handcrafted Since 1990</div>
        </div>

        {/* 3D Double Wooden Doors (Pure CSS hover crack & swing open) */}
        <div className="doors-wrapper">
          {/* Left Door */}
          <div className="door door-left">
            <div className="hinge hinge-top" />
            <div className="hinge hinge-bot" />
            <div className="door-panel-top" />
            <div className="door-panel-bot" />
            <div className="door-handle" />
          </div>

          {/* Right Door */}
          <div className="door door-right">
            <div className="hinge hinge-top" />
            <div className="hinge hinge-bot" />
            <div className="door-panel-top" />
            <div className="door-panel-bot" />
            <div className="door-handle" />
          </div>
        </div>

        {/* Bottom Base Plinth */}
        <div className="wardrobe-base" />
      </div>
    </div>
  );
};
