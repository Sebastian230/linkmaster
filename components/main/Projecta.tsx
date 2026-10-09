"use client";

import React, { useState } from "react";
import { BiBot, BiSupport, BiStore, BiCalendarCheck, BiGitBranch, BiData } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import ProjectCard from "../sub/ProjectCard";
import { useLanguage } from "../LanguageProvider";
import Reveal, { trackSpot } from "../sub/Reveal";

type Category = "projects" | "agents" | "whatsapp" | "integrated";

const tabs: { id: Category; label: string; shortLabel: string }[] = [
  { id: "projects", label: "Proyectos", shortLabel: "Proyectos" },
  { id: "agents", label: "Agentes", shortLabel: "Agentes" },
  { id: "whatsapp", label: "Bots de WhatsApp", shortLabel: "Bots WPP" },
  { id: "integrated", label: "Bots + agentes integrados", shortLabel: "Bots + agentes" },
];

type Project = { href?: string; tags: string[]; es: { kind: string; title: string; description: string }; en: { kind: string; title: string; description: string } };

const projects: Project[] = [
  {
    href: "https://vetusmoon.com",
    tags: ["Next.js", "Mercado Pago", "E-commerce"],
    es: { kind: "Tienda online", title: "Vetusmoon", description: "Tienda de componentes de PC e impresiones 3D, con armador de PC, buscador y pago por Mercado Pago." },
    en: { kind: "Online store", title: "Vetusmoon", description: "Store for PC components and 3D prints, with a PC builder, search and Mercado Pago checkout." },
  },
  {
    tags: ["Next.js", "Prisma", "MySQL"],
    es: { kind: "Panel de gestión", title: "Panel de la tienda", description: "Administración de productos, stock, precios, colores y pedidos de la tienda desde un solo lugar." },
    en: { kind: "Dashboard", title: "Store dashboard", description: "Manage the store's products, stock, prices, colours and orders from a single place." },
  },
  {
    tags: ["Next.js", "Scroll", "Web"],
    es: { kind: "Sitio web", title: "Owners", description: "Sitio de scroll continuo para recorrer contenido sin cortes, pensado primero para el celular." },
    en: { kind: "Website", title: "Owners", description: "Endless-scroll site for browsing content without breaks, designed mobile first." },
  },
  {
    tags: ["Three.js", "3D", "Web"],
    es: { kind: "Portfolio", title: "Portfolio 3D interactivo", description: "Portfolio en forma de juego: un escenario 3D con modelos propios que se recorre desde el navegador." },
    en: { kind: "Portfolio", title: "Interactive 3D portfolio", description: "A portfolio as a game: a 3D scene with custom models you explore from the browser." },
  },
  {
    tags: ["Django", "MariaDB", "Datos"],
    es: { kind: "Aplicación web", title: "Longbox", description: "Visor de cómics por colección, con la ficha de cada número, sus portadas variantes y la evolución de precios." },
    en: { kind: "Web app", title: "Longbox", description: "Comic viewer by collection, with a page per issue, its variant covers and price history." },
  },
  {
    tags: ["Next.js", "MariaDB", "Impresión 3D"],
    es: { kind: "Sistema a medida", title: "Catálogo de impresión 3D", description: "Catálogo, cálculo de precios y analítica de piezas impresas en 3D, alimentado solo desde la carpeta de modelos." },
    en: { kind: "Custom system", title: "3D printing catalogue", description: "Catalogue, pricing and analytics for 3D-printed parts, fed automatically from the models folder." },
  },
  {
    tags: ["WhatsApp", "Bot", "Atención"],
    es: { kind: "Bot", title: "Bot de WhatsApp para empresa", description: "Bot que atiende las consultas de los clientes de una empresa por WhatsApp y deriva los casos que lo necesitan." },
    en: { kind: "Bot", title: "WhatsApp bot for a company", description: "A bot that answers a company's customer enquiries on WhatsApp and routes the cases that need it." },
  },
  {
    tags: ["Redes", "Estudio", "Web"],
    es: { kind: "Herramienta", title: "Cubitos Network+", description: "Página de repaso para estudiar redes, con los temas partidos en bloques cortos para practicar." },
    en: { kind: "Tool", title: "Cubitos Network+", description: "A revision page for studying networking, with topics split into short practice blocks." },
  },
  {
    tags: ["Linux", "VLAN", "Firewall"],
    es: { kind: "Infraestructura", title: "Servidor y red propia", description: "Servidor con máquinas virtuales, red separada en VLAN, firewall, copias de seguridad y agentes de IA locales." },
    en: { kind: "Infrastructure", title: "Own server and network", description: "A server with virtual machines, a VLAN-segmented network, firewall, backups and local AI agents." },
  },
];

