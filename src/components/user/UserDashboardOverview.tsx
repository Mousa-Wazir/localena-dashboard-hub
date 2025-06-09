
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Heart, Gift, Eye, TrendingUp } from 'lucide-react';

const UserDashboardOverview = () => {
  const recentOrders = [
    { id: '#12345', item: 'Vintage Wooden Chair', status: 'Delivered', date: '2024-01-15', amount: '$89.99' },
    { id: '#12346', item: 'Handmade Ceramic Vase', status: 'Shipped', date: '2024-01-14', amount: '$34.99' },
    { id: '#12347', item: 'Cotton Summer Dress', status: 'Processing', date: '2024-01-13', amount: '$59.99' },
  ];

  const activeCoupons = [
    { code: 'SAVE20', discount: '20% OFF', expires: '2024-02-01', category: 'Furniture' },
    { code: 'NEWUSER', discount: '$10 OFF', expires: '2024-01-25', category: 'All Items' },
  ];

  const recentlyViewed = [
    { id: 1, name: 'Modern Sofa Set', price: '$899.99', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop' },
    { id: 2, name: 'Decorative Plants', price: '$24.99', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop' },
    { id: 3, name: 'Designer Handbag', price: '$129.99', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Sarah!</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your account</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
            <Package className="h-8 w-8 text-blue-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Wishlist Items</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Heart className="h-8 w-8 text-red-500" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Coupons</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <Gift className="h-8 w-8 text-green-600" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Savings</p>
              <p className="text-2xl font-bold text-gray-900">$156</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{order.item}</p>
                  <p className="text-sm text-gray-600">{order.id} • {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{order.amount}</p>
                  <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'Shipped' ? 'secondary' : 'outline'}>
                    {order.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Active Coupons */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Active Coupons</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-3">
            {activeCoupons.map((coupon, index) => (
              <div key={index} className="p-4 border border-dashed border-gray-300 rounded-lg bg-gradient-to-r from-green-50 to-blue-50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg text-gray-900">{coupon.code}</p>
                    <p className="text-sm text-gray-600">{coupon.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600">{coupon.discount}</p>
                    <p className="text-xs text-gray-500">Expires {coupon.expires}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recently Viewed Products */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recently Viewed</h2>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View History
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentlyViewed.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-3">
                <h3 className="font-medium text-gray-900 text-sm">{product.name}</h3>
                <p className="text-lg font-bold text-gray-900 mt-1">{product.price}</p>
                <Button size="sm" className="w-full mt-2">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default UserDashboardOverview;
