import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  TrendingUp,
  Users,
  Award,
  Clock
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import ProcessStep from '../components/ProcessStep';
import { servicesData, testimonialsData, processSteps } from '../data/mockData';
import './Home.css';

const Home = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '1000+', label: 'Projects Completed' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-slideInLeft">
              <div className="hero-badge">
                <Award size={20} />
                <span>Trusted CAC Registration Partner</span>
              </div>
              <h1>
                Simplifying Your <span className="text-gradient">Business Journey</span>
              </h1>
              <p className="hero-description">
                Professional business registration, CAC compliance, and corporate advisory 
                services. Fast, reliable, and stress-free. Let us handle the paperwork 
                while you focus on growing your business.
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Quick Registration Process</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Expert Guidance</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={20} />
                  <span>Affordable Pricing</span>
                </div>
              </div>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start Your Registration
                  <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="btn btn-outline btn-lg">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="hero-image animate-slideInRight">
              <div className="hero-illustration">
                <div className="floating-card card-1">
                  <CheckCircle size={40} color="#00D26A" />
                  <p>Fast Processing</p>
                </div>
                <div className="floating-card card-2">
                  <Award size={40} color="#FF6B35" />
                  <p>Certified Services</p>
                </div>
                <div className="floating-card card-3">
                  <Users size={40} color="#4A90E2" />
                  <p>500+ Clients</p>
                </div>
                {/* Central Circle */}
                <div className="central-circle">
                  <div className="circle-content">
                    <div className="logo-circle">
                      <span>ABLE</span>
                      <span>BIZ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F8F9FA" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-icon">
                  <stat.icon size={40} />
                </div>
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="animate-fadeInUp">Our Professional Services</h2>
            <p className="animate-fadeInUp">
              Comprehensive business solutions tailored to your needs
            </p>
          </div>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                delay={index * 0.1}
              />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-primary">
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="animate-fadeInUp">How It Works</h2>
            <p className="animate-fadeInUp">
              Simple, straightforward process to get your business registered
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={step.id} 
                step={step} 
                index={index}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="animate-fadeInUp">What Our Clients Say</h2>
            <p className="animate-fadeInUp">
              Real stories from satisfied businesses we've helped
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Start Your Business Journey?</h2>
              <p>Join hundreds of successful businesses. Let's get you registered today!</p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started Now
                <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/2348160486023" className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
