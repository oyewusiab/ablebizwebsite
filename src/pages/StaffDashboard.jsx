import React, { useState } from 'react';
import { ClipboardList, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockStaffTasks } from '../data/mockData';
import './ClientPortal.css';

const StaffDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('tasks');

  const priorityColors = {
    'High': '#FF6B35',
    'Medium': '#FFB800',
    'Low': '#00D26A'
  };

  return (
    <div className="portal-page">
      <div className="portal-header">
        <div className="container">
          <h1>Staff Dashboard</h1>
          <p>Welcome, {user?.name} - Manage client requests and tasks</p>
        </div>
      </div>

      <div className="container">
        <div className="portal-layout">
          <aside className="portal-sidebar">
            <nav className="portal-nav">
              <button 
                className={`nav-item ${activeTab === 'tasks' ? 'active' : ''}`}
                onClick={() => setActiveTab('tasks')}
              >
                <ClipboardList size={20} />
                <span>My Tasks</span>
              </button>
              <button 
                className={`nav-item ${activeTab === 'clients' ? 'active' : ''}`}
                onClick={() => setActiveTab('clients')}
              >
                <Users size={20} />
                <span>Clients</span>
              </button>
            </nav>
          </aside>

          <main className="portal-content">
            {activeTab === 'tasks' && (
              <div className="tab-content">
                <h2>My Tasks</h2>
                
                <div className="stats-cards">
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#FF6B3515' }}>
                      <AlertTriangle size={30} style={{ color: '#FF6B35' }} />
                    </div>
                    <div>
                      <h3>2</h3>
                      <p>Pending Tasks</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#00D26A15' }}>
                      <CheckCircle size={30} style={{ color: '#00D26A' }} />
                    </div>
                    <div>
                      <h3>1</h3>
                      <p>Completed Today</p>
                    </div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-icon" style={{ background: '#4A90E215' }}>
                      <ClipboardList size={30} style={{ color: '#4A90E2' }} />
                    </div>
                    <div>
                      <h3>3</h3>
                      <p>Total Assigned</p>
                    </div>
                  </div>
                </div>

                <div className="requests-list">
                  {mockStaffTasks.map((task) => (
                    <div key={task.id} className="request-card">
                      <div className="request-header">
                        <div>
                          <h3>{task.service}</h3>
                          <p className="request-id">Task ID: {task.id} | Client: {task.client}</p>
                        </div>
                        <span 
                          className="status-badge" 
                          style={{ 
                            background: `${priorityColors[task.priority]}15`,
                            color: priorityColors[task.priority]
                          }}
                        >
                          {task.priority} Priority
                        </span>
                      </div>
                      <div className="request-details">
                        <div className="detail-item">
                          <span>Due Date:</span>
                          <strong>{new Date(task.dueDate).toLocaleDateString()}</strong>
                        </div>
                        <div className="detail-item">
                          <span>Status:</span>
                          <strong>{task.status}</strong>
                        </div>
                        <div className="detail-item">
                          <span>Assigned To:</span>
                          <strong>{task.assignedTo}</strong>
                        </div>
                      </div>
                      <button className="btn btn-primary">Update Status</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'clients' && (
              <div className="tab-content">
                <h2>Client Management</h2>
                <p>View and manage client information and requests</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
