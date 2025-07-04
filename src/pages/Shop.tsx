
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const honeyTypes = [
    {
      id: "berry",
      name: "Berry Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      description: "Sweet and tangy with natural berry essence"
    },
    {
      id: "acacia",
      name: "Acacia Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      description: "Light, delicate flavor with floral notes"
    },
    {
      id: "tulasi",
      name: "Tulasi Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Sacred basil honey with medicinal properties"
    },
    {
      id: "ajwain",
      name: "Ajwain Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      description: "Unique caraway flavor, great for digestion"
    },
    {
      id: "jamun",
      name: "Black Jamun Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      description: "Rich, dark honey with antioxidants"
    },
    {
      id: "sesame",
      name: "Sesame Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      description: "Nutty flavor with health benefits"
    },
    {
      id: "fennel",
      name: "Fennel Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      description: "Aromatic with digestive properties"
    },
    {
      id: "forest",
      name: "Forest Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "Wild forest honey with complex flavors"
    },
    {
      id: "multiflower",
      name: "Multi Flower Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      description: "Blend of multiple flower nectars"
    },
    {
      id: "beach",
      name: "Indian Beach Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      description: "Coastal honey with unique mineral content"
    },
    {
      id: "mustard",
      name: "Mustard Honey",
      price: 650,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      description: "Golden honey with pungent notes"
    },
    {
      id: "comb",
      name: "Comb Honey",
      price: 1200,
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      description: "Pure honeycomb with wax - premium quality",
      special: true
    }
  ];

  const specialProducts = [
    {
      id: "sampler",
      name: "Honey Sampler Pack",
      price: 50,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "10ml of all honey types - perfect for tasting"
    }
  ];

  const giftingOptions = [
    {
      id: "gift-small",
      name: "Premium Gift Box (3 jars)",
      price: 1950,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      description: "Beautiful packaging with 3 different honey types"
    },
    {
      id: "gift-large",
      name: "Deluxe Gift Set (6 jars)",
      price: 3900,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      description: "Premium wooden box with 6 honey varieties"
    }
  ];

  const updateQuantity = (id: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 1) + change)
    }));
  };

  const handleAddToCart = (product: any) => {
    const quantity = quantities[product.id] || 1;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
    
    toast({
      title: "Added to cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
    
    // Reset quantity
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  const ProductCard = ({ product }: { product: any }) => (
    <Card className="border-honey-gold/20 hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
        />
        {product.special && (
          <Badge className="absolute top-2 right-2 bg-honey-gold text-forest-green">
            Premium
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-playfair font-semibold text-forest-green mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-honey-gold">
              ₹{product.price}
            </span>
            <span className="text-sm text-muted-foreground">/kg</span>
          </div>
          {product.price === 650 && (
            <Badge variant="outline" className="text-xs border-green-500 text-green-600">
              Free Delivery
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Quantity:</span>
          <div className="flex items-center space-x-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => updateQuantity(product.id, -1)}
              className="h-8 w-8 p-0"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center">{quantities[product.id] || 1}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => updateQuantity(product.id, 1)}
              className="h-8 w-8 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full honey-gradient text-forest-green hover:scale-105 transition-transform"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart - ₹{product.price * (quantities[product.id] || 1)}
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-honey-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-4">
            Shop Premium Honey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of 12+ pure honey varieties, all harvested from our sustainable bee farm
          </p>
        </div>
      </section>

      {/* Main Honey Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-forest-green mb-8">
            Our Honey Collection
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {honeyTypes.map((honey) => (
              <ProductCard key={honey.id} product={honey} />
            ))}
          </div>
        </div>
      </section>

      {/* Honey Samplers */}
      <section id="samplers" className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-forest-green mb-8">
            Honey Samplers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Gifting Options */}
      <section id="gifting" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-forest-green mb-8">
            Gifting Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {giftingOptions.map((gift) => (
              <ProductCard key={gift.id} product={gift} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 forest-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Why Choose Our Honey?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-4">🐝</div>
              <h3 className="font-playfair font-semibold mb-2">100% Raw</h3>
              <p className="opacity-90">Unprocessed honey directly from our hives</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="font-playfair font-semibold mb-2">Lab Tested</h3>
              <p className="opacity-90">Quality assured with proper certification</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-playfair font-semibold mb-2">Free Delivery</h3>
              <p className="opacity-90">Shipped across India at no extra cost</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
