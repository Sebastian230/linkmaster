"use client";

import { FaLinkedin } from "react-icons/fa";
import { BiLogoGithub, BiLogoWhatsapp } from "react-icons/bi";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/sebrod1998/" },
  { icon: <BiLogoWhatsapp />, label: "WhatsApp", href: "https://wa.me/59895821202" },
  { icon: <BiLogoGithub />, label: "GitHub", href: "https://github.com/Sebastian230" },
];

function Footer() {
  const { language } = useLanguage();
  const es = language === "es";

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-black/20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-12 lg:py-20">
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
          <h3 className="text-lg font-semibold text-white">{es ? "Qué hago" : "What I do"}</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-400 sm:text-base">
            <li>{es ? "Diseño web" : "Web design"}</li><li>{es ? "Diseño UI/UX" : "UI/UX design"}</li><li>{es ? "Desarrollo web" : "Web development"}</li><li>{es ? "Desarrollo de software" : "Software development"}</li><li>{es ? "Soporte informático" : "IT support"}</li>
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
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-slate-500 sm:text-sm">© {new Date().getFullYear()} Linkmaster · {es ? "Diseñado por" : "Designed by"} Sebastian N.R.</div>
    </footer>
  );
}

export default Footer;
