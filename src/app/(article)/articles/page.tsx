export const dynamic = "force-dynamic";

import React from "react";
import {
  ArticleCardsSection,
  LatestHeadlinesSection,
} from "@/components/local/article";
import { $crud } from "@/factory/crudFactory";
import {
  ArticleHeroSection as FeaturedArticle,
  ScrollToTopBtn,
  SearchBar,
} from "@/components/global";
import { Header } from "@/components/local/article";
import { SearchArticleProvider } from "@/context/SearchArticleContext";

const Articles = async () => {
  let articles: any[] = [];
  let featuredArticle = {};
  let totalArticles: number = 0;

  const latestHeadlines = [
    {
      title: "Supreme Court to Hear Landmark AI Copyright Case",
      time: "2 hours ago",
    },
    {
      title: "New Federal Guidelines for Cryptocurrency Regulation",
      time: "4 hours ago",
    },
    { title: "Legal Tech Startup Raises $50M Series B", time: "6 hours ago" },
    { title: "Legal Tech Startup Raises $50M Series B", time: "6 hours ago" },
    { title: "Legal Tech Startup Raises $50M Series B", time: "6 hours ago" },
  ];

  try {
    const {
      data: { rows, featuredArticle: fArticle, count },
    } = await $crud.get("retrieve/web/articles");
    featuredArticle = fArticle;
    articles = rows;
    totalArticles = count;
    // await new Promise((resolve) => setTimeout(() => resolve(true), 3000));
  } catch (e) {
    console.error(e);
  }

  return (
    <SearchArticleProvider>
      <div className="min-h-screen bg-background">
        {/* Sticky Navigation */}
        {/* <Header /> */}

        <FeaturedArticle data={featuredArticle} showReadBtn />

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Articles Column */}
              <div className="md:col-span-2 flex flex-col gap-5">
                <SearchBar />
                <ArticleCardsSection
                  preloadedArticles={articles}
                  totalArticles={totalArticles}
                  limit={10}
                />
              </div>

              {/* Latest Headlines Sidebar */}
              <LatestHeadlinesSection headlinesData={latestHeadlines} />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        {/* <NewsLatterSection /> */}

        {/* Back to Top Button */}
        <ScrollToTopBtn />
      </div>
    </SearchArticleProvider>
  );
};

export default Articles;
