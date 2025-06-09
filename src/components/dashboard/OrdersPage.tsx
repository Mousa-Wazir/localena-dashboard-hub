
import React, { useState } from 'react';
import { Package, Download, RotateCcw, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const OrdersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const orders = [
    {
      id: '#ORD-001',
      date: '2024-06-05',
      products: ['Wireless Headphones', 'Phone Case'],
      total: '₹3,499',
      status: 'Delivered',
      tracking: 'TRK123456789',
      progress: 100
    },
    {
      id: '#ORD-002',
      date: '2024-06-03',
      products: ['Smart Watch'],
      total: '₹12,999',
      status: 'Shipped',
      tracking: 'TRK987654321',
      progress: 75
    },
    {
      id: '#ORD-003',
      date: '2024-06-01',
      products: ['Laptop Stand', 'Wireless Mouse'],
      total: '₹2,899',
      status: 'Processing',
      tracking: 'TRK456789123',
      progress: 25
    },
    {
      id: '#ORD-004',
      date: '2024-05-28',
      products: ['Bluetooth Speaker'],
      total: '₹1,999',
      status: 'Cancelled',
      tracking: '',
      progress: 0
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    if (activeTab === 'active') return ['Processing', 'Shipped'].includes(order.status);
    if (activeTab === 'completed') return order.status === 'Delivered';
    if (activeTab === 'cancelled') return order.status === 'Cancelled';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Orders
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <Package className="h-5 w-5 text-gray-400" />
                        <span className="font-medium text-lg">{order.id}</span>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Order Date: {order.date}</p>
                        <p className="text-sm">
                          <span className="font-medium">Products: </span>
                          {order.products.join(', ')}
                        </p>
                        <p className="text-lg font-bold">{order.total}</p>
                        
                        {order.tracking && (
                          <div className="mt-4">
                            <p className="text-sm text-gray-600 mb-2">
                              Tracking: {order.tracking}
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${order.progress}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Ordered</span>
                              <span>Processing</span>
                              <span>Shipped</span>
                              <span>Delivered</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      
                      {order.status === 'Delivered' && (
                        <>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Invoice
                          </Button>
                          <Button variant="outline" size="sm">
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Reorder
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersPage;
