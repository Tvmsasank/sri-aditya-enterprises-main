import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, CheckCircle, ArrowRight, Award, Compass, HeartHandshake } from "lucide-react";

import livingRoom from "@/assets/living-room.jpg";
import bedroom from "@/assets/bed-room.jpg";
import dining from "@/assets/dining-table.jpg";
import heroFurniture from "@/assets/hero-furniture.jpg";

interface StageData {
  id: string;
  step: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  highlight: string;
}

const STAGES: StageData[] = [
  {
    id: "stage-1",
    step: "01",
    tag: "Wood Sourcing",
    title: "Hand-Selected Seasoned Teak Wood",
    subtitle: "Naturally cured and moisture-controlled for permanent durability.",
    description:
      "Unlike modern engineered particle boards that swell and break down under Indian weather and humidity, our master artisans select dense, mature seasoned teak wood. Packed with natural wood oils, it offers lifetime natural immunity against termites and weather contraction.",
    metrics: [
      { label: "Seasoning Duration", value: "Naturally Cured" },
      { label: "Durability", value: "Generational Life" },
      { label: "Termite Resistance", value: "100% Solid Teak" },
    ],
    image: dining,
    imageAlt: "Solid seasoned teak wood with rich golden grains",
    highlight: "Zero Particle Board • 100% Solid Wood Guarantee",
  },
  {
    id: "stage-2",
    step: "02",
    tag: "Joinery Craft",
    title: "Traditional Mortise & Tenon Joinery",
    subtitle: "Interlocking wooden joinery engineered to tighten under family use.",
    description:
      "Mass-market factory furniture uses cheap metal brackets and drywall screws that become loose within months. Our artisans chisel traditional interlocking wooden joints where wood anchors into wood, creating a rock-solid foundation that bears heavy loads without wobbling.",
    metrics: [
      { label: "Joinery Method", value: "Interlocking Teak Pegs" },
      { label: "Load Capacity", value: "500+ KG Tested" },
      { label: "Stability", value: "Zero Wobble Guarantee" },
    ],
    image: bedroom,
    imageAlt: "Master craftsmen carving traditional wooden bed joint",
    highlight: "36 Years of Time-Tested Indian Woodcraft",
  },
  {
    id: "stage-3",
    step: "03",
    tag: "Fine Finishing",
    title: "7-Stage Hand-Rubbed Satin Polish",
    subtitle: "Water-resistant, heat-sealed finish showcasing natural golden grain.",
    description:
      "Every piece is hand-sanded across multiple ascending grit stages to achieve a silky satin touch. We apply 7 coats of protective finish that shields against household spills and heat while accentuating the deep natural golden-brown teak grain.",
    metrics: [
      { label: "Coating Process", value: "7 Hand-Rubbed Layers" },
      { label: "Protection", value: "Water & Spill Sealed" },
      { label: "Touch & Feel", value: "Silky Smooth Satin" },
    ],
    image: livingRoom,
    imageAlt: "Richly polished living room suite with deep teak shine",
    highlight: "Spill-Proof • Non-Yellowing Topcoat",
  },
  {
    id: "stage-4",
    step: "04",
    tag: "Direct Value",
    title: "Hyderabad Showroom Directly To Your Home",
    subtitle: "Direct manufacturer pricing with white-glove doorstep delivery.",
    description:
      "By purchasing directly from our Vanasthalipuram showroom and local workshop, you eliminate middlemen commissions and luxury mall retail markups. Every suite is custom-checked, delivered, and assembled in your home by our own experienced staff.",
    metrics: [
      { label: "Serving Hyderabad", value: "Since 1990 (36 Years)" },
      { label: "Manufacturer Savings", value: "Direct Factory Pricing" },
      { label: "Service", value: "Doorstep Setup & Support" },
    ],
    image: heroFurniture,
    imageAlt: "Sri Aditya Enterprises live showroom in Vanasthalipuram Hyderabad",
    highlight: "Trusted by Over 10,000+ Happy Families in Hyderabad",
  },
];

