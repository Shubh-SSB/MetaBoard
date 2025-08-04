import { FC } from "react";
import { Badge, Card } from "../../ui";
import { Clock, TrendingUp } from "lucide-react";



const RelatedPosts: FC = () => {
    const relatedPosts = [
        {
            id: 1,
            title: "Machine Learning Applications in Contract Analysis",
            category: "AI & Law",
            readTime: "5 min read",
            publishDate: "July 15, 2024",
            image: '/assets/images/article-thumb-1.jpg',
            trending: true
        },
        {
            id: 2,
            title: "Cloud Computing Security for Legal Firms",
            category: "Cybersecurity",
            readTime: "7 min read",
            publishDate: "July 12, 2024",
            image: '/assets/images/article-thumb-1.jpg',
            trending: false
        },
        {
            id: 3,
            title: "Automated Document Review Systems",
            category: "Legal Tech",
            readTime: "6 min read",
            publishDate: "July 10, 2024",
            image: '/assets/images/article-thumb-1.jpg',
            trending: true
        },
        {
            id: 4,
            title: "Client Communication in the Digital Age",
            category: "Practice Management",
            readTime: "4 min read",
            publishDate: "July 8, 2024",
            image: '/assets/images/article-thumb-1.jpg',
            trending: false
        }
    ];

    return (
        <Card className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Related Articles</h3>
            </div>

            <div className="space-y-4">
                {relatedPosts.map((post) => (
                    <div
                        key={post.id}
                        className="group cursor-pointer p-3 rounded-lg glass-hover transition-all"
                    >
                        <div className="flex gap-3">
                            <div className="relative flex-shrink-0">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-16 h-16 rounded-lg object-cover transition-transform group-hover:scale-105"
                                />
                                {post.trending && (
                                    <div className="absolute -top-1 -right-1">
                                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="space-y-2">
                                    <Badge
                                        variant="secondary"
                                        className="glass text-xs"
                                    >
                                        {post.category}
                                    </Badge>

                                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                        {post.title}
                                    </h4>

                                    <div className="flex items-center gap-2 text-xs text-glass">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-glass">
                <button className="text-sm text-primary hover:text-primary-hover transition-colors font-medium">
                    View All Articles →
                </button>
            </div>
        </Card>
    );
}
export default RelatedPosts;