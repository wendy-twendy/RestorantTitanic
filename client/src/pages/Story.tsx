import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function StoryPage() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link href="/#about" className="inline-flex items-center text-primary hover:text-accent mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Story</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Our Heritage</h2>
              <p className="mb-4">
                Welcome to Restorant Titanic, a premier dining destination in Vlore that brings together authentic Italian traditions and the freshest seafood from the Adriatic Sea.
              </p>
              <p className="mb-4">
                Established with a passion for exceptional cuisine and hospitality, Restorant Titanic has become a beloved culinary landmark on Vlore's coastline. Our restaurant offers a warm, inviting atmosphere where every meal becomes a memorable experience.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Our Culinary Philosophy</h2>
              <p className="mb-4">
                Our team of dedicated chefs combines time-honored Italian recipes with locally-sourced seafood to create dishes that celebrate the rich flavors of the Mediterranean. Whether you're enjoying our handmade pastas, wood-fired pizzas, or signature seafood specialties, each plate tells a story of tradition and quality.
              </p>
              <p className="mb-4">
                The menu at Restorant Titanic reflects our dedication to using only the finest, freshest ingredients. Every morning, our chef personally selects the day's catch from local fishermen, ensuring that what reaches your table represents the best the Adriatic has to offer.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Our Commitment</h2>
              <p className="mb-4">
                At Restorant Titanic, we believe dining is about more than just food—it's about creating moments to treasure with family and friends against the backdrop of the beautiful Adriatic coast.
              </p>
              <p className="mb-4">
                From our attentive service to our thoughtfully crafted dishes, every aspect of Restorant Titanic is designed to provide an authentic Mediterranean dining experience. We are committed to maintaining the highest standards of quality and hospitality, ensuring that each visit exceeds expectations.
              </p>
              <p>
                As we look to the future, we remain dedicated to our founding principles: exceptional food, warm hospitality, and a celebration of the rich culinary traditions that make the Mediterranean region so special.
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="/#about">
                <Button variant="outline" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/photos/ambience-4.jpg" 
                alt="Restorant Titanic oceanfront view" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/photos/dish-2.jpg" 
                  alt="Fresh seafood platter" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="/photos/ambience-7.jpg" 
                  alt="Outdoor dining terrace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}