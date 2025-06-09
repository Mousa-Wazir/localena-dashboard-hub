
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, Package } from 'lucide-react';

const OrdersManagement = () => {
  const [orders] = useState([
    {
      id: 'ORD-001',
      customer: 'Ahmed Ali',
      email: 'ahmed@example.com',
      product: 'Handcrafted Wooden Table',
      quantity: 1,
      amount: 299,
      status: 'Pending',
      date: '2024-01-15',
      address: '123 Main St, Karachi'
    },
    {
      id: 'ORD-002',
      customer: 'Sara Khan',
      email: 'sara@example.com',
      product: 'Cotton Summer Dress',
      quantity: 2,
      amount: 90,
      status: 'Shipped',
      date: '2024-01-14',
      address: '456 Oak Ave, Lahore'
    },
    {
      id: 'ORD-003',
      customer: 'Hassan Ahmed',
      email: 'hassan@example.com',
      product: 'Decorative Wall Art',
      quantity: 1,
      amount: 85,
      status: 'Delivered',
      date: '2024-01-13',
      address: '789 Pine St, Islamabad'
    },
    {
      id: 'ORD-004',
      customer: 'Fatima Sheikh',
      email: 'fatima@example.com',
      product: 'Natural Essential Oil',
      quantity: 3,
      amount: 75,
      status: 'Processing',
      date: '2024-01-12',
      address: '321 Elm St, Faisalabad'
    },
    {
      id: 'ORD-005',
      customer: 'Ali Raza',
      email: 'ali@example.com',
      product: 'Leather Handbag',
      quantity: 1,
      amount: 120,
      status: 'Cancelled',
      date: '2024-01-11',
      address: '654 Maple Dr, Rawalpindi'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const orderStats = [
    { label: 'Total Orders', value: orders.length, color: 'text-blue-600' },
    { label: 'Pending', value: orders.filter(o => o.status === 'Pending').length, color: 'text-orange-600' },
    { label: 'Shipped', value: orders.filter(o => o.status === 'Shipped').length, color: 'text-blue-600' },
    { label: 'Delivered', value: orders.filter(o => o.status === 'Delivered').length, color: 'text-green-600' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Orders Management</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {orderStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium text-gray-600">Order ID</th>
                  <th className="text-left p-3 font-medium text-gray-600">Customer</th>
                  <th className="text-left p-3 font-medium text-gray-600">Product</th>
                  <th className="text-left p-3 font-medium text-gray-600">Amount</th>
                  <th className="text-left p-3 font-medium text-gray-600">Status</th>
                  <th className="text-left p-3 font-medium text-gray-600">Date</th>
                  <th className="text-left p-3 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-900">{order.id}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium text-gray-900">{order.customer}</p>
                        <p className="text-sm text-gray-600">{order.email}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium text-gray-900">{order.product}</p>
                        <p className="text-sm text-gray-600">Qty: {order.quantity}</p>
                      </div>
                    </td>
                    <td className="p-3 font-medium text-gray-900">${order.amount}</td>
                    <td className="p-3">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="p-3 text-gray-600">{order.date}</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Package className="h-4 w-4" />
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
    </div>
  );
};

export default OrdersManagement;
