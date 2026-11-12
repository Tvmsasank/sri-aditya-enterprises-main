import React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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
import { ArrowUpRight, MessageCircle, ChevronLeft, ChevronRight, X, ZoomIn, Eye, Sparkles, CheckCircle2, Phone } from "lucide-react";
import { createPortal } from "react-dom";
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
  const reduceMotion = useReducedMotion();
  const [selectedItem, setSelectedItem] = React.useState<typeof furnitureItems[0] | null>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const filteredItems = React.useMemo(
    () =>
      activeCategory === "all"
        ? furnitureItems
        : furnitureItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  // Close lightbox on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when collection detail modal is open
  React.useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const updateScrollArrows = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  React.useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      updateScrollArrows();
      el.addEventListener("scroll", updateScrollArrows);
      window.addEventListener("resize", updateScrollArrows);
      return () => {
        el.removeEventListener("scroll", updateScrollArrows);
        window.removeEventListener("resize", updateScrollArrows);
      };
    }
  }, [filteredItems]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const offset = direction === "left" ? -360 : 360;
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

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

  const handlePrevItem = () => {
    if (!selectedItem) return;
    const currentIndex = furnitureItems.findIndex((it) => it.num === selectedItem.num);
    const prevIndex = (currentIndex - 1 + furnitureItems.length) % furnitureItems.length;
    setSelectedItem(furnitureItems[prevIndex]);
  };

  const handleNextItem = () => {
    if (!selectedItem) return;
    const currentIndex = furnitureItems.findIndex((it) => it.num === selectedItem.num);
    const nextIndex = (currentIndex + 1) % furnitureItems.length;
    setSelectedItem(furnitureItems[nextIndex]);
  };

  return (
    <section
      id="collections"
      className="sae-collections-section relative py-14 sm:py-18 md:py-24 bg-[#f7f8f5] border-t border-[#e2e7e2] transition-colors block"
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
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="sae-collections-heading flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 sm:mb-8"
        >
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
              <span>12 Signature Handcrafted Suites • Tap any item to inspect in HD</span>
              <span className="md:hidden text-[#c99f52] font-semibold ml-auto flex items-center gap-1">
                Swipe <span>👉</span>
              </span>
            </div>
          </div>

          <div className="hidden md:flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <p className="text-xs sm:text-sm text-[#54665c] max-w-sm leading-relaxed">
              From the sofa you gather around to the details that make a room yours—crafted with solid woods and honest pricing.
            </p>
            {isOpen && onClose && (
              <button
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#c8d1c8] hover:border-[#1e3b2b] text-[#1e3b2b] hover:bg-[#1e3b2b] hover:text-[#faeed4] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Close & Re-pack Wardrobe 🔒</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* Festive Dividers if active */}
        {isRakhi && <RakhiDivider />}
        {isVratham && <DivineDivider />}

        {/* Controls Bar: Category Filter Pills */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${isActive
                      ? "bg-[#1e3b2b] text-[#faeed4] shadow-sm scale-102"
                      : "bg-white text-[#54665c] border border-[#e2e7e2] hover:border-[#1e3b2b]"
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            SMOOTH HORIZONTAL CAROUSEL TRACK WITH FLOATING LIQUID ARROWS
            ======================================================== */}
        <div className="relative group/collections">
          {/* Liquid Frosted Floating Left Arrow */}
          <button
            onClick={() => scrollCarousel("left")}
            aria-label="Previous collections"
            className={`absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#1e3b2b] border border-[#c99f52]/40 shadow-[0_8px_30px_rgba(201,159,82,0.3)] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${canScrollLeft ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
              }`}
          >
            <ChevronLeft size={22} className="stroke-[2.5]" />
          </button>

          {/* Liquid Frosted Floating Right Arrow */}
          <button
            onClick={() => scrollCarousel("right")}
            aria-label="Next collections"
            className={`absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#1e3b2b] border border-[#c99f52]/40 shadow-[0_8px_30px_rgba(201,159,82,0.3)] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${canScrollRight ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
              }`}
          >
            <ChevronRight size={22} className="stroke-[2.5]" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory py-3 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <AnimatePresence initial={false} mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={`carousel-${item.name}`}
                layout
                initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.975 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.22 } }}
                viewport={{ once: true, amount: 0.18 }}
                whileHover={reduceMotion ? undefined : { y: -9, scale: 1.012 }}
                transition={{ duration: 0.65, delay: reduceMotion ? 0 : Number(item.num) * 0.025, ease: [0.22, 1, 0.36, 1], layout: { duration: 0.45 } }}
                className="sae-collection-card flex-none w-[275px] sm:w-[325px] snap-start rounded-2xl bg-white border border-[#e2e7e7] hover:border-[#c99f52] shadow-sm hover:shadow-2xl overflow-hidden flex flex-col group"
              >
                {/* Image with Click-to-View in HD */}
                <div
                  onClick={() => setSelectedItem(item)}
                  className="relative aspect-[16/11] w-full overflow-hidden bg-[#162c20] cursor-pointer"
                  title={`Click to view ${item.name} in high-resolution`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="sae-collection-image w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Number & Tag Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-[#162c20]/85 backdrop-blur-md rounded-md text-[10px] font-bold text-[#faeed4] uppercase tracking-wider border border-white/10">
                    {item.num} • {item.tag}
                  </div>

                  {/* HD Zoom Badge Overlay */}
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-[#142019] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
                    <Eye size={12} className="text-[#c99f52]" />
                    <span>View in HD</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col justify-between flex-1 bg-white">
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="cursor-pointer"
                  >
                    <h3 className="font-serif text-lg font-bold text-[#142019] group-hover:text-[#1e3b2b] transition-colors mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#54665c] line-clamp-2 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="flex-1 py-2 px-2.5 rounded-xl border border-[#ded7c4] hover:border-[#1e3b2b] text-[#142019] hover:bg-[#f7f5ed] text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <ZoomIn size={13} className="text-[#c99f52]" />
                      <span>Details</span>
                    </button>
                    <button
                      onClick={() => handleItemInquire(item.name)}
                      className="flex-1 py-2 px-2.5 rounded-xl bg-[#1e3b2b] hover:bg-[#294f3a] text-[#faeed4] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-sm active:scale-98 transition-transform cursor-pointer"
                    >
                      <MessageCircle size={13} />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================
          CRYSTAL-CLEAR HD LIGHTBOX / ITEM DETAIL MODAL
          ======================================================== */}
        {selectedItem && typeof document !== "undefined" && createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#c99f52]/40 flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Close Button (Mobile & Desktop) */}
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close image preview"
                className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#c99f52] text-white hover:text-[#142019] flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              >
                <X size={18} />
              </button>

              {/* Left / Top Image Area (Full Clarity, No Squishing) */}
              <div className="relative md:w-3/5 bg-[#142019] flex items-center justify-center p-4 sm:p-6 overflow-hidden min-h-[260px] sm:min-h-[380px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="max-h-[50vh] md:max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-2xl transition-transform duration-300"
                />

                {/* Tag Pill in image */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#c99f52] text-xs font-mono font-bold tracking-wider border border-[#c99f52]/30">
                  {selectedItem.num} • {selectedItem.tag}
                </div>

                {/* Prev / Next Arrows */}
                <button
                  onClick={handlePrevItem}
                  aria-label="Previous collection"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-white text-white hover:text-[#142019] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextItem}
                  aria-label="Next collection"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-white text-white hover:text-[#142019] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Right / Bottom Details Section */}
              <div className="md:w-2/5 p-5 sm:p-7 flex flex-col justify-between bg-[#fffefa] overflow-y-auto max-h-[42vh] md:max-h-[92vh]">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c99f52] mb-1.5">
                    <Sparkles size={12} />
                    <span>Sri Aditya Signature Suite</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142019] mb-2 leading-tight">
                    {selectedItem.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#54665c] leading-relaxed mb-4">
                    {selectedItem.desc}
                  </p>

                  {/* Craftsmanship Features */}
                  <div className="space-y-2 py-3 border-y border-[#e2e7e2] mb-4 text-xs text-[#3d4d42]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#1e3b2b] flex-shrink-0" />
                      <span>Direct Showroom Pricing with Honest Value</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#1e3b2b] flex-shrink-0" />
                      <span>Custom dimensions & wood finish available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#1e3b2b] flex-shrink-0" />
                      <span>Vanasthalipuram Showroom Display piece</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handleItemInquire(selectedItem.name)}
                    className="w-full py-3 px-4 rounded-xl bg-[#1e3b2b] hover:bg-[#294f3a] text-[#faeed4] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform cursor-pointer"
                  >
                    <MessageCircle size={15} />
                    <span>Inquire on WhatsApp</span>
                  </button>
                  <a
                    href="tel:+918019404140"
                    className="w-full py-2.5 px-4 rounded-xl border border-[#1e3b2b] text-[#1e3b2b] hover:bg-[#1e3b2b]/5 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone size={14} />
                    <span>Call Showroom (+91 80194 04140)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
};