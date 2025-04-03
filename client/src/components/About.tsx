import { CheckIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage, Language } from "@/contexts/LanguageContext";

export default function About() {
  const { language, t } = useLanguage();
  
  // Features with language support
  const features = language === 'en' 
    ? [
        "Breathtaking waterfront views",
        "Authentic Italian and Mediterranean cuisine",
        "Fresh, locally-sourced seafood",
        "Warm, attentive service",
        "Relaxing atmosphere perfect for any occasion"
      ]
    : [
        "Pamje mahnitëse me pamje nga deti",
        "Kuzhinë autentike italiane dhe mesdhetare",
        "Fruta deti të freskëta, me burime lokale",
        "Shërbim i ngrohtë dhe vëmendshëm",
        "Atmosferë relaksuese, perfekte për çdo rast"
      ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 section-heading">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
            </div>
            
            <div className="mt-6">
              <Link href="/story">
                <Button variant="outline" className="group">
                  {language === 'en' ? 'Read Our Full Story' : 'Lexoni Historinë Tonë të Plotë'}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-4">{language === 'en' ? 'Why Choose Us' : 'Pse të na Zgjidhni'}</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-accent mt-1 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/photos/ambience-4.jpg" 
                alt="Restorant Titanic oceanfront view" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/photos/dish-2.jpg" 
                  alt="Fresh seafood platter" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/photos/ambience-7.jpg" 
                  alt="Outdoor dining terrace" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
