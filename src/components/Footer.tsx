import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border pt-12 pb-8 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Arc Browser Split Pattern */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <AppLogo size={32} />
              <span className="font-extrabold text-base tracking-tight text-foreground">
                SexualidadSegura
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infórmate, protégete y cuida tu salud sexual.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Este sitio tiene finalidad educativa y no reemplaza la evaluación de un profesional de salud.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: 'Inicio', href: '#inicio' },
              { label: 'Conoce las ITS', href: '#its' },
              { label: 'Prevención', href: '#prevencion' },
              { label: 'Síntomas', href: '#sintomas' },
              { label: 'Pruebas', href: '#pruebas' },
              { label: 'Mitos', href: '#mitos' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Privacidad', href: '#privacidad' },
              { label: 'Contacto', href: '#contacto' },
            ]?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                {link?.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 SexualidadSegura. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'Instagram', 'Facebook']?.map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}