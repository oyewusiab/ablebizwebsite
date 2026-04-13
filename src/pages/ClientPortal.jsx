import React, { useState } from 'react';
import { 
  FileText, 
  Upload, 
  Download, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Bell
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockClientRequests } from '../data/mockData';
import './ClientPortal.css';

const ClientPortal = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const statusColors = {
    'In Progress': '#FF6B35',
    'Completed': '#00D26A',
    'Pending': '#FFB800'
  };

  return (
    <div className="portal-page">
      <div className="portal-header">
        <div className="container">
          <h1>Welcome back, {user?.name}!</h1>
          <p>Manage your business registration requests and documents</p>
        </div>
      </div>

      <div className="container">
        <div className="portal-layout">
          {/* Sidebar */}
          <aside className="portal-sidebar">
            <nav className="portal-nav">
              <button 
                className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <FileText size={20} />
                <span>Overview</span>
              </button>
              <button 
                className={`nav-item ${activeTab === 'requests' ? 'active' : ''}`}
                onClick={() => setActiveTab('requests')}
              >
                <Clock size={20} />
                <span>My Requests</span>
              </button>
              <button 
                className={`nav-item ${activeTab === 'documents' ? 'active' : ''}`}
                onClick={() => setActiveTab('documents')}
              >
                <Download size={20} />
                <span>Documents</span>
              </button>
              <button 
                className={`nav-item ${activeTab === 'new' ? 'active' : ''}`}
                onClick={() => setActiveTab('new')}
              >
                <Upload size={20} />
                <span>New Request</span>
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="portal-content">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="tab-content">
                <h2>Dashboard Overview</h2>
                
                <div className="stats-cards">
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#FF6B3515' }}>
                      <Clock size={30} style={{ color: '#FF6B35' }} />
                    </div>
                    <div>
                      <h3>1</h3>
                      <p>Active Requests</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#00D26A15' }}>
                      <CheckCircle size={30} style={{ color: '#00D26A' }} />
                    </div>
                    <div>
                      <h3>1</h3>
                      <p>Completed</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#4A90E215' }}>
                      <FileText size={30} style={{ color: '#4A90E2' }} />
                    </div>
                    <div>
                      <h3>5</h3>
                      <p>Documents</p>
                    </div>
                  </div>
                </div>

                <div className="recent-activity">
                  <h3>Recent Activity</h3>
                  <div className="activity-list">
                    <div className="activity-item">
                      <div className="activity-icon">
                        <Bell size={20} />
                      </div>
                      <div className="activity-content">
                        <h4>Application In Progress</h4>
                        <p>Your business registration is being processed</p>
                        <span className="activity-time">2 days ago</span>
                      </div>
                    </div>
                    <div className="activity-item">
                      <div className="activity-icon">
                        <CheckCircle size={20} />
                      </div>
                      <div className="activity-content">
                        <h4>Documents Uploaded</h4>
                        <p>All required documents have been received</p>
                        <span className="activity-time">5 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Requests Tab */}
            {activeTab === 'requests' && (
              <div className="tab-content">
                <h2>My Requests</h2>
                
                <div className="requests-list">
                  {mockClientRequests.map((request) => (
                    <div key={request.id} className="request-card">
                      <div className="request-header">
                        <div>
                          <h3>{request.service}</h3>
                          <p className="request-id">ID: {request.id}</p>
                        </div>
                        <span 
                          className="status-badge" 
                          style={{ 
                            background: `${statusColors[request.status]}15`,
                            color: statusColors[request.status]
                          }}
                        >
                          {request.status}
                        </span>
                      </div>
                      <div className="request-details">
                        <div className="detail-item">
                          <span>Submitted:</span>
                          <strong>{new Date(request.dateSubmitted).toLocaleDateString()}</strong>
                        </div>
                        {request.expectedCompletion && (
                          <div className="detail-item">
                            <span>Expected Completion:</span>
                            <strong>{new Date(request.expectedCompletion).toLocaleDateString()}</strong>
                          </div>
                        )}
                        {request.completedDate && (
                          <div className="detail-item">
                            <span>Completed:</span>
                            <strong>{new Date(request.completedDate).toLocaleDateString()}</strong>
                          </div>
                        )}
                      </div>
                      <div className="request-documents">
                        <h4>Documents:</h4>
                        <div className="document-tags">
                          {request.documents.map((doc, idx) => (
                            <span key={idx} className="doc-tag">{doc}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents Tab */}
            {activeTab === 'documents' && (
              <div className="tab-content">
                <h2>My Documents</h2>
                <div className="documents-grid">
                  <div className="document-card">
                    <FileText size={40} />
                    <h4>Certificate of Incorporation</h4>
                    <button className="btn btn-primary">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                  <div className="document-card">
                    <FileText size={40} />
                    <h4>Business Name Certificate</h4>
                    <button className="btn btn-primary">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* New Request Tab */}
            {activeTab === 'new' && (
              <div className="tab-content">
                <h2>Submit New Request</h2>
                <div className="new-request-form">
                  <p>Contact us to start a new service request or use the form on our Contact page.</p>
                  <button className="btn btn-primary">Contact Support</button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
