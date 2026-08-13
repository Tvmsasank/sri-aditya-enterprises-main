import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Collections } from "@/components/Collections";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { TricolorParticles } from "@/components/TricolorParticles";

const Index = () => {
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
