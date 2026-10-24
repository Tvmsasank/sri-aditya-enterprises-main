import { PhoneCall, MapPin, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1A140F] text-amber-50/80 border-t border-[#A87D4F]/30 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-amber-100 tracking-tight mb-1">
            Sri Aditya Enterprises
          </h3>
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#A87D4F] uppercase">
            ESTD. 1990 • 35+ YEARS OF TRUST IN HYDERABAD
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm mb-6 text-amber-200/80">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Opp. Ganesh Temple, Phase 1, Vanasthalipuram, Hyderabad - 500070
          </span>
          <a
            href="tel:+918019404140"
            className="flex items-center gap-1.5 hover:text-amber-200 transition-colors font-bold"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            +91 8019404140
          </a>
        </div>

        <div className="w-16 h-0.5 bg-[#A87D4F]/30 mx-auto mb-6" />

        <p className="text-xs text-amber-200/60">
          © {new Date().getFullYear()} Sri Aditya Enterprises. Handcrafted for Indian homes with timeless comfort & durability.
        </p>
      </div>
    </footer>
  );
};
