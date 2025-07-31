import React from 'react';
import { ExternalLink, FileText, Users, BookOpen, Gavel } from 'lucide-react';

const UsefulLinksSection = () => {
    const linkCategories = [
        {
            title: "Resources",
            links: [
                { name: "Legal Tech Directory", href: "#", icon: FileText },
                { name: "Case Law Database", href: "#", icon: Gavel },
                { name: "Research Publications", href: "#", icon: BookOpen }
            ]
        },
        {
            title: "Community",
            links: [
                { name: "Member Portal", href: "#", icon: Users },
                { name: "Discussion Forums", href: "#", icon: Users },
                { name: "Networking Events", href: "#", icon: Users }
            ]
        },
        {
            title: "External Partners",
            links: [
                { name: "Scriboard", href: "#", icon: ExternalLink },
                { name: "Legal Innovation Lab", href: "#", icon: ExternalLink },
                { name: "Bar Association", href: "#", icon: ExternalLink }
            ]
        }
    ];

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Useful <span className="text-red-500">Links</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Essential resources and connections for the modern legal professional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {linkCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-6">
                            <h3 className="text-xl font-bold text-red-400 mb-4">
                                {category.title}
                            </h3>

                            <div className="space-y-3">
                                {category.links.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.href}
                                        className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                                    >
                                        <link.icon size={18} className="text-red-500 group-hover:text-red-400 transition-colors" />
                                        <span className="relative">
                                            {link.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsefulLinksSection;