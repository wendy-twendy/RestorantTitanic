// Menu categories and items
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

export const menuCategories: MenuCategory[] = [
  {
    id: "fish",
    title: "Fish Specialties",
    description: "Fresh from the Adriatic Sea, our seafood is selected daily to ensure the highest quality.",
    items: [
      { name: "Fish (I quality)", price: "7000 ALL" },
      { name: "Fish (II quality)", price: "5500 ALL" },
      { name: "Fish (III quality)", price: "4500 ALL" },
      { name: "Oven baked fish with vegetables", price: "7000 ALL" },
      { name: "Grilled wild shrimps (0.3 kg)", price: "2100 ALL" },
      { name: "Scampi (I quality, 0.3 kg)", price: "2100 ALL" },
      { name: "Red goat-fish (I quality)", price: "5000 ALL" },
      { name: "Grilled salmon (0.3 kg)", price: "1800 ALL" },
      { name: "Raw fish according to the quality", price: "Price varies" },
      { name: "Lobster (1 kg)", price: "14000 ALL" },
      { name: "Sea cicada (1 kg)", price: "14000 ALL" }
    ]
  },
  {
    id: "appetizers",
    title: "Grilled & Fried Appetizers",
    description: "Perfect starters to share and enjoy with our selection of wines.",
    items: [
      { name: "Grilled octopus", price: "1900 ALL" },
      { name: "Sauteed mussels", price: "800 ALL" },
      { name: "Sauteed shrimps (0.2 kg)", price: "1400 ALL" },
      { name: "Mixed fried seafood", price: "1500 ALL" },
      { name: "Mixed grilled seafood (0.3 kg)", price: "1500 ALL" },
      { name: "Mixed grilled seafood (0.5 kg)", price: "2800 ALL" },
      { name: "Fried shrimps", price: "1500 ALL" },
      { name: "Fried calamari", price: "1500 ALL" },
      { name: "Shrimps saganaki", price: "1300 ALL" },
      { name: "Grilled squid", price: "1800 ALL" },
      { name: "A Capesante (1 piece)", price: "400 ALL" },
      { name: "Fish balls", price: "1000 ALL" },
      { name: "Crab balls", price: "1000 ALL" },
      { name: "Small appetizer (2 pax)", price: "2750 ALL" },
      { name: "Large appetizer (4 pax)", price: "5500 ALL" }
    ]
  },
  {
    id: "crudo",
    title: "Crudo Appetizers",
    description: "Fresh raw delicacies prepared in the traditional Mediterranean style.",
    items: [
      { name: "Crude shrimps (0.2 kg)", price: "1400 ALL" },
      { name: "Crude salmon (0.2 kg)", price: "1500 ALL" },
      { name: "Crude scampi (0.3 kg)", price: "2100 ALL" },
      { name: "Octapus carpaccio (0.3 kg)", price: "1500 ALL" },
      { name: "Crude (2 pax)", price: "2750 ALL" },
      { name: "Crude (4 pax)", price: "5500 ALL" },
      { name: "Marinated acuge", price: "1000 ALL" },
      { name: "Octapus Salad", price: "1800 ALL" },
      { name: "Salad seafood", price: "1500 ALL" }
    ]
  },
  {
    id: "pasta",
    title: "Pasta & Risotto",
    description: "Traditional Italian pastas and risottos with Mediterranean influences.",
    items: [
      { name: "Linguine with tomato sauce", price: "600 ALL" },
      { name: "Linguine with butter", price: "500 ALL" },
      { name: "Linguine Bolognese", price: "1000 ALL" },
      { name: "Linguine with small shrimps", price: "1000 ALL" },
      { name: "Linguine with seafood", price: "1000 ALL" },
      { name: "Linguine with scampi", price: "1200 ALL" },
      { name: "Linguine with first quality shrimps", price: "1200 ALL" },
      { name: "Penne with shrimps and zucchini", price: "1000 ALL" },
      { name: "Penne pana with ham", price: "800 ALL" },
      { name: "Risotto with vegetables", price: "900 ALL" },
      { name: "Risotto with seafood", price: "1000 ALL" },
      { name: "Ravioli with truffle cream", price: "1100 ALL" },
      { name: "Ravioli with small shrimps", price: "1100 ALL" },
      { name: "Ravioli four cheese", price: "1000 ALL" },
      { name: "Paccheri with seafood", price: "1200 ALL" }
    ]
  },
  {
    id: "soups",
    title: "Soups & Salads",
    description: "Fresh and flavorful accompaniments to your meal.",
    items: [
      { name: "Fish soup", price: "600 ALL" },
      { name: "Vegetable soup", price: "500 ALL" },
      { name: "Bruschetta", price: "400 ALL" },
      { name: "Titanic Salad", price: "700 ALL" },
      { name: "Arugula Salad", price: "700 ALL" },
      { name: "Lettuce Salad", price: "400 ALL" },
      { name: "Mixed Salad", price: "500 ALL" },
      { name: "Greek Salad", price: "600 ALL" },
      { name: "Tuna Salad", price: "700 ALL" },
      { name: "Caesar Salad", price: "700 ALL" }
    ]
  },
  {
    id: "wines",
    title: "Wines & Beverages",
    description: "Carefully selected wines and refreshing beverages to complement your meal.",
    items: [
      // Red Wines
      { name: "Primitivo Salento 375 ml", price: "1500 ALL" },
      { name: "Sirio", price: "1700 ALL" },
      { name: "Remole Toscana", price: "2500 ALL" },
      { name: "Boscarel", price: "2500 ALL" },
      { name: "Primitivo Salento", price: "2800 ALL" },
      { name: "Primitivo (Zifa)", price: "3500 ALL" },
      { name: "Primitivo Imperio", price: "4500 ALL" },
      { name: "Papale", price: "4500 ALL" },
      { name: "Amarone", price: "6000 ALL" },
      { name: "Brunelo di Montalcino", price: "8500 ALL" },

      // White Wines
      { name: "Gavi 375 ml", price: "1800 ALL" },
      { name: "Chardonnay Salento 375 ml", price: "1500 ALL" },
      { name: "Pinot Grigo", price: "3000 ALL" },
      { name: "Chardonnay", price: "3000 ALL" },
      { name: "Greko di tufo", price: "3000 ALL" },
      { name: "Rose", price: "3000 ALL" },
      { name: "Gewürztraminer", price: "4400 ALL" },

      // Beer
      { name: "Korca", price: "300 ALL" },
      { name: "Peroni", price: "350 ALL" },
      { name: "Corona", price: "500 ALL" },
      { name: "Heineken", price: "450 ALL" },

      // Soft Drinks
      { name: "Coca - Cola", price: "250 ALL" },
      { name: "Fanta (orange)", price: "250 ALL" },
      { name: "Water (0.5 lt)", price: "150 ALL" },
      { name: "Water (0.7 lt)", price: "250 ALL" },
      { name: "Red Bull", price: "400 ALL" }
    ]
  }
];
