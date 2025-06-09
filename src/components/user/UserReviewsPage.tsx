
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star, Edit, Trash2, Camera } from 'lucide-react';

const UserReviewsPage = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      productName: 'Modern Sofa Set',
      productImage: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=100&h=100&fit=crop',
      rating: 5,
      title: 'Excellent quality and comfort!',
      comment: 'This sofa exceeded my expectations. The quality is outstanding and it\'s very comfortable. Perfect for my living room.',
      date: '2024-01-15',
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      productName: 'Decorative Plant Set',
      productImage: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=100&h=100&fit=crop',
      rating: 4,
      title: 'Beautiful plants, great packaging',
      comment: 'The plants arrived in perfect condition. They add a lovely touch to my home decor.',
      date: '2024-01-10',
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      productName: 'Cotton Summer Dress',
      productImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop',
      rating: 3,
      title: 'Good dress but sizing runs small',
      comment: 'The dress is nice but I had to return it for a larger size. The material is good quality.',
      date: '2024-01-05',
      helpful: 5,
      verified: true
    }
  ]);

  const [editingReview, setEditingReview] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [editRating, setEditRating] = useState(5);

  const renderStars = (rating: number, editable = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => editable && onRatingChange && onRatingChange(star)}
            className={`${editable ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <Star
              className={`h-4 w-4 ${
                star <= rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  const startEditing = (review: any) => {
    setEditingReview(review.id);
    setEditText(review.comment);
    setEditRating(review.rating);
  };

  const cancelEditing = () => {
    setEditingReview(null);
    setEditText('');
    setEditRating(5);
  };

  const saveEdit = (reviewId: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, comment: editText, rating: editRating }
        : review
    ));
    cancelEditing();
  };

  const deleteReview = (reviewId: number) => {
    setReviews(reviews.filter(review => review.id !== reviewId));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Reviews</h1>
          <p className="text-gray-600 mt-1">{reviews.length} reviews written</p>
        </div>
        <Button>
          <Camera className="h-4 w-4 mr-2" />
          Write New Review
        </Button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              {/* Product Info */}
              <div className="flex items-center space-x-4 lg:w-1/3">
                <img
                  src={review.productImage}
                  alt={review.productName}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.productName}</h3>
                  <p className="text-sm text-gray-600">Reviewed on {review.date}</p>
                  {review.verified && (
                    <Badge variant="outline" className="mt-1">
                      Verified Purchase
                    </Badge>
                  )}
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1">
                {editingReview === review.id ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rating
                      </label>
                      {renderStars(editRating, true, setEditRating)}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Review
                      </label>
                      <Textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        rows={4}
                        className="w-full"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => saveEdit(review.id)}>
                        Save Changes
                      </Button>
                      <Button variant="outline" size="sm" onClick={cancelEditing}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {renderStars(review.rating)}
                        <h4 className="font-medium text-gray-900">{review.title}</h4>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => startEditing(review)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteReview(review.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{review.comment}</p>
                    <p className="text-sm text-gray-500">
                      {review.helpful} people found this helpful
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {reviews.length === 0 && (
        <Card className="p-12 text-center">
          <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
          <p className="text-gray-600 mb-4">Share your experience with products you've purchased</p>
          <Button>
            Write Your First Review
          </Button>
        </Card>
      )}
    </div>
  );
};

export default UserReviewsPage;
