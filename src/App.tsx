import { Route, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GamificationProvider } from "./gamification/GamificationProvider";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ServicesPage } from "./pages/Services";
import { PricingPage } from "./pages/Pricing";
import { TestimonialsPage } from "./pages/Testimonials";
import { ContactPage } from "./pages/Contact";
import { BlogIndexPage } from "./pages/BlogIndex";
import { BlogPostPage } from "./pages/BlogPost";
import { NotFoundPage } from "./pages/NotFound";
import { default as Login } from "./pages/Login";
import { default as ClientPortal } from "./pages/ClientPortal";
import { default as StaffDashboard } from "./pages/StaffDashboard";
import { default as AdminDashboard } from "./pages/AdminDashboard";

// Protected Route Component (ported from App.jsx)
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles?: string[] }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children as React.ReactElement;
};

export default function App() {
  return (
    <AuthProvider>
      <GamificationProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected Routes */}
            <Route
              path="/client-portal"
              element={
                <ProtectedRoute allowedRoles={['client']}>
                  <ClientPortal />
                </ProtectedRoute>
              }
            />
            <Route
              path="/staff-dashboard"
              element={
                <ProtectedRoute allowedRoles={['staff']}>
                  <StaffDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </GamificationProvider>
    </AuthProvider>
  );
}
