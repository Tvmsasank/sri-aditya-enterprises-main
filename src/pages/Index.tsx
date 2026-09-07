import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TricolorParticles } from "@/components/TricolorParticles";
import { DivinePetals } from "@/components/DivinePetals";
import { RakhiParticles } from "@/components/RakhiParticles";
import { SleepwellFloatingBadge } from "@/components/SleepwellFloatingBadge";
import {
  isIndependenceDayActive,
  isVaralakshmiVrathamActive,
  isRakshaBandhanActive,
  isSleepwellFestivalActive,
} from "@/lib/festive";

const Index = () => {
  const isSleepwell = isSleepwellFestivalActive();
  const isRakhi = isRakshaBandhanActive();
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  useEffect(() => {
    // 1. Browser Tab Title is strictly & permanently "Sri Aditya Enterprises"
    document.title = "Sri Aditya Enterprises";

    // 2. Keep the original official SAE logo in the browser tab favicon
    const iconLinks = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon'], link[rel='apple-touch-icon']");
    iconLinks.forEach((link) => {
      link.href = "/favicon.ico";
    });

    // 3. Dynamic Mobile Browser Header Color
    const themeColorMeta = document.querySelector<HTMLMetaElement>("meta[name='theme-color']");
    if (themeColorMeta) {
      themeColorMeta.content = isSleepwell
        ? "#002244"
        : isRakhi
        ? "#800020"
        : isVratham
        ? "#800020"
        : isIday
        ? "#FF9933"
        : "#3f5f2e";
    }
  }, [isSleepwell, isRakhi, isIday, isVratham]);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Contact />
      <Footer />

      {/* Floating Offer Pill & Interactive Modal Popup */}
      {isSleepwell && <SleepwellFloatingBadge />}

      {/* Background Floating Particles for Active Festival */}
      {isRakhi && <RakhiParticles />}
      {isVratham && <DivinePetals />}
      {isIday && <TricolorParticles />}
    </main>
  );
};

export default Index;
