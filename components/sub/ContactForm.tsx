"use client";

import React, { useEffect, useRef, useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { useLanguage } from "../LanguageProvider";

// FormSubmit reenvía cada mensaje a esta casilla, sin servidor propio.
const ENDPOINT = "https://formsubmit.co/ajax/rodriguez.sebastian.gar@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

const field = "w-full rounded-xl border border-black/10 bg-neutral-100 px-4 py-3 text-base text-black placeholder:text-neutral-500 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/30";

const ContactForm = () => {
  const { language } = useLanguage();
  const es = language === "es";
  const [status, setStatus] = useState<Status>("idle");
  const closeRef = useRef<HTMLButtonElement>(null);
  const popupOpen = status === "sent" || status === "error";

  useEffect(() => {
    if (!popupOpen) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setStatus("idle"); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [popupOpen]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data._honey) return;
    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `linkmaster: mensaje de ${data.name}`, _template: "table" }),
      });
      // FormSubmit responde 200 aunque falle: el resultado real viene en "success".
      const result = await response.json().catch(() => null);
      if (!response.ok || String(result?.success) !== "true") throw new Error(result?.message ?? String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col gap-4 rounded-3xl bg-white p-6 text-black shadow-[0_0_80px_rgba(139,92,246,0.25)] sm:p-8">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">{es ? "Escribinos" : "Write to us"}</h3>
        <p className="mt-1 text-sm text-neutral-600">{es ? "Contanos qué necesitás y te respondemos por mail." : "Tell us what you need and we'll reply by email."}</p>
      </div>

      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <label className="block text-sm font-medium">
        {es ? "Nombre" : "Name"}
        <input name="name" type="text" required maxLength={80} autoComplete="name" className={`${field} mt-1.5`} />
      </label>
      <label className="block text-sm font-medium">
        Email
        <input name="email" type="email" required maxLength={120} autoComplete="email" className={`${field} mt-1.5`} />
      </label>
      <label className="flex flex-1 flex-col text-sm font-medium">
        {es ? "Mensaje" : "Message"}
        <textarea name="message" required rows={5} maxLength={3000} className={`${field} mt-1.5 min-h-32 flex-1 resize-y`} />
      </label>

      <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-7 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-wait disabled:opacity-60">
        {status === "sending" ? (es ? "Enviando…" : "Sending…") : (es ? "Enviar mensaje" : "Send message")}
      </button>

      {popupOpen && (
        <div className="fixed inset-0 z-[200] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setStatus("idle")}>
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="contact-popup-title"
            onClick={(event) => event.stopPropagation()}
            className="popup-in w-full max-w-sm rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 text-center text-white shadow-[0_0_90px_rgba(139,92,246,0.35)]"
          >
            <span className={`mx-auto grid size-14 place-items-center rounded-full text-3xl ${status === "sent" ? "bg-violet-500/20 text-violet-300" : "bg-red-500/15 text-red-300"}`}>
              {status === "sent" ? <BiCheck aria-hidden="true" /> : <BiX aria-hidden="true" />}
            </span>
            <h4 id="contact-popup-title" className="mt-5 text-2xl font-semibold tracking-tight">
              {status === "sent" ? (es ? "¡Mensaje enviado!" : "Message sent!") : (es ? "No se pudo enviar" : "It couldn't be sent")}
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {status === "sent"
                ? (es ? "Gracias por escribirnos. Te respondemos a la brevedad." : "Thanks for writing. We'll get back to you shortly.")
                : (es ? "Probá de nuevo en un momento o escribinos por WhatsApp." : "Try again in a moment or message us on WhatsApp.")}
            </p>
            <button ref={closeRef} type="button" onClick={() => setStatus("idle")} className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition hover:bg-slate-200">
              {es ? "Cerrar" : "Close"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
