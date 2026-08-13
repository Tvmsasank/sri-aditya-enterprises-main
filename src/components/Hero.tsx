import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-furniture.jpg";
import { TirangaFlag, AshokaChakra } from "./TirangaFlag";
import { isIndependenceDayActive } from "@/lib/festive";

export const Hero = () => {
  const isFestive = isIndependenceDayActive();

  const scrollToCollections = () => {
    const element = document.querySelector("#collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image with Depth Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
      </div>

      {/* Decorative Rotating Ashoka Chakra Watermark Accent (Only in festive mode) */}
      {isFestive && (
        <div className="absolute right-[-10%] md:right-[-5%] top-[15%] pointer-events-none opacity-10 blur-[0.5px]">
          <AshokaChakra size={420} className="animate-chakra-spin text-white" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Festive Independence Day Tag */}
        {isFestive && (
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/50 text-white text-xs md:text-sm font-medium mb-6 shadow-2xl animate-fade-in">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
              <AshokaChakra size={18} className="animate-chakra-spin" />
            </div>
            <span className="font-extrabold text-amber-300 tracking-wide">
              80th Independence Day Special
            </span>
            <span className="hidden sm:inline text-white/70">•</span>
            <span className="hidden sm:inline text-emerald-300 font-semibold">
              Proudly Indian Since 1990
            </span>
          </div>
        )}

        {/* Flying Tiranga Flag & Brand Heading Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
          <div className="order-2 md:order-1">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground animate-fade-in tracking-tight">
              Welcome to
              <br />
              <span className="text-accent drop-shadow-md">
                Sri Aditya Enterprises
              </span>
            </h1>
          </div>

          {/* Flying Animated Tiranga Flag (Only in festive mode) */}
          {isFestive && (
            <div className="order-1 md:order-2 shrink-0 animate-fade-in [animation-delay:0.1s]">
              <TirangaFlag size="md" withPole={true} className="drop-shadow-2xl" />
            </div>
          )}
        </div>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in [animation-delay:0.2s]">
          {isFestive
            ? "Celebrating 80 Years of Freedom with over three decades of crafting comfort and elegance for Indian homes in Hyderabad."
            : "Your premier furniture destination in Hyderabad. Celebrating Indian craftsmanship, comfort, and timeless elegance for every home."}
        </p>

        {/* Action Button with Tricolor Ambient Glow */}
        <div className="animate-fade-in [animation-delay:0.4s] flex flex-wrap justify-center gap-4">
          <Button
            onClick={scrollToCollections}
            size="lg"
            className="relative group bg-accent hover:bg-accent/90 text-white font-semibold px-8 md:px-10 py-6 text-base md:text-lg rounded-lg shadow-xl overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{isFestive ? "Explore 80th Independence Day Offers" : "Explore Collections"}</span>
              <span className="text-xl">🛋️</span>
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <button
          onClick={scrollToCollections}
          className="text-white/80 hover:text-white transition-colors animate-bounce p-2"
          aria-label="Scroll down to collections"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};

