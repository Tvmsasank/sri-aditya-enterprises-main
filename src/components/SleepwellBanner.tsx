import { useState } from "react";
import { Sparkles, X, ShoppingBag } from "lucide-react";
import { isSleepwellFestivalActive } from "@/lib/festive";

const DEFAULT_OWNER_PHONE = "918019404140";

export const SleepwellBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isSleepwellFestivalActive() || !isVisible) return null;

  const handleClaimOffer = () => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const whatsappMessage = `Hello Sri Aditya Enterprises 👋,\n\nI want to claim the *GREAT SLEEPWELL FESTIVAL OFFER* (Flat 25% OFF / Up to 100% Cashback) starting 7th Sept!\n\nPlease share Sleepwell Mattress models & festive price list.`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <aside
      aria-label="Great Sleepwell Festival Announcement"
      className="relative z-[60] bg-gradient-to-r from-[#002244] via-[#004488] via-[#0066CC] via-[#004488] to-[#002244] text-white shadow-xl border-b border-amber-400/40"
    >
      <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
        {/* Left Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-blue-950 font-black shrink-0 shadow-md">
          <Sparkles className="w-3.5 h-3.5 animate-spin" />
          <span className="tracking-wide text-[11px] uppercase">
            GREAT SLEEPWELL FESTIVAL | STARTS 7TH SEPT
          </span>
        </div>

        {/* Center Main Telugu & English Offer Highlight */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-center mx-auto tracking-wide flex-1 px-1">
          <p className="font-medium text-white text-xs sm:text-sm leading-snug">
            <span className="font-extrabold text-amber-300 drop-shadow-md mr-1.5">
              ముచ్చటగా మొదటి సారి.. ఫ్లాట్ 25% తగ్గింపు లేదా 100% వరకు తగ్గించుకోండి! 🛏️✨
            </span>
            <span className="hidden md:inline font-normal text-blue-100">
              (Flat 25% OFF or Win Up to 100% Cashback on Sleepwell Mattresses)
            </span>
          </p>
        </div>

        {/* Right WhatsApp Claim CTA & Dismiss */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleClaimOffer}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>ఇప్పుడే కొనండి!</span>
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full hover:bg-white/10 text-blue-200 hover:text-white transition-colors"
            aria-label="Dismiss Sleepwell Festival Banner"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </aside>
  );
};
