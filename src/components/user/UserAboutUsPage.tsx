
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Globe, Shield, Award, Truck } from 'lucide-react';

const UserAboutUsPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in supporting local businesses and fostering community connections.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Every transaction is protected with our secure payment system and buyer protection.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting local artisans and businesses with customers around the world.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'We work closely with sellers to ensure product quality and customer satisfaction.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Users' },
    { number: '5K+', label: 'Local Sellers' },
    { number: '100K+', label: 'Products Sold' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  const features = [
    {
      icon: Users,
      title: 'Support Local Businesses',
      description: 'Every purchase directly supports local entrepreneurs and artisans in your community.'
    },
    {
      icon: Truck,
      title: 'Fast & Reliable Shipping',
      description: 'Quick delivery with real-time tracking and secure packaging for all orders.'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Your financial information is protected with industry-leading security measures.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About Localena</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Connecting communities through local commerce. We're building a marketplace where 
          local businesses thrive and customers discover amazing products from their neighbors.
        </p>
      </div>

      {/* Stats */}
      <Card className="p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To empower local businesses by providing them with a platform to reach more customers 
            while helping shoppers discover unique, quality products from their community.
          </p>
          <p className="text-gray-600">
            We believe that strong local economies create stronger communities, and every purchase 
            made on Localena contributes to this vision.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-4">
            To become the world's leading platform for local commerce, where every community 
            has access to a thriving digital marketplace that celebrates local creativity and entrepreneurship.
          </p>
          <p className="text-gray-600">
            We envision a future where local businesses can compete globally while maintaining 
            their unique character and community connections.
          </p>
        </Card>
      </div>

      {/* Our Values */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Features */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Localena?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Story */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Localena was founded in 2020 with a simple idea: what if we could make it as easy 
            to shop from local businesses as it is to shop from big corporations? Our founders, 
            passionate about supporting their community, noticed that many amazing local products 
            and services were hard to discover.
          </p>
          <p className="text-gray-600 mb-4">
            Starting with just a handful of local artisans and small businesses, we've grown 
            into a platform that serves thousands of sellers and connects them with customers 
            who appreciate quality, uniqueness, and the personal touch that only local businesses can provide.
          </p>
          <p className="text-gray-600">
            Today, Localena is more than just a marketplace – it's a movement. Every transaction 
            helps build stronger communities, supports local entrepreneurs, and preserves the 
            unique character that makes each place special.
          </p>
        </div>
      </Card>

      {/* Team or Community */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join Our Community</h2>
        <div className="text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're a buyer looking for unique products or a seller wanting to grow your business, 
            you're part of the Localena family. Together, we're building something special.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge className="bg-blue-100 text-blue-800">Local Focus</Badge>
            <Badge className="bg-green-100 text-green-800">Quality Products</Badge>
            <Badge className="bg-purple-100 text-purple-800">Community Driven</Badge>
            <Badge className="bg-orange-100 text-orange-800">Secure Platform</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserAboutUsPage;
