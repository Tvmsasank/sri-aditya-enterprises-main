import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { isIndependenceDayActive, isVaralakshmiVrathamActive, isRakshaBandhanActive } from "@/lib/festive";

const DEFAULT_OWNER_PHONE = "918019404140";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleWhatsAppChat = () => {
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      "Hello Sri Aditya Enterprises 👋, I would like to visit your showroom / inquire about furniture."
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) ownerNumber = `91${ownerNumber}`;

    const whatsappMessage = `Hello Sri Aditya Enterprises 👋,\n\n*Name:* ${formData.name.trim()}\n*Phone:* ${formData.phone.trim()}\n*Message:* ${formData.message.trim()}`;
    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp to send your inquiry directly to our store.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#f6f4ed] border-t border-[#e6e4da]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#b7834b]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Come by and see for yourself</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#242820] leading-tight">
              Your next favourite piece<br />
              <span className="italic font-normal">is closer than you think.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6d7168] leading-relaxed max-w-lg">
              Visit our showroom in Vanasthalipuram. Browse the collections, feel the textures, talk through what you need, and find something that feels right.
            </p>

            {/* Detail Grid */}
            <div className="grid grid-cols-2 gap-4 py-2 border-y border-[#e6e4da]">
              <div>
                <b className="block text-[10px] uppercase font-bold tracking-[0.14em] text-[#344b39] mb-1">
                  Find us
                </b>
                <span className="text-xs sm:text-sm text-[#55594f]">
                  Opp. Ganesh Temple, Phase 1, Vanasthalipuram, Hyderabad
                </span>
              </div>
              <div>
                <b className="block text-[10px] uppercase font-bold tracking-[0.14em] text-[#344b39] mb-1">
                  Call the showroom
                </b>
                <a
                  href="tel:+918019404140"
                  className="text-xs sm:text-sm font-bold text-[#344b39] hover:underline"
                >
                  +91 80194 04140
                </a>
              </div>
              <div>
                <b className="block text-[10px] uppercase font-bold tracking-[0.14em] text-[#344b39] mb-1">
                  We're open
                </b>
                <span className="text-xs sm:text-sm text-[#55594f]">
                  Tue–Sun · 9:30 am–9:00 pm
                </span>
              </div>
              <div>
                <b className="block text-[10px] uppercase font-bold tracking-[0.14em] text-[#344b39] mb-1">
                  Closed
                </b>
                <span className="text-xs sm:text-sm text-amber-700 font-semibold">
                  Mondays
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.google.com/maps/place/sri+aditya+enterprises/@17.3309764,78.5674217,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcba1025c5dfa69:0x7b20021308763e99!8m2!3d17.3309713!4d78.5699966!16s%2Fg%2F1tm09842"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-lg bg-[#344b39] hover:bg-[#263a2b] text-[#f3efe3] font-bold text-xs tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-md"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight size={14} />
              </a>
              <button
                onClick={handleWhatsAppChat}
                className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-lg border border-[#c7c8bf] hover:border-[#344b39] text-[#344b39] font-bold text-xs tracking-wider uppercase transition-colors"
              >
                <MessageCircle size={15} />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Map & Inquiry Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Map Card */}
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#e6e4da] p-6 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-[#f6f4ed] text-[#344b39] flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#242820] mb-1">
                Sri Aditya Enterprises
              </h3>
              <p className="text-xs text-[#6d7168] mb-4">
                Opp. Ganesh Temple Road, Phase 1, Vanasthalipuram, Hyderabad, Telangana 500070
              </p>
              <img
                src="/sae-qr.png"
                alt="QR Code for Google Maps"
                className="w-28 h-28 mx-auto rounded-lg border border-[#e6e4da] p-1 mb-2"
              />
              <span className="text-[10px] text-[#73766d]">Scan to open Google Maps route</span>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-[#fffefa] p-6 rounded-2xl border border-[#e6e4da] shadow-sm">
              <h4 className="font-heading text-lg font-bold text-[#242820] mb-3">
                Send a Quick Inquiry
              </h4>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg border-[#e6e4da] bg-[#f6f4ed] text-xs h-10"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-lg border-[#e6e4da] bg-[#f6f4ed] text-xs h-10"
                  required
                />
                <Textarea
                  rows={3}
                  placeholder="What furniture are you looking for?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-lg border-[#e6e4da] bg-[#f6f4ed] text-xs"
                  required
                />
                <Button
                  type="submit"
                  className="w-full py-2.5 bg-[#344b39] hover:bg-[#263a2b] text-white font-bold text-xs uppercase tracking-wider rounded-lg"
                >
                  <Send className="w-3.5 h-3.5 mr-1.5" />
                  <span>Send via WhatsApp</span>
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Partners Logos */}
        <div className="pt-10 border-t border-[#e6e4da] text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b7834b] mb-6">
            Authorized Brands & Partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 items-center max-w-5xl mx-auto">
            {[
              { name: "Sleepwell", logo: "/partners/sleepwell.png" },
              { name: "Cello Wim Plast", logo: "/partners/cello.png" },
              { name: "Prima Plastics", logo: "/partners/prima.png" },
              { name: "Godrej", logo: "/partners/godrej.png" },
              { name: "Mittals Fabrics", logo: "/partners/mittal.png" },
              { name: "Darpan Fabrics", logo: "/partners/darpan.png" },
              { name: "Creations Fabrics", logo: "/partners/creation.png" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-3 bg-white rounded-lg border border-[#e6e4da] shadow-sm"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-9 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
