import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustRow } from "@/components/TrustRow";
import { Collections } from "@/components/Collections";
import { About } from "@/components/About";
import { InstagramShowcase } from "@/components/InstagramShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Phone, MessageCircle } from "lucide-react";

const Index = () => {
  const [isWardrobeOpen, setIsWardrobeOpen] = useState(false);

  useEffect(() => {
    document.title = "Sri Aditya Enterprises";
    document.querySelectorAll<HTMLLinkElement>("link[rel*='icon'], link[rel='apple-touch-icon']").forEach((link) => {
      link.href = "/favicon.ico";
    });
    const themeColorMeta = document.querySelector<HTMLMetaElement>("meta[name='theme-color']");
    if (themeColorMeta) themeColorMeta.content = "#1e3b2b";
  }, []);

  const ownerPhone = (import.meta.env.VITE_OWNER_PHONE || "918019404140").replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${ownerPhone.length === 10 ? `91${ownerPhone}` : ownerPhone}?text=${encodeURIComponent(
    "Hello Sri Aditya Enterprises 👋, I would like to know more about your furniture collections."
  )}`;

  const handleOpenCollections = () => {
    setIsWardrobeOpen(true);
    setTimeout(() => {
      const el = document.getElementById("collections");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 450);
  };

  const handleCloseWardrobe = () => {
    setIsWardrobeOpen(false);
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
    <div className="min-h-screen bg-[#f7f8f5] text-[#142019] font-sans selection:bg-[#c99f52] selection:text-white transition-colors">
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e2e7e2] p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+918019404140"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[#1e3b2b] text-[#1e3b2b] bg-white font-bold text-xs uppercase tracking-wider active:scale-98 transition-transform"
        >
          <Phone size={14} />
          <span>Call Showroom</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25d366] text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-98 transition-transform"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default Index;
