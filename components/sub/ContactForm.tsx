"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLanguage } from "../LanguageProvider";

// FormSubmit reenvía cada mensaje a esta casilla, sin servidor propio.
const ENDPOINT = "https://formsubmit.co/ajax/rodriguez.sebastian.gar@gmail.com";


const field = "w-full rounded-xl border border-black/10 bg-neutral-100 px-4 py-3 text-base text-black placeholder:text-neutral-500 outline-none transition focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-500/30";

const ContactForm = () => {
  const { language } = useLanguage();
  const es = language === "es";
  const [sending, setSending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data._honey) return;
    setSending(true);
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
      toast.success(es ? "Mensaje enviado. Te respondemos a la brevedad." : "Message sent. We'll get back to you shortly.");
    } catch {
      toast.error(es ? "No se pudo enviar. Probá de nuevo o escribinos por WhatsApp." : "It couldn't be sent. Try again or message us on WhatsApp.");
    } finally {
      setSending(false);
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

      <button type="submit" disabled={sending} className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-7 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-wait disabled:opacity-60">
        {sending ? (es ? "Enviando…" : "Sending…") : (es ? "Enviar mensaje" : "Send message")}
      </button>

      {/* Mismo aviso que la tienda Vetusmoon: pastilla oscura, arriba al centro */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#17171a",
            color: "#edebe6",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            padding: "10px 16px",
            fontSize: "14px",
          },
          success: { iconTheme: { primary: "#a78bfa", secondary: "#09090b" } },
        }}
      />
    </form>
  );
};

export default ContactForm;
