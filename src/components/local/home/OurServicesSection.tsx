"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Scale,
  GraduationCap,
  FileText,
  Search,
  Users,
  Shield,
  Briefcase,
  Plus,
  Minus,
} from "lucide-react";

const OurServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const services = [
    {
      id: 1,
      title: "Legal Tech Consultation",
      description: "Custom software solutions for law firms",
      status: "Provided",
      icon: Code,
      details:
        "We develop cutting-edge legal technology solutions including case management systems, client portals, and automated document processing tools tailored to your firm's specific needs.",
      features: [
        "Custom Development",
        "API Integration",
        "Cloud Solutions",
        "Mobile Apps",
      ],
    },
    {
      id: 2,
      title: "Compliance Auditing",
      description: "Comprehensive legal compliance reviews",
      status: "Provided",
      icon: Scale,
      details:
        "Our expert team conducts thorough compliance audits to ensure your organization meets all regulatory requirements and industry standards.",
      features: [
        "Risk Assessment",
        "Policy Review",
        "Training Programs",
        "Documentation",
      ],
    },
    {
      id: 3,
      title: "Legal Education Programs",
      description: "Professional development for legal teams",
      status: "Provided",
      icon: GraduationCap,
      details:
        "Comprehensive training programs covering the latest legal technologies, compliance requirements, and industry best practices.",
      features: ["Online Courses", "Workshops", "Certification", "Mentoring"],
    },
    {
      id: 4,
      title: "Document Automation",
      description: "Streamlined legal document generation",
      status: "Provided",
      icon: FileText,
      details:
        "Automated document creation systems that reduce manual work and ensure consistency across all legal documentation.",
      features: [
        "Template Creation",
        "Smart Forms",
        "Review Workflows",
        "Version Control",
      ],
    },
    {
      id: 5,
      title: "AI Legal Research",
      description: "Advanced case law analysis platform",
      status: "Upcoming",
      icon: Search,
      details:
        "Revolutionary AI-powered research tools that analyze case law, identify precedents, and provide intelligent recommendations for legal strategies.",
      features: [
        "Natural Language Processing",
        "Precedent Analysis",
        "Strategy Suggestions",
        "Real-time Updates",
      ],
    },
    {
      id: 6,
      title: "Virtual Legal Teams",
      description: "Remote collaboration solutions",
      status: "Upcoming",
      icon: Users,
      details:
        "Complete virtual workspace solutions enabling seamless collaboration between legal professionals regardless of location.",
      features: [
        "Video Conferencing",
        "Secure File Sharing",
        "Project Management",
        "Time Tracking",
      ],
    },
    {
      id: 7,
      title: "Blockchain Legal Services",
      description: "Smart contract development & auditing",
      status: "Upcoming",
      icon: Shield,
      details:
        "Specialized services for blockchain technology including smart contract development, auditing, and legal compliance for cryptocurrency projects.",
      features: [
        "Smart Contracts",
        "Security Audits",
        "Regulatory Compliance",
        "Token Economics",
      ],
    },
    {
      id: 8,
      title: "Legal Analytics Dashboard",
      description: "Data-driven insights for law firms",
      status: "Upcoming",
      icon: Briefcase,
      details:
        "Comprehensive analytics platform providing actionable insights into case outcomes, client satisfaction, and operational efficiency.",
      features: [
        "Performance Metrics",
        "Predictive Analytics",
        "Client Insights",
        "Custom Reports",
      ],
    },
  ];

  const getStatusStyle = (status: string) => {
    return status === "Provided"
      ? "bg-red-600 text-white"
      : "border-2 border-red-600 text-red-600 bg-transparent";
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(services.length / 3)) %
        Math.ceil(services.length / 3)
    );
  };

  const toggleExpanded = (serviceId: number) => {
    setExpandedCards((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const visibleServices = services.slice(
    currentSlide * 3,
    (currentSlide + 1) * 3
  );

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Film strip background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex justify-around h-full">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1 bg-red-600 opacity-30"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services We <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive legal technology solutions and professional services
            for modern law firms.
          </p>
        </div>

        {/* Film Strip Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Previous services"
            title="Previous services"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 glass-hover bg-black/50 backdrop-blur-md text-white p-3 rounded-full border border-white/20 transition-all duration-300 hover:border-red-600/50"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next services"
            title="Next services"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 glass-hover bg-black/50 backdrop-blur-md text-white p-3 rounded-full border border-white/20 transition-all duration-300 hover:border-red-600/50"
          >
            <ChevronRight size={24} />
          </button>

          {/* Film Strip Container */}
          <div className="mx-12 relative">
            {/* Film perforations */}
            <div className="absolute top-0 left-0 right-0 h-4 flex justify-between items-center z-10">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-red-600 rounded-full opacity-60 animate-pulse"
                ></div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-4 flex justify-between items-center z-10">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-red-600 rounded-full opacity-60 animate-pulse"
                ></div>
              ))}
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
              {visibleServices.map((service) => {
                const Icon = service.icon;
                const isExpanded = expandedCards.includes(service.id);

                return (
                  <div
                    key={service.id}
                    className="glass-hover bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-red-600/30 hover:scale-105 relative group"
                  >
                    {/* Status Ribbon */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                        service.status
                      )} z-10`}
                    >
                      {service.status}
                    </div>

                    {/* Service Icon */}
                    <div className="flex justify-center mb-6 mt-8">
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* Expandable Details */}
                    <button
                      onClick={() => toggleExpanded(service.id)}
                      className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-400 transition-colors duration-300 mb-4"
                    >
                      <span className="text-sm font-medium">
                        {isExpanded ? "Hide Details" : "Show Details"}
                      </span>
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="glass bg-white/5 backdrop-blur-md rounded-lg p-4 mb-4">
                        <p className="text-gray-300 text-sm mb-4">
                          {service.details}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, index) => (
                            <div
                              key={index}
                              className="text-xs text-gray-400 flex items-center"
                            >
                              <div className="w-1 h-1 bg-red-600 rounded-full mr-2"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 glass-hover">
                        Learn More
                      </button>
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 ripple-effect">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(Math.ceil(services.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                title={`Go to slide ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-red-600 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
