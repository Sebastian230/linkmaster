"use client";

import { FaLinkedin } from "react-icons/fa";
import { BiEnvelope, BiLogoGithub, BiLogoWhatsapp } from "react-icons/bi";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const email = "rodriguez.sebastian.gar@gmail.com";

const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/sebrod1998/" },
  { icon: <BiLogoWhatsapp />, label: "WhatsApp", href: "https://wa.me/59895821202" },
  { icon: <BiEnvelope />, label: "Email", href: `mailto:${email}` },
  { icon: <BiLogoGithub />, label: "GitHub", href: "https://github.com/Sebastian230" },
];

function Footer() {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-black/20">
      <div className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-8 lg:pt-20">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-violet-300">{es ? "Contacto" : "Contact"}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{es ? "Hablemos de tu proyecto." : "Let's talk about your project."}</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="https://wa.me/59895821202" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-slate-200">
            <BiLogoWhatsapp className="text-xl" aria-hidden="true" />
            WhatsApp
          </a>
          <a href={`mailto:${email}`} className="inline-flex min-h-12 items-center justify-center gap-2 break-all rounded-full border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/40">
            <BiEnvelope className="shrink-0 text-xl" aria-hidden="true" />
            {email}
          </a>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-8 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr] lg:py-20">
        <div className="max-w-md">
          <Image src="/Bash.svg.png" alt="Linkmaster" width={288} height={100} className="h-auto w-44 sm:w-56" />
          <p className="mt-6 text-sm leading-6 text-slate-400 sm:text-base">{es ? "“Todo tiene un principio y un final. La vida es solo un ciclo de comienzos y pausas.”" : "“Everything has a beginning and an end. Life is just a cycle of starts and stops.”"}</p>
          <p className="mt-2 text-sm text-slate-500">— Jet Black</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {socials.map(({ icon, label, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-200 transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/20 hover:text-white">{icon}</a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">{es ? "Qué hacemos" : "What we do"}</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400 sm:text-base">
            <li>{es ? "Software a medida" : "Custom software"}</li><li>{es ? "Sitios y tiendas online" : "Websites and online stores"}</li><li>{es ? "Agentes y bots" : "Agents and bots"}</li><li>{es ? "Redes y soporte" : "Networks and support"}</li><li>{es ? "Armado de PC" : "PC builds"}</li><li>{es ? "Impresión 3D y diseño" : "3D printing and design"}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">{es ? "Disponibilidad" : "Availability"}</h3>
          <div className="mt-5 space-y-4 text-sm sm:text-base">
            <p><span className="block font-medium text-slate-300">{es ? "Lunes — Viernes" : "Monday — Friday"}</span><span className="text-slate-500">7:00 — 21:00</span></p>
            <p><span className="block font-medium text-slate-300">{es ? "Sábado" : "Saturday"}</span><span className="text-slate-500">{es ? "Todo el día" : "All day"}</span></p>
            <p className="text-slate-500">{es ? "Domingo — Cerrado" : "Sunday — Closed"}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-slate-500 sm:text-sm">© {new Date().getFullYear()} linkmaster</div>
    </footer>
  );
}

export default Footer;
