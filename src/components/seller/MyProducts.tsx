
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Package } from 'lucide-react';

const MyProducts = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Handcrafted Wooden Table',
      category: 'Furniture',
      price: 299,
      stock: 5,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=300&fit=crop&crop=center',
      description: 'Beautiful handcrafted wooden dining table'
    },
    {
      id: 2,
      name: 'Decorative Wall Art',
      category: 'Home Decor',
      price: 85,
      stock: 12,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop&crop=center',
      description: 'Modern abstract wall art piece'
    },
    {
      id: 3,
      name: 'Cotton Summer Dress',
      category: 'Clothing',
      price: 45,
      stock: 8,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=center',
      description: 'Comfortable cotton dress for summer'
    },
    {
      id: 4,
      name: 'Leather Handbag',
      category: 'Accessories',
      price: 120,
      stock: 3,
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=300&h=300&fit=crop&crop=center',
      description: 'Premium leather handbag with multiple compartments'
    },
    {
      id: 5,
      name: 'Natural Essential Oil',
      category: 'Health & Beauty',
      price: 25,
      stock: 15,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=300&fit=crop&crop=center',
      description: 'Pure essential oil for aromatherapy'
    },
    {
      id: 6,
      name: 'Handwoven Carpet',
      category: 'Handicrafts',
      price: 180,
      stock: 2,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop&crop=center',
      description: 'Traditional handwoven carpet with intricate patterns'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Products</h1>
        <Button className="mt-4 sm:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Add New Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  product.stock <= 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                  {product.stock} in stock
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                </div>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Product Card */}
      <Card className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
        <CardContent className="p-8">
          <div className="text-center">
            <Package className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New Product</h3>
            <p className="text-gray-600 mb-4">Start selling by adding your first product</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProducts;
