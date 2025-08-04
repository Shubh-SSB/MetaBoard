import React from 'react';

const OurVisionSection = () => {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Our <span className="text-red-500">Vision</span>
                    </h2>

                    <div className="glass-panel p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                            To bridge the gap between traditional legal practice and cutting-edge technology,
                            empowering the next generation of legal professionals with the tools, knowledge,
                            and community they need to thrive in an increasingly digital world.
                        </p>

                        <div className="w-24 h-1 bg-primary mx-auto"></div>

                        <p className="text-lg text-gray-400 mt-6 leading-relaxed">
                            We envision a future where every lawyer and law student has access to the latest
                            technological innovations, ethical frameworks, and educational resources that define
                            modern legal practice.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-20 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        </section>
    );
};

export default OurVisionSection;