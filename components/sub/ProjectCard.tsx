import React from "react";
import Image from "next/image";

interface Props { src: string; title: string; description: string }

const ProjectCard = ({ src, title, description }: Props) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.065]">
    <div className="aspect-[16/10] overflow-hidden bg-black/20">
      <Image src={src} alt={title} width={1000} height={625} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
    </div>
    <div className="relative flex flex-1 flex-col p-5 sm:p-6">
      <a className="rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400" href="https://github.com/Sebastian230/linkmaster" target="_blank" rel="noreferrer">
        <h3 className="text-xl font-semibold text-white transition group-hover:text-violet-300 sm:text-2xl">{title}</h3>
      </a>
      <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">{description}</p>
    </div>
  </article>
);

export default ProjectCard;
