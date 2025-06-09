
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Package, Search, Download, RotateCcw, Truck } from 'lucide-react';

const UserOrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: '#12345',
      date: '2024-01-15',
      items: [
        { name: 'Vintage Wooden Chair', image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=100&h=100&fit=crop', price: '$89.99' },
        { name: 'Table Lamp', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=100&h=100&fit=crop', price: '$34.99' }
      ],
      total: '$124.98',
      status: 'delivered',
      tracking: 'DHL123456789'
    },
    {
      id: '#12346',
      date: '2024-01-14',
      items: [
        { name: 'Cotton Summer Dress', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop', price: '$59.99' }
      ],
      total: '$59.99',
      status: 'shipped',
      tracking: 'FDX987654321'
    },
    {
      id: '#12347',
      date: '2024-01-13',
      items: [
        { name: 'Handmade Ceramic Vase', image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=100&h=100&fit=crop', price: '$79.99' }
      ],
      total: '$79.99',
      status: 'processing',
      tracking: ''
    },
    {
      id: '#12348',
      date: '2024-01-12',
      items: [
        { name: 'Designer Handbag', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=100&h=100&fit=crop', price: '$129.99' }
      ],
      total: '$129.99',
      status: 'cancelled',
      tracking: ''
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Badge className="bg-green-100 text-green-800">Delivered</Badge>;
      case 'shipped':
        return <Badge className="bg-blue-100 text-blue-800">Shipped</Badge>;
      case 'processing':
        return <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-1">Track and manage your orders</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search orders by ID or product name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </Card>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                <Package className="h-6 w-6 text-gray-400" />
                <div>
                  <h3 className="font-semibold text-gray-900">Order {order.id}</h3>
                  <p className="text-sm text-gray-600">Placed on {order.date}</p>
                  {order.tracking && (
                    <p className="text-sm text-gray-600">Tracking: {order.tracking}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusBadge(order.status)}
                <span className="font-semibold text-gray-900">{order.total}</span>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-3 mb-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Actions */}
            <div className="flex flex-wrap gap-2">
              {order.status === 'delivered' && (
                <>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Invoice
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Reorder
                  </Button>
                </>
              )}
              {order.status === 'shipped' && (
                <Button variant="outline" size="sm">
                  <Truck className="h-4 w-4 mr-2" />
                  Track Shipment
                </Button>
              )}
              {order.status === 'processing' && (
                <Button variant="outline" size="sm">
                  Cancel Order
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <Card className="p-12 text-center">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </Card>
      )}
    </div>
  );
};

export default UserOrdersPage;
