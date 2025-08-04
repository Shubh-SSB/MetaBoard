"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FC } from "react";

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKnowledgeDropdownOpen, setIsKnowledgeDropdownOpen] = useState(false);
  const [dropdownOpenedByClick, setDropdownOpenedByClick] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpenedByClick) {
        const target = event.target as Element;
        if (!target.closest(".knowledge-dropdown")) {
          closeDropdown();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpenedByClick]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "MetaRule", href: "/metaRule" },
  ];

  const knowledgeCenterItems = [{ name: "Articles", href: "/articles" }];

  const handleDropdownClick = () => {
    setIsKnowledgeDropdownOpen(!isKnowledgeDropdownOpen);
    setDropdownOpenedByClick(!isKnowledgeDropdownOpen);
    // Clear any pending hover timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownMouseEnter = () => {
    // Clear any pending timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    if (!dropdownOpenedByClick) {
      setIsKnowledgeDropdownOpen(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (!dropdownOpenedByClick) {
      // Add a small delay before closing to allow mouse to reach the dropdown
      const timeout = setTimeout(() => {
        setIsKnowledgeDropdownOpen(false);
      }, 150);
      setHoverTimeout(timeout);
    }
  };

  const closeDropdown = () => {
    setIsKnowledgeDropdownOpen(false);
    setDropdownOpenedByClick(false);
    // Clear any pending timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass backdrop-blur-lg bg-black/20" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="/">
                <img
                  src="/assets/images/logo.png"
                  alt="MetaBoard Logo"
                  className="h-8 sm:h-10 w-auto"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-300 font-medium text-sm lg:text-base ${
                    pathname === item.href
                      ? "text-red-500"
                      : "text-gray-400 hover:text-red-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Knowledge Center Dropdown */}
              <div className="relative knowledge-dropdown">
                <button
                  className={`flex items-center space-x-1 transition-colors duration-300 font-medium text-sm lg:text-base ${
                    knowledgeCenterItems.some((item) => pathname === item.href)
                      ? "text-red-500"
                      : "text-gray-400 hover:text-red-500"
                  }`}
                  onClick={handleDropdownClick}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <span>Knowledge Center</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isKnowledgeDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu with Extended Hover Zone */}
                {isKnowledgeDropdownOpen && (
                  <div
                    className="absolute top-full left-0 pt-2 pb-4 px-4 -mx-4"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div
                      className="w-44 lg:w-48 glass backdrop-blur-lg bg-black/80 rounded-lg shadow-lg border border-white/10 py-2 z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {knowledgeCenterItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-3 lg:px-4 py-2 transition-colors duration-300 font-medium text-sm lg:text-base ${
                            pathname === item.href
                              ? "text-red-500 bg-red-500/10"
                              : "text-red-600 hover:text-red-500 hover:bg-red-500/5"
                          }`}
                          onClick={closeDropdown}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="bg-primary hover:bg-red-700 text-white px-4 lg:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm lg:text-base">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 glass rounded-2xl p-4 sm:p-6 mx-2 sm:mx-0">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors duration-300 font-medium py-2 text-base ${
                      pathname === item.href
                        ? "text-red-500"
                        : "text-white hover:text-red-500"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Knowledge Center */}
                <div>
                  <button
                    className={`flex items-center justify-between w-full transition-colors duration-300 font-medium py-2 text-base ${
                      knowledgeCenterItems.some(
                        (item) => pathname === item.href
                      )
                        ? "text-red-500"
                        : "text-white hover:text-red-500"
                    }`}
                    onClick={() =>
                      setIsKnowledgeDropdownOpen(!isKnowledgeDropdownOpen)
                    }
                  >
                    <span>Knowledge Center</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        isKnowledgeDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown Items */}
                  {isKnowledgeDropdownOpen && (
                    <div className="ml-3 sm:ml-4 mt-2 space-y-2">
                      {knowledgeCenterItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block transition-colors duration-300 font-medium py-2 text-sm sm:text-base ${
                            pathname === item.href
                              ? "text-red-500"
                              : "text-gray-300 hover:text-red-500"
                          }`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsKnowledgeDropdownOpen(false);
                          }}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <button className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 mt-4 text-base w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
