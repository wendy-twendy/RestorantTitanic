import { useState } from "react";
import { menuCategories, MenuCategory } from "@/data/menuData";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/use-language";

interface FeaturedDish {
  name: string;
  description: string;
  image: string;
}

interface CategoryTranslation {
  title: string;
  description: string;
}

interface CategoryTranslations {
  [key: string]: CategoryTranslation;
}

// Define the translated featured dishes
const getFeaturedDishes = (t: any): FeaturedDish[] => [
  {
    name: t('menu.featuredDishes.crudoMix.name', 'Crudo Mix'),
    description: t('menu.featuredDishes.crudoMix.description', 'A delicate selection of raw seafood, including fresh local catch, served with citrus and herbs'),
    image: "/photos/dish-10.jpg"
  },
  {
    name: t('menu.featuredDishes.seafoodPasta.name', 'Seafood Pasta'),
    description: t('menu.featuredDishes.seafoodPasta.description', 'Homemade pasta with a rich medley of fresh seafood in a light tomato sauce'),
    image: "/photos/dish-8.jpg"
  }
];

// Define category translations
const getCategoryTranslations = (t: any): CategoryTranslations => ({
  fish: {
    title: t('menu.categories.fish.title', 'Fish Specialties'),
    description: t('menu.categories.fish.description', 'Fresh from the Adriatic Sea, our seafood is selected daily to ensure the highest quality.')
  },
  appetizers: {
    title: t('menu.categories.appetizers.title', 'Grilled & Fried Appetizers'),
    description: t('menu.categories.appetizers.description', 'Perfect starters to share and enjoy with our selection of wines.')
  },
  crudo: {
    title: t('menu.categories.crudo.title', 'Crudo Appetizers'),
    description: t('menu.categories.crudo.description', 'Fresh raw delicacies prepared in the traditional Mediterranean style.')
  },
  pasta: {
    title: t('menu.categories.pasta.title', 'Pasta & Risotto'),
    description: t('menu.categories.pasta.description', 'Traditional Italian pastas and risottos with Mediterranean influences.')
  },
  soups: {
    title: t('menu.categories.soups.title', 'Soups & Salads'),
    description: t('menu.categories.soups.description', 'Fresh and flavorful accompaniments to your meal.')
  },
  wines: {
    title: t('menu.categories.wines.title', 'Wines & Beverages'),
    description: t('menu.categories.wines.description', 'Carefully selected wines and refreshing beverages to complement your meal.')
  }
});

export default function Menu() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("fish");
  
  // Get translated featured dishes
  const featuredDishes = getFeaturedDishes(t);
  
  // Get category translations
  const categoryTranslations = getCategoryTranslations(t);

  // Helper function to safely get category translations
  const getCategoryTranslation = (categoryId: string, field: 'title' | 'description'): string => {
    if (categoryTranslations[categoryId]) {
      return categoryTranslations[categoryId][field];
    }
    
    // Fallback to original data
    const category = menuCategories.find(c => c.id === categoryId);
    return field === 'title' ? category?.title || categoryId : category?.description || '';
  };

  return (
    <section id="menu" className="py-20 bg-neutral-50">
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
                {getCategoryTranslation(category.id, 'title')}
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
                      {getCategoryTranslation(category.id, 'title')}
                    </h3>
                    <p className="text-neutral-600">
                      {getCategoryTranslation(category.id, 'description')}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <div key={index} className="menu-item bg-white p-4 rounded-lg shadow-sm border border-neutral-100">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium">
                            {t(`menu.items.${category.id}.${index}.name`, item.name)}
                          </h4>
                          <span className="font-medium text-accent">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-neutral-500">
                            {t(`menu.items.${category.id}.${index}.description`, item.description)}
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
