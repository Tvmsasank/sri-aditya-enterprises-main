import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustRow } from "@/components/TrustRow";
import { Collections } from "@/components/Collections";
import { About } from "@/components/About";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FallingTilesFlight } from "@/components/FallingTilesFlight";
import { Phone, MessageCircle } from "lucide-react";

const Index = () => {
  const [isWardrobeOpen, setIsWardrobeOpen] = useState(false);
  const [isFlightActive, setIsFlightActive] = useState(false);

  useEffect(() => {
    document.title = "Sri Aditya Enterprises";
    document.querySelectorAll<HTMLLinkElement>("link[rel*='icon'], link[rel='apple-touch-icon']").forEach((link) => {
      link.href = "/favicon.ico";
    });
    const themeColorMeta = document.querySelector<HTMLMetaElement>("meta[name='theme-color']");
    if (themeColorMeta) themeColorMeta.content = "#344b39";
  }, []);

  const ownerPhone = (import.meta.env.VITE_OWNER_PHONE || "918019404140").replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${ownerPhone.length === 10 ? `91${ownerPhone}` : ownerPhone}?text=${encodeURIComponent(
    "Hello Sri Aditya Enterprises 👋, I would like to know more about your furniture collections."
  )}`;

  const handleOpenCollections = () => {
    setIsWardrobeOpen(true);
    setIsFlightActive(true);
    setTimeout(() => {
      const el = document.getElementById("collections");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  const handleCloseWardrobe = () => {
    setIsWardrobeOpen(false);
    setIsFlightActive(false);
    const heroEl = document.getElementById("home");
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggleWardrobe = () => {
    if (!isWardrobeOpen) {
      handleOpenCollections();
    } else {
      handleCloseWardrobe();
    }
  };

  const scrollToSection = (targetId: string) => {
    const cleanId = targetId.replace(/^#/, "");
    if (cleanId === "collections") {
      handleOpenCollections();
      return;
    }
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f4ed] text-[#242820] font-sans selection:bg-[#d6b486] selection:text-[#242820]">
      {/* Shower of In-Flight Falling Tiles down the middle of the screen */}
      <FallingTilesFlight
        isActive={isFlightActive}
        onComplete={() => setIsFlightActive(false)}
      />

      <Navbar onOpenCollections={handleOpenCollections} />
      <main>
        <Hero
          isWardrobeOpen={isWardrobeOpen}
          onToggleWardrobe={handleToggleWardrobe}
          onScrollTo={scrollToSection}
        />
        <TrustRow />
        <Collections isOpen={isWardrobeOpen} onClose={handleCloseWardrobe} />
        <About />
        <InstagramShowcase />
        <Contact />
      </main>
      <Footer onOpenCollections={handleOpenCollections} />

      {/* Floating / Sticky Mobile Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#fffefa]/95 backdrop-blur-md border-t border-[#e6e4da] p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+918019404140"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#344b39] text-[#344b39] font-bold text-xs uppercase tracking-wider"
        >
          <Phone size={14} />
          <span>Call Showroom</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#344b39] text-white font-bold text-xs uppercase tracking-wider shadow-sm"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default Index;
