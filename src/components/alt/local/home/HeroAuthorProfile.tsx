"use client";

import Image from "next/image";
import { AuthorProfile } from "./index";

const HeroAuthorProfile = () => {
  return (
    <>
      {/* Hero Section with About Founder */}
      <section className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col">
          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-6">
                  {/* Quote Section */}
                  <div className="space-y-6">
                    <blockquote className="text-3xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
                      <span className="text-6xl text-red-500/30">"</span>
                      <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                        Innovation distinguishes between a leader and a follower
                      </span>
                      <span className="text-6xl text-red-500/30">"</span>
                    </blockquote>

                    <cite className="block text-lg text-gray-400 not-italic">
                      — Steve Jobs
                    </cite>
                  </div>

                  {/* About Section */}
                  <div className="bg-gradient-to-r from-white/5 via-white/3 to-transparent backdrop-blur-sm rounded-2xl p-6 border-l border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      About the Founder
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      A visionary leader with over 15 years of experience in
                      transforming traditional industries through innovative
                      technology solutions. Passionate about bridging the gap
                      between cutting-edge innovation and practical business
                      applications, our founder has dedicated their career to
                      creating meaningful impact in the professional services
                      sector.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Founder Image */}
              <div className="flex justify-center lg:justify-center lg:-ml-8">
                <div className="relative">
                  <div className="relative">
                    <Image
                      src="/assets/images/founder.png"
                      alt="Founder Photo"
                      width={1000}
                      height={1000}
                      className="w-72 h-96 object-cover relative z-10"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-64 bg-slate-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pb-8 flex justify-center">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-white/70 text-sm font-medium">
                Discover More
              </span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Profile Section */}
      <div className="py-8">
        <AuthorProfile />
      </div>
    </>
  );
};

export default HeroAuthorProfile;
