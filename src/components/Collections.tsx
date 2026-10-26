import React from "react";
import sofasets from "@/assets/sofas.jpg";
import plastichairs from "@/assets/plastic-chairs.jpg";
import bedroomfurniture from "@/assets/bed-room.jpg";
import livingroom from "@/assets/living-room.jpg";
import sleepwellmattress from "@/assets/sleepwell-mattress.jpg";
import sofacumbed from "@/assets/sofa-cum-bed.jpg";
import furnishings from "@/assets/furnishings.jpg";
import diningtable from "@/assets/dining-table.jpg";
import lockers from "@/assets/godrej-lockers.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import storagesolution from "@/assets/storage-solutions.jpg";
import miscellaneous from "@/assets/miscellaneous.jpg";
import { TricolorWave } from "./TricolorWave";
import {
  isIndependenceDayActive,
  isVaralakshmiVrathamActive,
  isRakshaBandhanActive,
} from "@/lib/festive";
import { DivineDivider } from "./DivineDivider";
import { RakhiDivider } from "./RakhiDivider";
import "./Wardrobe.css";

const DEFAULT_OWNER_PHONE = "918019404140";

interface CollectionsProps {
  isOpen: boolean;
  onClose?: () => void;
}

const furnitureItems = [
  {
    num: "01",
    tag: "Gather",
    name: "Living Room",
    image: livingroom,
    rot: "-9deg",
    x: "-25px",
  },
  {
    num: "02",
    tag: "Unwind",
    name: "Bedroom",
    image: bedroomfurniture,
    rot: "8deg",
    x: "20px",
  },
  {
    num: "03",
    tag: "Come together",
    name: "Dining",
    image: diningtable,
    rot: "-6deg",
    x: "-15px",
  },
  {
    num: "04",
    tag: "Rest Well",
    name: "Sleepwell Mattress",
    image: sleepwellmattress,
    rot: "11deg",
    x: "30px",
  },
  {
    num: "05",
    tag: "Lounge",
    name: "Sofa Sets",
    image: sofasets,
    rot: "-10deg",
    x: "-28px",
  },
  {
    num: "06",
    tag: "Make room",
    name: "Storage & Wardrobe",
    image: wardrobe,
    rot: "7deg",
    x: "18px",
  },
  {
    num: "07",
    tag: "Versatile",
    name: "Sofa - Bed",
    image: sofacumbed,
    rot: "-8deg",
    x: "-20px",
  },
  {
    num: "08",
    tag: "Finishing touch",
    name: "Furnishings",
    image: furnishings,
    rot: "9deg",
    x: "24px",
  },
  {
    num: "09",
    tag: "Organize",
    name: "Storage Solutions",
    image: storagesolution,
    rot: "-7deg",
    x: "-16px",
  },
  {
    num: "10",
    tag: "Seating",
    name: "Plastic Chairs",
    image: plastichairs,
    rot: "10deg",
    x: "22px",
  },
  {
    num: "11",
    tag: "Security",
    name: "Godrej Lockers",
    image: lockers,
    rot: "-9deg",
    x: "-26px",
  },
  {
    num: "12",
    tag: "Accessories",
    name: "Showroom Essentials",
    image: miscellaneous,
    rot: "6deg",
    x: "15px",
  },
];

export const Collections: React.FC<CollectionsProps> = ({ isOpen, onClose }) => {
  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  // If wardrobe is closed, do not render this section (Our Story sits directly below TrustRow)
  if (!isOpen) {
    return null;
  }

  const handleItemInquire = (itemName: string) => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const message = `Hello Sri Aditya Enterprises 👋,\n\nI am browsing your website collections and would like to inquire about *${itemName}*.\n\nPlease share available showroom designs and pricing!`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="collections"
      className="relative py-16 sm:py-24 bg-[#fffefa] border-t border-[#e6e4da] animate-fade-in"
    >
      {/* Tricolor Waves for Independence Day */}
      {isIday && (
        <>
          <TricolorWave className="absolute top-[28%] left-0 right-0 w-full" opacity={0.58} />
          <TricolorWave className="absolute top-[64%] left-0 right-0 w-full" flip={true} opacity={0.55} />
        </>
      )}

      {/* Divine Goddess Lakshmi Watermark Accent */}
      {isVratham && (
        <div className="absolute left-[-6%] md:left-[2%] top-[35%] pointer-events-none opacity-[0.06] select-none">
          <img src="/goddess-lakshmi.png" alt="" className="w-[360px] md:w-[500px] h-auto" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b7834b] flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#b7834b]" />
              <span>Find your fit</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#242820] tracking-tight">
              Explore the Collections
            </h2>
            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 bg-[#eef2eb] text-[#344b39] text-xs font-semibold rounded-full border border-[#d4ded0]">
              <span className="w-2 h-2 rounded-full bg-[#344b39] animate-pulse" />
              <span>Wardrobe Released • 12 Collections Unlocked</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-[#6d7168] max-w-sm leading-relaxed">
              From the sofa you gather around to the details that make a room yours—start with the space you're furnishing.
            </p>
            {onClose && (
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#c7c8bf] hover:border-[#344b39] text-[#344b39] hover:bg-[#344b39] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Close & Re-pack Wardrobe 🔒</span>
              </button>
            )}
          </div>
        </div>

        {/* Festive Dividers if active */}
        {isRakhi && <RakhiDivider />}
        {isVratham && <DivineDivider />}

        {/* Category Grid with Cascading Bouncy Tumble Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {furnitureItems.map((item, index) => (
            <div
              key={item.name}
              onClick={() => handleItemInquire(item.name)}
              className="group relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden bg-[#e8e4da] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 card-falling"
              style={
                {
                  "--fall-delay": `${index * 0.07}s`,
                  "--rand-rot": item.rot,
                  "--rand-x": item.x,
                } as React.CSSProperties
              }
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Title & Tag */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 text-white">
                <small className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.16em] text-[#e5c8a5] mb-0.5">
                  {item.num} • {item.tag}
                </small>
                <b className="font-heading text-base sm:text-xl font-medium leading-tight">
                  {item.name}
                </b>
                <span className="block text-[10px] text-white/70 group-hover:text-[#f5dfbe] transition-colors mt-1 font-medium">
                  Inquire on WhatsApp →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
