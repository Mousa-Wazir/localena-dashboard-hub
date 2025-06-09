
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Upload,
  Send
} from 'lucide-react';

const UserContactUsPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['support@localena.com', 'business@localena.com'],
      description: 'Get in touch via email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Speak with our support team'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Business Street', 'New York, NY 10001'],
      description: 'Our main office location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'Sat-Sun: 10:00 AM - 4:00 PM'],
      description: 'When we\'re available'
    }
  ];

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Customer Support' },
    { value: 'business', label: 'Business Partnership' },
    { value: 'technical', label: 'Technical Issues' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Contact form submitted:', contactForm);
      setIsSubmitting(false);
      // Reset form
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: ''
      });
      // Show success message (in real app, use toast)
      alert('Message sent successfully! We\'ll get back to you soon.');
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or need help? We're here for you. 
          Reach out to us through any of the channels below.
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon;
          return (
            <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconComponent className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{info.description}</p>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm font-medium text-gray-900">
                    {detail}
                  </p>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <span>Start Live Chat</span>
            <Badge className="bg-green-100 text-green-800">Online Now</Badge>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <Phone className="h-6 w-6 text-green-600" />
            <span>Schedule a Call</span>
            <span className="text-xs text-gray-500">Book a time that works for you</span>
          </Button>
          
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
            <Mail className="h-6 w-6 text-purple-600" />
            <span>Email Support</span>
            <span className="text-xs text-gray-500">Response within 24 hours</span>
          </Button>
        </div>
      </Card>

      {/* Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <Input
                  required
                  value={contactForm.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                value={contactForm.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a department</option>
                {departments.map((dept) => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <Input
                required
                value={contactForm.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="Brief description of your inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <Textarea
                required
                rows={5}
                value={contactForm.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Please provide details about your inquiry, question, or feedback..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments (optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-gray-400 transition-colors">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">
                  Drop files here or click to upload
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Max file size: 10MB (PDF, JPG, PNG)
                </p>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Card>

        {/* FAQ Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-sm text-gray-600">
                We typically respond to emails within 24 hours during business days. 
                Live chat and phone support are available for immediate assistance.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">
                Can I schedule a call with your team?
              </h3>
              <p className="text-sm text-gray-600">
                Yes! For complex business inquiries or technical discussions, 
                we offer scheduled calls. Use our booking system or mention it in your message.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="font-medium text-gray-900 mb-2">
                Do you provide support in multiple languages?
              </h3>
              <p className="text-sm text-gray-600">
                Currently, we provide support in English and Urdu. 
                We're working on expanding our language support.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">
                What information should I include in my message?
              </h3>
              <p className="text-sm text-gray-600">
                Please include as much relevant detail as possible: your account information, 
                order numbers (if applicable), and specific questions or issues you're experiencing.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Map Section (Placeholder) */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h2>
        <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Interactive map would be displayed here</p>
            <p className="text-sm text-gray-500">123 Business Street, New York, NY 10001</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserContactUsPage;
