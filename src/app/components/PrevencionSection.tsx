'use client';

import React, { useEffect, useRef } from 'react';

const prevenciones = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Uso correcto del preservativo',
    desc: 'El preservativo (condón) es la barrera más efectiva para reducir el riesgo de ITS cuando se usa correctamente en cada relación sexual.',
    color: 'text-green-600',
    bg: 'bg-green-pastel',
    border: 'border-green-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Pruebas periódicas de ITS',
    desc: 'Hacerse pruebas regularmente es fundamental para detectar infecciones a tiempo, incluso sin síntomas. Es un acto de cuidado propio y hacia tu pareja.',
    color: 'text-accent',
    bg: 'bg-cyan-pastel',
    border: 'border-cyan-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Vacunación contra VPH y Hepatitis B',
    desc: 'Las vacunas contra el VPH y la Hepatitis B son seguras y muy efectivas. Consulta a tu médico sobre la disponibilidad en tu área.',
    color: 'text-primary',
    bg: 'bg-violet-pastel',
    border: 'border-purple-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'No compartir agujas',
    desc: 'Compartir agujas o jeringas puede transmitir VIH, Hepatitis B y otras infecciones. Si necesitas inyecciones, usa siempre material esterilizado.',
    color: 'text-red-600',
    bg: 'bg-rose-pastel',
    border: 'border-red-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Comunicación y consentimiento',
    desc: 'Hablar abiertamente con tu pareja sobre salud sexual, límites y consentimiento es fundamental para relaciones saludables y seguras.',
    color: 'text-pink-600',
    bg: 'bg-pink-pastel',
    border: 'border-pink-200',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Acudir a un establecimiento de salud',
    desc: 'Los centros de salud y clínicas ofrecen orientación, pruebas y tratamiento. Buscar atención profesional es un derecho y un acto de responsabilidad.',
    color: 'text-teal-600',
    bg: 'bg-teal-pastel',
    border: 'border-teal-200',
  },
];

export default function PrevencionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.prev-card');
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
    <section id="prevencion" ref={sectionRef} className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-pastel text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            Sección 3
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            <span className="gradient-text">Prevención</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conocer cómo cuidarte es el primer paso hacia una vida sexual saludable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {prevenciones?.map((item, index) => (
            <div
              key={index}
              className={`prev-card opacity-100 card-hover rounded-2xl border-2 ${item?.border} ${item?.bg} p-6 flex flex-col gap-4`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center ${item?.color} shadow-sm`}>
                {item?.icon}
              </div>
              <h3 className={`text-base font-bold ${item?.color}`}>{item?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlighted quote */}
        <div className="relative rounded-3xl gradient-cta p-8 sm:p-10 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="blob-violet absolute top-0 left-0 w-64 h-64 rounded-full opacity-30" />
            <div className="blob-cyan absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-20" />
          </div>
          <div className="relative z-10">
            <span className="text-4xl mb-4 block">💡</span>
            <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
              "La prevención y la información son herramientas importantes para cuidar tu salud sexual."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}