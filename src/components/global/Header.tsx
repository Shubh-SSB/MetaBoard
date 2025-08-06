"use client";

import { useEffect, useState, type FC } from "react";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

type props = {
  styles?: string;
};

const Header: FC<props> = ({ styles }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(
    null
  );
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  // useEffect(() => {
  //     document.body.style.overflow = 'hidden';
  //     if (isMobileMenuOpen) {
  //     } else {
  //         document.body.style.overflow = '';
  //     }

  //     return () => {
  //         document.body.style.overflow = '';
  //     };
  // }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/", children: [] },
    {
      name: "Knowledge centre",
      href: "",
      children: [{ name: "Articles", href: "/articles" }],
    },
    {
      name: "MetaRule",
      href: "/metarule",
      children: [
        { name: "Home", href: "/metarule" },
        { name: "Blogs", href: "/metarule/blogs" },
        { name: "Publications", href: "/metarule/publications" },
      ],
    },
    {
      name: "Us",
      href: "",
      children: [
        { name: "About us", href: "/aboutUs" },
        { name: "Contact us", href: "/contact" },
      ],
    },
    { name: "Services", href: "/services", children: [] },
  ];

  const isMetaruleSection = pathname.split("/")[1] === "metarule";

  const toggleMobileSubmenu = (itemName: string) => {
    setExpandedMobileItem(expandedMobileItem === itemName ? null : itemName);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobileItem(null);
  };
  const navLinksTextColor =
    pathname.split("/")[1] !== "" ? "text-gray-700" : "text-gray-400";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass backdrop-blur-lg bg-black/20" : "bg-transparent"
        } ${styles}`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between min-h-[48px]">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <Link href="/" onClick={handleMobileLinkClick}>
                <img
                  src="/assets/images/logo.png"
                  alt="MetaBoard Logo"
                  className="h-7 md:h-8 w-auto transition-all duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu.Root className="hidden lg:flex relative z-10 justify-center">
              <NavigationMenu.List className="center m-0 flex items-center list-none">
                {navItems.map(({ name, children, href }, index) => (
                  <div key={index}>
                    {!children.length ? (
                      <NavigationMenu.Item>
                        <NavigationMenu.Link
                          className={`block select-none rounded-lg px-3 xl:px-4 py-2.5 text-sm font-bold leading-none no-underline outline-none  hover:text-red-500 transition-colors duration-300 ${navLinksTextColor}`}
                          href={href}
                        >
                          {name}
                        </NavigationMenu.Link>
                      </NavigationMenu.Item>
                    ) : (
                      <NavigationMenu.Item>
                        <NavigationMenu.Trigger
                          className={`group  flex select-none items-center justify-between gap-1 rounded-lg px-3 xl:px-4 py-2.5 text-sm font-bold leading-none outline-none hover:text-red-500 transition-colors duration-300 ${navLinksTextColor}`}
                        >
                          {name}
                          <ChevronDown
                            className="relative text-gray-400 transition-transform duration-300 ease-in-out group-data-[state=open]:-rotate-180 group-hover:text-red-500"
                            size={16}
                            aria-hidden
                          />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute left-0 top-0 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
                          <div className="w-[280px] z-10 p-4">
                            <div className="grid gap-2">
                              {children.map(({ name, href }, childIndex) => (
                                <NavigationMenu.Link key={childIndex} asChild>
                                  <a
                                    className="group flex items-center gap-3 rounded-lg p-3 text-sm font-medium no-underline outline-none z-50 transition-all duration-200 hover:bg-red-500/10 hover:border-red-500/20 border border-transparent backdrop-blur-sm"
                                    href={href}
                                  >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-red-500/20 to-red-600/20 group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-200">
                                      <div className="h-3 w-3 rounded-sm bg-red-500 group-hover:bg-red-400 transition-colors duration-200"></div>
                                    </div>
                                    <div className="flex flex-col">
                                      <div
                                        className={`${
                                          isMetaruleSection
                                            ? "text-black"
                                            : "text-white"
                                        } group-hover:text-red-400 font-semibold transition-colors duration-200`}
                                      >
                                        {name}
                                      </div>
                                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                        Explore {name.toLowerCase()}
                                      </div>
                                    </div>
                                  </a>
                                </NavigationMenu.Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenu.Content>
                      </NavigationMenu.Item>
                    )}
                  </div>
                ))}
                <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
                  <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-gradient-to-br from-gray-800 to-gray-900 border-t border-l border-red-500/20" />
                </NavigationMenu.Indicator>
              </NavigationMenu.List>

              {/* Perspective container with dark theme styling */}
              <div className="absolute left-0 z-50 top-full flex w-full justify-center [perspective:600px]">
                <NavigationMenu.Viewport
                  className={`
                                        ${
                                          !isMetaruleSection
                                            ? "bg-gradient-to-br border-red-500/20"
                                            : "gradient-primary"
                                        }
                                    relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-xl from-gray-900/95 to-black/95 backdrop-blur-xl border shadow-2xl shadow-red-500/10 transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)] [perspective-origin:center_top]`}
                />
              </div>
            </NavigationMenu.Root>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-500 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle mobile menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm h-screen"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-sm ${
            isMetaruleSection
              ? "gradient-primary border-l border-gray-200"
              : "bg-black border-l border-red-500/20"
          } shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Menu Header */}
          <div
            className={`flex items-center justify-between p-4 ${
              isMetaruleSection
                ? "border-b border-gray-200"
                : "border-b border-red-500/20"
            }`}
          >
            <img
              src={`/assets/images/${
                isMetaruleSection ? "logo.webp" : "logo-light.webp"
              }`}
              alt="MetaBoard Logo"
              className="h-7 w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isMetaruleSection
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Close mobile menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div
            className={`flex flex-col p-4 space-y-2 overflow-y-auto h-screen ${
              isMetaruleSection ? "gradient-primary" : "bg-black"
            } `}
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                className={`last:border-b-0 pb-2 last:pb-0 ${
                  isMetaruleSection
                    ? "border-b border-gray-200/50"
                    : "border-b border-gray-800/50"
                }`}
              >
                {!item.children.length ? (
                  <Link
                    href={item.href}
                    onClick={handleMobileLinkClick}
                    className={`block py-3 px-4 rounded-lg text-base font-semibold transition-all duration-200 ${
                      pathname === item.href
                        ? "text-red-500 bg-red-500/10"
                        : isMetaruleSection
                        ? "text-gray-700 hover:text-red-500 hover:bg-gray-100"
                        : "text-gray-300 hover:text-red-400 hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className={`w-full flex items-center justify-between py-3 px-4 rounded-lg text-base font-semibold hover:text-red-400 hover:bg-white/5 transition-all duration-200 ${
                        isMetaruleSection ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      {item.name}
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${
                          expandedMobileItem === item.name ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile Submenu */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedMobileItem === item.name
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 mt-2 space-y-1">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            onClick={handleMobileLinkClick}
                            className={`block py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                              pathname === child.href
                                ? "text-red-500 bg-red-500/10"
                                : "text-gray-400 hover:text-red-400 hover:bg-white/5"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
