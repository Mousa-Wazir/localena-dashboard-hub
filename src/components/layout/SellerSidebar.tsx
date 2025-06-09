
import React from 'react';
import { 
  Home, 
  Package, 
  ShoppingBag, 
  Users, 
  MessageSquare, 
  DollarSign, 
  BarChart3, 
  Megaphone, 
  Gift, 
  Star, 
  AlertTriangle,
  Calendar,
  Settings,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SellerSidebarProps {
  isOpen: boolean;
  activeItem: string;
  onItemChange: (item: string) => void;
  isVisible: boolean;
}

const SellerSidebar: React.FC<SellerSidebarProps> = ({ 
  isOpen, 
  activeItem, 
  onItemChange, 
  isVisible 
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'my-products', label: 'My Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'sales-report', label: 'Sales Report', icon: BarChart3 },
    { id: 'promotions', label: 'Promotions', icon: Megaphone },
    { id: 'coupons', label: 'Coupons', icon: Gift },
    { id: 'reviews-ratings', label: 'Reviews & Ratings', icon: Star },
    { id: 'stock-alerts', label: 'Stock Alerts', icon: AlertTriangle },
    { id: 'rental-products', label: 'Rental Products', icon: Calendar },
    { id: 'rental-management', label: 'Rental Management', icon: Calendar },
    { id: 'support-help', label: 'Support & Help', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (!isVisible) return null;

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-sm transition-transform duration-300 z-40",
        "lg:translate-x-0 lg:relative lg:top-0 lg:h-screen lg:pt-16",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onItemChange(item.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className={cn(
                  "h-4 w-4 transition-transform",
                  isActive ? "rotate-90" : ""
                )} />
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default SellerSidebar;
