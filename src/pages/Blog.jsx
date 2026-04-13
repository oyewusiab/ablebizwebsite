import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content text-center">
            <h1 className="animate-fadeInUp">Blog & Resources</h1>
            <p className="animate-fadeInUp">
              Expert insights, tips, and updates on business registration and compliance
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="blog-card animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span>
                      <Clock size={16} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-footer">
                    <div className="blog-author">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <button className="read-more-btn">
                      Read More
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
