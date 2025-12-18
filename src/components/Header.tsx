import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import logo from '@/assets/logo.png';
import { Language } from '@/lib/translations';

interface HeaderProps {
  t: {
    nav: {
      home: string;
      products: string;
      activities: string;
      blog: string;
      about: string;
      contact: string;
    };
  };
  language: Language;
  toggleLanguage: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Header = ({ t, language, toggleLanguage, activeSection, onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: t.nav.products },
    { id: 'activities', label: t.nav.activities },
    { id: 'blog', label: t.nav.blog },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <img src={logo} alt="SG Tohumculuk" className="h-10 md:h-12 w-auto" />
          <span className="font-semibold text-lg text-foreground hidden sm:block">SG Tohumculuk</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Language Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            {language.toUpperCase()}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-background border-b border-border">
          <div className="container-max px-4 py-4 flex flex-col gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
