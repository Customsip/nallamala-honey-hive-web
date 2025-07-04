
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOffer, setShowOffer] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      title: "Pure Raw Honey from Nallamala Forest",
      subtitle: "100% Natural • Lab Tested • Unprocessed",
      cta: "Shop Now"
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Sustainable Beekeeping Practices",
      subtitle: "Supporting Local Farmers • Protecting Nature",
      cta: "Learn More"
    },
    {
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      title: "Farm Fresh from Our Hives",
      subtitle: "Direct from Balapanur • No Middlemen",
      cta: "Visit Gallery"
    },
    {
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      title: "Join Our Beekeeping Training",
      subtitle: "Learn • Earn • Grow Your Business",
      cta: "Get Started"
    },
    {
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      title: "Premium Honey Varieties",
      subtitle: "12+ Types • ₹650/kg • Free Shipping",
      cta: "Browse All"
    }
  ];

  const trustBadges = [
    { icon: Shield, title: "100% Raw", desc: "Unprocessed & Natural" },
    { icon: Award, title: "Lab Tested", desc: "Quality Certified" },
    { icon: Truck, title: "Free Shipping", desc: "Across India" },
    { icon: Star, title: "FSSAI Approved", desc: "Food Safety Licensed" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Hyderabad",
      rating: 5,
      text: "The best honey I've ever tasted! You can really taste the difference - it's so pure and natural."
    },
    {
      name: "Rajesh Kumar",
      location: "Bangalore",
      rating: 5,
      text: "Ordered for my family and everyone loves it. The comb honey is exceptional!"
    },
    {
      name: "Anita Reddy",
      location: "Chennai",
      rating: 5,
      text: "Fast delivery and excellent packaging. The honey is authentic and worth every rupee."
    },
    {
      name: "Vikram Singh",
      location: "Mumbai",
      rating: 5,
      text: "Been buying from them for months now. Consistent quality and great customer service."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const offerTimer = setTimeout(() => {
      setShowOffer(true);
    }, 3000);
    return () => clearTimeout(offerTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Slider */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl animate-fade-in">
                <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="honey-gradient text-forest-green hover:scale-105 transition-transform font-semibold"
                  asChild
                >
                  <Link to="/shop">{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-honey-gold" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-honey-gold/10 rounded-full flex items-center justify-center">
                  <badge.icon className="h-8 w-8 text-honey-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-forest-green mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-forest-green mb-6">
                From Our Hives to Your Home
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Nestled in the pristine Nallamala forest of Andhra Pradesh, our sustainable bee farm produces 
                100% pure, raw honey using traditional beekeeping methods. We don't harvest from outside - 
                every drop comes from our own carefully maintained hives.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With complete transparency in our extraction and bottling process, we ensure you get the 
                purest honey nature has to offer, lab-tested and certified for your family's health.
              </p>
              <Button
                size="lg"
                className="honey-gradient text-forest-green hover:scale-105 transition-transform"
                asChild
              >
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
                alt="Beekeeping process"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center text-forest-green mb-12">
            How We Deliver Pure Honey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Harvest",
                desc: "Careful extraction from our onsite beehives using traditional methods"
              },
              {
                step: "02", 
                title: "Bottle",
                desc: "Raw honey is filtered and bottled without heating or processing"
              },
              {
                step: "03",
                title: "Ship",
                desc: "Packed with care and shipped fresh across India with free delivery"
              }
            ].map((process, index) => (
              <Card key={index} className="border-honey-gold/20 hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 honey-gradient rounded-full flex items-center justify-center">
                    <span className="text-2xl font-playfair font-bold text-forest-green">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-forest-green mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center text-forest-green mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-honey-gold/20 hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-honey-gold text-honey-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-forest-green">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 forest-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
            Ready to Taste Pure Honey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of happy customers who trust Nallamala Honeybee Park for premium honey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="honey-gradient text-forest-green hover:scale-105 transition-transform font-semibold"
              asChild
            >
              <Link to="/shop">Shop All Honey</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-forest-green"
              asChild
            >
              <Link to="/contact">Visit Our Farm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Offer Popup */}
      {showOffer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full border-honey-gold animate-fade-in">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-playfair font-bold text-forest-green mb-3">
                Special Offer!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get 10% OFF your first honey order when you subscribe to our newsletter
              </p>
              <div className="space-y-3">
                <Button className="w-full honey-gradient text-forest-green" asChild>
                  <Link to="/shop" onClick={() => setShowOffer(false)}>
                    Claim Your Discount
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground"
                  onClick={() => setShowOffer(false)}
                >
                  Maybe Later
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Home;
