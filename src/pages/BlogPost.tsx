
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post data (in a real app, this would come from an API or database)
  const blogPost = {
    id: "raw-honey-benefits",
    title: "Why Raw Honey is Better Than Store Honey",
    content: `
      <p>Raw honey is one of nature's most perfect foods, offering incredible health benefits that processed store-bought honey simply cannot match. At Nallamala Honeybee Park, we're passionate about preserving the natural goodness of honey through our traditional extraction methods.</p>

      <h2>What Makes Honey "Raw"?</h2>
      <p>Raw honey is honey that comes straight from the beehive without being heated, pasteurized, or overly filtered. This means it retains all of its natural enzymes, antioxidants, vitamins, and minerals that are often destroyed during commercial processing.</p>

      <h2>The Problem with Processed Honey</h2>
      <p>Most store-bought honey undergoes high-heat treatment and ultra-filtration to:</p>
      <ul>
        <li>Extend shelf life</li>
        <li>Prevent crystallization</li>
        <li>Create a clear, uniform appearance</li>
        <li>Remove any particles or pollen</li>
      </ul>
      <p>Unfortunately, this processing strips away many of honey's beneficial properties, leaving you with what many experts call "honey-flavored syrup."</p>

      <h2>Health Benefits of Raw Honey</h2>
      <p>Our raw honey from Nallamala forest contains:</p>
      <ul>
        <li><strong>Natural Enzymes:</strong> Help with digestion and nutrient absorption</li>
        <li><strong>Antioxidants:</strong> Fight free radicals and support immune system</li>
        <li><strong>Bee Pollen:</strong> Provides amino acids and vitamins</li>
        <li><strong>Propolis:</strong> Has natural antimicrobial properties</li>
        <li><strong>Vitamins & Minerals:</strong> Including B vitamins, vitamin C, calcium, and iron</li>
      </ul>

      <h2>Why Crystallization is Actually Good</h2>
      <p>Many people think crystallized honey has gone bad, but it's actually a sign of pure, raw honey! Crystallization is a natural process that occurs when glucose in honey forms crystals. Processed honey is treated to prevent this natural process.</p>

      <h2>How We Preserve Nature's Goodness</h2>
      <p>At our farm in Balapanur, we follow traditional extraction methods:</p>
      <ol>
        <li>Gentle extraction without heating</li>
        <li>Minimal filtering to remove only large particles</li>
        <li>No pasteurization or chemical treatment</li>
        <li>Direct bottling to preserve freshness</li>
      </ol>

      <h2>The Taste Difference</h2>
      <p>Raw honey has a complex, rich flavor that reflects the flowers and environment where the bees foraged. Our Nallamala honey varieties each have distinct taste profiles - from the floral notes of Acacia to the robust flavor of Forest honey.</p>

      <h2>Making the Right Choice</h2>
      <p>When choosing honey, look for:</p>
      <ul>
        <li>Labels that say "raw" or "unpasteurized"</li>
        <li>Local producers with transparent processes</li>
        <li>Honey that may crystallize over time</li>
        <li>Slightly cloudy appearance (indicates minimal filtering)</li>
      </ul>

      <p>At Nallamala Honeybee Park, we're committed to bringing you honey in its most natural form. Every jar represents our dedication to traditional beekeeping methods and the preservation of nature's incredible gift.</p>
    `,
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    date: "December 15, 2023",
    readTime: "5 min read",
    author: "Dr. Ravi Kumar",
    category: "Health Benefits"
  };

  const relatedPosts = [
    {
      id: "honey-extraction",
      title: "How We Extract Honey from Our Boxes",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      readTime: "4 min read"
    },
    {
      id: "seasonal-honey-varieties",
      title: "Understanding Seasonal Honey Varieties",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Back Navigation */}
      <section className="py-8 border-b border-honey-gold/20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="text-forest-green hover:text-honey-gold" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-honey-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-honey-gold/10 text-honey-gold px-3 py-1 rounded-full text-sm font-medium mb-4">
              {blogPost.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-muted-foreground mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blogPost.readTime}
              </div>
            </div>
            <Button variant="outline" className="border-honey-gold text-forest-green hover:bg-honey-gold hover:text-white">
              <Share2 className="mr-2 h-4 w-4" />
              Share Article
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:font-playfair prose-headings:text-forest-green
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                    prose-li:mb-2 prose-strong:text-forest-green
                    prose-a:text-honey-gold hover:prose-a:text-forest-green"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Author Info */}
                  <Card className="border-honey-gold/20">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-honey-gold/10 rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-honey-gold" />
                      </div>
                      <h3 className="font-playfair font-semibold text-forest-green mb-2">
                        {blogPost.author}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Master Beekeeper & Founder of Nallamala Honeybee Park
                      </p>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="border-honey-gold/20">
                    <CardContent className="p-6">
                      <h3 className="font-playfair font-semibold text-forest-green mb-3">
                        Stay Updated
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get the latest insights about beekeeping and honey benefits
                      </p>
                      <Button className="w-full honey-gradient text-forest-green" size="sm">
                        Subscribe
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-honey-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center text-forest-green mb-12">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="border-honey-gold/20 overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold text-forest-green mb-3 group-hover:text-honey-gold transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-honey-gold hover:text-forest-green"
                        asChild
                      >
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
