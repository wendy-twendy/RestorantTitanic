import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the supported languages
export type Language = 'en' | 'al';

// Define translations for the application
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',

    // Hero section
    'hero.title': 'Restaurant Titanic',
    'hero.subtitle': 'Mediterranean Seafood Experience',
    'hero.cta': 'Reserve a Table',
    
    // About section
    'about.title': 'Our Story',
    'about.subtitle': 'Authentic Mediterranean Cuisine Since 1991',
    'about.description1': 'Located on the beautiful shores of Vlora, Restaurant Titanic has been serving authentic Mediterranean cuisine for over three decades.',
    'about.description2': 'Our commitment to fresh, locally-sourced ingredients and traditional cooking methods has made us a beloved destination for locals and tourists alike.',
    'about.specialty': 'Seafood Specialties',
    'about.specialty.description': 'Our specialties include fresh fish caught daily, Mediterranean-style seafood dishes, and authentic Albanian cuisine prepared with care by our experienced chefs.',
    
    // Menu section
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Savor the authentic flavors of the Mediterranean',
    'menu.signature': 'Signature Dishes',
    'menu.download': 'Download PDF Menu',
    'menu.prices.note': 'All prices are in Albanian Lek (ALL). Menu items and prices may change seasonally to ensure we serve only the freshest ingredients.',
    
    // Gallery section
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Experience our atmosphere and cuisine',
    'gallery.filter.all': 'All',
    'gallery.filter.dishes': 'Dishes',
    'gallery.filter.ambience': 'Ambience',
    
    // Contact section
    'contact.title': 'Visit Us',
    'contact.subtitle': 'We look forward to hosting you',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Working Hours',
    'contact.reservation': 'Make a Reservation',
    'contact.name': 'Name',
    'contact.date': 'Date',
    'contact.time': 'Time',
    'contact.people': 'Number of People',
    'contact.message': 'Special Requests',
    'contact.submit': 'Reserve Table',
    'contact.success': 'Reservation submitted! We will contact you to confirm.',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.follow': 'Follow Us',
  },
  al: {
    // Navigation
    'nav.home': 'Kryefaqja',
    'nav.about': 'Rreth Nesh',
    'nav.menu': 'Menyja',
    'nav.gallery': 'Galeria',
    'nav.contact': 'Kontakt',

    // Hero section
    'hero.title': 'Restorant Titanic',
    'hero.subtitle': 'Eksperiencë Mesdhetare Detare',
    'hero.cta': 'Rezervo një Tavolinë',
    
    // About section
    'about.title': 'Historia Jonë',
    'about.subtitle': 'Kuzhinë Autentike Mesdhetare që nga 1991',
    'about.description1': 'I vendosur në brigjet e bukura të Vlorës, Restorant Titanic ka shërbyer kuzhinë autentike mesdhetare për më shumë se tre dekada.',
    'about.description2': 'Përkushtimi ynë ndaj përbërësve të freskët, të burimeve lokale dhe metodave tradicionale të gatimit na ka bërë një destinacion të dashur për vendësit dhe turistët.',
    'about.specialty': 'Specialitetet e Detit',
    'about.specialty.description': 'Specialitetet tona përfshijnë peshk të freskët të kapur çdo ditë, gatime detare në stil mesdhetar dhe kuzhinë autentike shqiptare të përgatitur me kujdes nga kuzhinierët tanë me përvojë.',
    
    // Menu section
    'menu.title': 'Menyja Jonë',
    'menu.subtitle': 'Shijoni shijen autentike të Mesdheut',
    'menu.signature': 'Gatimet e Shquara',
    'menu.download': 'Shkarko Menynë PDF',
    'menu.prices.note': 'Të gjitha çmimet janë në Lekë (ALL). Artikujt dhe çmimet e menysë mund të ndryshojnë sipas stinës për të siguruar që ne shërbejmë vetëm përbërësit më të freskët.',
    
    // Gallery section
    'gallery.title': 'Galeria',
    'gallery.subtitle': 'Përjetoni atmosferën dhe kuzhinën tonë',
    'gallery.filter.all': 'Të Gjitha',
    'gallery.filter.dishes': 'Gatimet',
    'gallery.filter.ambience': 'Ambienti',
    
    // Contact section
    'contact.title': 'Na Vizitoni',
    'contact.subtitle': 'Presim t\'ju mirëpresim',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefoni',
    'contact.email': 'Emaili',
    'contact.hours': 'Orari i Punës',
    'contact.reservation': 'Bëni një Rezervim',
    'contact.name': 'Emri',
    'contact.date': 'Data',
    'contact.time': 'Ora',
    'contact.people': 'Numri i Personave',
    'contact.message': 'Kërkesa të Veçanta',
    'contact.submit': 'Rezervo Tavolinën',
    'contact.success': 'Rezervimi u dërgua! Do ju kontaktojmë për të konfirmuar.',
    
    // Footer
    'footer.rights': 'Të Gjitha të Drejtat e Rezervuara',
    'footer.follow': 'Na Ndiqni',
  }
};

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Create the provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);