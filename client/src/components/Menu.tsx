import { useState } from "react";
import { menuCategories } from "@/data/menuData";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/use-language";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedDish {
  name: string;
  description: string;
  image: string;
}

// Define the translated featured dishes
const getFeaturedDishes = (t: any): FeaturedDish[] => [
  {
    name: t('menu.featuredDishes.crudoMix.name', 'Crudo Mix'),
    description: t('menu.featuredDishes.crudoMix.description', 'A delicate selection of raw seafood, including fresh local catch, served with citrus and herbs'),
    image: "images/dish-10.jpg"
  },
  {
    name: t('menu.featuredDishes.seafoodPasta.name', 'Seafood Pasta'),
    description: t('menu.featuredDishes.seafoodPasta.description', 'Homemade pasta with a rich medley of fresh seafood in a light tomato sauce'),
    image: "images/dish-8.jpg"
  }
];

export default function Menu() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("fish");
  const isMobile = useIsMobile();
  
  // Get translated featured dishes
  const featuredDishes = getFeaturedDishes(t);
  
  // Safely access language-specific content
  const getLocalizedContent = (content: {en: string, sq?: string}) => {
    return content[language as 'en' | 'sq'] || content.en;
  };

  return (
    <section id="menu" className="pt-20 pb-10 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 section-heading">
          {t('menu.title', 'Our Menu')}
        </h2>
        <p className="text-center text-neutral-600 mb-8 max-w-xl mx-auto">
          {t('menu.description', 'Savor the authentic flavors of the Mediterranean')}
        </p>
        
        {/* Featured Dishes */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-center mb-8">
            {t('menu.signatureDishes', 'Signature Dishes')}
          </h3>
          
          {isMobile ? (
            <div className="relative max-w-md mx-auto px-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {featuredDishes.map((dish, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="overflow-hidden" style={{ aspectRatio: '2/3' }}>
                          <img 
                            src={dish.image} 
                            alt={dish.name} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-xl font-medium mb-2">{dish.name}</h4>
                          <p className="text-neutral-600 text-sm">{dish.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredDishes.map((dish, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="overflow-hidden" style={{ aspectRatio: '2/3' }}>
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-medium mb-2">{dish.name}</h4>
                    <p className="text-neutral-600 text-sm">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Menu Categories Tabs */}
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-3 rounded-md border ${
                  activeCategory === category.id 
                    ? "bg-primary text-white border-primary" 
                    : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
                } text-sm md:text-base transition-colors font-medium text-center`}
              >
                {getLocalizedContent(category.title)}
              </button>
            ))}
          </div>
            
          {/* Menu Content */}
          <div className="mt-10 border-t pt-8">
            {menuCategories.map((category) => (
              category.id === activeCategory && (
                <div key={category.id} className="menu-content">
                  <div className="mb-6">
                    <h3 className="text-2xl font-display font-semibold mb-2">
                      {getLocalizedContent(category.title)}
                    </h3>
                    <p className="text-neutral-600">
                      {getLocalizedContent(category.description)}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <div key={index} className="menu-item bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">
                            {getLocalizedContent(item.name)}
                          </h4>
                          <span className="font-medium text-accent">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-neutral-500">
                            {getLocalizedContent(item.description)}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {category.id === "wines" && (
                    <p className="text-sm text-neutral-500 text-center italic mt-6">
                      {t('menu.allPricesNote', 'All prices are in Albanian Lek (ALL). Menu items and prices may change seasonally to ensure we serve only the freshest ingredients.')}
                    </p>
                  )}
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
