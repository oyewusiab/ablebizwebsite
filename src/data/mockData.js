// Mock Services Data
export const servicesData = [
  {
    id: 1,
    title: "Business Registration",
    description: "Complete CAC business name, incorporation, and registration services. Fast, reliable, and affordable.",
    icon: "FileText",
    color: "#00D26A",
    features: [
      "Business Name Registration",
      "Company Incorporation (Ltd, PLC)",
      "Tax Identification Number (TIN)",
      "Business Permit Processing",
      "NGO/Trustees Registration"
    ],
    price: "From ₦15,000"
  },
  {
    id: 2,
    title: "Compliance & Advisory",
    description: "Stay compliant with CAC regulations. Expert guidance on corporate governance and regulatory requirements.",
    icon: "Shield",
    color: "#4A90E2",
    features: [
      "Annual Returns Filing",
      "Statutory Compliance Audits",
      "Corporate Restructuring",
      "Legal Documentation",
      "Regulatory Advisory"
    ],
    price: "Custom Pricing"
  },
  {
    id: 3,
    title: "Administrative Services",
    description: "Professional administrative support to keep your business running smoothly and efficiently.",
    icon: "Briefcase",
    color: "#FF6B35",
    features: [
      "Document Processing",
      "Business Consultancy",
      "Secretarial Services",
      "Meeting Coordination",
      "Record Management"
    ],
    price: "From ₦25,000/month"
  },
  {
    id: 4,
    title: "Corporate Support",
    description: "Comprehensive corporate services including share transfers, amendments, and company changes.",
    icon: "Building2",
    color: "#9B59B6",
    features: [
      "Change of Name/Address",
      "Share Transfer & Allotment",
      "Director Appointments",
      "Company Amendments",
      "Merger & Acquisition Support"
    ],
    price: "From ₦20,000"
  }
];

// Mock Testimonials Data
export const testimonialsData = [
  {
    id: 1,
    name: "Adewale Johnson",
    company: "TechStart Nigeria",
    role: "CEO",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "ABLEBIZ made our company registration seamless! What would have taken months was completed in just 2 weeks. Highly professional and responsive team."
  },
  {
    id: 2,
    name: "Chiamaka Okonkwo",
    company: "Fashion Hub Ltd",
    role: "Founder",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    text: "Exceptional service! They handled everything from business name registration to tax compliance. I can now focus on growing my business worry-free."
  },
  {
    id: 3,
    name: "Ibrahim Musa",
    company: "Greenfield Enterprises",
    role: "Managing Director",
    image: "https://i.pravatar.cc/150?img=33",
    rating: 5,
    text: "Professional, efficient, and affordable. ABLEBIZ helped us navigate complex CAC requirements with ease. Best decision we made for our business!"
  },
  {
    id: 4,
    name: "Grace Adeola",
    company: "Grace Foundation",
    role: "Director",
    image: "https://i.pravatar.cc/150?img=47",
    rating: 5,
    text: "Registering our NGO was stress-free thanks to ABLEBIZ. Their team was patient, knowledgeable, and always available to answer our questions."
  }
];

// Mock Process Steps
export const processSteps = [
  {
    id: 1,
    title: "Request Service",
    description: "Fill out our simple online form or contact us directly via phone, email, or WhatsApp.",
    icon: "ClipboardList"
  },
  {
    id: 2,
    title: "Consultation",
    description: "Our experts review your request and provide personalized guidance and recommendations.",
    icon: "Users"
  },
  {
    id: 3,
    title: "Document Submission",
    description: "We guide you through document preparation and handle all submissions to CAC and relevant authorities.",
    icon: "Upload"
  },
  {
    id: 4,
    title: "Completion",
    description: "Receive your certificates and documents. We follow up to ensure everything is in perfect order.",
    icon: "CheckCircle"
  }
];

