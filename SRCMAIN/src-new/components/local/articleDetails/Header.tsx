import { type FC } from "react";
import { ArrowLeft, Bookmark, Share2 } from "lucide-react";
import Link from "next/link";

const Header: FC = () => {
    return (<>
        <header className="sticky top-1 z-40 glass backdrop-blur-lg bg-black/20 border-b border-border">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/articles"
                        className="flex items-center space-x-2 text-white hover:text-red-500 transition-colors duration-300"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Articles</span>
                    </Link>

                    <Link href="/" className="flex items-center">
                        <img
                            src="/assets/images/logo.png"
                            alt="Metaboard Logo"
                            className="h-8 w-auto"
                        />
                    </Link>

                    <div className="flex items-center space-x-3">
                        <button className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                            <Share2 size={18} />
                        </button>
                        <button className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                            <Bookmark size={18} />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-6 pb-4">
                <nav className="text-sm text-gray-400 uppercase tracking-wider">
                    <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
                    <span className="mx-2 text-red-500">/</span>
                    <Link href="/articles" className="hover:text-red-500 transition-colors">Articles</Link>
                    <span className="mx-2 text-red-500">/</span>
                    {/* <span className="text-red-500">{article.category}</span> */}
                </nav>
            </div>
        </header>
    </>);
}

export default Header;