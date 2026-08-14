import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { AshokaChakra } from "./TirangaFlag";
import { isIndependenceDayActive } from "@/lib/festive";

export const IndependenceDayBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isIndependenceDayActive() || !isVisible) return null;

  return (
    <aside
      aria-label="Independence Day Celebration Announcement"
      className="relative z-[60] bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] text-slate-900 shadow-md transition-all duration-300"
    >
      <div className="container mx-auto px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
        {/* Left Decorative Badge (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 backdrop-blur-sm text-slate-900 border border-black/10 shrink-0">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
            <AshokaChakra size={16} className="animate-chakra-spin" />
          </div>
          <span className="tracking-wide uppercase text-[11px] font-extrabold">
            80th Independence Day
          </span>
        </div>

        {/* Center Main Celebration Text */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-center mx-auto tracking-wide flex-1 px-1">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 animate-pulse hidden xs:inline shrink-0" />
          <p className="font-medium text-slate-950 text-xs sm:text-sm leading-snug">
            <span className="font-extrabold text-amber-950 mr-1">SAE Wishes you Happy 80th Independence Day!</span>
            <span className="hidden md:inline font-normal text-slate-800">
              Celebrating 30+ Years of Crafting Indian Homes.
            </span>
          </p>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 animate-pulse hidden xs:inline shrink-0" />
        </div>

        {/* Right Action / Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 rounded-full hover:bg-black/10 text-slate-800 transition-colors shrink-0"
          aria-label="Dismiss Independence Day Banner"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
};
