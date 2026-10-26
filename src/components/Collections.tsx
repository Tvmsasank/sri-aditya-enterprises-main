import React from "react";
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
} from "@/lib/festive";
import { DivineDivider } from "./DivineDivider";
import { RakhiDivider } from "./RakhiDivider";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import "./Wardrobe.css";

const DEFAULT_OWNER_PHONE = "918019404140";

interface CollectionsProps {
  isOpen: boolean;
  onClose?: () => void;
}

const furnitureItems = [
  {
    num: "01",
    tag: "Gather",
    name: "Living Room",
    category: "living",
    desc: "Plush sectional sofas, accent coffee tables, and handcrafted entertainment units.",
    image: livingroom,
    rot: "-9deg",
    x: "-25px",
  },
  {
    num: "02",
    tag: "Unwind",
    name: "Bedroom Sets",
    category: "bedroom",
    desc: "Solid teak wood king & queen beds, nightstands, and ergonomic dressers.",
    image: bedroomfurniture,
    rot: "8deg",
    x: "20px",
  },
  {
    num: "03",
    tag: "Come together",
    name: "Dining Tables",
    category: "dining",
    desc: "4 to 8 seater solid wood dining sets designed for memorable family gatherings.",
    image: diningtable,
    rot: "-6deg",
    x: "-15px",
  },
  {
    num: "04",
    tag: "Rest Well",
    name: "Sleepwell Mattress",
    category: "bedroom",
    desc: "Orthopedic memory foam and pocket spring mattresses with 10-year warranty.",
    image: sleepwellmattress,
    rot: "11deg",
    x: "30px",
  },
  {
    num: "05",
    tag: "Lounge",
    name: "Sofa Sets",
    category: "living",
    desc: "L-shape recliners, royal teak wood carved sofas, and modern fabric suites.",
    image: sofasets,
    rot: "-10deg",
    x: "-28px",
  },
  {
    num: "06",
    tag: "Make room",
    name: "Storage & Wardrobe",
    category: "storage",
    desc: "Spacious sliding and hinged wardrobes with mirror accents and durable laminates.",
    image: wardrobe,
    rot: "7deg",
    x: "18px",
  },
  {
    num: "07",
    tag: "Versatile",
    name: "Sofa - Bed",
    category: "living",
    desc: "Smart space-saving sofa-cum-beds that convert effortlessly in seconds.",
    image: sofacumbed,
    rot: "-8deg",
    x: "-20px",
  },
  {
    num: "08",
    tag: "Finishing touch",
    name: "Home Furnishings",
    category: "essentials",
    desc: "Curated cushions, throws, curtains, and premium upholstery fabrics.",
    image: furnishings,
    rot: "9deg",
    x: "24px",
  },
  {
    num: "09",
    tag: "Organize",
    name: "Storage Solutions",
    category: "storage",
    desc: "Shoe racks, display bookshelves, and multi-utility modular cabinetry.",
    image: storagesolution,
    rot: "-7deg",
    x: "-16px",
  },
  {
    num: "10",
    tag: "Seating",
    name: "Plastic Chairs",
    category: "office",
    desc: "Cello and Prima heavy-duty moulded plastic chairs for indoor and garden use.",
    image: plastichairs,
    rot: "10deg",
    x: "22px",
  },
  {
    num: "11",
    tag: "Security",
    name: "Godrej Lockers",
    category: "storage",
    desc: "Authorized electronic, biometric, and mechanical security safe lockers.",
    image: lockers,
    rot: "-9deg",
    x: "-26px",
  },
  {
    num: "12",
    tag: "Accessories",
    name: "Showroom Essentials",
    category: "essentials",
    desc: "Step ladders, center tables, corner stands, and everyday home accessories.",
    image: miscellaneous,
    rot: "6deg",
    x: "15px",
  },
];

const CATEGORIES = [
  { id: "all", label: "✨ All (12)" },
  { id: "living", label: "🛋️ Living Room" },
  { id: "bedroom", label: "🛏️ Royal Bedroom" },
  { id: "dining", label: "🍽️ Dining Suites" },
  { id: "storage", label: "🚪 Wardrobes" },
  { id: "office", label: "💼 Chairs & Office" },
  { id: "essentials", label: "✨ Essentials" },
];

