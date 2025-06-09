
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Gift, Copy, Calendar, Tag } from 'lucide-react';

const UserCouponsPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [couponCode, setCouponCode] = useState('');

  const coupons = {
    active: [
      {
        id: 1,
        code: 'SAVE20',
        title: '20% Off Furniture',
        description: 'Get 20% discount on all furniture items',
        discount: '20% OFF',
        expires: '2024-02-15',
        category: 'Furniture',
        minOrder: '$100',
        used: false
      },
      {
        id: 2,
        code: 'NEWUSER10',
        title: '$10 Off First Order',
        description: 'Welcome discount for new customers',
        discount: '$10 OFF',
        expires: '2024-01-30',
        category: 'All Categories',
        minOrder: '$50',
        used: false
      },
      {
        id: 3,
        code: 'FREESHIP',
        title: 'Free Shipping',
        description: 'Free shipping on orders over $75',
        discount: 'FREE SHIPPING',
        expires: '2024-03-01',
        category: 'All Categories',
        minOrder: '$75',
        used: false
      }
    ],
    used: [
      {
        id: 4,
        code: 'WELCOME5',
        title: '$5 Welcome Bonus',
        description: 'Welcome discount for new users',
        discount: '$5 OFF',
        expires: '2024-01-15',
        category: 'All Categories',
        minOrder: '$25',
        used: true,
        usedDate: '2024-01-10'
      }
    ],
    expired: [
      {
        id: 5,
        code: 'HOLIDAY25',
        title: '25% Holiday Sale',
        description: 'Special holiday discount',
        discount: '25% OFF',
        expires: '2024-01-01',
        category: 'All Categories',
        minOrder: '$100',
        used: false
      }
    ]
  };

  const copyCouponCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // Show toast notification
    console.log('Copied:', code);
  };

  const applyCoupon = (code: string) => {
    // Apply coupon logic
    console.log('Applying coupon:', code);
  };

  const addCoupon = () => {
    if (couponCode.trim()) {
      // Add coupon logic
      console.log('Adding coupon:', couponCode);
      setCouponCode('');
    }
  };

  const renderCouponCard = (coupon: any) => (
    <Card key={coupon.id} className="p-6 border-l-4 border-l-blue-500">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 mb-4 lg:mb-0">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{coupon.title}</h3>
            <Badge 
              variant={coupon.used ? "secondary" : activeTab === 'expired' ? "destructive" : "default"}
            >
              {coupon.used ? 'Used' : activeTab === 'expired' ? 'Expired' : coupon.discount}
            </Badge>
          </div>
          
          <p className="text-gray-600 mb-2">{coupon.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              Expires: {coupon.expires}
            </span>
            <span className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {coupon.category}
            </span>
            <span>Min. order: {coupon.minOrder}</span>
            {coupon.usedDate && (
              <span>Used on: {coupon.usedDate}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-2 lg:ml-4">
          <div className="bg-gray-100 px-4 py-2 rounded-lg border-2 border-dashed border-gray-300">
            <code className="font-mono font-bold text-lg">{coupon.code}</code>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyCouponCode(coupon.code)}
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
            {!coupon.used && activeTab === 'active' && (
              <Button
                size="sm"
                onClick={() => applyCoupon(coupon.code)}
              >
                Apply to Cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Coupons</h1>
          <p className="text-gray-600 mt-1">Manage and use your discount coupons</p>
        </div>
      </div>

      {/* Add Coupon */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Enter coupon code..."
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </div>
          <Button onClick={addCoupon}>
            <Gift className="h-4 w-4 mr-2" />
            Add Coupon
          </Button>
        </div>
      </Card>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {['active', 'used', 'expired'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} 
            {tab === 'active' && ` (${coupons.active.length})`}
            {tab === 'used' && ` (${coupons.used.length})`}
            {tab === 'expired' && ` (${coupons.expired.length})`}
          </button>
        ))}
      </div>

      {/* Coupons List */}
      <div className="space-y-4">
        {coupons[activeTab as keyof typeof coupons].map(renderCouponCard)}
      </div>

      {coupons[activeTab as keyof typeof coupons].length === 0 && (
        <Card className="p-12 text-center">
          <Gift className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No {activeTab} coupons
          </h3>
          <p className="text-gray-600">
            {activeTab === 'active' && 'You don\'t have any active coupons right now.'}
            {activeTab === 'used' && 'You haven\'t used any coupons yet.'}
            {activeTab === 'expired' && 'No expired coupons to show.'}
          </p>
        </Card>
      )}
    </div>
  );
};

export default UserCouponsPage;
