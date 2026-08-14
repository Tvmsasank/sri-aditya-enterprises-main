import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { TricolorWave } from "./TricolorWave";
import { isIndependenceDayActive } from "@/lib/festive";

const DEFAULT_OWNER_PHONE = "918019404140";

export const Contact = () => {
  const { toast } = useToast();
  const isFestive = isIndependenceDayActive();
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

    const greetingTag = isFestive ? " (🇮🇳 80th Independence Day Inquiry)" : "";
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
    <section id="contact" className="relative py-20 md:py-28 bg-background overflow-hidden">
      {/* Flowing Tricolor Wave Watermark Behind Contact Us Form & Section */}
      {isFestive && (
        <>
          <TricolorWave className="absolute top-10 left-0 right-0 w-full" opacity={0.55} />
          <TricolorWave className="absolute bottom-0 left-0 right-0 w-full" flip={true} opacity={0.52} />
        </>
      )}

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          {isFestive ? (
            <div className="w-28 h-1.5 rounded-full mx-auto mb-6 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          )}
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your space? Get in touch with us today.
            Please visit our store.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT COLUMN */}
          <div className="space-y-10">

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Visit Store */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow max-w-md">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Visit Our Store
                  </h3>
                  <p className="text-muted-foreground">
                    Vanasthalipuram, Hyderabad, Telangana
                  </p>
                  <a
                    href="https://www.google.com/maps/place/sri+aditya+enterprises/@17.3309764,78.5674217,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcba1025c5dfa69:0x7b20021308763e99!8m2!3d17.3309713!4d78.5699966!16s%2Fg%2F1tm09842"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    📍 View on Google Maps
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Call Us
                  </h3>
                  <p className="text-muted-foreground">+91 8019404140</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    Working Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Tuesday – Sunday: 09:30 AM – 09:00 PM
                    <br />
                    Closed on Monday
                  </p>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-card p-6 rounded-xl border border-border text-center max-w-md mx-auto">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                Find Us on Google
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Scan the QR code to view Sri Aditya Enterprises
              </p>
              <img
                src="/sae-qr.png"
                alt="Sri Aditya Enterprises Google QR Code"
                className="w-32 h-32 mx-auto"
              />
            </div>
          </div>

          {/* RIGHT COLUMN – CONTACT FORM */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
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
          {isFestive ? (
            <div className="w-24 h-1.5 rounded-full mx-auto mb-10 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-20 h-1 bg-accent mx-auto mb-10" />
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 items-center max-w-5xl mx-auto">
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
                className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition"
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
        <div className="text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            We Accept
          </h3>
          {isFestive ? (
            <div className="w-24 h-1.5 rounded-full mx-auto mb-10 bg-gradient-to-r from-[#FF9933] via-slate-300 to-[#138808] shadow-[0_0_12px_rgba(255,153,51,0.3)]" />
          ) : (
            <div className="w-20 h-1 bg-accent mx-auto mb-10" />
          )}

          <div className="flex flex-wrap justify-center gap-3 items-center max-w-3xl mx-auto">
            {[
              { name: "Bajaj Finserv", logo: "/payments/bajaj-finserv.png" },
              { name: "Master Cards", logo: "/payments/master-cards.png" },
              { name: "RuPay Cards", logo: "/payments/rupay-cards.png"},
              { name: "VISA Cards", logo: "/payments/visa-cards.png"},
              { name: "UPI Payments", logo: "/payments/upi.png" },
            ].map((payment) => (
              <div
                key={payment.name}
                className="flex items-center justify-center p-4 bg-card rounded-lg border border-border hover:shadow-md transition"
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
