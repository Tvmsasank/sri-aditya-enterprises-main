import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** A layout-neutral entrance wrapper for non-sticky page sections. */
export const SectionReveal: React.FC<React.PropsWithChildren<{ className?: string; delay?: number }>> = ({
  children,
  className,
  delay = 0,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
