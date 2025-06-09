
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Trash2, Plus, Minus, Tag, CreditCard } from 'lucide-react';

const UserCartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Modern Sofa Set',
      price: 899.99,
      originalPrice: 1199.99,
      quantity: 1,
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=150&h=150&fit=crop',
      seller: 'Furniture Store',
      inStock: true,
      discount: 25
    },
    {
      id: 2,
      name: 'Decorative Plant Set',
      price: 24.99,
      originalPrice: 34.99,
      quantity: 2,
      category: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=150&h=150&fit=crop',
      seller: 'Green Gardens',
      inStock: true,
      discount: 30
    },
    {
      id: 3,
      name: 'Cotton Summer Dress',
      price: 59.99,
      originalPrice: 79.99,
      quantity: 1,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=150&h=150&fit=crop',
      seller: 'Fashion Boutique',
      inStock: true,
      discount: 25
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<any>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon({
        code: 'SAVE10',
        type: 'percentage',
        value: 10,
        description: '10% off entire order'
      });
    } else if (couponCode.toUpperCase() === 'FREESHIP') {
      setAppliedCoupon({
        code: 'FREESHIP',
        type: 'shipping',
        value: 0,
        description: 'Free shipping'
      });
    }
    setCouponCode('');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = appliedCoupon?.type === 'shipping' ? 0 : 9.99;
  const couponDiscount = appliedCoupon?.type === 'percentage' ? (subtotal * appliedCoupon.value / 100) : 0;
  const tax = (subtotal - couponDiscount) * 0.08; // 8% tax
  const total = subtotal + shipping + tax - couponDiscount;

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-1">{cartItems.length} items in your cart</p>
        </div>
        <Button variant="outline">
          Continue Shopping
        </Button>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Product Image & Info */}
                  <div className="flex items-center space-x-4 flex-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        {item.discount && (
                          <Badge className="bg-red-100 text-red-800">
                            {item.discount}% OFF
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">by {item.seller}</p>
                      <Badge variant="outline" className="mt-1">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Price & Quantity */}
                  <div className="flex items-center justify-between md:justify-end space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">
                          ${item.price.toFixed(2)}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        ${(item.price * item.quantity).toFixed(2)} total
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

              {/* Coupon Section */}
              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Promo Code</h3>
                {appliedCoupon ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-green-800">{appliedCoupon.code}</p>
                        <p className="text-sm text-green-600">{appliedCoupon.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={removeCoupon}
                        className="text-green-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline" onClick={applyCoupon}>
                      <Tag className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                {couponDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon Discount</span>
                    <span>-${couponDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full mb-3">
                <CreditCard className="h-4 w-4 mr-2" />
                Proceed to Checkout
              </Button>

              {/* Security Note */}
              <p className="text-xs text-gray-500 text-center">
                Secure checkout with 256-bit SSL encryption
              </p>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="p-12 text-center">
          <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-4">Add some products to get started</p>
          <Button>
            Start Shopping
          </Button>
        </Card>
      )}
    </div>
  );
};

export default UserCartPage;
