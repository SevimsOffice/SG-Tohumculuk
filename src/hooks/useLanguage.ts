import { useState, useCallback } from 'react';
import { Language, translations } from '@/lib/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('tr');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  }, []);

  const t = translations[language];

  return { language, toggleLanguage, t };
};
