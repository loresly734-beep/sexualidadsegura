'use client';

import React, { useState } from 'react';

const recursos = [
  {
    icon: '🏥',
    title: 'Centros de Salud Públicos',
    desc: 'Los centros de salud del sistema público ofrecen consultas, pruebas y tratamiento de ITS, muchas veces de forma gratuita o a bajo costo.',
    color: 'text-green-600',
    bg: 'bg-green-pastel',
    border: 'border-green-200',
  },
  {
    icon: '🩺',
    title: 'Servicios de Salud Sexual y Reproductiva',
    desc: 'Clínicas especializadas en salud sexual que ofrecen orientación confidencial, pruebas de ITS, planificación familiar y más.',
    color: 'text-accent',
    bg: 'bg-cyan-pastel',
    border: 'border-cyan-200',
  },
  {
    icon: '👩‍⚕️',
    title: 'Profesionales de Salud',
    desc: 'Médicos, enfermeras y trabajadores sociales capacitados para orientarte con respeto y confidencialidad sobre cualquier duda relacionada con tu salud sexual.',
    color: 'text-primary',
    bg: 'bg-violet-pastel',
    border: 'border-purple-200',
  },
  {
    icon: '📞',
    title: 'Líneas de Orientación',
    desc: 'Muchos países cuentan con líneas telefónicas de orientación en salud sexual. Consulta el número de tu país para recibir información y apoyo.',
    color: 'text-pink-600',
    bg: 'bg-pink-pastel',
    border: 'border-pink-200',
  },
];

export default function AyudaSection() {
  const [city, setCity] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) setSearched(true);
  };

  return (
    <section id="ayuda" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-pastel text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            Sección 9
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            ¿Dónde <span className="gradient-text">Buscar Ayuda?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Buscar ayuda profesional es un acto de valentía y responsabilidad. Aquí te orientamos sobre dónde encontrarla.
          </p>
        </div>

        {/* Resource cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {recursos.map((r, index) => (
            <div
              key={index}
              className={`card-hover rounded-2xl border-2 ${r.border} ${r.bg} p-6 flex flex-col gap-3`}
            >
              <span className="text-4xl">{r.icon}</span>
              <h3 className={`font-extrabold text-sm ${r.color}`}>{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* City search */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-extrabold text-foreground mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Busca establecimientos cerca de ti
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ingresa tu ciudad o localidad para encontrar centros de salud cercanos.
            </p>
            <form onSubmit={handleSearch} className="flex gap-3">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Ej: Lima, Bogotá, Ciudad de México..."
                className="flex-1 px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors min-h-[48px]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all min-h-[48px]"
              >
                Buscar
              </button>
            </form>

            {searched && (
              <div className="mt-4 p-4 rounded-xl bg-violet-pastel border border-primary/20 animate-slide-up">
                <p className="text-sm font-bold text-primary mb-2">Resultados para: {city}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Para encontrar centros de salud en <strong>{city}</strong>, te recomendamos:
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    Busca en el sitio web del Ministerio de Salud de tu país
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    Consulta con tu médico de cabecera o centro de salud más cercano
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    Llama a la línea de salud de tu ciudad o municipio
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Buscar establecimiento de salud
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            Hablar con un profesional
          </a>
          <a
            href="#faq"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-violet-pastel transition-all min-h-[52px]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Obtener orientación
          </a>
        </div>
      </div>
    </section>
  );
}