
import React, { useState } from 'react';
import SellerHeader from '@/components/layout/SellerHeader';
import SellerSidebar from '@/components/layout/SellerSidebar';
import DashboardOverview from '@/components/seller/DashboardOverview';
import MyProducts from '@/components/seller/MyProducts';
import OrdersManagement from '@/components/seller/OrdersManagement';
import CustomersPage from '@/components/seller/CustomersPage';
import MessagesPage from '@/components/seller/MessagesPage';
import EarningsPage from '@/components/seller/EarningsPage';
import SalesReportPage from '@/components/seller/SalesReportPage';
import PromotionsPage from '@/components/seller/PromotionsPage';
import CouponsPage from '@/components/seller/CouponsPage';
import ReviewsRatingsPage from '@/components/seller/ReviewsRatingsPage';
import StockAlertsPage from '@/components/seller/StockAlertsPage';
import RentalProductsPage from '@/components/seller/RentalProductsPage';
import RentalManagementPage from '@/components/seller/RentalManagementPage';
import SupportHelpPage from '@/components/seller/SupportHelpPage';
import SellerSettingsPage from '@/components/seller/SellerSettingsPage';
import ProductsPage from '@/components/seller/ProductsPage';
import AboutUsPage from '@/components/seller/AboutUsPage';
import ContactUsPage from '@/components/seller/ContactUsPage';
import CartPage from '@/components/seller/CartPage';

const SellerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuItemChange = (item: string) => {
    setActiveMenuItem(item);
    setSidebarOpen(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Reset sidebar to dashboard when switching header tabs
    if (tab !== 'Home') {
      setActiveMenuItem('dashboard');
    }
  };

  const renderContent = () => {
    // Header tab content takes priority
    if (activeTab === 'Products') {
      return <ProductsPage />;
    }
    if (activeTab === 'About Us') {
      return <AboutUsPage />;
    }
    if (activeTab === 'Contact Us') {
      return <ContactUsPage />;
    }
    if (activeTab === 'Cart') {
      return <CartPage />;
    }

    // Sidebar content (when Home tab is active)
    switch (activeMenuItem) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'my-products':
        return <MyProducts />;
      case 'orders':
        return <OrdersManagement />;
      case 'customers':
        return <CustomersPage />;
      case 'messages':
        return <MessagesPage />;
      case 'earnings':
        return <EarningsPage />;
      case 'sales-report':
        return <SalesReportPage />;
      case 'promotions':
        return <PromotionsPage />;
      case 'coupons':
        return <CouponsPage />;
      case 'reviews-ratings':
        return <ReviewsRatingsPage />;
      case 'stock-alerts':
        return <StockAlertsPage />;
      case 'rental-products':
        return <RentalProductsPage />;
      case 'rental-management':
        return <RentalManagementPage />;
      case 'support-help':
        return <SupportHelpPage />;
      case 'settings':
        return <SellerSettingsPage />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SellerHeader
        onMenuToggle={toggleSidebar}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      
      <div className="flex">
        <SellerSidebar
          isOpen={sidebarOpen}
          activeItem={activeMenuItem}
          onItemChange={handleMenuItemChange}
          isVisible={activeTab === 'Home'}
        />
        
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <main className={`flex-1 pt-16 p-6 transition-all duration-300 ${
          activeTab === 'Home' ? 'lg:ml-64' : ''
        }`}>
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
