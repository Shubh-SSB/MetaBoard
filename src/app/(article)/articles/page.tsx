import React from 'react';
import { ArticleCardsSection, Header, LatestHeadlinesSection, NewsLatterSection } from '@/components/local/articles';
import { $crud } from '@/factory/crudFactory';
import { ArticleHeroSection as FeaturedArticle, ScrollToTopBtn } from '@/components/global';

const Articles = async () => {

    let articles: any[] = [];
    let featuredArticle = {};

    const latestHeadlines = [
        { title: "Supreme Court to Hear Landmark AI Copyright Case", time: "2 hours ago" },
        { title: "New Federal Guidelines for Cryptocurrency Regulation", time: "4 hours ago" },
        { title: "Legal Tech Startup Raises $50M Series B", time: "6 hours ago" },
    ];

    try {
        const { data: { rows, featuredArticle:fArticle } } = await $crud.get('retrieve/web/articles');
        featuredArticle = fArticle
        articles = rows;
    } catch (e) {
        console.error(e)
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Sticky Navigation */}
            <Header />
           
            <FeaturedArticle
                data={featuredArticle}
                showReadBtn
            />

            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main Articles Column */}
                        <ArticleCardsSection
                            preloadedArticles={articles}
                        />

                        {/* Latest Headlines Sidebar */}
                        <LatestHeadlinesSection
                            headlinesData={latestHeadlines}
                        />
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <NewsLatterSection />

            {/* Back to Top Button */}
            <ScrollToTopBtn />
        </div>
    );
};

export default Articles;
