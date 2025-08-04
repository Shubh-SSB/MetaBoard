"use client";

import { useEffect, useState, type FC } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopBtn: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);

    return () => window.removeEventListener("scroll", onPageScroll);
  }, [isVisible]);

  const onPageScroll = () => {
    window.scrollY >= window.innerHeight
      ? setIsVisible(true)
      : isVisible && setIsVisible(false);
  };
  return (
    <>
      <button
        aria-label="Scroll to top"
        className={`group fixed bottom-6 right-6 p-4 rounded-full z-40 text-white transition-all duration-300 ease-in-out
                    ${
                      isVisible
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-90 pointer-events-none"
                    }
                    glass hover:bg-primary hover:text-white
                `}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} className="text-gray-500 group-hover:text-white" />
      </button>
    </>
  );
};

export default ScrollToTopBtn;
