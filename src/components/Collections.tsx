import sofasets from "@/assets/sofas.jpg";
import plastichairs from "@/assets/plastic-chairs.jpg";
import bedroomfurniture from "@/assets/bed-room.jpg";
import livingroom from "@/assets/living-room.jpg";
import sleepwellmattress from "@/assets/sleepwell-mattress.jpg";
import sofacumbed from "@/assets/sofa-cum-bed.jpg";
import furnishings from "@/assets/furnishings.jpg";
import diningtable from "@/assets/dining-table.jpg";
import lockers from "@/assets/godrej-lockers.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import storagesolution from "@/assets/storage-solutions.jpg";
import miscellaneous from "@/assets/miscellaneous.jpg";
import { TricolorWave } from "./TricolorWave";
import {
  isIndependenceDayActive,
  isVaralakshmiVrathamActive,
  isRakshaBandhanActive,
  isSleepwellFestivalActive,
} from "@/lib/festive";
import { DivineDivider } from "./DivineDivider";
import { RakhiDivider } from "./RakhiDivider";
import { Sparkles } from "lucide-react";

const furnitureItems = [
  {
    name: "Sofa Sets",
    image: sofasets,
  },
  {
    name: "BedRoom Furniture",
    image: bedroomfurniture,
  },
  {
    name: "Sleepwell Mattress",
    image: sleepwellmattress,
    badge: "FLAT 25% OFF",
  },
  {
    name: "Wardrobe",
    image: wardrobe,
  },
  {
    name: "Living Room",
    image: livingroom,
  },
  {
    name: "Dining Tables",
    image: diningtable,
  },
  {
    name: "Sofa - Bed",
    image: sofacumbed,
  },
  {
    name: "Furnishings",
    image: furnishings,
  },
  {
    name: "Storage Solutions",
    image: storagesolution,
  },
  {
    name: "Plastic Chairs",
    image: plastichairs,
  },
  {
    name: "Godrej Lockers",
    image: lockers,
  },
  {
    name: "Miscellaneous",
    image: miscellaneous,
  },
];

export const Collections = () => {
  const isSleepwell = isSleepwellFestivalActive();
  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  return (
    <section id="collections" className="relative py-20 md:py-28 bg-secondary/30 overflow-hidden">
      {/* 2 Evenly Spaced Flowing Tricolor Waves Across Catalog Rows (Independence Day) */}
      {isIday && (
        <>
          <TricolorWave className="absolute top-[28%] left-0 right-0 w-full" opacity={0.58} />
          <TricolorWave className="absolute top-[64%] left-0 right-0 w-full" flip={true} opacity={0.55} />
        </>
      )}

      {/* Divine Goddess Lakshmi Watermark Accent (Varalakshmi Vratham) */}
      {isVratham && (
        <div className="absolute left-[-6%] md:left-[2%] top-[35%] pointer-events-none opacity-[0.06] select-none">
          <img
            src="/goddess-lakshmi.png"
            alt=""
            className="w-[360px] md:w-[500px] h-auto"
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Collections
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
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our wide range of products, designed to elevate every corner of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {furnitureItems.map((item, index) => {
            const isSleepwellItem = item.name === "Sleepwell Mattress" && isSleepwell;

            return (
              <div
                key={item.name}
                className={`group relative bg-card rounded-lg overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                  isSleepwellItem
                    ? "border-amber-400 shadow-[0_0_25px_rgba(255,191,0,0.5)] ring-2 ring-amber-400/50"
                    : "border-border hover:shadow-xl"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Special Sleepwell Offer Badge */}
                {isSleepwellItem && (
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1 bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-[11px] px-2.5 py-1 rounded-md shadow-lg animate-pulse">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>GREAT FESTIVAL: FLAT 25% OFF</span>
                  </div>
                )}

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading font-semibold text-lg text-card-foreground">
                    {item.name}
                  </h3>
                  {isSleepwellItem && (
                    <p className="text-xs font-bold text-emerald-600 mt-1">
                      ✨ Starts 7th Sept - Win Up to 100% Cashback!
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
