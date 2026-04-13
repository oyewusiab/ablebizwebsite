import React, { useState } from 'react';
import { BarChart3, Users, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockAnalytics } from '../data/mockData';
import './ClientPortal.css';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('analytics');

  return (
    <div className="portal-page">
      <div className="portal-header">
        <div className="container">
          <h1>Management Dashboard</h1>
          <p>Welcome, {user?.name} - Monitor business performance and operations</p>
        </div>
      </div>

      <div className="container">
        <div className="portal-layout">
          <aside className="portal-sidebar">
            <nav className="portal-nav">
              <button 
                className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')}
              >
                <BarChart3 size={20} />
                <span>Analytics</span>
              </button>
              <button 
                className={`nav-item ${activeTab === 'clients' ? 'active' : ''}`}
                onClick={() => setActiveTab('clients')}
              >
                <Users size={20} />
                <span>Clients</span>
              </button>
              <button 
                className={`nav-item ${activeTab === 'staff' ? 'active' : ''}`}
                onClick={() => setActiveTab('staff')}
              >
                <Activity size={20} />
                <span>Staff Performance</span>
              </button>
            </nav>
          </aside>

          <main className="portal-content">
            {activeTab === 'analytics' && (
              <div className="tab-content">
                <h2>Business Analytics</h2>
                
                {/* Key Metrics */}
                <div className="admin-stats-grid">
                  <div className="admin-stat-card">
                    <div className="admin-stat-header">
                      <div className="admin-stat-icon" style={{ background: '#4A90E215' }}>
                        <Users size={24} style={{ color: '#4A90E2' }} />
                      </div>
                      <span className="stat-change positive">+12%</span>
                    </div>
                    <h3>{mockAnalytics.totalClients}</h3>
                    <p>Total Clients</p>
                  </div>

                  <div className="admin-stat-card">
                    <div className="admin-stat-header">
                      <div className="admin-stat-icon" style={{ background: '#FF6B3515' }}>
                        <Activity size={24} style={{ color: '#FF6B35' }} />
                      </div>
                      <span className="stat-change positive">+5</span>
                    </div>
                    <h3>{mockAnalytics.activeRequests}</h3>
                    <p>Active Requests</p>
                  </div>

                  <div className="admin-stat-card">
                    <div className="admin-stat-header">
                      <div className="admin-stat-icon" style={{ background: '#00D26A15' }}>
                        <TrendingUp size={24} style={{ color: '#00D26A' }} />
                      </div>
                      <span className="stat-change positive">+18%</span>
                    </div>
                    <h3>{mockAnalytics.completedThisMonth}</h3>
                    <p>Completed This Month</p>
                  </div>

                  <div className="admin-stat-card">
                    <div className="admin-stat-header">
                      <div className="admin-stat-icon" style={{ background: '#9B59B615' }}>
                        <DollarSign size={24} style={{ color: '#9B59B6' }} />
                      </div>
                      <span className="stat-change positive">+25%</span>
                    </div>
                    <h3>{mockAnalytics.revenue}</h3>
                    <p>Monthly Revenue</p>
                  </div>
                </div>

                {/* Service Performance */}
                <div className="analytics-section">
                  <h3>Top Services</h3>
                  <div className="service-bars">
                    {mockAnalytics.topServices.map((service, index) => (
                      <div key={index} className="service-bar-item">
                        <div className="service-bar-header">
                          <span className="service-name">{service.name}</span>
                          <span className="service-count">{service.count}</span>
                        </div>
                        <div className="service-bar-track">
                          <div 
                            className="service-bar-fill" 
                            style={{ 
                              width: `${(service.count / 120) * 100}%`,
                              background: `linear-gradient(90deg, var(--primary-green), var(--accent-blue))`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue Chart */}
                <div className="analytics-section">
                  <h3>Monthly Revenue Trend</h3>
                  <div className="chart-container">
                    <div className="bar-chart">
                      {mockAnalytics.monthlyRevenue.map((item, index) => (
                        <div key={index} className="bar-chart-item">
                          <div 
                            className="bar" 
                            style={{ 
                              height: `${(item.amount / 5000000) * 100}%`,
                              background: `linear-gradient(180deg, var(--primary-green), var(--dark-green))`
                            }}
                          >
                            <span className="bar-value">₦{(item.amount / 1000000).toFixed(1)}M</span>
                          </div>
                          <span className="bar-label">{item.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="metrics-grid">
                  <div className="metric-card">
                    <h4>Client Satisfaction</h4>
                    <div className="metric-value">{mockAnalytics.clientSatisfaction} / 5.0</div>
                    <div className="metric-bar">
                      <div style={{ width: `${(mockAnalytics.clientSatisfaction / 5) * 100}%` }}></div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <h4>Avg. Completion Time</h4>
                    <div className="metric-value">{mockAnalytics.averageCompletionTime}</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'clients' && (
              <div className="tab-content">
                <h2>Client Management</h2>
                <p>View all clients, their requests, and activity history</p>
              </div>
            )}

            {activeTab === 'staff' && (
              <div className="tab-content">
                <h2>Staff Performance</h2>
                <p>Monitor staff productivity, task completion rates, and performance metrics</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
