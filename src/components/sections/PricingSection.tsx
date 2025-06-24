import React from 'react';
import Button from '../Button';
import type { PricingPlan } from '../../types';
import '../../styles/globals.css';

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small businesses getting started with digital marketing.',
    features: [
      'Up to 1,000 contacts',
      'Basic email campaigns',
      'Social media scheduling',
      'Basic analytics',
      'Email support',
      '5 landing pages'
    ],
    buttonText: 'Start Free Trial'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 79,
    period: 'month',
    description: 'Ideal for growing businesses that need advanced marketing tools.',
    features: [
      'Up to 10,000 contacts',
      'Advanced automation',
      'A/B testing',
      'Advanced analytics',
      'Priority support',
      'Unlimited landing pages',
      'Custom integrations',
      'Lead scoring'
    ],
    popular: true,
    buttonText: 'Start Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'For large organizations with complex marketing needs.',
    features: [
      'Unlimited contacts',
      'AI-powered insights',
      'Custom workflows',
      'White-label options',
      'Dedicated account manager',
      'Custom integrations',
      'Advanced security',
      'SLA guarantee',
      'Training & onboarding'
    ],
    buttonText: 'Contact Sales'
  }
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section bg-gradient-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include a 14-day free trial 
            with no credit card required.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`pricing-card animate-slide-up ${plan.popular ? 'pricing-card-popular' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-secondary-900">
                    ${plan.price}
                  </span>
                  <span className="text-secondary-600">/{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-green-500 mr-3 text-lg">✓</span>
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-4">
            Need a custom solution? We've got you covered.
          </p>
          <Button variant="ghost">
            Contact our sales team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
