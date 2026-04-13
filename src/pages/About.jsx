import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { teamMembers } from '../data/mockData';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content text-center">
            <h1 className="animate-fadeInUp">About ABLEBIZ</h1>
            <p className="animate-fadeInUp">
              Your trusted partner for business registration and corporate compliance
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text animate-slideInLeft">
              <h2>Our Story</h2>
              <p>
                Founded in 2014, ABLEBIZ Business Services emerged from a simple yet powerful vision: 
                to make business registration and corporate compliance accessible, affordable, and stress-free 
                for entrepreneurs across Nigeria.
              </p>
              <p>
                What started as a small consultancy has grown into a leading business services provider, 
                helping over 500+ businesses navigate the complexities of CAC regulations and corporate governance.
              </p>
              <p>
                Today, we're proud to be the go-to partner for startups, SMEs, and established corporations 
                seeking professional, reliable, and efficient business services.
              </p>
            </div>
            <div className="about-image animate-slideInRight">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop" alt="Team collaboration" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section bg-light">
        <div className="container">
          <div className="mvv-grid">
            <div className="mvv-card animate-fadeInUp">
              <div className="mvv-icon">
                <Target size={50} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To simplify business processes and empower entrepreneurs by providing exceptional, 
                affordable, and timely corporate services that enable business growth and success.
              </p>
            </div>
            <div className="mvv-card animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="mvv-icon">
                <Eye size={50} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be Nigeria's most trusted and innovative business services provider, 
                recognized for excellence, reliability, and client satisfaction.
              </p>
            </div>
            <div className="mvv-card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="mvv-icon">
                <Award size={50} />
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, professionalism, innovation, and client-centricity guide everything we do. 
                We believe in building lasting relationships through trust and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Meet Our Team</h2>
            <p>Experienced professionals dedicated to your success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
