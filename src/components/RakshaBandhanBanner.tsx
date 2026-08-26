import { useState } from "react";
import { Sparkles, X } from "lucide-react";
import { isRakshaBandhanActive } from "@/lib/festive";

const TiedRakhiIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block shrink-0 drop-shadow-sm"
  >
    <path d="M2 12H7" stroke="#FFD700" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M17 12H22" stroke="#FFD700" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="5.5" fill="#C9184A" stroke="#FFD700" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2.8" fill="#FFD700" />
    <circle cx="12" cy="12" r="1.2" fill="#FFFFFF" />
  </svg>
);

export const RakshaBandhanBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isRakshaBandhanActive() || !isVisible) return null;

  return (
    <aside
      aria-label="Raksha Bandhan Festive Announcement"
      className="relative z-[60] bg-gradient-to-r from-[#590214] via-[#990024] via-[#C9184A] via-[#B8860B] to-[#590214] text-amber-100 shadow-lg transition-all duration-300 border-b border-amber-400/40"
    >
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
        {/* Left Festive Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-amber-200 border border-amber-300/50 shrink-0 shadow-inner">
          <TiedRakhiIcon size={16} />
          <span className="tracking-wide text-[11px] font-bold text-amber-100 uppercase">
            రక్షాబంధన్ మహోత్సవం 2026
          </span>
        </div>

        {/* Center Main Festive Greeting Text */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-center mx-auto tracking-wide flex-1 px-1">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 animate-pulse hidden xs:inline shrink-0" />
          <p className="font-medium text-amber-50 text-xs sm:text-sm leading-snug">
            <span className="font-extrabold text-amber-200 drop-shadow-sm mr-1">
              హ్యాపీ రక్షా బంధన్! ✨
            </span>
            <span className="hidden md:inline font-normal text-amber-100/90">
              Celebrating the sacred bond of love, protection, and joy. SAE Wishes you Happy Raksha Bandhan!
            </span>
          </p>
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 animate-pulse hidden xs:inline shrink-0" />
        </div>

        {/* Right Action / Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 rounded-full hover:bg-white/10 text-amber-200 hover:text-white transition-colors shrink-0"
          aria-label="Dismiss Raksha Bandhan Banner"
        >
          <X size={15} />
        </button>
      </div>
    </aside>
  );
};
