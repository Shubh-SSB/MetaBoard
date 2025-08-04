import { FC } from "react";
import { ArrowRight, BookOpen } from 'lucide-react';


const HeroSection: FC = () => {
    return (<>
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 gradient-mesh"></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Welcome to{' '}
                    <span className="text-gradient">Metaboard</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed">
                    Empowering lawyers & students with cutting-edge technology & education.
                    <br />
                    <span className="text-red-400">The technical arm of Scriboard.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ripple-effect flex items-center gap-2">
                        <BookOpen size={20} />
                        Explore Articles
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="glass-hover text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 flex items-center gap-2">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    </>);
}
export default HeroSection;