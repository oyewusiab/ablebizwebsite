import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/mockData';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content text-center">
            <h1 className="animate-fadeInUp">Our Professional Services</h1>
            <p className="animate-fadeInUp">
              Comprehensive business solutions designed to meet all your corporate needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="services-grid-full">
            {servicesData.map((service, index) => (
              <div key={service.id} className="service-detail-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard service={service} />
                <div className="service-full-features">
                  <h4>Complete Features:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose ABLEBIZ?</h2>
            <p>We make business registration and compliance simple, fast, and affordable</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card animate-fadeInUp">
              <div className="benefit-icon">⚡</div>
              <h3>Fast Processing</h3>
              <p>We understand time is money. Our streamlined process ensures quick turnaround times without compromising quality.</p>
            </div>
            <div className="benefit-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="benefit-icon">🎯</div>
              <h3>Expert Guidance</h3>
              <p>Our team of professionals has years of experience in CAC regulations and corporate affairs.</p>
            </div>
            <div className="benefit-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="benefit-icon">💰</div>
              <h3>Affordable Pricing</h3>
              <p>Quality service doesn't have to break the bank. We offer competitive rates for all our services.</p>
            </div>
            <div className="benefit-card animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="benefit-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Your documents and information are handled with utmost confidentiality and security.</p>
            </div>
            <div className="benefit-card animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="benefit-icon">🤝</div>
              <h3>Personalized Support</h3>
              <p>We assign dedicated account managers to guide you through every step of the process.</p>
            </div>
            <div className="benefit-card animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
              <div className="benefit-icon">📱</div>
              <h3>24/7 Availability</h3>
              <p>Reach us anytime via phone, email, or WhatsApp. We're here when you need us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-services">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>Let us handle the paperwork while you focus on building your business</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request a Quote
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+2348160486023" className="btn btn-outline btn-lg">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
