
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-white">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">🐝</div>
        <h1 className="text-6xl font-playfair font-bold text-forest-green mb-4">404</h1>
        <p className="text-2xl text-charcoal mb-4">Oops! Page not found</p>
        <p className="text-charcoal/70 mb-8">
          The page you're looking for doesn't exist. Let's get you back to our honey collection!
        </p>
        <Button
          className="honey-gradient text-charcoal hover:scale-105 transition-transform"
          asChild
        >
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
