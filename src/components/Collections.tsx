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
  }
];

import { TricolorWave } from "./TricolorWave";
import { isIndependenceDayActive } from "@/lib/festive";

export const Collections = () => {
  const isFestive = isIndependenceDayActive();

  return (
    <section id="collections" className="relative py-20 md:py-28 bg-secondary/30 overflow-hidden">
      {/* 2 Evenly Spaced Flowing Tricolor Waves Across Catalog Rows */}
      {isFestive && (
        <>
          <TricolorWave className="absolute top-[28%] left-0 right-0 w-full" opacity={0.58} />
          <TricolorWave className="absolute top-[64%] left-0 right-0 w-full" flip={true} opacity={0.55} />
        </>
      )}

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Collections
          </h2>
          {isFestive ? (
            <div className="w-28 h-1.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          )}
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our wide range of products, designed to elevate every corner of your home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {furnitureItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
