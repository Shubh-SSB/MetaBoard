'use client';

import { type FC } from "react"
import { BASE_ASSETS_URL } from "@/constants"
import dayjs from "dayjs"
import { Clock, Facebook, Linkedin, Share, Share2, Twitter } from "lucide-react"
import Link from "next/link"

type props = {
    data: any;
    showReadBtn?: boolean;
}

const ArticleHeroSection: FC<props> = ({ data, showReadBtn }) => {

    const onShare = () => {
        const shareData = {
            title: data.title,
            text: data.description,
            url: window.location.href,
        };
        if (navigator.canShare(shareData)) {
            navigator.share(shareData);
        }
    }

    return (<>
        <section className="relative overflow-hidden py-10 sm:py-20">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BASE_ASSETS_URL}/article-cover-images/${data?.coverImage})` }}
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
                            <span className="text-red-500 font-medium">By {data?.author}</span>
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
                            {
                                data?.authorSocials?.facebook &&
                                <Link
                                    href={data?.authorSocials?.facebook}
                                    target="_blank"
                                >
                                    <div className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                                        <Facebook size={18} />
                                    </div>
                                </Link>

                            }
                            {
                                data?.authorSocials?.twitter &&
                                <Link
                                    href={data?.authorSocials?.twitter}
                                    target="_blank"
                                >
                                    <div className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                                        <Twitter size={18} />
                                    </div>
                                </Link>

                            }
                            {
                                data?.authorSocials?.linkedin &&
                                <Link
                                    href={data?.authorSocials?.linkedin}
                                    target="_blank"
                                >
                                    <div className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                                        <Linkedin size={18} />
                                    </div>
                                </Link>

                            }
                            {
                                <button
                                    onClick={onShare}
                                >
                                    <div className="glass hover:glass-hover p-2 rounded-full text-white hover:text-red-500 transition-colors">
                                        <Share2 size={18} />
                                    </div>
                                </button>

                            }
                        </div>
                    </div>
                    {
                        showReadBtn &&
                        <Link
                            href={`/article-details?id=${data?.id}`}
                            className="inline-block mt-8 bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 ripple-effect"
                        >
                            Read Full Story
                        </Link>
                    }

                </div>
            </div>
        </section>
    </>)
}

export default ArticleHeroSection;