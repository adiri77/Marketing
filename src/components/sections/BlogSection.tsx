import React from 'react';
import Card from '../Card';
import Button from '../Button';
import type { BlogPost } from '../../types';
import '../../styles/globals.css';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Marketing Automation Strategies That Actually Work',
    excerpt: 'Discover proven automation strategies that can boost your marketing ROI by up to 300% while saving time.',
    author: 'Alex Thompson',
    date: '2024-01-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    category: 'Automation',
    slug: 'marketing-automation-strategies'
  },
  {
    id: '2',
    title: 'The Future of AI in Digital Marketing',
    excerpt: 'Explore how artificial intelligence is revolutionizing marketing and what it means for your business.',
    author: 'Sarah Kim',
    date: '2024-01-12',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
    category: 'AI & Technology',
    slug: 'ai-digital-marketing-future'
  },
  {
    id: '3',
    title: 'Customer Segmentation: A Complete Guide',
    excerpt: 'Learn how to segment your customers effectively to deliver personalized experiences that convert.',
    author: 'Mike Rodriguez',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    category: 'Strategy',
    slug: 'customer-segmentation-guide'
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Latest Marketing Insights
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights, tips, and strategies 
            for modern digital marketing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="blog-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-secondary-500">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-secondary-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-medium text-secondary-600">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary-900">
                        {post.author}
                      </p>
                      <p className="text-xs text-secondary-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
