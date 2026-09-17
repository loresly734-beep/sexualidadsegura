'use client';

import React, { useState, useEffect, useRef } from 'react';

const mitos = [
  {
    mito: 'Si no tengo síntomas, no tengo una ITS.',
    realidad: 'Muchas ITS pueden no presentar síntomas. Una persona puede estar infectada y transmitirla sin saberlo. Por eso las pruebas periódicas son tan importantes.',
    mitoColor: 'text-red-600',
    realidadColor: 'text-green-600',
    bg: 'bg-rose-pastel',
    bgBack: 'bg-green-pastel',
  },
  {
    mito: 'El preservativo elimina todo el riesgo de ITS.',
    realidad: 'El preservativo reduce significativamente el riesgo, pero no lo elimina por completo. Algunas ITS como el VPH o el herpes pueden transmitirse por contacto con piel no cubierta.',
    mitoColor: 'text-red-600',
    realidadColor: 'text-green-600',
    bg: 'bg-amber-pastel',
    bgBack: 'bg-teal-pastel',
  },
  {
    mito: 'Las ITS solo afectan a adultos.',
    realidad: 'Las ITS pueden afectar a adolescentes y jóvenes. De hecho, los jóvenes de 15 a 24 años representan una proporción significativa de los nuevos casos registrados.',
    mitoColor: 'text-red-600',
    realidadColor: 'text-green-600',
    bg: 'bg-violet-pastel',
    bgBack: 'bg-cyan-pastel',
  },
  {
    mito: 'Una ITS siempre se cura sola con el tiempo.',
    realidad: 'La mayoría de las ITS requieren tratamiento médico específico. Sin tratamiento, algunas pueden causar complicaciones graves como infertilidad o problemas en órganos vitales.',
    mitoColor: 'text-red-600',
    realidadColor: 'text-green-600',
    bg: 'bg-pink-pastel',
    bgBack: 'bg-blue-pastel',
  },
];

export default function MitosSection() {
  const [flipped, setFlipped] = useState<boolean[]>(new Array(mitos.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.mito-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFlip = (index: number) => {
    setFlipped((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section id="mitos" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-pastel text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
            Sección 6
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Mitos y <span className="gradient-text">Realidades</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Toca cada tarjeta para descubrir la realidad detrás de los mitos más comunes sobre las ITS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mitos.map((item, index) => (
            <div
              key={index}
              className="mito-card opacity-100 flip-card cursor-pointer h-48"
              onClick={() => handleFlip(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleFlip(index)}
              aria-label={`Mito ${index + 1}: ${item.mito}. Toca para ver la realidad.`}
            >
              <div className={`flip-card-inner h-full w-full rounded-2xl ${flipped[index] ? 'flipped' : ''}`}>
                {/* Front: Mito */}
                <div className={`flip-card-front h-full w-full rounded-2xl ${item.bg} border-2 border-red-200 p-6 flex flex-col justify-between`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-extrabold uppercase tracking-wider">❌ Mito</span>
                    <span className="text-xs text-muted-foreground">Toca para ver la realidad</span>
                  </div>
                  <p className={`text-base font-bold ${item.mitoColor} leading-relaxed`}>
                    "{item.mito}"
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Voltear
                  </div>
                </div>

                {/* Back: Realidad */}
                <div className={`flip-card-back h-full w-full rounded-2xl ${item.bgBack} border-2 border-green-200 p-6 flex flex-col justify-between`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-extrabold uppercase tracking-wider">✅ Realidad</span>
                  </div>
                  <p className={`text-sm ${item.realidadColor} leading-relaxed`}>
                    {item.realidad}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Voltear
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}