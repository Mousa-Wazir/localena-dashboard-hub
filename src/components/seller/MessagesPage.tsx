
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, Paperclip, Search } from 'lucide-react';

const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      customer: 'Ahmed Ali',
      lastMessage: 'When will my order be shipped?',
      timestamp: '2 hours ago',
      unread: 2,
      status: 'active'
    },
    {
      id: 2,
      customer: 'Sara Khan',
      lastMessage: 'Thank you for the quick delivery!',
      timestamp: '1 day ago',
      unread: 0,
      status: 'resolved'
    },
    {
      id: 3,
      customer: 'Hassan Ahmed',
      lastMessage: 'Can I get a custom size for this table?',
      timestamp: '2 days ago',
      unread: 1,
      status: 'pending'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'customer',
      content: 'Hi, I placed an order yesterday for the wooden table. When will it be shipped?',
      timestamp: '10:30 AM'
    },
    {
      id: 2,
      sender: 'seller',
      content: 'Hello Ahmed! Thank you for your order. Your table will be shipped within 2-3 business days. You\'ll receive a tracking number once it\'s dispatched.',
      timestamp: '10:45 AM'
    },
    {
      id: 3,
      sender: 'customer',
      content: 'Great! Can you also tell me about the care instructions?',
      timestamp: '11:00 AM'
    },
    {
      id: 4,
      sender: 'seller',
      content: 'Absolutely! I\'ll include a care instruction card with your order. For daily maintenance, just use a dry cloth to dust it.',
      timestamp: '11:15 AM'
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input placeholder="Search conversations..." className="pl-10" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Conversations</span>
              <Badge variant="outline">
                {conversations.filter(c => c.unread > 0).length} unread
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full p-4 text-left hover:bg-gray-50 border-b ${
                    selectedConversation === conversation.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <p className="font-medium text-gray-900">{conversation.customer}</p>
                        {conversation.unread > 0 && (
                          <Badge className="bg-red-500 text-white text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {conversation.lastMessage}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{conversation.timestamp}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-full flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>Ahmed Ali</span>
                <Badge variant="outline">Active</Badge>
              </CardTitle>
            </CardHeader>
            
            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'seller' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'seller'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'seller' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
