
import React from 'react';
import { Package, Gift, Eye, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DashboardOverview: React.FC = () => {
  const recentOrders = [
    { id: '#ORD-001', product: 'Wireless Headphones', status: 'Delivered', date: '2024-06-05' },
    { id: '#ORD-002', product: 'Smart Watch', status: 'Shipped', date: '2024-06-03' },
    { id: '#ORD-003', product: 'Laptop Stand', status: 'Processing', date: '2024-06-01' },
  ];

  const coupons = [
    { code: 'SAVE20', discount: '20% Off', expiry: '2024-06-15', category: 'Electronics' },
    { code: 'WELCOME10', discount: '₹100 Off', expiry: '2024-06-20', category: 'All Items' },
  ];

  const recentlyViewed = [
    { id: 1, name: 'Gaming Keyboard', price: '₹2,999', image: '🎮' },
    { id: 2, name: 'Office Chair', price: '₹8,999', image: '🪑' },
    { id: 3, name: 'Table Lamp', price: '₹1,499', image: '💡' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
        <p className="text-gray-200">Here's what's happening with your account today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <Package className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Coupons</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Gift className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Wishlist Items</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Eye className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Reviews Given</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Star className="h-8 w-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Orders
              <Button variant="outline" size="sm">View All</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">{order.product}</p>
                    <p className="text-sm text-gray-600">{order.id} • {order.date}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Coupons */}
        <Card>
          <CardHeader>
            <CardTitle>Active Coupons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {coupons.map((coupon) => (
                <div key={coupon.code} className="p-4 border border-dashed border-gray-300 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-lg">{coupon.code}</span>
                    <Button size="sm">Apply</Button>
                  </div>
                  <p className="text-sm text-gray-600">{coupon.discount} on {coupon.category}</p>
                  <p className="text-xs text-gray-500">Expires: {coupon.expiry}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recently Viewed Products */}
      <Card>
        <CardHeader>
          <CardTitle>Recently Viewed Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentlyViewed.map((product) => (
              <div key={product.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2 text-center">{product.image}</div>
                <h3 className="font-medium text-center">{product.name}</h3>
                <p className="text-lg font-bold text-center text-gray-800">{product.price}</p>
                <Button className="w-full mt-2" size="sm">Add to Cart</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