const solutions = {
  agents: [
    { icon: BiBot, title: "Agente de atención", description: "Responde consultas frecuentes, comprende el contexto y deriva los casos que necesitan atención humana.", tags: ["IA", "Soporte", "24/7"] },
    { icon: BiStore, title: "Agente comercial", description: "Califica contactos, recomienda servicios y acompaña cada oportunidad durante el proceso de venta.", tags: ["Ventas", "Leads", "CRM"] },
    { icon: BiData, title: "Agente de operaciones", description: "Consulta información interna, prepara reportes y automatiza tareas repetitivas del equipo.", tags: ["Datos", "Reportes", "Automatización"] },
    { icon: HiOutlineSparkles, title: "Asistente personalizado", description: "Un agente entrenado con la información, el tono y los procesos específicos de tu negocio.", tags: ["Personalizado", "Conocimiento", "IA"] },
  ],
  whatsapp: [
    { icon: FaWhatsapp, title: "Bot de atención por WhatsApp", description: "Atiende preguntas, comparte información y deriva conversaciones sin sacar al cliente de WhatsApp.", tags: ["WhatsApp", "Atención", "24/7"] },
    { icon: BiCalendarCheck, title: "Bot de turnos y reservas", description: "Muestra horarios disponibles, agenda turnos y envía confirmaciones y recordatorios automáticos.", tags: ["Agenda", "Reservas", "Recordatorios"] },
    { icon: BiStore, title: "Bot para tiendas", description: "Responde sobre productos, toma pedidos e informa a tus clientes el estado de cada compra.", tags: ["Catálogo", "Pedidos", "E-commerce"] },
    { icon: BiSupport, title: "Bot de soporte", description: "Recibe incidencias, solicita los datos necesarios y organiza cada caso antes de derivarlo.", tags: ["Tickets", "Soporte", "Derivación"] },
  ],
  integrated: [
    { icon: BiGitBranch, title: "WhatsApp + agente comercial", description: "El bot inicia la conversación y el agente analiza la necesidad, califica el lead y actualiza el CRM.", tags: ["WhatsApp", "Agente IA", "CRM"] },
    { icon: BiSupport, title: "Soporte inteligente integrado", description: "Combina atención por WhatsApp, búsqueda de información y creación automática de tickets.", tags: ["WhatsApp", "Base de datos", "Tickets"] },
    { icon: BiCalendarCheck, title: "Reservas de punta a punta", description: "Un bot conversa con el cliente mientras un agente valida disponibilidad, agenda y notifica al equipo.", tags: ["Bot", "Agente", "Calendario"] },
    { icon: BiData, title: "Operaciones conectadas", description: "Bots y agentes consultan tus sistemas, ejecutan procesos y mantienen informado al cliente en tiempo real.", tags: ["Integraciones", "Procesos", "Datos"] },
  ],
};

type SolutionCategory = keyof typeof solutions;

