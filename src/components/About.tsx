import { Award, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";
import { TricolorWave } from "./TricolorWave";
import {
  isIndependenceDayActive,
  isVaralakshmiVrathamActive,
  isRakshaBandhanActive,
} from "@/lib/festive";
import { DivineDivider } from "./DivineDivider";
import { RakhiDivider } from "./RakhiDivider";

const features = [
  {
    icon: Award,
    title: "Handcrafted Solid Teak Quality",
    description: "Built with premium grade seasoned wood and high-resilience foam engineered to last generations.",
  },
  {
    icon: HeartHandshake,
    title: "Bespoke Custom Furniture",
    description: "Customized dimensions, fabrics, and configurations tailored precisely to your home's layout.",
  },
];

export const About = () => {
  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-32 bg-[#FAF8F5] overflow-hidden">
      {/* Flowing Tricolor Wave Watermark (Independence Day) */}
      {isIday && (
        <TricolorWave className="absolute -top-8 left-0 right-0 w-full" opacity={0.65} />
      )}

      {/* Divine Goddess Lakshmi Watermark Accent (Varalakshmi Vratham) */}
      {isVratham && (
        <div className="absolute right-[-8%] md:right-[2%] top-[20%] pointer-events-none opacity-[0.07] select-none">
          <img
            src="/goddess-lakshmi.png"
            alt=""
            className="w-[340px] md:w-[480px] h-auto"
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#A87D4F] mb-2">
            Showroom Legacy Since 1990
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#241C15] mb-4">
            About Sri Aditya Enterprises
          </h2>
          {isRakhi ? (
            <RakhiDivider />
          ) : isVratham ? (
            <DivineDivider />
          ) : isIday ? (
            <div className="w-28 h-1.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-20 h-1 bg-gradient-to-r from-[#A87D4F] to-[#D4AF37] rounded-full mx-auto mb-6" />
          )}
        </div>

        {/* Founder Card + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-16">
          {/* Founder Image Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative p-2.5 rounded-2xl bg-white border border-[#A87D4F]/25 shadow-xl max-w-xs group">
              <img
                src="/founder.png"
                alt="Founder of Sri Aditya Enterprises"
                className="w-full rounded-xl object-cover shadow-sm group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#241C15] text-amber-100 text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Proprietor & Founder</span>
              </div>
            </div>
            <p className="mt-6 text-xs font-semibold text-[#7D562E] tracking-wider uppercase text-center">
              Sri Aditya Enterprises • Vanasthalipuram, Hyderabad
            </p>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#241C15] leading-snug">
              Crafting Comfort, Durability & Timeless Indian Elegance for Over Three Decades.
            </h3>

            <p className="text-[#4A3B2C] text-sm sm:text-base md:text-lg leading-relaxed">
              Established in 1990 opposite the Ganesh Temple in Vanasthalipuram, Sri Aditya Enterprises has grown to become one of Hyderabad's most trusted furniture showrooms, serving thousands of happy families across Telangana.
            </p>

            <p className="text-[#4A3B2C] text-sm sm:text-base md:text-lg leading-relaxed">
              We believe great furniture isn't just about utility—it's the soul of your home. From bespoke luxury modular sofas and orthopedic Sleepwell mattresses to heavy-duty Godrej security lockers and solid teak dining sets, every piece is curated for lasting value.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-[#F2ECE1] border-l-4 border-[#A87D4F] text-[#241C15] font-heading text-lg sm:text-xl font-bold italic shadow-sm">
                “Your trust is our greatest asset.”
              </div>
            </div>
          </div>
        </div>

        {/* 2 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#A87D4F]/20 hover:border-[#A87D4F] shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F2ECE1] border border-[#A87D4F]/30 flex items-center justify-center mb-4 text-[#A87D4F] shadow-inner">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-[#241C15] mb-2">
                {feature.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#4A3B2C] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
