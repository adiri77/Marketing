import React from 'react';
import type { Testimonial } from '../../types';
import '../../styles/globals.css';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp Inc.',
    content: 'Marketing Pro transformed our entire marketing strategy. We saw a 250% increase in qualified leads within the first quarter.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    content: 'The AI-powered analytics gave us insights we never had before. Our ROI improved by 180% in just 6 months.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Growth Manager',
    company: 'E-commerce Plus',
    content: 'The automation features saved us 20 hours per week. Now we can focus on strategy instead of manual tasks.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-secondary-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Trusted by 10,000+ Businesses
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            See what our customers are saying about their success with Marketing Pro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="testimonial-card animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-secondary-700 italic">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Join thousands of satisfied customers
            </h3>
            <p className="text-secondary-600 mb-6">
              Start your free trial today and see why businesses choose Marketing Pro 
              for their growth needs.
            </p>
            <button className="btn btn-primary btn-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
