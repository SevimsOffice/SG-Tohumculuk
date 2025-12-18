import { Microscope, Factory, Beef, Wheat } from 'lucide-react';
import researchImg from '@/assets/research-lab.jpg';
import productionImg from '@/assets/production-facility.jpg';

interface ActivitiesSectionProps {
  t: {
    activities: {
      title: string;
      subtitle: string;
      rnd: {
        title: string;
        desc: string;
      };
      production: {
        title: string;
        animal: {
          title: string;
          desc: string;
        };
        agricultural: {
          title: string;
          desc: string;
        };
      };
    };
  };
}

const ActivitiesSection = ({ t }: ActivitiesSectionProps) => {
  return (
    <section id="activities" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.activities.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.activities.subtitle}</p>
        </div>

        {/* R&D Section */}
        <div className="bg-card rounded-2xl overflow-hidden border border-border mb-8 md:mb-12">
          <div className="grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto">
              <img
                src={researchImg}
                alt="R&D Laboratory"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t.activities.rnd.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t.activities.rnd.desc}</p>
            </div>
          </div>
        </div>

        {/* Production Section */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Factory className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">{t.activities.production.title}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Animal Production */}
            <div className="bg-secondary/50 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img
                  src={productionImg}
                  alt="Production Facility"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Beef className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">{t.activities.production.animal.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{t.activities.production.animal.desc}</p>
              </div>
            </div>

            {/* Agricultural Production */}
            <div className="bg-secondary/50 rounded-xl overflow-hidden">
              <div className="aspect-video">
                <img
                  src={productionImg}
                  alt="Agricultural Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Wheat className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-foreground">{t.activities.production.agricultural.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{t.activities.production.agricultural.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
