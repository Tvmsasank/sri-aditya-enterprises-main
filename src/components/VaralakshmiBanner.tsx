import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { isVaralakshmiVrathamActive } from "@/lib/festive";

export const VaralakshmiBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVaralakshmiVrathamActive() || !isVisible) return null;

  return (
    <aside
      aria-label="Sri Varalakshmi Vratham Festive Announcement"
      className="relative z-[60] bg-gradient-to-r from-[#590214] via-[#850D23] via-[#B8860B] to-[#590214] text-amber-100 shadow-lg transition-all duration-300 border-b border-amber-400/30"
    >
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
        {/* Left Sacred Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-amber-200 border border-amber-400/40 shrink-0 shadow-inner">
          <span className="text-base animate-bounce [animation-duration:2.5s]">🪔</span>
          <span className="tracking-wide text-[11px] font-bold text-amber-100">
            శ్రీ వరలక్ష్మీ వ్రతం 2026
          </span>
        </div>

        {/* Center Main Divine Greeting Text */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-center mx-auto tracking-wide flex-1 px-1">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 animate-pulse hidden xs:inline shrink-0" />
          <p className="font-medium text-amber-50 text-xs sm:text-sm leading-snug">
            <span className="font-extrabold text-amber-200 drop-shadow-sm mr-1">
              శ్రీ వరలక్ష్మీ వ్రత శుభాకాంక్షలు! 🪔
            </span>
            <span className="hidden md:inline font-normal text-amber-100/90">
              May Goddess Sri Varalakshmi Devi shower your home with eternal health, wealth & prosperity.
            </span>
          </p>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 animate-pulse hidden xs:inline shrink-0" />
        </div>

        {/* Right Action / Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 rounded-full hover:bg-white/10 text-amber-200 hover:text-white transition-colors shrink-0"
          aria-label="Dismiss Varalakshmi Vratham Banner"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
};
