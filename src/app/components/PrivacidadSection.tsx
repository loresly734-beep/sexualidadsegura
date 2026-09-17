import React from 'react';

const privacidadItems = [
  {
    icon: '📚',
    title: 'Finalidad educativa',
    desc: 'Esta página brinda únicamente información educativa sobre ITS. No reemplaza una consulta médica profesional.',
  },
  {
    icon: '🔒',
    title: 'Sin datos personales',
    desc: 'No solicitamos información personal innecesaria. Los datos del formulario de contacto son opcionales.',
  },
  {
    icon: '🗑️',
    title: 'Test sin almacenamiento',
    desc: 'La información ingresada en el test interactivo no se almacena ni se comparte con terceros.',
  },
  {
    icon: '🤝',
    title: 'Respeto y privacidad',
    desc: 'Promovemos el respeto, la privacidad y un ambiente libre de juicios para todos los usuarios.',
  },
];

export default function PrivacidadSection() {
  return (
    <section id="privacidad" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-pastel text-teal-700 text-xs font-bold uppercase tracking-widest mb-4">
            Sección 10
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Privacidad y <span className="gradient-text">Confidencialidad</span>
          </h2>
        </div>

        <div className="rounded-3xl border-2 border-primary/20 bg-card overflow-hidden shadow-xl">
          {/* Header */}
          <div className="gradient-cta p-8 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="blob-violet absolute top-0 left-0 w-64 h-64 rounded-full opacity-20" />
              <div className="blob-cyan absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-15" />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Tu privacidad es importante</h3>
              <p className="text-white/70 text-sm max-w-md mx-auto">
                En SexualidadSegura nos comprometemos a proteger tu privacidad y a brindarte información con respeto y confidencialidad.
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {privacidadItems?.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 border border-border"
              >
                <span className="text-2xl flex-shrink-0">{item?.icon}</span>
                <div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{item?.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item?.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="px-6 sm:px-8 pb-8">
            <div className="rounded-2xl bg-amber-pastel border border-amber-200 p-4 flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-xs text-amber-700 leading-relaxed">
                <strong>Aviso importante:</strong> La información de este sitio tiene finalidad exclusivamente educativa y no reemplaza la evaluación, diagnóstico ni tratamiento de un profesional de salud. Ante cualquier duda o síntoma, consulta a un médico o profesional calificado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}