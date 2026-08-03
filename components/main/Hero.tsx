"use client"

import React, { useEffect, useState } from 'react'
import HeroContent from '../sub/HeroContent'
import { MoonIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../LanguageProvider'

const isWithinWorkingHours = () => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Montevideo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? ''
  const day = value('weekday')
  const hour = Number(value('hour')) + Number(value('minute')) / 60

  if (day === 'Sun') return false
  if (day === 'Sat') return true
  return hour >= 7 && hour < 21
}

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isOnline, setIsOnline] = useState(false)
  const [isNeon, setIsNeon] = useState(false)
  const { language, setLanguage } = useLanguage()
  const es = language === 'es'

  useEffect(() => {
    const updateAvailability = () => setIsOnline(isWithinWorkingHours())
    updateAvailability()
    const timer = window.setInterval(updateAvailability, 60_000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    let neon = false
    try { neon = window.localStorage.getItem('theme') === 'neon' } catch {}
    setIsNeon(neon)
    document.documentElement.dataset.theme = neon ? 'neon' : 'sun'
    document.documentElement.classList.remove('light-mode')
  }, [])

  const toggleTheme = () => {
    setIsNeon((current) => {
      const next = !current
      document.documentElement.dataset.theme = next ? 'neon' : 'sun'
      try { window.localStorage.setItem('theme', next ? 'neon' : 'sun') } catch {}
      return next
    })
  }

  return (
    <section className='relative flex min-h-[90vh] w-full flex-col overflow-hidden'>
        <nav className='mobile-nav absolute inset-x-4 top-4 z-[100] lg:hidden' aria-label={es ? 'Navegación principal' : 'Main navigation'}>
          <div className='mobile-nav-bar flex h-14 items-center justify-between rounded-2xl border border-white/10 px-3 pl-4'>
            <a href='#' className='group flex items-center gap-3' aria-label='Ir al inicio' onClick={() => setMenuOpen(false)}>
              <span>
                <span className='block text-sm font-semibold leading-none tracking-wide text-white'>Sebastian N.R.</span>
                <span className='mt-1 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-slate-400'>
                  <span className={`availability-dot ${isOnline ? 'is-online' : ''}`} aria-hidden='true' />
                  {isOnline ? (es ? 'Disponible' : 'Online') : (es ? 'No disponible' : 'Offline')}
                </span>
              </span>
            </a>

            <div className='flex items-center gap-2'>
              <div className='language-toggle' aria-label={es ? 'Seleccionar idioma' : 'Select language'}>
                <button type='button' className={es ? 'is-active' : ''} onClick={() => setLanguage('es')} aria-pressed={es}>ES</button>
                <button type='button' className={!es ? 'is-active' : ''} onClick={() => setLanguage('en')} aria-pressed={!es}>EN</button>
              </div>
              <button type='button' className='theme-toggle' onClick={toggleTheme} aria-label={isNeon ? 'Volver al tema original' : 'Activar tema blanco y negro'}>
                {isNeon ? <MoonIcon /> : <span className='saturn-icon' aria-hidden='true'><span /></span>}
              </button>
              <button
                type='button'
                className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                aria-controls='mobile-menu'
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span /><span />
              </button>
            </div>
          </div>

          <div id='mobile-menu' className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
            <a href='#' onClick={() => setMenuOpen(false)}><span>01</span>{es ? 'Inicio' : 'Home'}</a>
            <a href='#projects' onClick={() => setMenuOpen(false)}><span>02</span>{es ? 'Proyectos' : 'Projects'}</a>
            <a href='#contact' onClick={() => setMenuOpen(false)}><span>03</span>{es ? 'Contacto' : 'Contact'}</a>
          </div>
        </nav>
        <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className='your-video-element pointer-events-none absolute -top-40 left-0 z-[1] hidden h-[650px] w-full rotate-180 object-cover opacity-70 lg:block'
        
        >
          <source src='/blackhole.webm' type='video/webm'/>  
        </video>
        <HeroContent/>
    </section>
  )
}

export default Hero
