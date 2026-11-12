import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Editorial reveal wrapper for ordinary page sections.
 * Kept layout-neutral so existing sticky scenes, anchors and component state
 * continue to behave exactly as before.
 */
export const SectionReveal: React.FC<React.PropsWithChildren<{ className?: string; delay?: number }>> = ({
  children,
  className,
  delay = 0,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      data-sae-reveal="section"
      initial={reduceMotion ? false : { opacity: 0, y: 54, scale: 0.985, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -7% 0px" }}
      transition={{
        duration: reduceMotion ? 0 : 1.05,
        delay: reduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
