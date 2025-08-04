'use client';

import { BookOpen, Briefcase, FileText, Home, Menu, X } from "lucide-react";
import { memo, useState } from "react";
import { Button } from "../ui";
import { usePathname } from "next/navigation";



const AltHeader = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/metarule', icon: Home },
        { name: 'Articles', href: '#', icon: FileText },
        { name: 'Publications', href: '/metarule/publications', icon: BookOpen },
    ];

    const pathname = usePathname();

    return (<>

        <header className="glass border-b border-glass sticky top-0 z-50 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold text-foreground">
                                <span className="text-primary">Meta</span>Rule
                            </h1>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${pathname === item.href
                                    ? 'text-primary bg-glass'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-glass'
                                    }`}
                            >
                                <item.icon className="w-4 h-4 mr-2" />
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
                                    className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === item.href
                                        ? 'text-primary bg-glass'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-glass'
                                        }`}
                                >
                                    <item.icon className="w-4 h-4 mr-3" />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    </>)
}
export default memo(AltHeader);