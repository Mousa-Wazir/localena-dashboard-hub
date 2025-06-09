
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, Package, TrendingUp, Gift, Trash2, Check } from 'lucide-react';

const UserNotificationsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order #12345 has been shipped and is on its way!',
      timestamp: '2 hours ago',
      read: false,
      icon: Package
    },
    {
      id: 2,
      type: 'promotion',
      title: 'New Sale: 30% Off Home Decor',
      message: 'Limited time offer on all home decor items. Don\'t miss out!',
      timestamp: '5 hours ago',
      read: false,
      icon: TrendingUp
    },
    {
      id: 3,
      type: 'system',
      title: 'Welcome to Localena!',
      message: 'Thanks for joining us. Explore our marketplace and find amazing products.',
      timestamp: '1 day ago',
      read: true,
      icon: Bell
    },
    {
      id: 4,
      type: 'order',
      title: 'Order Delivered',
      message: 'Your order #12344 has been successfully delivered.',
      timestamp: '2 days ago',
      read: true,
      icon: Package
    },
    {
      id: 5,
      type: 'promotion',
      title: 'Exclusive Coupon for You!',
      message: 'Use code SAVE20 to get 20% off your next purchase.',
      timestamp: '3 days ago',
      read: false,
      icon: Gift
    },
    {
      id: 6,
      type: 'system',
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated.',
      timestamp: '1 week ago',
      read: true,
      icon: Bell
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const deleteAllRead = () => {
    setNotifications(notifications.filter(notif => !notif.read));
  };

  const filteredNotifications = notifications.filter(notif => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notif.read;
    return notif.type === activeTab;
  });

  const unreadCount = notifications.filter(notif => !notif.read).length;

  const getNotificationBadge = (type: string) => {
    switch (type) {
      case 'order':
        return <Badge className="bg-blue-100 text-blue-800">Order</Badge>;
      case 'promotion':
        return <Badge className="bg-green-100 text-green-800">Promotion</Badge>;
      case 'system':
        return <Badge className="bg-gray-100 text-gray-800">System</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-1">
            {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
          </p>
        </div>
        <div className="flex gap-2 mt-4 lg:mt-0">
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <Check className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
          )}
          <Button variant="outline" onClick={deleteAllRead}>
            <Trash2 className="h-4 w-4 mr-2" />
            Clear Read
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 bg-gray-100 p-1 rounded-lg">
        {['all', 'unread', 'order', 'promotion', 'system'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {tab === 'unread' && unreadCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => {
          const IconComponent = notification.icon;
          return (
            <Card
              key={notification.id}
              className={`p-4 transition-all hover:shadow-md ${
                !notification.read ? 'border-l-4 border-l-blue-500 bg-blue-50/30' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-full ${
                  !notification.read ? 'bg-blue-100' : 'bg-gray-100'
                }`}>
                  <IconComponent className={`h-5 w-5 ${
                    !notification.read ? 'text-blue-600' : 'text-gray-600'
                  }`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-medium ${
                      !notification.read ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {notification.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {getNotificationBadge(notification.type)}
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">
                    {notification.message}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {notification.timestamp}
                    </span>
                    
                    <div className="flex space-x-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {filteredNotifications.length === 0 && (
        <Card className="p-12 text-center">
          <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No notifications
          </h3>
          <p className="text-gray-600">
            {activeTab === 'all' && 'You don\'t have any notifications yet.'}
            {activeTab === 'unread' && 'All notifications have been read.'}
            {activeTab !== 'all' && activeTab !== 'unread' && `No ${activeTab} notifications found.`}
          </p>
        </Card>
      )}
    </div>
  );
};

export default UserNotificationsPage;
