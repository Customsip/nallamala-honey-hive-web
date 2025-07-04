
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "farm", name: "Bee Farm" },
    { id: "people", name: "People & Training" },
    { id: "processing", name: "Processing" }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      alt: "Bees in action",
      category: "farm",
      title: "Our Busy Bees at Work"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Beehive boxes in nature",
      category: "farm",
      title: "Sustainable Beehive Setup"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Honey extraction process",
      category: "processing",
      title: "Honey Extraction Process"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      alt: "Farm training session",
      category: "people",
      title: "Beekeeping Training Session"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      alt: "Nallamala forest view",
      category: "farm",
      title: "Beautiful Nallamala Forest"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      alt: "Quality testing",
      category: "processing",
      title: "Quality Control & Testing"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Team members",
      category: "people",
      title: "Our Dedicated Team"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Packaging process",
      category: "processing",
      title: "Careful Packaging Process"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      alt: "School visit",
      category: "people",
      title: "Educational School Visit"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      alt: "Honeycomb structure",
      category: "farm",
      title: "Natural Honeycomb Formation"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      alt: "Bottling honey",
      category: "processing",
      title: "Fresh Honey Bottling"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Franchise training",
      category: "people",
      title: "Franchise Training Program"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-honey-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our sustainable bee farm, meet our team, and see how we craft premium honey
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-honey-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors font-medium ${
                  selectedCategory === category.id
                    ? "bg-honey-gold text-forest-green"
                    : "bg-white border border-honey-gold/20 text-forest-green hover:bg-honey-cream"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      <p className="text-sm font-medium">Click to view</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-playfair font-semibold text-forest-green">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-honey-gold transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 forest-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Visit Our Farm
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience our sustainable beekeeping practices firsthand. We welcome visitors, students, 
            and aspiring beekeepers to learn from our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="honey-gradient text-forest-green px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
              Schedule a Visit
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-forest-green transition-colors">
              Learn About Training
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
