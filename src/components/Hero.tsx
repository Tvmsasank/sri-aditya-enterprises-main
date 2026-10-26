import React from "react";
import { WardrobeCabinet } from "./WardrobeCabinet";

interface HeroProps {
  isWardrobeOpen: boolean;
  onToggleWardrobe: () => void;
  onScrollTo: (targetId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ isWardrobeOpen, onToggleWardrobe, onScrollTo }) => {
  return (
    <section id="home" className="pt-24 sm:pt-28 lg:pt-30 pb-8 sm:pb-12 bg-[#f6f4ed] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-5 text-left space-y-4 sm:space-y-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#b7834b]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#b7834b]">
                A home, made yours
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#242820] tracking-tight leading-[1.12]">
              Comfort that<br />
              <span className="italic font-normal">feels like home.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm lg:text-base text-[#6d7168] leading-relaxed max-w-md">
              Thoughtful furniture for every room, every gathering, and all the little moments in between. Find your next favourite piece in Hyderabad.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onToggleWardrobe}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#344b39] hover:bg-[#263a2b] text-[#f3efe3] font-bold text-xs tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer"
              >
                <span>{isWardrobeOpen ? "EXPLORE COLLECTIONS 🔓" : "EXPLORE COLLECTIONS 🗝️"}</span>
              </button>
              <button
                onClick={() => onScrollTo("contact")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-transparent border border-[#c7c8bf] hover:border-[#344b39] text-[#344b39] font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <span>VISIT OUR SHOWROOM</span>
              </button>
            </div>

            {/* Trust Note */}
            <div className="pt-2 text-xs text-[#73766d] flex items-center gap-2">
              <span className="font-bold text-[#344b39]">Locally trusted since 1990</span>
              <span>•</span>
              <span>Serving Hyderabad for 36 years</span>
            </div>
          </div>

          {/* Right Column: 3D Wardrobe Cabinet */}
          <div className="lg:col-span-7 w-full flex justify-center">
            <WardrobeCabinet isOpen={isWardrobeOpen} onToggle={onToggleWardrobe} />
          </div>
        </div>
      </div>
    </section>
  );
};
