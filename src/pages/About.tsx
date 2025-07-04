
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Ravi Kumar",
      role: "Founder & Master Beekeeper",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      description: "20+ years of beekeeping experience in Nallamala forest"
    },
    {
      name: "Sunitha Reddy",
      role: "Quality Control Manager",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      description: "Ensures every batch meets our strict quality standards"
    },
    {
      name: "Manjunath",
      role: "Training Coordinator",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      description: "Leads our beekeeping education and franchise programs"
    }
  ];

  const blogPosts = [
    {
      id: "raw-honey-benefits",
      title: "Why Raw Honey is Better Than Store Honey",
      excerpt: "Discover the amazing health benefits of unprocessed honey and why our traditional methods preserve all the natural goodness.",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      date: "December 15, 2023",
      readTime: "5 min read"
    },
    {
      id: "honey-extraction",
      title: "How We Extract Honey from Our Boxes",
      excerpt: "Take a behind-the-scenes look at our sustainable honey extraction process that maintains purity and quality.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      date: "December 10, 2023",
      readTime: "4 min read"
    },
    {
      id: "meet-beekeepers",
      title: "Meet Our Beekeepers: A Day in the Farm",
      excerpt: "Get to know the dedicated people behind our honey production and their daily routines in the Nallamala forest.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      date: "December 5, 2023",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
                About Nallamala Honeybee Park
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Born in the heart of Nallamala forest, we're dedicated to bringing you the purest, 
                most natural honey while supporting sustainable beekeeping practices and local communities.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1498936178812-4b2e558d2937"
                alt="Nallamala Honeybee Park"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-forest-green mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In the pristine forests of Nallamala, where nature thrives in its purest form, 
                our journey began with a simple mission: to share the incredible gift of raw, 
                unprocessed honey with families across India.
              </p>
              <p>
                Founded by passionate beekeepers who understood the delicate balance between 
                human needs and environmental preservation, Nallamala Honeybee Park represents 
                more than just honey production—it's a commitment to sustainable practices, 
                community empowerment, and pure, natural nutrition.
              </p>
              <p>
                Every jar of honey we produce tells a story of careful cultivation, respectful 
                harvesting, and unwavering dedication to quality. We don't just extract honey; 
                we nurture an ecosystem that benefits both bees and humans alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-honey-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-honey-gold/10 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-honey-gold" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-forest-green mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted source of pure, sustainable honey while 
                  fostering environmental conservation and rural economic development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-honey-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-honey-gold/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-honey-gold" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-forest-green mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To produce and deliver 100% pure, raw honey through ethical beekeeping 
                  practices while educating communities about sustainable agriculture.
                </p>
              </CardContent>
            </Card>

            <Card className="border-honey-gold/20 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-honey-gold/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-honey-gold" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-forest-green mb-4">
                  Our Values
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Purity, sustainability, transparency, community empowerment, and 
                  unwavering commitment to natural, chemical-free honey production.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center text-forest-green mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "500+", label: "Happy Customers" },
              { icon: Leaf, number: "50+", label: "Active Beehives" },
              { icon: Award, number: "12+", label: "Honey Varieties" },
              { icon: Target, number: "100%", label: "Purity Guarantee" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-honey-gold/10 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-honey-gold" />
                </div>
                <div className="text-3xl font-playfair font-bold text-forest-green mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-center text-forest-green mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-honey-gold/20 overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-playfair font-semibold text-forest-green mb-2">
                    {member.name}
                  </h3>
                  <p className="text-honey-gold font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-forest-green mb-4">
              From the Bee Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover insights, tips, and stories from our beekeeping journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-honey-gold/20 overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {post.date} · {post.readTime}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-forest-green mb-3 group-hover:text-honey-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="border-honey-gold text-forest-green hover:bg-honey-gold hover:text-white group"
                    asChild
                  >
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              className="honey-gradient text-forest-green hover:scale-105 transition-transform"
              asChild
            >
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
