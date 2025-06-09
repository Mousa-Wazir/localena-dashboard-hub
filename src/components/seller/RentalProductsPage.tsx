
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, Clock, DollarSign } from 'lucide-react';

const RentalProductsPage = () => {
  const [rentalProducts] = useState([
    {
      id: 1,
      name: 'Wedding Decoration Set',
      category: 'Event Decor',
      dailyRate: 150,
      weeklyRate: 900,
      monthlyRate: 2500,
      deposit: 500,
      availability: 'available',
      totalBookings: 12,
      revenue: 18000,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Premium Sound System',
      category: 'Audio Equipment',
      dailyRate: 200,
      weeklyRate: 1200,
      monthlyRate: 3500,
      deposit: 1000,
      availability: 'rented',
      totalBookings: 8,
      revenue: 15600,
      image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Elegant Dining Set',
      category: 'Furniture',
      dailyRate: 80,
      weeklyRate: 480,
      monthlyRate: 1400,
      deposit: 300,
      availability: 'available',
      totalBookings: 15,
      revenue: 12000,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=200&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Photography Equipment Kit',
      category: 'Photography',
      dailyRate: 120,
      weeklyRate: 720,
      monthlyRate: 2000,
      deposit: 800,
      availability: 'maintenance',
      totalBookings: 6,
      revenue: 7200,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=center'
    }
  ]);

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'rented':
        return 'bg-blue-100 text-blue-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      case 'unavailable':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const rentalStats = {
    totalProducts: rentalProducts.length,
    availableProducts: rentalProducts.filter(p => p.availability === 'available').length,
    activeRentals: rentalProducts.filter(p => p.availability === 'rented').length,
    totalRevenue: rentalProducts.reduce((sum, p) => sum + p.revenue, 0)
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Rental Products</h1>
        <Button className="mt-4 sm:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Add Rental Product
        </Button>
      </div>

      {/* Rental Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Products</p>
                <p className="text-2xl font-bold text-gray-900">{rentalStats.totalProducts}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available</p>
                <p className="text-2xl font-bold text-green-600">{rentalStats.availableProducts}</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Rentals</p>
                <p className="text-2xl font-bold text-blue-600">{rentalStats.activeRentals}</p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-purple-600">${rentalStats.totalRevenue}</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rental Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rentalProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className={getAvailabilityColor(product.availability)}>
                  {product.availability}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Daily:</span>
                    <span className="font-medium">${product.dailyRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Weekly:</span>
                    <span className="font-medium">${product.weeklyRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly:</span>
                    <span className="font-medium">${product.monthlyRate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Deposit:</span>
                    <span className="font-medium text-orange-600">${product.deposit}</span>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Bookings:</span>
                    <span className="font-medium">{product.totalBookings}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-medium text-green-600">${product.revenue}</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Bookings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Rental Terms & Conditions */}
      <Card>
        <CardHeader>
          <CardTitle>Rental Terms & Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Default Terms</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Security deposit required for all rentals</li>
                <li>• Damage fees apply for any product damage</li>
                <li>• Late return fees: 50% of daily rate per day</li>
                <li>• Cancellation allowed up to 24 hours before rental</li>
                <li>• Cleaning fee may apply for heavily soiled items</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Rental Guidelines</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Minimum rental period: 1 day</li>
                <li>• Maximum rental period: 30 days</li>
                <li>• Pickup and delivery available for extra fee</li>
                <li>• Products must be returned in original condition</li>
                <li>• Insurance recommended for high-value items</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentalProductsPage;
