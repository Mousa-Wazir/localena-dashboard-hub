
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Copy, Edit, Trash2, Gift, Search } from 'lucide-react';

const CouponsPage = () => {
  const [coupons] = useState([
    {
      id: 1,
      code: 'SAVE20',
      description: '20% off on orders over $100',
      discount: 20,
      type: 'percentage',
      minOrder: 100,
      usageLimit: 100,
      usedCount: 45,
      expiryDate: '2024-12-31',
      status: 'active'
    },
    {
      id: 2,
      code: 'WELCOME50',
      description: '$50 off for new customers',
      discount: 50,
      type: 'fixed',
      minOrder: 200,
      usageLimit: 500,
      usedCount: 120,
      expiryDate: '2024-12-31',
      status: 'active'
    },
    {
      id: 3,
      code: 'FLASH15',
      description: '15% off flash sale',
      discount: 15,
      type: 'percentage',
      minOrder: 0,
      usageLimit: 50,
      usedCount: 50,
      expiryDate: '2024-01-15',
      status: 'expired'
    },
    {
      id: 4,
      code: 'FURNITURE25',
      description: '25% off furniture items',
      discount: 25,
      type: 'percentage',
      minOrder: 150,
      usageLimit: 200,
      usedCount: 0,
      expiryDate: '2024-06-30',
      status: 'scheduled'
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

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    console.log(`Copied ${code} to clipboard`);
  };

  const couponStats = {
    total: coupons.length,
    active: coupons.filter(c => c.status === 'active').length,
    totalUsage: coupons.reduce((sum, c) => sum + c.usedCount, 0),
    conversionRate: 24.5
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Coupons</h1>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search coupons..." className="pl-10" />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Coupon
          </Button>
        </div>
      </div>

      {/* Coupon Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Coupons</p>
                <p className="text-2xl font-bold text-gray-900">{couponStats.total}</p>
              </div>
              <Gift className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Coupons</p>
                <p className="text-2xl font-bold text-gray-900">{couponStats.active}</p>
              </div>
              <Gift className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Usage</p>
                <p className="text-2xl font-bold text-gray-900">{couponStats.totalUsage}</p>
              </div>
              <Gift className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                <p className="text-2xl font-bold text-gray-900">{couponStats.conversionRate}%</p>
              </div>
              <Gift className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coupons List */}
      <Card>
        <CardHeader>
          <CardTitle>All Coupons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {coupons.map((coupon) => (
              <div key={coupon.id} className="border rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex items-center space-x-2">
                        <code className="bg-gray-100 px-3 py-1 rounded text-lg font-mono font-bold">
                          {coupon.code}
                        </code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(coupon.code)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <Badge className={getStatusColor(coupon.status)}>
                        {coupon.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{coupon.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Discount</p>
                        <p className="font-medium">
                          {coupon.type === 'percentage' ? `${coupon.discount}%` : `$${coupon.discount}`}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Min Order</p>
                        <p className="font-medium">${coupon.minOrder}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Usage</p>
                        <p className="font-medium">{coupon.usedCount}/{coupon.usageLimit}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Expires</p>
                        <p className="font-medium">{coupon.expiryDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Usage Rate</p>
                        <p className="font-medium">
                          {Math.round((coupon.usedCount / coupon.usageLimit) * 100)}%
                        </p>
                      </div>
                    </div>
                    
                    {/* Usage Progress Bar */}
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${(coupon.usedCount / coupon.usageLimit) * 100}%` }}
                        ></div>
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

      {/* Quick Create Coupon */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Create Coupon</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="p-6 h-auto">
              <div className="text-center">
                <Gift className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold mb-1">Percentage Off</h3>
                <p className="text-sm text-gray-600">Create % discount coupon</p>
              </div>
            </Button>
            <Button variant="outline" className="p-6 h-auto">
              <div className="text-center">
                <Gift className="h-8 w-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold mb-1">Fixed Amount</h3>
                <p className="text-sm text-gray-600">Create $ discount coupon</p>
              </div>
            </Button>
            <Button variant="outline" className="p-6 h-auto">
              <div className="text-center">
                <Gift className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-semibold mb-1">Free Shipping</h3>
                <p className="text-sm text-gray-600">Create free shipping coupon</p>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CouponsPage;
