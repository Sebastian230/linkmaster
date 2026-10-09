"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import Reveal, { revealProps } from "../sub/Reveal";

const groups = [
  {
    es: "Desarrollo web",
    en: "Web development",
    items: [["Next.js"], ["React"], ["TypeScript"], ["Tailwind CSS"], ["Three.js"]],
  },
  {
    es: "Backend y datos",
    en: "Backend and data",
    items: [["Node.js"], ["Express"], ["Prisma"], ["MySQL / MariaDB"], ["PostgreSQL"], ["MongoDB"]],
  },
  {
    es: "IA y automatización",
    en: "AI and automation",
    items: [["Agentes de IA", "AI agents"], ["Bots de WhatsApp", "WhatsApp bots"], ["APIs e integraciones", "APIs and integrations"], ["Mercado Pago"]],
  },
  {
    es: "Redes e infraestructura",
    en: "Networks and infrastructure",
    items: [["Linux"], ["TCP/IP"], ["Wi-Fi y cableado", "Wi-Fi and cabling"], ["Servidores", "Servers"], ["Firewall"], ["Docker"]],
  },
  {
    es: "Hardware",
    en: "Hardware",
    items: [["Armado de PC", "PC builds"], ["Selección de componentes", "Component selection"], ["Diagnóstico y mantenimiento", "Diagnostics and maintenance"]],
  },
  {
    es: "Diseño e impresión 3D",
    en: "Design and 3D printing",
    items: [["Modelado 3D", "3D modelling"], ["Impresión FDM", "FDM printing"], ["Archivos STL", "STL files"], ["Figma"]],
  },
];

const Tech = () => {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <section id="tech" className="relative z-40 mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24">
      <Reveal className="mb-9 max-w-3xl sm:mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-violet-300">{es ? "Tecnologías" : "Technologies"}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{es ? "Lo que manejamos." : "What we work with."}</h2>
      </Reveal>

      <dl className="border-t border-white/10">
        {groups.map((group, index) => (
          <motion.div key={group.es} {...revealProps(index * 0.06)} className="tech-row grid gap-4 border-b border-white/10 py-6 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8 sm:py-7">
            <dt className="flex items-baseline gap-4 text-base font-medium text-white sm:text-lg">
              <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">0{index + 1}</span>
              {es ? group.es : group.en}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map(([itemEs, itemEn]) => (
                <span key={itemEs} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-slate-300 transition hover:border-violet-300/50 hover:text-white">
                  {es ? itemEs : (itemEn ?? itemEs)}
                </span>
              ))}
            </dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
};

export default Tech;
