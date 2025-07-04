
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cartStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);
  const location = useLocation();
  const { items } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const shopMenuItems = [
    { name: "View All Honey", href: "/shop" },
    { name: "Honey Samplers", href: "/shop#samplers" },
    { name: "Gifting Options", href: "/shop#gifting" },
    { name: "Subscription Plans", href: "/subscription" },
  ];

  const mainMenuItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Franchise & Training", href: "/franchise" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-white/95 backdrop-blur-md shadow-lg border-b border-honey-gold/20"
          : "bg-cream-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl">🐝</div>
            <div>
              <h1 className="font-playfair font-bold text-lg lg:text-xl text-forest-green group-hover:text-honey-gold transition-colors">
                Nallamala Honeybee Park
              </h1>
              <p className="text-xs text-charcoal/70 hidden lg:block">
                Pure Raw Honey from Andhra Pradesh
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-honey-gold ${
                location.pathname === "/" ? "text-honey-gold" : "text-forest-green"
              }`}
            >
              Home
            </Link>

            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowShopDropdown(true)}
              onMouseLeave={() => setShowShopDropdown(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-forest-green hover:text-honey-gold transition-colors">
                <span>Shop Honey</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showShopDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-honey-gold/20 py-2 z-50 animate-fade-in">
                  {shopMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-forest-green hover:bg-cream-beige hover:text-honey-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainMenuItems.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-honey-gold ${
                  location.pathname === item.href ? "text-honey-gold" : "text-forest-green"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Cart Icon */}
            <Link to="/cart" className="relative">
              <Button variant="outline" size="sm" className="border-honey-gold text-forest-green hover:bg-honey-gold hover:text-charcoal transition-colors">
                <ShoppingCart className="h-4 w-4" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-honey-gold text-charcoal text-xs font-semibold">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="outline" size="sm" className="border-honey-gold text-forest-green hover:bg-honey-gold hover:text-charcoal">
                <ShoppingCart className="h-4 w-4" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-honey-gold text-charcoal text-xs font-semibold">
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-forest-green hover:text-honey-gold hover:bg-cream-beige"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-honey-gold/20 py-4 animate-slide-in shadow-lg">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-forest-green hover:text-honey-gold transition-colors px-4 py-2 hover:bg-cream-beige rounded"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4">
                <p className="font-medium text-forest-green mb-2">Shop Honey</p>
                <div className="pl-4 space-y-2">
                  {shopMenuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-sm text-charcoal/80 hover:text-honey-gold transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {mainMenuItems.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-forest-green hover:text-honey-gold transition-colors px-4 py-2 hover:bg-cream-beige rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
