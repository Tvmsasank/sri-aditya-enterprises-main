import { ArrowUp, Instagram, MessageCircle, Phone } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242820] text-[#f4f0e6] pt-14 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <img
              src="/logo.png"
              alt="Sri Aditya Enterprises"
              className="w-11 h-11 object-contain brightness-110"
            />
            <div>
              <strong className="block text-sm sm:text-base font-bold tracking-[0.1em] uppercase text-white">
                Sri Aditya Enterprises
              </strong>
              <small className="block text-[10px] text-[#b7834b] font-semibold tracking-[0.2em] uppercase mt-0.5">
                ESTABLISHED 1990 • HYDERABAD
              </small>
            </div>
          </div>

          {/* Nav / Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium text-white/80">
            <a href="#collections" className="hover:text-[#e5c8a5] transition-colors">
              Collections
            </a>
            <a href="#about" className="hover:text-[#e5c8a5] transition-colors">
              Our Story
            </a>
            <a href="#contact" className="hover:text-[#e5c8a5] transition-colors">
              Visit Showroom
            </a>
            <a
              href="https://www.instagram.com/sri_aditya_enterprises/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#e5c8a5] hover:text-white transition-colors"
            >
              <Instagram size={14} />
              <span>@sri_aditya_enterprises ↗</span>
            </a>
            <a
              href="https://www.google.com/search?q=sri+aditya+enterprises+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e5c8a5] transition-colors"
            >
              Google Reviews ↗
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 text-xs text-white/70 hover:text-white hover:border-white/50 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {currentYear} Sri Aditya Enterprises. All rights reserved. • Opp. Ganesh Temple Road, Phase 1, Vanasthalipuram, Hyderabad
          </p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="tel:+918019404140" className="inline-flex items-center gap-1 hover:text-white">
              <Phone size={13} />
              <span>+91 80194 04140</span>
            </a>
            <span>•</span>
            <a
              href="https://wa.me/918019404140"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#25D366]"
            >
              <MessageCircle size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
