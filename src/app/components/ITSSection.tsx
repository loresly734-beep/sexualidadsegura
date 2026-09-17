'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ITS {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  borderColor: string;
  queEs: string;
  sintomas: string[];
  transmision: string[];
  prevencion: string[];
  tratamiento: string;
}

const itsData: ITS[] = [
  {
    id: 'vih',
    name: 'VIH',
    emoji: '🔴',
    color: 'text-red-600',
    bgColor: 'bg-rose-pastel',
    borderColor: 'border-red-200',
    queEs: 'El VIH (Virus de Inmunodeficiencia Humana) es un virus que afecta el sistema inmunológico del cuerpo. Si no se trata, puede avanzar a SIDA. Con tratamiento adecuado, las personas con VIH pueden llevar una vida larga y saludable.',
    sintomas: ['Fiebre y fatiga en etapas iniciales', 'Pérdida de peso sin causa aparente', 'Infecciones frecuentes', 'Muchas personas no presentan síntomas por años'],
    transmision: ['Relaciones sexuales sin preservativo', 'Compartir agujas o jeringas', 'De madre a hijo durante el embarazo o lactancia', 'Transfusiones de sangre no controladas'],
    prevencion: ['Usar preservativo en todas las relaciones sexuales', 'No compartir agujas', 'Hacerse pruebas regularmente', 'Tratamiento preventivo (PrEP) en personas de alto riesgo'],
    tratamiento: 'El VIH se controla con medicamentos antirretrovirales (TAR). Aunque no existe cura, el tratamiento permite vivir con buena calidad de vida y reduce la transmisión.',
  },
  {
    id: 'sifilis',
    name: 'Sífilis',
    emoji: '🟡',
    color: 'text-amber-600',
    bgColor: 'bg-amber-pastel',
    borderColor: 'border-amber-200',
    queEs: 'La sífilis es una infección bacteriana causada por la bacteria Treponema pallidum. Se desarrolla en etapas y puede afectar muchos órganos si no se trata a tiempo.',
    sintomas: ['Úlcera o llaga indolora (chancro) en genitales, boca o ano', 'Erupción en palmas y plantas', 'Fiebre, ganglios inflamados', 'En etapas avanzadas puede afectar el corazón y el sistema nervioso'],
    transmision: ['Contacto sexual sin protección', 'Contacto directo con una llaga de sífilis', 'De madre a hijo durante el embarazo'],
    prevencion: ['Usar preservativo en todas las relaciones', 'Hacerse pruebas regularmente', 'Tratamiento oportuno de la pareja'],
    tratamiento: 'La sífilis se cura con antibióticos, principalmente penicilina. Es importante completar el tratamiento y que la pareja también sea evaluada.',
  },
  {
    id: 'gonorrea',
    name: 'Gonorrea',
    emoji: '🟠',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    queEs: 'La gonorrea es una infección bacteriana causada por Neisseria gonorrhoeae. Puede afectar los genitales, el recto y la garganta.',
    sintomas: ['Secreción amarillenta o verdosa del pene o vagina', 'Ardor al orinar', 'Dolor o inflamación en genitales', 'Muchas mujeres no presentan síntomas'],
    transmision: ['Relaciones sexuales vaginales, anales u orales sin protección', 'De madre a recién nacido durante el parto'],
    prevencion: ['Uso consistente del preservativo', 'Pruebas periódicas de ITS', 'Comunicación con la pareja'],
    tratamiento: 'Se trata con antibióticos. Es importante no automedicarse ya que existen cepas resistentes. Completar el tratamiento es fundamental.',
  },
  {
    id: 'clamidia',
    name: 'Clamidia',
    emoji: '🟢',
    color: 'text-green-600',
    bgColor: 'bg-green-pastel',
    borderColor: 'border-green-200',
    queEs: 'La clamidia es la ITS bacteriana más frecuente, causada por Chlamydia trachomatis. Es muy común en jóvenes y adolescentes. A menudo no presenta síntomas.',
    sintomas: ['Secreción genital inusual', 'Ardor al orinar', 'Dolor abdominal bajo', 'La mayoría de las personas NO tienen síntomas'],
    transmision: ['Relaciones sexuales sin protección', 'Contacto genital sin penetración', 'De madre a recién nacido'],
    prevencion: ['Uso del preservativo', 'Pruebas anuales para personas sexualmente activas menores de 25 años', 'Notificar a las parejas'],
    tratamiento: 'Se cura con antibióticos de una sola dosis o un ciclo corto. Es muy importante que la pareja también sea tratada.',
  },
  {
    id: 'vph',
    name: 'VPH',
    emoji: '🔵',
    color: 'text-blue-600',
    bgColor: 'bg-blue-pastel',
    borderColor: 'border-blue-200',
    queEs: 'El VPH (Virus del Papiloma Humano) es el virus de transmisión sexual más común. Existen más de 100 tipos; algunos causan verrugas genitales y otros pueden provocar ciertos tipos de cáncer.',
    sintomas: ['Verrugas genitales o anales (tipos de bajo riesgo)', 'Muchas infecciones no presentan síntomas visibles', 'Algunos tipos pueden causar cambios celulares detectables con pruebas'],
    transmision: ['Contacto sexual con piel o mucosas infectadas', 'No requiere penetración para transmitirse'],
    prevencion: ['Vacunación contra el VPH (disponible para jóvenes)', 'Uso del preservativo (reduce pero no elimina el riesgo)', 'Exámenes ginecológicos regulares (Papanicolaou)'],
    tratamiento: 'No existe cura para el virus, pero el sistema inmune suele eliminarlo. Las verrugas y lesiones se pueden tratar. La detección temprana de cambios celulares es clave.',
  },
  {
    id: 'herpes',
    name: 'Herpes Genital',
    emoji: '🟣',
    color: 'text-purple-600',
    bgColor: 'bg-violet-pastel',
    borderColor: 'border-purple-200',
    queEs: 'El herpes genital es causado por el virus del herpes simple (VHS-1 o VHS-2). Es una infección crónica que puede reactivarse periódicamente.',
    sintomas: ['Ampollas o llagas dolorosas en genitales o nalgas', 'Picazón o ardor en la zona genital', 'Fiebre y malestar durante el primer brote', 'Muchas personas tienen síntomas muy leves o ninguno'],
    transmision: ['Contacto sexual directo con la zona infectada', 'Puede transmitirse incluso sin llagas visibles', 'De madre a recién nacido durante el parto'],
    prevencion: ['Uso del preservativo (reduce el riesgo)', 'Evitar relaciones durante brotes activos', 'Comunicación abierta con la pareja', 'Medicación antiviral supresiva'],
    tratamiento: 'No tiene cura, pero los medicamentos antivirales reducen la frecuencia y gravedad de los brotes, y reducen el riesgo de transmisión.',
  },
  {
    id: 'tricomoniasis',
    name: 'Tricomoniasis',
    emoji: '🩵',
    color: 'text-teal-600',
    bgColor: 'bg-teal-pastel',
    borderColor: 'border-teal-200',
    queEs: 'La tricomoniasis es causada por un parásito microscópico llamado Trichomonas vaginalis. Es una de las ITS más comunes y tratables.',
    sintomas: ['Secreción vaginal con mal olor (verde o amarillenta)', 'Picazón, ardor o enrojecimiento genital', 'Ardor al orinar', 'Muchos hombres no presentan síntomas'],
    transmision: ['Relaciones sexuales sin protección', 'Contacto genital sin penetración'],
    prevencion: ['Uso consistente del preservativo', 'Pruebas de ITS regulares', 'Tratamiento de ambas parejas'],
    tratamiento: 'Se cura con un antibiótico específico (metronidazol o tinidazol). Es fundamental que ambas parejas sean tratadas simultáneamente.',
  },
  {
    id: 'hepatitisb',
    name: 'Hepatitis B',
    emoji: '🟤',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    queEs: 'La hepatitis B es una infección viral que afecta el hígado. Puede ser aguda o crónica. Existe una vacuna muy efectiva para prevenirla.',
    sintomas: ['Fatiga, náuseas y vómitos', 'Dolor abdominal', 'Orina oscura y heces claras', 'Coloración amarillenta de piel y ojos (ictericia)', 'Muchas personas no presentan síntomas inicialmente'],
    transmision: ['Relaciones sexuales sin protección', 'Compartir agujas o jeringas', 'De madre a recién nacido', 'Contacto con sangre infectada'],
    prevencion: ['Vacunación (es la medida más efectiva)', 'Uso del preservativo', 'No compartir agujas ni artículos de higiene personal'],
    tratamiento: 'La hepatitis B aguda generalmente se resuelve sola. La hepatitis B crónica requiere seguimiento médico y en algunos casos medicamentos antivirales.',
  },
];

