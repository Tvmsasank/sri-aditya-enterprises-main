import React, { useState } from "react";
import { Sparkles, X, Gift } from "lucide-react";
import { isSleepwellFestivalActive } from "@/lib/festive";
import posterImg from "@/assets/great-sleepwell-festival.jpg";

const DEFAULT_OWNER_PHONE = "918019404140";

export const SleepwellFloatingBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (!isSleepwellFestivalActive() || isDismissed) return null;

  const handleWhatsApp = () => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const whatsappMessage = `Hello Sri Aditya Enterprises 👋,\n\nI want to claim the *GREAT SLEEPWELL FESTIVAL OFFER* (Flat 25% OFF / 100% Cashback) starting 7th Sept!\n\nPlease share Sleepwell Mattress models & prices.`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Floating Offer Pill (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 animate-bounce [animation-duration:3s]">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-red-600 via-amber-500 to-blue-900 text-white font-extrabold text-xs sm:text-sm shadow-[0_10px_30px_rgba(239,68,68,0.5)] border-2 border-amber-300 hover:scale-105 transition-transform"
        >
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-red-600 shadow shrink-0">
            <Gift className="w-4 h-4" />
          </div>
          <span className="tracking-wide">
            🔥 Great Sleepwell Festival: <span className="text-amber-200">FLAT 25% OFF!</span>
          </span>
          <span className="px-2 py-0.5 rounded-md bg-amber-400 text-blue-950 font-black text-[10px] hidden sm:inline">
            STARTS 7TH SEPT
          </span>
        </button>
      </div>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-gradient-to-b from-[#091B33] via-[#0E2A4F] to-[#071326] border-2 border-amber-400 rounded-3xl p-5 sm:p-6 text-white shadow-2xl text-center">
            {/* Close Modal Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close offer modal"
            >
              <X size={18} />
            </button>

            {/* Poster Image */}
            <div className="relative rounded-2xl overflow-hidden mb-4 shadow-xl border border-white/20">
              <img
                src={posterImg}
                alt="Great Sleepwell Festival Offer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded shadow">
                STARTS 7TH SEPT
              </div>
            </div>

            {/* Offer Copy */}
            <h3 className="font-heading text-2xl font-black text-amber-300 mb-2">
              గ్రేట్ స్లీప్‌వెల్ ఫెస్టివల్ 🛏️✨
            </h3>
            <p className="text-sm font-bold text-amber-200 mb-1">
              ముచ్చటగా మొదటి సారి.. ఫ్లాట్ 25% తగ్గింపు లేదా 100% వరకు తగ్గించుకోండి!
            </p>
            <p className="text-xs text-blue-200 mb-5">
              Sri Aditya Enterprises – Near Ganesh Temple, Vanasthalipuram, Hyderabad.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm shadow-xl transition-transform hover:scale-105 active:scale-95"
              >
                💬 ఇప్పుడే కొనండి! (Claim Offer on WhatsApp)
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsDismissed(true);
                }}
                className="text-xs text-blue-300 hover:text-white transition-colors"
              >
                Dismiss Offer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
