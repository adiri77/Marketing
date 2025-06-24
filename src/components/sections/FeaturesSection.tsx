import React from 'react';
import Card from '../Card';
import type { Feature } from '../../types';
import '../../styles/globals.css';

const features: Feature[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics',
    description: 'Get deep insights into your marketing performance with our advanced AI analytics engine.',
    icon: '🤖',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    title: 'Automated Campaigns',
    description: 'Set up and run marketing campaigns that optimize themselves for maximum ROI.',
    icon: '⚡',
    color: 'bg-yellow-500'
  },
  {
    id: '3',
    title: 'Multi-Channel Integration',
    description: 'Connect all your marketing channels in one unified dashboard for seamless management.',
    icon: '🔗',
    color: 'bg-green-500'
  },
  {
    id: '4',
    title: 'Real-Time Reporting',
    description: 'Monitor your campaigns in real-time with beautiful, actionable reports and dashboards.',
    icon: '📊',
    color: 'bg-purple-500'
  },
  {
    id: '5',
    title: 'Customer Segmentation',
    description: 'Target the right audience with intelligent customer segmentation and personalization.',
    icon: '🎯',
    color: 'bg-red-500'
  },
  {
    id: '6',
    title: 'A/B Testing',
    description: 'Optimize your campaigns with built-in A/B testing tools and statistical significance.',
    icon: '🧪',
    color: 'bg-indigo-500'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section bg-gradient-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Powerful Features for Modern Marketing
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and optimize your marketing campaigns 
            in one comprehensive platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full text-center">
                <div className={`feature-icon ${feature.color} mx-auto mb-4`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-6">
            Ready to see these features in action?
          </p>
          <button className="btn btn-primary btn-lg">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
