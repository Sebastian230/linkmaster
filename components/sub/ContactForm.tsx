"use client";

import React, { useState } from "react";
import { useLanguage } from "../LanguageProvider";

// FormSubmit reenvía cada mensaje a esta casilla, sin servidor propio.
const ENDPOINT = "https://formsubmit.co/ajax/rodriguez.sebastian.gar@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

const field = "w-full rounded-xl border border-black/10 bg-neutral-100 px-4 py-3 text-base text-black placeholder:text-neutral-500 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/30";

const ContactForm = () => {
  const { language } = useLanguage();
  const es = language === "es";
  const [status, setStatus] = useState<Status>("idle");

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
      if (!response.ok) throw new Error(String(response.status));
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

      <p role="status" aria-live="polite" className={`min-h-5 text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}>
        {status === "sent" && (es ? "Mensaje enviado. Te respondemos a la brevedad." : "Message sent. We'll get back to you shortly.")}
        {status === "error" && (es ? "No se pudo enviar. Probá de nuevo o escribinos por WhatsApp." : "It couldn't be sent. Try again or message us on WhatsApp.")}
      </p>
    </form>
  );
};

export default ContactForm;
