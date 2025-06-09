
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { User, MapPin, Lock, Bell, Globe, Shield, Trash2 } from 'lucide-react';

const UserSettingsPage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [profile, setProfile] = useState({
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15'
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      name: 'Sarah Johnson',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      name: 'Sarah Johnson',
      address: '456 Business Ave, Suite 200',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      isDefault: false
    }
  ]);

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newProducts: false,
    priceAlerts: true,
    newsletter: true
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: '30'
  });

  const sections = [
    { id: 'profile', label: 'Profile Information', icon: User },
    { id: 'addresses', label: 'Address Book', icon: MapPin },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'preferences', label: 'Preferences', icon: Globe },
    { id: 'account', label: 'Account Management', icon: Shield }
  ];

  const renderProfileSection = () => (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={profile.firstName}
            onChange={(e) => setProfile({...profile, firstName: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={profile.lastName}
            onChange={(e) => setProfile({...profile, lastName: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={profile.phone}
            onChange={(e) => setProfile({...profile, phone: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={profile.dateOfBirth}
            onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
          />
        </div>
      </div>
      <Button className="mt-6">Save Changes</Button>
    </Card>
  );

  const renderAddressesSection = () => (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Address Book</h2>
        <Button>Add New Address</Button>
      </div>
      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-900">{address.type}</h3>
                {address.isDefault && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Default
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            </div>
            <p className="text-gray-600">
              {address.name}<br />
              {address.address}<br />
              {address.city}, {address.state} {address.zipCode}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );

  const renderSecuritySection = () => (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Password</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </div>
          <Button className="mt-4">Change Password</Button>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <Switch
              checked={security.twoFactorAuth}
              onCheckedChange={(checked) => setSecurity({...security, twoFactorAuth: checked})}
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-medium text-gray-900 mb-4">Login Alerts</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Get notified when someone logs into your account</p>
            </div>
            <Switch
              checked={security.loginAlerts}
              onCheckedChange={(checked) => setSecurity({...security, loginAlerts: checked})}
            />
          </div>
        </div>
      </div>
    </Card>
  );

  const renderNotificationsSection = () => (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
      <div className="space-y-4">
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900">
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </h3>
              <p className="text-sm text-gray-600">
                {key === 'orderUpdates' && 'Receive updates about your orders'}
                {key === 'promotions' && 'Get notified about sales and special offers'}
                {key === 'newProducts' && 'Be the first to know about new products'}
                {key === 'priceAlerts' && 'Get alerts when prices drop on your wishlist'}
                {key === 'newsletter' && 'Receive our weekly newsletter'}
              </p>
            </div>
            <Switch
              checked={value}
              onCheckedChange={(checked) => setNotifications({...notifications, [key]: checked})}
            />
          </div>
        ))}
      </div>
      <Button className="mt-6">Save Preferences</Button>
    </Card>
  );

  const renderPreferencesSection = () => (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Preferences</h2>
      <div className="space-y-6">
        <div>
          <Label htmlFor="language">Language</Label>
          <select
            id="language"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">English</option>
            <option value="ur">Urdu</option>
            <option value="ar">Arabic</option>
          </select>
        </div>

        <div>
          <Label htmlFor="currency">Currency</Label>
          <select
            id="currency"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="usd">USD ($)</option>
            <option value="eur">EUR (€)</option>
            <option value="pkr">PKR (₨)</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">High Contrast Mode</h3>
            <p className="text-sm text-gray-600">Improve visibility with high contrast colors</p>
          </div>
          <Switch />
        </div>
      </div>
      <Button className="mt-6">Save Preferences</Button>
    </Card>
  );

  const renderAccountSection = () => (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Management</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Export Data</h3>
          <p className="text-gray-600 mb-4">Download a copy of your account data</p>
          <Button variant="outline">Download My Data</Button>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-medium text-gray-900 mb-2 text-red-600">Danger Zone</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-medium text-red-800 mb-2">Deactivate Account</h4>
            <p className="text-red-600 mb-4">
              Temporarily disable your account. You can reactivate it later.
            </p>
            <Button variant="outline" className="border-red-300 text-red-600">
              Deactivate Account
            </Button>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
          <p className="text-red-600 mb-4">
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          <Button variant="destructive">
            Delete Account
          </Button>
        </div>
      </div>
    </Card>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileSection();
      case 'addresses':
        return renderAddressesSection();
      case 'security':
        return renderSecuritySection();
      case 'notifications':
        return renderNotificationsSection();
      case 'preferences':
        return renderPreferencesSection();
      case 'account':
        return renderAccountSection();
      default:
        return renderProfileSection();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <Card className="lg:col-span-1 p-4">
          <nav className="space-y-1">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </nav>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
