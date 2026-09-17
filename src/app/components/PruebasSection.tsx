'use client';

import React, { useState, useEffect, useRef } from 'react';

const pruebas = [
  {
    icon: '🔬',
    title: 'Prueba de VIH',
    desc: 'Análisis de sangre que detecta anticuerpos al VIH. Se recomienda a toda persona sexualmente activa.',
    color: 'text-red-600',
    bg: 'bg-rose-pastel',
  },
  {
    icon: '🧪',
    title: 'Prueba de sífilis',
    desc: 'Análisis de sangre para detectar la bacteria causante de la sífilis en cualquier etapa.',
    color: 'text-amber-600',
    bg: 'bg-amber-pastel',
  },
  {
    icon: '💧',
    title: 'Prueba de gonorrea y clamidia',
    desc: 'Muestra de orina o hisopado genital para detectar estas infecciones bacterianas frecuentes.',
    color: 'text-green-600',
    bg: 'bg-green-pastel',
  },
  {
    icon: '🩺',
    title: 'Papanicolaou (PAP)',
    desc: 'Examen ginecológico que detecta cambios celulares en el cuello uterino relacionados con el VPH.',
    color: 'text-primary',
    bg: 'bg-violet-pastel',
  },
];

const cuando = [
  'Si eres sexualmente activo/a, hazte pruebas al menos una vez al año.',
  'Después de tener relaciones sin protección con una nueva pareja.',
  'Si tienes o tuviste varias parejas sexuales.',
  'Si tu pareja ha tenido otras relaciones sin protección.',
  'Si notas algún síntoma inusual, aunque sea leve.',
  'Durante el embarazo, como parte del control prenatal.',
];

export default function PruebasSection() {
  const [showWhere, setShowWhere] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.prueba-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="pruebas" ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-pastel text-accent text-xs font-bold uppercase tracking-widest mb-4">
            Sección 5
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Pruebas de <span className="gradient-text">ITS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Realizarse pruebas es un acto de cuidado y responsabilidad. Conoce cuáles existen y cuándo hacerlas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {pruebas?.map((p, index) => (
            <div
              key={index}
              className={`prueba-card opacity-100 card-hover rounded-2xl border border-border/30 ${p?.bg} p-6 flex flex-col gap-3`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="text-3xl">{p?.icon}</span>
              <h3 className={`font-bold text-sm ${p?.color}`}>{p?.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p?.desc}</p>
            </div>
          ))}
        </div>

        {/* Cuando realizarlas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-extrabold text-foreground mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              ¿Cuándo realizarlas?
            </h3>
            <ul className="space-y-2">
              {cuando?.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-card border border-border p-6">
              <h3 className="font-extrabold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Si el resultado es positivo
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No entres en pánico. Muchas ITS tienen tratamiento efectivo. Lo más importante es seguir las indicaciones del profesional de salud y notificar a tus parejas para que también puedan hacerse pruebas.
              </p>
            </div>
            <div className="rounded-2xl bg-red-50 border border-red-200 p-6">
              <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                No te automediques
              </h3>
              <p className="text-sm text-red-700 leading-relaxed">
                Tomar antibióticos sin indicación médica puede generar resistencia y empeorar la situación. Siempre consulta a un profesional.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight card */}
        <div className="rounded-3xl bg-cyan-pastel border border-accent/20 p-6 sm:p-8 mb-8 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-extrabold text-foreground mb-2">Un resultado positivo no significa que estés solo/a.</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Busca orientación de un profesional de salud. Hay personas capacitadas para acompañarte en este proceso con respeto y confidencialidad.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowWhere(!showWhere)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            ¿Dónde puedo hacerme una prueba?
          </button>

          {showWhere && (
            <div className="mt-6 max-w-2xl mx-auto rounded-2xl bg-card border border-border p-6 text-left animate-slide-up">
              <h4 className="font-bold text-foreground mb-3">Puedes hacerte pruebas en:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Centros de salud del sistema público (muchas veces gratuitas)',
                  'Clínicas y hospitales privados',
                  'Servicios de salud sexual y reproductiva',
                  'Centros comunitarios de salud',
                  'Programas de prevención de VIH de tu localidad',
                ]?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#ayuda" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline">
                Ver más información sobre dónde buscar ayuda
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}