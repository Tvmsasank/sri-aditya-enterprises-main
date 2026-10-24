import { useState } from "react";
import { ArrowRight, ArrowUpRight, Clock3, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
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
import "./RedesignedHome.css";

const ownerNumber = (import.meta.env.VITE_OWNER_PHONE || "918019404140").replace(/\D/g, "");
const whatsappHref = (message: string) => `https://wa.me/${ownerNumber.length === 10 ? `91${ownerNumber}` : ownerNumber}?text=${encodeURIComponent(message)}`;
const mapHref = "https://www.google.com/maps/place/sri+aditya+enterprises/@17.3309764,78.5674217,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcba1025c5dfa69:0x7b20021308763e99!8m2!3d17.3309713!4d78.5699966!16s%2Fg%2F1tm09842";
const reviewsHref = "https://www.google.com/search?q=sri+aditya+enterprises+reviews";

const collections = [
  { name: "Sofa sets", image: sofas, room: "Living" },
  { name: "Living room", image: livingRoom, room: "Living" },
  { name: "Bedroom furniture", image: bedroom, room: "Bedroom" },
  { name: "Dining tables", image: dining, room: "Dining" },
  { name: "Wardrobes", image: wardrobe, room: "Bedroom" },
  { name: "Sleepwell mattresses", image: mattress, room: "Bedroom" },
  { name: "Sofa beds", image: sofaBed, room: "Living" },
  { name: "Storage solutions", image: storage, room: "Storage" },
  { name: "Home furnishings", image: furnishings, room: "Finishing touches" },
  { name: "Plastic chairs", image: chairs, room: "Everyday essentials" },
  { name: "Godrej lockers", image: lockers, room: "Office & storage" },
  { name: "More essentials", image: miscellaneous, room: "Explore in store" },
];

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

const navItems = [
  ["Collections", "#collections"], ["Our story", "#story"], ["Visit us", "#visit"],
];

export const RedesignedHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submitInquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello Sri Aditya Enterprises,\n\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nMessage: ${form.message.trim()}`;
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="sae-site">
      <div className="sae-topline">Furniture for the way you live <span aria-hidden="true">·</span> Vanasthalipuram, Hyderabad</div>
      <header className="sae-header">
        <div className="sae-nav sae-container">
          <a className="sae-brand" href="#home" aria-label="Sri Aditya Enterprises home">
            <img src="/logo.png" alt="" />
            <span><strong>Sri Aditya Enterprises</strong><small>ESTABLISHED 1990</small></span>
          </a>
          <nav className="sae-nav-links" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            <a href={reviewsHref} target="_blank" rel="noreferrer">Customer reviews <ArrowUpRight size={13} /></a>
          </nav>
          <a className="sae-nav-cta" href="#visit">Plan your visit <ArrowUpRight size={14} /></a>
          <button className="sae-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && <nav className="sae-mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowRight size={15} /></a>)}
          <a href={reviewsHref} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Customer reviews<ArrowUpRight size={15} /></a>
          <a href="tel:+918019404140" onClick={() => setMenuOpen(false)}>Call the showroom<Phone size={15} /></a>
        </nav>}
      </header>

      <main>
        <section className="sae-hero" id="home">
          <div className="sae-container sae-hero-grid">
            <div className="sae-hero-copy">
              <div className="sae-eyebrow"><span /> A home, made yours</div>
              <h1>Comfort that<br />feels like <em>home.</em></h1>
              <p>Thoughtful furniture for every room, every gathering, and all the little moments in between. Find your next favourite piece in Hyderabad.</p>
              <div className="sae-actions">
                <a className="sae-button sae-button-primary" href="#collections">Explore collections <ArrowRight size={16} /></a>
                <a className="sae-button sae-button-outline" href="#visit">Visit our showroom</a>
              </div>
              <div className="sae-hero-note"><span className="sae-note-mark">36</span><span><strong>Locally trusted since 1990</strong><small>Serving Hyderabad families for generations</small></span></div>
            </div>
            <div className="sae-hero-visual">
              <img src={heroImage} alt="A welcoming furniture setting at Sri Aditya Enterprises" fetchPriority="high" />
              <div className="sae-image-caption"><span>Made for everyday living</span><strong>Find a room to fall in love with</strong></div>
              <div className="sae-image-index">SRI ADITYA <span>01 / HOME</span></div>
            </div>
          </div>
          <div className="sae-container sae-hero-bottom"><span>Comfort · Craft · Care</span><a href="#collections">Scroll to explore <span>↓</span></a></div>
        </section>

        <section className="sae-proof" aria-label="Why shop with Sri Aditya Enterprises">
          <div className="sae-container sae-proof-grid">
            <div><strong>Since 1990</strong><span>Three decades of trust</span></div>
            <div><strong>Home & office</strong><span>Furniture for every space</span></div>
            <div><strong>Trusted brands</strong><span>Quality you can count on</span></div>
            <div><strong>Hyderabad local</strong><span>Visit our showroom</span></div>
          </div>
        </section>

        <section className="sae-collections sae-section" id="collections">
          <div className="sae-container">
            <div className="sae-section-head">
              <div><div className="sae-eyebrow"><span /> Find your fit</div><h2>Explore the collections</h2></div>
              <p>From the sofa you gather around to the details that make a room yours—start with the space you’re furnishing.</p>
            </div>
            <div className="sae-category-grid">
              {collections.map((item, index) => (
                <a className="sae-category-card" href={whatsappHref(`Hello Sri Aditya Enterprises, I would like to know more about ${item.name}.`)} target="_blank" rel="noreferrer" key={item.name}>
                  <div className="sae-category-image"><img src={item.image} alt={item.name} loading="lazy" /><span className="sae-card-number">{String(index + 1).padStart(2, "0")}</span><span className="sae-card-arrow"><ArrowUpRight size={16} /></span></div>
                  <div className="sae-category-meta"><span>{item.room}</span><h3>{item.name}</h3></div>
                </a>
              ))}
            </div>
            <div className="sae-collection-foot"><span>Have something specific in mind?</span><a href={whatsappHref("Hello Sri Aditya Enterprises, I would like help finding furniture.")} target="_blank" rel="noreferrer">Ask us on WhatsApp <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section className="sae-story" id="story">
          <div className="sae-container sae-story-grid">
            <div className="sae-founder-photo"><img src="/founder.png" alt="Proprietor of Sri Aditya Enterprises" loading="lazy" /><span>Hyderabad, since 1990</span></div>
            <div className="sae-story-copy"><div className="sae-eyebrow"><span /> A neighbourhood name since 1990</div><h2>Good furniture.<br />Good people.<br /><em>Generations of trust.</em></h2><p>For over three decades, Sri Aditya Enterprises has helped Hyderabad families make their houses feel like home. Come in, explore at your own pace, and let us help you find the right fit.</p><p className="sae-quote">“Your trust is our asset.”</p><a className="sae-text-link" href={reviewsHref} target="_blank" rel="noreferrer">See what our customers say <ArrowUpRight size={15} /></a></div>
          </div>
        </section>

        <section className="sae-visit sae-section" id="visit">
          <div className="sae-container">
            <div className="sae-visit-intro"><div className="sae-eyebrow"><span /> Come by and see for yourself</div><h2>Your next favourite piece<br />is closer than you think.</h2><p>Visit our showroom in Vanasthalipuram. Browse the collections, talk through what you need, and find something that feels right.</p></div>
            <div className="sae-visit-grid">
              <div className="sae-contact-details">
                <a className="sae-detail" href={mapHref} target="_blank" rel="noreferrer"><span className="sae-detail-icon"><MapPin size={19} /></span><span><small>Find us</small><strong>Vanasthalipuram, Hyderabad</strong><em>Get directions <ArrowUpRight size={13} /></em></span></a>
                <a className="sae-detail" href="tel:+918019404140"><span className="sae-detail-icon"><Phone size={18} /></span><span><small>Call the showroom</small><strong>+91 80194 04140</strong><em>Tap to call <ArrowUpRight size={13} /></em></span></a>
                <div className="sae-detail"><span className="sae-detail-icon"><Clock3 size={18} /></span><span><small>Showroom hours</small><strong>Tuesday – Sunday</strong><em>9:30 AM – 9:00 PM · Closed Monday</em></span></div>
                <a className="sae-detail" href={whatsappHref("Hello Sri Aditya Enterprises, I have a question about visiting the showroom.")} target="_blank" rel="noreferrer"><span className="sae-detail-icon"><MessageCircle size={18} /></span><span><small>Prefer to message?</small><strong>Chat with us on WhatsApp</strong><em>We’re happy to help <ArrowUpRight size={13} /></em></span></a>
                <div className="sae-qr-card"><img src="/sae-qr.png" alt="Scan to open Sri Aditya Enterprises on Google" loading="lazy" /><span><strong>Find us on Google</strong><small>Scan for our showroom listing</small></span></div>
              </div>
              <div className="sae-inquiry-card"><div className="sae-eyebrow"><span /> Let’s find the right fit</div><h3>Tell us what you’re looking for.</h3><p>Send us a note and we’ll help you get started on WhatsApp.</p>
                <form onSubmit={submitInquiry}>
                  <label>Your name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="How should we address you?" required /></label>
                  <label>Phone number<input type="tel" inputMode="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="Your contact number" required /></label>
                  <label>What do you have in mind?<textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="A room, a piece, or just a question..." rows={3} required /></label>
                  <button className="sae-button sae-button-primary" type="submit">Send via WhatsApp <ArrowRight size={16} /></button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="sae-trusted sae-section">
          <div className="sae-container">
            <div className="sae-trusted-head"><div className="sae-eyebrow"><span /> Good company</div><h2>Brands we’re proud to bring home.</h2></div>
            <div className="sae-partner-grid">{partners.map(([name, logo]) => <div className="sae-logo-tile" key={name}><img src={logo} alt={name} loading="lazy" /></div>)}</div>
            <div className="sae-payment-row"><span>Convenient ways to pay</span><div>{payments.map(([name, logo]) => <img src={logo} alt={name} key={name} loading="lazy" />)}</div></div>
          </div>
        </section>
      </main>

      <footer className="sae-footer"><div className="sae-container sae-footer-inner"><a className="sae-brand sae-footer-brand" href="#home"><img src="/logo.png" alt="" /><span><strong>Sri Aditya Enterprises</strong><small>ESTABLISHED 1990</small></span></a><span>Furniture for the way you live · Hyderabad</span><a href="#home">Back to top ↑</a></div><div className="sae-container sae-copyright">© {new Date().getFullYear()} Sri Aditya Enterprises. All rights reserved.</div></footer>
      <div className="sae-mobile-actions"><a href="tel:+918019404140"><Phone size={17} /> Call</a><a href={whatsappHref("Hello Sri Aditya Enterprises, I would like to know more about your furniture collections.")} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div>
    </div>
  );
};
