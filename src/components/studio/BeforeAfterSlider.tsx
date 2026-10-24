import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronsLeftRight, Sparkles } from "lucide-react";
import emptyRoomImg from "@/assets/studio-living-empty.jpg";
import styledRoomDayImg from "@/assets/studio-living-styled.jpg";
import styledRoomNightImg from "@/assets/studio-living-night.jpg";

interface BeforeAfterSliderProps {
  isNight?: boolean;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  isNight = false,
  className = "",
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const afterImage = isNight ? styledRoomNightImg : styledRoomDayImg;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(5, Math.min(rect.width - 5, x));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleStopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleStopDrag);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleStopDrag);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStopDrag);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStopDrag);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleStopDrag]);

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden select-none cursor-ew-resize shadow-[0_20px_50px_rgba(36,28,21,0.25)] border-2 transition-colors duration-700 ${
        isNight ? "border-amber-500/40" : "border-[#A87D4F]/30"
      } ${className}`}
      style={{ touchAction: "none" }}
    >
      {/* 1. Base Layer (AFTER: Fully Furnished by Sri Aditya Enterprises) */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-[#241C15]">
        <img
          src={afterImage}
          alt="Furnished Living Room by Sri Aditya Enterprises"
          className="w-full h-full object-cover transition-opacity duration-700 pointer-events-none"
        />

        {/* After Styling Watermark Badge */}
        <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span>AFTER: Styled with Sri Aditya</span>
        </div>
      </div>

      {/* 2. Top Clipped Layer (BEFORE: Empty Unstyled Room) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="relative w-full h-full">
          <img
            src={emptyRoomImg}
            alt="Empty Living Room Before Furniture Styling"
            className="absolute top-0 left-0 max-w-none h-full object-cover"
            style={{
              width: containerRef.current
                ? `${containerRef.current.clientWidth}px`
                : "100%",
            }}
          />

          {/* Before Styling Badge */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white/90 text-[10px] sm:text-xs font-semibold tracking-wider">
            BEFORE: Empty Room
          </div>
        </div>
      </div>

      {/* 3. Draggable Vertical Divider Handle */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center -translate-x-1/2"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Glowing Divider Line */}
        <div
          className={`w-[3px] h-full shadow-[0_0_12px_rgba(0,0,0,0.5)] transition-colors duration-500 ${
            isNight
              ? "bg-gradient-to-b from-amber-400 via-amber-200 to-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]"
              : "bg-gradient-to-b from-white via-amber-100 to-white"
          }`}
        />

        {/* Center Grab Handle Pill */}
        <div
          className={`absolute pointer-events-auto px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 shadow-2xl transition-transform active:scale-95 hover:scale-105 border ${
            isNight
              ? "bg-[#181410] border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(217,119,6,0.6)]"
              : "bg-white/95 border-[#A87D4F] text-[#4A3B2C] shadow-xl"
          }`}
        >
          <ChevronsLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black tracking-wider uppercase whitespace-nowrap hidden xs:inline">
            Drag
          </span>
        </div>
      </div>
    </div>
  );
};
