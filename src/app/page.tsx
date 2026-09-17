import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ITSSection from '@/app/components/ITSSection';
import PrevencionSection from '@/app/components/PrevencionSection';
import SintomasSection from '@/app/components/SintomasSection';
import PruebasSection from '@/app/components/PruebasSection';
import MitosSection from '@/app/components/MitosSection';
import FAQSection from '@/app/components/FAQSection';
import TestSection from '@/app/components/TestSection';
import AyudaSection from '@/app/components/AyudaSection';
import PrivacidadSection from '@/app/components/PrivacidadSection';
import ContactoSection from '@/app/components/ContactoSection';
import BackToTop from '@/app/components/BackToTop';

export default function HomePage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ITSSection />
      <PrevencionSection />
      <SintomasSection />
      <PruebasSection />
      <MitosSection />
      <FAQSection />
      <TestSection />
      <AyudaSection />
      <PrivacidadSection />
      <ContactoSection />
      <Footer />
      <BackToTop />
    </main>
  );
}