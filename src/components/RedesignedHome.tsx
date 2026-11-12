import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Clock3,
  MapPin, Menu, MessageCircle, Phone, Sparkles, X
} from "lucide-react";
import "./RedesignedHome.css";
import heroImage from "@/assets/hero-furniture.jpg";
import livingRoom from "@/assets/living-room.jpg";
import bedroom from "@/assets/bed-room.jpg";
import dining from "@/assets/dining-table.jpg";
import storage from "@/assets/storage-solutions.jpg";
import sofas from "@/assets/sofas.jpg";
import mattress from "@/assets/sleepwell-mattress.jpg";
import sofaBed from "@/assets/sofa-cum-bed.jpg";
import furnishings from "@/assets/furnishings.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import chairs from "@/assets/plastic-chairs.jpg";
import lockers from "@/assets/godrej-lockers.jpg";
import miscellaneous from "@/assets/miscellaneous.jpg";
import { CraftsmanshipStory } from "@/components/CraftsmanshipStory";
import { InstagramShowcase } from "@/components/InstagramShowcase";

const ownerNumber = (import.meta.env.VITE_OWNER_PHONE || "918019404140").replace(/\D/g, "");
const cleanNumber = ownerNumber.length === 10 ? `91${ownerNumber}` : ownerNumber;
const whatsappHref = (message: string) => `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
const mapHref = "https://www.google.com/maps/place/sri+aditya+enterprises/@17.3309764,78.5674217,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcba1025c5dfa69:0x7b20021308763e99!8m2!3d17.3309713!4d78.5699966!16s%2Fg%2F1tm09842";
const reviewsHref = "https://www.google.com/search?q=sri+aditya+enterprises+reviews";

const collections = [
  { name: "Sofa sets", room: "Living", image: sofas, note: "Made for gathering" },
  { name: "Living room", room: "Living", image: livingRoom, note: "The heart of home" },
  { name: "Bedroom furniture", room: "Bedroom", image: bedroom, note: "A softer place to land" },
  { name: "Dining tables", room: "Dining", image: dining, note: "Bring everyone together" },
  { name: "Wardrobes", room: "Bedroom", image: wardrobe, note: "A place for everything" },
  { name: "Sleepwell mattresses", room: "Bedroom", image: mattress, note: "Rest, thoughtfully" },
  { name: "Sofa beds", room: "Living", image: sofaBed, note: "Make room for more" },
  { name: "Storage solutions", room: "Storage", image: storage, note: "Calm through clever storage" },
  { name: "Home furnishings", room: "Finishing touches", image: furnishings, note: "The finishing layer" },
  { name: "Plastic chairs", room: "Everyday", image: chairs, note: "Everyday utility" },
  { name: "Godrej lockers", room: "Storage", image: lockers, note: "Trusted security" },
  { name: "Showroom essentials", room: "Everyday", image: miscellaneous, note: "Little things that help" },
];
const filters = ["All pieces", "Living", "Bedroom", "Dining", "Storage", "Finishing touches", "Everyday"];
const partners = [
  ["Sleepwell", "/partners/sleepwell.png"], ["Cello", "/partners/cello.png"],
  ["Prima", "/partners/prima.png"], ["Godrej", "/partners/godrej.png"],
  ["Mittal", "/partners/mittal.png"], ["Darpan", "/partners/darpan.png"],
  ["Creations", "/partners/creation.png"],
];
const payments = [
  ["Bajaj Finserv", "/payments/bajaj-finserv.png"], ["Mastercard", "/payments/master-cards.png"],
  ["RuPay", "/payments/rupay-cards.png"], ["Visa", "/payments/visa-cards.png"], ["UPI", "/payments/upi.png"],
];
const ease = [0.22, 1, 0.36, 1] as const;
const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } } };

export const RedesignedHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All pieces");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const reduceMotion = useReducedMotion();
  const visibleCollections = useMemo(
    () => activeFilter === "All pieces" ? collections : collections.filter((item) => item.room === activeFilter),
    [activeFilter]
  );
  const motionProps = reduceMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.16 } };

  const submitInquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello Sri Aditya Enterprises,\\n\\nName: ${form.name.trim()}\\nPhone: ${form.phone.trim()}\\nMessage: ${form.message.trim()}`;
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="atelier-site">
      <div className="atelier-topline"><span className="atelier-live-dot" /> Furniture for the way you live <i>·</i> Vanasthalipuram, Hyderabad</div>
      <header className="atelier-header">
        <div className="atelier-container atelier-nav">
          <a className="atelier-brand" href="#home" aria-label="Sri Aditya Enterprises home">
            <img src="/logo.png" alt="" /><span><strong>Sri Aditya Enterprises</strong><small>ESTABLISHED 1990</small></span>
          </a>
          <nav className="atelier-links" aria-label="Main navigation">
            <a href="#collections">Collections</a><a href="#craft">Our craft</a><a href="#story">Our story</a><a href="#visit">Visit us</a>
            <a href="https://www.instagram.com/sri_aditya_enterprises/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a>
          </nav>
          <a className="atelier-nav-cta" href="#visit">Plan your visit <ArrowUpRight size={14} /></a>
          <button className="atelier-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <AnimatePresence>
          {menuOpen && <motion.nav className="atelier-mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            {["Collections", "Our craft", "Our story", "Visit us"].map((label, i) => <a key={label} href={["#collections", "#craft", "#story", "#visit"][i]} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}
          </motion.nav>}
        </AnimatePresence>
      </header>

      <main>
        <section className="atelier-hero" id="home">
          <div className="atelier-grain" aria-hidden="true" />
          <div className="atelier-container atelier-hero-grid">
            <motion.div className="atelier-hero-copy" initial={reduceMotion ? false : { opacity: 0, x: -26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9, ease }}>
              <div className="atelier-kicker"><span /> THE ART OF LIVING WELL <span className="atelier-kicker-line" /></div>
              <h1>Make room<br />for <em>living.</em></h1>
              <p>Furniture that brings people together, gives everyday moments a place to happen, and makes a house feel unmistakably yours.</p>
              <div className="atelier-hero-actions">
                <a className="atelier-btn atelier-btn-dark" href="#collections">Explore the collection <ArrowRight size={16} /></a>
                <a className="atelier-btn atelier-btn-light" href="#visit">Visit our showroom <MapPin size={15} /></a>
              </div>
              <div className="atelier-heritage"><span className="atelier-seal">36</span><span><b>Rooted in Hyderabad since 1990</b><small>Local knowledge. Familiar faces. Furniture for real homes.</small></span></div>
            </motion.div>
            <motion.div className="atelier-hero-art" initial={reduceMotion ? false : { opacity: 0, scale: .97, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.1, delay: .12, ease }}>
              <div className="atelier-image-frame"><img src={heroImage} alt="Furniture collection at Sri Aditya Enterprises" fetchPriority="high" /></div>
              <div className="atelier-art-stamp"><span>THE HOME EDIT</span><b>01</b><small>EST. 1990 · HYDERABAD</small></div>
              <div className="atelier-floating-note"><Sparkles size={14} /><span>Find your next favourite piece</span></div>
              <div className="atelier-art-caption"><span>01 — A PLACE TO GATHER</span><b>Made for the moments<br />that matter.</b></div>
            </motion.div>
          </div>
          <div className="atelier-container atelier-hero-bottom"><span>CRAFT · COMFORT · CONNECTION</span><a href="#collections">SCROLL TO DISCOVER <ArrowDown size={14} /></a></div>
        </section>

        <section className="atelier-proof" aria-label="Why choose Sri Aditya Enterprises">
          <div className="atelier-container atelier-proof-grid">
            <div><b>Since 1990</b><span>Three decades of trust</span></div><div><b>Home & office</b><span>Furniture for every space</span></div><div><b>Trusted brands</b><span>Quality you can count on</span></div><div><b>Hyderabad local</b><span>Visit our showroom</span></div>
          </div>
        </section>

        <section className="atelier-collections atelier-section" id="collections">
          <div className="atelier-container">
            <motion.div className="atelier-section-head" {...motionProps}>
              <div><div className="atelier-kicker"><span /> FIND YOUR FIT</div><h2>A room for every<br /><em>kind of living.</em></h2></div>
              <p>Start with the room you’re shaping. Browse the collection, find a style that feels right, then talk to us about the details.</p>
            </motion.div>
            <div className="atelier-filter" role="group" aria-label="Filter furniture collections">
              {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)}>{filter}{activeFilter === filter && <span />}</button>)}
            </div>
            <motion.div className="atelier-product-grid" layout>
              <AnimatePresence mode="popLayout">
                {visibleCollections.map((item, index) => (
                  <motion.a className="atelier-product-card" key={item.name} href={whatsappHref(`Hello Sri Aditya Enterprises, I would like to know more about ${item.name}. Please share available designs and pricing.`)} target="_blank" rel="noreferrer" layout initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .42, delay: index * .035, ease }}>
                    <div className="atelier-product-image"><img src={item.image} alt={item.name} loading="lazy" /><span className="atelier-product-index">{String(collections.indexOf(item) + 1).padStart(2, "0")}</span><span className="atelier-product-open"><ArrowUpRight size={18} /></span></div>
                    <div className="atelier-product-info"><div><small>{item.room.toUpperCase()}</small><h3>{item.name}</h3><p>{item.note}</p></div><span className="atelier-product-arrow"><ArrowRight size={16} /></span></div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>
            <div className="atelier-collection-bottom"><span>Not sure where to begin?</span><a href={whatsappHref("Hello Sri Aditya Enterprises, please help me choose furniture for my home.")} target="_blank" rel="noreferrer">Let’s find your fit <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <div id="craft"><CraftsmanshipStory /></div>

        <section className="atelier-story" id="story">
          <div className="atelier-container atelier-story-grid">
            <motion.div className="atelier-founder" {...motionProps}><img src="/founder.png" alt="Founder and proprietor of Sri Aditya Enterprises" loading="lazy" /><span>THE PEOPLE BEHIND THE PIECES <b>HYDERABAD · EST. 1990</b></span></motion.div>
            <motion.div className="atelier-story-copy" {...motionProps}><div className="atelier-kicker"><span /> A NEIGHBOURHOOD NAME SINCE 1990</div><h2>Good furniture.<br />Good people.<br /><em>Generations of trust.</em></h2><p>For over three decades, Sri Aditya Enterprises has helped Hyderabad families make their houses feel like home. Come in, explore at your own pace, and let us help you find the right fit.</p><blockquote>“Your trust is our greatest asset.”</blockquote><a href={reviewsHref} target="_blank" rel="noreferrer" className="atelier-text-link">Read customer reviews <ArrowUpRight size={15} /></a></motion.div>
          </div>
        </section>

        <InstagramShowcase />

        <section className="atelier-visit atelier-section" id="visit">
          <div className="atelier-container">
            <motion.div className="atelier-visit-heading" {...motionProps}><div className="atelier-kicker"><span /> COME BY AND SEE FOR YOURSELF</div><h2>Your next favourite piece<br /><em>is closer than you think.</em></h2><p>Visit our showroom in Vanasthalipuram. Browse the collections, feel the textures, and talk through what you need.</p></motion.div>
            <div className="atelier-visit-grid">
              <div className="atelier-visit-details">
                <a className="atelier-detail" href={mapHref} target="_blank" rel="noreferrer"><MapPin /><span><small>FIND THE SHOWROOM</small><b>Vanasthalipuram, Hyderabad</b><em>Get directions <ArrowUpRight size={13} /></em></span></a>
                <a className="atelier-detail" href="tel:+918019404140"><Phone /><span><small>CALL THE SHOWROOM</small><b>+91 80194 04140</b><em>Tap to call <ArrowUpRight size={13} /></em></span></a>
                <div className="atelier-detail"><Clock3 /><span><small>SHOWROOM HOURS</small><b>Tuesday – Sunday</b><em>9:30 AM – 9:00 PM · Closed Monday</em></span></div>
                <a className="atelier-detail" href={whatsappHref("Hello Sri Aditya Enterprises, I would like to plan a showroom visit.")} target="_blank" rel="noreferrer"><MessageCircle /><span><small>PREFER TO MESSAGE?</small><b>Chat with us on WhatsApp</b><em>We’re happy to help <ArrowUpRight size={13} /></em></span></a>
                <div className="atelier-map-card"><img src="/sae-qr.png" alt="QR code for Sri Aditya Enterprises Google Maps listing" loading="lazy" /><span><b>Find us on Google Maps</b><small>Scan to open the showroom location</small></span></div>
              </div>
              <motion.div className="atelier-inquiry" {...motionProps}><div className="atelier-kicker"><span /> LET’S FIND THE RIGHT FIT</div><h3>Tell us what you’re looking for.</h3><p>Send us a note and we’ll help you get started on WhatsApp.</p>
                <form onSubmit={submitInquiry}>
                  <label>Your name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="How should we address you?" required /></label>
                  <label>Phone number<input type="tel" inputMode="tel" pattern="[0-9+() -]{8,18}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your contact number" required /></label>
                  <label>What do you have in mind?<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="A room, a piece, or just a question..." rows={3} required /></label>
                  <button className="atelier-btn atelier-btn-dark" type="submit">Send via WhatsApp <ArrowRight size={16} /></button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="atelier-partners atelier-section">
          <div className="atelier-container"><div className="atelier-kicker"><span /> GOOD COMPANY</div><h2>Brands we’re proud<br /><em>to bring home.</em></h2>
            <div className="atelier-partner-grid">{partners.map(([name, logo]) => <div className="atelier-logo-tile" key={name}><img src={logo} alt={name} loading="lazy" /></div>)}</div>
            <div className="atelier-payment"><span>CONVENIENT WAYS TO PAY</span><div>{payments.map(([name, logo]) => <img src={logo} alt={name} key={name} loading="lazy" />)}</div></div>
          </div>
        </section>
      </main>

      <footer className="atelier-footer"><div className="atelier-container atelier-footer-main"><a className="atelier-brand" href="#home"><img src="/logo.png" alt="" /><span><strong>Sri Aditya Enterprises</strong><small>ESTABLISHED 1990 · HYDERABAD</small></span></a><p>Furniture for the way you live.</p><div><a href="#collections">Collections</a><a href="#story">Our story</a><a href="#visit">Visit showroom</a><a href={reviewsHref} target="_blank" rel="noreferrer">Google reviews <ArrowUpRight size={13} /></a></div></div><div className="atelier-container atelier-copyright">© {new Date().getFullYear()} Sri Aditya Enterprises. All rights reserved. <a href="#home">Back to top ↑</a></div></footer>
      <div className="atelier-mobile-actions"><a href="tel:+918019404140"><Phone size={17} /> Call</a><a href={whatsappHref("Hello Sri Aditya Enterprises, I would like to know more about your furniture collections.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div>
    </div>
  );
};
