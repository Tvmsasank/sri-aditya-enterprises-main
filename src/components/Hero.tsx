import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-furniture.jpg";
import goddessLakshmiImg from "@/assets/goddess-lakshmi.png";
import { TirangaFlag, AshokaChakra } from "./TirangaFlag";
import { isIndependenceDayActive, isVaralakshmiVrathamActive } from "@/lib/festive";

export const Hero = () => {
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  const scrollToCollections = () => {
    const element = document.querySelector("#collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16"
    >
      {/* Background Image with Depth Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
      </div>

      {/* Decorative Rotating Ashoka Chakra Watermark (Independence Day) */}
      {isIday && (
        <div className="absolute right-[-10%] md:right-[-5%] top-[15%] pointer-events-none opacity-10 blur-[0.5px]">
          <AshokaChakra size={420} className="animate-chakra-spin text-white" />
        </div>
      )}



      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Festive Independence Day Tag */}
        {isIday && (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/50 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-2xl animate-fade-in">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
              <AshokaChakra size={16} className="animate-chakra-spin" />
            </div>
            <span className="font-extrabold text-amber-300 tracking-wide">
              80th Independence Day Special
            </span>
          </div>
        )}

        {/* Festive Varalakshmi Vratham Pure Divine Tag */}
        {isVratham && (
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full bg-gradient-to-r from-[#590214]/90 via-[#850D23]/80 to-[#590214]/90 backdrop-blur-md border border-amber-300/70 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-[0_0_25px_rgba(255,215,0,0.5)] animate-fade-in">
            <span className="text-base sm:text-lg animate-bounce [animation-duration:2s]">🪔</span>
            <span className="font-extrabold text-amber-200 tracking-wide">
              శ్రీ వరలక్ష్మీ వ్రత మహోత్సవం 2026
            </span>
            <span className="text-xs text-amber-100/90 hidden sm:inline">| Special Festive Offers ✨</span>
          </div>
        )}

        {/* Brand Heading & Divine Emblem Container */}
        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 mx-auto">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-in tracking-tight leading-tight">
              Welcome to
              <br />
              <span className="text-accent drop-shadow-md">
                Sri Aditya Enterprises
              </span>
            </h1>
          </div>

          {/* Flying Animated Tiranga Flag (Independence Day) */}
          {isIday && (
            <div className="order-1 md:order-2 shrink-0 animate-fade-in [animation-delay:0.1s]">
              <TirangaFlag size="md" className="drop-shadow-2xl" />
            </div>
          )}

          {/* Pure Divine Goddess Sri Varalakshmi Devi Emblem (Varalakshmi Vratham) */}
          {isVratham && (
            <div className="order-1 md:order-2 shrink-0 animate-fade-in [animation-delay:0.1s] relative group">
              {/* Divine Golden Pulsing Aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400/40 via-yellow-300/50 to-amber-500/40 blur-2xl animate-pulse pointer-events-none" />
              <img
                src={goddessLakshmiImg}
                alt="Goddess Sri Varalakshmi Devi"
                className="relative z-10 w-32 sm:w-40 md:w-48 lg:w-56 h-auto drop-shadow-[0_12px_35px_rgba(255,215,0,0.65)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>

        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed animate-fade-in [animation-delay:0.2s] px-2">
          {isVratham
            ? "శ్రీ వరలక్ష్మీ దేవి దివ్య ఆశీస్సులతో మీ గృహాన్ని సుందరమైన ఫర్నిచర్‌తో తీర్చిదిద్దుకోండి. Over three decades of crafting traditional comfort & divine elegance in Hyderabad."
            : isIday
            ? "Celebrating 80 Years of Freedom with over three decades of crafting comfort and elegance for Indian homes in Hyderabad."
            : "Your premier furniture destination in Hyderabad. Celebrating Indian craftsmanship, comfort, and timeless elegance for every home."}
        </p>

        {/* Action Button */}
        <div className="animate-fade-in [animation-delay:0.4s] flex justify-center px-2">
          <Button
            onClick={scrollToCollections}
            size="lg"
            className={`relative group font-semibold px-6 sm:px-8 md:px-10 py-5 sm:py-6 text-sm sm:text-base md:text-lg rounded-xl shadow-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto max-w-md ${
              isVratham
                ? "bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white border border-amber-300/50 shadow-[0_0_25px_rgba(218,165,32,0.5)]"
                : "bg-accent hover:bg-accent/90 text-white"
            }`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap">
              <span>
                {isVratham
                  ? "Explore Varalakshmi Vratham Offers"
                  : isIday
                  ? "Explore 80th Independence Day Offers"
                  : "Explore Collections"}
              </span>
              <span className="text-lg sm:text-xl shrink-0">{isVratham ? "🪔" : "🛋️"}</span>
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToCollections}
          className="text-white/80 hover:text-white transition-colors animate-bounce p-2"
          aria-label="Scroll down to collections"
        >
          <ChevronDown size={26} />
        </button>
      </div>
    </section>
  );
};
