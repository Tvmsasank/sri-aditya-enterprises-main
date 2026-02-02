import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-furniture.jpg";

export const Hero = () => {
  const scrollToCollections = () => {
    const element = document.querySelector("#collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 md:bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Welcome to
          <br />
          <span className="text-accent">Sri Aditya Enterprises</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in [animation-delay:0.2s] opacity-0">
          Your furniture destination in Hyderabad. Crafting comfort and
          elegance for your home spaces.
        </p>
        <Button
          onClick={scrollToCollections}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-6 text-lg rounded-md shadow-lg animate-fade-in [animation-delay:0.4s] opacity-0"
        >
          Explore Collections
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-4 flex justify-center">
        <button
          onClick={scrollToCollections}
          className="text-white/80 animate-bounce">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};
