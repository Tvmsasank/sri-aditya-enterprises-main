import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const DEFAULT_OWNER_PHONE = "918019404140";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Contact Us", href: "#contact" },
  {
    label: "Customer Reviews",
    href: "https://www.google.com/search?sca_esv=d38753b02e36b910&sxsrf=ANbL-n7UpXh6AcP5FSMWnIyrfco2kWLRTA:1769852308907&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x_mTt28_Ow6qDz_nMhKZX79uvFvRdUKIy3Vvmm4Yu3MlxtcxNR5xtWNqC80H5tKM-bDGUMJw7bbraeRdFFLJNhxNVOlPKG50sgCOX9tr6lVPuQlZLA%3D%3D&q=sri+aditya+enterprises+Reviews&sa=X&ved=2ahUKEwiYpLXRvbWSAxW9rlYBHa8kJaIQ0bkNegQIIRAF&biw=1280&bih=631&dpr=1.5&aic=0",
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
      setIsScrolled(window.scrollY > 30);
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

  const handleCall = () => {
    window.location.href = `tel:+${DEFAULT_OWNER_PHONE}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 🧵 Raksha Bandhan Festive Ribbon */}
      {isRakhi && <RakshaBandhanBanner />}

      {/* 🪔 Varalakshmi Vratham Festive Ribbon */}
      {isVratham && <VaralakshmiBanner />}

      {/* 🇮🇳 Independence Day Festive Ribbon */}
      {isIday && <IndependenceDayBanner />}

      <nav
        className={`w-full transition-all duration-300 relative ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-md border-b border-[#A87D4F]/20 py-2 sm:py-3"
            : "bg-[#FAF8F5]/75 backdrop-blur-sm border-b border-[#A87D4F]/10 py-3 sm:py-4"
        }`}
      >
        {/* 🧵 Rakhi Garland */}
        {isRakhi && <RakhiThreadGarland className="absolute top-full left-0 right-0 drop-shadow-lg" />}

        {/* 🌿 Toranam Garland */}
        {isVratham && <ToranamGarland className="absolute top-full left-0 right-0 drop-shadow-lg" />}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("#home")}
              className="text-left group transition-transform active:scale-95"
            >
              <div className="font-heading text-lg sm:text-2xl font-bold tracking-tight text-[#241C15] group-hover:text-[#A87D4F] transition-colors leading-tight">
                Sri Aditya Enterprises
              </div>
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#7D562E] uppercase">
                ESTD. 1990 • HYDERABAD
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="relative text-sm font-semibold text-[#4A3B2C] hover:text-[#A87D4F] transition-colors py-1 group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A87D4F] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Quick Call Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                onClick={handleCall}
                size="sm"
                className="hidden sm:flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full bg-[#241C15] hover:bg-[#3B2C21] text-amber-50 font-bold text-xs shadow-md transition-transform hover:scale-105 active:scale-95"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>8019404140</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-[#241C15] hover:bg-[#A87D4F]/10 rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </Button>
            </div>
          </div>

          {/* Mobile Dropdown Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#FAF8F5] border-t border-[#A87D4F]/20 mt-3 py-3 rounded-2xl shadow-xl animate-fade-in space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left px-4 py-2.5 text-sm font-bold text-[#241C15] hover:bg-[#F2ECE1] rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={handleCall}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#241C15] text-amber-50 font-bold text-xs shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Store: +91 8019404140</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
