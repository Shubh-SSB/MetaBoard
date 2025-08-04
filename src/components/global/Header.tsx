"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import * as React from "react";

interface HeaderProps {
  styles?: string;
  className?: string;
  showNavLinks?: boolean;
}

const Header: FC<HeaderProps> = ({
  styles,
  className,
  showNavLinks = true,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const knowledgeCenterItems = [
    {
      name: "Articles",
      href: "/articles",
      description: "Latest insights and thought leadership",
    },
  ];

  // List item component for the navigation menu
  const ListItem = React.forwardRef<
    React.ElementRef<typeof Link>,
    {
      className?: string;
      //   children: React.ReactNode;
      title: string;
      href: string;
    }
  >(({ className, title, href, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={classNames(
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-red-50 focus:shadow-[0_0_0_2px] focus:shadow-red-500",
            className
          )}
          href={href}
          ref={forwardedRef}
          {...props}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-red-500">
            {title}
          </div>
        </Link>
      </NavigationMenu.Link>
    </li>
  ));

  return (
    <>
      <header
        className={classNames(
          styles === "relative"
            ? "relative"
            : styles === "sticky"
            ? "sticky top-0"
            : "fixed top-0 left-0 right-0",
          "z-50 transition-all duration-300",
          isScrolled && styles !== "relative"
            ? "bg-white/10 backdrop-blur-lg border-b border-white/20"
            : "bg-transparent",
          className
        )}
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

            {showNavLinks && (
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <NavigationMenu.Root className="relative z-10 flex justify-center">
                  <NavigationMenu.List className="center m-0 flex list-none rounded-md  p-1 ">
                    {/* Home */}
                    <NavigationMenu.Item>
                      <NavigationMenu.Link asChild>
                        <Link
                          href="/"
                          className={`block select-none rounded px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px] focus:shadow-red-500 ${
                            pathname === "/"
                              ? "text-red-500"
                              : "text-white hover:bg-red-50 hover:text-red-500"
                          }`}
                        >
                          Home
                        </Link>
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    {/* Knowledge Center Dropdown */}
                    <NavigationMenu.Item>
                      <NavigationMenu.Trigger
                        className={`group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none outline-none transition-colors focus:shadow-[0_0_0_2px] focus:shadow-red-500 ${
                          knowledgeCenterItems.some(
                            (item) => pathname === item.href
                          )
                            ? "text-red-500"
                            : "text-gray-400  hover:text-red-500"
                        }`}
                      >
                        Knowledge Center{" "}
                        <CaretDownIcon
                          className="relative top-px text-gray-400 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                          aria-hidden
                        />
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft backdrop-blur-lg bg-black/50 border border-white/20 rounded-lg shadow-lg sm:w-auto">
                        <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                          {knowledgeCenterItems.map((item) => (
                            <ListItem
                              key={item.name}
                              href={item.href}
                              title={item.name}
                            ></ListItem>
                          ))}
                        </ul>
                      </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    {/* Services */}
                    <NavigationMenu.Item>
                      <NavigationMenu.Link asChild>
                        <Link
                          href="/services"
                          className={`block select-none rounded px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px] focus:shadow-red-500 ${
                            pathname === "/services"
                              ? "text-red-500"
                              : "text-gray-400  hover:text-red-500"
                          }`}
                        >
                          Services
                        </Link>
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    {/* MetaRule */}
                    <NavigationMenu.Item>
                      <NavigationMenu.Link asChild>
                        <Link
                          href="/metarule"
                          className={`block select-none rounded px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px] focus:shadow-red-500 ${
                            pathname === "/metarule"
                              ? "text-red-500 "
                              : "text-gray-400  hover:text-red-500"
                          }`}
                        >
                          MetaRule
                        </Link>
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
                      <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white/80" />
                    </NavigationMenu.Indicator>
                  </NavigationMenu.List>

                  <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
                    <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                  </div>
                </NavigationMenu.Root>
              </div>
            )}

            {/* Mobile Menu Button */}
            {showNavLinks && (
              <button
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && showNavLinks && (
            <div className="md:hidden mt-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 mx-2 sm:mx-0 border border-white/20">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {/* Home */}
                <Link
                  href="/"
                  className={`transition-colors duration-300 font-medium py-2 text-base rounded px-2 ${
                    pathname === "/"
                      ? "text-red-500 bg-red-50"
                      : "text-white hover:text-red-500 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Knowledge Center */}
                <div className="pl-2">
                  <div className="text-gray-300 font-medium text-sm mb-2">
                    Knowledge Center
                  </div>
                  {knowledgeCenterItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block transition-colors duration-300 font-medium py-2 text-base rounded px-2 ${
                        pathname === item.href
                          ? "text-red-500 bg-red-50"
                          : "text-white hover:text-red-500 hover:bg-white/10"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Services */}
                <Link
                  href="/services"
                  className={`transition-colors duration-300 font-medium py-2 text-base rounded px-2 ${
                    pathname === "/services"
                      ? "text-red-500 bg-red-50"
                      : "text-white hover:text-red-500 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>

                {/* MetaRule */}
                <Link
                  href="/metarule"
                  className={`transition-colors duration-300 font-medium py-2 text-base rounded px-2 ${
                    pathname === "/metarule"
                      ? "text-red-500 bg-red-50"
                      : "text-white hover:text-red-500 hover:bg-white/10"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MetaRule
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
