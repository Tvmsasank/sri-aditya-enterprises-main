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
  { label: "Collections", href: "#collections" },
  { label: "Our story", href: "#about" },
  { label: "Visit us", href: "#contact" },
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

export const Navbar = () => {
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  interface NavLinkItem {
    label: string;
    href: string;
    external?: boolean;
  }

  const handleNavClick = (link: NavLinkItem) => {
    if (link.external) {
      window.open(link.href, "_blank", "noopener,noreferrer");
    } else {
      scrollToSection(link.href);
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

      {/* Top Notice Bar */}
      <div className="bg-[#263a2b] text-[#f3efe3] py-2 text-center text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase flex items-center justify-center gap-3 px-3">
        <span>FURNITURE FOR THE WAY YOU LIVE • VANASTHALIPURAM, HYDERABAD</span>
        <a
          href="https://www.instagram.com/sri_aditya_enterprises/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 text-[#e5c8a5] hover:underline normal-case tracking-normal text-xs"
        >
          <Instagram size={13} />
          <span>@sri_aditya_enterprises</span>
        </a>
      </div>

      <nav
        className={`w-full transition-all duration-300 border-b border-[#242820]/10 ${
          isScrolled
            ? "bg-[#fffefa]/95 backdrop-blur-md shadow-sm py-2 sm:py-2.5"
            : "bg-[#fffefa] py-3 sm:py-3.5"
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
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 text-left group"
            >
              <img
                src="/logo.png"
                alt="Sri Aditya Enterprises"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
              />
              <div>
                <strong className="block text-xs sm:text-sm font-bold tracking-[0.08em] uppercase text-[#242820] group-hover:text-[#344b39] transition-colors leading-tight">
                  Sri Aditya Enterprises
                </strong>
                <small className="block text-[9px] sm:text-[10px] text-[#6d7168] tracking-[0.18em] uppercase mt-0.5">
                  ESTABLISHED 1990
                </small>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#51564d]">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="hover:text-[#b7834b] transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Action Button & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => scrollToSection("#contact")}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 border border-[#344b39] text-[#344b39] hover:bg-[#344b39] hover:text-white font-bold text-xs tracking-wider uppercase rounded transition-colors"
              >
                <span>PLAN YOUR VISIT</span>
                <ArrowUpRight size={14} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-[#242820] rounded hover:bg-[#f6f4ed]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#fffefa] border-t border-[#e6e4da] mt-3 py-3 rounded-xl shadow-lg space-y-1 animate-fade-in">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left px-4 py-2.5 text-xs font-bold text-[#242820] hover:bg-[#f6f4ed] rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full py-2.5 bg-[#344b39] text-white font-bold text-xs uppercase tracking-wider rounded text-center"
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
