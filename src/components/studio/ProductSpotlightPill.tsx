import React from "react";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

const DEFAULT_OWNER_PHONE = "918019404140";

interface SpotlightItem {
  id: string;
  name: string;
  category: string;
  material: string;
  tag: string;
}

const SPOTLIGHT_ITEMS: SpotlightItem[] = [
  {
    id: "aurora-sofa",
    name: "Aurora Modular Lounge",
    category: "Living Room",
    material: "Cream Linen & Solid Oak",
    tag: "Custom Made",
  },
  {
    id: "terra-table",
    name: "Terra Coffee Table",
    category: "Accent Living",
    material: "Natural Travertine & Oak",
    tag: "Handcrafted",
  },
  {
    id: "elara-chair",
    name: "Elara Bouclé Armchair",
    category: "Accent Seating",
    material: "Textured Bouclé & Teak",
    tag: "Signature Comfort",
  },
];

interface ProductSpotlightPillProps {
  isNight?: boolean;
  className?: string;
}

export const ProductSpotlightPill: React.FC<ProductSpotlightPillProps> = ({
  isNight = false,
  className = "",
}) => {
  const handleInquire = (item: SpotlightItem) => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const message = `Hello Sri Aditya Enterprises 👋,\n\nI am interested in the *${item.name}* (${item.material}) shown in your interactive living room showcase.\n\nPlease share price options, dimensions, and custom fabric availability!`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 ${className}`}>
      {SPOTLIGHT_ITEMS.map((item) => (
        <div
          key={item.id}
          className={`group relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
            isNight
              ? "bg-[#181410]/75 border-amber-500/25 hover:border-amber-400 shadow-[0_8px_25px_rgba(0,0,0,0.4)] text-amber-50"
              : "bg-white/80 border-[#A87D4F]/20 hover:border-[#A87D4F]/50 shadow-[0_8px_25px_rgba(168,125,79,0.12)] text-[#241C15]"
          }`}
        >
          {/* Top Tag & Sparkle */}
          <div className="flex items-center justify-between gap-1 mb-2">
            <span
              className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                isNight
                  ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                  : "bg-[#F2ECE1] text-[#7D562E] border border-[#A87D4F]/20"
              }`}
            >
              {item.tag}
            </span>
            <Sparkles className="w-3 h-3 text-amber-400 opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Product Name */}
          <h4 className="font-heading font-bold text-sm sm:text-base leading-snug mb-1">
            {item.name}
          </h4>

          {/* Material & Details */}
          <p
            className={`text-xs mb-3 font-medium ${
              isNight ? "text-amber-200/70" : "text-[#7D562E]"
            }`}
          >
            {item.material}
          </p>

          {/* Instant WhatsApp Inquiry Button */}
          <button
            onClick={() => handleInquire(item)}
            className={`w-full flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-3 rounded-lg text-xs font-bold transition-all duration-300 group-hover:scale-[1.02] active:scale-95 ${
              isNight
                ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.35)]"
                : "bg-gradient-to-r from-[#241C15] to-[#4A3B2C] hover:from-[#181410] hover:to-[#241C15] text-amber-50 shadow-md"
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Customize / Price</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      ))}
    </div>
  );
};