export const CraftsmanshipStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="craft"
      ref={containerRef}
      className="relative bg-[#16251c] text-[#fbf7ee] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Volumetric Glows */}
      <div className="pointer-events-none absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#c99f52]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#274834]/30 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c99f52]/15 border border-[#c99f52]/30 text-[#c99f52] text-xs font-bold uppercase tracking-widest mb-4">
            <Compass size={13} className="animate-spin text-[#c99f52]" style={{ animationDuration: "14s" }} />
            <span>Handcrafted Heritage • Sri Aditya Enterprises</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#faf7f0] leading-tight">
            The Journey of Authentic{" "}
            <span className="italic font-normal text-[#c99f52]">
              Teak Wood Craftsmanship.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#a2b5aa] leading-relaxed">
            Discover the patient, time-honored process behind our furniture — from selected timber seasoning to the finished centerpiece in your living room.
          </p>

          {/* Quick Stage Jump Navigation Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {STAGES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStageIndex(idx);
                  const el = document.getElementById(s.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeStageIndex === idx
                    ? "bg-[#c99f52] text-[#142019] shadow-lg font-bold scale-105"
                    : "bg-white/10 text-[#d0dfd6] hover:bg-white/20"
                }`}
              >
                <span>{s.step}</span>
                <span>{s.tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Storytelling Timeline Track & Stage Blocks */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Vertical Progress Line (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1 relative h-full">
            <div className="sticky top-32 flex flex-col items-center">
              <div className="w-1.5 h-80 rounded-full bg-white/10 relative overflow-hidden">
                <motion.div
                  style={{ height: progressHeight }}
                  className="w-full bg-gradient-to-b from-[#c99f52] via-[#e2bd76] to-[#c99f52] rounded-full shadow-[0_0_12px_#c99f52]"
                />
              </div>
              <div className="mt-4 text-[10px] font-bold text-[#c99f52] tracking-widest uppercase writing-mode-vertical">
                SCROLL
              </div>
            </div>
          </div>

          {/* Center/Right Stages List */}
          <div className="lg:col-span-11 flex flex-col gap-24 sm:gap-32">
            {STAGES.map((stage) => (
              <div
                key={stage.id}
                id={stage.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Text Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-6 flex flex-col gap-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#c99f52]">
                      {stage.step}
                    </span>
                    <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-[#d8e5de] font-semibold border border-white/10">
                      {stage.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#faf7f0]">
                    {stage.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-[#c99f52]">
                    {stage.subtitle}
                  </p>

                  <p className="text-sm text-[#b0c4b8] leading-relaxed">
                    {stage.description}
                  </p>

                  {/* Highlights Pill */}
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#f5dfbe] bg-[#c99f52]/10 border border-[#c99f52]/30 px-3.5 py-1.5 rounded-xl w-fit">
                    <Award size={14} className="text-[#c99f52]" />
                    <span>{stage.highlight}</span>
                  </div>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                    {stage.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex flex-col">
                        <span className="text-xs sm:text-sm font-bold text-[#faf7f0]">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-[#869c90] uppercase tracking-wider mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={`https://wa.me/918019404140?text=${encodeURIComponent(
                      `Hello Sri Aditya Enterprises 👋, I would like to learn more about your ${stage.title} quality and custom order options.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#c99f52] hover:text-[#f8df99] transition-colors mt-2 group w-fit"
                  >
                    <span>Inquire About Custom Orders</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>

                {/* Visual Card Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:col-span-6"
                >
                  <div className="group relative rounded-3xl overflow-hidden border border-[#c99f52]/40 bg-gradient-to-b from-[#223629] to-[#142319] p-3 shadow-2xl transition-all hover:border-[#c99f52]">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#101b13]">
                      <img
                        src={stage.image}
                        alt={stage.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106 filter brightness-95 group-hover:brightness-105"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle size={15} className="text-[#c99f52]" />
                          <span className="text-xs font-semibold text-white">
                            Stage {stage.step} Quality Inspected
                          </span>
                        </div>
                        <span className="text-[10px] text-[#c99f52] font-mono font-bold uppercase tracking-wider">
                          Sri Aditya Standard
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Workshop Banner */}
        <div className="mt-24 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#1c3324] via-[#244330] to-[#1c3324] border border-[#c99f52]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#faf7f0]">
              Visit Our Vanasthalipuram Showroom
            </h4>
            <p className="text-xs sm:text-sm text-[#b2c8bc]">
              Explore all living room, bedroom, dining, and Godrej security collections in person. Customized designs built on request.
            </p>
          </div>

          <a
            href="https://wa.me/918019404140?text=Hello%20Sri%20Aditya%20Enterprises%2C%20I%20would%20like%20to%20visit%20your%20Vanasthalipuram%20showroom."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c99f52] hover:bg-[#dfb564] text-[#142019] font-bold text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-98 whitespace-nowrap"
          >
            <HeartHandshake size={15} />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
