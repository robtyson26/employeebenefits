import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "John Smith",
    company: "Tech Innovators LLC",
    content: "BenefitsPlus helped us reduce our healthcare costs by 23% while improving coverage for our employees.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    company: "Growth Dynamics",
    content: "Their data-driven approach to benefits optimization has been a game-changer for our organization.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Pacific Solutions",
    content: "The transparency in healthcare costs has helped us make better decisions for our team.",
    rating: 5
  }
];

export function SocialProof() {
  return (
    <div className="bg-gray-50 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{review.content}"</p>
              <div className="font-semibold">{review.name}</div>
              <div className="text-sm text-gray-500">{review.company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}