import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content text-center">
            <h1 className="animate-fadeInUp">Get In Touch</h1>
            <p className="animate-fadeInUp">
              We're here to help. Reach out and let's discuss your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container animate-slideInLeft">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
              
              {submitted && (
                <div className="success-message">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234 801 234 5678"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="business-registration">Business Registration</option>
                    <option value="compliance">Compliance & Advisory</option>
                    <option value="administrative">Administrative Services</option>
                    <option value="corporate">Corporate Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-container animate-slideInRight">
              <h2>Contact Information</h2>
              <p>Reach out to us through any of these channels</p>

              <div className="contact-info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={30} />
                  </div>
                  <h3>Phone</h3>
                  <p><a href="tel:+2348160486023">+234 816 048 6023</a></p>
                  <p><a href="tel:+2348120193176">+234 812 019 3176</a></p>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={30} />
                  </div>
                  <h3>Email</h3>
                  <p><a href="mailto:hello@ablebiz.com.ng">hello@ablebiz.com.ng</a></p>
                  
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={30} />
                  </div>
                  <h3>Office Address</h3>
                  <p>123 Business District,<br/>Lagos, Nigeria</p>
                </div>

                <div className="info-card whatsapp-card">
                  <div className="info-icon">
                    <MessageCircle size={30} />
                  </div>
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/2348160486023" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Chat With Us
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
