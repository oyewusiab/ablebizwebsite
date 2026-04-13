# ABLEBIZ Business Services Website

A comprehensive, modern React-based website for ABLEBIZ Business Services - Professional Business Registration, CAC Compliance, and Corporate Advisory Services.

## 🚀 Features

### Public Features
- **Home Page**: Vibrant hero section, services overview, testimonials, and process explanation
- **Services**: Detailed service listings with features and pricing
- **About Us**: Company story, mission/vision/values, and team members
- **Blog**: Resources and articles about business registration and compliance
- **Contact**: Multi-channel contact form and information

### Client Portal
- Dashboard overview with request status
- Track business registration progress
- Download completed documents
- Submit new service requests
- Real-time notifications

### Staff Dashboard
- Task management system
- Client request tracking
- Priority-based workflow
- Document processing tools

### Admin/Management Dashboard
- Business analytics and KPIs
- Revenue tracking and trends
- Client satisfaction metrics
- Service performance analysis
- Staff performance monitoring

## 🎨 Design Features

- **Vibrant Color Scheme**: Green (#00D26A) primary with orange, blue, and purple accents
- **Playful Yet Professional**: Animated elements, floating cards, and smooth transitions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern UI/UX**: Clean layouts, intuitive navigation, and clear call-to-actions
- **Accessibility**: WCAG compliant with proper contrast and keyboard navigation

## 🛠️ Technology Stack

- **React 18**: Modern component-based architecture
- **React Router**: Client-side routing
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful icon library
- **CSS3**: Custom styling with animations
- **Context API**: State management for authentication

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Demo Login Credentials

### Client Portal
- Email: client@demo.com
- Password: password (any)
- Access: Client dashboard, track requests, download documents

### Staff Dashboard
- Email: staff@demo.com
- Password: password (any)
- Access: Task management, client requests, document processing

### Admin Dashboard
- Email: admin@demo.com
- Password: password (any)
- Access: Analytics, reports, staff performance, full system overview

## 📁 Project Structure

```
ablebiz-website/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── ProcessStep.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── ClientPortal.jsx
│   │   ├── StaffDashboard.jsx
│   │   └── AdminDashboard.jsx
│   ├── context/           # React Context for state
│   │   └── AuthContext.jsx
│   ├── data/              # Mock data
│   │   └── mockData.js
│   ├── styles/            # Global styles
│   │   └── global.css
│   ├── App.jsx            # Main app component with routing
│   └── main.jsx           # App entry point
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Key Components

### Authentication System
- Role-based access control (Client, Staff, Admin)
- Protected routes with redirects
- Session persistence with localStorage
- Context-based state management

### Service Features
- 4 main service categories
- Feature lists and pricing
- Quick contact integration
- Detailed service descriptions

### Dashboard Features
- Real-time status tracking
- Document management
- Task prioritization
- Analytics visualization

## 🌈 Color Palette

```css
--primary-green: #00D26A     /* Main brand color */
--dark-green: #00A854        /* Darker shade */
--accent-orange: #FF6B35     /* Energy and action */
--accent-blue: #4A90E2       /* Trust and reliability */
--accent-purple: #9B59B6     /* Innovation */
--text-dark: #2C3E50         /* Primary text */
--text-light: #7F8C8D        /* Secondary text */
--bg-light: #F8F9FA          /* Light backgrounds */
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🚀 Deployment

The website is ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist/`

## 🔧 Customization

### Adding New Services
Edit `src/data/mockData.js` and add to `servicesData` array.

### Changing Brand Colors
Update CSS variables in `src/styles/global.css`.

### Adding Blog Posts
Add entries to `blogPosts` array in `src/data/mockData.js`.

## 📞 Contact Information

- **Phone**: +234 801 234 5678
- **Email**: info@ablebiz.ng
- **Address**: 123 Business District, Lagos, Nigeria
- **WhatsApp**: +234 801 234 5678

## 📝 License

Copyright © 2026 ABLEBIZ Business Services. All rights reserved.

## 🤝 Support

For support and inquiries, please contact:
- Email: support@ablebiz.ng
- Website: www.ablebiz.ng
- WhatsApp: +234 801 234 5678

---

**Built with ❤️ by ABLEBIZ Development Team**
