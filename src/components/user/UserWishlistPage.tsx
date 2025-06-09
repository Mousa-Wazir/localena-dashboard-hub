
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, Trash2, Bell } from 'lucide-react';

const UserWishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Modern Sofa Set',
      price: '$899.99',
      originalPrice: '$1199.99',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
      inStock: true,
      discount: '25% OFF'
    },
    {
      id: 2,
      name: 'Decorative Plant Set',
      price: '$24.99',
      originalPrice: '$34.99',
      category: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
      inStock: true,
      discount: '30% OFF'
    },
    {
      id: 3,
      name: 'Designer Handbag',
      price: '$129.99',
      originalPrice: '$189.99',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
      inStock: false,
      discount: null
    },
    {
      id: 4,
      name: 'Cotton Summer Dress',
      price: '$59.99',
      originalPrice: '$79.99',
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      inStock: true,
      discount: '25% OFF'
    },
    {
      id: 5,
      name: 'Organic Face Cream',
      price: '$34.99',
      originalPrice: '$44.99',
      category: 'Health & Beauty',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=200&fit=crop',
      inStock: true,
      discount: '20% OFF'
    },
    {
      id: 6,
      name: 'Handmade Ceramic Bowl',
      price: '$45.99',
      originalPrice: '$55.99',
      category: 'Handicrafts',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300&h=200&fit=crop',
      inStock: true,
      discount: '18% OFF'
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    // Add to cart logic here
    console.log('Added to cart:', id);
  };

  const toggleNotification = (id: number) => {
    // Toggle stock notification logic here
    console.log('Toggle notification for:', id);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600 mt-1">{wishlistItems.length} items saved for later</p>
        </div>
        <Button variant="outline">
          <Heart className="h-4 w-4 mr-2" />
          Share Wishlist
        </Button>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.discount && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    {item.discount}
                  </Badge>
                )}
                <Badge 
                  variant={item.inStock ? "default" : "secondary"}
                  className="absolute top-2 right-2"
                >
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-12 bg-white/80 hover:bg-white"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
              
              <div className="p-4">
                <Badge variant="outline" className="mb-2">
                  {item.category}
                </Badge>
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-gray-900">{item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  {item.inStock ? (
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => addToCart(item.id)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => toggleNotification(item.id)}
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Notify Me
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Your wishlist is empty</h3>
          <p className="text-gray-600 mb-4">Save items you love to view them later</p>
          <Button>
            Start Shopping
          </Button>
        </Card>
      )}
    </div>
  );
};

export default UserWishlistPage;
