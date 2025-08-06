import { type FC } from "react";
import { Badge, Button, Card } from "../../ui";
import { ArrowRight, Bookmark, Calendar, Clock, Share2 } from "lucide-react";



const LatestArticlesSection: FC = () => {
    const articles = [
        {
            id: 1,
            title: "The Future of AI in Legal Research: A Comprehensive Analysis",
            excerpt: "Exploring how artificial intelligence is revolutionizing legal research methodologies and transforming the way lawyers approach case preparation and document review.",
            category: "AI & Law",
            readTime: "8 min read",
            publishDate: "July 28, 2024",
            author: "Dr. Sarah Mitchell",
            image: '/assets/images/article-thumb-1.jpg',
            featured: true
        },
        {
            id: 2,
            title: "Implementing Blockchain Technology in Legal Contract Management",
            excerpt: "A deep dive into how blockchain technology can enhance contract security, transparency, and efficiency in legal transactions.",
            category: "Blockchain",
            readTime: "6 min read",
            publishDate: "July 25, 2024",
            author: "Dr. Sarah Mitchell",
            image: '/assets/images/article-thumb-1.jpg',
            featured: false
        },
        {
            id: 3,
            title: "Digital Transformation Strategies for Modern Law Firms",
            excerpt: "Essential strategies and best practices for law firms looking to embrace digital transformation and stay competitive in the modern legal landscape.",
            category: "Digital Transformation",
            readTime: "10 min read",
            publishDate: "July 22, 2024",
            author: "Dr. Sarah Mitchell",
            image: '/assets/images/article-thumb-1.jpg',
            featured: false
        },
        {
            id: 4,
            title: "Cybersecurity Best Practices for Legal Professionals",
            excerpt: "Comprehensive guide to protecting sensitive client data and maintaining confidentiality in an increasingly digital world.",
            category: "Cybersecurity",
            readTime: "7 min read",
            publishDate: "July 20, 2024",
            author: "Dr. Sarah Mitchell",
            image: '/assets/images/article-thumb-1.jpg',
            featured: false
        }
    ];

    const handleBookmark = (articleId: number) => {
        console.log('Bookmarked article:', articleId);
    };

    const handleShare = (article: typeof articles[0]) => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href,
            });
        }
    };

    return (
        <div className="space-y-8">
            {/* Featured Article */}
            {articles.filter(article => article.featured).map((article) => (
                <Card key={article.id} className="glass-card overflow-hidden glass-hover group">
                    <div className="md:flex">
                        <div className="md:w-2/5 relative">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-64 md:h-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-primary text-primary-foreground">
                                    Featured
                                </Badge>
                            </div>
                        </div>
                        <div className="md:w-3/5 p-6 md:p-8">
                            <div className="space-y-4">
                                <div>
                                    <Badge variant="outline" className="mb-3">
                                        {article.category}
                                    </Badge>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                        {article.title}
                                    </h2>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center gap-4 text-sm text-glass">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {article.publishDate}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        {article.readTime}
                                    </div>
                                    <span>By {article.author}</span>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <Button className="flex-1">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        onClick={() => handleBookmark(article.id)}
                                        className="border-glass"
                                    >
                                        <Bookmark className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="icon"
                                        onClick={() => handleShare(article)}
                                        className="border-glass"
                                    >
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}

            {/* Regular Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {articles.filter(article => !article.featured).map((article) => (
                    <Card key={article.id} className="glass-card overflow-hidden glass-hover group">
                        <div className="relative">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <div className="space-y-3">
                                <div>
                                    <Badge variant="outline" className="mb-2 text-xs">
                                        {article.category}
                                    </Badge>
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                        {article.title}
                                    </h3>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center gap-3 text-xs text-glass">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {article.publishDate}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {article.readTime}
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <Button size="sm" variant="default" className="flex-1">
                                        Read More
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        onClick={() => handleBookmark(article.id)}
                                        className="border-glass"
                                    >
                                        <Bookmark className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
export default LatestArticlesSection;