'use client';

import { AltHeader, HeroSection } from '@/components/alt/global';
import { AuthorProfile, BrowseByTagSection, LatestArticlesSection, PublicationSection, RelatedPosts } from '@/components/alt/local/home';
import { Button } from '@/components/alt/ui';
import { Footer } from '@/components/global';
import { BookOpen, Briefcase, ExternalLink, FileText } from 'lucide-react';


const MetaRule = () => {

    return (<>
        <div className="min-h-screen gradient-primary">
            {/* Navigation Header */}
            <AltHeader />

            {/* Hero Section */}
            <HeroSection
                page='home'
            />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        {/* Author Profile */}
                        <AuthorProfile />

                        {/* Latest Publications Section */}
                        <section className="mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-primary" />
                                    <h2 className="text-2xl font-bold">Latest Publications</h2>
                                </div>
                                <Button variant="outline" className="border-glass">
                                    <a href="/publications" className='flex items-center'>
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        View All
                                    </a>
                                </Button>
                            </div>
                            <PublicationSection />
                        </section>

                        {/* Recent Podcast Episodes */}
                        <section className="mb-12">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                    <h2 className="text-2xl font-bold">Recent Podcast Episodes</h2>
                                </div>
                                <Button variant="outline" className="border-glass">
                                    <a href="/podcast" className='flex items-center'>
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        All Episodes
                                    </a>
                                </Button>
                            </div>
                            {/* <PodcastSection /> */}
                        </section>

                        {/* Blog Feed */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <FileText className="w-6 h-6 text-primary" />
                                <h2 className="text-2xl font-bold">Latest Articles</h2>
                            </div>
                            <LatestArticlesSection />
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 mt-12 lg:mt-0">
                        <div className="sticky top-24 space-y-8">
                            {/* Related Posts */}
                            <RelatedPosts />
                            {/* Tag Filter */}
                            <BrowseByTagSection />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    </>);
}
export default MetaRule;