import React from 'react';
import type { CardProps } from '../types';
import '../styles/globals.css';

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  image,
  imageAlt,
  className = '',
}) => {
  return (
    <div className={`card card-hover ${className}`}>
      {image && (
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title || 'Card image'}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold text-secondary-900 mb-2">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-secondary-600 mb-4">
            {description}
          </p>
        )}
        
        {children}
      </div>
    </div>
  );
};

export default Card;
