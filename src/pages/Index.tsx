import { useEffect } from "react";
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

  return (
    <div className="min-h-screen bg-[#f6f4ed] text-[#242820] font-sans selection:bg-[#d6b486] selection:text-[#242820]">
      <Navbar />
      <main>
        <Hero />
        <TrustRow />
        <Collections />
        <About />
        <InstagramShowcase />
        <Contact />
      </main>
      <Footer />

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
