"use client";

import React from "react";
import { BiBot, BiChip, BiCodeAlt, BiCube, BiNetworkChart, BiStore } from "react-icons/bi";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import Reveal, { revealProps, trackSpot } from "../sub/Reveal";

const services = [
  {
    icon: BiCodeAlt,
    es: { title: "Software a medida", text: "Sistemas, paneles de gestión y automatizaciones pensados para tu negocio." },
    en: { title: "Custom software", text: "Systems, management dashboards and automations built around your business." },
  },
  {
    icon: BiStore,
    es: { title: "Sitios y tiendas online", text: "Páginas, e-commerce y portfolios rápidos, con panel para que los manejes vos." },
    en: { title: "Websites and online stores", text: "Fast websites, e-commerce and portfolios, with a dashboard you manage yourself." },
  },
  {
    icon: BiBot,
    es: { title: "Agentes y bots", text: "Agentes de IA y bots de WhatsApp que atienden, venden y agendan por vos." },
    en: { title: "Agents and bots", text: "AI agents and WhatsApp bots that answer, sell and schedule for you." },
  },
  {
    icon: BiNetworkChart,
    es: { title: "Redes y soporte", text: "Cableado, Wi-Fi, servidores y soporte informático para casas y empresas." },
    en: { title: "Networks and support", text: "Cabling, Wi-Fi, servers and IT support for homes and businesses." },
  },
  {
    icon: BiChip,
    es: { title: "Armado de PC", text: "Elegimos los componentes según tu uso y presupuesto, armamos y probamos el equipo." },
    en: { title: "PC builds", text: "We pick the parts for your use and budget, then build and test the machine." },
  },
  {
    icon: BiCube,
    es: { title: "Impresión 3D y diseño", text: "Diseñamos la pieza y la imprimimos, desde una unidad hasta tiradas grandes." },
    en: { title: "3D printing and design", text: "We design the part and print it, from a single unit to large runs." },
  },
];

const Services = () => {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <section id="services" className="relative z-40 mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24">
      <Reveal className="mb-9 max-w-3xl sm:mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-violet-300">{es ? "Servicios" : "Services"}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{es ? "Todo lo que hacemos." : "Everything we do."}</h2>
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-3">
        {services.map(({ icon: Icon, ...service }, index) => {
          const copy = es ? service.es : service.en;
          return (
            <motion.article key={copy.title} {...revealProps(index * 0.07)} onMouseMove={trackSpot} className="spot group bg-[#060606] p-6 transition-colors duration-300 hover:bg-[#0d0d0d] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="icon-tile"><Icon aria-hidden="true" /></span>
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{copy.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400 sm:text-base">{copy.text}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
