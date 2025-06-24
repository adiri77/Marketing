import React from 'react';
import Button from '../Button';
import '../../styles/globals.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-gradient hero-pattern section-lg relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transform Your Business with
            <span className="block text-yellow-300">Smart Marketing Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
            Boost your revenue by 300% with our AI-powered marketing platform. 
            Join 10,000+ businesses already growing with Marketing Pro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-primary-600 hover:bg-blue-50 shadow-xl"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full opacity-10 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
