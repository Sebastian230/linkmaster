import React from "react";
import ProjectCard from "../sub/ProjectCard";

const projects = [
  { src: "/first.png", title: "Modern portfolio — React.js", description: "Portfolio built with React and Three.js, combining a dynamic interface with immersive 3D visuals." },
  { src: "/second.gif", title: "Interactive 3D model", description: "Real-time 3D rendering with Next.js, TypeScript, React Three Fiber, and Drei." },
  { src: "/Spaceweb.png", title: "Linktree portfolio — Next.js", description: "A personal link hub designed to present projects, skills, and social profiles in one place." },
  { src: "/seven.gif", title: "3D product experience", description: "An interactive 3D experience focused on smooth animation and responsive rendering." },
  { src: "/five.png", title: "Creative web portfolio", description: "A modern portfolio with motion, rich visuals, and a component-driven React architecture." },
  { src: "/six.png", title: "E-commerce dashboard", description: "A scalable e-commerce interface built with Next.js, Shadcn, Tailwind CSS, and PlanetScale." },
  { src: "/four1.png", title: "Commerce analytics", description: "An intuitive dashboard for managing products and understanding store performance." },
  { src: "/three.png", title: "Full-stack e-commerce", description: "A fast, responsive storefront paired with a practical administration dashboard." },
];

const Projecta = () => (
  <section id="projects" className="mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
    <div className="mb-10 max-w-2xl sm:mb-14">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-violet-400">Selected work</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Projects that turn ideas into experiences.</h2>
      <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">A collection of web, 3D, and full-stack products I&apos;ve designed and developed.</p>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
    </div>
  </section>
);

export default Projecta;
