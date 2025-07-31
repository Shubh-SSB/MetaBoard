import { type FC } from "react";
import Link from "next/link";

type props = {
    articleHtml: string;
    articleCss: string;
    relatedArticles: any
}

const ArticleContentSection: FC<props> = ({
    articleHtml,
    articleCss,
    relatedArticles
}) => {
    return (<>
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">

                        <div className="article-content">
                            <style dangerouslySetInnerHTML={{ __html: articleCss }} />
                            <div dangerouslySetInnerHTML={{ __html: articleHtml }} />
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <div className="glass rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-red-600 mb-6 pb-3 border-b border-gray-200">
                                    Related Reads
                                </h3>
                                <div className="space-y-4">
                                    {relatedArticles.map((relatedArticle: any) => (
                                        <Link
                                            key={relatedArticle.id}
                                            href={`/articles/${relatedArticle.id}`}
                                            className="group block"
                                        >
                                            <div className="flex space-x-3 glass-hover hover:bg-gray-50 rounded-lg p-3 transition-all duration-300">
                                                <img
                                                    src={relatedArticle.image}
                                                    alt={relatedArticle.title}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors text-sm mb-1 leading-tight">
                                                        {relatedArticle.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-500">{relatedArticle.date}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default ArticleContentSection;