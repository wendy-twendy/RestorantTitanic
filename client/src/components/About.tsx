import { CheckIcon } from "lucide-react";

const features = [
  "Breathtaking waterfront views",
  "Authentic Italian and Mediterranean cuisine",
  "Fresh, locally-sourced seafood",
  "Warm, attentive service",
  "Relaxing atmosphere perfect for any occasion"
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 section-heading">Our Story</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                Welcome to Restorant Titanic, a premier dining destination in Vlore that brings together authentic Italian traditions and the freshest seafood from the Adriatic Sea.
              </p>
              <p className="mb-4">
                Established with a passion for exceptional cuisine and hospitality, Restorant Titanic has become a beloved culinary landmark on Vlore's coastline. Our restaurant offers a warm, inviting atmosphere where every meal becomes a memorable experience.
              </p>
              <p className="mb-4">
                Our team of dedicated chefs combines time-honored Italian recipes with locally-sourced seafood to create dishes that celebrate the rich flavors of the Mediterranean. Whether you're enjoying our handmade pastas, wood-fired pizzas, or signature seafood specialties, each plate tells a story of tradition and quality.
              </p>
              <p>
                At Restorant Titanic, we believe dining is about more than just food—it's about creating moments to treasure with family and friends against the backdrop of the beautiful Adriatic coast.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-display font-semibold mb-4">Why Choose Us</h3>
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
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Restorant Titanic interior" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Delicious seafood dish" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative h-40 overflow-hidden rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1554679665-f5537f187268?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Restaurant ambiance" 
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
