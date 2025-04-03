import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroCarousel() {
  const { language, t } = useLanguage();
  
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="h-full w-full">
        <div className="relative h-full w-full">
          <img
            src="/photos/ambience-6.jpg"
            alt="Restorant Titanic dining area with sea view"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center px-4 z-10">
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-lg">
                {t('hero.title')}
              </h2>
              <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl mx-auto font-light">
                {t('hero.subtitle')}
              </p>
              <p className="text-lg text-white mb-8 max-w-xl mx-auto">
                {language === 'en' 
                  ? 'Experience the finest Mediterranean cuisine with breathtaking sea views in the heart of Vlore'
                  : 'Përjetoni kuzhinën më të mirë mesdhetare me pamje mahnitëse të detit në zemër të Vlorës'}
              </p>
              <a href="#menu">
                <Button variant="default" className="bg-accent hover:bg-accent/90 text-white shadow-md">
                  {t('hero.cta')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
