import { Award, HeartHandshake } from "lucide-react";
import { TricolorWave } from "./TricolorWave";
import { isIndependenceDayActive, isVaralakshmiVrathamActive, isRakshaBandhanActive } from "@/lib/festive";
import { DivineDivider } from "./DivineDivider";
import { RakhiDivider } from "./RakhiDivider";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Handcrafted furniture with finest materials",
  },
  {
    icon: HeartHandshake,
    title: "Custom Orders",
    description: "Tailored furniture to your specifications",
  },
];

export const About = () => {
  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  return (
    <section id="about" className="relative py-20 md:py-28 bg-background overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            About Us
          </h2>
          {isRakhi ? (
            <RakhiDivider />
          ) : isVratham ? (
            <DivineDivider />
          ) : isIday ? (
            <div className="w-28 h-1.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          )}
        </div>

          {/* Image + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            {/* Image */}
            <div className="flex flex-col items-center">
              <img
                src="/founder.png"
                alt="Founder of Sri Aditya Enterprises"
                className="w-full max-w-xs rounded-xl shadow-lg object-cover"
              />
              <span className="mt-3 text-sm font-medium text-muted-foreground">
                Proprietor
              </span>

            </div>

            {/* Text */}
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                For over three decades, Sri Aditya Enterprises has been serving Hyderabad
                and its surrounding regions with exceptional furniture solutions.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                We take pride in transforming houses into homes by crafting furniture
                that reflects comfort, durability, and timeless design rooted in
                traditional values.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our unwavering commitment to quality and customer satisfaction has
                established us as a trusted and respected name in the furniture industry.
              </p>

              <p className="font-heading text-xl font-semibold text-foreground border-l-4 border-accent pl-4">
                “Your trust is our asset.”
              </p>
            </div>
          </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
