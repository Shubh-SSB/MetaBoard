"use client";

import { AltHeader, HeroSection } from "@/components/alt/global";
import {
  AuthorProfile,
  BrowseByTagSection,
  LatestArticlesSection,
  PublicationSection,
  RelatedPosts,
} from "@/components/alt/local/home";
import HeroAuthorProfile from "@/components/alt/local/home/HeroAuthorProfile";
import { Button } from "@/components/alt/ui";
import { Footer, Header } from "@/components/global";
import { BookOpen, Briefcase, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";

const MetaRule = () => {
  return (
    <>
      <div className="min-h-screen gradient-primary">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900 text-white overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center py-16 sm:py-20">
              <div className="grid lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-12 items-center py-20 w-full max-w-7xl">
                {/* Content Section */}
                <div className="lg:col-span-3 text-center lg:text-left space-y-12 lg:space-y-8 relative z-20">
                  {/* Quote Section */}
                  <div className="space-y-8">
                    <blockquote className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white text-center lg:text-left">
                      <span className="text-3xl sm:text-4xl lg:text-6xl text-red-500/30">
                        "
                      </span>
                      <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                        Innovation distinguishes
                        <br />
                        between a leader and a follower
                      </span>
                      <span className="text-3xl sm:text-4xl lg:text-6xl text-red-500/30">
                        "
                      </span>
                    </blockquote>

                    <cite className="block text-sm sm:text-base lg:text-lg text-white/80 not-italic text-center lg:text-left">
                      — Steve Jobs
                    </cite>
                  </div>

                  {/* Author Profile Section */}
                  <div className="mt-20 lg:mt-8 text-white">
                    <AuthorProfile />
                  </div>
                </div>

                {/* Image Section */}
                <div className="hidden lg:flex lg:col-span-1 justify-center lg:justify-start mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:z-50">
                  <div className="relative">
                    <Image
                      src="/assets/images/founder-1.png"
                      alt="Founder Photo"
                      width={1000}
                      height={1000}
                      className="lg:w-[550px] lg:h-[460px] object-cover relative z-50 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-12 lg:space-y-16">
              {/* Latest Publications Section */}
              <section>
                <PublicationSection />
              </section>

              {/* Blog Feed */}
              <section>
                <div className="flex items-center gap-3 mb-6 lg:mb-8">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    Latest Articles
                  </h2>
                </div>
                <LatestArticlesSection />
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="lg:sticky lg:top-24 space-y-6 lg:space-y-8">
                <RelatedPosts />
                <BrowseByTagSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaRule;
