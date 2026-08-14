import React, { useEffect, useRef } from "react";

export const AshokaChakra: React.FC<{ className?: string; size?: number }> = ({
  className = "",
  size = 14,
}) => {
  const center = size / 2;
  const radius = size * 0.42;
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    const rad = (angle * Math.PI) / 180;
    const x = center + radius * Math.cos(rad);
    const y = center + radius * Math.sin(rad);
    return { x, y };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
      }}
      className={`shrink-0 ${className}`}
      aria-label="Ashoka Chakra"
    >
      {/* Outer Ring */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="#000080"
        strokeWidth={Math.max(1, size * 0.065)}
      />
      {/* Inner Hub */}
      <circle cx={center} cy={center} r={Math.max(1, size * 0.12)} fill="#000080" />
      {/* 24 Spokes */}
      {spokes.map((spoke, idx) => (
        <line
          key={idx}
          x1={center}
          y1={center}
          x2={spoke.x}
          y2={spoke.y}
          stroke="#000080"
          strokeWidth={Math.max(0.65, size * 0.045)}
        />
      ))}
    </svg>
  );
};

/**
 * Real Physics-based 60 FPS Cloth Waving Simulation
 * - Stationary metallic pole with golden finial (never moves)
 * - Flag cloth attached at hoist (x=0 firmly fixed)
 * - Harmonic wind sine waves traveling across the cloth to the fly end
 * - Real-time 3D specular highlights & shadows on fabric folds
 */
