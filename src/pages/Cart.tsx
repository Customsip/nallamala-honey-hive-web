import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCartStore();
  const { toast } = useToast();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: ""
  });

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    updateQuantity(id, newQuantity);
  };

  const handleWhatsAppOrder = () => {
    if (!customerDetails.name || !customerDetails.phone || !customerDetails.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Empty Cart",
        description: "Please add items to your cart first",
        variant: "destructive"
      });
      return;
    }

    // Create order message
    let message = `🍯 *New Order from Nallamala Honeybee Park*\n\n`;
    message += `👤 *Customer Details:*\n`;
    message += `Name: ${customerDetails.name}\n`;
    message += `Phone: ${customerDetails.phone}\n`;
    message += `Address: ${customerDetails.address}\n`;
    message += `Pincode: ${customerDetails.pincode}\n\n`;
    
    message += `🛒 *Order Items:*\n`;
    items.forEach(item => {
      message += `• ${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    
    message += `\n💰 *Total Amount: ₹${getTotalPrice()}*\n\n`;
    message += `Please confirm this order. Thank you! 🙏`;

    const phoneNumber = "+917842043222";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Order Sent!",
      description: "Your order has been sent via WhatsApp. We'll contact you soon!",
    });
  };

  if (items.length === 0) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-cream-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 mx-auto text-charcoal/40 mb-6" />
            <h1 className="text-3xl font-playfair font-bold text-forest-green mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-charcoal/70 mb-8">
              Looks like you haven't added any honey to your cart yet. 
              Explore our premium honey collection!
            </p>
            <Button
              className="honey-gradient text-charcoal hover:scale-105 transition-transform"
              asChild
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-cream-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-forest-green mb-8">
          Your Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="border-honey-gold/20 bg-white">
              <CardHeader>
                <CardTitle className="text-forest-green">Order Items</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-honey-gold/10 rounded-lg bg-cream-beige/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-forest-green">{item.name}</h3>
                      <p className="text-honey-gold font-bold">₹{item.price}/kg</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-forest-green">
                        ₹{item.price * item.quantity}
                      </p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary & Customer Details */}
          <div className="space-y-6">
            {/* Customer Details */}
            <Card className="border-honey-gold/20 bg-white">
              <CardHeader>
                <CardTitle className="text-forest-green">Customer Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={customerDetails.name}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    className="border-honey-gold/20"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerDetails.phone}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                    className="border-honey-gold/20"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Delivery Address *</Label>
                  <textarea
                    id="address"
                    value={customerDetails.address}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, address: e.target.value }))}
                    placeholder="Enter your complete address"
                    className="w-full p-3 border border-honey-gold/20 rounded-md resize-none h-20"
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode</Label>
                  <Input
                    id="pincode"
                    type="text"
                    value={customerDetails.pincode}
                    onChange={(e) => setCustomerDetails(prev => ({ ...prev, pincode: e.target.value }))}
                    placeholder="Enter pincode"
                    className="border-honey-gold/20"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-honey-gold/20 bg-white">
              <CardHeader>
                <CardTitle className="text-forest-green">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <hr className="border-honey-gold/20" />
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
                <hr className="border-honey-gold/20" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-honey-gold">₹{getTotalPrice()}</span>
                </div>
                <Button
                  className="w-full honey-gradient text-charcoal hover:scale-105 transition-transform font-semibold"
                  onClick={handleWhatsAppOrder}
                >
                  Place Order via WhatsApp
                </Button>
                <p className="text-xs text-charcoal/60 text-center">
                  You'll be redirected to WhatsApp to confirm your order
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
