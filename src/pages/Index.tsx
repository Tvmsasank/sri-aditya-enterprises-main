import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TricolorParticles } from "@/components/TricolorParticles";
import { isIndependenceDayActive } from "@/lib/festive";

const Index = () => {
  useEffect(() => {
    const isFestive = isIndependenceDayActive();

    // 1. Dynamic Browser Tab Title (Clean without IN / emoji prefix)
    if (isFestive) {
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
      themeColorMeta.content = isFestive ? "#FF9933" : "#3f5f2e";
    }
  }, []);

  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <Contact />
      <Footer />
      <TricolorParticles />
    </main>
  );
};

export default Index;
