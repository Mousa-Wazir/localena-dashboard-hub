
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const ProductsPage = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Handcrafted Wooden Table',
      category: 'Furniture',
      price: 299,
      originalPrice: 350,
      rating: 4.8,
      reviews: 24,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center',
      description: 'Beautiful handcrafted wooden dining table perfect for family gatherings',
      inStock: true
    },
    {
      id: 2,
      name: 'Modern Sofa Set',
      category: 'Furniture',
      price: 850,
      originalPrice: 950,
      rating: 4.6,
      reviews: 18,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center',
      description: 'Comfortable 3-seater sofa with premium fabric upholstery',
      inStock: true
    },
    {
      id: 3,
      name: 'Decorative Wall Art',
      category: 'Home Decor',
      price: 85,
      originalPrice: 100,
      rating: 4.9,
      reviews: 32,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop&crop=center',
      description: 'Modern abstract wall art piece to enhance your living space',
      inStock: true
    },
    {
      id: 4,
      name: 'Table Lamp Set',
      category: 'Home Decor',
      price: 45,
      originalPrice: 60,
      rating: 4.4,
      reviews: 15,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop&crop=center',
      description: 'Elegant table lamps for ambient lighting',
      inStock: false
    },
    {
      id: 5,
      name: 'Cotton Summer Dress',
      category: 'Clothing',
      price: 45,
      originalPrice: 55,
      rating: 4.7,
      reviews: 28,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=center',
      description: 'Comfortable cotton dress perfect for summer weather',
      inStock: true
    },
    {
      id: 6,
      name: 'Leather Handbag',
      category: 'Accessories',
      price: 120,
      originalPrice: 150,
      rating: 4.8,
      reviews: 22,
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop&crop=center',
      description: 'Premium leather handbag with multiple compartments',
      inStock: true
    },
    {
      id: 7,
      name: 'Natural Essential Oil',
      category: 'Health & Beauty',
      price: 25,
      originalPrice: 30,
      rating: 4.9,
      reviews: 45,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop&crop=center',
      description: 'Pure essential oil for aromatherapy and relaxation',
      inStock: true
    },
    {
      id: 8,
      name: 'Handwoven Carpet',
      category: 'Handicrafts',
      price: 180,
      originalPrice: 220,
      rating: 4.6,
      reviews: 12,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center',
      description: 'Traditional handwoven carpet with intricate patterns',
      inStock: true
    }
  ]);

  const categories = ['All', 'Furniture', 'Home Decor', 'Clothing', 'Accessories', 'Health & Beauty', 'Handicrafts'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collection of quality products from local artisans and trusted sellers.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Button variant="outline" size="sm" className="bg-white/90">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Badge variant="secondary">Out of Stock</Badge>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
                <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
