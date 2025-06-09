
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, MessageSquare, Phone, Mail, Search, ChevronDown, ChevronRight } from 'lucide-react';

const SupportHelpPage = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: '',
    priority: '',
    description: ''
  });

  const supportTickets = [
    {
      id: 'SUP-001',
      subject: 'Payment not processed',
      category: 'Billing',
      priority: 'high',
      status: 'open',
      date: '2024-01-15',
      lastUpdate: '2 hours ago'
    },
    {
      id: 'SUP-002',
      subject: 'How to update product images?',
      category: 'Product Management',
      priority: 'medium',
      status: 'resolved',
      date: '2024-01-14',
      lastUpdate: '1 day ago'
    }
  ];

  const faqData = [
    {
      id: 1,
      question: 'How do I add new products to my store?',
      answer: 'To add new products, go to the "My Products" section in your dashboard and click the "Add New Product" button. Fill in all required information including product name, description, price, category, and upload high-quality images.'
    },
    {
      id: 2,
      question: 'When do I receive payments?',
      answer: 'Payments are processed weekly on Fridays. You will receive your earnings for all completed orders from the previous week, minus the platform commission. Payment is made directly to your registered bank account.'
    },
    {
      id: 3,
      question: 'How do I handle returns and refunds?',
      answer: 'When a customer requests a return, you will receive a notification. Review the return request and approve or reject it based on your return policy. For approved returns, the refund will be processed automatically once you confirm receipt of the returned item.'
    },
    {
      id: 4,
      question: 'Can I offer discounts and promotions?',
      answer: 'Yes! You can create various types of promotions including percentage discounts, fixed amount discounts, and coupon codes. Go to the "Promotions" or "Coupons" section to set up your offers.'
    },
    {
      id: 5,
      question: 'How do I manage my inventory?',
      answer: 'Use the stock management features to track your inventory. Set minimum stock thresholds to receive alerts when products are running low. You can update stock quantities from the "My Products" section.'
    }
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting ticket:', ticketForm);
    // Reset form
    setTicketForm({ subject: '', category: '', priority: '', description: '' });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Support & Help</h1>
        <div className="flex space-x-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Phone className="h-4 w-4 mr-2" />
            Call Support
          </Button>
          <Button variant="outline">
            <MessageSquare className="h-4 w-4 mr-2" />
            Live Chat
          </Button>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Phone className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
            <p className="text-gray-600 text-sm mb-3">+92 300 1234567</p>
            <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM PKT</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Mail className="h-8 w-8 mx-auto mb-3 text-green-600" />
            <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
            <p className="text-gray-600 text-sm mb-3">seller@localena.com</p>
            <p className="text-xs text-gray-500">Response within 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-3 text-purple-600" />
            <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-3">Real-time assistance</p>
            <p className="text-xs text-gray-500">Available 24/7</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Create Support Ticket */}
        <Card>
          <CardHeader>
            <CardTitle>Create Support Ticket</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTicketSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input
                  placeholder="Brief description of your issue"
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                    required
                  >
                    <option value="">Select category</option>
                    <option value="billing">Billing</option>
                    <option value="product">Product Management</option>
                    <option value="orders">Orders</option>
                    <option value="technical">Technical Issue</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={ticketForm.priority}
                    onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                    required
                  >
                    <option value="">Select priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <Textarea
                  placeholder="Please provide detailed information about your issue"
                  rows={4}
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Ticket
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* My Support Tickets */}
        <Card>
          <CardHeader>
            <CardTitle>My Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-gray-900">{ticket.subject}</h4>
                      <p className="text-sm text-gray-600">Ticket ID: {ticket.id}</p>
                    </div>
                    <div className="flex space-x-1">
                      <Badge className={getPriorityColor(ticket.priority)}>
                        {ticket.priority}
                      </Badge>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Category: {ticket.category}</p>
                    <p>Created: {ticket.date}</p>
                    <p>Last update: {ticket.lastUpdate}</p>
                  </div>
                  <div className="mt-3">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5" />
            <span>Frequently Asked Questions</span>
          </CardTitle>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search FAQs..." className="pl-10" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="border rounded-lg">
                <button
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronDown className="h-4 w-4 text-gray-600" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-gray-600" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-gray-700">Platform Status</span>
              <Badge className="bg-green-100 text-green-800">Operational</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-gray-700">Payment System</span>
              <Badge className="bg-green-100 text-green-800">Operational</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded">
              <span className="text-gray-700">API Services</span>
              <Badge className="bg-green-100 text-green-800">Operational</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SupportHelpPage;
