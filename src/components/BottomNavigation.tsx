import { Home, Store, Image, Phone, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";

const BottomNavigation = () => {
  const location = useLocation();
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Store, label: "Shop", path: "/shop" },
    { icon: Image, label: "Gallery", path: "/gallery" },
    { icon: Phone, label: "Contact", path: "/contact" },
    { icon: ShoppingCart, label: "Cart", path: "/cart", badge: totalItems },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full relative transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                <item.icon className="w-5 h-5" />
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {item.badge > 9 ? "9+" : item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
      {/* Safe area padding for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-background" />
    </nav>
  );
};

export default BottomNavigation;
