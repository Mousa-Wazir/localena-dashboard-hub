
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, Package, CheckCircle, XCircle } from 'lucide-react';

const RentalManagementPage = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const rentalRequests = {
    pending: [
      {
        id: 1,
        customer: 'Ahmed Ali',
        product: 'Wedding Decoration Set',
        startDate: '2024-02-01',
        endDate: '2024-02-03',
        duration: '3 days',
        dailyRate: 150,
        totalAmount: 450,
        deposit: 500,
        status: 'pending'
      },
      {
        id: 2,
        customer: 'Sara Khan',
        product: 'Premium Sound System',
        startDate: '2024-02-05',
        endDate: '2024-02-12',
        duration: '1 week',
        dailyRate: 200,
        totalAmount: 1400,
        deposit: 1000,
        status: 'pending'
      }
    ],
    active: [
      {
        id: 3,
        customer: 'Hassan Ahmed',
        product: 'Elegant Dining Set',
        startDate: '2024-01-15',
        endDate: '2024-02-15',
        duration: '1 month',
        dailyRate: 80,
        totalAmount: 2400,
        deposit: 300,
        status: 'active',
        returnDate: '2024-02-15'
      }
    ],
    completed: [
      {
        id: 4,
        customer: 'Fatima Sheikh',
        product: 'Photography Equipment Kit',
        startDate: '2024-01-10',
        endDate: '2024-01-12',
        duration: '3 days',
        dailyRate: 120,
        totalAmount: 360,
        deposit: 800,
        status: 'completed',
        returnDate: '2024-01-12'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const approveRequest = (id: number) => {
    console.log('Approving request:', id);
  };

  const rejectRequest = (id: number) => {
    console.log('Rejecting request:', id);
  };

  const markReturned = (id: number) => {
    console.log('Marking as returned:', id);
  };

  const tabs = [
    { id: 'pending', label: 'Pending Requests', count: rentalRequests.pending.length },
    { id: 'active', label: 'Active Rentals', count: rentalRequests.active.length },
    { id: 'completed', label: 'Completed', count: rentalRequests.completed.length }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Rental Management</h1>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          View Calendar
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                <p className="text-2xl font-bold text-yellow-600">{rentalRequests.pending.length}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Rentals</p>
                <p className="text-2xl font-bold text-blue-600">{rentalRequests.active.length}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-green-600">{rentalRequests.completed.length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-purple-600">$4,610</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-gray-900 shadow'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            {tab.count > 0 && (
              <span className="ml-2 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Rental Requests */}
      <Card>
        <CardHeader>
          <CardTitle>
            {activeTab === 'pending' && 'Pending Requests'}
            {activeTab === 'active' && 'Active Rentals'}
            {activeTab === 'completed' && 'Completed Rentals'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rentalRequests[activeTab as keyof typeof rentalRequests].map((rental) => (
              <div key={rental.id} className="border rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1 grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <User className="h-4 w-4 text-gray-600" />
                        <span className="font-medium text-gray-900">{rental.customer}</span>
                        <Badge className={getStatusColor(rental.status)}>
                          {rental.status}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{rental.product}</h3>
                      <p className="text-sm text-gray-600">Duration: {rental.duration}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600">
                          {rental.startDate} to {rental.endDate}
                        </span>
                      </div>
                      {rental.returnDate && (
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-gray-600">Returned: {rental.returnDate}</span>
                        </div>
                      )}
                      <div className="text-sm">
                        <span className="text-gray-600">Daily Rate: </span>
                        <span className="font-medium">${rental.dailyRate}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Total: </span>
                        <span className="font-medium">${rental.totalAmount}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-600">Deposit: </span>
                        <span className="font-medium text-orange-600">${rental.deposit}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    {activeTab === 'pending' && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => approveRequest(rental.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => rejectRequest(rental.id)}
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                    {activeTab === 'active' && (
                      <>
                        <Button size="sm" onClick={() => markReturned(rental.id)}>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Mark Returned
                        </Button>
                        <Button variant="outline" size="sm">
                          Contact Customer
                        </Button>
                      </>
                    )}
                    {activeTab === 'completed' && (
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {rentalRequests[activeTab as keyof typeof rentalRequests].length === 0 && (
              <div className="text-center py-8">
                <Package className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600">No {activeTab} rentals found</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentalManagementPage;
