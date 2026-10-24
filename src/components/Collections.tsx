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
import { ArrowUpRight } from "lucide-react";

const DEFAULT_OWNER_PHONE = "918019404140";

const furnitureItems = [
  {
    name: "Sofa Sets",
    tag: "Living & Lounge",
    image: sofasets,
  },
  {
    name: "BedRoom Furniture",
    tag: "Beds & Nightstands",
    image: bedroomfurniture,
  },
  {
    name: "Sleepwell Mattress",
    tag: "Orthopedic & Foam",
    image: sleepwellmattress,
  },
  {
    name: "Wardrobe",
    tag: "Modular Storage",
    image: wardrobe,
  },
  {
    name: "Living Room",
    tag: "Recliners & TV Units",
    image: livingroom,
  },
  {
    name: "Dining Tables",
    tag: "Solid Teak & Marble",
    image: diningtable,
  },
  {
    name: "Sofa - Bed",
    tag: "Multi-Functional",
    image: sofacumbed,
  },
  {
    name: "Furnishings",
    tag: "Cushions & Curtains",
    image: furnishings,
  },
  {
    name: "Storage Solutions",
    tag: "Cabinets & Drawers",
    image: storagesolution,
  },
  {
    name: "Plastic Chairs",
    tag: "Indoor & Outdoor",
    image: plastichairs,
  },
  {
    name: "Godrej Lockers",
    tag: "Security Safes",
    image: lockers,
  },
  {
    name: "Miscellaneous",
    tag: "Showroom Accessories",
    image: miscellaneous,
  },
];

export const Collections = () => {
  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  const handleItemInquire = (itemName: string) => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const message = `Hello Sri Aditya Enterprises 👋,\n\nI am browsing your website and interested in exploring *${itemName}*.\n\nPlease share available showroom designs, dimensions, and best price!`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="collections" className="relative py-20 sm:py-28 md:py-32 bg-[#F7F4EE] border-t border-[#A87D4F]/15 overflow-hidden">
      {/* 2 Evenly Spaced Flowing Tricolor Waves Across Catalog Rows (Independence Day) */}
      {isIday && (
        <>
          <TricolorWave className="absolute top-[28%] left-0 right-0 w-full" opacity={0.58} />
          <TricolorWave className="absolute top-[64%] left-0 right-0 w-full" flip={true} opacity={0.55} />
        </>
      )}

      {/* Divine Goddess Lakshmi Watermark Accent (Varalakshmi Vratham) */}
      {isVratham && (
        <div className="absolute left-[-6%] md:left-[2%] top-[35%] pointer-events-none opacity-[0.06] select-none">
          <img
            src="/goddess-lakshmi.png"
            alt=""
            className="w-[360px] md:w-[500px] h-auto"
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#A87D4F] mb-2">
            Curated Showroom Portfolio
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#241C15] mb-4">
            Our Handcrafted Collections
          </h2>
          {isRakhi ? (
            <RakhiDivider />
          ) : isVratham ? (
            <DivineDivider />
          ) : isIday ? (
            <div className="w-28 h-1.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-20 h-1 bg-gradient-to-r from-[#A87D4F] to-[#D4AF37] rounded-full mx-auto mb-6" />
          )}
          <p className="text-[#4A3B2C] max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Discover our extensive showroom range designed to elevate every corner of your home with timeless durability, comfort, and elegance.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on phablet, 3 on tablet, 4 on desktop/TV */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {furnitureItems.map((item, index) => (
            <div
              key={item.name}
              onClick={() => handleItemInquire(item.name)}
              className="group relative bg-white/90 rounded-2xl overflow-hidden border border-[#A87D4F]/20 hover:border-[#A87D4F] hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-[#FAF8F5] overflow-hidden p-3 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md text-[10px] font-bold text-[#7D562E] border border-[#A87D4F]/20">
                  {item.tag}
                </span>
              </div>

              {/* Card Footer */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-2 border-t border-[#A87D4F]/10 bg-white">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#241C15] group-hover:text-[#A87D4F] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#7D562E] font-medium">
                    Tap to inquire on WhatsApp
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#A87D4F]/20 flex items-center justify-center text-[#241C15] group-hover:bg-[#241C15] group-hover:text-amber-50 group-hover:rotate-45 transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
