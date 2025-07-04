import { Link } from "react-router-dom";
import { ArrowRight, Search, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: "raw-honey-benefits",
      title: "Why Raw Honey is Better Than Store Honey",
      excerpt: "Discover the amazing health benefits of unprocessed honey and why our traditional methods preserve all the natural goodness that commercial processing destroys.",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      date: "December 15, 2023",
      readTime: "5 min read",
      author: "Dr. Ravi Kumar",
      category: "Health Benefits"
    },
    {
      id: "honey-extraction",
      title: "How We Extract Honey from Our Boxes",
      excerpt: "Take a behind-the-scenes look at our sustainable honey extraction process that maintains purity and quality while respecting our bee colonies.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      date: "December 10, 2023",
      readTime: "4 min read",
      author: "Manjunath",
      category: "Process"
    },
    {
      id: "meet-beekeepers",
      title: "Meet Our Beekeepers: A Day in the Farm",
      excerpt: "Get to know the dedicated people behind our honey production and their daily routines in the beautiful Nallamala forest.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      date: "December 5, 2023",
      readTime: "6 min read",
      author: "Sunitha Reddy",
      category: "People"
    },
    {
      id: "seasonal-honey-varieties",
      title: "Understanding Seasonal Honey Varieties",
      excerpt: "Learn about how different flowers bloom throughout the year and create unique honey flavors, from spring tulasi to monsoon forest honey.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      date: "November 28, 2023",
      readTime: "7 min read",
      author: "Dr. Ravi Kumar",
      category: "Education"
    },
    {
      id: "sustainable-beekeeping",
      title: "Sustainable Beekeeping Practices We Follow",
      excerpt: "Explore our eco-friendly approach to beekeeping that protects bee colonies while producing premium honey for our customers.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      date: "November 20, 2023",
      readTime: "5 min read",
      author: "Manjunath",
      category: "Sustainability"
    },
    {
      id: "honey-crystallization",
      title: "Why Pure Honey Crystallizes (And Why That's Good)",
      excerpt: "Understanding honey crystallization is key to recognizing pure honey. Learn why crystallization is actually a sign of quality, not a defect.",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      date: "November 15, 2023",
      readTime: "4 min read",
      author: "Sunitha Reddy",
      category: "Quality"
    }
  ];

  const categories = ["All", "Health Benefits", "Process", "People", "Education", "Sustainability", "Quality"];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-cream-white">
      {/* Hero Section */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
            The Bee Blog
          </h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto mb-8">
            Insights, stories, and knowledge from our beekeeping journey in the Nallamala forest
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal/50 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search blog posts..."
              className="pl-10 border-honey-gold/20 bg-white"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-honey-gold/20 bg-cream-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-honey-gold/20 text-forest-green hover:bg-honey-gold hover:text-charcoal bg-white"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-cream-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm text-honey-gold font-medium mb-2">Featured Post</div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-forest-green mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-charcoal/70 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-charcoal/60 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Button
                  className="honey-gradient text-charcoal hover:scale-105 transition-transform group"
                  asChild
                >
                  <Link to={`/blog/${blogPosts[0].id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div>
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-forest-green mb-12">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-honey-gold/20 overflow-hidden group hover:shadow-lg transition-shadow bg-white">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="bg-honey-gold/10 text-honey-gold px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-forest-green mb-3 group-hover:text-honey-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="mt-1">By {post.author}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-honey-gold hover:text-forest-green group"
                      asChild
                    >
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 forest-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Stay Updated with Our Blog
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights about beekeeping, 
            honey benefits, and sustainable farming practices.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button className="honey-gradient text-charcoal hover:scale-105 transition-transform whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
