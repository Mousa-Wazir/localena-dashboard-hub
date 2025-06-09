
import React from 'react';
import { Heart, ShoppingCart, Bell, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const WishlistPage: React.FC = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: '₹4,999',
      originalPrice: '₹6,999',
      image: '🎧',
      inStock: true,
      discount: '29% off'
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      price: '₹8,999',
      originalPrice: '₹12,999',
      image: '⌚',
      inStock: true,
      discount: '31% off'
    },
    {
      id: 3,
      name: 'Ergonomic Office Chair',
      price: '₹15,999',
      originalPrice: '₹19,999',
      image: '🪑',
      inStock: false,
      discount: '20% off'
    },
    {
      id: 4,
      name: 'Mechanical Gaming Keyboard',
      price: '₹3,499',
      originalPrice: '₹4,999',
      image: '⌨️',
      inStock: true,
      discount: '30% off'
    },
    {
      id: 5,
      name: 'LED Desk Lamp',
      price: '₹1,299',
      originalPrice: '₹1,899',
      image: '💡',
      inStock: true,
      discount: '32% off'
    },
    {
      id: 6,
      name: 'Wireless Mouse',
      price: '₹899',
      originalPrice: '₹1,299',
      image: '🖱️',
      inStock: false,
      discount: '31% off'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">{wishlistItems.length} items</span>
          <Button variant="outline" size="sm">
            <Heart className="h-4 w-4 mr-2" />
            Share Wishlist
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <Card key={item.id} className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="relative">
                <div className="text-6xl text-center mb-4">{item.image}</div>
                
                {!item.inStock && (
                  <Badge variant="secondary" className="absolute top-2 right-2 bg-red-100 text-red-800">
                    Out of Stock
                  </Badge>
                )}
                
                {item.discount && item.inStock && (
                  <Badge className="absolute top-2 right-2 bg-green-100 text-green-800">
                    {item.discount}
                  </Badge>
                )}

                <button className="absolute top-2 left-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-lg line-clamp-2">{item.name}</h3>
                
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                  )}
                </div>

                <div className="flex space-x-2">
                  {item.inStock ? (
                    <Button className="flex-1" size="sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1" size="sm">
                      <Bell className="h-4 w-4 mr-2" />
                      Notify Me
                    </Button>
                  )}
                  
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {wishlistItems.length === 0 && (
        <div className="text-center py-12">
          <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-4">Start adding items you love to your wishlist</p>
          <Button>Browse Products</Button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
