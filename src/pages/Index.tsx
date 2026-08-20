import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TricolorParticles } from "@/components/TricolorParticles";
import { DivinePetals } from "@/components/DivinePetals";
import { isIndependenceDayActive, isVaralakshmiVrathamActive } from "@/lib/festive";

const Index = () => {
  const isIday = isIndependenceDayActive();
  const isVratham = isVaralakshmiVrathamActive();

  useEffect(() => {
    // 1. Dynamic Browser Tab Title
    if (isVratham) {
      document.title = "Sri Aditya Enterprises | శ్రీ వరలక్ష్మీ వ్రత శుభాకాంక్షలు";
    } else if (isIday) {
      document.title = "Sri Aditya Enterprises | 80th Independence Day Special";
    } else {
      document.title = "Sri Aditya Enterprises | Premier Furniture Store in Hyderabad";
    }

    // 2. Keep the original official SAE logo in the browser tab favicon
    const iconLinks = document.querySelectorAll<HTMLLinkElement>("link[rel*='icon'], link[rel='apple-touch-icon']");
    iconLinks.forEach((link) => {
      link.href = "/favicon.ico";
    });

    // 3. Dynamic Mobile Browser Header Color
    const themeColorMeta = document.querySelector<HTMLMetaElement>("meta[name='theme-color']");
    if (themeColorMeta) {
      themeColorMeta.content = isVratham ? "#800020" : isIday ? "#FF9933" : "#3f5f2e";
    }
  }, [isIday, isVratham]);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Contact />
      <Footer />
      {/* Background Floating Particles for Active Festival */}
      {isVratham && <DivinePetals />}
      {isIday && <TricolorParticles />}
    </main>
  );
};

export default Index;
