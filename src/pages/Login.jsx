import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Demo login logic
    if (email && password) {
      const userData = {
        email,
        name: email.split('@')[0],
        role: role
      };
      
      login(userData);
      
      // Redirect based on role
      if (role === 'client') {
        navigate('/client-portal');
      } else if (role === 'staff') {
        navigate('/staff-dashboard');
      } else if (role === 'admin') {
        navigate('/admin-dashboard');
      }
    } else {
      setError('Please enter email and password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content animate-fadeInUp">
          <div className="login-header">
            <LogIn size={50} />
            <h1>Welcome Back</h1>
            <p>Sign in to access your dashboard</p>
          </div>

          {error && (
            <div className="error-message">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="role">Login As</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="client">Client</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin/Management</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <Mail size={20} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock size={20} />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg login-btn">
              Sign In
            </button>
          </form>

          <div className="login-footer">
            <p>Demo Credentials:</p>
            <p><strong>Client:</strong> client@demo.com / password</p>
            <p><strong>Staff:</strong> staff@demo.com / password</p>
            <p><strong>Admin:</strong> admin@demo.com / password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
