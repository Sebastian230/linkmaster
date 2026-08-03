"use client";

import React, { useState } from "react";
import { BiBot, BiSupport, BiStore, BiCalendarCheck, BiGitBranch, BiData } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import ProjectCard from "../sub/ProjectCard";
import { useLanguage } from "../LanguageProvider";

type Category = "projects" | "agents" | "whatsapp" | "integrated";

const tabs: { id: Category; label: string; shortLabel: string }[] = [
  { id: "projects", label: "Proyectos", shortLabel: "Proyectos" },
  { id: "agents", label: "Agentes", shortLabel: "Agentes" },
  { id: "whatsapp", label: "Bots de WhatsApp", shortLabel: "Bots WPP" },
  { id: "integrated", label: "Bots + agentes integrados", shortLabel: "Bots + agentes" },
];

const projects = [
  { src: "/second.gif", title: "Interactive 3D model", description: "Real-time 3D rendering with Next.js, TypeScript, React Three Fiber, and Drei." },
  { src: "/seven.gif", title: "3D product experience", description: "An interactive 3D experience focused on smooth animation and responsive rendering." },
  { src: "/six.png", title: "E-commerce dashboard", description: "A scalable e-commerce interface built with Next.js, Shadcn, Tailwind CSS, and PlanetScale." },
  { src: "/three.png", title: "Full-stack e-commerce", description: "A fast, responsive storefront paired with a practical administration dashboard." },
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
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 sm:p-7">
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

  const esTranslations: Record<string, string> = {
    "Interactive 3D model": "Modelo 3D interactivo",
    "Real-time 3D rendering with Next.js, TypeScript, React Three Fiber, and Drei.": "Renderizado 3D en tiempo real con Next.js, TypeScript, React Three Fiber y Drei.",
    "3D product experience": "Experiencia de producto 3D",
    "An interactive 3D experience focused on smooth animation and responsive rendering.": "Una experiencia 3D interactiva centrada en animaciones fluidas y renderizado adaptable.",
    "E-commerce dashboard": "Panel de comercio electrónico",
    "A scalable e-commerce interface built with Next.js, Shadcn, Tailwind CSS, and PlanetScale.": "Una interfaz de comercio electrónico escalable creada con Next.js, Shadcn, Tailwind CSS y PlanetScale.",
    "Full-stack e-commerce": "Comercio electrónico full-stack",
    "A fast, responsive storefront paired with a practical administration dashboard.": "Una tienda rápida y adaptable junto con un práctico panel de administración.",
  };
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
    "Atención": "Support", "Soporte": "Support", "Ventas": "Sales", "Datos": "Data", "Reportes": "Reports", "Automatización": "Automation", "Personalizado": "Custom", "Conocimiento": "Knowledge", "Agenda": "Scheduling", "Reservas": "Bookings", "Recordatorios": "Reminders", "Catálogo": "Catalog", "Pedidos": "Orders", "Derivación": "Routing", "Agente IA": "AI agent", "Base de datos": "Database", "Calendario": "Calendar", "Integraciones": "Integrations", "Procesos": "Processes",
  };
  const localize = (value: string) => es ? (esTranslations[value] ?? value) : (enTranslations[value] ?? value);

  return (
    <section id="projects" className="relative z-40 mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mb-9 max-w-3xl sm:mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-violet-400">{es ? "Trabajos" : "Works"}</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{es ? "Proyectos y automatizaciones." : "Projects and automations."}</h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">{es ? "Explorá mis proyectos y las soluciones con agentes y bots que puedo integrar en tu negocio." : "Explore my projects and the agent and bot solutions I can integrate into your business."}</p>
      </div>

      <div className="scrollbar-hidden mb-10 overflow-x-auto pb-1" role="tablist" aria-label="Categorías de trabajos">
        <div className="inline-flex min-w-max gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-sm">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} type="button" role="tab" aria-selected={isActive} aria-controls="works-panel" onClick={() => setActiveTab(tab.id)} className={`relative z-10 min-h-11 touch-manipulation rounded-xl px-4 text-sm font-medium transition sm:px-5 sm:text-base ${isActive ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-950/40" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"}`}>
                <span className="sm:hidden">{localize(tab.shortLabel)}</span><span className="hidden sm:inline">{localize(tab.label)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="works-panel" role="tabpanel" aria-live="polite" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeTab === "projects"
          ? projects.map((project) => <ProjectCard key={project.title} {...project} title={localize(project.title)} description={localize(project.description)} />)
          : solutions[activeTab].map((solution) => <SolutionCard key={solution.title} solution={{ ...solution, title: localize(solution.title), description: localize(solution.description), tags: solution.tags.map(localize) }} />)}
      </div>
    </section>
  );
};

export default Projecta;
