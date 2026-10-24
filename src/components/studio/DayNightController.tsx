import React from "react";
import { Sun, Moon, Sparkles } from "lucide-react";

interface DayNightControllerProps {
  isNight: boolean;
  onToggle: () => void;
  className?: string;
}

export const DayNightController: React.FC<DayNightControllerProps> = ({
  isNight,
  onToggle,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 p-1.5 sm:p-2 rounded-full backdrop-blur-xl transition-all duration-700 shadow-2xl border ${
        isNight
          ? "bg-[#181410]/85 border-amber-500/40 shadow-[0_0_30px_rgba(217,119,6,0.35)]"
          : "bg-white/90 border-[#A87D4F]/30 shadow-[0_10px_30px_rgba(168,125,79,0.25)]"
      } ${className}`}
    >
      <div className="flex items-center gap-1 sm:gap-1.5 px-2 text-[10px] sm:text-xs font-semibold tracking-wider uppercase select-none">
        <Sparkles
          className={`w-3.5 h-3.5 transition-colors duration-500 ${
            isNight ? "text-amber-400 animate-pulse" : "text-[#A87D4F]"
          }`}
        />
        <span className={isNight ? "text-amber-200" : "text-[#4A3B2C]"}>
          Ambiance:
        </span>
      </div>

      {/* Pill Toggle Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-label={isNight ? "Switch to Day Ambiance" : "Switch to Night Ambiance"}
        className={`relative flex items-center justify-between w-28 sm:w-36 h-9 sm:h-10 p-1 rounded-full cursor-pointer transition-all duration-700 select-none ${
          isNight
            ? "bg-gradient-to-r from-slate-900 via-[#261C14] to-amber-950/80 border border-amber-500/30"
            : "bg-gradient-to-r from-[#FAF8F5] via-[#F2ECE1] to-[#E5DAC8] border border-[#A87D4F]/30"
        }`}
      >
        {/* Sliding Indicator Knob */}
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full flex items-center justify-center transition-all duration-500 cubic-bezier(0.16,1,0.3,1) shadow-md ${
            isNight
              ? "left-[calc(50%+2px)] bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.6)]"
              : "left-1 bg-gradient-to-tr from-amber-400 to-yellow-200 text-amber-950 shadow-md"
          }`}
        >
          {isNight ? (
            <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current animate-spin [animation-duration:12s]" />
          ) : (
            <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current animate-spin [animation-duration:12s]" />
          )}
        </div>

        {/* Day Label */}
        <span
          className={`z-10 w-1/2 text-center text-[11px] sm:text-xs font-bold transition-colors duration-300 ${
            !isNight ? "text-amber-950 font-black" : "text-amber-200/60"
          }`}
        >
          ☀️ Day
        </span>

        {/* Night Label */}
        <span
          className={`z-10 w-1/2 text-center text-[11px] sm:text-xs font-bold transition-colors duration-300 ${
            isNight ? "text-slate-950 font-black" : "text-[#7D562E]/70"
          }`}
        >
          🌙 Night
        </span>
      </button>
    </div>
  );
};
