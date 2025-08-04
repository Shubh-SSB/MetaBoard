import { Briefcase, Code, FileText, GraduationCap, Scale, Search, Shield, Users } from "lucide-react";

export default [
    {
        id: 1,
        title: "Legal Tech Consultation",
        description: "Custom software solutions for law firms",
        status: "Provided",
        icon: Code,
        details: "We develop cutting-edge legal technology solutions including case management systems, client portals, and automated document processing tools tailored to your firm's specific needs.",
        features: ["Custom Development", "API Integration", "Cloud Solutions", "Mobile Apps"]
    },
    {
        id: 2,
        title: "Compliance Auditing",
        description: "Comprehensive legal compliance reviews",
        status: "Provided",
        icon: Scale,
        details: "Our expert team conducts thorough compliance audits to ensure your organization meets all regulatory requirements and industry standards.",
        features: ["Risk Assessment", "Policy Review", "Training Programs", "Documentation"]
    },
    {
        id: 3,
        title: "Legal Education Programs",
        description: "Professional development for legal teams",
        status: "Provided",
        icon: GraduationCap,
        details: "Comprehensive training programs covering the latest legal technologies, compliance requirements, and industry best practices.",
        features: ["Online Courses", "Workshops", "Certification", "Mentoring"]
    },
    {
        id: 4,
        title: "Document Automation",
        description: "Streamlined legal document generation",
        status: "Provided",
        icon: FileText,
        details: "Automated document creation systems that reduce manual work and ensure consistency across all legal documentation.",
        features: ["Template Creation", "Smart Forms", "Review Workflows", "Version Control"]
    },
    {
        id: 5,
        title: "AI Legal Research",
        description: "Advanced case law analysis platform",
        status: "Upcoming",
        icon: Search,
        details: "Revolutionary AI-powered research tools that analyze case law, identify precedents, and provide intelligent recommendations for legal strategies.",
        features: ["Natural Language Processing", "Precedent Analysis", "Strategy Suggestions", "Real-time Updates"]
    },
    {
        id: 6,
        title: "Virtual Legal Teams",
        description: "Remote collaboration solutions",
        status: "Upcoming",
        icon: Users,
        details: "Complete virtual workspace solutions enabling seamless collaboration between legal professionals regardless of location.",
        features: ["Video Conferencing", "Secure File Sharing", "Project Management", "Time Tracking"]
    },
    {
        id: 7,
        title: "Blockchain Legal Services",
        description: "Smart contract development & auditing",
        status: "Upcoming",
        icon: Shield,
        details: "Specialized services for blockchain technology including smart contract development, auditing, and legal compliance for cryptocurrency projects.",
        features: ["Smart Contracts", "Security Audits", "Regulatory Compliance", "Token Economics"]
    },
    {
        id: 8,
        title: "Legal Analytics Dashboard",
        description: "Data-driven insights for law firms",
        status: "Upcoming",
        icon: Briefcase,
        details: "Comprehensive analytics platform providing actionable insights into case outcomes, client satisfaction, and operational efficiency.",
        features: ["Performance Metrics", "Predictive Analytics", "Client Insights", "Custom Reports"]
    }
];
