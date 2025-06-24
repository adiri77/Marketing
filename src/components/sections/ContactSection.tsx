import React, { useState } from 'react';
import Button from '../Button';
import { useDebounce } from '../../hooks/useDebounce';
import type { ContactFormData } from '../../types';
import '../../styles/globals.css';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Debounce form validation
  const { debouncedValue: debouncedFormData } = useDebounce(formData, 300);
  
  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (isSubmitted) {
    return (
      <section id="contact" className="section bg-gradient-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-xl mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <Button 
              variant="secondary"
              onClick={() => setIsSubmitted(false)}
              className="bg-white text-primary-600 hover:bg-blue-50"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="contact" className="section bg-gradient-primary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl">
              Contact us today and let's discuss how Marketing Pro can transform your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-blue-100">hello@marketingpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Live Chat</h4>
                    <p className="text-blue-100">Available 24/7 for support</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-xl">
                <h4 className="font-semibold mb-2">Quick Response Guarantee</h4>
                <p className="text-blue-100 text-sm">
                  We respond to all inquiries within 2 hours during business hours 
                  and within 24 hours on weekends.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="company" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="form-input"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="form-textarea"
                    placeholder="Tell us about your project or questions..."
                    required
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
