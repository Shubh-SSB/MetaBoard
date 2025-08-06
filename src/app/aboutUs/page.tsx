"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Monitor,
  Users,
  ArrowRight,
  BookOpen,
  Zap,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Star,
  Cog,
  Lightbulb,
  Award,
  Clock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Header, Footer } from "@/components/global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@/components/ui";
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
    <div className="min-h-screen">
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-gray-900 justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-rose-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div> */}

        <div className="container mx-auto px-6 py-20 my-20 text-gray-900 mb-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="text-center mb-16">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white mb-6 leading-tight">
                Defending Your Rights
                <span className="block my-8 text-red-500">
                  <span className="">We are </span>
                  <span className="text-gradient"> MetaBoard®</span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-gray-600 mx-auto mb-12 leading-relaxed">
                We're transforming how legal professionals work with
                cutting-edge technology, intelligent automation, and innovative
                solutions that drive efficiency and excellence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => {
                    const aboutUs = document.getElementById("aboutUs");
                    if (aboutUs) {
                      aboutUs.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  size="lg"
                  className="shadow-lg"
                >
                  About Us
                </Button>
                <Button
                  onClick={() => {
                    const teamSection = document.getElementById("team");
                    if (teamSection) {
                      teamSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  size="lg"
                  className="bg-transparent hover:text-white text-red-700 border-2 border-red-700 shadow-lg"
                >
                  Meet Our Teams
                </Button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-16">
              <div className="inline-flex flex-col items-center text-gray-400 group cursor-pointer">
                <span className="text-sm font-medium mb-2 group-hover:text-white transition-colors">
                  Know more about us!
                </span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-white transition-colors">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section
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
      </section> */}
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
      {/* about us section */}
      <section id="aboutUs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={"text-4xl md:text-5xl font-bold text-black mb-6 "}>
                About <span className="text-gradient">MetaBoard®</span>
              </h2>
              <div className="flex justify-center mb-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 text-gray-800 font-medium">
                  <span className="text-red-600 font-bold">Metaboard®</span> is
                  a pioneering platform dedicated to enriching minds and
                  fostering expertise in the dynamic realms of law. Specializing
                  in Technology, AI, Intellectual Property, and Data Laws, we
                  stand at the forefront of legal education and innovation.
                </p>

                <p className="mb-6">
                  Our core offering includes comprehensive online educational
                  material and courses, meticulously designed for students,
                  professionals, and government officials. Our platform is more
                  than just an information repository; it's a bridge connecting
                  theory with practical insights.
                </p>

                <p className="mb-6">
                  Beyond online resources,{" "}
                  <span className="text-red-600 font-semibold">Metaboard®</span>{" "}
                  takes pride in delivering bespoke corporate training
                  workshops, tailored to meet the specific needs of various
                  entities. These interactive sessions are conducted offline,
                  providing a hands-on learning experience.
                </p>

                <p className="mb-6">
                  Our audience of learners is diverse and inclusive, ranging
                  from curious students embarking on their legal journey, to
                  seasoned professionals seeking to deepen their expertise, as
                  well as government officials aiming to stay abreast of legal
                  advancements.
                </p>

                <p className="text-lg font-medium text-gray-800">
                  At <span className="text-red-600 font-bold">Metaboard</span>,
                  we believe in empowering each individual with knowledge that's
                  not just comprehensive but also relevant in today's rapidly
                  evolving legal landscape.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen size={28} className="text-red-600" />
                  </div>
                  <h4 className={"font-bold text-black mb-2"}>
                    Educational Excellence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive online courses and materials for legal
                    professionals
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-red-600" />
                  </div>
                  <h4 className={"font-bold text-black mb-2"}>
                    Corporate Training
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Bespoke workshops tailored to specific organizational needs
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Lightbulb size={28} className="text-red-600" />
                  </div>
                  <h4 className={"font-bold text-black mb-2"}>
                    Legal Innovation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Specializing in Technology, AI, IP, and Data Laws
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="mx-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 "></div>
              <div className="w-3 h-3 bg-red-500 "></div>
              <div className="w-2 h-2 bg-red-500 "></div>
            </div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>
      </div>
      {/* who are we? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={"text-4xl md:text-5xl font-bold text-black mb-6 "}>
                Who <span className="text-gradient">We Are</span>
              </h2>
              <div className="flex justify-center mb-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl mb-6 text-gray-800 font-medium">
                  <span className="text-red-600 font-bold">Metaboard®</span> was
                  founded in 2004 by{" "}
                  <span className="text-red-600 font-bold">
                    Mr. Rodney D. Ryder
                  </span>
                  , a distinguished figure in the legal industry with over two
                  decades of experience. Mr. Ryder, known for his profound
                  expertise in technology, intellectual property, and corporate
                  law, has established himself as a leading lawyer in these
                  fields.
                </p>

                <p className="mb-6">
                  His journey includes being a founding partner at Scriboard®, a
                  full-service commercial law firm renowned for its
                  specialization in technology, new media, and intellectual
                  property laws. Mr. Ryder's commitment to law extends beyond
                  practice; he is an acclaimed author, having penned influential
                  books on cyber laws and intellectual property, including his
                  work "Intellectual Property and the Internet," which was
                  acknowledged by the Supreme Court of India.
                </p>

                <p className="mb-6">
                  He has been an advisor to the Ministry of Communications and
                  Information Technology, Government of India, on the
                  implementation of the Information Technology Act, 2000. His
                  achievements and contributions to the legal field have earned
                  him recognition as a 'Leading Lawyer' in intellectual
                  property, technology, communications, and media law by
                  prestigious international publications such as Asia Law, Who's
                  Who Legal, and Asia Legal 500.
                </p>

                <p className="mb-6">
                  The inspiration behind{" "}
                  <span className="text-red-600 font-semibold">Metaboard®</span>{" "}
                  stems from Mr. Ryder's ambition to bridge the gap in legal
                  education, particularly in technology and intellectual
                  property law. His vision is to democratize access to
                  high-quality legal education, making it more affordable and
                  accessible.
                </p>

                <p className="text-lg font-medium text-gray-800">
                  With{" "}
                  <span className="text-red-600 font-bold">Metaboard®</span>,
                  Mr. Ryder brings his wealth of knowledge and experience to the
                  forefront, offering a platform that nurtures and empowers
                  budding legal minds, professionals, and government officials
                  in their quest for excellence in the legal domain.
                </p>
              </div>

              {/* Key Milestones */}
              <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-red-600 font-bold text-lg">2004</div>
                  </div>
                  <h4 className={"font-bold text-black mb-2"}>Founded in</h4>
                  <p className="text-gray-600 text-sm">
                    Established to bridge the gap in legal education
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-red-600" />
                  </div>
                  <h4 className={"font-bold text-black mb-2"}>
                    Mr. Rodney D. Ryder
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Founded by distinguished legal expert with 20+ years
                    experience
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award size={28} className="text-red-600" />
                  </div>
                  <h4 className={"font-bold text-black mb-2"}>
                    Supreme Court of India
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Work acknowledged by the highest court of India
                  </p>
                </div>
              </div>
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
              <div className="w-5 h-2 bg-red-500 rounded-xl"></div>
              <div className="w-7 h-3 bg-red-500 rounded-lg"></div>
              <div className="w-5 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
        </div>
      </div>

      {/* Team Profiles */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={"text-4xl md:text-5xl font-bold text-black mb-4"}>
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
              <h3 className={"text-4xl md:text-5xl font-bold text-black mb-4"}>
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
                          <h3 className={"text-lg font-bold mb-2"}>
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
                            className={"text-base font-bold text-red-600 mb-1"}
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
              <h3 className={"text-4xl md:5xl font-bold text-black mb-4"}>
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
                          <h3 className={"text-lg font-bold mb-2"}>
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
                            className={"text-base font-bold text-blue-600 mb-1"}
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

      {/* vision and mission section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={"text-4xl md:text-5xl font-bold text-black mb-6 "}>
                Our Mission & <span className="text-gradient">Vision</span>
              </h2>
              <div className="flex justify-center mb-8">
                <div className="w-20 h-0.5 bg-gradient-to-r from-red-400 to-red-600"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  {/* <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mr-4">
                    <Award size={32} className="text-red-600" />
                  </div> */}
                  <h3 className={"text-2xl md:text-3xl font-bold text-black"}>
                    Our Mission
                  </h3>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    At{" "}
                    <span className="text-red-600 font-semibold">
                      Metaboard®
                    </span>
                    , our mission is to redefine the landscape of legal
                    education. We are committed to providing quality legal
                    education that is not just comprehensive but also practical
                    and accessible. Our focus extends beyond imparting
                    knowledge; we aim to equip every learner, irrespective of
                    their background or career stage, with the skills and
                    confidence needed to excel in the legal field.
                  </p>

                  <p className="text-gray-800 font-medium">
                    Central to our mission is the belief that quality education
                    in law should be a right, not a privilege. We strive to
                    remove barriers to legal education, making it more
                    affordable and reachable. Our courses are designed to be
                    flexible and relevant, ensuring that learning is not
                    confined to textbooks but extends to real-world
                    applications. By fostering an environment of continuous
                    learning and professional development,{" "}
                    <span className="text-red-600 font-semibold">
                      Metaboard®
                    </span>{" "}
                    aims to empower a new generation of legal professionals who
                    are ready to tackle the challenges of the modern legal
                    landscape.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  {/* <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mr-4">
                    <TrendingUp size={32} className="text-blue-600" />
                  </div> */}
                  <h3 className={"text-2xl md:text-3xl font-bold text-black"}>
                    Our Vision
                  </h3>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Our vision at{" "}
                    <span className="text-red-600 font-semibold">
                      Metaboard®
                    </span>{" "}
                    is to become a beacon of legal education globally. We aspire
                    to create a world where every aspiring legal professional,
                    student, or government official has access to the highest
                    quality of legal education and training. Our goal is to not
                    just educate but to inspire and empower our learners to
                    become leaders and innovators in the field of law.
                  </p>

                  <p className="text-gray-800 font-medium">
                    Looking to the future, we envision{" "}
                    <span className="text-red-600 font-semibold">
                      Metaboard®
                    </span>{" "}
                    as a platform where the boundaries of traditional legal
                    education are pushed, and new ways of thinking are fostered.
                    We aim to continuously evolve with the ever-changing legal
                    landscape, incorporating the latest advancements in
                    technology and law. Our vision is to cultivate a global
                    community of learners and professionals who are not only
                    well-versed in legal theory but are also adept at applying
                    their knowledge in practical, impactful ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 to-red-600">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={"text-4xl md:text-5xl font-bold text-white mb-6"}>
              Want to connect to us?
            </h2>
            <p className="text-red-100 text-xl mb-8 leading-relaxed">
              Join hundreds of successful companies who have partnered with us
              to achieve digital excellence. Let's discuss how we can help you
              reach your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact#contact-form"
                className="bg-white text-red-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
              >
                <Users size={20} />
                Contact Us
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Cog size={20} />
                Know about our services
              </Link>
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
    </div>
  );
};

export default AboutUs;
