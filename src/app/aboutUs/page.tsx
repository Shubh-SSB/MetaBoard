"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Monitor,
  Users,
  BookOpen,
  Zap,
  ArrowLeft,
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
import { Header, Footer } from "@/components/global";
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

const AboutUs = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
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
  const counterRef = useRef<HTMLDivElement>(null);

  const fullText = "About Metaboard";

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

  const teamMembers = {
    technical: [
      {
        id: 1,
        name: "Michael Chen",
        role: "Chief Technology Officer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        bio: "Tech innovator with expertise in AI, cloud architecture, and scalable systems. Previously led engineering teams at major tech companies including Google and Microsoft.",
        linkedin: "#",
        twitter: "#",
      },
      {
        id: 2,
        name: "Emily Rodriguez",
        role: "Head of Design & UX",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
        bio: "Award-winning designer specializing in user-centered design and digital experiences. Advocates for accessible and inclusive design practices with 10+ years experience.",
        linkedin: "#",
        twitter: "#",
      },
      {
        id: 3,
        name: "Alex Kumar",
        role: "Lead Data Scientist",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
        bio: "Data science expert with focus on machine learning, analytics, and AI-driven insights. Transforms complex data into actionable business intelligence.",
        linkedin: "#",
        twitter: "#",
      },
      {
        id: 4,
        name: "James Wilson",
        role: "Senior Full-Stack Developer",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
        bio: "Expert full-stack developer with 8+ years experience in React, Node.js, and cloud technologies. Passionate about building scalable, high-performance applications.",
        linkedin: "#",
        twitter: "#",
      },
    ],
    legal: [
      {
        id: 5,
        name: "Sarah Mitchell",
        role: "Founder & CEO",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
        bio: "Visionary leader with 15+ years in digital transformation and legal technology. Former Fortune 500 executive turned entrepreneur, passionate about bridging law and technology.",
        linkedin: "#",
        twitter: "#",
      },
      {
        id: 6,
        name: "David Thompson",
        role: "VP of Business Development",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
        bio: "Strategic partnership expert with deep understanding of legal industry requirements. Proven track record in scaling legal tech businesses and building lasting client relationships.",
        linkedin: "#",
        twitter: "#",
      },
      {
        id: 7,
        name: "Lisa Wang",
        role: "Legal Technology Consultant",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
        bio: "Former practicing attorney turned legal tech specialist. Expert in compliance, legal process optimization, and technology adoption in legal practices.",
        linkedin: "#",
        twitter: "#",
      },
      {
        id: 8,
        name: "Robert Martinez",
        role: "Head of Legal Operations",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
        bio: "Legal operations expert with 12+ years in process improvement, legal project management, and technology implementation for law firms and corporate legal departments.",
        linkedin: "#",
        twitter: "#",
      },
    ],
  };

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description:
        "Started as a small team of passionate developers with a vision to transform businesses through technology.",
    },
    {
      year: "2012",
      title: "First Major Client",
      description:
        "Secured our first enterprise client, establishing our reputation for delivering exceptional digital solutions.",
    },
    {
      year: "2015",
      title: "Team Expansion",
      description:
        "Grew to 25+ professionals and expanded our service offerings to include comprehensive digital transformation.",
    },
    {
      year: "2018",
      title: "Global Recognition",
      description:
        "Received industry awards for innovation and was recognized as a top digital transformation partner.",
    },
    {
      year: "2021",
      title: "100+ Successful Projects",
      description:
        "Milestone achievement of 100+ successful project deliveries across various industries.",
    },
    {
      year: "2024",
      title: "AI Innovation Lab",
      description:
        "Launched dedicated AI research lab to explore cutting-edge solutions for future business challenges.",
    },
  ];

  const coreValues = [
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success drives everything we do. We prioritize understanding unique needs and exceeding expectations.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We embrace emerging technologies and creative approaches to solve complex challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in code quality, design, and client service.",
    },
    {
      icon: BookOpen,
      title: "Growth",
      description:
        "Continuous learning and adaptation keep us at the forefront of technology trends.",
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description:
        "We measure success by the positive impact we create for our clients and communities.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Consistent delivery and dependable partnerships built on trust and transparency.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Adams",
      role: "CEO",
      company: "TechStart Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "Metaboard's innovative approach transformed our digital presence completely. Their team delivered exceptional results that exceeded our expectations and drove remarkable growth.",
      rating: 5,
    },
    {
      id: 2,
      name: "Robert Kim",
      role: "Operations Director",
      company: "Global Dynamics Inc",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Working with Metaboard was a game-changer. Their expertise in digital transformation and strategic insights helped us scale efficiently and stay ahead of the competition.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maria Gonzalez",
      role: "Marketing VP",
      company: "Innovation Hub",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "The collaborative approach and attention to detail from the Metaboard team is unmatched. They truly understand business needs and deliver solutions that make a real impact.",
      rating: 5,
    },
  ];

  const stats = [
    { label: "Happy Clients", value: "clients", icon: Users, suffix: "+" },
    {
      label: "Projects Delivered",
      value: "projects",
      icon: Award,
      suffix: "+",
    },
    { label: "Years of Excellence", value: "years", icon: Clock, suffix: "" },
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
      question: "What makes Metaboard different from other digital agencies?",
      answer:
        "We combine deep technical expertise with strategic business insights to deliver comprehensive digital solutions. Our team's diverse backgrounds and collaborative approach ensure that every project is tailored to your unique needs and goals.",
    },
    {
      id: 2,
      question: "How do you ensure the quality of your deliverables?",
      answer:
        "Quality is at the core of everything we do. We follow rigorous testing protocols, maintain comprehensive documentation, and implement continuous feedback loops with our clients throughout the project lifecycle to ensure exceptional results.",
    },
    {
      id: 3,
      question: "Do you work with companies of all sizes?",
      answer:
        "Absolutely! We've successfully partnered with startups, mid-sized businesses, and enterprise organizations. Our scalable approach and flexible service offerings allow us to adapt to the unique needs and budget requirements of each client.",
    },
    {
      id: 4,
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. Simple projects may take 2-4 weeks, while comprehensive digital transformations can span 3-6 months. We provide detailed project timelines and milestone tracking during our initial consultation.",
    },
    {
      id: 5,
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and optimization services. We believe in long-term partnerships and are committed to your continued success.",
    },
    {
      id: 6,
      question: "What technologies do you specialize in?",
      answer:
        "Our technical team specializes in modern web technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure, GCP), and emerging technologies like AI/ML integration. We stay current with industry trends to provide cutting-edge solutions.",
    },
  ];

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

  return (
    <div className={`min-h-screen bg-white ${raleway.className}`}>
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
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen py-60 bg-black text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 gradient-mesh"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-red-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-40 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
        </div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className={`text-5xl md:text-6xl font-bold mb-8 text-white ${playfairDisplay.className}`}
            >
              <span className={`text-red-500 font-raleway font-normal`}>
                {typewriterText}
                {showCursor && <span className="animate-pulse">|</span>}
              </span>
            </h1>

            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl mb-12">
              <p
                className={`text-xl text-gray-200 leading-relaxed ${playfairDisplay.className}`}
              >
                Pioneering digital transformation through innovative solutions,
                expert guidance, and exceptional client partnerships since 2009.
              </p>
            </div>

            <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>

            <div className="max-w-5xl mx-auto">
              <p
                className={`text-lg md:text-xl text-gray-300 leading-relaxed ${playfairDisplay.className}`}
              >
                We believe in the power of technology to transform businesses
                and create meaningful impact. Our journey began with a simple
                mission: to bridge the gap between cutting-edge technology and
                business success.
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
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

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-bold text-black mb-6 ${playfairDisplay.className}`}
              >
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded in 2009, Metaboard began as a vision to bridge the gap
                  between cutting-edge technology and business innovation. What
                  started as a small team of passionate developers and
                  strategists has evolved into a comprehensive digital
                  transformation partner.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we're proud to have helped hundreds of organizations
                  across various industries achieve their digital goals through
                  strategic consulting, innovative solutions, and unwavering
                  commitment to excellence.
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-red-500 to-red-300"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="text-red-600 font-bold text-xl mb-2">
                          {milestone.year}
                        </div>
                        <h3
                          className={`font-bold text-black mb-3 ${playfairDisplay.className}`}
                        >
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <Award size={32} className="text-red-600" />
                </div>
                <h3
                  className={`text-2xl font-bold text-black mb-4 ${playfairDisplay.className}`}
                >
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses through innovative digital solutions
                  that drive growth, efficiency, and competitive advantage.
                  We're committed to delivering exceptional value while
                  fostering long-term partnerships built on trust and
                  excellence.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-red-600" />
                </div>
                <h3
                  className={`text-2xl font-bold text-black mb-4 ${playfairDisplay.className}`}
                >
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading catalyst for digital transformation, setting
                  new standards for innovation and client success. We envision a
                  future where technology seamlessly enhances human potential
                  and business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className={`text-4xl md:text-5xl font-bold text-black mb-6 ${playfairDisplay.className}`}
              >
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                These core principles guide everything we do and define who we
                are as a company.
              </p>
              <div className="flex justify-center">
                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300">
                    <value.icon
                      size={28}
                      className="text-red-600 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4
                    className={`font-bold text-black mb-3 ${playfairDisplay.className}`}
                  >
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}

      <div className="py-8 bg-gray-50">
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
              Meet the experts driving innovation in digital transformation and
              legal technology.
            </p>

            {/* Mini Separator */}
            <div className="flex justify-center mt-8">
              <div className="w-16 h-0.5 bg-red-500"></div>
            </div>
          </div>

          {/* Technical Team */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3
                className={`text-3xl font-bold text-black mb-4 ${playfairDisplay.className}`}
              >
                Technical <span className="text-gradient">Team</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our technology experts who bring your digital vision to life.
              </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-tech",
                  prevEl: ".swiper-button-prev-tech",
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
                {teamMembers.technical.map((member) => (
                  <SwiperSlide key={member.id}>
                    <div
                      className="relative rounded-2xl shadow-sm border-1 border-red-600 hover:shadow-md transition-all duration-300 h-80 overflow-hidden max-w-72 mx-auto group bg-cover bg-center"
                      // eslint-disable-next-line react/forbid-dom-props
                      style={{ backgroundImage: `url(${member.image})` }}
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
                          <p className="text-sm leading-relaxed">
                            {member.bio}
                          </p>
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons for Technical Team */}
              <button
                className="swiper-button-prev-tech absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all duration-300"
                aria-label="Previous technical team member"
                title="Previous technical team member"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="swiper-button-next-tech absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 hover:shadow-xl transition-all duration-300"
                aria-label="Next technical team member"
                title="Next technical team member"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Legal Team */}
          <div>
            <div className="text-center mb-12">
              <h3
                className={`text-3xl font-bold text-black mb-4 ${playfairDisplay.className}`}
              >
                Legal <span className="text-gradient">Team</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Legal experts who understand the intersection of law and
                technology.
              </p>
            </div>

            <div className="relative max-w-7xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-legal",
                  prevEl: ".swiper-button-prev-legal",
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                }}
                autoplay={{
                  delay: 5500,
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
                {teamMembers.legal.map((member) => (
                  <SwiperSlide key={member.id}>
                    <div
                      className="relative rounded-2xl shadow-sm border-1 border-blue-600 hover:shadow-md transition-all duration-300 h-80 overflow-hidden max-w-72 mx-auto group bg-cover bg-center"
                      // eslint-disable-next-line react/forbid-dom-props
                      style={{ backgroundImage: `url(${member.image})` }}
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
                          <p className="text-sm leading-relaxed">
                            {member.bio}
                          </p>
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
                      <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-1 border-blue-600 mx-2 mb-2 p-2 rounded-lg group-hover:opacity-0 transition-opacity duration-300">
                        <div className="text-center">
                          <h3
                            className={`text-base font-bold text-blue-600 mb-1 ${playfairDisplay.className}`}
                          >
                            {member.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons for Legal Team */}
              <button
                className="swiper-button-prev-legal absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
                aria-label="Previous legal team member"
                title="Previous legal team member"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="swiper-button-next-legal absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
                aria-label="Next legal team member"
                title="Next legal team member"
              >
                <ChevronRight size={24} />
              </button>
            </div>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfairDisplay.className}`}
            >
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-2xl mx-auto ${playfairDisplay.className}`}
            >
              Discover how we've helped businesses transform their operations
              and achieve their goals.
            </p>

            {/* Mini Separator */}
            <div className="flex justify-center mt-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-red-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-1"
                      >
                        <polygon points="12,2 15,8.5 22,9.3 17,14 18.5,21 12,17.8 5.5,21 7,14 2,9.3 9,8.5" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-2xl text-red-500/30 group-hover:text-red-500/50 transition-colors duration-300">
                    "
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {testimonial.content}
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4">
                    <Users size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-black ${playfairDisplay.className}`}
                    >
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className={`text-4xl md:text-5xl font-bold text-black mb-4 ${playfairDisplay.className}`}
              >
                Frequently Asked{" "}
                <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our company and services.
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
                  className="bg-gray-50 rounded-xl border border-gray-200 hover:border-red-200 transition-colors duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
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
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-red-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className={`text-4xl md:text-5xl font-bold text-white mb-6 ${playfairDisplay.className}`}
            >
              Ready to Transform Your Business?
            </h2>
            <p className="text-red-100 text-xl mb-8 leading-relaxed">
              Join hundreds of successful companies who have partnered with us
              to achieve digital excellence. Let's discuss how we can help you
              reach your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-red-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                <Users size={20} />
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2">
                <BookOpen size={20} />
                View Our Portfolio
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-red-400/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-red-100 text-sm">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-red-100 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-red-100 text-sm">Happy Clients</div>
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

export default AboutUs;
