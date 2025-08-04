'use client';

import { type FC } from "react"
import { ArrowUp } from "lucide-react"


const ScrollToTopBtn: FC = () => {
    return (<>
        <button
            className="fixed bottom-6 right-6 glass hover:glass-hover p-3 rounded-full text-white hover:text-red-500 transition-all duration-300 z-40"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <ArrowUp size={20} />
        </button>
    </>)
}

export default ScrollToTopBtn;