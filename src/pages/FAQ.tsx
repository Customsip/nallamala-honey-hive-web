
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const FAQ = () => {
  const faqs = [
    {
      category: "Product Quality",
      questions: [
        {
          question: "Is your honey really 100% pure and raw?",
          answer: "Yes, absolutely! Our honey is extracted directly from our own beehives without any heating, pasteurization, or chemical processing. We maintain complete transparency in our process and provide lab test certificates with each batch."
        },
        {
          question: "Why does your honey sometimes crystallize?",
          answer: "Crystallization is actually a sign of pure, raw honey! It's a natural process where glucose in honey forms crystals. This doesn't affect quality or taste - in fact, crystallized honey is easier to spread and still contains all its beneficial properties."
        },
        {
          question: "How do you ensure the quality of your honey?",
          answer: "We follow strict quality control measures including regular lab testing, maintaining clean extraction facilities, proper storage conditions, and minimal filtering to preserve natural enzymes and nutrients."
        }
      ]
    },
    {
      category: "Orders & Delivery",
      questions: [
        {
          question: "Do you offer free delivery across India?",
          answer: "Yes, we provide free delivery across India for all our honey products priced at ₹650/kg. For comb honey (₹1200/kg), shipping charges are included in the price."
        },
        {
          question: "How long does delivery take?",
          answer: "We typically dispatch orders within 2-3 business days. Delivery usually takes 5-7 days depending on your location. You'll receive tracking information once your order is shipped."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, once your order is shipped, you'll receive a tracking number via WhatsApp and email. You can use this to track your package until delivery."
        }
      ]
    },
    {
      category: "Honey Varieties",
      questions: [
        {
          question: "What's the difference between your honey varieties?",
          answer: "Each honey variety comes from different flowers and has unique taste profiles. For example, Acacia honey is light and floral, while Forest honey is darker with complex flavors. The bees collect nectar from specific plants, creating distinct characteristics."
        },
        {
          question: "Which honey variety is best for health benefits?",
          answer: "All our raw honey varieties offer health benefits, but some have specific properties. Tulasi honey is great for respiratory health, Ajwain honey aids digestion, and Black Jamun honey is rich in antioxidants. Choose based on your taste preference and health needs."
        },
        {
          question: "Is comb honey different from regular honey?",
          answer: "Comb honey includes the natural beeswax comb that bees build to store honey. It's considered the purest form as it's never been removed from the comb. You can eat both the honey and the wax, which has additional nutritional benefits."
        }
      ]
    },
    {
      category: "Beekeeping & Farm",
      questions: [
        {
          question: "Where is your farm located?",
          answer: "Our bee farm is located in Balapanur, Nandyal District, Andhra Pradesh, in the beautiful Nallamala forest region. This pristine environment provides our bees with diverse flora for premium honey production."
        },
        {
          question: "Can I visit your farm?",
          answer: "Yes! We welcome visitors to our farm. You can schedule educational visits, participate in beekeeping demonstrations, or join our training programs. Please contact us in advance to arrange your visit."
        },
        {
          question: "Do you offer beekeeping training?",
          answer: "Yes, we offer comprehensive beekeeping training programs ranging from 15-day intensive courses to franchise opportunities. Our programs include hands-on training, theory sessions, and ongoing support."
        }
      ]
    },
    {
      category: "Storage & Usage",
      questions: [
        {
          question: "How should I store honey?",
          answer: "Store honey in a cool, dry place away from direct sunlight. Keep the container tightly sealed. Honey doesn't require refrigeration and has an indefinite shelf life when stored properly."
        },
        {
          question: "What if my honey crystallizes?",
          answer: "If you prefer liquid honey, gently warm the jar in warm water (not boiling) to dissolve the crystals. However, crystallized honey is perfectly fine to use and many people prefer its texture for spreading."
        },
        {
          question: "How much honey can I consume daily?",
          answer: "For adults, 1-2 tablespoons per day is generally recommended. Children can have 1 teaspoon per day. Honey is natural but still contains sugars, so moderation is key, especially for diabetics."
        }
      ]
    }
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our pure honey, delivery, and beekeeping practices
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-playfair font-bold text-forest-green mb-6">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Collapsible key={faqIndex}>
                      <Card className="border-honey-gold/20">
                        <CollapsibleTrigger className="w-full">
                          <CardContent className="p-6 flex items-center justify-between hover:bg-honey-cream/50 transition-colors">
                            <h3 className="text-left font-semibold text-forest-green">
                              {faq.question}
                            </h3>
                            <ChevronDown className="h-5 w-5 text-honey-gold transition-transform data-[state=open]:rotate-180" />
                          </CardContent>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0 px-6 pb-6">
                            <div className="border-t border-honey-gold/10 pt-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Card>
                    </Collapsible>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-forest-green mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help! 
            Contact us directly and we'll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917842043222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:NallamalaHoneyBeePark@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-honey-gold text-forest-green hover:bg-honey-gold hover:text-white rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
