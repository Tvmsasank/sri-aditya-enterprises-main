import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Key, ArrowRight, ShieldCheck, PhoneCall, X, MessageCircle, CheckCircle2, ZoomIn, Eye, ChevronLeft, ChevronRight } from "lucide-react";

// Asset imports for all 12 official collections
import livingRoom from "@/assets/living-room.jpg";
import bedroom from "@/assets/bed-room.jpg";
import dining from "@/assets/dining-table.jpg";
import mattress from "@/assets/sleepwell-mattress.jpg";
import sofas from "@/assets/sofas.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import sofaBed from "@/assets/sofa-cum-bed.jpg";
import furnishings from "@/assets/furnishings.jpg";
import storage from "@/assets/storage-solutions.jpg";
import chairs from "@/assets/plastic-chairs.jpg";
import lockers from "@/assets/godrej-lockers.jpg";
import miscellaneous from "@/assets/miscellaneous.jpg";

interface NextGenHeroProps {
  onScrollTo: (sectionId: string) => void;
}

// Complete 12 Official Collections matching live Sri Aditya Enterprises
export const OFFICIAL_12_COLLECTIONS = [
  {
    num: "01",
    tag: "Gather",
    name: "Living Room",
    category: "living",
    desc: "Plush sectional sofas, accent coffee tables, and handcrafted entertainment units.",
    image: livingRoom,
  },
  {
    num: "02",
    tag: "Unwind",
    name: "Bedroom Sets",
    category: "bedroom",
    desc: "Solid teak wood king & queen beds, nightstands, and ergonomic dressers.",
    image: bedroom,
  },
  {
    num: "03",
    tag: "Come together",
    name: "Dining Tables",
    category: "dining",
    desc: "4 to 8 seater solid wood dining sets designed for memorable family gatherings.",
    image: dining,
  },
  {
    num: "04",
    tag: "Rest Well",
    name: "Sleepwell Mattress",
    category: "bedroom",
    desc: "Orthopedic memory foam and pocket spring mattresses with 10-year warranty.",
    image: mattress,
  },
  {
    num: "05",
    tag: "Lounge",
    name: "Sofa Sets",
    category: "living",
    desc: "L-shape recliners, royal teak wood carved sofas, and modern fabric suites.",
    image: sofas,
  },
  {
    num: "06",
    tag: "Make room",
    name: "Storage & Wardrobe",
    category: "storage",
    desc: "Spacious sliding and hinged wardrobes with mirror accents and durable laminates.",
    image: wardrobe,
  },
  {
    num: "07",
    tag: "Versatile",
    name: "Sofa - Bed",
    category: "living",
    desc: "Smart space-saving sofa-cum-beds that convert effortlessly in seconds.",
    image: sofaBed,
  },
  {
    num: "08",
    tag: "Finishing touch",
    name: "Home Furnishings",
    category: "essentials",
    desc: "Curated cushions, throws, curtains, and premium upholstery fabrics.",
    image: furnishings,
  },
  {
    num: "09",
    tag: "Organize",
    name: "Storage Solutions",
    category: "storage",
    desc: "Shoe racks, display bookshelves, and multi-utility modular cabinetry.",
    image: storage,
  },
  {
    num: "10",
    tag: "Seating",
    name: "Plastic Chairs",
    category: "seating",
    desc: "Cello and Prima heavy-duty moulded plastic chairs for indoor and garden use.",
    image: chairs,
  },
  {
    num: "11",
    tag: "Security",
    name: "Godrej Lockers",
    category: "security",
    desc: "Authorized electronic, biometric, and mechanical security safe lockers.",
    image: lockers,
  },
  {
    num: "12",
    tag: "Accessories",
    name: "Showroom Essentials",
    category: "essentials",
    desc: "Step ladders, center tables, corner stands, and everyday home accessories.",
    image: miscellaneous,
  },
];

