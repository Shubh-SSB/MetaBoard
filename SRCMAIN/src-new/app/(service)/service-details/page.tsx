'use client';

import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Mail, Phone} from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/global';

const ServiceDetail = () => {
//   const { serviceSlug } = useParams();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);


  const services = {
    'legal-technology-consulting': {
      title: "Legal Technology Consulting",
      tagline: "Transforming legal practices through strategic technology adoption",
      heroImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      team: [
        {
          name: "Sarah Chen",
          role: "Chief Technology Officer",
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23dc2626'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ESC%3C/text%3E%3C/svg%3E",
          bio: "15+ years in legal tech innovation. Former Silicon Valley engineer turned legal technology evangelist."
        },
        {
          name: "Michael Torres",
          role: "Implementation Specialist",
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23000000'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EMT%3C/text%3E%3C/svg%3E",
          bio: "Specialized in change management and technology adoption strategies for law firms."
        }
      ],
      sections: [
        {
          id: 'what-we-offer',
          title: 'What We Offer',
          content: 'Our comprehensive consulting services help law firms navigate the complex landscape of legal technology. We provide strategic planning, vendor selection, implementation support, and change management to ensure successful technology adoption.',
          features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support', 'Change Management', 'ROI Analysis']
        },
        {
          id: 'key-benefits',
          title: 'Key Benefits',
          content: 'Transform your legal practice with measurable improvements in efficiency, client satisfaction, and competitive advantage through strategic technology adoption.',
          features: ['Increased Efficiency', 'Cost Reduction', 'Improved Client Service', 'Competitive Advantage', 'Risk Mitigation', 'Future-Ready Practice']
        },
        {
          id: 'process-overview',
          title: 'Process Overview',
          content: 'Our proven methodology ensures successful technology transformation through a structured, collaborative approach tailored to your firm\'s unique needs.',
          features: ['Initial Assessment', 'Strategy Development', 'Solution Design', 'Implementation Planning', 'Deployment & Training', 'Ongoing Support']
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    'educational-programs': {
      title: "Educational Programs",
      tagline: "Bridging the gap between traditional legal education and modern practice",
      heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      team: [
        {
          name: "Michael Torres", 
          role: "Head of Education",
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23000000'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EMT%3C/text%3E%3C/svg%3E",
          bio: "Former law professor with expertise in legal pedagogy and technology integration."
        },
        {
          name: "Jessica Rodriguez",
          role: "Curriculum Director", 
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23374151'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EJR%3C/text%3E%3C/svg%3E",
          bio: "Leading researcher in legal ethics and digital privacy with curriculum development expertise."
        }
      ],
      sections: [
        {
          id: 'what-we-offer',
          title: 'What We Offer',
          content: 'Cutting-edge educational programs designed to bridge the gap between traditional legal education and modern practice requirements. Our curriculum covers AI in law, digital ethics, blockchain applications, and emerging technologies.',
          features: ['AI & Machine Learning in Law', 'Digital Ethics', 'Blockchain Applications', 'Legal Research Tools', 'Online Learning Platform', 'Certification Programs']
        },
        {
          id: 'key-benefits', 
          title: 'Key Benefits',
          content: 'Stay ahead of the curve with comprehensive training that prepares legal professionals for the digital transformation of the legal industry.',
          features: ['Industry-Relevant Skills', 'Flexible Learning Options', 'Expert Instructors', 'Practical Applications', 'Networking Opportunities', 'Continuing Education Credits']
        },
        {
          id: 'process-overview',
          title: 'Process Overview',
          content: 'Our structured learning approach combines theoretical knowledge with practical application through interactive sessions and real-world case studies.',
          features: ['Assessment & Placement', 'Core Curriculum', 'Hands-on Workshops', 'Case Study Analysis', 'Peer Collaboration', 'Final Certification']
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    'community-building': {
      title: "Community Building",
      tagline: "Fostering collaboration and innovation in the legal tech ecosystem",
      heroImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      team: [
        {
          name: "Jessica Rodriguez",
          role: "Community Director",
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23374151'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EJR%3C/text%3E%3C/svg%3E",
          bio: "Expert in building and nurturing professional communities in the legal tech space."
        },
        {
          name: "David Kim",
          role: "Innovation Strategist",
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23dc2626'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EDK%3C/text%3E%3C/svg%3E",
          bio: "Serial entrepreneur in the legal tech space with extensive networking experience."
        }
      ],
      sections: [
        {
          id: 'what-we-offer',
          title: 'What We Offer',
          content: 'We foster a vibrant community of legal professionals, technologists, and innovators through networking events, online forums, and collaborative projects. Our community initiatives include mentorship programs and startup incubators.',
          features: ['Networking Events', 'Online Forums', 'Mentorship Programs', 'Startup Incubation', 'Industry Partnerships', 'Knowledge Sharing']
        },
        {
          id: 'key-benefits',
          title: 'Key Benefits', 
          content: 'Join a thriving ecosystem of legal tech professionals and gain access to exclusive opportunities, insights, and collaborations that drive innovation.',
          features: ['Professional Network', 'Knowledge Exchange', 'Business Opportunities', 'Mentorship Access', 'Industry Insights', 'Collaborative Projects']
        },
        {
          id: 'process-overview',
          title: 'Process Overview',
          content: 'Our community engagement model focuses on meaningful connections and value creation through structured events and ongoing collaboration opportunities.',
          features: ['Community Onboarding', 'Interest Matching', 'Event Participation', 'Project Collaboration', 'Mentorship Pairing', 'Ongoing Engagement']
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    },
    'innovation-labs': {
      title: "Innovation Labs",
      tagline: "Pioneering the future of legal technology through research and development",
      heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      team: [
        {
          name: "David Kim",
          role: "Innovation Director",
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23dc2626'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3EDK%3C/text%3E%3C/svg%3E",
          bio: "Serial entrepreneur leading next-generation legal technology development."
        },
        {
          name: "Sarah Chen", 
          role: "Research Lead",
          image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23dc2626'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3ESC%3C/text%3E%3C/svg%3E",
          bio: "Technology innovation expert with deep expertise in AI applications for legal practice."
        }
      ],
      sections: [
        {
          id: 'what-we-offer',
          title: 'What We Offer',
          content: 'Our innovation labs are at the forefront of legal technology research and development. We work on prototype development, conduct feasibility studies, and collaborate with academic institutions and industry partners.',
          features: ['Prototype Development', 'Feasibility Studies', 'Research Partnerships', 'Technology Testing', 'Innovation Workshops', 'Future Trends Analysis']
        },
        {
          id: 'key-benefits',
          title: 'Key Benefits',
          content: 'Get early access to cutting-edge legal technologies and participate in shaping the future of legal practice through collaborative innovation.',
          features: ['Early Technology Access', 'Innovation Partnerships', 'Research Collaboration', 'Future-Ready Solutions', 'Competitive Advantage', 'Industry Leadership']
        },
        {
          id: 'process-overview',
          title: 'Process Overview',
          content: 'Our innovation process follows a systematic approach from ideation to implementation, ensuring practical and scalable solutions for the legal industry.',
          features: ['Ideation Sessions', 'Concept Development', 'Prototype Building', 'Testing & Validation', 'Partner Collaboration', 'Market Implementation']
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      ]
    }
  };

  const service =services['community-building'];

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        {/* <Header /> */}
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Service Not Found</h1>
          <Link href="/services" className="text-red-600 hover:text-red-700">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      
      {/* Breadcrumb */}
  

      {/* Hero Panel */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 font-serif">
              {service.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* About the Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert professionals dedicated to delivering exceptional {service.title.toLowerCase()} services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.team.map((member, index) => (
              <div
                key={index}
                className="group glass-hover rounded-2xl overflow-hidden bg-white p-8 relative"
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
                
                {/* Glass morph overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-black/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Service <span className="text-gradient">Details</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {service.sections.map((section) => (
              <div
                key={section.id}
                className="glass-hover rounded-2xl overflow-hidden bg-white border border-gray-100"
              >
                <div 
                  className="p-6 cursor-pointer border-l-4 border-red-600"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-black">
                      {section.title}
                    </h3>
                    
                    {expandedSection === section.id ? (
                      <ChevronUp size={20} className="text-gray-400" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-400" />
                    )}
                  </div>
                </div>

                <div className={`transition-all duration-300 overflow-hidden ${
                  expandedSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                    <div className="glass-panel p-6 rounded-xl bg-gray-50">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {section.content}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {section.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 ripple-effect"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Work in <span className="text-gradient">Action</span>
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-200">
            {service.gallery.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass-hover rounded-2xl overflow-hidden border-2 border-red-600/20"
                style={{ minWidth: '300px', height: '200px' }}
              >
                <img
                  src={image}
                  alt={`${service.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs & Contact */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Get <span className="text-red-500">Started?</span>
              </h2>
              <p className="text-xl text-gray-300">
                Let's discuss how our {service.title.toLowerCase()} can transform your practice.
              </p>
            </div>

            <div id="contact-form" className="max-w-2xl mx-auto p-8 glass-panel rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Contact Our Team</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="glass-input p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:border-red-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="glass-input p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:border-red-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <input
                  type="text"
                  placeholder="Company/Organization"
                  className="w-full glass-input p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:border-red-500 focus:outline-none transition-colors"
                />
                
                <textarea
                  placeholder="Tell us about your project and requirements..."
                  rows={4}
                  className="w-full glass-input p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 focus:border-red-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 ripple-effect text-lg"
                >
                  Send Enquiry
                </button>
              </form>

              <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail size={20} />
                  <span>hello@metaboard.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;