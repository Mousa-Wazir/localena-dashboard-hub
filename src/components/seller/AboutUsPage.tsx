
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Heart, Award } from 'lucide-react';

const AboutUsPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We are committed to providing only the highest quality products from trusted local artisans and sellers.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Supporting local businesses and artisans is at the heart of everything we do.'
    },
    {
      icon: Target,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority. We strive to exceed expectations with every purchase.'
    },
    {
      icon: Award,
      title: 'Trust & Reliability',
      description: 'Building lasting relationships through transparency, reliability, and exceptional service.'
    }
  ];

  const team = [
    {
      name: 'Sarah Ahmed',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b577?w=300&h=300&fit=crop&crop=face',
      description: 'Passionate about connecting local artisans with customers worldwide.'
    },
    {
      name: 'Hassan Ali',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Ensuring smooth operations and exceptional customer experience.'
    },
    {
      name: 'Fatima Khan',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Curating the finest products and maintaining quality standards.'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">About Localena</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecting communities through quality products and authentic craftsmanship since 2020.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-8 text-center">
            <Target className="h-12 w-12 mx-auto mb-4 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower local artisans and businesses by providing them with a platform to showcase their 
              unique products to a global audience, while offering customers authentic, high-quality items 
              that tell a story.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-4 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become the leading marketplace for authentic, locally-made products, fostering economic 
              growth in communities while preserving traditional craftsmanship and promoting sustainable 
              commerce.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Our Story */}
      <Card>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="prose max-w-4xl mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              Localena was born from a simple observation: talented artisans and small businesses in our 
              communities were creating beautiful, unique products but struggled to reach customers beyond 
              their immediate vicinity.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2020, we started as a small initiative to help local craftspeople showcase their 
              work online. What began with just 10 sellers has grown into a thriving marketplace featuring 
              hundreds of trusted sellers across multiple categories including furniture, home decor, 
              clothing, accessories, health & beauty products, and handicrafts.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Localena continues to bridge the gap between traditional craftsmanship and modern 
              commerce, ensuring that every purchase supports real people and their communities.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Our Values */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Icon className="h-10 w-10 mx-auto mb-4 text-gray-600" />
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Our Team */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <Card>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Trusted Sellers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">10,000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">50,000+</p>
              <p className="text-gray-600">Products Sold</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">25+</p>
              <p className="text-gray-600">Cities Served</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUsPage;
