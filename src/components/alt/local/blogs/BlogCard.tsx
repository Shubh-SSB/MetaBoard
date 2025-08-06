'use client';

import { type FC } from "react";
import { Calendar, ExternalLink, Share2, User } from "lucide-react";
import { Button, Card } from "../../ui";
import dayjs from "dayjs";
import Link from "next/link";
import { share } from "@/helpers";

type props = {
    data: BlogInterface
}


const BlogCard: FC<props> = ({
    data
}) => {

    const handleShare = () => share(data.title, data.description, `${window.location.origin}/${window.location.pathname.split('/')[1]}/read-blog?id=${data.id}`);


    return (<>
        <Card className="glass-card overflow-hidden glass-hover group">
            <div className="flex gap-6 p-6">
                {/* Book Cover */}
                <div className="hidden sm:block sm:relative sm:flex-shrink-0">
                    <img
                        src='https://picsum.photos/400/600?random=844'
                        alt='Blog'
                        className="w-32 h-[150px] object-cover rounded-lg transition-transform group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {data.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium hidden sm:block">
                            {data.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-glass">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {dayjs(data.publishedAt).format('DD MM YYYY')}
                        </div>
                        <span>•</span>
                        <span>{data.author}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                        <Link
                            href={`${window.location.origin}/${window.location.pathname.split('/')[1]}/read-blog?id=${data.id}`}
                        >
                            <Button size="sm" variant="default" className="border-glass">
                                <ExternalLink className="w-3 h-3 mr-1" />
                            </Button>
                        </Link>
                        <Button
                            size="sm"
                            variant="default"
                            onClick={handleShare}
                            className="border-glass"
                        >
                            <Share2 className="w-3 h-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    </>);
}
export default BlogCard;