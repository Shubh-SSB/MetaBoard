import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Articles", href: "/articles" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Projects", href: "#" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "#" },
    { name: "Legal Notice", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/assets/images/metaWhite.jpg"
                alt="Metaboard Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The technical and educational arm of Scriboard, empowering legal
              professionals with cutting-edge technology and innovative
              educational resources.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Twitter size={18} />
                {/* <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-400 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Stay Connected</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="text-red-500" />
                <span>hello@metaboard.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="text-red-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-red-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            {/* 
                        <div>
                            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 glass bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors w-full"
                                />
                                <button
                                    className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center sm:w-auto w-full"
                                >
                                    <ArrowRight size={16} />
                                </button>
                            </div>

                        </div> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Metaboard. All rights reserved. A division of Scriboard
              Legal Services.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Built with precision and innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
