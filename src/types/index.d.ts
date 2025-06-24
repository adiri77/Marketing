// Common component props
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Button component props
export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

// Card component props
export interface CardProps extends BaseProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

// Feature data structure
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Testimonial data structure
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

// Pricing plan data structure
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

// Blog post data structure
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
}

// Contact form data
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Navigation item
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Hero section props
export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

// Section props
export interface SectionProps extends BaseProps {
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

// Form field props
export interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

// Hook return types
export interface UseDebounceReturn<T> {
  debouncedValue: T;
  isDebouncing: boolean;
}
