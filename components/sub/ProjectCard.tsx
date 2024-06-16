

import React from 'react'
import Image from 'next/image'





interface Props {
    src: string;
    title: string;
    description: string
}

const clickHandle = () => {
    document.location.href = 'https://stackoverflow.com/';
  }


const ProjectCard = ({src, title, description, }: Props) => {
  return (
   
    <div className='relative overflow-hidden rounded-lg shadow-xl mb-auto border border-[#000000]'>
        
            <Image 
                src={src} 
                alt={title} 
                width={1000} 
                height={1000} 
                className='w-full object-contain'
            />
         
            <div className='relative p-4'>
            <a
                cursor-pointer
                href='https://github.com/Sebastian230/linkmaster/blob/main/components/main/Hero.tsx'
            ><h1 className='text-2xl cursor-pointer font-semibold text-white'>{title}</h1></a>
            
                <p className='mt-2 text-gray-300'>{description}</p>
            </div>
            
            

        
    </div>
    
    
  )
}

export default ProjectCard