"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Monitor,
  Users,
  BookOpen,
  Zap,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/global";
import Header from "@/components/local/services/header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Google Fonts
import { Playfair_Display, Raleway, Inter } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// import Header from "@components/local/services/header";
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const counterRef = useRef<HTMLDivElement>(null);

  const fullText = "Services";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    if (showCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [showCursor]);

  // Animated counter hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = {
      clients: 500,
      projects: 1200,
      years: 15,
      satisfaction: 98,
    };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        clients: Math.floor(targets.clients * easeOut),
        projects: Math.floor(targets.projects * easeOut),
        years: Math.floor(targets.years * easeOut),
        satisfaction: Math.floor(targets.satisfaction * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Orlando Diggs",
      role: "Co-Founder and COO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in legal tech innovation. Former Silicon Valley engineer turned legal technology evangelist.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former law professor with expertise in legal pedagogy and technology integration.",
    },
    {
      id: 3,
      name: "Michael Torres",
      role: "Head of Education",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Leading researcher in legal ethics and digital privacy with extensive community experience.",
    },
    {
      id: 4,
      name: "Jessica Rodriguez",
      role: "Research Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Serial entrepreneur in the legal tech space with extensive innovation experience.",
    },
    {
      id: 5,
      name: "David Kim",
      role: "Innovation Strategist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack developer specializing in AI-powered legal applications and cloud infrastructure.",
    },
    {
      id: 6,
      name: "Emily Watson",
      role: "Content Strategist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Machine learning expert with focus on natural language processing for legal document analysis.",
    },
    {
      id: 7,
      name: "Alex Rivera",
      role: "Senior Software Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Cloud infrastructure specialist ensuring scalable and secure legal technology deployments.",
    },
    {
      id: 8,
      name: "Lisa Martinez",
      role: "Technical Writer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Legal communication expert crafting accessible content for complex legal technology concepts.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Managing Partner",
      company: "Johnson & Associates",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "Metaboard transformed our practice completely. Their legal tech consulting helped us modernize our workflow and increase efficiency by 300%.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Legal Director",
      company: "TechLaw Corp",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "The educational programs provided by Metaboard kept our team ahead of emerging legal technologies. Outstanding expertise and support.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Senior Attorney",
      company: "Innovation Legal",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Their community building initiatives connected us with like-minded legal professionals. The networking opportunities have been invaluable.",
      rating: 5,
    },
  ];

  const stats = [
    { label: "Happy Clients", value: "clients", icon: Users, suffix: "+" },
    {
      label: "Projects Completed",
      value: "projects",
      icon: Award,
      suffix: "+",
    },
    { label: "Years Experience", value: "years", icon: Clock, suffix: "" },
    {
      label: "Client Satisfaction",
      value: "satisfaction",
      icon: TrendingUp,
      suffix: "%",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How do you help law firms with technology adoption?",
      answer:
        "We provide comprehensive consulting services including technology assessment, vendor selection, implementation planning, and change management to ensure smooth technology adoption with minimal disruption to your practice.",
    },
    {
      id: 2,
      question: "What makes your educational programs different?",
      answer:
        "Our programs are designed by legal professionals for legal professionals. We focus on practical applications of emerging technologies like AI, blockchain, and digital ethics specifically tailored for the legal industry.",
    },
    {
      id: 3,
      question: "Do you offer ongoing support after implementation?",
      answer:
        "Yes, we provide continuous support including training updates, troubleshooting, performance optimization, and regular check-ins to ensure your technology investment continues to deliver value.",
    },
    {
      id: 4,
      question: "How long does a typical consulting engagement take?",
      answer:
        "Project timelines vary based on scope and complexity. Simple assessments may take 2-4 weeks, while full implementation projects can range from 3-12 months. We provide detailed timelines during our initial consultation.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [contactStep, setContactStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const toggleFaq = (faqId: number) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (contactStep < 3) setContactStep(contactStep + 1);
  };

  const prevStep = () => {
    if (contactStep > 1) setContactStep(contactStep - 1);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      id: 1,
      slug: "legal-technology-consulting",
      icon: Monitor,
      title: "Legal Technology Consulting",
      brief: "Strategic guidance for law firms adopting new technologies",
      status: "Provided",
      details:
        "Our comprehensive consulting services help law firms navigate the complex landscape of legal technology. We provide strategic planning, vendor selection, implementation support, and change management to ensure successful technology adoption.",
      features: [
        "Technology Assessment",
        "Implementation Planning",
        "Change Management",
        "ROI Analysis",
      ],
    },
    {
      id: 2,
      slug: "educational-programs",
      icon: BookOpen,
      title: "Educational Programs",
      brief: "Comprehensive training courses for legal professionals",
      status: "Provided",
      details:
        "Cutting-edge educational programs designed to bridge the gap between traditional legal education and modern practice requirements. Our curriculum covers emerging technologies and practical applications.",
      features: [
        "AI & Machine Learning",
        "Digital Ethics",
        "Blockchain Law",
        "Legal Research Tools",
      ],
    },
    {
      id: 3,
      slug: "community-building",
      icon: Users,
      title: "Community Building",
      brief: "Networking and collaboration platforms for legal innovators",
      status: "Provided",
      details:
        "We foster a vibrant community of legal professionals, technologists, and innovators through networking events, online forums, and collaborative projects.",
      features: [
        "Networking Events",
        "Mentorship Programs",
        "Online Forums",
        "Startup Incubation",
      ],
    },
    {
      id: 4,
      slug: "innovation-labs",
      icon: Zap,
      title: "Innovation Labs",
      brief: "Research and development of next-generation legal tools",
      status: "Upcoming",
      details:
        "Our innovation labs are at the forefront of legal technology research and development. We work on prototype development and collaborate with industry partners.",
      features: [
        "Prototype Development",
        "Research Partnerships",
        "Technology Testing",
        "Innovation Workshops",
      ],
    },
  ];

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className={`min-h-screen bg-white ${raleway.className}`}>
      <Header />

      {/* Breadcrumb */}
      {/* <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span>Home</span>
                        </Link>
                        <span className="text-red-600">/</span>
                        <span className="text-black font-medium">Services</span>
                    </div>
                </div>
            </div> */}

      {/* Services Intro */}
      <section className="min-h-screen py-60 bg-black text-white relative overflow-hidden">
        {/* Red, gray, and black gradient background - Bright version with blackish shade */}
        <div className="absolute inset-0 gradient-mesh"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-red-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-40 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-8 text-white ${playfairDisplay.className}`}
            >
              Our{" "}
              <span className={`text-red-500 font-raleway font-normal`}>
                {typewriterText}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl mb-12">
              <p
                className={`text-xl text-gray-200 leading-relaxed ${playfairDisplay.className}`}
              >
                Empowering your legal tech journey through comprehensive
                consulting, education, and innovation services.
              </p>
            </div>

            {/* Red divider line */}
            <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>

            {/* Additional text from image */}
            <div className="max-w-5xl mx-auto">
              <p
                className={`text-lg md:text-xl text-gray-300 leading-relaxed ${playfairDisplay.className}`}
              >
                We envision a future where every lawyer and law student has
                access to the latest technological innovations, ethical
                frameworks, and educational resources that define modern legal
                practice.
              </p>
            </div>
          </div>

          {/* Animated Scroll Down Arrow - Centered */}
          <div className="flex justify-center mt-12">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-white/70 text-sm font-medium">
                Scroll Down
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500 animate-pulse"
              >
                <path d="M12 5v14m7-7-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfairDisplay.className}`}
            >
              Our <span className="text-gradient">Team</span>
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-2xl mx-auto ${playfairDisplay.className}`}
            >
              Meet the experts driving innovation in legal technology.
            </p>

            {/* Mini Separator */}
            <div className="flex justify-center mt-8">
              <div className="w-16 h-0.5 bg-red-500"></div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet-custom",
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="team-carousel"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div
                    className="relative rounded-2xl shadow-sm border-1 border-red-600 hover:shadow-md transition-all duration-300 h-80 overflow-hidden max-w-72 mx-auto group"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Bio Overlay - Shows on hover */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center flex-col justify-center p-4 pointer-events-none group-hover:pointer-events-auto">
                      <div className="text-center text-white">
                        <h3
                          className={`text-lg font-bold mb-2 ${playfairDisplay.className}`}
                        >
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-300 mb-3">
                          {member.role}
                        </p>
                        <p className="text-sm leading-relaxed">{member.bio}</p>
                      </div>
                      <div className="flex justify-center mt-4 gap-3 z-10">
                        <a
                          href="#"
                          className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg cursor-pointer"
                          aria-label={`${member.name} LinkedIn`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg cursor-pointer"
                          aria-label={`${member.name} X/Twitter`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-white"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Member Info - Small overlay container at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-1 border-red-600 mx-2 mb-2 p-2 rounded-lg group-hover:opacity-0 transition-opacity duration-300">
                      <div className="text-center">
                        <h3
                          className={`text-base font-bold text-red-600 mb-1 ${playfairDisplay.className}`}
                        >
                          {member.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {member.role}
                        </p>
                        {/* <div><IconButton</div> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all duration-300"
              aria-label="Previous team member"
              title="Previous team member"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all duration-300"
              aria-label="Next team member"
              title="Next team member"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Custom Styles for Swiper */}
          <style jsx global>{`
            .team-carousel .swiper-pagination {
              bottom: -50px !important;
            }

            .swiper-pagination-bullet-custom {
              width: 12px;
              height: 12px;
              background: #d1d5db;
              border-radius: 50%;
              opacity: 1;
              margin: 0 6px;
              transition: all 0.3s ease;
            }

            .swiper-pagination-bullet-active-custom {
              background: #dc2626;
              transform: scale(1.2);
            }

            .line-clamp-3 {
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}</style>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* Section Separator */}
      <div className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="mx-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Service Offerings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfairDisplay.className}`}
            >
              Our <span className="text-gradient">Offerings</span>
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-2xl mx-auto ${playfairDisplay.className}`}
            >
              Comprehensive services designed to transform your practice.
            </p>

            {/* Mini Separator */}
            <div className="flex justify-center mt-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-red-200 hover:border-red-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative flex flex-col h-full overflow-hidden"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
                    <service.icon
                      size={32}
                      className="text-red-600 group-hover:text-red-700"
                    />
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`text-xl font-bold text-black mb-3 group-hover:text-red-700 transition-colors duration-300 ${playfairDisplay.className}`}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {service.details}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 transform group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full group-hover:bg-red-700 transition-colors duration-300"></div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg transform group-hover:-translate-y-0.5">
                      Upcoming
                    </button>
                    <button className="flex-1 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg transform group-hover:-translate-y-0.5">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="text-center mb-12">
              <h3
                className={`text-3xl md:text-4xl font-bold text-black mb-4 ${playfairDisplay.className}`}
              >
                Frequently Asked{" "}
                <span className="text-gradient">Questions</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our services and approach.
              </p>

              {/* Mini Separator */}
              <div className="flex justify-center mt-6">
                <div className="w-16 h-0.5 bg-red-500"></div>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-gray-200 hover:border-red-200 transition-colors duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h4
                      className={`font-semibold text-black pr-4 ${playfairDisplay.className}`}
                    >
                      {faq.question}
                    </h4>
                    <div className="flex-shrink-0">
                      {expandedFaq === faq.id ? (
                        <ChevronUp size={20} className="text-red-600" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedFaq === faq.id
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-gray-200 mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="text-center mb-12">
              <h3
                className={`text-3xl md:text-4xl font-bold text-black mb-4 ${playfairDisplay.className}`}
              >
                Why Choose <span className="text-gradient">Metaboard</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We bring together deep legal expertise and cutting-edge
                technology to deliver exceptional results.
              </p>

              {/* Mini Separator */}
              <div className="flex justify-center mt-6">
                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: "Industry Expertise",
                  description:
                    "Deep understanding of legal industry challenges and opportunities with proven track record.",
                },
                {
                  icon: Zap,
                  title: "Cutting-Edge Solutions",
                  description:
                    "Latest technology implementations tailored specifically for legal practice requirements.",
                },
                {
                  icon: Users,
                  title: "Collaborative Approach",
                  description:
                    "We work closely with your team to ensure seamless integration and adoption.",
                },
                {
                  icon: TrendingUp,
                  title: "Proven Results",
                  description:
                    "Track record of successful implementations with measurable ROI and efficiency gains.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300">
                    <item.icon
                      size={32}
                      className="text-red-600 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4
                    className={`font-bold text-black mb-3 ${playfairDisplay.className}`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Separator */}
          <div className="flex justify-center my-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-red-500"></div>
              <div className="w-4 h-4 border-2 border-red-500 rounded-full bg-white"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-red-500"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            id="contact-form"
            className="max-w-6xl mx-auto mt-20 bg-gradient-to-br from-red-25 to-gray-50 rounded-3xl border border-red-100 shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Form Content */}
              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold text-black mb-3 ${playfairDisplay.className}`}
                  >
                    Get In <span className="text-red-600">Touch</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Ready to transform your legal practice? Let's discuss how
                    our innovative solutions can help you achieve your goals.
                  </p>

                  {/* Progress Steps */}
                  <div className="flex items-center gap-4 mt-6">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                            contactStep >= step
                              ? "bg-red-600 text-white"
                              : "bg-gray-200 text-gray-400"
                          }`}
                        >
                          {step}
                        </div>
                        {step < 3 && (
                          <div
                            className={`w-12 h-1 mx-2 transition-all duration-300 ${
                              contactStep > step ? "bg-red-600" : "bg-gray-200"
                            }`}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Separator */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <div className="mx-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                <form className="space-y-6">
                  {/* Step 1: Basic Information */}
                  {contactStep === 1 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800 mb-4">
                        Basic Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-gray-700">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-1 focus:ring-red-400/30 focus:outline-none transition-all duration-300"
                            required
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-gray-700">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-1 focus:ring-red-400/30 focus:outline-none transition-all duration-300"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-700">
                          Company/Firm Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                          className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-1 focus:ring-red-400/30 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium transition-all duration-300"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {contactStep === 2 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800 mb-4">
                        Project Details
                      </h4>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-700">
                          Service Interest *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          title="Select a service"
                          aria-label="Service Interest"
                          className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-1 focus:ring-red-400/30 focus:outline-none transition-all duration-300"
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.slug}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-gray-700">
                            Budget Range
                          </label>
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            title="Select budget range"
                            aria-label="Budget Range"
                            className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-1 focus:ring-red-400/30 focus:outline-none transition-all duration-300"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-25k">Under $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="50k-100k">$50,000 - $100,000</option>
                            <option value="over-100k">Over $100,000</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-gray-700">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            title="Select timeline"
                            aria-label="Project Timeline"
                            className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-1 focus:ring-red-400/30 focus:outline-none transition-all duration-300"
                          >
                            <option value="">Select timeline</option>
                            <option value="immediate">
                              Immediate (1-2 weeks)
                            </option>
                            <option value="short">
                              Short-term (1-3 months)
                            </option>
                            <option value="medium">
                              Medium-term (3-6 months)
                            </option>
                            <option value="long">Long-term (6+ months)</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="border border-gray-300 text-gray-600 hover:bg-gray-50 py-2 px-6 rounded-lg font-medium transition-all duration-300"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-medium transition-all duration-300"
                        >
                          Next Step
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Message & Submit */}
                  {contactStep === 3 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800 mb-4">
                        Additional Information
                      </h4>
                      <div className="space-y-1">
                        <label className="text-xs font-medium text-gray-700">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project requirements, goals, or any specific questions..."
                          rows={4}
                          className="w-full p-3 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-1 focus:ring-red-400/30 focus:outline-none transition-all duration-300 resize-none"
                        ></textarea>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h5 className="font-semibold text-red-800 mb-2">
                          Summary
                        </h5>
                        <div className="text-sm text-red-700 space-y-1">
                          <p>
                            <strong>Name:</strong> {formData.name}
                          </p>
                          <p>
                            <strong>Email:</strong> {formData.email}
                          </p>
                          {formData.company && (
                            <p>
                              <strong>Company:</strong> {formData.company}
                            </p>
                          )}
                          {formData.service && (
                            <p>
                              <strong>Service:</strong>{" "}
                              {
                                services.find(
                                  (s) => s.slug === formData.service
                                )?.title
                              }
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="border border-gray-300 text-gray-600 hover:bg-gray-50 py-2 px-6 rounded-lg font-medium transition-all duration-300"
                        >
                          Previous
                        </button>
                        <button
                          type="submit"
                          className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Right Side - Contact Info */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 lg:p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <h4
                    className={`text-xl font-bold mb-4 ${playfairDisplay.className}`}
                  >
                    Let's Start a Conversation
                  </h4>

                  {/* Contact Info Separator */}
                  <div className="w-12 h-0.5 bg-white/30 mb-6"></div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1 text-sm">Phone</h5>
                        <p className="text-red-100 text-sm">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1 text-sm">Email</h5>
                        <p className="text-red-100 text-sm">
                          hello@metaboard.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium mb-1 text-sm">Address</h5>
                        <p className="text-red-100 text-sm">
                          123 Legal Tech Ave
                          <br />
                          Innovation District, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/20">
                    <p className="text-red-100 text-xs">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Scroll to top"
      >
        <ChevronUp
          size={20}
          className="group-hover:-translate-y-0.5 transition-transform duration-300"
        />
      </button>

      <Footer />
    </div>
  );
};

export default Services;
