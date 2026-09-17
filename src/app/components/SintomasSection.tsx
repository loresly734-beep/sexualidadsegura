'use client';

import React, { useState, useEffect, useRef } from 'react';

const sintomas = [
  {
    icon: '🔴',
    title: 'Heridas o llagas genitales',
    desc: 'Úlceras, ampollas o llagas en los genitales, ano o boca pueden ser señal de sífilis, herpes u otras ITS.',
    color: 'text-red-600',
    bg: 'bg-rose-pastel',
  },
  {
    icon: '🟡',
    title: 'Flujo o secreción anormal',
    desc: 'Secreción inusual en cantidad, color u olor del pene o la vagina puede indicar gonorrea, clamidia o tricomoniasis.',
    color: 'text-amber-600',
    bg: 'bg-amber-pastel',
  },
  {
    icon: '🔥',
    title: 'Ardor al orinar',
    desc: 'Sensación de ardor o dolor al orinar puede ser un síntoma de gonorrea, clamidia u otras infecciones urinarias relacionadas.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: '🟢',
    title: 'Verrugas genitales',
    desc: 'Pequeñas protuberancias o verrugas en la zona genital o anal pueden ser causadas por ciertos tipos del VPH.',
    color: 'text-green-600',
    bg: 'bg-green-pastel',
  },
  {
    icon: '💜',
    title: 'Dolor pélvico o testicular',
    desc: 'Dolor en la pelvis (mujeres) o en los testículos (hombres) puede indicar una ITS no tratada que ha avanzado.',
    color: 'text-purple-600',
    bg: 'bg-violet-pastel',
  },
  {
    icon: '⚡',
    title: 'Picazón o irritación',
    desc: 'Picazón, enrojecimiento o irritación en la zona genital o anal puede ser señal de tricomoniasis, herpes u otras infecciones.',
    color: 'text-teal-600',
    bg: 'bg-teal-pastel',
  },
];

export default function SintomasSection() {
  const [showInfo, setShowInfo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.sintoma-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, i * 80);
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
    <section id="sintomas" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-pastel text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">
            Sección 4
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Síntomas y <span className="gradient-text">Señales de Alerta</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conocer las señales de alerta te ayuda a buscar atención a tiempo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {sintomas?.map((s, index) => (
            <div
              key={index}
              className={`sintoma-card opacity-100 card-hover rounded-2xl ${s?.bg} p-6 flex gap-4 border border-border/30`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="text-3xl flex-shrink-0">{s?.icon}</span>
              <div>
                <h3 className={`font-bold text-sm mb-1 ${s?.color}`}>{s?.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s?.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important alert card */}
        <div className="rounded-3xl border-2 border-amber-300 bg-amber-pastel p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-extrabold text-amber-800 mb-2 text-lg">Importante</h3>
              <p className="text-amber-700 leading-relaxed">
                <strong>Algunas ITS pueden no presentar síntomas.</strong> Por eso, una persona puede tener una ITS sin saberlo. No esperes a sentir molestias para hacerte una prueba.
              </p>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="text-center">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ¿Qué debo hacer si tengo síntomas?
          </button>

          {showInfo && (
            <div className="mt-6 max-w-2xl mx-auto rounded-2xl bg-violet-pastel border border-primary/20 p-6 text-left animate-slide-up">
              <h4 className="font-bold text-primary mb-3">Si tienes síntomas o sospechas de una ITS:</h4>
              <ul className="space-y-2 text-sm text-foreground">
                {[
                  'No te automediques. Los antibióticos sin receta pueden ser peligrosos.',
                  'Acude a un centro de salud, clínica o médico de confianza.',
                  'Solicita una evaluación y las pruebas correspondientes.',
                  'Si tienes pareja, infórmale para que también pueda hacerse una evaluación.',
                  'Sigue el tratamiento indicado por el profesional de salud.',
                ]?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}