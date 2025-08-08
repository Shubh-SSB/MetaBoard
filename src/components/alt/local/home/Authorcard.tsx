import { type FC } from "react";
import {
  Calendar,
  Download,
  ExternalLink,
  Share2,
  User,
  Globe,
  Linkedin,
  Mail,
  TwitterIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Badge, Button, Card, DialogHeader } from "../../ui";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../../ui";
import { useState } from "react";
import Link from "next/link";

const AuthorCard: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
    { icon: Globe, href: "#", label: "Website" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const expertise = [
    "Legal Technology",
    "AI & Machine Learning",
    "Digital Transformation",
    "Practice Management",
    "Regulatory Compliance",
  ];

  return (
    <>
      <div className="flex justify-start">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white text-sm"
            >
              <ChevronDown className="w-4 h-4 mr-1" />
              See More
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-lg border-glass">
            <DialogHeader>
              <DialogTitle className="font-bold text-foreground">
                Dr. Sarah Mitchell - Founder & CTO
              </DialogTitle>
            </DialogHeader>

            <div className="grid md:grid-cols-3 w-full gap-6">
              {/* Author Image & Contact */}
              <div className="space-y-4">
                <img
                  src="/assets/images/founder-1.png"
                  alt="Dr. Sarah Mitchell"
                  className="w-full h-[260px] rounded-lg object-cover"
                />

                <div className="space-y-3">
                  <h4 className="font-semibold">Contact Information</h4>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-glass"
                        >
                          <social.icon className="w-4 h-4 mr-2" />
                          {social.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Quick Stats</h4>
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Experience:</strong> 15+ years
                    </p>
                    <p>
                      <strong>Education:</strong> J.D. Harvard, Ph.D. MIT
                    </p>
                    <p>
                      <strong>Publications:</strong> 50+ articles
                    </p>
                    <p>
                      <strong>Awards:</strong> Legal Innovator 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Biography</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Sarah Mitchell is a pioneering figure in legal
                    technology with over 15 years of experience bridging the gap
                    between traditional legal practice and cutting-edge
                    technology. She holds a J.D. from Harvard Law School and a
                    Ph.D. in Computer Science from MIT, making her uniquely
                    qualified to navigate the complex intersection of law and
                    technology.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    All Expertise Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs border-glass"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">
                    Recent Achievements
                  </h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>
                      • Named "Legal Innovator of the Year" by Legal Tech Weekly
                      (2024)
                    </li>
                    <li>
                      • Keynote speaker at the Global Legal Technology Summit
                    </li>
                    <li>
                      • Published 50+ articles on AI applications in legal
                      practice
                    </li>
                    <li>
                      • Advisory board member for the American Bar Association's
                      Tech Committee
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="border-glass">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                  <Button variant="outline" className="border-glass">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AuthorCard;
