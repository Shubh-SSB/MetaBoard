
import Link from 'next/link';
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BASE_ASSETS_URL } from '@/constants';
import dayjs from 'dayjs';

type props = {
    articles: ArticleInterface[]
}
const ArticlesShowcase = ({ articles }: props) => {


    return (
        <section id="articles" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Latest <span className="text-gradient">Articles</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Stay ahead with our cutting-edge insights on legal technology, education, and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {articles.map((article) => (
                        <article
                            key={article.id}
                            className="group glass-hover rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={BASE_ASSETS_URL + `/article-cover-images/${article.coverImage}`}
                                    alt={article.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                            </div>

                            <div className="p-6 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {article.description}
                                    </p>

                                    <div className="flex flex-col text-sm text-gray-500 mb-4 gap-2">
                                        <div className="flex items-center gap-2">
                                            <User size={16} />
                                            <span>{article.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            <span>{dayjs(article.publishedAt).format("DD MM YYYY")}</span>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href={`/article-details?id=${article.id}`}
                                    className="group/btn flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                                >
                                    Read More
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/articles"
                        className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 ripple-effect"
                    >
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ArticlesShowcase;
