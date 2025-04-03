import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Restorant Titanic seafood dish"
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Restorant Titanic interior"
  },
  {
    url: "https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    alt: "Dining at Restorant Titanic"
  }
];

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Carousel
        className="w-full h-full"
        selectedIndex={activeSlide}
        setSelectedIndex={setActiveSlide}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center px-4 z-10">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 drop-shadow-lg">
                      Restorant Titanic
                    </h2>
                    <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl mx-auto font-light">
                      Authentic Italian & Fresh Seafood on the Adriatic Coast
                    </p>
                    <p className="text-lg text-white mb-8 max-w-xl mx-auto">
                      Experience the finest Mediterranean cuisine with breathtaking sea views in the heart of Vlore
                    </p>
                    <a href="#menu">
                      <Button variant="default" className="bg-accent hover:bg-accent/90 text-white shadow-md">
                        Explore Our Menu
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === activeSlide ? "bg-accent opacity-100" : "bg-white opacity-50 hover:opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block z-20">
          <CarouselPrevious className="bg-white/20 hover:bg-white/40 text-white" />
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block z-20">
          <CarouselNext className="bg-white/20 hover:bg-white/40 text-white" />
        </div>
      </Carousel>
    </section>
  );
}
