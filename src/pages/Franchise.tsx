
import { useState } from "react";
import { CheckCircle, Users, BookOpen, TrendingUp, Award, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Franchise = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    investment: "",
    interest: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Send via WhatsApp
    const message = `Franchise Inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nExperience: ${formData.experience}\nInvestment Capacity: ${formData.investment}\nArea of Interest: ${formData.interest}`;
    const whatsappUrl = `https://wa.me/917842043222?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Application Sent!",
      description: "We'll contact you soon to discuss your franchise opportunity.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      investment: "",
      interest: ""
    });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Proven Business Model",
      description: "Join a successful honey business with established market demand"
    },
    {
      icon: BookOpen,
      title: "Complete Training",
      description: "Comprehensive beekeeping and business training included"
    },
    {
      icon: Handshake,
      title: "Ongoing Support",
      description: "Continuous technical and marketing support from our team"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Access to our quality standards and certification processes"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Join a network of successful beekeepers and franchise partners"
    }
  ];

  const programs = [
    {
      title: "Beekeeping Franchise",
      description: "Start your own honey production business with our proven methods",
      duration: "6 months setup + ongoing support",
      investment: "₹2,00,000 - ₹5,00,000",
      includes: [
        "Complete beekeeping setup",
        "Technical training",
        "Marketing materials",
        "Quality certification",
        "Business mentorship"
      ]
    },
    {
      title: "Training & Consultation",
      description: "Learn professional beekeeping for existing farmers or beginners",
      duration: "15-day intensive program",
      investment: "₹25,000 per person",
      includes: [
        "Hands-on training",
        "Theory and practical sessions",
        "Equipment guidance",
        "Business planning",
        "Ongoing support"
      ]
    },
    {
      title: "Educational Visits",
      description: "Perfect for schools, colleges, and agricultural institutions",
      duration: "Half-day to full-day programs",
      investment: "₹500 per person",
      includes: [
        "Farm tour",
        "Beekeeping demonstration",
        "Educational materials",
        "Hands-on activities",
        "Refreshments"
      ]
    }
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
            Beekeeping Franchise & Training
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our mission to promote sustainable beekeeping across India. Whether you want to start 
            your own honey business or learn professional beekeeping, we're here to guide you.
          </p>
          <Button
            size="lg"
            className="honey-gradient text-forest-green hover:scale-105 transition-transform"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center text-forest-green mb-12">
            Why Partner With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-honey-gold/20 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-honey-gold/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-honey-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-forest-green mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center text-forest-green mb-12">
            Our Programs
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-honey-gold/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-forest-green">{program.title}</CardTitle>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-forest-green">Duration:</p>
                    <p className="text-muted-foreground">{program.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest-green">Investment:</p>
                    <p className="text-honey-gold font-bold text-lg">{program.investment}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest-green mb-2">Includes:</p>
                    <ul className="space-y-1">
                      {program.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full honey-gradient text-forest-green hover:scale-105 transition-transform"
                    onClick={() => setFormData(prev => ({ ...prev, interest: program.title }))}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-playfair font-bold text-forest-green mb-4">
                Apply for Partnership
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you with detailed information
              </p>
            </div>

            <Card className="border-honey-gold/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your full name"
                        className="border-honey-gold/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email"
                        className="border-honey-gold/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Enter your phone number"
                        className="border-honey-gold/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="City, State"
                        className="border-honey-gold/20"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Agricultural/Business Experience</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, experience: value }))}>
                      <SelectTrigger className="border-honey-gold/20">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No experience</SelectItem>
                        <SelectItem value="beginner">1-2 years</SelectItem>
                        <SelectItem value="intermediate">3-5 years</SelectItem>
                        <SelectItem value="experienced">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="investment">Investment Capacity</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, investment: value }))}>
                      <SelectTrigger className="border-honey-gold/20">
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1L">Under ₹1,00,000</SelectItem>
                        <SelectItem value="1L-3L">₹1,00,000 - ₹3,00,000</SelectItem>
                        <SelectItem value="3L-5L">₹3,00,000 - ₹5,00,000</SelectItem>
                        <SelectItem value="above-5L">Above ₹5,00,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select 
                      value={formData.interest}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, interest: value }))}
                    >
                      <SelectTrigger className="border-honey-gold/20">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Beekeeping Franchise">Beekeeping Franchise</SelectItem>
                        <SelectItem value="Training & Consultation">Training & Consultation</SelectItem>
                        <SelectItem value="Educational Visits">Educational Visits</SelectItem>
                        <SelectItem value="All">All Programs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full honey-gradient text-forest-green hover:scale-105 transition-transform font-semibold"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 forest-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Ready to Start Your Beekeeping Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful beekeepers who have transformed their lives through 
            sustainable honey production with Nallamala Honeybee Park.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="honey-gradient text-forest-green hover:scale-105 transition-transform"
            >
              Schedule a Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-forest-green"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Franchise;
