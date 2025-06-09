
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MessageSquare, ShoppingBag, Star } from 'lucide-react';

const CustomersPage = () => {
  const customers = [
    {
      id: 1,
      name: 'Ahmed Ali',
      email: 'ahmed@example.com',
      phone: '+92 300 1234567',
      totalOrders: 12,
      totalSpent: 1450,
      lastOrder: '2024-01-15',
      status: 'Active',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Sara Khan',
      email: 'sara@example.com',
      phone: '+92 301 2345678',
      totalOrders: 8,
      totalSpent: 680,
      lastOrder: '2024-01-14',
      status: 'Active',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Hassan Ahmed',
      email: 'hassan@example.com',
      phone: '+92 302 3456789',
      totalOrders: 15,
      totalSpent: 2100,
      lastOrder: '2024-01-13',
      status: 'VIP',
      rating: 4.7
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <Button variant="outline">Export List</Button>
          <Button>Add Customer</Button>
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Customers</p>
                <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">VIP Customers</p>
                <p className="text-2xl font-bold text-gray-900">
                  {customers.filter(c => c.status === 'VIP').length}
                </p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${customers.reduce((sum, c) => sum + c.totalSpent, 0)}
                </p>
              </div>
              <ShoppingBag className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">
                  {(customers.reduce((sum, c) => sum + c.rating, 0) / customers.length).toFixed(1)}
                </p>
              </div>
              <Star className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Customers List */}
      <Card>
        <CardHeader>
          <CardTitle>Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium text-gray-600">Customer</th>
                  <th className="text-left p-3 font-medium text-gray-600">Contact</th>
                  <th className="text-left p-3 font-medium text-gray-600">Orders</th>
                  <th className="text-left p-3 font-medium text-gray-600">Total Spent</th>
                  <th className="text-left p-3 font-medium text-gray-600">Last Order</th>
                  <th className="text-left p-3 font-medium text-gray-600">Status</th>
                  <th className="text-left p-3 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <p className="font-medium text-gray-900">{customer.name}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-gray-600">{customer.rating}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="text-sm text-gray-900">{customer.email}</p>
                        <p className="text-sm text-gray-600">{customer.phone}</p>
                      </div>
                    </td>
                    <td className="p-3 font-medium text-gray-900">{customer.totalOrders}</td>
                    <td className="p-3 font-medium text-gray-900">${customer.totalSpent}</td>
                    <td className="p-3 text-gray-600">{customer.lastOrder}</td>
                    <td className="p-3">
                      <Badge className={
                        customer.status === 'VIP' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }>
                        {customer.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          View Orders
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

export default CustomersPage;
