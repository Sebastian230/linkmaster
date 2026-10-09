"use client";

import React from "react";
import { trackSpot } from "./Reveal";

interface Props { index: number; kind: string; title: string; description: string; tags: string[]; href?: string; linkLabel: string }

const ProjectCard = ({ index, kind, title, description, tags, href, linkLabel }: Props) => (
  <article onMouseMove={trackSpot} className="spot group flex h-full flex-col rounded-2xl border border-white/10 bg-[#060606] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-300/40 sm:p-7">
    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
      <span className="text-violet-300">{kind}</span>
      <span className="text-slate-600">{String(index).padStart(2, "0")}</span>
    </div>
    <h3 className="mt-6 text-xl font-semibold text-white sm:text-2xl">{title}</h3>
    <p className="mt-3 flex-1 text-sm leading-6 text-slate-400 sm:text-base">{description}</p>
    <div className="mt-6 flex flex-wrap gap-2">
      {tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tag}</span>)}
    </div>
    {href && (
      <a href={href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 self-start rounded text-sm font-medium text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
        {linkLabel} <span aria-hidden="true">↗</span>
      </a>
    )}
  </article>
);

export default ProjectCard;
