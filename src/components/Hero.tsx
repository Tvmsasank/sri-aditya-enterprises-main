import { useState } from "react";
import { ChevronDown, Sparkles, MessageCircle, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DayNightController } from "./studio/DayNightController";
import { BeforeAfterSlider } from "./studio/BeforeAfterSlider";
import { ProductSpotlightPill } from "./studio/ProductSpotlightPill";
import { isIndependenceDayActive, isVaralakshmiVrathamActive, isRakshaBandhanActive } from "@/lib/festive";

const DEFAULT_OWNER_PHONE = "918019404140";

export const Hero = () => {
  const [isNight, setIsNight] = useState<boolean>(false);
  const isRakhi = isRakshaBandhanActive();
  const isVratham = isVaralakshmiVrathamActive();
  const isIday = isIndependenceDayActive();

  const scrollToCollections = () => {
    const element = document.querySelector("#collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppConsult = () => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const message = `Hello Sri Aditya Enterprises 👋,\n\nI am visiting your website and would like a consultation on living room furniture & custom woodcraft. Please share your current showroom catalog!`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 transition-colors duration-1000 ${
        isNight
          ? "bg-gradient-to-b from-[#140F0B] via-[#1E1712] via-[#241C15] to-[#120D09] text-amber-50"
          : "bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] via-[#EFE7D8] to-[#FAF8F5] text-[#241C15]"
      }`}
    >
      {/* Dynamic Ambient Background Glows */}
      <div
        className={`absolute -top-32 -left-32 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none transition-all duration-1000 ${
          isNight ? "bg-amber-600/15" : "bg-amber-200/40"
        }`}
      />
      <div
        className={`absolute top-1/3 -right-32 w-72 sm:w-96 md:w-[600px] h-72 sm:h-96 md:h-[600px] rounded-full blur-[100px] sm:blur-[140px] pointer-events-none transition-all duration-1000 ${
          isNight ? "bg-yellow-500/10" : "bg-[#A87D4F]/15"
        }`}
      />

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Floating Utility Bar: Trust Badges & Day/Night Controller */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-semibold">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border transition-colors duration-700 ${
                isNight
                  ? "bg-amber-400/10 text-amber-300 border-amber-400/30"
                  : "bg-white/80 text-[#7D562E] border-[#A87D4F]/25 shadow-sm"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ESTD. 1990 — 35+ Years in Hyderabad</span>
            </span>

            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border transition-colors duration-700 ${
                isNight
                  ? "bg-amber-400/10 text-amber-300 border-amber-400/30"
                  : "bg-white/80 text-[#7D562E] border-[#A87D4F]/25 shadow-sm"
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.9 ★ (1,517+ Google Reviews)</span>
            </span>

            <span
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border transition-colors duration-700 ${
                isNight
                  ? "bg-amber-400/10 text-amber-300 border-amber-400/30"
                  : "bg-white/80 text-[#7D562E] border-[#A87D4F]/25 shadow-sm"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Vanasthalipuram Showroom</span>
            </span>
          </div>

          {/* Interactive Day/Night Ambiance Controller */}
          <div className="shrink-0">
            <DayNightController
              isNight={isNight}
              onToggle={() => setIsNight((prev) => !prev)}
            />
          </div>
        </div>

        {/* Editorial Heading Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <p
            className={`text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] uppercase mb-2 sm:mb-3 transition-colors duration-700 ${
              isNight ? "text-amber-400" : "text-[#A87D4F]"
            }`}
          >
            Interactive Living Room Studio
          </p>

          <h1
            className={`font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6 transition-colors duration-700 ${
              isNight ? "text-amber-100" : "text-[#241C15]"
            }`}
          >
            Experience Artful Living.
            <br />
            <span
              className={`bg-clip-text text-transparent bg-gradient-to-r ${
                isNight
                  ? "from-amber-200 via-yellow-300 to-amber-400"
                  : "from-[#8C6239] via-[#A87D4F] to-[#5C3D1E]"
              }`}
            >
              Curated Sanctuaries.
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-700 px-2 ${
              isNight ? "text-amber-200/80" : "text-[#4A3B2C]"
            }`}
          >
            Handcrafted furniture tailored for Hyderabad homes. Drag the interactive room slider below to witness how Sri Aditya Enterprises transforms an empty room into a warm, luxurious living sanctuary.
          </p>
        </div>

        {/* Interactive Before / After Split-View Showcase */}
        <div className="mb-8 sm:mb-10">
          <BeforeAfterSlider isNight={isNight} />
        </div>

        {/* Featured Product Spotlight Cards */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center justify-between gap-2 mb-3 px-1">
            <h3
              className={`font-heading font-bold text-base sm:text-lg transition-colors duration-700 ${
                isNight ? "text-amber-200" : "text-[#241C15]"
              }`}
            >
              Featured in this Room Setup:
            </h3>
            <span
              className={`text-xs font-semibold ${
                isNight ? "text-amber-400/80" : "text-[#A87D4F]"
              }`}
            >
              Click any piece to customize
            </span>
          </div>

          <ProductSpotlightPill isNight={isNight} />
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <Button
            onClick={scrollToCollections}
            size="lg"
            className={`w-full sm:w-auto font-bold px-8 py-6 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-base ${
              isNight
                ? "bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black shadow-[0_0_25px_rgba(245,158,11,0.4)]"
                : "bg-gradient-to-r from-[#241C15] to-[#3B2C21] hover:from-[#181410] hover:to-[#241C15] text-amber-50 shadow-[0_10px_25px_rgba(36,28,21,0.25)]"
            }`}
          >
            <span>Explore All Collections 🛋️</span>
          </Button>

          <Button
            onClick={handleWhatsAppConsult}
            size="lg"
            variant="outline"
            className={`w-full sm:w-auto font-bold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 text-base border-2 ${
              isNight
                ? "border-amber-400/40 text-amber-200 hover:bg-amber-400/10 hover:text-white"
                : "border-[#A87D4F]/40 text-[#4A3B2C] hover:bg-[#A87D4F]/10 hover:text-[#241C15]"
            }`}
          >
            <MessageCircle className="w-5 h-5 mr-2 text-emerald-500 fill-current" />
            <span>Consult on WhatsApp</span>
          </Button>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={scrollToCollections}
          className={`transition-colors animate-bounce p-2 ${
            isNight ? "text-amber-300/70 hover:text-amber-200" : "text-[#7D562E] hover:text-[#241C15]"
          }`}
          aria-label="Scroll to collections"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};