export const NextGenHero: React.FC<NextGenHeroProps> = ({ onScrollTo }) => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDetailItem, setSelectedDetailItem] = useState<typeof OFFICIAL_12_COLLECTIONS[0] | null>(null);

  // 3D Cursor Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Trigger 3D Door Burst & Screen Dive Experience
  const handleToggleDoor = () => {
    if (!isDoorOpen) {
      setIsDoorOpen(true);
      // After burst animation along Z-axis, open full high z-index 3D modal
      setTimeout(() => {
        setIsModalOpen(true);
      }, 700);
    } else {
      setIsModalOpen(false);
      setTimeout(() => {
        setIsDoorOpen(false);
      }, 300);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setIsDoorOpen(false);
    }, 350);
  };

  // Close modal on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  // Prevent background scroll when 3D wardrobe modal or detail modal is open
  useEffect(() => {
    if (isModalOpen || selectedDetailItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen, selectedDetailItem]);

  const filteredItems = activeCategory === "all"
    ? OFFICIAL_12_COLLECTIONS
    : OFFICIAL_12_COLLECTIONS.filter((item) => {
        if (activeCategory === "living") return item.category === "living";
        if (activeCategory === "bedroom") return item.category === "bedroom";
        if (activeCategory === "dining") return item.category === "dining";
        if (activeCategory === "storage") return item.category === "storage";
        if (activeCategory === "seating") return item.category === "seating";
        if (activeCategory === "security") return item.category === "security";
        if (activeCategory === "essentials") return item.category === "essentials";
        return true;
      });

  return (
    <>
      <section
        id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="sae-editorial-hero relative min-h-[88vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#fbfaf6] via-[#f4f1ea] to-[#eee8dd] text-[#142019] pt-24 pb-14 px-4 sm:px-6 lg:px-8"
        style={{ perspective: 1800 }}
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="sae-hero-ambient pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-[140px] opacity-25 bg-gradient-to-br from-[#c99f52] to-[#1e3b2b]" />
        <div aria-hidden="true" className="sae-hero-grain pointer-events-none absolute inset-0" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Top Trust Badges - Grouped neatly above headline with matching pill styling */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#c99f52]/50 backdrop-blur-md shadow-xs text-xs font-semibold text-[#1e3b2b]"
            >
              <Sparkles size={13} className="text-[#c99f52]" />
              <span>Direct Manufacturer • 36 Years of Handcrafted Trust</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#c99f52]/50 backdrop-blur-md shadow-xs text-xs font-semibold text-[#1e3b2b]"
            >
              <ShieldCheck size={14} className="text-[#c99f52]" />
              <span>Solid Teak Wood • Lifetime Quality Assurance</span>
            </motion.div>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Authentic Editorial Headline & Actions */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#142019] leading-[1.18]">
                  Timeless Furniture,{" "}
                  <span className="italic font-normal text-[#1e3b2b] underline decoration-[#c99f52]/60 decoration-wavy underline-offset-8">
                    Crafted for Generations.
                  </span>
                </h1>
                <p className="mt-4 text-sm sm:text-base text-[#4d5f54] leading-relaxed max-w-xl">
                  Handcrafted solid teak wood, luxury sofa suites, Sleepwell mattresses, and authorized Godrej security safes direct from the makers since 1990 in Vanasthalipuram, Hyderabad.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                {/* Primary 3D Wardrobe Open Trigger */}
                <button
                  onClick={handleToggleDoor}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1e3b2b] text-[#faf7f0] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#254935] hover:shadow-xl active:scale-98 transition-all cursor-pointer"
                >
                  <Key
                    size={15}
                    className={`text-[#c99f52] transition-transform duration-500 ${
                      isDoorOpen ? "rotate-90" : "group-hover:rotate-12"
                    }`}
                  />
                  <span>{isDoorOpen ? "Close 3D Wardrobe" : "Open Door & Explore Collections"}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c99f52] animate-ping" />
                </button>

                {/* Showroom Visit Button */}
                <button
                  onClick={() => onScrollTo("contact")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#c4bdae] hover:border-[#1e3b2b] text-[#1e3b2b] bg-white/70 backdrop-blur-sm font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <PhoneCall size={14} />
                  <span>Visit Showroom</span>
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 text-xs text-[#55675c] pt-2 border-t border-[#ded8c9]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#1e3b2b]" />
                  <span>100% Solid Teak</span>
                </div>
                <div>•</div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#1e3b2b]" />
                  <span>Direct Factory Pricing</span>
                </div>
                <div>•</div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#1e3b2b]" />
                  <span>Hyderabad Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Masterpiece Wardrobe with Spring Doors & Z-axis Burst */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              
              <motion.div
                style={{
                  rotateX: isDoorOpen ? 0 : rotateX,
                  rotateY: isDoorOpen ? 0 : rotateY,
                  transformStyle: "preserve-3d",
                }}
                whileHover={{ y: -7, scale: 1.012 }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
                className="sae-wardrobe-showpiece relative w-full max-w-[390px] aspect-[4/4.6] rounded-2xl shadow-2xl transition-shadow cursor-pointer select-none"
                onClick={handleToggleDoor}
              >
                {/* Outer Handcrafted Wood Frame */}
                <div className="absolute inset-0 rounded-2xl bg-[#3c1f11] border-4 border-[#5b321a] shadow-[inset_0_0_50px_rgba(0,0,0,0.8),0_25px_60px_-15px_rgba(20,32,25,0.4)] overflow-hidden">
                  
                  {/* Top Crown Moulding */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#6e3c1e] to-[#42220f] border-b border-[#844c29] flex items-center justify-center px-4 shadow-md z-30">
                    <div className="h-1.5 w-24 rounded-full bg-[#c99f52]/40" />
                  </div>

                  {/* Interior Chamber */}
                  <div className="absolute inset-2 top-9 rounded-xl bg-gradient-to-b from-[#2a160d] via-[#1a0c06] to-[#120703] flex flex-col items-center justify-between p-4 overflow-hidden">
                    
                    {/* Amber Volumetric Glow Inside */}
                    <motion.div
                      animate={{ opacity: isDoorOpen ? 1 : 0.2 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-radial from-[#ffe4b0]/40 via-[#c99f52]/15 to-transparent pointer-events-none"
                    />

                    {/* Wardrobe Wooden Shelves */}
                    <div className="w-full h-1 bg-[#472615] shadow-sm rounded-full my-auto" />
                    <div className="w-full h-1 bg-[#472615] shadow-sm rounded-full my-auto" />

                    {/* Interior Crest Branding */}
                    <div className="relative z-10 text-center py-2">
                      <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#e0b96c]">
                        Sri Aditya Enterprises
                      </div>
                      <div className="text-[8px] text-[#9c784e] tracking-wider">
                        Master Artisans • Est. 1990
                      </div>
                    </div>
                  </div>

                  {/* 3D Double Doors (Animated with Framer Motion Spring Physics) */}
                  <div className="absolute inset-0 top-8 z-20 flex pointer-events-none" style={{ perspective: 1200 }}>
                    
                    {/* Left Door */}
                    <motion.div
                      animate={{
                        rotateY: isDoorOpen ? -125 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 14,
                        mass: 1.1,
                      }}
                      style={{ transformOrigin: "left center" }}
                      className="w-1/2 h-full relative bg-gradient-to-r from-[#442312] via-[#522b17] to-[#3a1d0d] border-r border-[#261208] shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] flex items-center justify-end pr-3"
                    >
                      <div className="absolute inset-3 border-2 border-[#68371c] rounded-md shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]" />
                      <div className="w-2 h-14 rounded-full bg-gradient-to-b from-[#f3dfa2] via-[#c99f52] to-[#8d6928] shadow-lg relative z-10" />
                    </motion.div>

                    {/* Right Door */}
                    <motion.div
                      animate={{
                        rotateY: isDoorOpen ? 125 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 14,
                        mass: 1.1,
                      }}
                      style={{ transformOrigin: "right center" }}
                      className="w-1/2 h-full relative bg-gradient-to-l from-[#442312] via-[#522b17] to-[#3a1d0d] border-l border-[#261208] shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] flex items-center justify-start pl-3"
                    >
                      <div className="absolute inset-3 border-2 border-[#68371c] rounded-md shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]" />
                      <div className="w-2 h-14 rounded-full bg-gradient-to-b from-[#f3dfa2] via-[#c99f52] to-[#8d6928] shadow-lg relative z-10" />
                    </motion.div>
                  </div>
                </div>

                {/* 3D Flying / Bursting Miniature Cards along Z-Axis when Door Opens */}
                <AnimatePresence>
                  {isDoorOpen && !isModalOpen && (
                    <div className="absolute inset-0 pointer-events-none z-30" style={{ transformStyle: "preserve-3d" }}>
                      {OFFICIAL_12_COLLECTIONS.slice(0, 8).map((item, idx) => {
                        const angles = [-35, -20, -5, 10, 25, -30, 0, 30];
                        const xOffsets = [-140, -80, -20, 40, 110, -110, 20, 120];
                        const yOffsets = [-90, -120, -140, -130, -80, 40, 60, 40];
                        return (
                          <motion.div
                            key={item.num}
                            initial={{ scale: 0.1, z: 0, opacity: 0 }}
                            animate={{
                              scale: 1.1,
                              x: xOffsets[idx % xOffsets.length],
                              y: yOffsets[idx % yOffsets.length],
                              z: 320,
                              rotate: angles[idx % angles.length],
                              opacity: 1,
                            }}
                            exit={{ scale: 0.2, z: 0, opacity: 0 }}
                            transition={{
                              duration: 0.7,
                              delay: idx * 0.05,
                              ease: [0.2, 0.8, 0.2, 1],
                            }}
                            className="absolute top-1/2 left-1/2 -mt-10 -ml-8 w-16 h-20 bg-white rounded-lg p-1 shadow-2xl border border-[#c99f52]/50 flex flex-col items-center justify-center"
                          >
                            <img src={item.image} alt={item.name} className="w-full h-12 object-cover rounded" />
                            <span className="text-[7px] font-bold text-[#142019] truncate w-full text-center mt-0.5">
                              {item.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </AnimatePresence>

              </motion.div>

              {/* Clean, perfectly centered callout button right below the wardrobe */}
              <motion.button
                onClick={handleToggleDoor}
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="mt-6 z-20 px-5 py-2.5 rounded-full bg-white border border-[#c99f52] shadow-xl text-xs font-bold tracking-wider uppercase text-[#1e3b2b] hover:bg-[#1e3b2b] hover:text-[#faeed4] flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors duration-200"
              >
                <span>{isDoorOpen ? "🔓 Click to Close Wardrobe" : "🗝️ Click Door to Open Collections"}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
      {/* ========================================================
          HIGH Z-INDEX 3D BURST-OUT SCREEN-FIT MODAL SHOWCASE
          Portaled to document.body: 100% full screen, zero clipping,
          displaying all 12 Official Collections in Full Glory!
          ======================================================== */}
      {typeof document !== "undefined" && isModalOpen && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[88vh] bg-gradient-to-b from-[#ffffff] to-[#faf7f0] rounded-3xl border border-[#c99f52]/40 shadow-2xl flex flex-col overflow-hidden my-auto"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-[#1e3b2b] via-[#244330] to-[#142319] text-white flex items-center justify-between border-b-2 border-[#c99f52]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#c99f52] tracking-widest uppercase bg-[#c99f52]/20 px-2 py-0.5 rounded">
                      Official Catalog (12)
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#bad3c5]">• Sri Aditya Enterprises</span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-2xl font-bold text-[#faf7f0] mt-0.5">
                    Explore Curated Handcrafted Furniture
                  </h2>
                </div>

                <button
                  onClick={handleCloseModal}
                  aria-label="Close collections modal"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#c99f52] hover:text-[#142019] border border-white/20 text-white flex items-center justify-center text-lg font-bold transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Category Filter Tabs */}
              <div className="px-4 sm:px-6 py-2.5 bg-[#f5f1e8] border-b border-[#e5decb] flex items-center gap-2 overflow-x-auto no-scrollbar">
                {[
                  { id: "all", label: "✨ All (12)" },
                  { id: "living", label: "🛋️ Living Room" },
                  { id: "bedroom", label: "🛏️ Bedroom & Sleepwell" },
                  { id: "dining", label: "🍽️ Dining Sets" },
                  { id: "storage", label: "🚪 Wardrobes & Storage" },
                  { id: "seating", label: "🪑 Plastic Chairs" },
                  { id: "security", label: "🔒 Godrej Lockers" },
                  { id: "essentials", label: "✨ Furnishings" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      activeCategory === tab.id
                        ? "bg-[#1e3b2b] text-white shadow-sm"
                        : "bg-white text-[#4c5d53] border border-[#ded8c9] hover:bg-white/80"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* 12 Collections Grid */}
              <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="group bg-white rounded-2xl border border-[#ded7c4] hover:border-[#c99f52] shadow-sm hover:shadow-lg transition-all p-3 flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    {/* Image with HD View Trigger */}
                    <div
                      onClick={() => setSelectedDetailItem(item)}
                      className="relative aspect-[16/11] rounded-xl overflow-hidden mb-2 bg-[#162c20] cursor-pointer"
                      title={`Click to inspect ${item.name} in high-resolution`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-106"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[#c99f52] text-[10px] font-mono font-bold tracking-widest border border-white/10">
                        {item.num} • {item.tag}
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/90 backdrop-blur-md rounded-md text-[10px] font-bold text-[#142019] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-sm">
                        <Eye size={11} className="text-[#c99f52]" />
                        <span>Inspect HD</span>
                      </div>
                    </div>

                    <div
                      onClick={() => setSelectedDetailItem(item)}
                      className="flex flex-col gap-0.5"
                    >
                      <h3 className="font-serif text-base font-bold text-[#142019] group-hover:text-[#1e3b2b] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#55675c] line-clamp-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-2.5 flex items-center gap-1.5">
                      <button
                        onClick={() => setSelectedDetailItem(item)}
                        className="flex-1 py-1.5 px-2 rounded-xl border border-[#ded7c4] hover:border-[#1e3b2b] text-[#142019] hover:bg-[#f7f5ed] text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ZoomIn size={12} className="text-[#c99f52]" />
                        <span>HD View</span>
                      </button>
                      <a
                        href={`https://wa.me/918019404140?text=${encodeURIComponent(
                          `Hello Sri Aditya Enterprises 👋, I would like to inquire about ${item.name} (${item.tag}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 px-2 rounded-xl bg-[#1e3b2b] hover:bg-[#294f3a] text-white font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                      >
                        <MessageCircle size={12} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 sm:p-4 bg-[#f8f6f0] border-t border-[#e5decb] flex flex-wrap items-center justify-between gap-2.5 text-xs text-[#526359]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#1e3b2b]" />
                  <span>Serving Vanasthalipuram & Hyderabad for 36 years • Custom sizes available</span>
                </div>
                <button
                  onClick={() => {
                    handleCloseModal();
                    onScrollTo("contact");
                  }}
                  className="font-bold text-[#1e3b2b] hover:text-[#c99f52] underline underline-offset-4 cursor-pointer"
                >
                  Visit Vanasthalipuram Showroom →
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

      {/* ========================================================
          CRYSTAL-CLEAR HD LIGHTBOX PREVIEW IN HERO MODAL
          ======================================================== */}
      {selectedDetailItem && typeof document !== "undefined" && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[1000000] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedDetailItem(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#c99f52]/40 flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDetailItem(null)}
              aria-label="Close HD preview"
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-black/60 hover:bg-[#c99f52] text-white hover:text-[#142019] flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
            >
              <X size={18} />
            </button>

            {/* Left Image (Uncropped, High Clarity) */}
            <div className="relative md:w-3/5 bg-[#142019] flex items-center justify-center p-4 sm:p-6 overflow-hidden min-h-[260px] sm:min-h-[380px]">
              <img
                src={selectedDetailItem.image}
                alt={selectedDetailItem.name}
                className="max-h-[50vh] md:max-h-[70vh] w-auto h-auto object-contain rounded-2xl shadow-2xl transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#c99f52] text-xs font-mono font-bold tracking-wider border border-[#c99f52]/30">
                {selectedDetailItem.num} • {selectedDetailItem.tag}
              </div>
            </div>

            {/* Right Details */}
            <div className="md:w-2/5 p-5 sm:p-7 flex flex-col justify-between bg-[#fffefa] overflow-y-auto max-h-[42vh] md:max-h-[92vh]">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#c99f52] mb-1.5">
                  <Sparkles size={12} />
                  <span>Sri Aditya Signature Collection</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#142019] mb-2 leading-tight">
                  {selectedDetailItem.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#54665c] leading-relaxed mb-4">
                  {selectedDetailItem.desc}
                </p>

                <div className="space-y-2 py-3 border-y border-[#e2e7e2] mb-4 text-xs text-[#3d4d42]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#1e3b2b] flex-shrink-0" />
                    <span>Direct Showroom Pricing & Highest Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#1e3b2b] flex-shrink-0" />
                    <span>Custom wood & fabric choices available</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`https://wa.me/918019404140?text=${encodeURIComponent(
                    `Hello Sri Aditya Enterprises 👋, I would like to inquire about ${selectedDetailItem.name} (${selectedDetailItem.tag}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#1e3b2b] hover:bg-[#294f3a] text-[#faeed4] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform cursor-pointer"
                >
                  <MessageCircle size={15} />
                  <span>Inquire on WhatsApp</span>
                </a>
                <a
                  href="tel:+918019404140"
                  className="w-full py-2.5 px-4 rounded-xl border border-[#1e3b2b] text-[#1e3b2b] hover:bg-[#1e3b2b]/5 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall size={14} />
                  <span>Call Showroom (+91 80194 04140)</span>
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
