
import React, { useState } from 'react';
import UserHeader from '@/components/layout/UserHeader';
import UserSidebar from '@/components/layout/UserSidebar';
import UserDashboardOverview from '@/components/user/UserDashboardOverview';
import UserOrdersPage from '@/components/user/UserOrdersPage';
import UserWishlistPage from '@/components/user/UserWishlistPage';
import UserReviewsPage from '@/components/user/UserReviewsPage';
import UserMessagesPage from '@/components/user/UserMessagesPage';
import UserCouponsPage from '@/components/user/UserCouponsPage';
import UserNotificationsPage from '@/components/user/UserNotificationsPage';
import UserSettingsPage from '@/components/user/UserSettingsPage';
import UserHelpSupportPage from '@/components/user/UserHelpSupportPage';
import UserProductsPage from '@/components/user/UserProductsPage';
import UserAboutUsPage from '@/components/user/UserAboutUsPage';
import UserContactUsPage from '@/components/user/UserContactUsPage';
import UserCartPage from '@/components/user/UserCartPage';

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    if (activeTab === 'Products') return <UserProductsPage />;
    if (activeTab === 'About Us') return <UserAboutUsPage />;
    if (activeTab === 'Contact Us') return <UserContactUsPage />;
    if (activeTab === 'Cart') return <UserCartPage />;

    // Dashboard section content
    switch (activeItem) {
      case 'dashboard':
        return <UserDashboardOverview />;
      case 'orders':
        return <UserOrdersPage />;
      case 'wishlist':
        return <UserWishlistPage />;
      case 'reviews':
        return <UserReviewsPage />;
      case 'messages':
        return <UserMessagesPage />;
      case 'coupons':
        return <UserCouponsPage />;
      case 'notifications':
        return <UserNotificationsPage />;
      case 'settings':
        return <UserSettingsPage />;
      case 'support':
        return <UserHelpSupportPage />;
      default:
        return <UserDashboardOverview />;
    }
  };

  const showSidebar = activeTab === 'Home';

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <UserHeader 
        onMenuToggle={toggleSidebar}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      <div className="flex flex-1 pt-16">
        {showSidebar && (
          <UserSidebar
            isOpen={isSidebarOpen}
            activeItem={activeItem}
            onItemChange={setActiveItem}
          />
        )}
        
        <main className={`flex-1 transition-all duration-300 ${
          showSidebar ? 'lg:ml-64' : ''
        }`}>
          <div className="p-4 lg:p-6">
            {renderContent()}
          </div>
        </main>
      </div>
      
      {/* Mobile overlay */}
      {isSidebarOpen && showSidebar && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default UserDashboard;
