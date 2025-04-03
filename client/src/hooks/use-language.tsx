import { createContext, useState, useContext, ReactNode } from 'react';
import i18n from 'i18next';

// Define the available languages
type Language = 'en' | 'sq';

// Define the context type
interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  changeLanguage: () => {},
});

// Define props for the provider
interface LanguageProviderProps {
  children: ReactNode;
}

// Create the provider component
export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Create a custom hook for using the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
}