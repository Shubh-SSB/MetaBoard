'use client';

import { useEffect, useState, type FC } from "react"

const ArticleScrollProgress: FC = () => {

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (<>
        <div className="fixed top-0 left-0 right-0 z-50">
            <div
                className="h-1 bg-red-600 transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    </>)
}

export default ArticleScrollProgress;