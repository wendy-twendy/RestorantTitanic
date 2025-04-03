import { Language } from '@/contexts/LanguageContext';

// Define menu item interfaces
export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
}

export interface BilingualMenuItem {
  section: string;
  albanianName: string;
  englishName: string;
  price: string;
}

// Category information in both languages
export const getMenuCategoryInfo = (language: Language) => {
  type LanguageContent = {
    [key in Language]: {
      title: string;
      description: string;
    };
  };

  const categoryInfo: Record<string, LanguageContent> = {
    fish: {
      en: {
        title: 'Fresh Fish',
        description: 'Our fresh fish selection changes daily. Each dish is carefully prepared to enhance the natural flavors of the sea.'
      },
      al: {
        title: 'Peshk i Freskët',
        description: 'Përzgjedhja jonë e peshkut të freskët ndryshon çdo ditë. Çdo pjatë përgatitet me kujdes për të theksuar shijen natyrale të detit.'
      }
    },
    seafood: {
      en: {
        title: 'Seafood',
        description: 'Delicious seafood dishes featuring the finest ingredients from the Mediterranean Sea.'
      },
      al: {
        title: 'Fruta Deti',
        description: 'Pjata të shijshme frutash deti që përmbajnë përbërësit më të mirë nga Deti Mesdhe.'
      }
    },
    meat: {
      en: {
        title: 'Meat Specialties',
        description: 'Succulent meat dishes prepared with traditional Albanian recipes and cooking techniques.'
      },
      al: {
        title: 'Specialitete Mishi',
        description: 'Pjata mishi të lëngshme të përgatitura me receta tradicionale shqiptare dhe teknika gatimi.'
      }
    },
    appetizers: {
      en: {
        title: 'Appetizers',
        description: 'Start your meal with our selection of Mediterranean appetizers, perfect for sharing.'
      },
      al: {
        title: 'Antipasta',
        description: 'Filloni vaktine tuaj me përzgjedhjen tonë të antipastave mesdhetare, perfekte për të ndarë.'
      }
    },
    desserts: {
      en: {
        title: 'Desserts',
        description: 'End your meal on a sweet note with our homemade desserts.'
      },
      al: {
        title: 'Ëmbëlsira',
        description: 'Përfundoni vaktin tuaj me një shënim të ëmbël me ëmbëlsirat tona shtëpiake.'
      }
    },
    wines: {
      en: {
        title: 'Wines & Drinks',
        description: 'Enhance your dining experience with our carefully selected wines and beverages.'
      },
      al: {
        title: 'Verëra & Pije',
        description: 'Përmirësoni përvojën tuaj të darkës me verërat dhe pijet tona të zgjedhura me kujdes.'
      }
    }
  };

  return {
    fish: {
      title: categoryInfo.fish[language].title,
      description: categoryInfo.fish[language].description
    },
    seafood: {
      title: categoryInfo.seafood[language].title,
      description: categoryInfo.seafood[language].description
    },
    meat: {
      title: categoryInfo.meat[language].title,
      description: categoryInfo.meat[language].description
    },
    appetizers: {
      title: categoryInfo.appetizers[language].title,
      description: categoryInfo.appetizers[language].description
    },
    desserts: {
      title: categoryInfo.desserts[language].title,
      description: categoryInfo.desserts[language].description
    },
    wines: {
      title: categoryInfo.wines[language].title,
      description: categoryInfo.wines[language].description
    }
  };
};

// Signature dishes with language-specific content
export const getSignatureDishes = (language: Language) => [
  {
    name: language === 'en' ? 'Crudo Mix' : 'Mix Krudo',
    description: language === 'en' 
      ? 'A delicate selection of raw seafood, including fresh local catch, served with citrus and herbs'
      : 'Një përzgjedhje delikate frutash deti të papërpunuara, përfshirë peshkim vendas të freskët, të servirur me agrume dhe bimë aromatike',
    image: "/photos/dish-10.jpg"
  },
  {
    name: language === 'en' ? 'Seafood Pasta' : 'Pasta me Fruta Deti',
    description: language === 'en'
      ? 'Homemade pasta with a rich medley of fresh seafood in a light tomato sauce'
      : 'Pasta shtëpie me një përzierje të pasur frutash deti të freskëta në një salcë të lehtë domate',
    image: "/photos/dish-8.jpg"
  }
];

// Map CSV data to menu items based on language
export const mapCsvDataToMenuItems = (csvData: BilingualMenuItem[], language: Language): Record<string, MenuItem[]> => {
  const menuItemsBySection: Record<string, MenuItem[]> = {};
  
  // Group menu items by section
  csvData.forEach(item => {
    const section = item.section.toLowerCase();
    const name = language === 'en' ? item.englishName : item.albanianName;
    
    if (!menuItemsBySection[section]) {
      menuItemsBySection[section] = [];
    }
    
    menuItemsBySection[section].push({
      name,
      price: item.price
    });
  });
  
  return menuItemsBySection;
};

// Build menu categories from CSV data
export const buildMenuCategories = (
  csvData: BilingualMenuItem[],
  language: Language
): MenuCategory[] => {
  const menuItemsBySection = mapCsvDataToMenuItems(csvData, language);
  const categoryInfo = getMenuCategoryInfo(language);
  
  return Object.entries(categoryInfo).map(([id, info]) => ({
    id,
    title: info.title,
    description: info.description,
    items: menuItemsBySection[id] || []
  }));
};