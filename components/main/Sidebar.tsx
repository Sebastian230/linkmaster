"use client";

import React, { useEffect, useState } from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { useLanguage } from "../LanguageProvider";

const isWithinWorkingHours = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Montevideo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  const day = value("weekday");
  const hour = Number(value("hour")) + Number(value("minute")) / 60;

  if (day === "Sun") return false;
  if (day === "Sat") return true;
  return hour >= 7 && hour < 21;
};

const sections = ["services", "tech", "projects", "contact"] as const;

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [active, setActive] = useState<string>("");
  const { language, setLanguage } = useLanguage();
  const es = language === "es";

  useEffect(() => {
    const updateAvailability = () => setIsOnline(isWithinWorkingHours());
    updateAvailability();
    const timer = window.setInterval(updateAvailability, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((current) => (current === entry.target.id ? "" : current));
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const labels: Record<(typeof sections)[number], string> = {
    services: es ? "Servicios" : "Services",
    tech: es ? "Tecnologías" : "Technologies",
    projects: es ? "Proyectos" : "Projects",
    contact: es ? "Contacto" : "Contact",
  };

  return (
    <>
      <button
        type="button"
        className={`menu-toggle fixed left-4 top-4 z-[110] backdrop-blur-md lg:hidden ${open ? "is-open" : ""}`}
        aria-label={open ? (es ? "Cerrar menú" : "Close menu") : (es ? "Abrir menú" : "Open menu")}
        aria-expanded={open}
        aria-controls="sidebar"
        onClick={() => setOpen((current) => !current)}
      >
        <span /><span />
      </button>

      {open && <div className="fixed inset-0 z-[90] bg-black/60 lg:hidden" aria-hidden="true" onClick={() => setOpen(false)} />}

      <aside
        id="sidebar"
        aria-label={es ? "Navegación principal" : "Main navigation"}
        className={`sidebar fixed inset-y-4 left-4 z-[100] flex w-44 flex-col rounded-2xl border border-white/10 p-4 pt-16 transition-[transform,visibility] duration-300 lg:visible lg:translate-x-0 lg:pt-5 ${open ? "translate-x-0" : "invisible -translate-x-[calc(100%+1rem)]"}`}
      >
        <a href="#" className="block" onClick={() => setOpen(false)} aria-label={es ? "Ir al inicio" : "Go to top"}>
          <span className="block text-lg font-semibold leading-none tracking-tight text-white">linkmaster</span>
          <span className="mt-2 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-slate-400">
            <span className={`availability-dot ${isOnline ? "is-online" : ""}`} aria-hidden="true" />
            {isOnline ? (es ? "Disponible" : "Online") : (es ? "No disponible" : "Offline")}
          </span>
        </a>

        <nav className="mt-10 flex flex-col gap-1">
          {sections.map((id, index) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm transition ${isActive ? "bg-white/[0.07] text-white" : "text-slate-400 hover:bg-white/[0.04] hover:text-white"}`}
              >
                <span className={`font-mono text-[10px] tracking-[0.15em] ${isActive ? "text-violet-300" : "text-slate-600"}`}>0{index + 1}</span>
                {labels[id]}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <a
            href="https://wa.me/59895821202"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-3 text-sm font-semibold text-black transition hover:bg-slate-200"
          >
            <BiLogoWhatsapp className="text-lg" aria-hidden="true" />
            {es ? "Presupuesto" : "Quote"}
          </a>
          <div className="language-toggle self-start" aria-label={es ? "Seleccionar idioma" : "Select language"}>
            <button type="button" className={es ? "is-active" : ""} onClick={() => setLanguage("es")} aria-pressed={es}>ES</button>
            <button type="button" className={!es ? "is-active" : ""} onClick={() => setLanguage("en")} aria-pressed={!es}>EN</button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