const SolutionCard = ({ solution }: { solution: (typeof solutions)[SolutionCategory][number] }) => {
  const Icon = solution.icon;
  return (
    <article onMouseMove={trackSpot} className="spot group flex h-full flex-col rounded-2xl border border-white/10 bg-[#060606] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 sm:p-7">
      <div className="mb-6 grid size-14 place-items-center rounded-2xl border border-violet-400/20 bg-violet-500/15 text-3xl text-violet-300 transition group-hover:bg-violet-500/25 group-hover:text-white">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{solution.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400 sm:text-base">{solution.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {solution.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>)}
      </div>
    </article>
  );
};

const Projecta = () => {
  const [activeTab, setActiveTab] = useState<Category>("projects");
  const { language } = useLanguage();
  const es = language === "es";

  const enTranslations: Record<string, string> = {
    "Proyectos": "Projects", "Agentes": "Agents", "Bots de WhatsApp": "WhatsApp bots", "Bots WPP": "WPP bots", "Bots + agentes integrados": "Integrated bots + agents", "Bots + agentes": "Bots + agents",
    "Agente de atención": "Customer service agent", "Responde consultas frecuentes, comprende el contexto y deriva los casos que necesitan atención humana.": "Answers common questions, understands context, and routes cases that need human attention.",
    "Agente comercial": "Sales agent", "Califica contactos, recomienda servicios y acompaña cada oportunidad durante el proceso de venta.": "Qualifies leads, recommends services, and supports each opportunity throughout the sales process.",
    "Agente de operaciones": "Operations agent", "Consulta información interna, prepara reportes y automatiza tareas repetitivas del equipo.": "Retrieves internal information, prepares reports, and automates repetitive team tasks.",
    "Asistente personalizado": "Custom assistant", "Un agente entrenado con la información, el tono y los procesos específicos de tu negocio.": "An agent trained with your business information, tone, and specific processes.",
    "Bot de atención por WhatsApp": "WhatsApp customer service bot", "Atiende preguntas, comparte información y deriva conversaciones sin sacar al cliente de WhatsApp.": "Answers questions, shares information, and routes conversations without taking customers out of WhatsApp.",
    "Bot de turnos y reservas": "Booking and appointment bot", "Muestra horarios disponibles, agenda turnos y envía confirmaciones y recordatorios automáticos.": "Shows availability, schedules appointments, and sends automatic confirmations and reminders.",
    "Bot para tiendas": "Store bot", "Responde sobre productos, toma pedidos e informa a tus clientes el estado de cada compra.": "Answers product questions, takes orders, and informs customers about each purchase status.",
    "Bot de soporte": "Support bot", "Recibe incidencias, solicita los datos necesarios y organiza cada caso antes de derivarlo.": "Receives issues, requests the necessary details, and organizes each case before routing it.",
    "WhatsApp + agente comercial": "WhatsApp + sales agent", "El bot inicia la conversación y el agente analiza la necesidad, califica el lead y actualiza el CRM.": "The bot starts the conversation while the agent analyzes the need, qualifies the lead, and updates the CRM.",
    "Soporte inteligente integrado": "Integrated smart support", "Combina atención por WhatsApp, búsqueda de información y creación automática de tickets.": "Combines WhatsApp support, information retrieval, and automatic ticket creation.",
    "Reservas de punta a punta": "End-to-end bookings", "Un bot conversa con el cliente mientras un agente valida disponibilidad, agenda y notifica al equipo.": "A bot talks with the customer while an agent validates availability, schedules, and notifies the team.",
    "Operaciones conectadas": "Connected operations", "Bots y agentes consultan tus sistemas, ejecutan procesos y mantienen informado al cliente en tiempo real.": "Bots and agents query your systems, run processes, and keep customers informed in real time.",
    "Atención": "Support", "Impresión 3D": "3D printing", "Estudio": "Study", "Redes": "Networks", "Soporte": "Support", "Ventas": "Sales", "Datos": "Data", "Reportes": "Reports", "Automatización": "Automation", "Personalizado": "Custom", "Conocimiento": "Knowledge", "Agenda": "Scheduling", "Reservas": "Bookings", "Recordatorios": "Reminders", "Catálogo": "Catalog", "Pedidos": "Orders", "Derivación": "Routing", "Agente IA": "AI agent", "Base de datos": "Database", "Calendario": "Calendar", "Integraciones": "Integrations", "Procesos": "Processes",
  };
  const localize = (value: string) => es ? value : (enTranslations[value] ?? value);

  return (
    <section id="projects" className="relative z-40 mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24">
      <Reveal className="mb-9 max-w-3xl sm:mb-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-violet-300">{es ? "Trabajos" : "Works"}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{es ? "Proyectos y automatizaciones." : "Projects and automations."}</h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{es ? "Lo que ya hicimos y las soluciones con agentes y bots que podemos integrar en tu negocio." : "What we have built and the agent and bot solutions we can integrate into your business."}</p>
      </Reveal>

      <div className="scrollbar-hidden mb-10 overflow-x-auto pb-1" role="tablist" aria-label="Categorías de trabajos">
        <div className="inline-flex min-w-max gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-sm">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} type="button" role="tab" aria-selected={isActive} aria-controls="works-panel" onClick={() => setActiveTab(tab.id)} className={`relative z-10 min-h-11 touch-manipulation rounded-xl px-4 text-sm font-medium transition sm:px-5 sm:text-base ${isActive ? "bg-white text-black" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"}`}>
                <span className="sm:hidden">{localize(tab.shortLabel)}</span><span className="hidden sm:inline">{localize(tab.label)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="works-panel" role="tabpanel" aria-live="polite" className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {activeTab === "projects"
          ? projects.map((project, index) => <Reveal key={project.es.title} delay={(index % 3) * 0.07}><ProjectCard index={index + 1} href={project.href} tags={project.tags.map(localize)} linkLabel={es ? "Ver sitio" : "Visit site"} {...(es ? project.es : project.en)} /></Reveal>)
          : solutions[activeTab].map((solution, index) => <Reveal key={solution.title} delay={(index % 3) * 0.07}><SolutionCard solution={{ ...solution, title: localize(solution.title), description: localize(solution.description), tags: solution.tags.map(localize) }} /></Reveal>)}
      </div>
    </section>
  );
};

export default Projecta;
