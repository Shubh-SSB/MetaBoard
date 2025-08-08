import {
  ChevronDown,
  ChevronUp,
  Globe,
  Linkedin,
  Mail,
  TwitterIcon,
  Download,
} from "lucide-react";
import { Button, Card, Badge, DialogHeader } from "../../ui";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../../ui";
import { useState } from "react";
import Link from "next/link";
import AuthorCard from "./Authorcard";

const AuthorProfile = () => {
  const [showMore, setShowMore] = useState(false);
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
      <div className="bg-gradient-to-r from-white/5 via-white/3 to-transparent backdrop-blur-sm rounded-2xl p-4 sm:p-6 border-l border-white/10 w-full">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Profile Info */}
          <div className="flex-1 space-y-3 sm:space-y-4 text-left">
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                Dr. Sarah Mitchell
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-2">
                Founder & Chief Technology Officer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-start">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="secondary"
                  size="sm"
                  className="glass-hover border-glass p-2"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Expertise Tags */}
            {/* <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-start">
              {expertise.slice(0, 3).map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-xs text-white border-white/30"
                >
                  {skill}
                </Badge>
              ))}
              <Badge
                variant="outline"
                className="text-xs border-white/30 text-white"
              >
                +{expertise.length - 3} more
              </Badge>
            </div> */}

            {/* See More Button with Modal */}
            <div className="flex justify-start">
              <AuthorCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AuthorProfile;