// Mock Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Business Registration in Nigeria 2026",
    excerpt: "Everything you need to know about registering your business with CAC in 2026. Step-by-step guide with requirements and fees.",
    date: "2026-01-15",
    author: "ABLEBIZ Team",
    category: "Business Registration",
    image: "https://images.unsplash.com/photo-1554224311-beee040c201a?w=800&auto=format&fit=crop",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Understanding CAC Compliance Requirements for 2026",
    excerpt: "Stay compliant with the latest CAC regulations. Learn about annual returns, statutory meetings, and more.",
    date: "2026-01-10",
    author: "Legal Team",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Why Every Startup Should Register with CAC Early",
    excerpt: "The benefits of early business registration and how it can protect your brand and attract investors.",
    date: "2026-01-05",
    author: "Business Advisory",
    category: "Startup Tips",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop",
    readTime: "5 min read"
  }
];

// Mock Team Members
export const teamMembers = [
  {
    id: 1,
    name: "Oluwaseun Adebayo",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/300?img=15",
    bio: "15+ years experience in corporate affairs and business advisory."
  },
  {
    id: 2,
    name: "Fatima Hassan",
    role: "Head of Operations",
    image: "https://i.pravatar.cc/300?img=48",
    bio: "Expert in CAC compliance and regulatory processes."
  },
  {
    id: 3,
    name: "Chinedu Okafor",
    role: "Senior Business Consultant",
    image: "https://i.pravatar.cc/300?img=51",
    bio: "Specializes in startup advisory and business structuring."
  },
  {
    id: 4,
    name: "Aisha Mohammed",
    role: "Client Relations Manager",
    image: "https://i.pravatar.cc/300?img=44",
    bio: "Dedicated to ensuring exceptional client experiences."
  }
];

// Mock Client Requests (for Client Portal)
export const mockClientRequests = [
  {
    id: "REQ-2026-001",
    service: "Business Name Registration",
    status: "In Progress",
    dateSubmitted: "2026-01-20",
    expectedCompletion: "2026-02-05",
    documents: ["ID Card", "Utility Bill", "Application Form"]
  },
  {
    id: "REQ-2025-245",
    service: "Company Incorporation",
    status: "Completed",
    dateSubmitted: "2025-12-10",
    completedDate: "2026-01-08",
    documents: ["Certificate of Incorporation", "Memorandum", "Articles of Association"]
  }
];

// Mock Staff Tasks (for Staff Dashboard)
export const mockStaffTasks = [
  {
    id: "TASK-001",
    client: "Adewale Johnson",
    service: "Business Registration",
    priority: "High",
    dueDate: "2026-02-01",
    status: "In Progress",
    assignedTo: "Staff Member 1"
  },
  {
    id: "TASK-002",
    client: "Grace Adeola",
    service: "Annual Returns",
    priority: "Medium",
    dueDate: "2026-02-10",
    status: "Pending Review",
    assignedTo: "Staff Member 2"
  },
  {
    id: "TASK-003",
    client: "Ibrahim Musa",
    service: "Company Amendment",
    priority: "Low",
    dueDate: "2026-02-15",
    status: "Completed",
    assignedTo: "Staff Member 1"
  }
];

// Mock Analytics (for Management Dashboard)
export const mockAnalytics = {
  totalClients: 247,
  activeRequests: 38,
  completedThisMonth: 52,
  revenue: "₦4,850,000",
  clientSatisfaction: 4.8,
  averageCompletionTime: "12 days",
  topServices: [
    { name: "Business Registration", count: 120 },
    { name: "Compliance Services", count: 68 },
    { name: "Corporate Support", count: 42 },
    { name: "Administrative Services", count: 17 }
  ],
  monthlyRevenue: [
    { month: "Aug", amount: 3200000 },
    { month: "Sep", amount: 3800000 },
    { month: "Oct", amount: 4100000 },
    { month: "Nov", amount: 4500000 },
    { month: "Dec", amount: 4200000 },
    { month: "Jan", amount: 4850000 }
  ]
};
