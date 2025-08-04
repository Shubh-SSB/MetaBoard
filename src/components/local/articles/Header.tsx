"use client";
import { type FC } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const Header: FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 glass backdrop-blur-lg bg-black/20 border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/assets/images/logo.png"
                alt="Metaboard Logo"
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-4">
              <button
                aria-label="Search"
                className="text-white hover:text-red-500 transition-colors duration-300"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </nav>

        <div className="bg-primary text-white py-2 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex items-center space-x-8">
              <span className="font-bold text-sm uppercase tracking-wider">
                Breaking:
              </span>
              <div className="flex space-x-8 animate-pulse">
                <span className="text-sm whitespace-nowrap">
                  Legal AI Ethics Board Announces New Guidelines
                </span>
                <span className="text-sm whitespace-nowrap">•</span>
                <span className="text-sm whitespace-nowrap">
                  Supreme Court Schedules Tech Privacy Case
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
