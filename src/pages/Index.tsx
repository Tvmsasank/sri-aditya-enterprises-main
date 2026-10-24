import { useEffect } from "react";
import { RedesignedHome } from "@/components/RedesignedHome";

const Index = () => {
  useEffect(() => {
    document.title = "Sri Aditya Enterprises";
    document.querySelectorAll<HTMLLinkElement>("link[rel*='icon'], link[rel='apple-touch-icon']").forEach((link) => {
      link.href = "/favicon.ico";
    });
    const themeColorMeta = document.querySelector<HTMLMetaElement>("meta[name='theme-color']");
    if (themeColorMeta) themeColorMeta.content = "#a95238";
  }, []);

  return <RedesignedHome />;
};

export default Index;
