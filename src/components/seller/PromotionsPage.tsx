
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Megaphone, Calendar } from 'lucide-react';

const PromotionsPage = () => {
  const [promotions] = useState([
    {
      id: 1,
      title: 'Summer Sale 2024',
      description: '25% off on all furniture items',
      discount: 25,
      type: 'percentage',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      status: 'active',
      products: 15,
      orders: 42
    },
    {
      id: 2,
      title: 'New Customer Welcome',
      description: '$50 off first purchase over $200',
      discount: 50,
      type: 'fixed',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'active',
      products: 0,
      orders: 28
    },
    {
      id: 3,
      title: 'Flash Weekend Sale',
      description: '15% off home decor items',
      discount: 15,
      type: 'percentage',
      startDate: '2024-01-10',
      endDate: '2024-01-12',
      status: 'expired',
      products: 8,
      orders: 15
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Promotions</h1>
        <Button className="mt-4 sm:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Create Promotion
        </Button>
      </div>

      {/* Promotion Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Promotions</p>
                <p className="text-2xl font-bold text-gray-900">
                  {promotions.filter(p => p.status === 'active').length}
                </p>
              </div>
              <Megaphone className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">
                  {promotions.reduce((sum, p) => sum + p.orders, 0)}
                </p>
              </div>
              <Calendar className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Discount</p>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(promotions.reduce((sum, p) => sum + p.discount, 0) / promotions.length)}%
                </p>
              </div>
              <Badge className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Products on Sale</p>
                <p className="text-2xl font-bold text-gray-900">
                  {promotions.reduce((sum, p) => sum + p.products, 0)}
                </p>
              </div>
              <Badge className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Promotions List */}
      <Card>
        <CardHeader>
          <CardTitle>All Promotions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {promotions.map((promotion) => (
              <div key={promotion.id} className="border rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{promotion.title}</h3>
                      <Badge className={getStatusColor(promotion.status)}>
                        {promotion.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{promotion.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Discount</p>
                        <p className="font-medium">
                          {promotion.type === 'percentage' ? `${promotion.discount}%` : `$${promotion.discount}`}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="font-medium">{promotion.startDate} - {promotion.endDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Products</p>
                        <p className="font-medium">{promotion.products}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Orders</p>
                        <p className="font-medium">{promotion.orders}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Create Promotion Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Promotion Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Practices</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Set clear start and end dates</li>
                <li>• Use compelling titles and descriptions</li>
                <li>• Monitor performance regularly</li>
                <li>• Test different discount percentages</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Promotion Types</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Percentage discounts (10%, 25%, etc.)</li>
                <li>• Fixed amount discounts ($10, $50, etc.)</li>
                <li>• Buy one get one (BOGO)</li>
                <li>• Free shipping promotions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromotionsPage;
