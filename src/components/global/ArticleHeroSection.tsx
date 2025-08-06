"use client";

import { type FC, useEffect, useState } from "react";
import { BASE_ASSETS_URL } from "@/constants";
import dayjs from "dayjs";
import {
  Clock,
  Facebook,
  Linkedin,
  Share,
  Share2,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui";

type props = {
  data: any;
  showReadBtn?: boolean;
};

const ArticleHeroSection: FC<props> = ({ data, showReadBtn }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageUrl = data?.coverImage
    ? `${BASE_ASSETS_URL}/article-cover-images/${data.coverImage}`
    : "/assets/images/default-article-bg.jpg"; // fallback image

  useEffect(() => {
    // Preload the image to check if it exists
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = imageUrl;
  }, [imageUrl]);

  const onShare = async () => {
    try {
      const shareData = {
        title: data?.title || "Article",
        text: data?.description || "Check out this article",
        url: typeof window !== "undefined" ? window.location.href : "",
      };

      if (
        typeof navigator !== "undefined" &&
        navigator.canShare &&
        navigator.canShare(shareData)
      ) {
        await navigator.share(shareData);
      } else {
        // Fallback - copy to clipboard
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          await navigator.clipboard.writeText(shareData.url);
        }
      }
    } catch (error) {
      console.log("Share failed:", error);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden py-10 sm:py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-900"
          //   style={{
          //     backgroundImage:
          //       !imageError && imageLoaded
          //         ? `url(${imageUrl})`
          //         : "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
          //   }}
        >
          <div className="absolute inset-0 glass bg-black/50"></div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {data?.title}
            </h1>

            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              {data?.description}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4 text-gray-300">
                <span className="text-red-500 font-medium">
                  By {data?.author}
                </span>
                <span>•</span>
                <span>{dayjs(data?.publishedAt).format("DD MMMM YYYY")}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{data?.estimateReadTime} min</span>
                </div>
              </div>
              {/* 
                        {
                            console.log(data)
                        } */}
              <div className="flex items-center space-x-3">
                {data?.authorSocials?.facebook && (
                  <Link href={data?.authorSocials?.facebook} target="_blank">
                    <div className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                      <Facebook size={18} />
                    </div>
                  </Link>
                )}
                {data?.authorSocials?.twitter && (
                  <Link href={data?.authorSocials?.twitter} target="_blank">
                    <div className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                      <Twitter size={18} />
                    </div>
                  </Link>
                )}
                {data?.authorSocials?.linkedin && (
                  <Link href={data?.authorSocials?.linkedin} target="_blank">
                    <div className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                      <Linkedin size={18} />
                    </div>
                  </Link>
                )}
                {
                  <button title="share" onClick={onShare}>
                    <div className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                      <Share2 size={18} />
                    </div>
                  </button>
                }
              </div>
            </div>
            {showReadBtn && (
              <Link
                href={`/read-article?id=${data?.id}`}
                className="inline-block mt-8 bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 ripple-effect"
              >
                Read Full Story
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleHeroSection;
