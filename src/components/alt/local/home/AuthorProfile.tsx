import {  ChevronDown, ChevronUp, Globe, Linkedin, Mail, TwitterIcon } from "lucide-react";
import { Button, Card,Badge } from "../../ui"
import { useState } from "react";




const AuthorProfile = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const socialLinks = [
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: TwitterIcon, href: '#', label: 'Twitter' },
        { icon: Globe, href: '#', label: 'Website' },
        { icon: Mail, href: '#', label: 'Email' },
    ];
    const expertise = [
        'Legal Technology',
        'AI & Machine Learning',
        'Digital Transformation',
        'Practice Management',
        'Regulatory Compliance'
    ];


    return (<>
        <Card className="glass-card p-6 mb-8 glass-hover">
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <div className="relative group">
                        <img
                            src={'/assets/images/author-profile.jpg'}
                            alt="Dr. Sarah Mitchell"
                            className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl object-cover border-2 border-glass transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-red opacity-0 group-hover:opacity-10 transition-opacity" />
                    </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground mb-1">Dr. Sarah Mitchell</h2>
                        <p className="text-lg text-glass mb-2">Founder & Chief Technology Officer</p>
                        <p className="text-muted-foreground">Leading innovation at the intersection of law and technology</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <Button
                                key={social.label}
                                variant="secondary"
                                size="sm"
                                className="glass-hover border-glass"
                            >
                                <a href={social.href} aria-label={social.label}>
                                    <social.icon className="w-4 h-4" />
                                </a>
                            </Button>
                        ))}
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                        {expertise.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                            </Badge>
                        ))}
                        {!isExpanded && expertise.length > 3 && (
                            <Badge variant="outline" className="text-xs border-glass">
                                +{expertise.length - 3} more
                            </Badge>
                        )}
                    </div>

                    {/* Expand/Collapse Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-muted-foreground hover:text-foreground w-fit"
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                Show Less
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                See More
                            </>
                        )}
                    </Button>
                </div>
            </div>

            {/* Expanded Bio */}
            {isExpanded && (
                <div className="mt-6 pt-6 border-t border-glass space-y-4 animate-in slide-in-from-top-2">
                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Biography</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Dr. Sarah Mitchell is a pioneering figure in legal technology with over 15 years of experience bridging
                            the gap between traditional legal practice and cutting-edge technology. She holds a J.D. from Harvard Law
                            School and a Ph.D. in Computer Science from MIT, making her uniquely qualified to navigate the complex
                            intersection of law and technology.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">All Expertise Areas</h3>
                        <div className="flex flex-wrap gap-2">
                            {expertise.map((skill) => (
                                <Badge key={skill} variant="outline" className="text-xs">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3">Recent Achievements</h3>
                        <ul className="text-muted-foreground space-y-2">
                            <li>• Named "Legal Innovator of the Year" by Legal Tech Weekly (2024)</li>
                            <li>• Keynote speaker at the Global Legal Technology Summit</li>
                            <li>• Published 50+ articles on AI applications in legal practice</li>
                            <li>• Advisory board member for the American Bar Association's Tech Committee</li>
                        </ul>
                    </div>
                </div>
            )}
        </Card>
    </>)
}

export default AuthorProfile;