export const Collections: React.FC<CollectionsProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  const filteredItems = activeCategory === "all"
    ? furnitureItems
    : furnitureItems.filter((item) => item.category === activeCategory);

  const handleSelectCategory = (catId: string) => {
    setActiveCategory(catId);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const handleItemInquire = (itemName: string) => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const message = `Hello Sri Aditya Enterprises 👋,\n\nI am browsing your website collections and would like to inquire about *${itemName}*.\n\nPlease share available showroom designs and pricing!`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="collections"
      className={`relative py-8 sm:py-16 md:py-20 bg-[#f7f8f5] border-t border-[#e2e7e2] transition-colors ${
        !isOpen ? "block md:hidden" : "block"
      }`}
    >
      {/* Tricolor Waves for Independence Day */}
      {isIday && (
        <>
          <TricolorWave className="absolute top-[28%] left-0 right-0 w-full" opacity={0.58} />
          <TricolorWave className="absolute top-[64%] left-0 right-0 w-full" flip={true} opacity={0.55} />
        </>
      )}

      {/* Divine Goddess Lakshmi Watermark Accent */}
      {isVratham && (
        <div className="absolute left-[-6%] md:left-[2%] top-[35%] pointer-events-none opacity-[0.06] select-none">
          <img src="/goddess-lakshmi.png" alt="" className="w-[360px] md:w-[500px] h-auto" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 sm:mb-8">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c99f52] flex items-center gap-2 mb-1.5">
              <span className="w-6 h-[1px] bg-[#c99f52]" />
              <span>Find your fit</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-semibold text-[#142019] tracking-tight">
              Explore Collections
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-[#54665c]">
              <span className="w-2 h-2 rounded-full bg-[#1e3b2b] animate-pulse" />
              <span>12 Signature Handcrafted Suites</span>
              <span className="md:hidden text-[#c99f52] font-semibold ml-auto flex items-center gap-1">
                Swipe <span>👉</span>
              </span>
            </div>
          </div>

          <div className="hidden md:flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <p className="text-xs sm:text-sm text-[#54665c] max-w-sm leading-relaxed">
              From the sofa you gather around to the details that make a room yours—crafted with solid woods and honest pricing.
            </p>
            {onClose && (
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#c8d1c8] hover:border-[#1e3b2b] text-[#1e3b2b] hover:bg-[#1e3b2b] hover:text-[#faeed4] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Close & Re-pack Wardrobe 🔒</span>
              </button>
            )}
          </div>
        </div>

        {/* Festive Dividers if active */}
        {isRakhi && <RakhiDivider />}
        {isVratham && <DivineDivider />}

        {/* ========================================================
            MOBILE VIEW: HORIZONTAL SNAP CAROUSEL + CATEGORY PILLS
            (Zero scroll-traps, silky smooth 1-thumb browsing)
            ======================================================== */}
        <div className="md:hidden">
          {/* Category Filter Pills Row */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-2 no-scrollbar -mx-4 px-4">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#1e3b2b] text-[#faeed4] shadow-sm scale-102"
                      : "bg-white text-[#54665c] border border-[#e2e7e2] hover:border-[#1e3b2b]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Cards Snap Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory py-2 -mx-4 px-4 no-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {filteredItems.map((item) => (
              <div
                key={`mobile-${item.name}`}
                className="flex-none w-[260px] snap-start rounded-2xl bg-white border border-[#e2e7e2] shadow-sm hover:shadow-md overflow-hidden flex flex-col transition-all duration-200"
              >
                {/* Card Image */}
                <div className="relative h-44 w-full overflow-hidden bg-[#162c20]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#162c20]/85 backdrop-blur-md rounded-md text-[10px] font-bold text-[#faeed4] uppercase tracking-wider border border-white/10">
                    {item.num} • {item.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3.5 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#142019] mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[11.5px] text-[#54665c] line-clamp-2 leading-relaxed mb-3">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => handleItemInquire(item.name)}
                    className="w-full py-2 px-3 rounded-xl bg-[#1e3b2b] hover:bg-[#294f3a] text-[#faeed4] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform cursor-pointer"
                  >
                    <MessageCircle size={13} />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            DESKTOP / TABLET VIEW: RESPONSIVE GRID WITH TUMBLING BOUNCE
            (Revealed on Desktop when Wardrobe Doors Open)
            ======================================================== */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
          {furnitureItems.map((item, index) => (
            <div
              key={`desktop-${item.name}`}
              onClick={() => handleItemInquire(item.name)}
              className="category-card card-falling"
              style={
                {
                  "--fall-delay": `${index * 0.065}s`,
                  "--rand-rot": item.rot,
                  "--rand-x": item.x,
                } as React.CSSProperties
              }
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
              <div className="category-card-overlay">
                <span className="category-tag">
                  {item.num} • {item.tag}
                </span>
                <b className="category-name">
                  {item.name}
                </b>
                <span className="category-action">
                  Inquire on WhatsApp →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
