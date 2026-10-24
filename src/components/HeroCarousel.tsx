import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import heroRealShowroom from "@/assets/hero-furniture.jpg";
import post1 from "@/assets/instagram-post-1.jpg";
import post2 from "@/assets/instagram-post-2.jpg";
import post3 from "@/assets/instagram-post-3.jpg";
import post4 from "@/assets/instagram-post-4.jpg";

interface SlideItem {
  id: number;
  image: string;
  tag: string;
  headline: string;
}

const SLIDES: SlideItem[] = [
  {
    id: 1,
    image: heroRealShowroom,
    tag: "Made for Everyday Living",
    headline: "Find a room to fall in love with",
  },
  {
    id: 2,
    image: post1,
    tag: "The Art of Sitting Well",
    headline: "Comfort & character crafted for your home",
  },
  {
    id: 3,
    image: post2,
    tag: "Timeless Craftsmanship",
    headline: "Some materials never go out of style",
  },
  {
    id: 4,
    image: post3,
    tag: "Welcome to Sri Aditya Enterprises",
    headline: "ESTD. 1990 • Hyderabad's trusted showroom",
  },
  {
    id: 5,
    image: post4,
    tag: "Thoughtful Living",
    headline: "Elevate every gathering with timeless design",
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) handleNext();
    if (diff < -40) handlePrev();
    touchStartX.current = null;
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[360px] sm:h-[420px] md:h-[490px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#242820] select-none group"
    >
      {/* Slides with Smooth Crossfade & Ken Burns Zoom */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              style={{ transitionDuration: "6000ms" }}
              className={`w-full h-full object-cover transition-transform ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
            {/* Subtle Gradient Shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
          </div>
        );
      })}

      {/* Floating Photo Caption Card (As in Photo 2) */}
      <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 z-20 max-w-[calc(100%-70px)] sm:max-w-sm bg-[#fffefa]/95 backdrop-blur-md p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-[#e6e4da] transition-all duration-500 animate-fade-in">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#b7834b] flex items-center gap-1.5 mb-0.5">
          <Sparkles className="w-3 h-3 text-[#b7834b]" />
          <span>{currentSlide.tag}</span>
        </span>
        <b className="block font-heading text-sm sm:text-lg font-semibold text-[#242820] leading-snug">
          {currentSlide.headline}
        </b>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/20">
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-[10px] font-bold text-white px-1">
          {currentIndex + 1} / {SLIDES.length}
        </span>
        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Progress Dots / Bars */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Jump to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-6 bg-white shadow-md"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
