
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBanner1 from "@/assets/hero-banner-1.png";
import heroBanner2 from "@/assets/hero-banner-2.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOffer, setShowOffer] = useState(false);

  const heroImages = [heroBanner1, heroBanner2];

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
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const offerTimer = setTimeout(() => {
      setShowOffer(true);
    }, 3000);
    return () => clearTimeout(offerTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="pt-16 lg:pt-20 bg-cream-white">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden bg-cream-white">
        <div className="relative w-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`w-full transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <img
                src={image}
                alt={`Nallamala Honeybee Park Banner ${index + 1}`}
                className="w-full h-auto object-contain"
                style={{ maxHeight: '80vh' }}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal p-1.5 sm:p-2 rounded-full transition-colors shadow-lg z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal p-1.5 sm:p-2 rounded-full transition-colors shadow-lg z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors shadow-md ${
                  index === currentSlide ? "bg-honey-gold" : "bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-4 bg-cream-beige rounded-full flex items-center justify-center shadow-sm">
                  <badge.icon className="h-8 w-8 text-forest-green" />
                </div>
                <h3 className="font-playfair font-semibold text-charcoal mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-charcoal mb-6">
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
                className="honey-gradient text-charcoal hover:scale-105 transition-transform border-0 shadow-md"
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center text-charcoal mb-12">
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
              <Card key={index} className="border-softGray hover:shadow-xl transition-shadow animate-fade-in bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 honey-gradient rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-2xl font-playfair font-bold text-charcoal">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-charcoal mb-3">
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
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center text-charcoal mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-softGray hover:shadow-lg transition-shadow animate-fade-in bg-white">
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
                    <p className="font-semibold text-charcoal">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 warm-brown-gradient text-white">
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
              className="honey-gradient text-charcoal hover:scale-105 transition-transform font-semibold border-0 shadow-md"
              asChild
            >
              <Link to="/shop">Shop All Honey</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-charcoal shadow-md"
              asChild
            >
              <Link to="/contact">Visit Our Farm</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Offer Popup */}
      {showOffer && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full border-honey-gold animate-fade-in bg-white shadow-2xl">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-playfair font-bold text-charcoal mb-3">
                Special Offer!
              </h3>
              <p className="text-muted-foreground mb-6">
                Get 10% OFF your first honey order when you subscribe to our newsletter
              </p>
              <div className="space-y-3">
                <Button className="w-full honey-gradient text-charcoal border-0 shadow-md" asChild>
                  <Link to="/shop" onClick={() => setShowOffer(false)}>
                    Claim Your Discount
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground hover:bg-softGray"
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
