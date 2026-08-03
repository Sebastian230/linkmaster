import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <section className='relative flex min-h-[90vh] w-full flex-col overflow-hidden'>
        <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className='your-video-element pointer-events-none absolute -top-24 left-0 z-[1] hidden h-[520px] w-full rotate-180 object-cover opacity-70 sm:block sm:-top-40 sm:h-[650px]'
        
        >
          <source src='/blackhole.webm' type='video/webm'/>  
        </video>
        <HeroContent/>
    </section>
  )
}

export default Hero
