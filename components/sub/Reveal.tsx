"use client";

import React from "react";
import { motion } from "framer-motion";

// Aparece con un leve desplazamiento al entrar en pantalla.
export const revealProps = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

// Guarda la posición del cursor para el brillo de las tarjetas (.spot).
export const trackSpot = (event: React.MouseEvent<HTMLElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
};

const Reveal = ({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div {...revealProps(delay)} className={className}>{children}</motion.div>
);

export default Reveal;
