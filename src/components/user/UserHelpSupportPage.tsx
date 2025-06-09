
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  MessageSquare, 
  FileText, 
  Search, 
  ChevronDown,
  ChevronRight,
  Upload
} from 'lucide-react';

const UserHelpSupportPage = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [supportForm, setSupportForm] = useState({
    subject: '',
    category: '',
    description: '',
    priority: 'medium'
  });

  const faqs = [
    {
      id: 1,
      question: 'How do I track my order?',
      answer: 'You can track your order by going to "My Orders" section in your dashboard. Click on the order you want to track and you\'ll see the tracking information with real-time updates.',
      category: 'Orders'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through encrypted connections.',
      category: 'Payment'
    },
    {
      id: 3,
      question: 'How can I return or exchange an item?',
      answer: 'Items can be returned within 30 days of delivery. Go to your order history, select the item you want to return, and follow the return process. Make sure the item is in original condition.',
      category: 'Returns'
    },
    {
      id: 4,
      question: 'How do I apply a coupon code?',
      answer: 'You can apply coupon codes during checkout or from your "Coupons" section in the dashboard. Simply enter the code and click "Apply" to see the discount reflected in your total.',
      category: 'Coupons'
    },
    {
      id: 5,
      question: 'How do I update my shipping address?',
      answer: 'Go to "Settings" > "Address Book" to add, edit, or delete shipping addresses. You can set a default address for faster checkout.',
      category: 'Account'
    },
    {
      id: 6,
      question: 'What should I do if I receive a damaged item?',
      answer: 'If you receive a damaged item, please contact our customer support immediately with photos of the damage. We\'ll arrange for a replacement or refund as appropriate.',
      category: 'Quality'
    }
  ];

  const supportTickets = [
    {
      id: 'TK-001',
      subject: 'Order not received',
      status: 'open',
      priority: 'high',
      created: '2024-01-15',
      updated: '2024-01-16'
    },
    {
      id: 'TK-002',
      subject: 'Coupon code not working',
      status: 'resolved',
      priority: 'medium',
      created: '2024-01-10',
      updated: '2024-01-12'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleSubmitTicket = () => {
    console.log('Submitting support ticket:', supportForm);
    // Reset form
    setSupportForm({
      subject: '',
      category: '',
      description: '',
      priority: 'medium'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-yellow-100 text-yellow-800">Open</Badge>;
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
      case 'closed':
        return <Badge className="bg-gray-100 text-gray-800">Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };

  const renderFaqSection = () => (
    <div className="space-y-6">
      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search frequently asked questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => (
          <Card key={faq.id} className="overflow-hidden">
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                    <Badge variant="outline">{faq.category}</Badge>
                  </div>
                </div>
                {expandedFaq === faq.id ? (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                )}
              </div>
            </button>
            
            {expandedFaq === faq.id && (
              <div className="px-4 pb-4 border-t border-gray-100">
                <p className="text-gray-600 pt-3">{faq.answer}</p>
              </div>
            )}
          </Card>
        ))}
      </div>

      {filteredFaqs.length === 0 && (
        <Card className="p-12 text-center">
          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No FAQs found</h3>
          <p className="text-gray-600">Try adjusting your search terms</p>
        </Card>
      )}
    </div>
  );

  const renderContactSection = () => (
    <Card className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Support</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Email Support</h3>
          <p className="text-gray-600 mb-1">support@localena.com</p>
          <p className="text-sm text-gray-500">Response within 24 hours</p>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Live Chat</h3>
          <p className="text-gray-600 mb-2">Available 9 AM - 6 PM EST</p>
          <Button size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Start Chat
          </Button>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-medium text-gray-900 mb-4">Submit a Support Ticket</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <Input
              value={supportForm.subject}
              onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
              placeholder="Brief description of your issue"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={supportForm.category}
              onChange={(e) => setSupportForm({...supportForm, category: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              <option value="orders">Orders</option>
              <option value="payment">Payment</option>
              <option value="returns">Returns & Refunds</option>
              <option value="technical">Technical Issues</option>
              <option value="account">Account</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            value={supportForm.priority}
            onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <Textarea
            value={supportForm.description}
            onChange={(e) => setSupportForm({...supportForm, description: e.target.value})}
            placeholder="Please provide detailed information about your issue..."
            rows={4}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attachments (optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Drop files here or click to upload</p>
            <p className="text-xs text-gray-500 mt-1">Max file size: 10MB</p>
          </div>
        </div>

        <Button onClick={handleSubmitTicket} className="w-full">
          Submit Support Ticket
        </Button>
      </div>
    </Card>
  );

  const renderTicketsSection = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">My Support Tickets</h2>
        <Button variant="outline">
          <FileText className="h-4 w-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {supportTickets.map((ticket) => (
        <Card key={ticket.id} className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <h3 className="font-medium text-gray-900">{ticket.id}</h3>
              {getStatusBadge(ticket.status)}
              {getPriorityBadge(ticket.priority)}
            </div>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
          
          <h4 className="font-medium text-gray-900 mb-2">{ticket.subject}</h4>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Created: {ticket.created}</span>
            <span>Updated: {ticket.updated}</span>
          </div>
        </Card>
      ))}

      {supportTickets.length === 0 && (
        <Card className="p-12 text-center">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No support tickets</h3>
          <p className="text-gray-600">You haven't submitted any support requests yet</p>
        </Card>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-600 mt-1">Get help and find answers to your questions</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'faq', label: 'FAQ', icon: HelpCircle },
          { id: 'contact', label: 'Contact Support', icon: MessageSquare },
          { id: 'tickets', label: 'My Tickets', icon: FileText }
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      {activeTab === 'faq' && renderFaqSection()}
      {activeTab === 'contact' && renderContactSection()}
      {activeTab === 'tickets' && renderTicketsSection()}
    </div>
  );
};

export default UserHelpSupportPage;
