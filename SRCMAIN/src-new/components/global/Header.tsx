'use client';

import { memo, useEffect, useState, type FC } from "react"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
    styles?: string;
    showNavLinks?: boolean;
}

const Header: FC<props> = ({
    styles,
    showNavLinks,
}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Articles', href: '/articles' },
        { name: 'Services', href: '/services' },
        { name: 'MetaRules', href: '/metarule' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass backdrop-blur-lg bg-black/20'
                : 'bg-transparent'
                } ${styles}`}>
                <nav className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between min-h-[48px]">

                        {/* Logo Section */}
                        <div className="flex items-center space-x-3 flex-shrink-0">
                            <Link href="/">
                                <img
                                    src="/assets/images/logo.webp"
                                    alt="MetaBoard Logo"
                                    className="h-8 w-auto transition-all duration-300"
                                />
                            </Link>
                        </div>


                        {showNavLinks && (
                            <>
                                <div className="hidden md:flex items-center space-x-8">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`transition-colors duration-300 text-base font-bold whitespace-nowrap ${pathname === item.href
                                                ? 'text-red-500'
                                                : 'text-gray-400 hover:text-red-500'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <button
                                    className="md:hidden text-white p-2"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </>
                        )}
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && showNavLinks && (
                        <div className="md:hidden mt-4 glass rounded-2xl p-6 animate-in slide-in-from-top-2 duration-200">
                            <div className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`transition-colors duration-300 font-medium py-2 ${pathname === item.href
                                            ? 'text-red-500'
                                            : 'text-white hover:text-red-500'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}

export default memo(Header);