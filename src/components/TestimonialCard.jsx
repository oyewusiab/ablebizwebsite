import React from 'react';
import { Star, Quote } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial, delay = 0 }) => {
  return (
    <div className="testimonial-card animate-fadeInUp" style={{ animationDelay: `${delay}s` }}>
      <div className="quote-icon">
        <Quote size={40} />
      </div>
      
      <div className="rating">
        {[...Array(testimonial.rating)].map((_, index) => (
          <Star key={index} size={18} fill="#FFD700" color="#FFD700" />
        ))}
      </div>
      
      <p className="testimonial-text">"{testimonial.text}"</p>
      
      <div className="testimonial-author">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="author-image"
        />
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.role}</p>
          <p className="company">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
