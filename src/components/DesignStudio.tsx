import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, RotateCcw, Sparkles } from "lucide-react";
import "./DesignStudio.css";

type SofaStyle = "classic" | "modern" | "compact";
type Fabric = { name: string; color: string; note: string };
type Wood = { name: string; color: string };

const fabrics: Fabric[] = [
  { name: "Sage", color: "#718b65", note: "Calm & natural" },
  { name: "Oat", color: "#c9b99d", note: "Soft neutral" },
  { name: "Terracotta", color: "#ad684d", note: "Warm character" },
  { name: "Charcoal", color: "#45484a", note: "Modern contrast" },
  { name: "Navy", color: "#344b70", note: "Quiet depth" },
  { name: "Ivory", color: "#e4ddcd", note: "Light & timeless" },
];

const woods: Wood[] = [
  { name: "Natural teak", color: "#b7834b" },
  { name: "Honey oak", color: "#d1a15e" },
  { name: "Walnut", color: "#68432f" },
  { name: "Ebony", color: "#302923" },
];

const styles: { id: SofaStyle; label: string; description: string }[] = [
  { id: "classic", label: "The Classic", description: "A familiar silhouette with generous arms and timeless proportions." },
  { id: "modern", label: "The Modern", description: "A cleaner, lower profile for contemporary living spaces." },
  { id: "compact", label: "The Compact", description: "A space-conscious shape for smaller rooms and apartments." },
];

const ownerPhone = (import.meta.env.VITE_OWNER_PHONE || "918019404140").replace(/\D/g, "");
const whatsappNumber = ownerPhone.length === 10 ? `91${ownerPhone}` : ownerPhone;

function SofaIllustration({ fabric, wood, style }: { fabric: string; wood: string; style: SofaStyle }) {
  const geometry = {
    classic: { back: "M145 94 Q145 65 176 65 H424 Q455 65 455 94 V205 H145 Z", arms: "M91 151 Q91 113 127 113 H155 V269 H91 Z M445 113 H473 Q509 113 509 151 V269 H445 Z", seat: "M145 193 H455 Q479 193 479 220 V270 H121 V220 Q121 193 145 193 Z" },
    modern: { back: "M145 112 Q145 88 174 88 H426 Q455 88 455 112 V205 H145 Z", arms: "M91 169 Q91 143 124 143 H155 V269 H91 Z M445 143 H476 Q509 143 509 169 V269 H445 Z", seat: "M145 197 H455 Q479 197 479 220 V270 H121 V220 Q121 197 145 197 Z" },
    compact: { back: "M166 104 Q166 78 191 78 H409 Q434 78 434 104 V205 H166 Z", arms: "M112 157 Q112 128 143 128 H174 V269 H112 Z M426 128 H457 Q488 128 488 157 V269 H426 Z", seat: "M166 195 H434 Q459 195 459 220 V270 H141 V220 Q141 195 166 195 Z" },
  }[style];

  return (
    <svg className="sae-studio-sofa" viewBox="0 0 600 370" role="img" aria-label={`${style} sofa preview in selected ${fabric} fabric and wood finish`}>
      <defs>
        <linearGradient id="sofaFabricShade" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".22" />
          <stop offset="100%" stopColor="#000000" stopOpacity=".12" />
        </linearGradient>
        <filter id="sofaShadow" x="-30%" y="-30%" width="160%" height="180%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <ellipse cx="300" cy="302" rx="205" ry="23" fill="#2d281f" opacity=".18" filter="url(#sofaShadow)" />
      <g stroke="#33291f" strokeOpacity=".18" strokeWidth="3" strokeLinejoin="round">
        <path d="M151 260 L143 321 Q142 330 151 330 H171 L185 265 Z M415 265 L429 330 H449 Q458 330 457 321 L449 260 Z" fill={wood} />
        <path d="M175 257 L169 317 M425 257 L431 317" stroke="#fff" strokeOpacity=".22" strokeWidth="4" />
        <path d={geometry.back} fill={fabric} />
        <path d={geometry.arms} fill={fabric} />
        <path d={geometry.seat} fill={fabric} />
        <path d="M145 195 Q300 209 455 195" fill="none" stroke="#fff" strokeOpacity=".24" strokeWidth="4" />
        <path d="M300 203 V267" fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="3" />
        <path d="M161 115 Q300 125 439 115" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="3" />
        <path d={geometry.back} fill="url(#sofaFabricShade)" stroke="none" />
        <path d={geometry.arms} fill="url(#sofaFabricShade)" stroke="none" />
        <path d={geometry.seat} fill="url(#sofaFabricShade)" stroke="none" />
      </g>
      <g fill="none" stroke="#fff" strokeOpacity=".28" strokeWidth="2">
        <path d="M180 83 Q300 76 420 83" />
        <path d="M130 225 Q300 238 470 225" />
      </g>
    </svg>
  );
}

