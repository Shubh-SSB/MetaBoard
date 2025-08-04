import { type FC } from "react";
import { BASE_ASSETS_URL } from "@/constants/basePath";
import dayjs from "dayjs";
import { Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

type props = {
  data: any;
  showReadBtn?: boolean;
};

const ArticleHeroSection: FC<props> = ({ data, showReadBtn }) => {
  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${BASE_ASSETS_URL}/article-cover-images/${data?.coverImage})`,
          }}
        >
          <div className="absolute inset-0 glass bg-black/50"></div>
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center pb-12">
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
              </div>
            </div>
            {showReadBtn && (
              <Link
                href={`/article-details?id=${data?.id}`}
                className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 ripple-effect"
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
