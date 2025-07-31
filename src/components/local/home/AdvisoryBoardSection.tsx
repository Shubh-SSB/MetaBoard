'use client';

import React, { useState } from 'react';
import { Scale, GraduationCap, Building } from 'lucide-react';

const AdvisoryBoardSection = () => {
    const [hoveredAdvisor, setHoveredAdvisor] = useState<number | null>(null);

    const advisors = [
        {
            id: 1,
            name: "Hon. Patricia Williams",
            role: "Former Supreme Court Justice",
            icon: Scale,
            bio: "Distinguished jurist with 25+ years on the bench. Leading advocate for judicial technology adoption and digital court proceedings. Instrumental in modernizing court systems nationwide.",
            expertise: "Judicial Technology, Digital Courts"
        },
        {
            id: 2,
            name: "Prof. Dr. Elena Vasquez",
            role: "Dean, Harvard Law School",
            icon: GraduationCap,
            bio: "Renowned legal educator and researcher in AI ethics and law. Pioneered curriculum integration of technology in legal education. Author of 'Digital Jurisprudence in the 21st Century.'",
            expertise: "Legal Education, AI Ethics"
        },
        {
            id: 3,
            name: "James Morrison, Esq.",
            role: "Managing Partner, Morrison & Associates",
            icon: Building,
            bio: "Leading corporate lawyer specializing in technology law and digital transformation. Advises Fortune 500 companies on legal tech adoption. Former General Counsel at three major tech firms.",
            expertise: "Corporate Law, Legal Tech Strategy"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Advisory <span className="text-gradient">Board</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Distinguished leaders guiding our mission to transform legal education and practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {advisors.map((advisor) => (
                        <div
                            key={advisor.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredAdvisor(advisor.id)}
                            onMouseLeave={() => setHoveredAdvisor(null)}
                        >
                            <div className="glass-hover rounded-2xl overflow-hidden bg-white p-8 text-center relative h-full">

                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 transition-colors duration-300">
                                    <advisor.icon size={28} className="text-white" />
                                </div>


                                <h3 className="text-xl font-bold text-black mb-2">
                                    {advisor.name}
                                </h3>
                                <p className="text-red-600 font-semibold mb-4">
                                    {advisor.role}
                                </p>
                                <p className="text-sm text-gray-500 mb-4 font-medium">
                                    {advisor.expertise}
                                </p>


                                <div className={`absolute inset-0 bg-black/90 backdrop-blur-sm rounded-2xl flex items-center justify-center p-6 transition-opacity duration-300 ${hoveredAdvisor === advisor.id
                                    ? 'opacity-100'
                                    : 'opacity-0 pointer-events-none'
                                    }`}>
                                    <div className="text-white text-center">
                                        <h4 className="text-lg font-bold mb-3 text-red-400">
                                            {advisor.name}
                                        </h4>
                                        <p className="text-sm leading-relaxed text-gray-300">
                                            {advisor.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvisoryBoardSection;