import { Mail, MapPin } from 'lucide-react';

interface ContactSectionProps {
  t: {
    contact: {
      title: string;
      subtitle: string;
      email: string;
      location: string;
    };
  };
}

const ContactSection = ({ t }: ContactSectionProps) => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground mb-12">{t.contact.subtitle}</p>

          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="flex flex-col items-center gap-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">{t.contact.email}</p>
                  <a
                    href="mailto:info@sgtohumculuk.com"
                    className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    info@sgtohumculuk.com
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-border" />

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <p className="text-xl font-semibold text-foreground">{t.contact.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
