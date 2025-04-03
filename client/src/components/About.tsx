import { CheckIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

// Default features in case translations aren't loaded
const defaultFeatures = [
  "Breathtaking waterfront views",
  "Authentic Italian and Mediterranean cuisine",
  "Fresh, locally-sourced seafood",
  "Warm, attentive service",
  "Relaxing atmosphere perfect for any occasion"
];

export default function About() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  // Get features from translations with fallback
  const features = t('about.features', { returnObjects: true }) as string[] || defaultFeatures;
  
  // Handle navigation to story page with scroll reset
  const handleStoryClick = () => {
    setLocation("/story");
    // The Story component will handle scrolling to top with useEffect
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 section-heading">
          {t('about.title', 'Our Story')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                {t('about.description1', 'Welcome to Restorant Titanic, a premier dining destination in Vlore that brings together authentic Italian traditions and the freshest seafood from the Adriatic Sea.')}
              </p>
              <p>
                {t('about.description2', 'Established with a passion for exceptional cuisine and hospitality, our restaurant offers a warm, inviting atmosphere where every meal becomes a memorable experience with breathtaking views of the Adriatic coast.')}
              </p>
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="group" onClick={handleStoryClick}>
                {t('about.readMore', 'Read Our Full Story')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-4">{t('about.whyChooseUs', 'Why Choose Us')}</h3>
              <ul className="space-y-3">
                {Array.isArray(features) && features.map((feature, index) => (
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
