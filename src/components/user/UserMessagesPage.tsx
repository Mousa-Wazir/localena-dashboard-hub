
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, Paperclip, Search } from 'lucide-react';

const UserMessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Furniture Store Support',
      lastMessage: 'Your order has been shipped and will arrive soon.',
      timestamp: '2 hours ago',
      unread: 2,
      avatar: 'FS'
    },
    {
      id: 2,
      name: 'Customer Service',
      lastMessage: 'Thank you for your feedback. We appreciate it!',
      timestamp: '1 day ago',
      unread: 0,
      avatar: 'CS'
    },
    {
      id: 3,
      name: 'Home Decor Boutique',
      lastMessage: 'We have new arrivals that match your preferences.',
      timestamp: '3 days ago',
      unread: 1,
      avatar: 'HD'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Furniture Store Support',
      content: 'Hello! Thank you for your order. We are processing it now.',
      timestamp: '10:30 AM',
      isUser: false
    },
    {
      id: 2,
      sender: 'You',
      content: 'Great! When can I expect delivery?',
      timestamp: '10:32 AM',
      isUser: true
    },
    {
      id: 3,
      sender: 'Furniture Store Support',
      content: 'Your order has been shipped and will arrive within 2-3 business days. Tracking number: FS123456',
      timestamp: '11:15 AM',
      isUser: false
    },
    {
      id: 4,
      sender: 'You',
      content: 'Perfect! Thank you for the update.',
      timestamp: '11:16 AM',
      isUser: true
    },
    {
      id: 5,
      sender: 'Furniture Store Support',
      content: 'Your order has been shipped and will arrive soon.',
      timestamp: '2:30 PM',
      isUser: false
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-1">Chat with sellers and customer support</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1 p-4">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2 overflow-y-auto h-[500px]">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedChat(conversation.id)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedChat === conversation.id
                    ? 'bg-blue-50 border border-blue-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-600">
                      {conversation.avatar}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900 truncate">
                        {conversation.name}
                      </h3>
                      {conversation.unread > 0 && (
                        <Badge className="bg-blue-500 text-white text-xs">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                    <p className="text-xs text-gray-400">
                      {conversation.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">FS</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Furniture Store Support</h3>
                <p className="text-sm text-green-600">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isUser
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isUser ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1"
              />
              <Button onClick={sendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserMessagesPage;
