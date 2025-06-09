
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Heart, Search, Filter, Star } from 'lucide-react';

const UserProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    'All Categories',
    'Furniture',
    'Home Decor',
    'Clothing',
    'Accessories',
    'Health & Beauty',
    'Handicrafts'
  ];

  const products = [
    {
      id: 1,
      name: 'Modern Sofa Set',
      price: 899.99,
      originalPrice: 1199.99,
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
      rating: 4.5,
      reviews: 128,
      inStock: true,
      discount: 25,
      description: 'Comfortable and stylish modern sofa perfect for any living room'
    },
    {
      id: 2,
      name: 'Decorative Plant Set',
      price: 24.99,
      originalPrice: 34.99,
      category: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
      rating: 4.8,
      reviews: 89,
      inStock: true,
      discount: 30,
      description: 'Beautiful artificial plants to brighten up your home'
    },
    {
      id: 3,
      name: 'Cotton Summer Dress',
      price: 59.99,
      originalPrice: 79.99,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      rating: 4.3,
      reviews: 156,
      inStock: true,
      discount: 25,
      description: 'Lightweight and comfortable dress perfect for summer'
    },
    {
      id: 4,
      name: 'Designer Handbag',
      price: 129.99,
      originalPrice: null,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
      rating: 4.6,
      reviews: 67,
      inStock: false,
      discount: null,
      description: 'Elegant handbag with premium materials and craftsmanship'
    },
    {
      id: 5,
      name: 'Organic Face Cream',
      price: 34.99,
      originalPrice: 44.99,
      category: 'Health & Beauty',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=200&fit=crop',
      rating: 4.7,
      reviews: 94,
      inStock: true,
      discount: 22,
      description: 'Natural and organic skincare for healthy glowing skin'
    },
    {
      id: 6,
      name: 'Handmade Ceramic Bowl',
      price: 45.99,
      originalPrice: 55.99,
      category: 'Handicrafts',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300&h=200&fit=crop',
      rating: 4.9,
      reviews: 43,
      inStock: true,
      discount: 18,
      description: 'Beautiful handcrafted ceramic bowl with unique patterns'
    },
    {
      id: 7,
      name: 'Wooden Coffee Table',
      price: 199.99,
      originalPrice: 249.99,
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
      rating: 4.4,
      reviews: 76,
      inStock: true,
      discount: 20,
      description: 'Solid wood coffee table with modern design'
    },
    {
      id: 8,
      name: 'Wall Art Collection',
      price: 79.99,
      originalPrice: 99.99,
      category: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
      rating: 4.2,
      reviews: 112,
      inStock: true,
      discount: 20,
      description: 'Set of 3 framed art pieces for wall decoration'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           product.category.toLowerCase() === selectedCategory.toLowerCase();
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      const price = product.price;
      switch (priceRange) {
        case 'under-50':
          matchesPrice = price < 50;
          break;
        case '50-100':
          matchesPrice = price >= 50 && price <= 100;
          break;
        case '100-200':
          matchesPrice = price >= 100 && price <= 200;
          break;
        case 'over-200':
          matchesPrice = price > 200;
          break;
      }
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-3 w-3 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-600 mt-1">Discover amazing products from local sellers</p>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category === 'All Categories' ? 'all' : category}>
                {category}
              </option>
            ))}
          </select>

          {/* Price Filter */}
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Prices</option>
            <option value="under-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-200">$100 - $200</option>
            <option value="over-200">Over $200</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </Card>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {sortedProducts.length} of {products.length} products
        </p>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          More Filters
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.discount && (
                <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                  {product.discount}% OFF
                </Badge>
              )}
              {!product.inStock && (
                <Badge className="absolute top-2 right-2 bg-gray-500 text-white">
                  Out of Stock
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-4">
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>

              {renderStars(product.rating)}
              
              <div className="flex items-center space-x-2 mt-2 mb-3">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 mt-2">
                {product.reviews} reviews
              </p>
            </div>
          </Card>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <Card className="p-12 text-center">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </Card>
      )}
    </div>
  );
};

export default UserProductsPage;
