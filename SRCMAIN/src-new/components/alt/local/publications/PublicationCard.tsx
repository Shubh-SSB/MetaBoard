import { type FC } from "react";
import { Calendar, Download, ExternalLink, Share2, User } from "lucide-react";
import { Badge, Button, Card, DialogHeader } from "../../ui";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, } from '../../ui';
import { BASE_ASSETS_URL } from "@/constants";
import dayjs from "dayjs";
import Link from "next/link";

type props = {
    data: PublicationInterface
}


const PublicationCard: FC<props> = ({
    data
}) => {

    return (<>
        <Card className="glass-card overflow-hidden glass-hover group">
            <div>
                {/* Book Cover */}
                <div className="relative">
                    <img
                        // src={BASE_ASSETS_URL + `/publications/${data.coverImage}`}
                        src={data.coverImage}
                        alt='publication'
                        className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                        {/* <Badge
                            variant={publication.status === 'New Release' ? 'default' : 'secondary'}
                            className="glass text-xs"
                        >
                            {publication.status}
                        </Badge> */}
                    </div>
                    <div className="absolute top-3 right-3">
                        {/* <Badge variant="outline" className="text-xs border-glass">
                            {publication.type}
                        </Badge> */}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {data.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-medium line-clamp-1">
                                {data.subTitle}
                            </p>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {data.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-glass">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {dayjs(data.publicationDate).format("MM YYYY")}
                            </div>
                            {/* <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 fill-primary text-primary" />
                                {publication.rating} ({publication.reviews})
                            </div> */}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-2">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button size="sm" variant="default" className="flex-1">
                                        Learn More
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-lg border-glass">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-bold text-foreground">
                                            {data.title}
                                        </DialogTitle>
                                    </DialogHeader>

                                    <div className="grid md:grid-cols-3 gap-6">
                                        {/* Book Cover */}
                                        <div className="space-y-4">
                                            <img
                                                // src={BASE_ASSETS_URL + `/publications/${data.coverImage}`}
                                                src={data.coverImage}
                                                alt='publication'
                                                className="w-full h-[300px] rounded-lg"
                                            />
                                            <div className="space-y-2 text-sm">
                                                <p><strong>Publisher:</strong> {data.publisher}</p>
                                                <p><strong>Pages:</strong> {data.pages}</p>
                                                <p><strong>ISBN:</strong> {data.isbn}</p>
                                                <p><strong>Price:</strong> <span className="text-primary font-semibold">₹{data.price}</span></p>
                                            </div>
                                            <div className="flex gap-2">
                                                {
                                                    Object.entries(data.storeLinks).filter(([_, value]) => value).map(([key, value]) =>
                                                        <Link className="flex-1" href={value} target="_blank">
                                                            <Button>
                                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                                {key.charAt(0).toUpperCase() + key.substring(1, key.length)}
                                                            </Button>
                                                        </Link>)
                                                }
                                                <Button variant="outline" className="border-glass">
                                                    <Share2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div className="md:col-span-2 space-y-6">
                                            <div>
                                                <h4 className="text-lg font-semibold mb-2">Description</h4>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {data.description}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold mb-3">Author</h4>
                                                <div className="space-y-4">
                                                    <div className="flex gap-4">
                                                        {/* <Avatar className="w-12 h-12">
                                            <AvatarImage src={author.image} alt={author.name} />
                                            <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                          </Avatar> */}
                                                        <div className="flex-1">
                                                            <h5 className="font-medium text-foreground">Dr. Sarah Mitchell</h5>
                                                            <p className="text-sm text-primary">Legal Tech Research Director</p>
                                                            <p className="text-sm text-muted-foreground mt-1">Dr. Sarah Mitchell is a leading expert in legal technology with over 15 years of experience in law firm innovation. She holds a JD from Harvard Law School and a PhD in Computer Science from MIT.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Button variant="outline" className="border-glass">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Sample Chapter
                                                </Button>
                                                <Button variant="outline" className="border-glass">
                                                    <User className="w-4 h-4 mr-2" />
                                                    Contact Author
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            <Button size="sm" variant="outline" className="border-glass">
                                <span className="font-semibold"> ₹ {data.price}</span>
                            </Button>

                            <Button
                                size="sm"
                                variant="outline"
                                // onClick={() => handleShare(publication)}
                                className="border-glass"
                            >
                                <Share2 className="w-3 h-3" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    </>);
}
export default PublicationCard;