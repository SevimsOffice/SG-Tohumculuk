import logo from '@/assets/logo.png';

interface FooterProps {
  t: {
    nav: {
      home: string;
      products: string;
      activities: string;
      blog: string;
      about: string;
      contact: string;
    };
    footer: {
      rights: string;
    };
  };
}

const Footer = ({ t }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground py-12">
      <div className="container-max px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="SG Tohumculuk" className="h-10 w-auto invert" />
              <span className="font-semibold text-lg text-primary-foreground">SG Tohumculuk</span>
            </div>
            <p className="text-primary-foreground/70">Modern Tarımsal Çözümler</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate('home')} className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('products')} className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('activities')} className="text-primary-foreground/70 hover:text-primary transition-colors">
                  {t.nav.activities}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">{t.nav.contact}</h4>
            <p className="text-primary-foreground/70 mb-1">info@sgtohumculuk.com</p>
            <p className="text-primary-foreground/70">www.sgtohumculuk.com</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} SG Tohumculuk. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
