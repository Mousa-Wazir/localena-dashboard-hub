
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Package, DollarSign, Download } from 'lucide-react';

const SalesReportPage = () => {
  const salesData = {
    totalSales: 15250,
    totalOrders: 89,
    averageOrderValue: 171,
    topCategory: 'Furniture'
  };

  const categorySales = [
    { category: 'Furniture', sales: 8500, orders: 25, percentage: 55.7 },
    { category: 'Home Decor', sales: 3200, orders: 28, percentage: 21.0 },
    { category: 'Clothing', sales: 2100, orders: 18, percentage: 13.8 },
    { category: 'Accessories', sales: 950, orders: 12, percentage: 6.2 },
    { category: 'Health & Beauty', sales: 500, orders: 6, percentage: 3.3 }
  ];

  const monthlySales = [
    { month: 'Jan', sales: 12500 },
    { month: 'Feb', sales: 15800 },
    { month: 'Mar', sales: 13200 },
    { month: 'Apr', sales: 16900 },
    { month: 'May', sales: 18500 },
    { month: 'Jun', sales: 15250 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Sales Report</h1>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Sales</p>
                <p className="text-2xl font-bold text-gray-900">${salesData.totalSales}</p>
                <p className="text-sm text-green-600">+18% this month</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{salesData.totalOrders}</p>
                <p className="text-sm text-green-600">+12% this month</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                <p className="text-2xl font-bold text-gray-900">${salesData.averageOrderValue}</p>
                <p className="text-sm text-green-600">+5% this month</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Top Category</p>
                <p className="text-2xl font-bold text-gray-900">{salesData.topCategory}</p>
                <p className="text-sm text-gray-600">55.7% of sales</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Sales Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Sales by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categorySales.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{category.category}</h3>
                    <span className="text-sm text-gray-600">{category.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-6 text-right">
                  <p className="font-semibold text-gray-900">${category.sales}</p>
                  <p className="text-sm text-gray-600">{category.orders} orders</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Sales Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between space-x-2">
            {monthlySales.map((month, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-blue-600 rounded-t"
                  style={{
                    height: `${(month.sales / Math.max(...monthlySales.map(m => m.sales))) * 200}px`,
                    minHeight: '20px'
                  }}
                ></div>
                <span className="text-sm text-gray-600 mt-2">{month.month}</span>
                <span className="text-xs text-gray-500">${month.sales}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sales Performance */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Handcrafted Wooden Table</span>
                <span className="font-semibold">$2,990</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Modern Sofa Set</span>
                <span className="font-semibold">$2,550</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Decorative Wall Art</span>
                <span className="font-semibold">$1,700</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Returns & Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Returns</span>
                <span className="font-semibold text-gray-900">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Return Rate</span>
                <span className="font-semibold text-gray-900">3.4%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Refund Amount</span>
                <span className="font-semibold text-red-600">$285</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalesReportPage;
