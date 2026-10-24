import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { TricolorWave } from "./TricolorWave";
import { isIndependenceDayActive, isVaralakshmiVrathamActive, isRakshaBandhanActive } from "@/lib/festive";
import { DivineDivider } from "./DivineDivider";
import { RakhiDivider } from "./RakhiDivider";

const DEFAULT_OWNER_PHONE = "918019404140";

export const Contact = () => {
  const { toast } = useToast();
  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Sanitize owner number (digits only, defaults to store number 918019404140)
    const rawOwner = (import.meta.env.VITE_OWNER_PHONE || DEFAULT_OWNER_PHONE) as string;
    let ownerNumber = String(rawOwner).replace(/\D/g, "");
    if (ownerNumber.length === 10) {
      ownerNumber = `91${ownerNumber}`;
    }

    // Sanitize customer details
    const userName = formData.name.trim();
    const userPhone = formData.phone.trim();
    const userMessage = formData.message.trim();

    const greetingTag = isRakhi
      ? " (🧵 Raksha Bandhan Inquiry)"
      : isVratham
      ? " (🪔 Sri Varalakshmi Vratham Inquiry)"
      : isIday
      ? " (🇮🇳 80th Independence Day Inquiry)"
      : "";
    const whatsappMessage = `Hello Sri Aditya Enterprises${greetingTag},\n\n*Name:* ${userName}\n*Phone:* ${userPhone}\n*Message:* ${userMessage}`;

    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to send your inquiry to Sri Aditya Enterprises.",
    });

    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 md:py-32 bg-[#FAF8F5] border-t border-[#A87D4F]/15 overflow-hidden">
      {/* Flowing Tricolor Wave Watermark Behind Contact Us Form & Section (Independence Day) */}
      {isIday && (
        <>
          <TricolorWave className="absolute top-10 left-0 right-0 w-full" opacity={0.55} />
          <TricolorWave className="absolute bottom-0 left-0 right-0 w-full" flip={true} opacity={0.52} />
        </>
      )}

      {/* Divine Goddess Lakshmi Watermark Accent (Varalakshmi Vratham) */}
      {isVratham && (
        <div className="absolute right-[-6%] md:right-[3%] top-[15%] pointer-events-none opacity-[0.07] select-none">
          <img
            src="/goddess-lakshmi.png"
            alt=""
            className="w-[340px] md:w-[480px] h-auto"
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#A87D4F] mb-2">
            Get in Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#241C15] mb-4">
            Visit Our Showroom
          </h2>
          {isRakhi ? (
            <RakhiDivider />
          ) : isVratham ? (
            <DivineDivider />
          ) : isIday ? (
            <div className="w-28 h-1.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-20 h-1 bg-gradient-to-r from-[#A87D4F] to-[#D4AF37] rounded-full mx-auto mb-6" />
          )}
          <p className="text-[#4A3B2C] max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Ready to furnish your home? Visit our Vanasthalipuram showroom or send us an inquiry directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {/* Visit Store */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#A87D4F]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F2ECE1] border border-[#A87D4F]/30 rounded-xl flex items-center justify-center shrink-0 text-[#A87D4F]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#241C15]">
                    Visit Our Showroom
                  </h3>
                  <p className="text-sm text-[#4A3B2C] mt-0.5">
                    Opp. Ganesh Temple, Phase 1, Vanasthalipuram, Hyderabad, Telangana 500070
                  </p>
                  <a
                    href="https://www.google.com/maps/place/sri+aditya+enterprises/@17.3309764,78.5674217,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcba1025c5dfa69:0x7b20021308763e99!8m2!3d17.3309713!4d78.5699966!16s%2Fg%2F1tm09842"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 bg-[#241C15] text-amber-50 font-bold text-xs rounded-xl hover:bg-[#3B2C21] transition-transform hover:scale-105 active:scale-95 shadow-sm"
                  >
                    📍 Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#A87D4F]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F2ECE1] border border-[#A87D4F]/30 rounded-xl flex items-center justify-center shrink-0 text-[#A87D4F]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#241C15]">
                    Call Store Directly
                  </h3>
                  <a
                    href="tel:+918019404140"
                    className="text-base font-bold text-[#A87D4F] hover:underline"
                  >
                    +91 8019404140
                  </a>
                  <p className="text-xs text-[#7D562E] mt-0.5">
                    Mon - Sun inquiries welcome
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-[#A87D4F]/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#F2ECE1] border border-[#A87D4F]/30 rounded-xl flex items-center justify-center shrink-0 text-[#A87D4F]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#241C15]">
                    Showroom Timings
                  </h3>
                  <p className="text-sm text-[#4A3B2C] mt-0.5">
                    <span className="font-bold text-[#241C15]">Tuesday – Sunday:</span> 09:30 AM – 09:00 PM
                    <br />
                    <span className="text-amber-700 font-semibold text-xs">Closed on Monday</span>
                  </p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-white p-6 rounded-2xl border border-[#A87D4F]/20 shadow-sm text-center">
              <h3 className="font-heading text-lg font-bold text-[#241C15] mb-1">
                Find Us on Google Maps
              </h3>
              <p className="text-xs text-[#7D562E] mb-4">
                Scan the QR code to open directions to Sri Aditya Enterprises
              </p>
              <img
                src="/sae-qr.png"
                alt="Sri Aditya Enterprises Google QR Code"
                className="w-32 h-32 mx-auto rounded-lg border border-[#A87D4F]/20 p-1"
              />
            </div>
          </div>

          {/* RIGHT COLUMN – CONTACT FORM */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#A87D4F]/20 shadow-md">
            <h3 className="font-heading text-2xl font-bold text-[#241C15] mb-2">
              Send an Instant Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#7D562E] mb-6">
              Fill in your details and send directly to our store WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#241C15] mb-1.5 block uppercase tracking-wider">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-xl border-[#A87D4F]/30 focus:border-[#A87D4F] bg-[#FAF8F5]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#241C15] mb-1.5 block uppercase tracking-wider">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="rounded-xl border-[#A87D4F]/30 focus:border-[#A87D4F] bg-[#FAF8F5]"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#241C15] mb-1.5 block uppercase tracking-wider">
                  Inquiry Message
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us what furniture piece or custom design you're looking for..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="rounded-xl border-[#A87D4F]/30 focus:border-[#A87D4F] bg-[#FAF8F5]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 rounded-xl bg-[#241C15] hover:bg-[#3B2C21] text-amber-50 font-bold text-base shadow-lg transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Send WhatsApp Inquiry</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
      {/* Partners & Payments */}
      <div className="mt-24 space-y-20">

        {/* Our Partners */}
        <div className="text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Partners
          </h3>
          {isVratham ? (
            <DivineDivider className="mb-10" />
          ) : isIday ? (
            <div className="w-24 h-1.5 rounded-full mx-auto mb-10 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-20 h-1 bg-accent mx-auto mb-10" />
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 items-center max-w-5xl mx-auto relative z-10">
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
                className="relative z-10 flex items-center justify-center p-4 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 object-contain hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Payments */}
        <div className="text-center relative z-10">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            We Accept
          </h3>
          {isVratham ? (
            <DivineDivider className="mb-10" />
          ) : isIday ? (
            <div className="w-24 h-1.5 rounded-full mx-auto mb-10 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-20 h-1 bg-accent mx-auto mb-10" />
          )}

          <div className="flex flex-wrap justify-center gap-3 items-center max-w-3xl mx-auto relative z-10">
            {[
              { name: "Bajaj Finserv", logo: "/payments/bajaj-finserv.png" },
              { name: "Master Cards", logo: "/payments/master-cards.png" },
              { name: "RuPay Cards", logo: "/payments/rupay-cards.png"},
              { name: "VISA Cards", logo: "/payments/visa-cards.png"},
              { name: "UPI Payments", logo: "/payments/upi.png" },
            ].map((payment) => (
              <div
                key={payment.name}
                className="relative z-10 flex items-center justify-center p-4 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition"
              >
                <img
                  src={payment.logo}
                  alt={payment.name}
                  className="h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
