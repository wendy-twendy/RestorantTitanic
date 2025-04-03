import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { SiTripadvisor } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">{t('hero.title')}</h3>
            <p className="mb-4 text-primary-100">{t('hero.subtitle')}</p>
            <p className="text-sm text-primary-200">© 2025 Restorant Titanic. {t('footer.rights')}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.title')}</h4>
            <p className="flex items-start mb-2">
              <MapPin className="h-5 w-5 mr-2 text-accent mt-0.5" />
              <span>
                Rruga Pavllo Floqi<br />
                Vlore 9401, Albania
              </span>
            </p>
            <p className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2 text-accent" />
              <a 
                href="tel:+355696539596" 
                className="hover:text-accent transition-colors"
              >
                +355 69 653 9596
              </a>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.follow')}</h4>
            <p className="mb-4 text-primary-100">
              {language === 'en' 
                ? 'Follow us on social media for updates and special offers'
                : 'Na ndiqni në mediat sociale për përditësime dhe oferta të veçanta'}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/restoranttitanic/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/titanic_restorant/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g678774-d5929304-Reviews-Restorant_Titanic-Vlore_Vlore_County.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors" 
                aria-label="TripAdvisor"
              >
                <SiTripadvisor className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-700">
          <ul className="flex flex-wrap justify-center space-x-8">
            <li>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Politika e Privatësisë'}
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Kushtet e Shërbimit'}
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-200 hover:text-white transition-colors">
                {language === 'en' ? 'Accessibility Statement' : 'Deklarata e Aksesueshmërisë'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
