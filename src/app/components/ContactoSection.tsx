'use client';

import React, { useState } from 'react';

export default function ContactoSection() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'SexualidadSegura',
          text: 'Infórmate, protégete y cuida tu salud sexual.',
          url: window.location.href
        });
      } catch (err) {
        // User cancelled or permission denied — fall back to clipboard
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert('Enlace copiado al portapapeles');
        } catch {
          alert('No se pudo compartir. Copia el enlace manualmente: ' + window.location.href);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Enlace copiado al portapapeles');
      } catch {
        alert('No se pudo copiar el enlace. Cópialo manualmente: ' + window.location.href);
      }
    }
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-pastel text-pink-600 text-xs font-bold uppercase tracking-widest mb-4">
            Sección 11
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ¿Tienes alguna consulta o sugerencia? Escríbenos. Tu nombre y correo son opcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm">
            {!submitted ?
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-bold text-foreground mb-2">
                    Nombre <span className="text-muted-foreground font-normal">(opcional)</span>
                  </label>
                  <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors min-h-[48px]" />

                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                    Correo electrónico <span className="text-muted-foreground font-normal">(opcional)</span>
                  </label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors min-h-[48px]" />

                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-bold text-foreground mb-2">
                    Consulta o mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Escribe tu consulta aquí..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none" />

                </div>
                <button
                type="submit"
                className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg min-h-[52px]">

                  Enviar consulta
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  No almacenamos datos personales innecesarios. Tu privacidad es importante.
                </p>
              </form> :

            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center animate-slide-up">
                <span className="text-5xl">✅</span>
                <h3 className="text-xl font-extrabold text-foreground">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Gracias por escribirnos. Si dejaste tu correo, nos pondremos en contacto contigo pronto.
                </p>
                <button
                onClick={() => {setSubmitted(false);setForm({ nombre: '', email: '', mensaje: '' });}}
                className="mt-4 px-6 py-3 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-violet-pastel transition-all min-h-[44px]">

                  Enviar otro mensaje
                </button>
              </div>
            }
          </div>

          {/* Info + Share */}
          <div className="flex flex-col gap-5 justify-between">
            {/* CTA dark */}
            <div className="rounded-3xl gradient-cta p-8 text-white relative overflow-hidden flex-1">
              <div className="pointer-events-none absolute inset-0">
                <div className="blob-violet absolute top-0 right-0 w-48 h-48 rounded-full opacity-20" />
              </div>
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">💜</span>
                <h3 className="text-xl font-extrabold mb-3">Comparte esta página</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Ayuda a más jóvenes a acceder a información confiable sobre salud sexual. Comparte SexualidadSegura con tus amigos y familia.
                </p>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-bold text-sm hover:scale-105 transition-all min-h-[48px]">

                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Compartir página
                </button>
              </div>
            </div>

            {/* Contact info */}
            <div className="rounded-2xl bg-card border border-border p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contacto directo
              </h3>
              <a
                href="mailto:info@sexualidadsegura.edu"
                className="text-sm text-accent hover:underline font-medium">SexualidadSegura@prevencion.xyz


              </a>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Respondemos consultas educativas en un plazo de 48 horas. Para emergencias de salud, acude directamente a un centro médico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}