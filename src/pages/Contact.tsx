
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Send via WhatsApp
    const message = `Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/917842043222?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon via WhatsApp or email.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 78420 43222",
      action: "tel:+917842043222"
    },
    {
      icon: Mail,
      title: "Email",
      value: "NallamalaHoneyBeePark@gmail.com",
      action: "mailto:NallamalaHoneyBeePark@gmail.com"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Balapanur, Nandyal District, Andhra Pradesh 518112",
      action: null
    },
    {
      icon: Clock,
      title: "Farm Hours",
      value: "Monday - Saturday: 9 AM - 6 PM",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@Nallamala_Honey_Bee_Park",
      url: "https://instagram.com/Nallamala_Honey_Bee_Park"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Nallamala Honey Park",
      url: "https://facebook.com/NallamalaHoneyPark"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-honey-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for orders, farm visits, or beekeeping training programs
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-forest-green mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear from you! Whether you have questions about our honey, 
                  want to visit our farm, or are interested in our training programs, 
                  we're here to help.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-honey-gold/20 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-honey-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-honey-gold" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-forest-green mb-1">
                            {info.title}
                          </h3>
                          {info.action ? (
                            <a
                              href={info.action}
                              className="text-muted-foreground hover:text-honey-gold transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-playfair font-semibold text-forest-green mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-honey-gold/10 hover:bg-honey-gold/20 px-4 py-2 rounded-lg transition-colors group"
                    >
                      <social.icon className="h-5 w-5 text-honey-gold group-hover:scale-110 transition-transform" />
                      <span className="text-forest-green font-medium">{social.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-honey-gold/20">
                <CardHeader>
                  <CardTitle className="text-forest-green">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
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
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email"
                        className="border-honey-gold/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us how we can help you..."
                        className="w-full p-3 border border-honey-gold/20 rounded-md resize-none h-32"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full honey-gradient text-forest-green hover:scale-105 transition-transform"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-forest-green mb-8">
            Find Our Farm
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.7234567890!2d78.123456!3d15.987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU5JzE1LjYiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nallamala Honeybee Park Location"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                <MapPin className="inline h-4 w-4 mr-1" />
                F9XW+V89, The Highway, Balapanur, Andhra Pradesh 518112
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
