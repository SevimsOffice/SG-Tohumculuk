import { Award, Lightbulb, ShieldCheck } from 'lucide-react';
import aboutTeam from '@/assets/about-team.jpg';

interface AboutSectionProps {
  t: {
    about: {
      title: string;
      content: string;
      values: {
        experience: string;
        experienceDesc: string;
        innovation: string;
        innovationDesc: string;
        quality: string;
        qualityDesc: string;
      };
    };
  };
}

const AboutSection = ({ t }: AboutSectionProps) => {
  const values = [
    {
      icon: Award,
      title: t.about.values.experience,
      desc: t.about.values.experienceDesc,
    },
    {
      icon: Lightbulb,
      title: t.about.values.innovation,
      desc: t.about.values.innovationDesc,
    },
    {
      icon: ShieldCheck,
      title: t.about.values.quality,
      desc: t.about.values.qualityDesc,
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t.about.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{t.about.content}</p>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {values.map((value, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={aboutTeam}
                alt="Turkish farmers and researchers in field"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
