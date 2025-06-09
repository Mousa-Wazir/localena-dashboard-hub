
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ThumbsUp, MessageSquare, Flag } from 'lucide-react';

const ReviewsRatingsPage = () => {
  const reviews = [
    {
      id: 1,
      customer: 'Ahmed Ali',
      product: 'Handcrafted Wooden Table',
      rating: 5,
      comment: 'Excellent quality and craftsmanship. The table exceeded my expectations!',
      date: '2024-01-15',
      helpful: 12,
      verified: true,
      responded: false
    },
    {
      id: 2,
      customer: 'Sara Khan',
      product: 'Cotton Summer Dress',
      rating: 4,
      comment: 'Nice fabric and comfortable fit. Delivery was quick too.',
      date: '2024-01-14',
      helpful: 8,
      verified: true,
      responded: true
    },
    {
      id: 3,
      customer: 'Hassan Ahmed',
      product: 'Decorative Wall Art',
      rating: 5,
      comment: 'Beautiful piece that really enhanced our living room decor. Highly recommended!',
      date: '2024-01-13',
      helpful: 15,
      verified: true,
      responded: false
    },
    {
      id: 4,
      customer: 'Fatima Sheikh',
      product: 'Natural Essential Oil',
      rating: 3,
      comment: 'Good quality but the scent was not as strong as expected.',
      date: '2024-01-12',
      helpful: 3,
      verified: true,
      responded: true
    }
  ];

  const ratingStats = {
    average: 4.3,
    total: reviews.length,
    distribution: {
      5: 15,
      4: 8,
      3: 3,
      2: 1,
      1: 0
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Reviews & Ratings</h1>
        <Button variant="outline">Export Reviews</Button>
      </div>

      {/* Rating Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <p className="text-3xl font-bold text-gray-900">{ratingStats.average}</p>
              <div className="flex justify-center my-2">
                {renderStars(Math.round(ratingStats.average))}
              </div>
              <p className="text-gray-600">{ratingStats.total} reviews</p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Rating Distribution</h3>
            <div className="space-y-2">
              {Object.entries(ratingStats.distribution).reverse().map(([rating, count]) => (
                <div key={rating} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm">{rating}</span>
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${(count / ratingStats.total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8">{count}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reviews List */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{review.customer}</h4>
                      {review.verified && (
                        <Badge variant="outline" className="text-xs">Verified Purchase</Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{review.product}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-3">{review.comment}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{review.helpful} helpful</span>
                    </div>
                    {review.responded && (
                      <Badge variant="outline" className="text-xs">Responded</Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {review.responded ? 'View Response' : 'Respond'}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Show response if exists */}
                {review.responded && review.id === 2 && (
                  <div className="mt-4 ml-6 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-900">Your Response:</span>
                      <span className="text-xs text-gray-500">2024-01-14</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Thank you so much for your review! We're glad you enjoyed the dress and our quick delivery service.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Review Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Mentioned Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Quality</span>
                <Badge variant="outline">12 mentions</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Fast delivery</span>
                <Badge variant="outline">8 mentions</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Beautiful</span>
                <Badge variant="outline">6 mentions</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Recommended</span>
                <Badge variant="outline">5 mentions</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">
                  {Math.round((reviews.filter(r => r.responded).length / reviews.length) * 100)}%
                </p>
                <p className="text-gray-600">Response rate</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Responded to reviews</span>
                  <span>{reviews.filter(r => r.responded).length}/{reviews.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(reviews.filter(r => r.responded).length / reviews.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReviewsRatingsPage;
