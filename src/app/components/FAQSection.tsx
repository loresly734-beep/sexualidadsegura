'use client';

import React, { useState, useRef, useEffect } from 'react';

const faqs = [
  {
    question: '¿Cómo sé si tengo una ITS?',
    answer: 'Muchas ITS no presentan síntomas visibles, por lo que la única forma segura de saberlo es realizándote una prueba. Si presentas síntomas como secreción inusual, ardor al orinar, llagas o verrugas genitales, acude a un profesional de salud lo antes posible.',
  },
  {
    question: '¿Dónde puedo hacerme una prueba?',
    answer: 'Puedes realizarte pruebas en centros de salud públicos (muchas veces gratuitos), clínicas privadas, servicios de salud sexual y reproductiva, y centros comunitarios de salud. Consulta la sección "¿Dónde buscar ayuda?" de esta página para más información.',
  },
  {
    question: '¿Las ITS tienen cura?',
    answer: 'Depende del tipo de ITS. Las infecciones bacterianas como la sífilis, gonorrea y clamidia tienen cura con tratamiento antibiótico adecuado. Las infecciones virales como el VIH, herpes y VPH no tienen cura, pero sí tratamiento que controla la infección y mejora la calidad de vida.',
  },
  {
    question: '¿Cómo se usa correctamente un preservativo?',
    answer: 'Verifica la fecha de vencimiento y que el empaque esté en buen estado. Abre el empaque con cuidado (no con los dientes ni tijeras). Colócalo sobre el pene erecto antes de cualquier contacto sexual. Deja un pequeño espacio en la punta. Desenróllalo completamente. Después de la relación, retíralo con cuidado y deséchalo. Usa uno nuevo en cada relación sexual.',
  },
  {
    question: '¿Puedo tener una ITS sin síntomas?',
    answer: 'Sí, es muy frecuente. La clamidia, el VIH, el VPH y la gonorrea, entre otras, pueden no presentar síntomas durante meses o años. Por eso se recomienda realizarse pruebas periódicas, especialmente si eres sexualmente activo/a.',
  },
  {
    question: '¿Qué hago si mi pareja tiene una ITS?',
    answer: 'Mantén la calma y apóyate mutuamente. Ambos deben acudir a un profesional de salud para evaluación y pruebas. Eviten relaciones sexuales hasta que el profesional lo indique. Sigan el tratamiento indicado. La comunicación abierta y sin juicios es fundamental en esta situación.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-pastel text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
            Sección 7
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Preguntas <span className="gradient-text">Frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Resolvemos las dudas más comunes sobre ITS y salud sexual.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 transition-all duration-300 ${
                openIndex === index
                  ? 'border-primary/40 bg-violet-pastel'
                  : 'border-border bg-card hover:border-primary/20'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary/30 rounded-2xl min-h-[64px]"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-foreground text-sm sm:text-base pr-4">{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-primary text-primary-foreground rotate-180'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                ref={(el) => { contentRefs.current[index] = el; }}
                className={`faq-content ${openIndex === index ? 'open' : ''}`}
              >
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact support card */}
        <div className="mt-8 rounded-2xl bg-card border border-border p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="font-bold text-foreground">¿Tienes más preguntas?</h4>
            <p className="text-sm text-muted-foreground">Usa el formulario de contacto o busca orientación profesional.</p>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all min-h-[44px]"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}