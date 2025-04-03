import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: "dishes" | "ambience";
}

// Gallery image data using actual photos from the restaurant
const galleryImages: GalleryImage[] = [
  // Dish photos
  {
    src: "/photos/dish-1.jpg",
    alt: "Seafood pasta with clams and mussels",
    category: "dishes"
  },
  {
    src: "/photos/dish-2.jpg",
    alt: "Fresh Mediterranean seafood platter",
    category: "dishes"
  },
  {
    src: "/photos/dish-3.jpg",
    alt: "Grilled fish with herbs",
    category: "dishes"
  },
  {
    src: "/photos/dish-4.jpg",
    alt: "Seafood risotto with prawns",
    category: "dishes"
  },
  {
    src: "/photos/dish-5.jpg",
    alt: "Grilled calamari with vegetables",
    category: "dishes"
  },
  {
    src: "/photos/dish-6.jpg",
    alt: "Traditional Italian pasta dish",
    category: "dishes"
  },
  {
    src: "/photos/dish-7.jpg",
    alt: "Fresh fish with citrus garnish",
    category: "dishes"
  },
  {
    src: "/photos/dish-8.jpg",
    alt: "Seafood soup with mussels",
    category: "dishes"
  },
  // Ambience photos
  {
    src: "/photos/ambience-2.jpg",
    alt: "Restorant Titanic interior view",
    category: "ambience"
  },
  {
    src: "/photos/ambience-3.jpg",
    alt: "Dining area with elegant setting",
    category: "ambience"
  },
  {
    src: "/photos/ambience-4.jpg",
    alt: "Oceanfront terrace dining",
    category: "ambience"
  },
  {
    src: "/photos/ambience-5.jpg",
    alt: "Wine display in the restaurant",
    category: "ambience"
  },
  {
    src: "/photos/ambience-6.jpg",
    alt: "Seaside dining with sunset view",
    category: "ambience"
  },
  {
    src: "/photos/ambience-7.jpg",
    alt: "Outdoor terrace with sea view",
    category: "ambience"
  }
];

type FilterCategory = "all" | "dishes" | "ambience";

export default function Gallery() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setOpenLightbox(true);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 section-heading">Our Gallery</h2>
        <p className="text-center text-neutral-600 mb-12 max-w-xl mx-auto">A glimpse into the Restorant Titanic experience</p>
        
        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center mb-8">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={`mx-1 ${filter === "all" ? "bg-primary text-white" : "border-primary-200 text-primary"}`}
          >
            All
          </Button>
          <Button 
            variant={filter === "dishes" ? "default" : "outline"}
            onClick={() => setFilter("dishes")}
            className={`mx-1 ${filter === "dishes" ? "bg-primary text-white" : "border-primary-200 text-primary"}`}
          >
            Dishes
          </Button>
          <Button 
            variant={filter === "ambience" ? "default" : "outline"}
            onClick={() => setFilter("ambience")}
            className={`mx-1 ${filter === "ambience" ? "bg-primary text-white" : "border-primary-200 text-primary"}`}
          >
            Ambience
          </Button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="gallery-item cursor-pointer" onClick={() => handleImageClick(image)}>
              <div className="relative overflow-hidden rounded-lg shadow-md h-64">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        <Dialog open={openLightbox} onOpenChange={setOpenLightbox}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
            <div className="relative">
              <DialogClose className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-10">
                <X className="h-6 w-6" />
              </DialogClose>
            </div>
            {selectedImage && (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
