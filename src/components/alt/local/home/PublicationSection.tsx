import { BookOpen, Calendar, ExternalLink, Share2 } from "lucide-react";
import { type FC } from "react";
import { Badge, Button, Card } from "../../ui";




const PublicationSection: FC = () => {

    const publications = [
        {
            id: 1,
            title: "Legal Tech Revolution",
            subtitle: "Transforming Practice Management in the Digital Age",
            description: "A comprehensive guide to implementing technology solutions in modern law firms, covering everything from case management to client communications.",
            image: '/assets/images/book-cover-1.jpg',
            publishDate: "March 2024",
            publisher: "Legal Innovation Press",
            type: "Book",
            status: "New Release"
        },
        {
            id: 2,
            title: "AI & Legal Ethics",
            subtitle: "Navigating the Future of Artificial Intelligence in Law",
            description: "An in-depth exploration of ethical considerations and regulatory frameworks for AI implementation in legal practice.",
            image: '/assets/images/book-cover-1.jpg',
            publishDate: "November 2023",
            publisher: "TechLaw Publishing",
            type: "Research Paper",
            status: "Featured"
        }
    ];

    const handleShare = (publication: typeof publications[0]) => {
        if (navigator.share) {
            navigator.share({
                title: publication.title,
                text: publication.description,
                url: window.location.href,
            });
        }
    };

    return (
        <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Published Works</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {publications.map((publication) => (
                    <Card key={publication.id} className="glass-card overflow-hidden glass-hover group">
                        <div className="flex flex-col sm:flex-row">
                            {/* Book Cover */}
                            <div className="relative flex-shrink-0 sm:w-32 lg:w-40">
                                <img
                                    src={publication.image}
                                    alt={publication.title}
                                    className="w-full sm:w-32 lg:w-40 h-48 sm:h-full object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3">
                                    <Badge
                                        variant={'secondary'}
                                        className="glass text-xs"
                                    >
                                        {publication.status}
                                    </Badge>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6">
                                <div className="space-y-3">
                                    <div>
                                        <Badge variant="outline" className="text-xs mb-2">
                                            {publication.type}
                                        </Badge>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                            {publication.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground font-medium">
                                            {publication.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                        {publication.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs text-glass">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {publication.publishDate}
                                        </div>
                                        <span>•</span>
                                        <span>{publication.publisher}</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 pt-2">
                                        <Button size="sm" variant="default" className="flex-1">
                                            <ExternalLink className="w-3 h-3 mr-1" />
                                            Learn More
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() => handleShare(publication)}
                                            className="border-glass"
                                        >
                                            <Share2 className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
export default PublicationSection;