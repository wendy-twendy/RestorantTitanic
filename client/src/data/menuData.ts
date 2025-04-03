// Menu categories and items with multilingual support
export interface MenuItem {
  name: {
    en: string;
    sq: string;
  };
  price: string;
  description?: {
    en: string;
    sq?: string;
  };
}

export interface MenuCategory {
  id: string;
  title: {
    en: string;
    sq: string;
  };
  description: {
    en: string;
    sq: string;
  };
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "fish",
    title: {
      en: "Fish Specialties",
      sq: "Specialitete Peshku"
    },
    description: {
      en: "Fresh from the Adriatic Sea, our seafood is selected daily to ensure the highest quality.",
      sq: "Të freskëta nga Deti Adriatik, ushqimet tona të detit zgjidhen çdo ditë për të siguruar cilësinë më të lartë."
    },
    items: [
      { 
        name: {
          en: "Fish (I quality)",
          sq: "Peshk (cilësia I)"
        }, 
        price: "7000 ALL" 
      },
      { 
        name: {
          en: "Fish (II quality)",
          sq: "Peshk (cilësia II)"
        }, 
        price: "5500 ALL" 
      },
      { 
        name: {
          en: "Fish (III quality)",
          sq: "Peshk (cilësia III)"
        }, 
        price: "4500 ALL" 
      },
      { 
        name: {
          en: "Oven baked fish with vegetables",
          sq: "Peshk në furrë me perime"
        }, 
        price: "7000 ALL" 
      },
      { 
        name: {
          en: "Grilled wild shrimps (0.3 kg)",
          sq: "Karkalec i egër zgare"
        }, 
        price: "2100 ALL" 
      },
      { 
        name: {
          en: "Scampi (I quality, 0.3 kg)",
          sq: "Skampi (cilësia I)"
        }, 
        price: "2100 ALL" 
      },
      { 
        name: {
          en: "Red goat-fish (I quality)",
          sq: "Barbun i kuq (cilësia I)"
        }, 
        price: "5000 ALL" 
      },
      { 
        name: {
          en: "Grilled salmon (0.3 kg)",
          sq: "Salmon zgare"
        }, 
        price: "1800 ALL" 
      },
      { 
        name: {
          en: "Raw fish according to the quality",
          sq: "Peshk krudo sipas cilësisë"
        }, 
        price: "Price varies" 
      },
      { 
        name: {
          en: "Lobster (1 kg)",
          sq: "Aragost"
        }, 
        price: "14000 ALL" 
      },
      { 
        name: {
          en: "Sea cicada (1 kg)",
          sq: "Gjinkallë"
        }, 
        price: "14000 ALL" 
      }
    ]
  },
  {
    id: "appetizers",
    title: {
      en: "Grilled & Fried Appetizers",
      sq: "Aperitivë të Pjekur & Skuqur"
    },
    description: {
      en: "Perfect starters to share and enjoy with our selection of wines.",
      sq: "Startera perfekte për t'u ndarë dhe shijuar me përzgjedhjen tonë të verërave."
    },
    items: [
      { 
        name: {
          en: "Grilled octopus",
          sq: "Oktapod zgare"
        }, 
        price: "1900 ALL" 
      },
      { 
        name: {
          en: "Sauteed mussels",
          sq: "Midhje shote"
        }, 
        price: "800 ALL" 
      },
      { 
        name: {
          en: "Sauteed shrimps (0.2 kg)",
          sq: "Karkalec shote"
        }, 
        price: "1400 ALL" 
      },
      { 
        name: {
          en: "Mixed fried seafood",
          sq: "Miks fritur"
        }, 
        price: "1500 ALL" 
      },
      { 
        name: {
          en: "Mixed grilled seafood (0.3 kg)",
          sq: "Miks fruta deti në zgare (0.3 kg)"
        }, 
        price: "1500 ALL" 
      },
      { 
        name: {
          en: "Mixed grilled seafood (0.5 kg)",
          sq: "Miks fruta deti në zgare (0.5 kg)"
        }, 
        price: "2800 ALL" 
      },
      { 
        name: {
          en: "Fried shrimps",
          sq: "Karkalec fritur"
        }, 
        price: "1500 ALL" 
      },
      { 
        name: {
          en: "Fried calamari",
          sq: "Kallamar fritur"
        }, 
        price: "1500 ALL" 
      },
      { 
        name: {
          en: "Shrimps saganaki",
          sq: "Karkalec sakanaki"
        }, 
        price: "1300 ALL" 
      },
      { 
        name: {
          en: "Grilled squid",
          sq: "Sepie në zgare"
        }, 
        price: "1800 ALL" 
      },
      { 
        name: {
          en: "A Capesante (1 piece)",
          sq: "Kapesante"
        }, 
        price: "400 ALL" 
      },
      { 
        name: {
          en: "Fish balls",
          sq: "Qofte peshku"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Crab balls",
          sq: "Qofte gafore"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Small appetizer (2 pax)",
          sq: "Antipastë e vogël"
        }, 
        price: "2750 ALL" 
      },
      { 
        name: {
          en: "Large appetizer (4 pax)",
          sq: "Antipastë e madhe"
        }, 
        price: "5500 ALL" 
      }
    ]
  },
  {
    id: "crudo",
    title: {
      en: "Crudo Appetizers",
      sq: "Aperitivë Crudo"
    },
    description: {
      en: "Fresh raw delicacies prepared in the traditional Mediterranean style.",
      sq: "Delikatesë të freskëta të papërpunuara të përgatitura në stilin tradicional mesdhetar."
    },
    items: [
      { 
        name: {
          en: "Crude shrimps (0.2 kg)",
          sq: "Karkalec krudo"
        }, 
        price: "1400 ALL" 
      },
      { 
        name: {
          en: "Crude salmon (0.2 kg)",
          sq: "Salmon krudo"
        }, 
        price: "1500 ALL" 
      },
      { 
        name: {
          en: "Crude scampi (0.3 kg)",
          sq: "Skampi krudo"
        }, 
        price: "2100 ALL" 
      },
      { 
        name: {
          en: "Octapus carpaccio (0.3 kg)",
          sq: "Karpaço oktapodi"
        }, 
        price: "1500 ALL" 
      },
      { 
        name: {
          en: "Crude (2 pax)",
          sq: "Krudo (2 pax)"
        }, 
        price: "2750 ALL" 
      },
      { 
        name: {
          en: "Crude (4 pax)",
          sq: "Krudo (4 pax)"
        }, 
        price: "5500 ALL" 
      },
      { 
        name: {
          en: "Marinated acuge",
          sq: "Acuke e marinuar"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Octapus Salad",
          sq: "Sallatë Oktapodi"
        }, 
        price: "1800 ALL" 
      },
      { 
        name: {
          en: "Salad seafood",
          sq: "Sallatë fruta deti"
        }, 
        price: "1500 ALL" 
      }
    ]
  },
  {
    id: "pasta",
    title: {
      en: "Pasta & Risotto",
      sq: "Pasta & Risoto"
    },
    description: {
      en: "Traditional Italian pastas and risottos with Mediterranean influences.",
      sq: "Pastat dhe risotot tradicionale italiane me ndikim mesdhetar."
    },
    items: [
      { 
        name: {
          en: "Linguine with tomato sauce",
          sq: "Linguine Salcë"
        }, 
        price: "600 ALL" 
      },
      { 
        name: {
          en: "Linguine with butter",
          sq: "Linguine gjalpë"
        }, 
        price: "500 ALL" 
      },
      { 
        name: {
          en: "Linguine Bolognese",
          sq: "Linguine Bolonjeze"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Linguine with small shrimps",
          sq: "Linguine me karkalec i vogël"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Linguine with seafood",
          sq: "Linguine fruta deti"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Linguine with scampi",
          sq: "Linguine Skampi"
        }, 
        price: "1200 ALL" 
      },
      { 
        name: {
          en: "Linguine with first quality shrimps",
          sq: "Linguine me karkalec i madh"
        }, 
        price: "1200 ALL" 
      },
      { 
        name: {
          en: "Penne with shrimps and zucchini",
          sq: "Pene karkalec kungull"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Penne pana with ham",
          sq: "Pene pana proshutë"
        }, 
        price: "800 ALL" 
      },
      { 
        name: {
          en: "Risotto with vegetables",
          sq: "Rizoto perime"
        }, 
        price: "900 ALL" 
      },
      { 
        name: {
          en: "Risotto with seafood",
          sq: "Rizoto fruta deti"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Ravioli with truffle cream",
          sq: "Ravioli krem tartufi"
        }, 
        price: "1100 ALL" 
      },
      { 
        name: {
          en: "Ravioli with small shrimps",
          sq: "Ravioli karkalec i vogël"
        }, 
        price: "1100 ALL" 
      },
      { 
        name: {
          en: "Ravioli four cheese",
          sq: "Ravioli 4 djathrat"
        }, 
        price: "1000 ALL" 
      },
      { 
        name: {
          en: "Paccheri with seafood",
          sq: "Pakeri me fruta deti"
        }, 
        price: "1200 ALL" 
      }
    ]
  },
  {
    id: "soups",
    title: {
      en: "Soups & Salads",
      sq: "Supa & Sallatat"
    },
    description: {
      en: "Fresh and flavorful accompaniments to your meal.",
      sq: "Shoqërime të freskëta dhe të shijshme për vaktin tuaj."
    },
    items: [
      { 
        name: {
          en: "Fish soup",
          sq: "Supë peshku"
        }, 
        price: "600 ALL" 
      },
      { 
        name: {
          en: "Vegetable soup",
          sq: "Supë perime"
        }, 
        price: "500 ALL" 
      },
      { 
        name: {
          en: "Bruschetta",
          sq: "Brusketa"
        }, 
        price: "400 ALL" 
      },
      { 
        name: {
          en: "Titanic Salad",
          sq: "Sallatë Titanic"
        }, 
        price: "700 ALL" 
      },
      { 
        name: {
          en: "Arugula Salad",
          sq: "Sallatë Rukola"
        }, 
        price: "700 ALL" 
      },
      { 
        name: {
          en: "Lettuce Salad",
          sq: "Sallatë Jeshile"
        }, 
        price: "400 ALL" 
      },
      { 
        name: {
          en: "Mixed Salad",
          sq: "Sallatë Miks"
        }, 
        price: "500 ALL" 
      },
      { 
        name: {
          en: "Greek Salad",
          sq: "Sallatë Greke"
        }, 
        price: "600 ALL" 
      },
      { 
        name: {
          en: "Tuna Salad",
          sq: "Sallatë Tonë"
        }, 
        price: "700 ALL" 
      },
      { 
        name: {
          en: "Caesar Salad",
          sq: "Sallatë Cezar"
        }, 
        price: "700 ALL" 
      }
    ]
  },
  {
    id: "wines",
    title: {
      en: "Wines & Beverages",
      sq: "Verëra & Pijet"
    },
    description: {
      en: "Carefully selected wines and refreshing beverages to complement your meal.",
      sq: "Verëra të përzgjedhura me kujdes dhe pije freskuese për të plotësuar vaktin tuaj."
    },
    items: [
      // Red Wines
      { 
        name: {
          en: "Primitivo Salento 375 ml",
          sq: "Primitivo Salento 375 ml"
        }, 
        price: "1500 ALL" 
      },
      { 
        name: {
          en: "Sirio",
          sq: "Sirio"
        }, 
        price: "1700 ALL" 
      },
      { 
        name: {
          en: "Remole Toscana",
          sq: "Remole Toscana"
        }, 
        price: "2500 ALL" 
      },
      { 
        name: {
          en: "Boscarel",
          sq: "Boscarel"
        }, 
        price: "2500 ALL" 
      },
      { 
        name: {
          en: "Primitivo Salento",
          sq: "Primitivo Salento"
        }, 
        price: "2800 ALL" 
      },
      { 
        name: {
          en: "Primitivo (Zifa)",
          sq: "Primitivo (Zifa)"
        }, 
        price: "3500 ALL" 
      },
      { 
        name: {
          en: "Primitivo Imperio",
          sq: "Primitivo Imperio"
        }, 
        price: "4500 ALL" 
      },
      { 
        name: {
          en: "Papale",
          sq: "Papale"
        }, 
        price: "4500 ALL" 
      },
      { 
        name: {
          en: "Amarone",
          sq: "Amarone"
        }, 
        price: "6000 ALL" 
      },
      { 
        name: {
          en: "Brunelo di Montalcino",
          sq: "Brunelo di Montalcino"
        }, 
        price: "8500 ALL" 
      },

      // White Wines
      { 
        name: {
          en: "Gavi 375 ml",
          sq: "Gavi 375 ml"
        }, 
        price: "1800 ALL" 
      },
      { 
        name: {
          en: "Chardonnay Salento 375 ml",
          sq: "Chardonnay Salento 375 ml"
        }, 
        price: "1500 ALL" 
      },
      { 
        name: {
          en: "Pinot Grigo",
          sq: "Pinot Grigo"
        }, 
        price: "3000 ALL" 
      },
      { 
        name: {
          en: "Chardonnay",
          sq: "Chardonnay"
        }, 
        price: "3000 ALL" 
      },
      { 
        name: {
          en: "Greko di tufo",
          sq: "Greko di tufo"
        }, 
        price: "3000 ALL" 
      },
      { 
        name: {
          en: "Rose",
          sq: "Rose"
        }, 
        price: "3000 ALL" 
      },
      { 
        name: {
          en: "Gewürztraminer",
          sq: "Gewürztraminer"
        }, 
        price: "4400 ALL" 
      },

      // Beer
      { 
        name: {
          en: "Korca",
          sq: "Korca"
        }, 
        price: "300 ALL" 
      },
      { 
        name: {
          en: "Peroni",
          sq: "Peroni"
        }, 
        price: "350 ALL" 
      },
      { 
        name: {
          en: "Corona",
          sq: "Corona"
        }, 
        price: "500 ALL" 
      },
      { 
        name: {
          en: "Heineken",
          sq: "Heineken"
        }, 
        price: "450 ALL" 
      },

      // Soft Drinks
      { 
        name: {
          en: "Coca - Cola",
          sq: "Coca - Cola"
        }, 
        price: "250 ALL" 
      },
      { 
        name: {
          en: "Fanta (orange)",
          sq: "Fanta (portokall)"
        }, 
        price: "250 ALL" 
      },
      { 
        name: {
          en: "Water (0.5 lt)",
          sq: "Ujë (0.5 lt)"
        }, 
        price: "150 ALL" 
      },
      { 
        name: {
          en: "Water (0.7 lt)",
          sq: "Ujë (0.7 lt)"
        }, 
        price: "250 ALL" 
      },
      { 
        name: {
          en: "Red Bull",
          sq: "Red Bull"
        }, 
        price: "400 ALL" 
      }
    ]
  }
];
