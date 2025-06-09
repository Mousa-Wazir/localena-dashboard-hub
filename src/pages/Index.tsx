
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import OrdersPage from '@/components/dashboard/OrdersPage';
import WishlistPage from '@/components/dashboard/WishlistPage';
import ReviewsPage from '@/components/dashboard/ReviewsPage';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuItemChange = (item: string) => {
    setActiveMenuItem(item);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'orders':
        return <OrdersPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'messages':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Messages</h2>
            <p className="text-gray-600">Message center coming soon...</p>
          </div>
        );
      case 'coupons':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Coupons</h2>
            <p className="text-gray-600">Coupon management coming soon...</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <p className="text-gray-600">Notification center coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p className="text-gray-600">Settings panel coming soon...</p>
          </div>
        );
      case 'support':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Help & Support</h2>
            <p className="text-gray-600">Support center coming soon...</p>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onMenuToggle={toggleSidebar}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          activeItem={activeMenuItem}
          onItemChange={handleMenuItemChange}
        />
        
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-16 p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
