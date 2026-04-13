import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated with ABLEBIZ</h3>
              <p>Subscribe to our newsletter for business tips, CAC updates, and exclusive offers</p>
            </div>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
              />
              <button type="submit" className="btn btn-primary">
                <Send size={20} />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-column">
              <div className="footer-logo">
                <span className="logo-text">Ablebiz</span>
                <span className="logo-subtitle">BUSINESS SERVICES</span>
              </div>
              <p className="footer-description">
                Simplifying your business journey with professional registration, 
                compliance, and advisory services. Your trusted partner for all 
                CAC-related matters.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">Blog & Resources</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-column">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Business Registration</Link></li>
                <li><Link to="/services">CAC Compliance</Link></li>
                <li><Link to="/services">Administrative Support</Link></li>
                <li><Link to="/services">Corporate Advisory</Link></li>
                <li><Link to="/services">Document Processing</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-column">
              <h4>Contact Us</h4>
              <ul className="contact-list">
                <li>
                  <MapPin size={18} />
                  <span>123 Business District, Lagos, Nigeria</span>
                </li>
                <li>
                  <Phone size={18} />
                  <a href="tel:+2348160486023">+234 816 048 6023</a>
                </li>
                <li>
                  <Mail size={18} />
                  <a href="mailto:hello@ablebiz.com.ng">hello@ablebiz.com.ng</a>
                </li>
              </ul>
              <div className="working-hours">
                <strong>Working Hours:</strong>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} ABLEBIZ Business Services. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
