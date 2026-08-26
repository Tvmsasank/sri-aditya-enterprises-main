import React, { useEffect, useRef } from "react";
import { isRakshaBandhanActive } from "@/lib/festive";

interface RakhiParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  spinSpeed: number;
  opacity: number;
  type: "goldBead" | "rubyBead" | "rosePetal" | "silkRibbon" | "sparkle";
}

export const RakhiParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isRakshaBandhanActive()) return;

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

    const particleCount = window.innerWidth < 768 ? 22 : 40;
    const types: RakhiParticle["type"][] = [
      "goldBead",
      "rubyBead",
      "rosePetal",
      "silkRibbon",
      "sparkle",
    ];

    const particles: RakhiParticle[] = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 5,
      speedY: Math.random() * 0.7 + 0.35,
      speedX: (Math.random() - 0.5) * 0.5,
      angle: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.03,
      opacity: Math.random() * 0.45 + 0.45,
      type: types[Math.floor(Math.random() * types.length)],
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.angle * 1.5) * 0.4 + p.speedX;
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

        if (p.type === "sparkle") {
          // Golden Sparkle
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size / 2);
          grad.addColorStop(0, "#FFFFFF");
          grad.addColorStop(0.4, "#FFD700");
          grad.addColorStop(1, "rgba(255, 215, 0, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "goldBead") {
          // Golden Pearl Bead
          const grad = ctx.createRadialGradient(-p.size * 0.2, -p.size * 0.2, 1, 0, 0, p.size);
          grad.addColorStop(0, "#FFF7C2");
          grad.addColorStop(0.6, "#E5B32A");
          grad.addColorStop(1, "#8A5A00");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "rubyBead") {
          // Ruby Gemstone Bead
          const grad = ctx.createRadialGradient(-p.size * 0.2, -p.size * 0.2, 1, 0, 0, p.size);
          grad.addColorStop(0, "#FF4D6D");
          grad.addColorStop(0.6, "#C9184A");
          grad.addColorStop(1, "#590214");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "rosePetal") {
          // Rose Petal
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.75, -p.size * 0.5, p.size * 0.65, p.size * 0.5, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.65, p.size * 0.5, -p.size * 0.75, -p.size * 0.5, 0, -p.size);
          ctx.closePath();
          ctx.fillStyle = "#FF2A55";
          ctx.fill();
        } else {
          // Silk Ribbon Thread
          ctx.beginPath();
          ctx.moveTo(-p.size, -p.size * 0.5);
          ctx.quadraticCurveTo(0, p.size * 0.5, p.size, -p.size * 0.5);
          ctx.strokeStyle = "#FFD700";
          ctx.lineWidth = 2;
          ctx.stroke();
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

  if (!isRakshaBandhanActive()) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
      aria-hidden="true"
    />
  );
};
