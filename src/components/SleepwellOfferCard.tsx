import React from "react";
import { Sparkles, MessageCircle, ArrowRight, Tag } from "lucide-react";
import posterImg from "@/assets/great-sleepwell-festival.jpg";

const DEFAULT_OWNER_PHONE = "918019404140";

interface SleepwellOfferCardProps {
  className?: string;
}

export const SleepwellOfferCard: React.FC<SleepwellOfferCardProps> = ({ className = "" }) => {
  const handleClaimOffer = () => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const whatsappMessage = `Hello Sri Aditya Enterprises 👋,\n\nI saw the *GREAT SLEEPWELL FESTIVAL OFFER* on your website:\n- Flat 25% Instant Discount 🏷️\n- Win Up to 100% Cashback 🎁\n- Offer Starts 7th Sept 🗓️\n\nPlease send me Sleepwell Mattress models & pricing options!`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0B1E36] via-[#102B4E] to-[#091526] border-2 border-amber-400/70 shadow-[0_15px_40px_rgba(0,102,204,0.45)] text-white p-4 sm:p-6 transition-transform hover:scale-[1.02] ${className}`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

      {/* Top Catchy Badge */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-blue-950 font-black text-xs uppercase shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OFFER STARTS 7TH SEPT</span>
        </div>
        <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-300">
          <Tag className="w-3.5 h-3.5" />
          <span>LIMITED PERIOD OFFER</span>
        </div>
      </div>

      {/* Grid: Poster Image + Offer Copy */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Poster Image */}
        <div className="sm:col-span-5 relative rounded-xl overflow-hidden shadow-2xl border border-white/20 group">
          <img
            src={posterImg}
            alt="Great Sleepwell Festival Offer"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow">
            SPECIAL FESTIVAL
          </div>
        </div>

        {/* Offer Details */}
        <div className="sm:col-span-7 space-y-3 text-left">
          <h3 className="font-heading text-xl sm:text-2xl font-black text-amber-300 leading-tight">
            గ్రేట్ స్లీప్‌వెల్ ఫెస్టివల్ 🛏️✨
          </h3>

          <div className="space-y-1.5">
            <div className="inline-block bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-sm sm:text-base px-3 py-1 rounded-lg shadow-md">
              ముచ్చటగా మొదటి సారి.. ఫ్లాట్ 25% తగ్గింపు!
            </div>
            <p className="text-xs sm:text-sm font-semibold text-amber-200">
              లేదా <span className="text-white font-extrabold underline decoration-amber-400">100% వరకు</span> తగ్గించుకోండి!
            </p>
          </div>

          <p className="text-xs text-blue-100/90 leading-relaxed">
            Upgrade your sleep with India's #1 Sleepwell Mattresses at official showroom festive prices at Sri Aditya Enterprises, Vanasthalipuram!
          </p>

          {/* WhatsApp Claim CTA Button */}
          <button
            onClick={handleClaimOffer}
            className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-sm sm:text-base shadow-xl transition-all hover:scale-105 active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 text-emerald-200 fill-current" />
            <span>ఇప్పుడే కొనండి! (Claim Offer on WhatsApp)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
