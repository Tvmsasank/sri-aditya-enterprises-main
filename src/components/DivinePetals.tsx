import React, { useEffect, useRef } from "react";
import { isVaralakshmiVrathamActive } from "@/lib/festive";

interface SacredFlowerParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  spinSpeed: number;
  opacity: number;
  type: "lotus" | "redRose" | "marigoldYellow" | "marigoldOrange" | "jasmine" | "parijat" | "hibiscus" | "goldDust";
}

export const DivinePetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isVaralakshmiVrathamActive()) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = window.innerWidth < 768 ? 24 : 45;
    const types: SacredFlowerParticle["type"][] = [
      "lotus",
      "redRose",
      "marigoldYellow",
      "marigoldOrange",
      "jasmine",
      "parijat",
      "hibiscus",
      "goldDust",
    ];

    const particles: SacredFlowerParticle[] = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 9 + 7,
      speedY: Math.random() * 0.75 + 0.35,
      speedX: (Math.random() - 0.5) * 0.5,
      angle: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.025,
      opacity: Math.random() * 0.45 + 0.45,
      type: types[Math.floor(Math.random() * types.length)],
    }));

    // Helper: Draw 5-petal star flower (Jasmine / Mogra)
    const drawJasmine = (size: number) => {
      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / 5);
        ctx.beginPath();
        ctx.ellipse(0, -size * 0.6, size * 0.3, size * 0.6, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFDF5";
        ctx.fill();
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = "#FDE047";
      ctx.fill();
    };

    // Helper: Draw Parijat / Harsingar (White petals with bright orange center stem)
    const drawParijat = (size: number) => {
      for (let i = 0; i < 6; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI * 2) / 6);
        ctx.beginPath();
        ctx.ellipse(0, -size * 0.55, size * 0.25, size * 0.5, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.restore();
      }
      // Orange Stem Core
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.22, 0, Math.PI * 2);
      ctx.fillStyle = "#FF5500";
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.angle * 1.5) * 0.45 + p.speedX;
        p.angle += p.spinSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;

        if (p.type === "goldDust") {
          // Twinkling Divine Golden Temple Sparkle
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size / 2);
          grad.addColorStop(0, "#FFFFFF");
          grad.addColorStop(0.3, "#FFE066");
          grad.addColorStop(0.8, "#FF9900");
          grad.addColorStop(1, "rgba(255, 153, 0, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "jasmine") {
          drawJasmine(p.size);
        } else if (p.type === "parijat") {
          drawParijat(p.size);
        } else if (p.type === "lotus") {
          // Sacred Pink Lotus Petal (తామర పువ్వు రేకు)
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.75, -p.size * 0.5, p.size * 0.65, p.size * 0.5, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.65, p.size * 0.5, -p.size * 0.75, -p.size * 0.5, 0, -p.size);
          ctx.closePath();
          const lotusGrad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          lotusGrad.addColorStop(0, "#FFCCD5");
          lotusGrad.addColorStop(0.5, "#FF4D6D");
          lotusGrad.addColorStop(1, "#C9184A");
          ctx.fillStyle = lotusGrad;
          ctx.fill();
        } else if (p.type === "redRose") {
          // Crimson Red Rose Petal (ఎర్రటి గులాబీ రేకు)
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.9);
          ctx.bezierCurveTo(p.size * 0.85, -p.size * 0.4, p.size * 0.8, p.size * 0.6, 0, p.size * 0.9);
          ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.6, -p.size * 0.85, -p.size * 0.4, 0, -p.size * 0.9);
          ctx.closePath();
          const roseGrad = ctx.createLinearGradient(0, -p.size, 0, p.size);
          roseGrad.addColorStop(0, "#FF2A2A");
          roseGrad.addColorStop(0.6, "#D90429");
          roseGrad.addColorStop(1, "#7A0010");
          ctx.fillStyle = roseGrad;
          ctx.fill();
        } else if (p.type === "hibiscus") {
          // Sacred Red Hibiscus Petal (మందార రేకు)
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.3, p.size * 0.7, p.size * 0.7, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.7, -p.size * 0.9, -p.size * 0.3, 0, -p.size);
          ctx.closePath();
          ctx.fillStyle = "#E11D48";
          ctx.fill();
        } else {
          // Marigold Yellow or Orange Petal (బంతిపూల రేకు)
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.8);
          ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.4, p.size * 0.5, p.size * 0.5, 0, p.size * 0.8);
          ctx.bezierCurveTo(-p.size * 0.5, p.size * 0.5, -p.size * 0.6, -p.size * 0.4, 0, -p.size * 0.8);
          ctx.closePath();
          ctx.fillStyle = p.type === "marigoldYellow" ? "#FFC700" : "#FF7700";
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVaralakshmiVrathamActive()) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
      aria-hidden="true"
    />
  );
};
