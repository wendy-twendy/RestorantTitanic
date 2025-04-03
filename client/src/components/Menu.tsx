import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuCategories } from "@/data/menuData";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("fish");

  return (
    <section id="menu" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 section-heading">Our Menu</h2>
        <p className="text-center text-neutral-600 mb-12 max-w-xl mx-auto">
          Savor the authentic flavors of the Mediterranean
        </p>
        
        {/* Menu Categories Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="fish" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="flex flex-wrap justify-center p-0 mb-6 bg-transparent">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="mx-1 my-1 px-5 py-2 border border-primary-200 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {/* Menu Content */}
            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h3 className="text-2xl font-display font-semibold mb-2">{category.title}</h3>
                      <p className="text-neutral-600">{category.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.items.map((item, index) => (
                        <div key={index} className="menu-item">
                          <div className="flex justify-between mb-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <span className="font-medium text-accent">{item.price}</span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-neutral-500">{item.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {category.id === "wines" && (
                  <p className="text-sm text-neutral-500 text-center italic mt-4">
                    All prices are in Albanian Lek (ALL). Menu items and prices may change seasonally to ensure we serve only the freshest ingredients.
                  </p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
