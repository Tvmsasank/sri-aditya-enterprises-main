import { useState, useEffect } from "react";
import { Menu, X, Instagram, ArrowUpRight } from "lucide-react";
import { IndependenceDayBanner } from "./IndependenceDayBanner";
import { VaralakshmiBanner } from "./VaralakshmiBanner";
import { RakshaBandhanBanner } from "./RakshaBandhanBanner";
import { ToranamGarland } from "./ToranamGarland";
import { RakhiThreadGarland } from "./RakhiThreadGarland";
import {
  isIndependenceDayActive,
  isVaralakshmiVrathamActive,
  isRakshaBandhanActive,
} from "@/lib/festive";

const navLinks = [
  { label: "Collections", target: "collections" },
  { label: "Our story", target: "about" },
  { label: "Visit us", target: "contact" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sri_aditya_enterprises/",
    external: true,
  },
  {
    label: "Customer reviews ↗",
    href: "https://www.google.com/search?q=sri+aditya+enterprises+Reviews",
    external: true,
  },
];

interface NavbarProps {
  onOpenCollections?: () => void;
}

export const Navbar = ({ onOpenCollections }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRakhi = isRakshaBandhanActive();
  const isVratham = isVaralakshmiVrathamActive();
  const isIday = isIndependenceDayActive();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const cleanId = targetId.replace(/^#/, "");
    if (cleanId === "collections" && onOpenCollections) {
      onOpenCollections();
    }
    const element = document.getElementById(cleanId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    setIsMobileMenuOpen(false);
  };

  interface NavLinkItem {
    label: string;
    target?: string;
    href?: string;
    external?: boolean;
  }

  const handleNavClick = (link: NavLinkItem) => {
    if (link.external && link.href) {
      window.open(link.href, "_blank", "noopener,noreferrer");
    } else if (link.target) {
      scrollToSection(link.target);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 🧵 Raksha Bandhan Festive Ribbon */}
      {isRakhi && <RakshaBandhanBanner />}

      {/* 🪔 Varalakshmi Vratham Festive Ribbon */}
      {isVratham && <VaralakshmiBanner />}

      {/* 🇮🇳 Independence Day Festive Ribbon */}
      {isIday && <IndependenceDayBanner />}

      {/* Top Notice Bar (Strictly brand & location without instagram handle) */}
      <div className="bg-[#1e3b2b] text-[#faeed4] py-2 text-center text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase flex items-center justify-center px-3">
        <span>FURNITURE FOR THE WAY YOU LIVE • VANASTHALIPURAM, HYDERABAD</span>
      </div>

      <nav
        className={`w-full transition-all duration-300 border-b border-[#e2e7e2] ${
          isScrolled
            ? "bg-[#f7f8f5]/95 backdrop-blur-md shadow-sm py-2 sm:py-2.5"
            : "bg-[#f7f8f5] py-3 sm:py-3.5"
        }`}
      >
        {/* 🧵 Rakhi Garland */}
        {isRakhi && <RakhiThreadGarland className="absolute top-full left-0 right-0 drop-shadow-lg" />}

        {/* 🌿 Toranam Garland */}
        {isVratham && <ToranamGarland className="absolute top-full left-0 right-0 drop-shadow-lg" />}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Title */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-3 text-left group cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Sri Aditya Enterprises"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
              />
              <div>
                <strong className="block text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#142019] group-hover:text-[#1e3b2b] transition-colors leading-tight">
                  Sri Aditya Enterprises
                </strong>
                <small className="block text-[9px] sm:text-[10px] text-[#54665c] tracking-[0.18em] uppercase mt-0.5">
                  ESTABLISHED 1990
                </small>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#54665c]">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="hover:text-[#c99f52] transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Action Button & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[#1e3b2b] text-[#1e3b2b] hover:bg-[#1e3b2b] hover:text-[#faeed4] font-bold text-xs tracking-wider uppercase rounded-xl transition-colors cursor-pointer"
              >
                <span>PLAN YOUR VISIT</span>
                <ArrowUpRight size={14} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-[#142019] rounded-lg hover:bg-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border border-[#e2e7e2] mt-3 py-3 rounded-2xl shadow-xl space-y-1 animate-fade-in">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left px-4 py-2.5 text-xs font-bold text-[#142019] hover:bg-[#f7f8f5] rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-2.5 bg-[#1e3b2b] text-[#faeed4] font-bold text-xs uppercase tracking-wider rounded-xl text-center cursor-pointer shadow-md"
                >
                  Plan Your Visit ↗
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
