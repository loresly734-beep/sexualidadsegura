'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Conoce las ITS', href: '#its' },
  { label: 'Prevención', href: '#prevencion' },
  { label: 'Síntomas', href: '#sintomas' },
  { label: 'Pruebas', href: '#pruebas' },
  { label: 'Mitos', href: '#mitos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Test', href: '#test' },
  { label: 'Ayuda', href: '#ayuda' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <AppLogo size={36} />
          <span className="font-extrabold text-lg tracking-tight text-foreground hidden sm:block">
            SexualidadSegura
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#test"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:opacity-90 transition-all animate-pulse-glow"
          >
            Haz el Test
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border shadow-xl">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={handleLinkClick}
                className="py-3 px-4 rounded-xl text-sm font-semibold text-foreground hover:bg-violet-pastel hover:text-primary transition-all"
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#test"
              onClick={handleLinkClick}
              className="mt-2 py-3 px-4 rounded-full bg-primary text-primary-foreground text-sm font-bold text-center hover:opacity-90 transition-all"
            >
              Haz el Test Interactivo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}