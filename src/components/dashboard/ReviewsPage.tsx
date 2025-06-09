
import React, { useState } from 'react';
import { Star, Edit, Trash2, Plus, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

const ReviewsPage: React.FC = () => {
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [rating, setRating] = useState(0);

  const reviews = [
    {
      id: 1,
      product: 'Wireless Headphones',
      productImage: '🎧',
      rating: 5,
      date: '2024-06-05',
      review: 'Excellent sound quality and comfortable fit. Battery life is amazing, lasts for days!',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      product: 'Smart Watch',
      productImage: '⌚',
      rating: 4,
      date: '2024-06-01',
      review: 'Great features and build quality. The fitness tracking is very accurate. Only wish the battery lasted longer.',
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      product: 'Laptop Stand',
      productImage: '💻',
      rating: 5,
      date: '2024-05-28',
      review: 'Perfect for my work setup. Sturdy and adjustable. Highly recommended!',
      verified: true,
      helpful: 5
    }
  ];

  const renderStars = (rating: number, size: string = 'h-4 w-4', interactive: boolean = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={interactive ? () => setRating(star) : undefined}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Reviews & Ratings</h1>
        <Button onClick={() => setIsWritingReview(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Write Review
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-gray-900">8</div>
            <p className="text-sm text-gray-600">Total Reviews</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <div className="text-3xl font-bold text-gray-900">4.6</div>
              {renderStars(5)}
            </div>
            <p className="text-sm text-gray-600">Average Rating</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-gray-900">25</div>
            <p className="text-sm text-gray-600">Helpful Votes</p>
          </CardContent>
        </Card>
      </div>

      {/* Write New Review Modal */}
      {isWritingReview && (
        <Card>
          <CardHeader>
            <CardTitle>Write a New Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Product</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option>Select a product...</option>
                  <option>Gaming Keyboard</option>
                  <option>Office Chair</option>
                  <option>Table Lamp</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                {renderStars(rating, 'h-6 w-6', true)}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Review</label>
                <Textarea 
                  placeholder="Share your experience with this product..."
                  rows={4}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Add Photos (Optional)</label>
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photos
                </Button>
              </div>
              
              <div className="flex space-x-3">
                <Button>Submit Review</Button>
                <Button variant="outline" onClick={() => setIsWritingReview(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{review.productImage}</div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-lg">{review.product}</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-600">{review.date}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-3">{review.review}</p>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{review.helpful} people found this helpful</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