export const DesignStudio = () => {
  const [style, setStyle] = useState<SofaStyle>("classic");
  const [fabric, setFabric] = useState(fabrics[0]);
  const [wood, setWood] = useState(woods[0]);
  const [roomMood, setRoomMood] = useState<"day" | "evening">("day");
  const reduceMotion = useReducedMotion();
  const selectedStyle = useMemo(() => styles.find((item) => item.id === style)!, [style]);

  const reset = () => {
    setStyle("classic");
    setFabric(fabrics[0]);
    setWood(woods[0]);
    setRoomMood("day");
  };

  const askAboutDesign = () => {
    const message = `Hello Sri Aditya Enterprises 👋, I used the website Design Studio and would like to ask about a sofa with these preferences:\n\nStyle: ${selectedStyle.label}\nFabric colour: ${fabric.name}\nWood finish: ${wood.name}\nRoom mood: ${roomMood === "day" ? "Daylight" : "Evening"}\n\nCould you please show me available designs and fabric options at the showroom?`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="sae-design-studio" id="design-studio">
      <div className="sae-studio-wrap">
        <motion.div
          className="sae-studio-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="sae-studio-eyebrow"><Sparkles size={13} /> YOUR SPACE, YOUR SIGNATURE</span>
          <h2>Make it <em>yours.</em></h2>
          <p>Explore a few combinations before you visit. Choose a sofa style, upholstery colour and wood finish to create a starting point for your showroom conversation.</p>
        </motion.div>

        <div className="sae-studio-layout">
          <motion.div
            className={`sae-studio-stage ${roomMood === "evening" ? "is-evening" : "is-day"}`}
            layout
          >
            <div className="sae-studio-stage-top"><span>LIVE STYLE PREVIEW</span><span className="sae-preview-dot" /> <span>{roomMood === "day" ? "DAYLIGHT" : "EVENING"}</span></div>
            <div className="sae-studio-room-art" aria-hidden="true">
              <div className="sae-room-sun" />
              <div className="sae-room-wall-line" />
              <div className="sae-room-floor" />
              <div className="sae-room-rug" />
              <div className="sae-room-plant"><i /><i /><i /><b /></div>
              <div className="sae-room-side-table"><i /></div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${style}-${fabric.name}-${wood.name}`}
                className="sae-sofa-stage"
                initial={reduceMotion ? false : { opacity: 0, y: 12, scale: .97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: .98 }}
                transition={{ duration: .38, ease: [0.22, 1, 0.36, 1] }}
              >
                <SofaIllustration fabric={fabric.color} wood={wood.color} style={style} />
              </motion.div>
            </AnimatePresence>
            <div className="sae-stage-caption"><span>YOUR CURRENT COMBINATION</span><strong>{selectedStyle.label} · {fabric.name} · {wood.name}</strong></div>
            <div className="sae-room-mood-toggle" role="group" aria-label="Room lighting preview">
              <button className={roomMood === "day" ? "active" : ""} onClick={() => setRoomMood("day")}>Daylight</button>
              <button className={roomMood === "evening" ? "active" : ""} onClick={() => setRoomMood("evening")}>Evening</button>
            </div>
          </motion.div>

          <div className="sae-studio-controls">
            <div className="sae-control-heading"><div><span>01 / SILHOUETTE</span><h3>Choose a shape</h3></div><button className="sae-reset" onClick={reset} aria-label="Reset design choices"><RotateCcw size={14} /> Reset</button></div>
            <div className="sae-style-options">
              {styles.map((item) => (
                <button key={item.id} className={`sae-style-option ${style === item.id ? "active" : ""}`} onClick={() => setStyle(item.id)}>
                  <span className={`sae-style-mini ${item.id}`}><i /><i /><b /></span>
                  <span><strong>{item.label}</strong><small>{item.id === "classic" ? "Timeless" : item.id === "modern" ? "Minimal" : "Space smart"}</small></span>
                  {style === item.id && <Check size={15} />}
                </button>
              ))}
            </div>

            <div className="sae-control-block">
              <div className="sae-control-heading"><div><span>02 / UPHOLSTERY</span><h3>Pick a fabric tone</h3></div><b className="sae-selected-value">{fabric.name}</b></div>
              <div className="sae-swatch-row" role="group" aria-label="Fabric colour">
                {fabrics.map((item) => <button key={item.name} className={`sae-swatch ${fabric.name === item.name ? "active" : ""}`} style={{ "--swatch": item.color } as React.CSSProperties} onClick={() => setFabric(item)} aria-label={`${item.name} fabric`} aria-pressed={fabric.name === item.name}><span />{fabric.name}</button>)}
              </div>
            </div>

            <div className="sae-control-block">
              <div className="sae-control-heading"><div><span>03 / WOODWORK</span><h3>Choose a wood finish</h3></div><b className="sae-selected-value">{wood.name}</b></div>
              <div className="sae-wood-row" role="group" aria-label="Wood finish">
                {woods.map((item) => <button key={item.name} className={`sae-wood-swatch ${wood.name === item.name ? "active" : ""}`} onClick={() => setWood(item)} aria-pressed={wood.name === item.name}><span style={{ backgroundColor: item.color }} />{item.name}</button>)}
              </div>
            </div>

            <div className="sae-studio-note"><span className="sae-note-mark">i</span><p>This is a colour and style preview, not a photograph of a specific in-stock product. Visit the showroom to confirm available fabrics, finishes and customisation.</p></div>
            <button className="sae-studio-cta" onClick={askAboutDesign}>Ask about this design <ArrowUpRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