export default function ITSSection() {
  const [selectedITS, setSelectedITS] = useState<ITS | null>(null);
  const [activeTab, setActiveTab] = useState<'queEs' | 'sintomas' | 'transmision' | 'prevencion' | 'tratamiento'>('queEs');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.its-card');
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedITS) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedITS]);

  const tabLabels = {
    queEs: '¿Qué es?',
    sintomas: 'Síntomas',
    transmision: 'Transmisión',
    prevencion: 'Prevención',
    tratamiento: 'Tratamiento',
  };

  return (
    <section id="its" ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-pastel text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Sección 2
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Conoce las <span className="gradient-text">ITS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selecciona cualquier infección para conocer qué es, cómo se transmite, sus síntomas y cómo prevenirla.
          </p>
        </div>

        {/* ITS Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {itsData.map((its, index) => (
            <div
              key={its.id}
              className={`its-card opacity-100 card-hover cursor-pointer rounded-2xl border-2 ${its.borderColor} ${its.bgColor} p-6 flex flex-col gap-4 group`}
              style={{ transitionDelay: `${index * 80}ms` }}
              onClick={() => { setSelectedITS(its); setActiveTab('queEs'); }}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{its.emoji}</span>
                <h3 className={`text-lg font-extrabold ${its.color}`}>{its.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {its.queEs.substring(0, 100)}...
              </p>
              <button
                className={`mt-auto inline-flex items-center gap-2 text-sm font-bold ${its.color} group-hover:gap-3 transition-all`}
                onClick={(e) => { e.stopPropagation(); setSelectedITS(its); setActiveTab('queEs'); }}
              >
                Ver información
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedITS && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
          onClick={() => setSelectedITS(null)}
        >
          <div
            className="bg-card rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`${selectedITS.bgColor} p-6 rounded-t-3xl border-b border-border`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{selectedITS.emoji}</span>
                  <div>
                    <h3 className={`text-2xl font-extrabold ${selectedITS.color}`}>{selectedITS.name}</h3>
                    <p className="text-sm text-muted-foreground">Información educativa</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedITS(null)}
                  className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Cerrar"
                >
                  <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mt-4">
                {(Object.keys(tabLabels) as Array<keyof typeof tabLabels>).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all min-h-[36px] ${
                      activeTab === tab
                        ? `bg-primary text-primary-foreground shadow-md`
                        : 'bg-white/60 text-foreground hover:bg-white'
                    }`}
                  >
                    {tabLabels[tab]}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {activeTab === 'queEs' && (
                <div className="animate-fade-in">
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    ¿Qué es?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedITS.queEs}</p>
                </div>
              )}
              {activeTab === 'sintomas' && (
                <div className="animate-fade-in">
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Síntomas
                  </h4>
                  <ul className="space-y-2">
                    {selectedITS.sintomas.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'transmision' && (
                <div className="animate-fade-in">
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    ¿Cómo se transmite?
                  </h4>
                  <ul className="space-y-2">
                    {selectedITS.transmision.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'prevencion' && (
                <div className="animate-fade-in">
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    ¿Cómo se previene?
                  </h4>
                  <ul className="space-y-2">
                    {selectedITS.prevencion.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'tratamiento' && (
                <div className="animate-fade-in">
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Tratamiento
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{selectedITS.tratamiento}</p>
                  <div className="mt-4 p-3 rounded-xl bg-cyan-pastel border border-accent/20">
                    <p className="text-xs font-bold text-accent">
                      ⚠️ Importante: No te automediques. Siempre consulta a un profesional de salud.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}