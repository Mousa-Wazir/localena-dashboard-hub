
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Package, ShoppingBag, DollarSign, Users, AlertTriangle } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    {
      title: 'Total Sales',
      value: '$12,450',
      change: '+12%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Active Products',
      value: '45',
      change: '+3',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      title: 'Pending Orders',
      value: '8',
      change: '+2',
      icon: ShoppingBag,
      color: 'text-orange-600'
    },
    {
      title: 'Total Customers',
      value: '127',
      change: '+15',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Ahmed Ali', product: 'Wooden Table', amount: '$299', status: 'Pending' },
    { id: 'ORD-002', customer: 'Sara Khan', product: 'Cotton Dress', amount: '$45', status: 'Shipped' },
    { id: 'ORD-003', customer: 'Hassan Ahmed', product: 'Handmade Vase', amount: '$85', status: 'Delivered' },
    { id: 'ORD-004', customer: 'Fatima Sheikh', product: 'Essential Oil', amount: '$25', status: 'Processing' },
  ];

  const lowStockItems = [
    { name: 'Handwoven Carpet', stock: 2, category: 'Handicrafts' },
    { name: 'Wooden Chair', stock: 1, category: 'Furniture' },
    { name: 'Cotton Shirt', stock: 3, category: 'Clothing' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1 sm:mt-0">Welcome back! Here's what's happening with your store.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Recent Orders</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                    <p className="text-xs text-gray-500">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{order.amount}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stock Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <span>Low Stock Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                      {item.stock} left
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              <Package className="h-8 w-8 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Add Product</span>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              <ShoppingBag className="h-8 w-8 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">View Orders</span>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Sales Report</span>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              <Users className="h-8 w-8 mx-auto mb-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">View Customers</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
