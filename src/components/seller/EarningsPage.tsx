
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Download, Calendar } from 'lucide-react';

const EarningsPage = () => {
  const earningsData = {
    today: 125,
    thisWeek: 890,
    thisMonth: 3450,
    thisYear: 28900,
    totalEarnings: 45600
  };

  const recentEarnings = [
    { date: '2024-01-15', order: 'ORD-001', amount: 299, commission: 14.95, net: 284.05 },
    { date: '2024-01-14', order: 'ORD-002', amount: 90, commission: 4.50, net: 85.50 },
    { date: '2024-01-13', order: 'ORD-003', amount: 85, commission: 4.25, net: 80.75 },
    { date: '2024-01-12', order: 'ORD-004', amount: 75, commission: 3.75, net: 71.25 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Earnings</h1>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Select Period
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today</p>
                <p className="text-2xl font-bold text-gray-900">${earningsData.today}</p>
                <p className="text-sm text-green-600">+8% from yesterday</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-gray-900">${earningsData.thisWeek}</p>
                <p className="text-sm text-green-600">+12% from last week</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">${earningsData.thisMonth}</p>
                <p className="text-sm text-green-600">+15% from last month</p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Year</p>
                <p className="text-2xl font-bold text-gray-900">${earningsData.thisYear}</p>
                <p className="text-sm text-green-600">+25% from last year</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">${earningsData.totalEarnings}</p>
                <p className="text-sm text-gray-600">All time</p>
              </div>
              <DollarSign className="h-8 w-8 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Earnings */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Earnings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium text-gray-600">Date</th>
                  <th className="text-left p-3 font-medium text-gray-600">Order ID</th>
                  <th className="text-left p-3 font-medium text-gray-600">Gross Amount</th>
                  <th className="text-left p-3 font-medium text-gray-600">Commission (5%)</th>
                  <th className="text-left p-3 font-medium text-gray-600">Net Earnings</th>
                </tr>
              </thead>
              <tbody>
                {recentEarnings.map((earning, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-gray-600">{earning.date}</td>
                    <td className="p-3 font-medium text-gray-900">{earning.order}</td>
                    <td className="p-3 font-medium text-gray-900">${earning.amount}</td>
                    <td className="p-3 text-red-600">-${earning.commission}</td>
                    <td className="p-3 font-medium text-green-600">${earning.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment Schedule</h3>
              <p className="text-gray-600 mb-2">Payments are processed weekly on Fridays</p>
              <p className="text-sm text-gray-500">Next payment: Friday, January 19, 2024</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Commission Rate</h3>
              <p className="text-gray-600 mb-2">Standard rate: 5% per sale</p>
              <p className="text-sm text-gray-500">Contact support for volume discounts</p>
            </div>
          </div>
          <div className="pt-4 border-t">
            <h3 className="font-semibold text-gray-900 mb-2">Pending Payout</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">$1,247.50</span>
              <Button>Request Payout</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EarningsPage;
