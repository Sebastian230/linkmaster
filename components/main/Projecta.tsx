"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

type Category = "agents" | "whatsapp" | "integrated";

const tabs: { id: Category; label: string; shortLabel: string }[] = [
  { id: "agents", label: "Agentes", shortLabel: "Agentes" },
  { id: "whatsapp", label: "Bots de WhatsApp", shortLabel: "Bots de WPP" },
  { id: "integrated", label: "Bots + agentes integrados", shortLabel: "Bots + agentes" },
];

const projects = [
  { category: "agents", src: "/first.png", title: "Agente de atención inteligente", description: "Un agente preparado para responder consultas, ordenar información y acompañar a cada usuario durante todo el proceso." },
  { category: "agents", src: "/second.gif", title: "Agente para automatización", description: "Automatiza tareas repetitivas, consulta herramientas internas y entrega resultados de forma clara y rápida." },
  { category: "agents", src: "/Spaceweb.png", title: "Asistente de ventas", description: "Califica oportunidades, responde preguntas sobre productos y ayuda al equipo a dar seguimiento a cada contacto." },
  { category: "whatsapp", src: "/seven.gif", title: "Bot de atención por WhatsApp", description: "Respuestas automáticas, derivación a una persona y atención continua desde el canal que tus clientes ya utilizan." },
  { category: "whatsapp", src: "/five.png", title: "Bot de turnos y reservas", description: "Gestiona disponibilidad, confirma reservas y envía recordatorios automáticos directamente por WhatsApp." },
  { category: "whatsapp", src: "/six.png", title: "Bot para e-commerce", description: "Responde consultas sobre productos, informa el estado de pedidos y recupera oportunidades de compra." },
  { category: "integrated", src: "/four1.png", title: "WhatsApp + agente comercial", description: "El bot recibe al cliente y un agente inteligente analiza su necesidad, recomienda opciones y prepara el seguimiento." },
  { category: "integrated", src: "/three.png", title: "Soporte automatizado integral", description: "Combina conversaciones, agentes y sistemas internos para resolver solicitudes de principio a fin." },
  { category: "integrated", src: "/first.png", title: "Operaciones conectadas", description: "Bots y agentes trabajando juntos para consultar datos, activar procesos y mantener informado al usuario." },
] satisfies Array<{ category: Category; src: string; title: string; description: string }>;

const Projecta = () => {
  const [activeTab, setActiveTab] = useState<Category>("agents");
  const visibleProjects = projects.filter(({ category }) => category === activeTab);

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mb-9 max-w-3xl sm:mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-violet-400">Works</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Soluciones que trabajan con vos.</h2>
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">Explorá soluciones con agentes inteligentes, bots de WhatsApp e integraciones completas para tu negocio.</p>
      </div>

      <div className="scrollbar-hidden mb-10 overflow-x-auto pb-1" role="tablist" aria-label="Categorías de trabajos">
        <div className="inline-flex min-w-max gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-sm">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="projects-panel"
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-11 rounded-xl px-4 text-sm font-medium transition sm:px-6 sm:text-base ${isActive ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-violet-950/40" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"}`}
              >
                <span className="sm:hidden">{tab.shortLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="projects-panel" role="tabpanel" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => <ProjectCard key={project.title} {...project} />)}
      </div>
    </section>
  );
};

export default Projecta;
