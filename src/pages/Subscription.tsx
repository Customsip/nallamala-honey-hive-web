
import { useState } from "react";
import { Check, Gift, Truck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Subscription = () => {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    preferences: ""
  });

  const subscriptionPlans = [
    {
      id: "monthly-basic",
      name: "Monthly Essentials",
      price: "₹650",
      interval: "per month",
      savings: "Free Delivery",
      description: "Perfect for individuals and small families",
      features: [
        "1kg premium honey variety each month",
        "Rotating selection of our 12+ varieties",
        "Free delivery across India",
        "Quality guarantee",
        "Cancel anytime"
      ],
      popular: false
    },
    {
      id: "monthly-family",
      name: "Family Pack",
      price: "₹1,200",
      interval: "per month",
      savings: "Save ₹100",
      description: "Ideal for families who love variety",
      features: [
        "2kg honey (2 different varieties)",
        "Mix and match any varieties",
        "Free delivery across India",
        "Priority customer support",
        "Exclusive seasonal varieties",
        "Cancel anytime"
      ],
      popular: true
    },
    {
      id: "quarterly-premium",
      name: "Quarterly Premium",
      price: "₹1,800",
      interval: "per quarter",
      savings: "Save ₹150",
      description: "Best value for honey enthusiasts",
      features: [
        "3kg honey delivered quarterly",
        "Includes rare comb honey sample",
        "All 12+ varieties over the year",
        "Free delivery & premium packaging",
        "Early access to new varieties",
        "Beekeeping newsletter",
        "Cancel anytime"
      ],
      popular: false
    }
  ];

  const handleSubscribe = (planId: string) => {
    if (!customerDetails.name || !customerDetails.email || !customerDetails.phone || !customerDetails.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const plan = subscriptionPlans.find(p => p.id === planId);
    if (!plan) return;

    // Send subscription request via WhatsApp
    const message = `🍯 Subscription Request - ${plan.name}\n\n` +
      `📋 Plan Details:\n` +
      `Plan: ${plan.name}\n` +
      `Price: ${plan.price} ${plan.interval}\n\n` +
      `👤 Customer Details:\n` +
      `Name: ${customerDetails.name}\n` +
      `Email: ${customerDetails.email}\n` +
      `Phone: ${customerDetails.phone}\n` +
      `Address: ${customerDetails.address}\n` +
      `Preferences: ${customerDetails.preferences || "None specified"}\n\n` +
      `Please confirm this subscription plan. Thank you! 🙏`;

    const whatsappUrl = `https://wa.me/917842043222?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Subscription Request Sent!",
      description: "We'll contact you soon to set up your honey subscription.",
    });

    setCustomerDetails({
      name: "",
      email: "",
      phone: "",
      address: "",
      preferences: ""
    });
    setSelectedPlan(null);
  };

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
            Honey Subscription Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Never run out of pure, raw honey! Get our premium varieties delivered to your doorstep 
            regularly and save on every order.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Truck className="h-5 w-5 mr-2 text-honey-gold" />
              Free Delivery
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-honey-gold" />
              Flexible Schedule
            </div>
            <div className="flex items-center">
              <Gift className="h-5 w-5 mr-2 text-honey-gold" />
              Exclusive Varieties
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-forest-green mb-12">
            Choose Your Plan
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`border-honey-gold/20 relative hover:shadow-lg transition-shadow ${
                  plan.popular ? 'ring-2 ring-honey-gold scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-honey-gold text-forest-green">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-forest-green text-2xl mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-honey-gold">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground">
                      {plan.interval}
                    </div>
                    <Badge variant="outline" className="border-green-500 text-green-600">
                      {plan.savings}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full transition-all ${
                      plan.popular 
                        ? "honey-gradient text-forest-green hover:scale-105" 
                        : "border border-honey-gold text-forest-green hover:bg-honey-gold hover:text-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Details Form */}
      {selectedPlan && (
        <section className="py-16 bg-honey-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-honey-gold/20">
                <CardHeader>
                  <CardTitle className="text-center text-forest-green">
                    Complete Your Subscription
                  </CardTitle>
                  <p className="text-center text-muted-foreground">
                    Selected Plan: {subscriptionPlans.find(p => p.id === selectedPlan)?.name}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="sub-name">Full Name *</Label>
                      <Input
                        id="sub-name"
                        type="text"
                        value={customerDetails.name}
                        onChange={(e) => setCustomerDetails(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your full name"
                        className="border-honey-gold/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sub-email">Email Address *</Label>
                      <Input
                        id="sub-email"
                        type="email"
                        value={customerDetails.email}
                        onChange={(e) => setCustomerDetails(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="Enter your email"
                        className="border-honey-gold/20"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="sub-phone">Phone Number *</Label>
                    <Input
                      id="sub-phone"
                      type="tel"
                      value={customerDetails.phone}
                      onChange={(e) => setCustomerDetails(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                      className="border-honey-gold/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sub-address">Delivery Address *</Label>
                    <textarea
                      id="sub-address"
                      value={customerDetails.address}
                      onChange={(e) => setCustomerDetails(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Enter your complete delivery address"
                      className="w-full p-3 border border-honey-gold/20 rounded-md resize-none h-20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferences">Honey Preferences (Optional)</Label>
                    <Select onValueChange={(value) => setCustomerDetails(prev => ({ ...prev, preferences: value }))}>
                      <SelectTrigger className="border-honey-gold/20">
                        <SelectValue placeholder="Any specific honey varieties you prefer?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="floral">Light & Floral (Acacia, Tulasi)</SelectItem>
                        <SelectItem value="robust">Rich & Robust (Forest, Jamun)</SelectItem>
                        <SelectItem value="medicinal">Medicinal (Ajwain, Fennel)</SelectItem>
                        <SelectItem value="variety">Mix of all varieties</SelectItem>
                        <SelectItem value="surprise">Surprise me!</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-honey-gold/20 text-forest-green"
                      onClick={() => setSelectedPlan(null)}
                    >
                      Back to Plans
                    </Button>
                    <Button
                      className="flex-1 honey-gradient text-forest-green hover:scale-105 transition-transform"
                      onClick={() => handleSubscribe(selectedPlan)}
                    >
                      Subscribe Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-forest-green mb-12">
            Why Subscribe?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💰",
                title: "Save Money",
                description: "Get better prices than one-time purchases"
              },
              {
                icon: "🚚",
                title: "Free Delivery",
                description: "No shipping charges on subscription orders"
              },
              {
                icon: "🎯",
                title: "Never Run Out",
                description: "Regular deliveries ensure you always have honey"
              },
              {
                icon: "🌟",
                title: "Exclusive Access",
                description: "Get first access to new and seasonal varieties"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-honey-gold/20 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-playfair font-semibold text-forest-green mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-forest-green mb-12">
            Subscription FAQ
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. Just contact us via WhatsApp or email, and we'll process your cancellation immediately."
              },
              {
                question: "Can I skip a month or change my delivery date?",
                answer: "Absolutely! Contact us at least 5 days before your next delivery to skip a month or reschedule your delivery date."
              },
              {
                question: "What if I don't like a particular honey variety?",
                answer: "We're confident you'll love our honey, but if you're not satisfied, we'll replace it with a different variety of your choice."
              },
              {
                question: "Do you offer gift subscriptions?",
                answer: "Yes! Honey subscriptions make wonderful gifts. Just provide the recipient's details and we'll handle the rest."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-honey-gold/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-forest-green mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
