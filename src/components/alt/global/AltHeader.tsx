"use client";

import { BookOpen, Briefcase, FileText, Home, Menu, X } from "lucide-react";
import { memo, useState, useEffect } from "react";
import { Button } from "../ui";
import { usePathname } from "next/navigation";

const AltHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "/metarule" },
    { name: "Blogs", href: "/metarule/blog" },
    { name: "Publications", href: "/metarule/publications" },
    { name: "MetaBoard", href: "/" },
  ];

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`border-b sticky top-0 z-50 shadow-sm transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-900/20 backdrop-blur-lg"
            : "bg-zinc-900 backdrop-blur-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* Logo - Far Left side */}
            <div className="flex items-center flex-shrink-0 -ml-4">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-primary">Meta</span>Rule
              </h1>
            </div>

            {/* Spacer to push navigation to the right */}
            <div className="flex-1"></div>

            {/* Desktop Navigation - Far Right side */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? "text-primary bg-glass"
                      : "text-white hover:text-primary hover:bg-glass"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu button - Far Right side */}
            <div className="flex items-center gap-4 md:ml-0 mr-4">
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-glass">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "text-primary bg-glass"
                        : "text-muted-foreground hover:text-foreground hover:bg-glass"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
export default memo(AltHeader);
