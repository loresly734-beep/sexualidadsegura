'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = heroRef?.current?.querySelectorAll('.reveal-hero');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      
      {/* Atmospheric blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="blob-violet absolute top-20 left-10 w-96 h-96 rounded-full animate-float" />
        <div className="blob-cyan absolute bottom-20 right-10 w-80 h-80 rounded-full animate-float-delay" />
        <div className="blob-rose absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full animate-float-delay2" />
        <div className="dot-bg absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div
              className="reveal-hero opacity-100 inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-violet-pastel border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
              style={{ transitionDelay: '0ms' }}>
              
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
              Información educativa y confiable
            </div>

            {/* Headline */}
            <h1
              className="reveal-hero opacity-100 text-hero-xl font-extrabold tracking-tight leading-none text-foreground"
              style={{ transitionDelay: '80ms' }}>
              
              <span className="gradient-text">Sexualidad</span>
              <br />
              <span className="text-foreground">Segura</span>
            </h1>

            {/* Subtitle */}
            <p
              className="reveal-hero opacity-100 text-lg sm:text-xl font-semibold text-primary"
              style={{ transitionDelay: '160ms' }}>
              
              Infórmate, protégete y cuida tu salud sexual
            </p>

            {/* Description */}
            <p
              className="reveal-hero opacity-100 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg"
              style={{ transitionDelay: '240ms' }}>
              
              Conoce las ITS, aprende cómo prevenirlas, identifica señales de alerta y descubre dónde buscar ayuda.
            </p>

            {/* Quick access buttons */}
            <div
              className="reveal-hero opacity-100 flex flex-col sm:flex-row flex-wrap gap-3 mt-2"
              style={{ transitionDelay: '320ms' }}>
              
              <a
                href="#its"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all hover:scale-105 shadow-lg min-h-[48px]">
                
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Conoce las ITS
              </a>
              <a
                href="#prevencion"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-accent-foreground font-bold text-sm hover:opacity-90 transition-all hover:scale-105 shadow-lg min-h-[48px]">
                
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                ¿Cómo prevenirlas?
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-violet-pastel transition-all hover:scale-105 min-h-[48px]">
                
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ¿Tienes dudas?
              </a>
            </div>

            {/* Stats */}
            <div
              className="reveal-hero opacity-100 flex flex-wrap gap-6 mt-4 pt-6 border-t border-border"
              style={{ transitionDelay: '400ms' }}>
              
              {[
              { value: '8', label: 'ITS explicadas', color: 'text-primary' },
              { value: '100%', label: 'Información confiable', color: 'text-accent' },
              { value: 'Gratis', label: 'Acceso libre', color: 'text-green-600' }]?.
              map((stat) =>
              <div key={stat?.label} className="flex flex-col gap-0.5">
                  <span className={`text-2xl font-extrabold ${stat?.color}`}>{stat?.value}</span>
                  <span className="text-xs text-muted-foreground font-medium">{stat?.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Illustration */}
          <div
            className="reveal-hero opacity-100 relative flex items-center justify-center"
            style={{ transitionDelay: '200ms' }}>
            
            <div className="relative w-full max-w-lg mx-auto">
              {/* Safe sexuality icon badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg border-4 border-background">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-background/80 px-2 py-0.5 rounded-full border border-primary/20">Sexualidad Segura</span>
              </div>
              {/* Main image card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                <AppImage
                  src="/assets/images/7bedd77f-beb3-4014-baa9-6952e1650df0-1789683839750.png"
                  alt="Medical professionals in bright clinical environment, light walls, clean white coats, well-lit healthcare setting, airy and open atmosphere"
                  width={600}
                  height={500}
                  priority
                  className="w-full h-auto object-cover" />
                
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 sm:-left-8 glass-card rounded-2xl p-3 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-pastel flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Prevención</p>
                    <p className="text-xs text-muted-foreground">Información clara</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 sm:-right-8 glass-card rounded-2xl p-3 shadow-xl animate-float-delay">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-violet-pastel flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Confidencial</p>
                    <p className="text-xs text-muted-foreground">Tu privacidad importa</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 sm:-right-10 glass-card rounded-2xl p-3 shadow-xl animate-float-delay2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-cyan-pastel flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Educativo</p>
                    <p className="text-xs text-muted-foreground">Para jóvenes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs font-medium">Explorar</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>);

}