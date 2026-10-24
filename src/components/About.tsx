import { Sparkles, ArrowRight } from "lucide-react";
import { TricolorWave } from "./TricolorWave";
import {
  isIndependenceDayActive,
  isVaralakshmiVrathamActive,
  isRakshaBandhanActive,
} from "@/lib/festive";

export const About = () => {
  const isIday = isIndependenceDayActive();

  const scrollToVisit = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative py-20 sm:py-24 bg-[#263a2b] text-white overflow-hidden">
      {/* Tricolor wave for Independence Day */}
      {isIday && <TricolorWave className="absolute -top-8 left-0 right-0 w-full" opacity={0.65} />}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Founder Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-w-sm w-full group">
              <img
                src="/founder.png"
                alt="Proprietor of Sri Aditya Enterprises"
                className="w-full h-80 sm:h-96 object-cover object-[center_30%] group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#242820]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                <span className="block text-xs font-bold text-[#e5c8a5] uppercase tracking-wider">
                  Founder & Proprietor
                </span>
                <span className="text-[11px] text-white/80">
                  Sri Aditya Enterprises • Vanasthalipuram
                </span>
              </div>
            </div>
          </div>

          {/* Right: Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d6b486]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A neighbourhood name since 1990</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] text-white">
              Good furniture.<br />
              Good people.<br />
              <span className="text-[#e5c8a5] italic font-normal">Generations of trust.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#d5d9d0] leading-relaxed max-w-xl">
              For over three decades, Sri Aditya Enterprises has helped Hyderabad families make their houses feel like home. Come in, explore at your own pace, and let us help you find the right fit with genuine materials and honest pricing.
            </p>

            <div className="p-4 rounded-xl bg-white/10 border-l-4 border-[#d6b486] text-amber-100 text-sm sm:text-base font-heading italic max-w-lg">
              “Your trust is our greatest asset.”
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToVisit}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#f4f0e6] hover:bg-white text-[#263a2b] font-bold text-xs tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-lg"
              >
                <span>GET TO KNOW US</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
