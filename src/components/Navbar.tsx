import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IndependenceDayBanner } from "./IndependenceDayBanner";
import { VaralakshmiBanner } from "./VaralakshmiBanner";
import { RakshaBandhanBanner } from "./RakshaBandhanBanner";
import { ToranamGarland } from "./ToranamGarland";
import { RakhiThreadGarland } from "./RakhiThreadGarland";
import { isIndependenceDayActive, isVaralakshmiVrathamActive, isRakshaBandhanActive } from "@/lib/festive";

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
      setIsScrolled(window.scrollY > 50);
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

      <nav
        className={`w-full transition-all duration-300 relative ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-black/60 backdrop-blur-md"
        }`}
      >
        {/* 🧵 Auspicious Rakhi Silk Thread Garland hanging gracefully at bottom of navbar */}
        {isRakhi && <RakhiThreadGarland className="absolute top-full left-0 right-0 drop-shadow-lg" />}

        {/* 🌿 Auspicious Traditional Mango Leaf & Marigold Toranam hanging gracefully at bottom of navbar */}
        {isVratham && <ToranamGarland className="absolute top-full left-0 right-0 drop-shadow-lg" />}

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20 px-2">
          <button
            onClick={() => scrollToSection("#home")}
            className={`font-heading text-xl md:text-2xl font-bold transition-colors mb-2 text-left ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}
          >
            <div className="font-heading text-xl md:text-2xl font-bold tracking-wide leading-tight">
              Sri Aditya Enterprises
            </div>
            <div className="text-[10px] md:text-xs tracking-widest opacity-80">
              ESTD. 1990
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4 animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  </header>
  );
};
