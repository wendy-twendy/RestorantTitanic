import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: "dishes" | "ambience";
}

// Gallery image data
const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Delicious seafood pasta",
    category: "dishes"
  },
  {
    src: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Fresh fish dish",
    category: "dishes"
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Restaurant interior",
    category: "ambience"
  },
  {
    src: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Grilled seafood platter",
    category: "dishes"
  },
  {
    src: "https://images.unsplash.com/photo-1526234362653-3b75a0c07438?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Dining area with sea view",
    category: "ambience"
  },
  {
    src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Italian pasta dish",
    category: "dishes"
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Restaurant terrace",
    category: "ambience"
  },
  {
    src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Seafood soup",
    category: "dishes"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Mediterranean fish dish",
    category: "dishes"
  },
  {
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Waterfront restaurant view",
    category: "ambience"
  },
  {
    src: "https://images.unsplash.com/photo-1579247386671-481a5cb894ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Fine dining experience",
    category: "ambience"
  },
  {
    src: "https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    alt: "Grilled whole fish",
    category: "dishes"
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
