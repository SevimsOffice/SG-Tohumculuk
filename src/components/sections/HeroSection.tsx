import { ArrowDown, ArrowRight } from 'lucide-react';
import heroFarm from '@/assets/hero-farm.jpg';

interface HeroSectionProps {
  t: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
    nav: {
      contact: string;
    };
  };
  onNavigate: (section: string) => void;
}

const HeroSection = ({ t, onNavigate }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroFarm} 
          alt="Modern Turkish farmland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
      </div>

      <div className="container-max px-4 md:px-8 relative z-10 flex items-center min-h-screen">
        <div className="max-w-3xl py-20">
          {/* Decorative Element */}
          <div className="flex mb-8">
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
            {t.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-100">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-foreground border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