export const TirangaFlag: React.FC<{
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({ size = "md", className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const config = {
    sm: { width: 110, height: 74, poleHeight: 95, poleWidth: 4, flagW: 90, flagH: 58 },
    md: { width: 145, height: 95, poleHeight: 125, poleWidth: 5, flagW: 120, flagH: 76 },
    lg: { width: 190, height: 125, poleHeight: 165, poleWidth: 6, flagW: 160, flagH: 102 },
  }[size];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const flagW = config.flagW;
    const flagH = config.flagH;
    const stripeH = flagH / 3;

    // Pre-render flat flag texture offscreen for maximum performance
    const offscreen = document.createElement("canvas");
    offscreen.width = flagW;
    offscreen.height = flagH;
    const octx = offscreen.getContext("2d");
    if (!octx) return;

    // Draw Saffron Stripe
    const saffronGrad = octx.createLinearGradient(0, 0, flagW, 0);
    saffronGrad.addColorStop(0, "#FF9933");
    saffronGrad.addColorStop(1, "#FF7700");
    octx.fillStyle = saffronGrad;
    octx.fillRect(0, 0, flagW, stripeH);

    // Draw White Stripe
    octx.fillStyle = "#FFFFFF";
    octx.fillRect(0, stripeH, flagW, stripeH);

    // Draw Green Stripe
    const greenGrad = octx.createLinearGradient(0, 0, flagW, 0);
    greenGrad.addColorStop(0, "#138808");
    greenGrad.addColorStop(1, "#0D6B05");
    octx.fillStyle = greenGrad;
    octx.fillRect(0, stripeH * 2, flagW, stripeH);

    // Draw Ashoka Chakra on White Stripe
    const chakraCenter = { x: flagW / 2, y: flagH / 2 };
    const chakraRadius = stripeH * 0.4;
    octx.strokeStyle = "#000080";
    octx.lineWidth = Math.max(1.2, flagH * 0.018);
    octx.beginPath();
    octx.arc(chakraCenter.x, chakraCenter.y, chakraRadius, 0, Math.PI * 2);
    octx.stroke();

    octx.fillStyle = "#000080";
    octx.beginPath();
    octx.arc(chakraCenter.x, chakraCenter.y, chakraRadius * 0.18, 0, Math.PI * 2);
    octx.fill();

    // 24 Spokes
    for (let i = 0; i < 24; i++) {
      const angle = (i * Math.PI * 2) / 24;
      octx.beginPath();
      octx.moveTo(chakraCenter.x, chakraCenter.y);
      octx.lineTo(
        chakraCenter.x + chakraRadius * Math.cos(angle),
        chakraCenter.y + chakraRadius * Math.sin(angle)
      );
      octx.stroke();
    }

    // Main animation render loop
    const render = () => {
      time += 0.045;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const poleX = 14;
      const poleTopY = 12;
      const flagOriginX = poleX + config.poleWidth - 1;
      const flagOriginY = poleTopY + 4;

      // ==========================================
      // 1. RENDER WAVING CLOTH (Column by Column)
      // ==========================================
      const sliceWidth = 1; // 1px smooth slices
      for (let x = 0; x < flagW; x += sliceWidth) {
        // Natural Wind Wave Formula:
        // Firm attachment at hoist (x=0 => displacement 0)
        // Traveling sine waves increasing in amplitude towards fly end
        const progress = x / flagW;
        const waveScale = Math.pow(progress, 0.85);

        // Multi-frequency harmonic wave
        const wave1 = Math.sin(x * 0.045 - time * 2.2) * 7.5;
        const wave2 = Math.sin(x * 0.09 - time * 3.4) * 3.2;
        const wave3 = Math.cos(x * 0.03 - time * 1.5) * 2.0;
        const totalY = (wave1 + wave2 + wave3) * waveScale;

        // Wave slope for realistic 3D lighting / shadow creases
        const slope = Math.cos(x * 0.045 - time * 2.2) * 0.35 * waveScale;

        const drawX = flagOriginX + x;
        const drawY = flagOriginY + totalY;

        // Draw vertical slice of flag
        ctx.drawImage(
          offscreen,
          x,
          0,
          sliceWidth,
          flagH,
          drawX,
          drawY,
          sliceWidth,
          flagH
        );

        // Dynamic 3D Fabric Crease Lighting (Highlights on crests, shadows in troughs)
        if (slope > 0) {
          // Highlight (light catching the curve)
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.35, slope * 0.9)})`;
          ctx.fillRect(drawX, drawY, sliceWidth, flagH);
        } else {
          // Shadow (fold crease)
          ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(0.35, -slope * 0.8)})`;
          ctx.fillRect(drawX, drawY, sliceWidth, flagH);
        }
      }

      // ==========================================
      // 2. STATIONARY SOLID METALLIC FLAGPOLE
      // (Drawn ONCE, 100% Fixed & Rock-Solid)
      // ==========================================
      // Golden Finial Sphere
      const finialGrad = ctx.createRadialGradient(
        poleX + config.poleWidth / 2 - 1.5,
        poleTopY - 2,
        1,
        poleX + config.poleWidth / 2,
        poleTopY,
        5
      );
      finialGrad.addColorStop(0, "#FEF08A");
      finialGrad.addColorStop(0.5, "#EAB308");
      finialGrad.addColorStop(1, "#854D0E");

      ctx.fillStyle = finialGrad;
      ctx.beginPath();
      ctx.arc(poleX + config.poleWidth / 2, poleTopY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Chrome / Metallic Pole Shaft (Completely stationary)
      const poleGrad = ctx.createLinearGradient(
        poleX,
        0,
        poleX + config.poleWidth,
        0
      );
      poleGrad.addColorStop(0, "#475569");
      poleGrad.addColorStop(0.3, "#E2E8F0");
      poleGrad.addColorStop(0.6, "#FFFFFF");
      poleGrad.addColorStop(0.9, "#64748B");
      poleGrad.addColorStop(1, "#334155");

      ctx.fillStyle = poleGrad;
      ctx.fillRect(
        poleX,
        poleTopY + 3,
        config.poleWidth,
        config.poleHeight - poleTopY
      );

      // Golden Base Stand
      const baseGrad = ctx.createLinearGradient(
        poleX - 6,
        0,
        poleX + config.poleWidth + 6,
        0
      );
      baseGrad.addColorStop(0, "#78350F");
      baseGrad.addColorStop(0.5, "#FBBF24");
      baseGrad.addColorStop(1, "#78350F");
      ctx.fillStyle = baseGrad;
      ctx.beginPath();
      ctx.ellipse(
        poleX + config.poleWidth / 2,
        config.poleHeight - 1,
        8,
        3,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Top & Bottom Hoist Rings / Brass Clips
      ctx.fillStyle = "#F59E0B";
      ctx.fillRect(poleX - 1, flagOriginY, config.poleWidth + 2, 2.5);
      ctx.fillRect(poleX - 1, flagOriginY + flagH - 2.5, config.poleWidth + 2, 2.5);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [config]);

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none cursor-pointer transition-transform hover:scale-105 ${className}`}
      title="National Flag of India (Tiranga) - 80th Independence Day"
    >
      <canvas
        ref={canvasRef}
        width={config.width + 10}
        height={config.height + 15}
        className="w-auto h-24 sm:h-28 md:h-36 drop-shadow-xl"
      />
    </div>
  );
};
