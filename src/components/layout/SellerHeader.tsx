
import React from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SellerHeaderProps {
  onMenuToggle: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SellerHeader: React.FC<SellerHeaderProps> = ({ onMenuToggle, activeTab, onTabChange }) => {
  const tabs = ['Home', 'Products', 'About Us', 'Contact Us', 'Cart'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Localena</span>
            <span className="text-sm text-gray-500 hidden sm:inline">Seller</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-3 py-2 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'Cart' && (
                <div className="flex items-center space-x-1">
                  <ShoppingCart className="h-4 w-4" />
                  <span>{tab}</span>
                </div>
              )}
              {tab !== 'Cart' && tab}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            <User className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="hidden sm:inline-flex"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SellerHeader;
