import React from "react";
import { WardrobeCabinet } from "./WardrobeCabinet";

interface HeroProps {
  isWardrobeOpen: boolean;
  onToggleWardrobe: () => void;
  onScrollTo: (targetId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ isWardrobeOpen, onToggleWardrobe, onScrollTo }) => {
  return (
    <section id="home" className="pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12 bg-[#f7f8f5] overflow-visible transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-5 text-left space-y-3.5 sm:space-y-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c99f52]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#c99f52]">
                A home, made yours
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#142019] tracking-tight leading-[1.14]">
              Comfort that<br />
              <span className="italic font-normal text-[#c99f52]">feels like home.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-xs sm:text-sm lg:text-base text-[#54665c] leading-relaxed max-w-md">
              Thoughtful furniture for every room, every gathering, and all the little moments in between. Find your next favourite piece in Hyderabad.
            </p>

            {/* Buttons: Side-by-side horizontally on mobile, preserving compact space */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 pt-1 sm:pt-2 w-full max-w-md">
              {/* Desktop Toggle Button */}
              <button
                onClick={onToggleWardrobe}
                className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1e3b2b] hover:bg-[#294f3a] text-[#faeed4] font-bold text-xs tracking-wider uppercase transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer whitespace-nowrap"
              >
                <span>{isWardrobeOpen ? "EXPLORE COLLECTIONS 🔓" : "EXPLORE COLLECTIONS 🗝️"}</span>
              </button>

              {/* Mobile Direct Scroll Button */}
              <button
                onClick={() => onScrollTo("collections")}
                className="md:hidden flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#1e3b2b] text-[#faeed4] font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-md active:scale-95 cursor-pointer text-center"
              >
                <span>EXPLORE COLLECTIONS ↓</span>
              </button>

              {/* Visit Showroom Button */}
              <button
                onClick={() => onScrollTo("contact")}
                className="flex-1 md:flex-initial inline-flex items-center justify-center px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-xl bg-transparent border border-[#c8d1c8] hover:border-[#1e3b2b] text-[#1e3b2b] font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                <span>VISIT OUR SHOWROOM</span>
              </button>
            </div>

            {/* Trust Note */}
            <div className="pt-1 sm:pt-2 text-[11px] sm:text-xs text-[#54665c] flex items-center gap-2">
              <span className="font-bold text-[#1e3b2b]">Locally trusted since 1990</span>
              <span>•</span>
              <span>Serving Hyderabad for 36 years</span>
            </div>
          </div>

          {/* Right Column: 3D Wardrobe Cabinet (Hidden on Mobile screens, visible on Desktop/Tablets) */}
          <div className="hidden md:flex lg:col-span-7 w-full justify-center">
            <WardrobeCabinet isOpen={isWardrobeOpen} onToggle={onToggleWardrobe} />
          </div>
        </div>
      </div>
    </section>
  );
};
