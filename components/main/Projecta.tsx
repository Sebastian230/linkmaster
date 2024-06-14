import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projecta = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center  py-20 '>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 py-20'>
            Projects 2024
        </h1>
        <div className='h-full w-full flex flex-col lg:flex-row gap-10 px-10'>
           <ProjectCard
                src="/first.png"
                title="Modern porfolio Resct.js"
                description='Un portafolio utilizando ReactJS y Three.js combina la capacidad de React para construir interfaces de usuario dinámicas y eficientes con las capacidades gráficas 3D avanzadas de Three.js'
            />
            <ProjectCard
                src="/second.gif"
                title="Rendering a 3D model"
                description='Rendering a 3D model with Next.js 13, TypeScript, React-three-fiber, and React-three-drei'
            />
            <ProjectCard
                src="/Spaceweb.png"
                title="Porfolio Next.js linktree"
                description='Un portafolio utilizando ReactJS y Three.js combina la capacidad de React para construir interfaces de usuario dinámicas y eficientes con las capacidades gráficas 3D avanzadas de Three.js'
            />

        </div>
        <div className='h-full w-full flex flex-col lg:flex-row gap-10 px-10 py-10'>
            <ProjectCard
                src="/four.png"
                title="Dashboard for Ecommerce"
                description='Este dashboard para ecommerce es una herramienta moderna y eficiente desarrollada con Next.js para un rendimiento óptimo, utilizando Shadcn y Tailwind CSS para una interfaz de usuario intuitiva y responsiva. '
            />
            <ProjectCard
                src="/three.png"
                title="Ecommerce with Dashboard Shadcn, Nextjs y Tailwind "
                description='Este ecommerce es una plataforma moderna y escalable desarrollada con Next.js para un renderizado eficiente y rápido, utilizando Shadcn y Tailwind CSS para una interfaz de usuario atractiva y responsiva. La base de datos se gestiona con PlanetScale'
            />
            <ProjectCard
                src="/first.png"
                title="Modern porfolio Resct.js"
                description='Un portafolio utilizando ReactJS y Three.js combina la capacidad de React para construir interfaces de usuario dinámicas y eficientes con las capacidades gráficas 3D avanzadas de Three.js'
            />

        </div>
        
        
    </div>
  )
}

export default Projecta