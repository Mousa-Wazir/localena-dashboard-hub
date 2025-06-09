
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Package, TrendingDown, Bell } from 'lucide-react';

const StockAlertsPage = () => {
  const lowStockItems = [
    {
      id: 1,
      name: 'Handwoven Carpet',
      category: 'Handicrafts',
      currentStock: 2,
      minThreshold: 5,
      reorderLevel: 20,
      avgSales: 3,
      daysLeft: 2,
      status: 'critical'
    },
    {
      id: 2,
      name: 'Wooden Chair',
      category: 'Furniture',
      currentStock: 1,
      minThreshold: 3,
      reorderLevel: 15,
      avgSales: 2,
      daysLeft: 1,
      status: 'critical'
    },
    {
      id: 3,
      name: 'Cotton Shirt',
      category: 'Clothing',
      currentStock: 3,
      minThreshold: 8,
      reorderLevel: 25,
      avgSales: 5,
      daysLeft: 3,
      status: 'warning'
    },
    {
      id: 4,
      name: 'Essential Oil Set',
      category: 'Health & Beauty',
      currentStock: 5,
      minThreshold: 10,
      reorderLevel: 30,
      avgSales: 4,
      daysLeft: 5,
      status: 'warning'
    }
  ];

  const outOfStockItems = [
    {
      id: 1,
      name: 'Ceramic Vase',
      category: 'Home Decor',
      lastSold: '2024-01-10',
      lostSales: 5,
      revenue: 425
    },
    {
      id: 2,
      name: 'Leather Wallet',
      category: 'Accessories',
      lastSold: '2024-01-08',
      lostSales: 3,
      revenue: 180
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stockStats = {
    totalLowStock: lowStockItems.length,
    outOfStock: outOfStockItems.length,
    criticalItems: lowStockItems.filter(item => item.status === 'critical').length,
    estimatedLostRevenue: outOfStockItems.reduce((sum, item) => sum + item.revenue, 0)
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Stock Alerts</h1>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Bell className="h-4 w-4 mr-2" />
            Alert Settings
          </Button>
          <Button>
            <Package className="h-4 w-4 mr-2" />
            Reorder Stock
          </Button>
        </div>
      </div>

      {/* Stock Alert Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Low Stock Items</p>
                <p className="text-2xl font-bold text-orange-600">{stockStats.totalLowStock}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Out of Stock</p>
                <p className="text-2xl font-bold text-red-600">{stockStats.outOfStock}</p>
              </div>
              <Package className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Critical Level</p>
                <p className="text-2xl font-bold text-red-600">{stockStats.criticalItems}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Lost Revenue</p>
                <p className="text-2xl font-bold text-red-600">${stockStats.estimatedLostRevenue}</p>
              </div>
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Low Stock Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <span>Low Stock Items</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium text-gray-600">Product</th>
                  <th className="text-left p-3 font-medium text-gray-600">Category</th>
                  <th className="text-left p-3 font-medium text-gray-600">Current Stock</th>
                  <th className="text-left p-3 font-medium text-gray-600">Min Threshold</th>
                  <th className="text-left p-3 font-medium text-gray-600">Days Left</th>
                  <th className="text-left p-3 font-medium text-gray-600">Status</th>
                  <th className="text-left p-3 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {lowStockItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">{item.name}</td>
                    <td className="p-3 text-gray-600">{item.category}</td>
                    <td className="p-3">
                      <span className={`font-medium ${
                        item.currentStock <= 2 ? 'text-red-600' : 'text-orange-600'
                      }`}>
                        {item.currentStock}
                      </span>
                    </td>
                    <td className="p-3 text-gray-600">{item.minThreshold}</td>
                    <td className="p-3">
                      <span className={`font-medium ${
                        item.daysLeft <= 2 ? 'text-red-600' : 'text-orange-600'
                      }`}>
                        {item.daysLeft} days
                      </span>
                    </td>
                    <td className="p-3">
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                        <Button variant="outline" size="sm">
                          Edit Threshold
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Out of Stock Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="h-5 w-5 text-red-600" />
            <span>Out of Stock Items</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {outOfStockItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-xs text-gray-500">Last sold: {item.lastSold}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Lost sales: {item.lostSales}</p>
                  <p className="font-medium text-red-600">-${item.revenue}</p>
                </div>
                <Button size="sm">Restock</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Stock Alert Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Notification Preferences</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Email notifications for critical stock</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" defaultChecked />
                  <span className="text-sm">Daily stock summary</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">SMS alerts for out of stock items</span>
                </label>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Default Thresholds</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Furniture</label>
                  <input type="number" className="w-full p-2 border rounded" defaultValue="5" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Clothing</label>
                  <input type="number" className="w-full p-2 border rounded" defaultValue="10" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Home Decor</label>
                  <input type="number" className="w-full p-2 border rounded" defaultValue="8" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockAlertsPage;
