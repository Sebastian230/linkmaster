"use client";

import React, { useState } from "react";
import { BiBot, BiSupport, BiStore, BiCalendarCheck, BiGitBranch, BiData } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import ProjectCard from "../sub/ProjectCard";

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
  { src: "/four1.png", title: "Commerce analytics", description: "An intuitive dashboard for managing products and understanding store performance." },
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

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mb-9 max-w-3xl sm:mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-violet-400">Works</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Proyectos y automatizaciones.</h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">Explorá mis proyectos y las soluciones con agentes y bots que puedo integrar en tu negocio.</p>
      </div>

      <div className="scrollbar-hidden mb-10 overflow-x-auto pb-1" role="tablist" aria-label="Categorías de trabajos">
        <div className="inline-flex min-w-max gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-sm">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} type="button" role="tab" aria-selected={isActive} aria-controls="works-panel" onClick={() => setActiveTab(tab.id)} className={`min-h-11 rounded-xl px-4 text-sm font-medium transition sm:px-5 sm:text-base ${isActive ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-950/40" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"}`}>
                <span className="sm:hidden">{tab.shortLabel}</span><span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="works-panel" role="tabpanel" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeTab === "projects"
          ? projects.map((project) => <ProjectCard key={project.title} {...project} />)
          : solutions[activeTab].map((solution) => <SolutionCard key={solution.title} solution={solution} />)}
      </div>
    </section>
  );
};

export default Projecta;
