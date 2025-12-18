import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import ActivitiesSection from '@/components/sections/ActivitiesSection';
import BlogSection from '@/components/sections/BlogSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'activities', 'blog', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <main>
        <HeroSection t={{ hero: t.hero, nav: t.nav }} onNavigate={handleNavigate} />
        <ProductsSection t={t} />
        <ActivitiesSection t={t} />
        <BlogSection t={t} />
        <AboutSection t={t} />
        <ContactSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default Index;
