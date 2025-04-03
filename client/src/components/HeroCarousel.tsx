import { Button } from "@/components/ui/button";

export default function HeroCarousel() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div className="h-full w-full">
        <div className="relative h-full w-full">
          <img
            src="/photos/ambience-6.jpg"
            alt="Restorant Titanic dining area with sea view"
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
      </div>
    </section>
  );
}
