import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Briefcase, 
  Building2,
  ArrowRight 
} from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  FileText,
  Shield,
  Briefcase,
  Building2
};

const ServiceCard = ({ service, delay = 0 }) => {
  const Icon = iconMap[service.icon] || FileText;

  return (
    <div 
      className="service-card animate-fadeInUp" 
      style={{ 
        animationDelay: `${delay}s`,
        '--service-color': service.color 
      }}
    >
      <div className="service-icon" style={{ background: `${service.color}15` }}>
        <Icon size={40} style={{ color: service.color }} />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      
      <ul className="service-features">
        {service.features.slice(0, 3).map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      
      <div className="service-footer">
        <span className="service-price">{service.price}</span>
        <Link to="/contact" className="service-link">
          Learn More
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
