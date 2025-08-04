"use client";

import React, { useState } from "react";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Header, Footer } from "@/components/global";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

// Form data interface
interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

// Services data
const services = [
  {
    id: 1,
    title: "Legal Document Automation",
    slug: "legal-document-automation",
  },
  { id: 2, title: "Contract Analysis", slug: "contract-analysis" },
  { id: 3, title: "Legal Research Platform", slug: "legal-research-platform" },
  { id: 4, title: "Compliance Management", slug: "compliance-management" },
  { id: 5, title: "Case Management System", slug: "case-management-system" },
  { id: 6, title: "Custom Legal Solutions", slug: "custom-legal-solutions" },
];

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-rose-100">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-rose-600/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-5xl md:text-6xl text-gray-900 mb-6">
                Contact
                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  {" "}
                  Us
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to transform your legal practice? Get in touch with our
                team to discuss how Metaboard® can help streamline your legal
                operations with cutting-edge technology solutions.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-red-100">
                <p className="text-sm text-gray-700">
                  We're here to help you navigate the future of legal
                  technology. Reach out to us for consultations, support, or to
                  learn more about our services.
                </p>
                <div className="mt-3 flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-gray-600">
                    Email us at: hello@metaboard.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-12">
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
                </div>

                {/* Form Separator */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-gray-200"></div>
                  <div className="mx-4">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 border-t border-gray-200"></div>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Basic Information Section */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      Basic Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Company/Firm Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company or firm name"
                        className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Project Details Section */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      Project Details
                    </h4>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Service Interest *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        title="Select a service"
                        aria-label="Service Interest"
                        className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          title="Select budget range"
                          aria-label="Budget Range"
                          className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-25k">Under $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="over-100k">Over $100,000</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          title="Select timeline"
                          aria-label="Project Timeline"
                          className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">
                            Immediate (1-2 weeks)
                          </option>
                          <option value="short">Short-term (1-3 months)</option>
                          <option value="medium">
                            Medium-term (3-6 months)
                          </option>
                          <option value="long">Long-term (6+ months)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                      Additional Information
                    </h4>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements, goals, or any specific questions..."
                        rows={6}
                        className="w-full p-4 rounded-lg border border-gray-200 bg-white focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none transition-all duration-300 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Summary Section */}
                  {(formData.name ||
                    formData.email ||
                    formData.company ||
                    formData.service) && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h5 className="text-lg font-semibold text-red-800 mb-4">
                        Form Summary
                      </h5>
                      <div className="text-sm text-red-700 space-y-2">
                        {formData.name && (
                          <p>
                            <strong>Name:</strong> {formData.name}
                          </p>
                        )}
                        {formData.email && (
                          <p>
                            <strong>Email:</strong> {formData.email}
                          </p>
                        )}
                        {formData.company && (
                          <p>
                            <strong>Company:</strong> {formData.company}
                          </p>
                        )}
                        {formData.service && (
                          <p>
                            <strong>Service:</strong>{" "}
                            {
                              services.find((s) => s.slug === formData.service)
                                ?.title
                            }
                          </p>
                        )}
                        {formData.budget && (
                          <p>
                            <strong>Budget:</strong> {formData.budget}
                          </p>
                        )}
                        {formData.timeline && (
                          <p>
                            <strong>Timeline:</strong> {formData.timeline}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Send Message
                    </button>
                  </div>
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
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
