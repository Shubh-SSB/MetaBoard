'use client';

import React, { useState } from 'react';
import { Monitor, Users, BookOpen, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { Footer, Header } from '@/components/global';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Services = () => {
    const [expandedService, setExpandedService] = useState<number | null>(null);

    const teamMembers = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "Chief Technology Officer",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23dc2626'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ESC%3C/text%3E%3C/svg%3E",
            bio: "15+ years in legal tech innovation. Former Silicon Valley engineer turned legal technology evangelist."
        },
        {
            id: 2,
            name: "Michael Torres",
            role: "Head of Education",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23000000'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EMT%3C/text%3E%3C/svg%3E",
            bio: "Former law professor with expertise in legal pedagogy and technology integration."
        },
        {
            id: 3,
            name: "Jessica Rodriguez",
            role: "Research Director",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23374151'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EJR%3C/text%3E%3C/svg%3E",
            bio: "Leading researcher in legal ethics and digital privacy with extensive community experience."
        },
        {
            id: 4,
            name: "David Kim",
            role: "Innovation Strategist",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23dc2626'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EDK%3C/text%3E%3C/svg%3E",
            bio: "Serial entrepreneur in the legal tech space with extensive innovation experience."
        }
    ];

    const services = [
        {
            id: 1,
            slug: "legal-technology-consulting",
            icon: Monitor,
            title: "Legal Technology Consulting",
            brief: "Strategic guidance for law firms adopting new technologies",
            status: "Provided",
            details: "Our comprehensive consulting services help law firms navigate the complex landscape of legal technology. We provide strategic planning, vendor selection, implementation support, and change management to ensure successful technology adoption.",
            features: ["Technology Assessment", "Implementation Planning", "Change Management", "ROI Analysis"]
        },
        {
            id: 2,
            slug: "educational-programs",
            icon: BookOpen,
            title: "Educational Programs",
            brief: "Comprehensive training courses for legal professionals",
            status: "Provided",
            details: "Cutting-edge educational programs designed to bridge the gap between traditional legal education and modern practice requirements. Our curriculum covers emerging technologies and practical applications.",
            features: ["AI & Machine Learning", "Digital Ethics", "Blockchain Law", "Legal Research Tools"]
        },
        {
            id: 3,
            slug: "community-building",
            icon: Users,
            title: "Community Building",
            brief: "Networking and collaboration platforms for legal innovators",
            status: "Provided",
            details: "We foster a vibrant community of legal professionals, technologists, and innovators through networking events, online forums, and collaborative projects.",
            features: ["Networking Events", "Mentorship Programs", "Online Forums", "Startup Incubation"]
        },
        {
            id: 4,
            slug: "innovation-labs",
            icon: Zap,
            title: "Innovation Labs",
            brief: "Research and development of next-generation legal tools",
            status: "Upcoming",
            details: "Our innovation labs are at the forefront of legal technology research and development. We work on prototype development and collaborate with industry partners.",
            features: ["Prototype Development", "Research Partnerships", "Technology Testing", "Innovation Workshops"]
        }
    ];

    const toggleService = (serviceId: number) => {
        setExpandedService(expandedService === serviceId ? null : serviceId);
    };

    return (
        <div className="min-h-screen bg-white">
            <Header styles='fixed' showNavLinks />

            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 gradient-mesh"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                   Services
                </h1> */}

                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                                Our <span className="text-red-500">Services</span>
                            </h1>

                            <div className="glass-panel p-8 flex flex-col gap-5 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
                                <p className="text-xl text-gray-300 leading-relaxed">
                                    Empowering your legal tech journey through comprehensive consulting,
                                    education, and innovation services.
                                </p>

                                <div className="w-24 h-1 bg-primary mx-auto"></div>

                                <p className="text-lg text-gray-400 leading-relaxed">
                                    We envision a future where every lawyer and law student has access to the latest
                                    technological innovations, ethical frameworks, and educational resources that define
                                    modern legal practice.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Our <span className="text-gradient">Legal Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Meet the experts driving innovation in legal technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="glass-hover rounded-2xl overflow-hidden bg-white p-8"
                            >
                                <div className="flex items-start gap-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-black mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-red-600 font-semibold mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Our <span className="text-gradient">Technical Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Meet the experts driving innovation in legal technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="glass-hover rounded-2xl overflow-hidden bg-white p-8"
                            >
                                <div className="flex items-start gap-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-black mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-red-600 font-semibold mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                            Our <span className="text-gradient">Offerings</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive services designed to transform your practice.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="glass-hover rounded-2xl overflow-hidden bg-white border border-gray-100 relative"
                            >

                                {/* Service Header */}
                                <div
                                    className="p-6 cursor-pointer pt-12"
                                    onClick={() => toggleService(service.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                                <service.icon size={24} className="text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-black">
                                                    {service.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {service.brief}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <button className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                                                Show Details
                                            </button>
                                            {expandedService === service.id ? (
                                                <ChevronUp size={20} className="text-gray-400" />
                                            ) : (
                                                <ChevronDown size={20} className="text-gray-400" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Expandable Details */}
                                <div className={`transition-all duration-300 overflow-hidden ${expandedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                                        <div className="glass-panel p-6 rounded-xl bg-gray-50">
                                            <p className="text-gray-700 mb-6 leading-relaxed">
                                                {service.details}
                                            </p>

                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                {service.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                        <span className="text-sm font-medium text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex gap-4">
                                                <div
                                                    className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 ripple-effect inline-block text-center"
                                                >
                                                    Upcoming
                                                </div>
                                                <a
                                                    href='#contact-form'
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                                                    }}
                                                    className="border border-red-600 text-red-600 hover:bg-primary hover:text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
                                                >
                                                    Enquire Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div id="contact-form" className="max-w-2xl mx-auto mt-20 p-8 glass-panel rounded-2xl bg-gray-50">
                        <h3 className="text-2xl font-bold text-black mb-6 text-center">Get In Touch</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="glass-input p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-red-600 focus:outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="glass-input p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-red-600 focus:outline-none transition-colors"
                                />
                            </div>
                            <select className="w-full glass-input p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-red-600 focus:outline-none transition-colors">
                                <option value="">Select Service</option>
                                {services.map((service) => (
                                    <option key={service.id} value={service.slug}>
                                        {service.title}
                                    </option>
                                ))}
                            </select>
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full glass-input p-3 rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-red-600 focus:outline-none transition-colors resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 ripple-effect"
                            >
                                Send Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;