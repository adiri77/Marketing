import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PricingSection from '../components/sections/PricingSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import '../styles/globals.css';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
};

export default Home;
